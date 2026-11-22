// Verifies that waveAge (which drives the Drum pulse + wave cues) advances at
// WALL-CLOCK rate, not simulation rate, at every play speed.
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
const out = mkdtempSync(join(tmpdir(), '3guotd-wa-'))
try {
  execFileSync(process.execPath, [require.resolve('typescript/bin/tsc'), '--ignoreConfig', '--target', 'es2022',
    '--module', 'commonjs', '--outDir', out, 'src/game/round.ts', 'src/game/campaign.ts', 'src/game/save-game.ts'], { cwd: repo, stdio: 'inherit' })
  const { createRound, startRound, buildTower, tickRound } = require(join(out, 'round.js'))
  const { columns } = require(join(out, 'board.js'))
  for (const speed of [1, 2, 3]) {
    let r = startRound(buildTower(createRound(), 0 * columns + 1, 'archer'))
    const t0 = r.waveAge
    for (let i = 0; i < 10; i++) r = tickRound(r, speed)
    console.log(`speed ${speed}x: waveAge advanced ${(r.waveAge - t0).toFixed(3)} over 10 x 50ms = 500ms wall clock`)
  }
} finally { rmSync(out, { recursive: true, force: true }) }
