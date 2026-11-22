// Measures how long the impact/reward combat cues stay on screen in WALL-CLOCK terms
// at each play speed, replicating the main.tsx loop exactly:
//   setInterval(50ms) -> tickRound(round, speed)
// tickRound does `speed` sub-steps of advanceRound(round, 0.05, 0.05/speed).
//
// NOTE: advanceRound rebuilds impact objects each tick (`.map(impact => ({...impact, ...}))`),
// so identity comparison does not survive a tick. We match on (at.x, at.y, silver) instead.
import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })

const repo = REPO
const require = createRequire(join(repo, 'package.json'))
const output = mkdtempSync(join(tmpdir(), '3guotd-cue-'))
try {
  execFileSync(process.execPath, [
    require.resolve('typescript/bin/tsc'), '--ignoreConfig', '--target', 'es2022',
    '--module', 'commonjs', '--outDir', output, 'src/game/round.ts', 'src/game/campaign.ts', 'src/game/save-game.ts',
  ], { cwd: repo, stdio: 'inherit' })

  const {
    createRound, startRound, buildTower, tickRound, impactTime, rewardCueTime,
  } = require(join(output, 'round.js'))
  const { columns } = require(join(output, 'board.js'))

  const site = (x, y) => y * columns + x
  const key = i => `${i.at[0]},${i.at[1]},${i.silver}`
  console.log(`declared impactTime=${impactTime}s rewardCueTime=${rewardCueTime}s`)
  console.log(`expected wall-clock duration if visual time is speed-independent:`)
  console.log(`  impact cue ~${impactTime * 1000}ms, reward cue ~${rewardCueTime * 1000}ms\n`)

  for (const speed of [1, 2, 3]) {
    let round = startRound(buildTower(createRound(), site(1, 0), 'archer'))
    let guard = 0
    while (round.impacts.length === 0 && guard < 600) {
      round = tickRound(round, speed)
      guard++
    }
    if (round.impacts.length === 0) {
      console.log(`speed ${speed}x: no impact produced within 600 intervals`)
      continue
    }
    const target = key(round.impacts[0])
    let life = 0
    while (round.impacts.some(i => key(i) === target) && life < 600) {
      round = tickRound(round, speed)
      life++
    }
    const kind = target.endsWith(',0') ? 'impact(hit)' : 'reward(silver)'
    console.log(`speed ${speed}x: ${kind} cue on screen for ${life} intervals = ${life * 50}ms real time`)
  }
} finally {
  rmSync(output, { recursive: true, force: true })
}
