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
    '--module', 'commonjs', '--outDir', output, 'src/game/round.ts', 'src/game/campaign.ts', 'src/game/save-game.ts',
  ], { stdio: 'inherit' })

  const {
    createRound, startRound, advanceRound, tickRound, canBuildAt, buildTower, upgradeTower, removeTower, retryRound,
    towerPrice, startingSilver, baseUpgradePrice, secondUpgradeSurcharge, towerRange, towerDetails,
    shotFlightTime, enemiesRemaining, enemyCount, enemyDetails, waveFormation, evacuatedGroups, roundFormation, roundRoutes,
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
  assert.equal(tickRound({ ...continuous, waveNumber: 20, spawned: waveFormation(20).sequence.length }, 1).phase, 'won')

  let breachAtTransition = startRound(layout([[1, 0, 'archer'], [1, 1, 'archer'], [3, 2, 'archer']]))
  for (let step = 0; step < 600 && breachAtTransition.phase === 'running'
    && breachAtTransition.waveNumber === 1; step++) {
    breachAtTransition = tickRound(breachAtTransition, 1)
  }
  assert.equal(breachAtTransition.waveNumber, 2)
  assert.equal(breachAtTransition.gateHit.kind, 'veteranRunner')
  assert.equal(breachAtTransition.waveAge, 0)
  assert.equal(breachAtTransition.previousWave.escaped, 1)

  const { battles, campaign, isMissionUnlocked, nextMission } = require(join(output, 'campaign.js'))
  const { changban } = require(join(output, 'legacy-campaign.js'))
  const chapter = { ...createRound(20, changban), mission: changban, rulesVersion: undefined }
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
  assert.equal(isMissionUnlocked(campaign[5], []), false)
  assert.equal(isMissionUnlocked(campaign[5], ['village-watch:5']), true)
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
  let closure = startRound(buildTower(retreat, 19, 'archer'))
  closure = tickRound({ ...closure, spawned: roundFormation(closure).sequence.length }, 1)
  assert.equal(closure.waveNumber, 2)
  assert.equal(closure.towers.length, 0)
  assert.equal(closure.silver, startingSilver)
  assert.equal(canBuildAt(closure, 19), false)
  assert.equal(buildTower(retryRound(closure), 19, 'archer').towers.length, 0)
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


  // Deterministic legal-input policies, with no grants, skipped waves or altered stats.
  const rankedSites = (level, coverageOnly = false) => {
    const score = cell => {
      const [x, y] = sitePosition(cell)
      return roundRoutes(level).reduce((sum, path) => sum + path.reduce((coverage, [rx, ry], index) =>
        coverage + (Math.hypot(rx - x, ry - y) <= 1.8
          ? 1 + (coverageOnly ? 0 : (path.length - index) / path.length * 0.3) : 0), 0), 0)
    }
    return Array.from({ length: columns * rows }, (_, cell) => cell)
      .filter(cell => canBuildAt(level, cell)).sort((a, b) => score(b) - score(a))
  }
  function playMission(mission, policy = {}) {
    let level = createRound(policy.waves ?? 20, mission)
    const sites = rankedSites(level, policy.coverageOnly)
    sites.slice(0, 3).forEach((cell, index) => {
      level = buildTower(level, cell, index === (policy.drumIndex ?? 1) ? 'drum' : 'archer')
    })
    level = startRound(level)
    for (let step = 0; step < 14000 && level.phase === 'running'; step++) {
      level = tickRound(level, 3)
      if (level.phase !== 'running' || policy.fixed || level.waveNumber > (policy.freezeAfter ?? Infinity)) continue
      const beforePurchase = level.silver
      const drum = level.towers.find(tower => tower.kind === 'drum' && !tower.reach)
      const strongerDrum = policy.strong && level.towers.find(tower => tower.kind === 'drum' && !tower.power)
      const archer = level.towers.find(tower => tower.kind === 'archer' && !tower.power)
      const shouldUpgrade = policy.upgrade && level.towers.length >= (policy.minimum ?? 3)
      if (shouldUpgrade && drum) level = upgradeTower(level, drum.site, 'reach')
      else if (shouldUpgrade && strongerDrum) level = upgradeTower(level, strongerDrum.site, 'power')
      else if (shouldUpgrade && archer) level = upgradeTower(level, archer.site, 'power')
      else if (level.silver >= towerPrice && level.towers.length < columns * rows) {
        const cell = sites.find(candidate => canBuildAt(level, candidate)
          && !level.towers.some(tower => tower.site === candidate))
        if (cell !== undefined) level = buildTower(level, cell,
          policy.drumIndex !== -1 && level.towers.length % (policy.spacing ?? 4) === 1 ? 'drum' : 'archer')
      }
      if (level.silver < beforePurchase) policy.events?.push({ wave: level.waveNumber, step })
    }
    return level
  }
  const clearedIds = []
  // Fixed witnesses: [opening Drum rank, spacing between Drums, towers before upgrades, stronger slow].
  // A failed witness is a regression, rather than a search for a different winning policy.
  const plans = {
    'village-watch:2': [0, 4, 9], 'village-watch:3': [1, 5, 3],
    'village-watch:4': [2, 4, 3, true], 'village-watch:5': [1, 5, 3, true],
    'changban:2': [0, 3, 7], 'changban:4': [0, 4, 5], 'changban:5': [0, 4, 3],
    'jing:4': [0, 4, 3], 'jing:5': [0, 4, 3],
    'yiling:2': [0, 3, 5], 'yiling:3': [0, 4, 7],
    'yiling:4': [0, 4, 7, true], 'yiling:5': [1, 4, 7],
    'wuzhang:4': [0, 3, 7, true], 'wuzhang:5': [0, 3, 9],
  }
  for (const mission of campaign) {
    assert.ok(isMissionUnlocked(mission, clearedIds))
    assert.equal(mission.waves.length, mission.level + 2)
    assert.equal(mission.waves.at(-1).sequence.includes('commander'), mission.level === 5)
    const [drumIndex, spacing, minimum, strong = false] = plans[mission.id] ?? [0, 3, 3]
    const winner = playMission(mission, { drumIndex, spacing, minimum, strong, upgrade: true })
    assert.equal(winner.phase, 'won', `${mission.id} has a viable mixed strategy`)
    assert.equal(evacuatedGroups(winner), mission.milestoneCount)
    clearedIds.push(mission.id)
    console.log(`Clear: ${mission.id} (${winner.lives} lives)`)
  }
  console.log('Passed: 30 campaign clears, route geometry, sequential unlocks, alternating routes, and site closures.')

  const archerFailures = campaign.filter(mission =>
    playMission(mission, { drumIndex: -1, coverageOnly: true }).phase === 'lost')
  const fixedFailures = campaign.filter(mission => mission.battleId === 'village-watch'
    && playMission(mission, { fixed: true, coverageOnly: true }).phase === 'lost')
  console.log('Archer baseline loses:', archerFailures.map(mission => mission.id).join(', '))
  console.log('Fixed Village opening loses:', fixedFailures.map(mission => mission.id).join(', '))
  assert.ok(archerFailures.some(mission => mission.level >= 3), 'Archer spam must fail later campaign levels')
  assert.ok(new Set(archerFailures.filter(mission => mission.level >= 3).map(mission => mission.battleId)).size >= 3,
    'Archer baseline must fail later levels in at least three chapters')
  assert.ok(fixedFailures.some(mission => mission.level >= 3), 'Village Watch must require reinvestment')
  assert.equal(playMission(campaign[0], { fixed: true, coverageOnly: true }).phase, 'won',
    'The first Village Watch mission remains forgiving')
  for (const battle of battles) {
    const levels = campaign.filter(mission => mission.battleId === battle.id)
    assert.notDeepEqual(levels[0].routes, levels[2].routes, `${battle.id} changes an approach before setup`)
    assert.match(levels[2].objective, /New approach/)
  }
  assert.equal(new Set(campaign.filter(mission => mission.level === 5)
    .map(mission => JSON.stringify(mission.waves))).size, 6, 'Chapter schedules must differ')

  const longPolicy = { drumIndex: 1, spacing: 3, upgrade: true }
  for (const waves of [20, 40]) {
    const events = []
    const winner = playMission(null, { ...longPolicy, waves, events })
    assert.equal(winner.phase, 'won', `Long ${waves} has a viable mixed strategy`)
    assert.ok(events.at(-1).wave >= waves - 1, 'Reinvestment remains useful near the end')
    const frozen = playMission(null, { ...longPolicy, waves, freezeAfter: 3 })
    assert.equal(frozen.phase, 'lost', 'Long battles punish stopping investment after the opening')
    console.log(`Long ${waves}: won; last purchase wave ${events.at(-1).wave}; frozen opening lost wave ${frozen.waveNumber}`)
  }
  assert.ok(waveFormation(40).healthBonus > waveFormation(20).healthBonus)
  assert.ok(waveFormation(40).interval * waveFormation(40).sequence.length < 9 * 1.65,
    'Late formations increase pressure without extending their spawn duration')

  const local = new Map()
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: {
    getItem: key => local.get(key) ?? null,
    setItem: (key, value) => local.set(key, value),
  } })
  const { loadGame, saveGame, loadSound, saveSound } = require(join(output, 'save-game.js'))
  assert.equal(loadGame(), null)
  assert.equal(loadSound(), false)
  saveSound(true)
  assert.equal(loadSound(), true)
  saveSound(false)
  assert.equal(loadSound(), false)
  for (const run of [arrivals, closure, startRound(createRound(60)), breachAtTransition]) {
    assert.equal(saveGame(run, 3), true)
    assert.deepEqual(loadGame(), { round: run, speed: 3 })
  }
  const { campaign: legacyCampaign } = require(join(output, 'legacy-campaign.js'))
  // Unversioned snapshots retain the original schedule and geometry throughout resume/retry.
  for (const mission of [...legacyCampaign, null]) {
    let legacy = { ...createRound(40, mission), mission }
    delete legacy.rulesVersion
    legacy = startRound(legacy)
    for (let tick = 0; tick < 40; tick++) legacy = tickRound(legacy, 1)
    assert.equal(saveGame(legacy, 2), true)
    const resumed = loadGame().round
    assert.deepEqual(resumed, legacy)
    assert.equal(retryRound(resumed).mission, mission)
    const transition = tickRound({ ...resumed, enemies: [], shots: [], spawned: roundFormation(resumed).sequence.length }, 1)
    assert.equal(transition.waveNumber, 2)
    assert.equal(transition.rulesVersion, undefined)
    assert.equal(transition.mission, mission)
    const restarted = createRound(resumed.totalWaves, resumed.mission)
    assert.equal(restarted.rulesVersion, 2)
    assert.equal(restarted.mission, mission ? campaign.find(level => level.id === mission.id) : null)
    if (mission) {
      assert.equal(nextMission(mission), nextMission(restarted.mission))
      assert.equal(isMissionUnlocked(mission, [mission.id]), true)
    }
    delete transition.rulesVersion // JSON omits optional undefined fields.
    saveGame(transition, 3)
    assert.deepEqual(loadGame(), { round: transition, speed: 3 })
  }
  assert.equal(nextMission({ ...campaign[0], id: 'unknown' }), undefined)
  console.log('Passed: legacy saves resume/retry with old rules, restart with current rules, and navigate by mission ID.')
  const malformed = JSON.parse(local.get('3guotd.saved-game.v1'))
  malformed.round.phase = ['running']
  local.set('3guotd.saved-game.v1', JSON.stringify(malformed))
  assert.equal(loadGame(), null, 'Save phases must be exact strings')
  local.set('3guotd.saved-game.v1', '{"version":1,"missionId":null,"round":{},"speed":1}')
  assert.equal(loadGame(), null, 'Incomplete snapshots must be refused')
  local.set('3guotd.saved-game.v1', '{"version":2}')
  assert.equal(loadGame(), null, 'Unknown format must be refused')

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
