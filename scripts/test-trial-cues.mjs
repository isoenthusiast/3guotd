import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
try {
  const page = await browser.newPage({ viewport: { width: 320, height: 480 } })
  // Vite development origin exposes the production renderer and simulation as modules.
  await page.goto(process.argv[2] ?? 'http://localhost:5173/')
  const results = await page.evaluate(async () => {
    const { drawBattlefield, loadBattlefieldArt } = await import('/src/game-art.ts')
    const { campaign } = await import('/src/game/campaign.ts')
    const { createRound, startRound, tickRound, buildTower } = await import('/src/game/round.ts')
    await loadBattlefieldArt()
    document.body.innerHTML = '<canvas width="576" height="832" style="width:225px"></canvas>'
    const ctx = document.querySelector('canvas').getContext('2d')
    const strokes = []
    const health = []
    const bars = []
    const labels = []
    const stroke = ctx.stroke.bind(ctx)
    const fillRect = ctx.fillRect.bind(ctx)
    ctx.stroke = (...args) => {
      if (['#fff1a2', '#ffc7a8', '#b5efff', '#dcf6ec'].includes(ctx.strokeStyle)) {
        const { e, f } = ctx.getTransform()
        strokes.push([ctx.strokeStyle, e, f])
      }
      return stroke(...args)
    }
    ctx.fillRect = (...args) => {
      if (ctx.fillStyle === '#e8f69b') health.push([strokes.length, ...args])
      if (ctx.fillStyle === '#20291fed') labels.push(args)
      if (ctx.fillStyle === '#262827' && args[2] === 50 && args[3] === 12) bars.push([args[0] + 25, args[1] + 6])
      return fillRect(...args)
    }
    const cases = [
      { chapter: 'changban:3', kind: 'volley', site: 14, routeProgress: [0.15, 0.25, 0.35, 4], health: [4, 3, 4, 3], color: '#fff1a2' },
      { chapter: 'jing:5', kind: 'crossbow', site: 29, routeProgress: [1.4, 1.4, 1.4], health: [3, 6, 10], color: '#ffc7a8' },
      { chapter: 'wuzhang:3', kind: 'beacon', site: 16, routeProgress: [0.15], health: [4], color: '#b5efff' },
      { chapter: 'changban:3', kind: 'volley', site: 94, natural: true, color: '#fff1a2' },
    ]
    return cases.map(({ chapter, kind, site, routeProgress, health: hp = [], color, natural }) => {
      const mission = campaign.find(mission => mission.id === chapter)
      let setup = buildTower(createRound(20, mission, kind), site, kind)
      if (kind === 'beacon') setup = buildTower(setup, 17, 'archer')
      let round = natural ? startRound({ ...setup, waveNumber: 5 }) : { ...startRound(setup), spawnTimer: 99, spawned: routeProgress.length,
        enemies: routeProgress.map((progress, id) => ({
          id, kind: ['infantry', 'runner', 'veteran', 'bowman'][id], progress,
          routeIndex: kind === 'crossbow' && id === 2 ? 1 : 0, health: hp[id], slowed: false,
        })) }
      if (kind === 'beacon') {
        const carriedDrum = buildTower(createRound(20, mission), 14, 'drum').towers[0]
        round = tickRound({ ...round, towers: [...round.towers, carriedDrum] }, 1)
      } else for (let frame = 0; frame < (natural ? 163 : 7); frame++) round = tickRound(round, 1)
      return { kind, towers: round.towers.length, hits: round.impacts.map(hit => [hit.cue, hit.targetId]),
        losses: natural ? [] : round.enemies.map(enemy => hp[enemy.id] - enemy.health),
        expectedPositions: round.impacts.map(({ at: [x, y] }) => [32 + 64 * x, 42 + 64 * y]),
        renders: [false, true].map(reducedMotion => {
          strokes.length = 0
          health.length = 0
          bars.length = 0
          labels.length = 0
          drawBattlefield(ctx, round, null, { timeSeconds: 0, reducedMotion, reducedEffects: reducedMotion })
          return { cues: strokes.filter(([strokeColor]) => strokeColor === color).map(([, x, y]) => [x, y]),
            slow: strokes.some(([strokeColor]) => strokeColor === '#dcf6ec'),
            bars: [...bars], labels: [...labels], healthAboveEffects: health.length > 0 && health.every(([before]) => before === strokes.length) }
        }),
      }
    })
  })
  const [volley, bolt, beacon, natural] = results
  assert.deepEqual(volley.hits, [['volley', 0], ['volley', 1], ['volley', 2]])
  assert.deepEqual(volley.losses, [1, 1, 1, 0])
  assert.deepEqual(bolt.hits, [['crossbow', 1]])
  assert.deepEqual(bolt.losses, [0, 3, 0])
  for (const trial of [volley, bolt]) {
    for (const render of trial.renders) {
      const points = trial.kind === 'volley' ? trial.hits.map(([, id]) => render.bars[id]) : trial.expectedPositions
      assert.equal(render.cues.length, points.length)
      if (trial.kind === 'volley') {
        for (const [x, y] of points) assert.equal(points.filter(([otherX, otherY]) =>
          Math.abs(x - otherX) < 50 && Math.abs(y - otherY) < 12).length, 1)
      }
      render.cues.forEach(([x, y], i) => {
        const [expectedX, expectedY] = points[i]
        assert(Math.hypot(x - expectedX, y - expectedY) < 0.01)
      })
      assert(render.healthAboveEffects)
    }
  }
  assert.equal(beacon.towers, 3)
  for (const render of beacon.renders) assert(render.cues.length && render.slow && render.healthAboveEffects)
  assert.deepEqual(natural.hits.map(([, id]) => id), [1, 2])
  for (const render of natural.renders) {
    assert.equal(render.cues.length, 2)
    const [first, second] = render.cues
    assert(Math.abs(first[1] - second[1]) >= 20.99)
    for (const [x, y] of render.cues) {
      assert(!render.labels.some(([left, top, width, height]) =>
        x + 38 > left && x - 38 < left + width && y + 10 > top && y - 10 < top + height))
    }
  }
  console.log('All three trial cues matched simulation targets at 1×. Static reduced-motion cues and foreground HP verified at a 320 px phone viewport.')
} finally {
  await browser.close()
}
