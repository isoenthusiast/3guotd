// Measure: does the in-game "Enemy Types" reference table match what the player
// actually fights? And does wave composition escalate or merely cycle?
// Read-only against the 3guotd repo.
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })


const OUT_FILE = path.join(OUT, 'enemy-table-vs-play.txt')

// --- extract ground truth straight from the source, no re-implementation ---
const roundSrc = readFileSync(`${REPO}/src/game/round.ts`, 'utf8')
const campaignSrc = readFileSync(`${REPO}/src/game/campaign.ts`, 'utf8')

// attackers table
const atkBlock = roundSrc.slice(roundSrc.indexOf('export const attackers = {'))
const atkBody = atkBlock.slice(0, atkBlock.indexOf('} as const'))
const attackers = {}
for (const m of atkBody.matchAll(/(\w+):\s*\{\s*health:\s*([\d.]+),\s*speed:\s*([\d.]+),\s*reward:\s*([\d.]+)/g)) {
  attackers[m[1]] = { health: Number(m[2]), speed: Number(m[3]), reward: Number(m[4]) }
}

// enemyMaxHealth: base + healthBonus, then * (1 + storySteps * 0.12)
const healthFormula = roundSrc.match(/return Math\.ceil\(\(attackers\[kind\]\.health \+ \(roundFormation\(round\)\.healthBonus \?\? 0\)\) \* \(1 \+ storySteps\(round\) \* ([\d.]+)\)\)/)
const healthStoryFactor = healthFormula ? Number(healthFormula[1]) : null

// speed: enemyDetails(enemy).speed * (1 + storySteps * 0.08)
const speedFormula = roundSrc.match(/enemyDetails\(enemy\)\.speed \* \(1 \+ storySteps\(round\) \* ([\d.]+)\)/)
const speedStoryFactor = speedFormula ? Number(speedFormula[1]) : null

// storySteps: continuedStory && mission ? mission.level - 1 : 0
const storyStepsRe = roundSrc.match(/function storySteps\(round: Round\): number \{\s*return round\.continuedStory && round\.mission \? round\.mission\.level - 1 : 0/)

// waveFormation (long-battle path)
const waveFormationRe = roundSrc.match(/export function waveFormation\(number: number\): Formation \{[\s\S]*?\n\}/)

// formations array
const formsBlock = roundSrc.slice(roundSrc.indexOf('const formations = ['))
const formsBody = formsBlock.slice(0, formsBlock.indexOf('] as const'))
const formations = []
for (const m of formsBody.matchAll(/name:\s*'([^']+)',\s*sequence:\s*(\[[^\]]*\]|wave)/g)) {
  formations.push({ name: m[1], sequence: m[2] })
}

// story levels per mission: levels.map(...) => level: index + 1
const levelRe = campaignSrc.match(/level:\s*index \+ 1/)

const lines = []
const say = s => lines.push(s)

say('=== SOURCE FACTS EXTRACTED ===')
say(`attackers kinds: ${Object.keys(attackers).length}`)
say(`health story factor per level: ${healthStoryFactor}`)
say(`speed story factor per level: ${speedStoryFactor}`)
say(`storySteps source: ${storyStepsRe ? 'continuedStory && mission ? mission.level - 1 : 0' : 'NOT FOUND'}`)
say(`formations (long-battle path): ${formations.length} -> ${formations.map(f => f.name).join(' | ')}`)
say(`mission level index: ${levelRe ? 'index + 1' : 'NOT FOUND'}`)

say('')
say('=== A. ENEMY TYPES TABLE vs ACTUAL IN-PLAY STATS ===')
say('Table renders attackers[kind].health / .speed  (src/main.tsx:494-497)')
say('In play:  health = ceil((base + healthBonus) * (1 + steps * 0.12))')
say('          speed  = base * (1 + steps * 0.08)')
say('')
say('Continued story, level L -> steps = L - 1, no wave healthBonus:')
say('')
say('kind          L  tblHP  actHP   tblSpd  actSpd  HPx     Spdx')
for (const [kind, a] of Object.entries(attackers)) {
  for (const level of [1, 3, 5]) {
    const steps = level - 1
    const actHp = Math.ceil(a.health * (1 + steps * healthStoryFactor))
    const actSpd = a.speed * (1 + steps * speedStoryFactor)
    const hpX = (actHp / a.health).toFixed(2)
    const spdX = (actSpd / a.speed).toFixed(2)
    const flag = actHp !== a.health || Math.abs(actSpd - a.speed) > 1e-9 ? '  <-- MISMATCH' : ''
    say(`${kind.padEnd(12)} ${String(level).padStart(2)}  ${String(a.health).padStart(5)}  ${String(actHp).padStart(6)}  ${String(a.speed).padStart(7)}  ${actSpd.toFixed(3).padStart(7)}  ${hpX.padStart(6)} ${spdX.padStart(7)}${flag}`)
  }
}

say('')
say('=== B. WAVE COMPOSITION: ESCALATE OR CYCLE? (long-battle path, waveFormation) ===')
say(waveFormationRe ? waveFormationRe[0] : 'waveFormation NOT FOUND')
say('')
// emulate waveFormation for a 40-wave run
const emulate = (number) => {
  const base = formations[(number - 1) % formations.length]
  if (number <= 3) return { name: base.name, breakthrough: false }
  const stage = Math.floor((number - 1) / 5)
  return {
    name: `${number % 5 === 0 ? 'Breakthrough' : base.name} · +${Math.min(24, stage * 2)} health`,
    breakthrough: number % 5 === 0,
  }
}
say('wave  formationName')
const distinctBases = new Set()
const breakthroughWaves = []
for (let n = 1; n <= 40; n++) {
  const f = emulate(n)
  // The label carries a health suffix; the formation name is what precedes it.
  if (!f.breakthrough) distinctBases.add(f.name.split(' · ')[0])
  else breakthroughWaves.push(n)
  say(`${String(n).padStart(4)}  ${f.name}`)
}
say('')
say(`distinct formation names (suffix stripped): ${distinctBases.size} — ${[...distinctBases].join(', ')}`)
say(`every fifth wave is a cavalry column: ${breakthroughWaves.join(', ')}`)
say(`formation names cycle on a period of 3: waves 1-3 ${[1, 2, 3].map(n => emulate(n).name).join(' / ')}`)

console.log(lines.join('\n'))
writeFileSync(OUT_FILE, lines.join('\n') + '\n')
console.log(`\nwritten: ${OUT_FILE}`)
