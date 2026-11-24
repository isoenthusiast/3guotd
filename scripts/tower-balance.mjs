import assert from 'node:assert/strict'

export function checkTowerBalance(model, campaign, site) {
  const { createRound, buildTower, upgradeTower, startRound, tickRound, towerDetails, enemyDetails, enemyPosition, roundFormation, upgradePrice } = model
  const findMission = id => campaign.find(mission => mission.id === id)
  const attacker = (id, kind, health, progress) => ({ id, kind, health, progress, slowed: false })
  const column = (kind, health, positions) => positions.map((progress, id) => attacker(id, kind, health, progress))
  const cost = layout => layout.reduce((silver, [, kind]) => silver + towerDetails[kind].price, 0)
  const seed = (setup, enemies) => ({ ...startRound(setup), spawnTimer: 99, spawned: enemies.length, enemies })

  function encounter(missionId, support, layout, enemies, speed) {
    const mission = { ...findMission(missionId), waves: [{ name: 'Balance encounter', sequence: enemies.map(enemy => enemy.kind) }] }
    const budget = cost(layout)
    let opening = { ...createRound(20, mission, support), silver: budget, mission, totalWaves: 1 }
    for (const [towerSite, kind] of layout) {
      const next = buildTower(opening, towerSite, kind)
      assert.notEqual(next, opening, `${missionId}: invalid ${kind} site ${towerSite}`)
      opening = next
    }
    assert.equal(opening.silver, 0, 'The whole comparison budget must be spent before combat')
    let round = seed(opening, enemies)
    for (let tick = 0; round.phase === 'running' && tick < 1200; tick++) round = tickRound(round, speed)
    assert.notEqual(round.phase, 'running', 'Comparison ran out of time')
    assert.equal(round.waveStats.stopped + round.waveStats.escaped, enemies.length, 'Every attacker must resolve')
    assert.equal(round.lives, opening.lives - round.waveStats.escaped)
    return { leaks: round.waveStats.escaped, kills: round.waveStats.stopped, gateLives: round.lives }
  }

  const archerPrice = towerDetails.archer.price
  const archerChoices = [
    { mission: 'village-watch:1', label: 'reach down to the bend', existing: site(5, 9), extra: site(2, 1), kills: [0, 2, 0, 0] },
    { mission: 'jing:1', label: 'fast fire beside the approach', existing: site(5, 4), extra: site(1, 1), kills: [0, 0, 3, 0] },
    { mission: 'village-watch:1', label: 'another Archer at a separate firing point', existing: site(4, 3), extra: site(2, 1), kills: [0, 1, 1, 3] },
  ]
  for (const fixture of archerChoices) {
    const mission = findMission(fixture.mission)
    const initial = { ...createRound(20, mission), silver: 2 * archerPrice, lives: 20, totalWaves: 1 }
    const existing = buildTower(initial, fixture.existing, 'archer')
    assert.equal(existing.silver, archerPrice, 'Every option starts with the same purse and Archer')
    const choices = [
      existing,
      upgradeTower(existing, fixture.existing, 'reach'),
      upgradeTower(existing, fixture.existing, 'power'),
      buildTower(existing, fixture.extra, 'archer'),
    ]
    const branchCost = upgradePrice(existing.towers[0])
    assert.deepEqual(choices.map(choice => choice.silver), [archerPrice, archerPrice - branchCost, archerPrice - branchCost, 0])
    for (const speed of [1, 3]) {
      const kills = choices.map(choice => {
        let round = startRound(choice)
        for (let tick = 0; tick < 2400 && round.phase === 'running'; tick++) round = tickRound(round, speed)
        assert.equal(round.phase, 'won')
        assert.equal(round.waveStats.stopped + round.waveStats.escaped, roundFormation(round).sequence.length)
        return round.waveStats.stopped
      })
      assert.deepEqual(kills, fixture.kills, `${fixture.label} at ${speed}×`)
    }
  }
  console.log('Passed Archer bend, firing-lane, and second-site choices with equal starting silver at 1× and 3×.')

  const volleySite = site(5, 1)
  const volley = [
    ['packed', [0.15, 0.25, 0.35], [2, 3]],
    ['spaced', [0.15, 1.35, 2.55], [1, 1]],
  ].map(([condition, positions, expectedKills]) => ({
    mission: 'changban:3', condition, expectedKills, support: 'volley', enemies: column('infantry', 1, positions),
    baseline: [[volleySite, 'archer']], trial: [[volleySite, 'volley']],
  }))
  const changban = findMission('changban:3')
  const changbanSetup = createRound(20, changban, 'volley')
  const clustered = roundFormation(changbanSetup)
  const spaced = roundFormation({ ...changbanSetup, waveNumber: 2 })
  assert.deepEqual([clustered.spacing, spaced.spacing], ['Clustered', 'Spaced'])
  assert(clustered.interval < spaced.interval)
  assert.equal(changbanSetup.silver, createRound(20, changban, 'drum').silver)
  const layouts = ['archer', 'volley'].map(kind => [[volleySite, kind], [site(1, 7), 'archer']])
  assert.equal(cost(layouts[0]), cost(layouts[1]))
  const compareSpacing = (mission, waveNumber, speed) => layouts.map(layout => {
    // Allow the entire roster to resolve even when the deliberately small defense leaks.
    let round = { ...createRound(20, mission, 'volley'), waveNumber, totalWaves: waveNumber,
      lives: 20, silver: cost(layout), supportTower: 'volley' }
    for (const [towerSite, kind] of layout) round = buildTower(round, towerSite, kind)
    assert.equal(round.silver, 0)
    round = startRound(round)
    for (let tick = 0; round.phase === 'running' && tick < 2400; tick++) round = tickRound(round, speed)
    assert.equal(round.phase, 'won')
    assert.equal(round.waveStats.stopped + round.waveStats.escaped, roundFormation(round).sequence.length)
    return round.waveStats.stopped
  })
  for (const speed of [1, 3]) {
    assert.deepEqual(compareSpacing(changban, 1, speed), [1, 2], 'Volley wins the live clustered wave')
    assert.deepEqual(compareSpacing(changban, 2, speed), [8, 6], 'Archer wins the live spaced wave')
    const spacingOnly = { ...changban, id: 'spacing-fixture', waves: [{ ...clustered, interval: spaced.interval }] }
    assert.deepEqual(compareSpacing(spacingOnly, 1, speed), [6, 5], 'Spacing alone reverses the result')
  }
  console.log('Passed Changban Volley spacing at equal silver and 1×/3×, including a matched-roster spacing control.')

  const crossbow = [
    ['long exposure', site(2, 3), [0, 1]],
    ['short exposure', site(3, 1), [0, 0]],
  ].map(([condition, towerSite, expectedKills]) => ({
    mission: 'jing:5', condition, expectedKills, support: 'crossbow', enemies: column('veteran', 6, [0.4]),
    baseline: [[towerSite, 'archer']], trial: [[towerSite, 'crossbow']],
  }))
  const beaconSite = site(3, 1)
  const leadArcher = site(5, 1)
  const beacon = [
    ['weak second Archer site', beaconSite, [0, 1]],
    ['strong second Archer site', site(7, 1), [2, 1]],
  ].map(([condition, secondSite, expectedKills]) => ({
    mission: 'wuzhang:3', condition, expectedKills, support: 'beacon',
    enemies: [attacker(0, 'infantry', 3, 0.4), attacker(1, 'infantry', 1, 0)],
    baseline: [[leadArcher, 'archer'], [secondSite, 'archer']], trial: [[leadArcher, 'archer'], [beaconSite, 'beacon']],
  }))

  const rows = []
  for (const fixture of [...volley, ...crossbow, ...beacon]) {
    assert.equal(cost(fixture.baseline), cost(fixture.trial), 'Fixtures must spend equal silver')
    const compareAt = speed => {
      const results = {}
      for (const layout of ['baseline', 'trial']) {
        const result = encounter(fixture.mission, fixture.support, fixture[layout], fixture.enemies, speed)
        rows.push({ tower: fixture.support, condition: fixture.condition, speed: `${speed}×`,
          layout, silver: cost(fixture[layout]), ...result })
        results[layout] = result
      }
      return results
    }
    const summary = compareAt(1)
    const label = `${fixture.support} ${fixture.condition}`
    assert.deepEqual(summary, compareAt(3), `${label}: speed changed combat outcomes`)
    assert.deepEqual([summary.baseline.kills, summary.trial.kills], fixture.expectedKills, `${label}: kill totals changed`)
  }
  console.table(rows)

  const crossbowSetup = buildTower(createRound(20, findMission('jing:5'), 'crossbow'), site(2, 3), 'crossbow')
  const volleySetup = buildTower(createRound(20, findMission('changban:3'), 'volley'), volleySite, 'volley')
  const oneDrum = buildTower(createRound(), site(1, 0), 'drum')
  const stronger = upgradeTower(buildTower(oneDrum, site(3, 0), 'drum'), site(3, 0), 'power')
  const boundaryRoute = [[0, 1], [0, 2], [0, 3], [0, 4]]
  const boundaryMission = { ...findMission('changban:3'), routes: [boundaryRoute] }
  const boundaryDrum = buildTower({ ...createRound(), mission: boundaryMission }, site(0, 0), 'drum')
  const boundary = towerDetails.drum.range - 1
  assert.equal(enemyPosition(boundary, boundaryRoute)[1], towerDetails.drum.range,
    'Boundary sample must be exactly at range in floating-point arithmetic')
  for (const speed of [1, 3]) {
    const boltTies = tickRound(seed(crossbowSetup, column('veteran', 6, [1.4, 1.4])), speed)
    assert.deepEqual(boltTies.shots.map(shot => shot.targetId), [0], 'The earlier eligible enemy wins a Crossbow HP tie')
    const volleyTies = tickRound(seed(volleySetup, column('infantry', 4, [0.25, 0.25, 0.25, 0.25])), speed)
    assert.deepEqual(volleyTies.shots.map(shot => shot.targetId), [0, 1, 2], 'Volley caps tied targets in encounter order')

    const movement = 0.05 * enemyDetails({ kind: 'infantry' }).speed
    const delta = (setup, progress) => tickRound(seed(setup, column('infantry', 4, [progress])), speed).enemies[0].progress - progress
    const close = (actual, expected, label) => assert(Math.abs(actual - expected) < 1e-9, label)
    // An enemy starting exactly on the boundary is slowed during the first substep only.
    close(delta(boundaryDrum, boundary), movement * (towerDetails.drum.speedFactor + speed - 1), 'Drum range includes the boundary')
    close(delta(boundaryDrum, boundary + 0.0001), movement * speed, 'Drum has no effect just outside range')
    const strongestDelta = movement * speed * towerDetails.drum.strongerSpeedFactor
    close(delta(stronger, 0.15), strongestDelta, 'Overlapping Drums use the strongest effect without stacking')
    close(delta({ ...stronger, towers: [...stronger.towers].reverse() }, 0.15), strongestDelta, 'Drum overlap is order-independent')
  }
  console.log('Passed deterministic Crossbow and Volley ties, inclusive Drum boundary, and strongest-only Drum overlap at 1× and 3×.')
}
