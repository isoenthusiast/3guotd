import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const require = createRequire(import.meta.url)
const output = mkdtempSync(join(tmpdir(), '3guotd-round-'))
try {
  execFileSync(process.execPath, [
    require.resolve('typescript/bin/tsc'), '--ignoreConfig', '--target', 'es2022',
    '--module', 'commonjs', '--outDir', output, 'src/game/round.ts', 'src/game/campaign.ts',
  ], { stdio: 'inherit' })

  const {
    createRound, startRound, advanceRound, tickRound, canBuildAt, buildTower, upgradeTower, removeTower, retryRound,
    towerPrice, startingSilver, baseUpgradePrice, secondUpgradeSurcharge, towerRange, towerDetails,
    shotFlightTime, enemiesRemaining, enemyCount, enemyDetails, waveFormation, evacuatedGroups, roundFormation,
  } = require(join(output, 'round.js'))
  const { isBuildable, columns, rows, route, sitePosition } = require(join(output, 'board.js'))
  const site = (x, y) => y * columns + x
  const initial = createRound()
  assert.equal(startingSilver, 3 * towerPrice)
  for (const [x, y] of route) assert.equal(isBuildable(site(x, y)), false)
  assert.equal(buildTower(initial, site(2, 0), 'archer'), initial)

  const built = buildTower(initial, site(1, 0), 'archer')
  assert.equal(built.silver, startingSilver - towerPrice)
  assert.equal(buildTower(built, site(1, 0), 'drum'), built)
  for (const kind of ['archer', 'drum']) {
    for (const [first, second] of [['reach', 'power'], ['power', 'reach']]) {
      const tower = buildTower(initial, 0, kind)
      const once = upgradeTower(tower, 0, first)
      assert.equal(once.silver, tower.silver - baseUpgradePrice)
      assert.equal(upgradeTower(once, 0, first), once)
      const twice = upgradeTower(once, 0, second)
      assert.equal(twice.silver, once.silver - baseUpgradePrice - secondUpgradeSurcharge)
      assert.ok(twice.towers[0].reach && twice.towers[0].power)
      assert.deepEqual(removeTower(twice, 0), initial)
    }
    assert.ok(towerRange(kind, true) > towerRange(kind, false))
  }

  const seeded = startRound(built)
  for (const speed of [2, 3]) {
    let expected = seeded
    for (let step = 0; step < speed; step++) expected = advanceRound(expected, 0.05)
    assert.deepEqual(tickRound(seeded, speed), { ...expected, waveAge: 0.05 })
  }
  const cue = { ...seeded, impacts: [{ at: [2, 1], elapsed: 0, silver: 7 }] }
  for (const speed of [1, 3]) {
    let visible = cue
    for (let step = 0; step < 12; step++) visible = tickRound(visible, speed)
    assert.ok(visible.impacts.some(hit => hit.silver === 7))
  }
  assert.notDeepEqual(waveFormation(1).sequence, waveFormation(2).sequence)
  assert.notDeepEqual(waveFormation(2).sequence, waveFormation(3).sequence)
  let combat = seeded
  assert.equal(enemiesRemaining(combat), enemyCount)
  for (let step = 0; step < 120 && combat.shots.length === 0; step++) {
    combat = advanceRound(combat, 0.05)
  }
  const [firstShot] = combat.shots
  assert.ok(firstShot)
  const targetHealth = () => combat.enemies.find(enemy => enemy.id === firstShot.targetId).health
  const fullHealth = targetHealth()
  combat = advanceRound(combat, shotFlightTime / 2)
  assert.equal(targetHealth(), fullHealth, 'Health must wait until impact')
  combat = advanceRound(combat, shotFlightTime / 2)
  assert.equal(targetHealth(), fullHealth - 1)
  assert.equal(combat.impacts.length, 1)
  const upgradedMidWave = upgradeTower(combat, site(1, 0), 'power')
  assert.ok(upgradedMidWave.towers[0].power)
  assert.deepEqual(retryRound(upgradedMidWave), built)

  for (const upgraded of [false, true]) {
    const archerSite = site(1, 1)
    const base = buildTower(initial, archerSite, 'archer')
    let cadence = tickRound(startRound(upgraded ? upgradeTower(base, archerSite, 'power') : base), 1)
    assert.ok(cadence.shots.some(shot => shot.elapsed === 0))
    let ticks = 0
    do {
      cadence = tickRound(cadence, 1)
      ticks++
    } while (!cadence.shots.some(shot => shot.elapsed === 0) && ticks < 30)
    assert.equal(ticks, Math.round((upgraded
      ? towerDetails.archer.fasterShotInterval : towerDetails.archer.shotInterval) * 20))
  }

  const layout = (placements, waves = 20) => placements.reduce((round, [x, y, kind]) =>
    buildTower(round, site(x, y), kind), createRound(waves))
  const spentPurseOpening = layout([[1, 0, 'archer'], [1, 1, 'archer'], [1, 2, 'archer']])
  let round = startRound(spentPurseOpening)
  assert.equal(round.silver, 0)
  assert.equal(buildTower(round, 0, 'drum'), round)
  const rewards = new Set()
  let sawSlow = false
  let sawRunner = false
  let completed = 0
  while (round.phase === 'running' && round.waveNumber === 1 && completed++ < 1200) {
    const next = advanceRound(round, 0.05)
    if (next.waveNumber === round.waveNumber) assert.ok(enemiesRemaining(next) <= enemiesRemaining(round))
    if (next.silver > round.silver) {
      for (const hit of next.impacts) if (hit.silver) rewards.add(hit.silver)
    }
    round = next
    if (round.silver >= towerPrice && round.towers.length === 3) {
      round = buildTower(round, site(1, 3), 'drum')
    }
    sawSlow ||= round.enemies.some(enemy => enemy.slowed)
    sawRunner ||= round.enemies.some(enemy => enemyDetails(enemy).runner)
  }
  assert.ok(round.waveNumber > 1 || round.phase === 'lost')
  assert.equal(round.towers.length, 4, 'Kill rewards can buy a fourth tower')
  assert.ok(rewards.has(7) && rewards.has(12), 'Payout must differ by level')
  assert.ok(sawSlow && sawRunner, 'Runners enter the wave and a Drum slows attackers')
  const restored = retryRound(startRound(spentPurseOpening))
  assert.deepEqual(restored, spentPurseOpening)
  const refunded = removeTower(restored, site(1, 1))
  assert.equal(refunded.silver, towerPrice)
  const revised = buildTower(refunded, site(1, 3), 'drum')
  assert.equal(revised.silver, 0)
  assert.ok(revised.towers.some(tower => tower.site === site(1, 3) && tower.kind === 'drum'))
  assert.deepEqual(retryRound(startRound(revised)), revised)

  const opening = [[1, 0, 'archer'], [1, 1, 'drum'], [1, 2, 'archer']]
  let mixed = startRound(layout(opening))
  for (let step = 0; step < 1200 && mixed.phase === 'running' && mixed.waveNumber === 1; step++) {
    mixed = advanceRound(mixed, 0.05)
    if (mixed.silver >= towerPrice && mixed.towers.length === 3) {
      mixed = buildTower(mixed, site(1, 3), 'archer')
    }
    if (mixed.towers.length === 4 && mixed.silver >= baseUpgradePrice) {
      const archer = mixed.towers.find(tower => tower.kind === 'archer' && !tower.power)
      if (archer) mixed = upgradeTower(mixed, archer.site, 'power')
    }
  }
  assert.ok(mixed.waveNumber > 1 || mixed.phase === 'won', 'A mixed opening with reinvestment must be viable')

  let continuous = startRound({ ...layout(opening, 20), enemies: [], spawned: enemyCount })
  continuous = tickRound(continuous, 1)
  assert.equal(continuous.phase, 'running')
  assert.equal(continuous.waveNumber, 2)
  assert.equal(continuous.towers.length, 3)
  assert.equal(continuous.previousWave.waveNumber, 1)
  assert.equal(retryRound(continuous).waveNumber, 2)
  assert.equal(tickRound({ ...continuous, waveNumber: 20, spawned: enemyCount }, 1).phase, 'won')

  let breachAtTransition = startRound(layout([[1, 0, 'archer'], [1, 1, 'archer'], [3, 2, 'archer']]))
  for (let step = 0; step < 600 && breachAtTransition.phase === 'running'
    && breachAtTransition.waveNumber === 1; step++) {
    breachAtTransition = tickRound(breachAtTransition, 1)
  }
  assert.equal(breachAtTransition.waveNumber, 2)
  assert.equal(breachAtTransition.gateHit.kind, 'veteranRunner')
  assert.equal(breachAtTransition.waveAge, 0)
  assert.equal(breachAtTransition.previousWave.escaped, 1)

  const { battles, campaign, changban, isMissionUnlocked, nextMission } = require(join(output, 'campaign.js'))
  const chapter = createRound(20, changban)
  assert.equal(chapter.totalWaves, 3)
  assert.equal(evacuatedGroups(chapter), 0)
  let story = startRound([
    [1, 0, 'archer'], [1, 1, 'drum'], [1, 2, 'archer'],
  ].reduce((round, [x, y, kind]) => buildTower(round, site(x, y), kind), chapter))
  for (let step = 0; step < 2400 && story.phase === 'running'; step++) {
    story = tickRound(story, 1)
    if (story.phase !== 'running') break
    if (story.silver >= towerPrice && story.towers.length === 3) {
      story = buildTower(story, site(1, 3), 'archer')
    }
    const retried = retryRound(story)
    assert.equal(evacuatedGroups(retried), story.waveNumber - 1)
    assert.equal(retried.mission, changban)
  }
  assert.equal(story.phase, 'won', 'Changban must be playable with both tower roles')
  assert.equal(evacuatedGroups(story), 3)
  assert.equal(evacuatedGroups(retryRound(story)), 2)
  const finalWave = startRound({ ...chapter, waveNumber: 3, lives: 1 })
  const finalCount = roundFormation(finalWave).sequence.length
  const lastGroup = tickRound({ ...finalWave, spawned: finalCount }, 1)
  assert.equal(lastGroup.phase, 'won')
  assert.equal(evacuatedGroups(lastGroup), 3)
  const gateRunner = { id: 0, kind: 'runner', progress: route.length - 1.01, health: 3, slowed: false }
  const lastLifeLost = tickRound({ ...finalWave, spawned: finalCount, enemies: [gateRunner] }, 1)
  assert.equal(lastLifeLost.phase, 'lost')
  assert.equal(evacuatedGroups(lastLifeLost), 2)
  assert.equal(evacuatedGroups(retryRound(lastLifeLost)), 2)

  assert.equal(battles.length, 6)
  assert.equal(campaign.length, 30)
  assert.equal(new Set(campaign.map(mission => mission.id)).size, campaign.length)
  assert.equal(new Set(battles.map(battle => JSON.stringify(battle.routes))).size, 6)
  assert.equal(isMissionUnlocked(changban, []), false)
  assert.equal(isMissionUnlocked(changban, ['village-watch:5']), true)
  assert.equal(nextMission(campaign[4]).id, changban.id)
  assert.equal(nextMission(campaign.at(-1)), undefined)
  for (const battle of battles) {
    for (const path of battle.routes) {
      assert.equal(path[0][1], 0)
      assert.equal(path.at(-1)[1], rows - 1)
      for (const [index, [x, y]] of path.entries()) {
        assert.ok(x >= 0 && x < columns && y >= 0 && y < rows)
        assert.equal(isBuildable(site(x, y), battle.routes), false)
        if (index > 0) {
          const [prevX, prevY] = path[index - 1]
          assert.equal(Math.abs(x - prevX) + Math.abs(y - prevY), 1)
        }
      }
    }
  }
  const docks = createRound(20, campaign.find(mission => mission.id === 'red-cliffs:1'))
  let arrivals = startRound(docks)
  for (let tick = 0; tick < 40; tick++) arrivals = tickRound(arrivals, 1)
  assert.deepEqual(arrivals.enemies.map(enemy => enemy.routeIndex), [0, 1])

  const retreat = createRound(20, campaign.find(mission => mission.id === 'yiling:1'))
  let closure = startRound(buildTower(retreat, columns, 'archer'))
  closure = tickRound({ ...closure, spawned: roundFormation(closure).sequence.length }, 1)
  assert.equal(closure.waveNumber, 2)
  assert.equal(closure.towers.length, 0)
  assert.equal(closure.silver, startingSilver)
  assert.equal(canBuildAt(closure, columns), false)
  assert.equal(buildTower(retryRound(closure), columns, 'archer').towers.length, 0)
  assert.equal(closure.rebuildTime, 5)
  closure = buildTower(closure, 0, 'drum')
  assert.equal(closure.towers.length, 1, 'Can rebuild with the refund before attackers arrive')
  for (let frame = 0; frame < 100; frame++) {
    assert.equal(closure.spawned, 0)
    closure = tickRound(closure, 3)
  }
  assert.equal(closure.rebuildTime, 0)
  assert.equal(closure.spawned, 0)
  assert.equal(tickRound(closure, 3).spawned, 1)


  const clearedIds = []
  for (const mission of campaign) {
    assert.ok(isMissionUnlocked(mission, clearedIds))
    let level = createRound(20, mission)
    assert.equal(level.totalWaves, mission.level + 2)
    assert.equal(mission.waves.at(-1).sequence.includes('commander'), mission.level === 5)
    const score = cell => {
      const [x, y] = sitePosition(cell)
      return mission.routes.reduce((sum, path) =>
        sum + path.reduce((coverage, [rx, ry], index) => coverage
          + (Math.hypot(rx - x, ry - y) <= 1.8 ? 1 + (path.length - index) / path.length * 0.3 : 0), 0), 0)
    }
    const sites = Array.from({ length: columns * rows }, (_, cell) => cell)
      .filter(cell => canBuildAt(level, cell)).sort((a, b) => score(b) - score(a))
    sites.slice(0, 3).forEach((cell, index) => {
      level = buildTower(level, cell, index === 1 ? 'drum' : 'archer')
    })
    level = startRound(level)
    for (let step = 0; step < 6500 && level.phase === 'running'; step++) {
      level = tickRound(level, 3)
      if (level.phase !== 'running') break
      if (level.silver >= towerPrice && level.towers.length < 9) {
        const cell = sites.find(candidate => canBuildAt(level, candidate)
          && !level.towers.some(tower => tower.site === candidate))
        if (cell !== undefined) level = buildTower(level, cell, 'archer')
      }
      if (level.towers.length >= 6 && level.silver >= baseUpgradePrice) {
        const archer = level.towers.find(tower => tower.kind === 'archer' && !tower.power && !tower.reach)
        if (archer) level = upgradeTower(level, archer.site, 'power')
      }
    }
    assert.equal(level.phase, 'won', `${mission.id} has a viable tower layout`)
    assert.equal(evacuatedGroups(level), mission.milestoneCount)
    clearedIds.push(mission.id)
  }
  console.log('Passed: 30 campaign clears, route geometry, sequential unlocks, alternating routes, and site closures.')

  let undefended = startRound(initial)
  for (let step = 0; step < 1200 && undefended.phase === 'running'; step++) {
    undefended = advanceRound(undefended, 0.05)
  }
  assert.equal(undefended.phase, 'lost')
  assert.equal(undefended.waveStats.escaped, 3)
  assert.ok(undefended.waveStats.runnersEscaped > 0)
  assert.ok(undefended.gateHit)
  assert.equal(undefended.silver, startingSilver, 'Escaped attackers do not pay rewards')
  console.log('Passed: placement, economy, both upgrade orders, kill rewards, slowing, shots, wave transitions, speed, and retry.')
} finally {
  rmSync(output, { recursive: true, force: true })
}
