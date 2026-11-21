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
    '--module', 'commonjs', '--outDir', output, 'src/game/round.ts',
  ], { stdio: 'inherit' })

  const { createRound, toggleTower, advanceRound, enemiesRemaining, enemyCount, retryRound, enemyMaxHealth, shotFlightTime, towerSites, towerBudget } =
    require(join(output, 'round.js'))
  let combat = { ...toggleTower(createRound(), 0), phase: 'running' }
  assert.equal(enemiesRemaining(combat), enemyCount, 'Enemies yet to spawn must count')
  combat = advanceRound(combat, 0.05)
  assert.equal(combat.spawned, 1)
  assert.equal(enemiesRemaining(combat), enemyCount, 'Spawning does not reduce the remaining count')
  for (let step = 0; step < 120 && combat.shots.length === 0; step++) {
    combat = advanceRound(combat, 0.05)
  }
  const [shot] = combat.shots
  assert.ok(shot, 'An attacker in range must draw fire')
  const targetHealth = () => combat.enemies.find(enemy => enemy.id === shot.targetId).health
  assert.equal(targetHealth(), enemyMaxHealth, 'A launch must preserve the target health')
  combat = advanceRound(combat, shotFlightTime / 2)
  assert.equal(targetHealth(), enemyMaxHealth, 'The projectile must stay visible before dealing damage')
  assert.ok(combat.shots.some(flying => flying.targetId === shot.targetId))
  combat = advanceRound(combat, shotFlightTime / 2)
  assert.equal(targetHealth(), enemyMaxHealth - 1, 'An impact must remove one health point')
  assert.equal(combat.impacts.length, 1, 'A hit must produce visible feedback')
  assert.equal(combat.shots.length, 0, 'A projectile must disappear after the hit')
  assert.deepEqual(retryRound(combat), toggleTower(createRound(), 0),
    'Retry clears combat state but preserves the tower site')

  let layouts = 0
  let wins = 0
  let losses = 0
  let sawKill = false
  let sawEscape = false
  for (let mask = 0; mask < 2 ** towerSites.length; mask++) {
    const sites = towerSites.map((_, site) => site).filter(site => mask & (1 << site))
    if (sites.length > towerBudget) continue

    let round = { ...sites.reduce(toggleTower, createRound()), phase: 'running' }
    for (let step = 0; step < 1200 && round.phase === 'running'; step++) {
      const next = advanceRound(round, 0.05)
      const removed = enemiesRemaining(round) - enemiesRemaining(next)
      assert.ok(removed >= 0, 'Pending spawns and live enemies must decline only when resolved')
      if (removed > 0 && next.lives === round.lives) sawKill = true
      if (next.lives < round.lives) {
        assert.ok(removed >= round.lives - next.lives, 'Escaped enemies also stop counting')
        sawEscape = true
      }
      round = next
    }
    assert.ok(['won', 'lost'].includes(round.phase), `Layout ${sites} must finish`)
    if (sites.length === towerBudget) {
      if (round.phase === 'won') wins++
      else losses++
    }
    layouts++
  }
  assert.ok(sawKill && sawEscape, 'Exercise both ways enemies leave the remaining count')
  assert.ok(wins >= 2, 'Players must have multiple winning full-budget layouts')
  assert.ok(losses > 0, 'Tower placement must affect the result at full budget')
  console.log(`Tested ${layouts} layouts. Full budget: ${wins} wins, ${losses} losses.`)
} finally {
  rmSync(output, { recursive: true, force: true })
}
