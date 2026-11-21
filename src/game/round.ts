import { isBuildable, route, sitePosition } from './board'

type Point = readonly [number, number]
export type TowerKind = 'archer' | 'drum'
export type Upgrade = 'reach' | 'power'
export const waveOptions = [20, 40, 60, 80, 100] as const
export const speedOptions = [1, 2, 3] as const
export type WaveCount = typeof waveOptions[number]
export type PlaySpeed = typeof speedOptions[number]
export const towerPrice = 30
export const startingSilver = 90
export const baseUpgradePrice = 18
export const secondUpgradeSurcharge = 9
export const initialLives = 3
export const shotFlightTime = 0.25
export const impactTime = 0.25

export const towerDetails = {
  archer: {
    name: 'Archer', reach: 'Longer range', power: 'Faster fire', range: 1.8, extendedRange: 2.5,
    shotInterval: 1.05, fasterShotInterval: 0.75,
  },
  drum: {
    name: 'Drum', reach: 'Wider reach', power: 'Stronger slow', range: 2.2, extendedRange: 2.8,
    speedFactor: 0.28, strongerSpeedFactor: 0.18,
  },
} as const

const wave = [
  'infantry', 'infantry', 'runner', 'infantry', 'runner',
  'veteran', 'runner', 'veteran', 'veteranRunner',
] as const

const attackers = {
  infantry: { health: 4, speed: 1.6, reward: 7, runner: false, level: 1 },
  runner: { health: 3, speed: 2.4, reward: 7, runner: true, level: 1 },
  veteran: { health: 6, speed: 1.6, reward: 12, runner: false, level: 2 },
  veteranRunner: { health: 4, speed: 2.4, reward: 12, runner: true, level: 2 },
} as const

export const enemyCount = wave.length
const formations = [
  { name: 'Mixed patrol', sequence: wave },
  { name: 'Runner rush', sequence: ['runner', 'runner', 'infantry', 'runner', 'veteranRunner',
    'runner', 'infantry', 'veteran', 'runner'] },
  { name: 'Veteran column', sequence: ['infantry', 'veteran', 'veteran', 'runner', 'veteran',
    'infantry', 'veteranRunner', 'veteran', 'runner'] },
] as const

export function waveFormation(number: number) {
  return formations[(number - 1) % formations.length]
}

const spawnInterval = 1.65
const gateCueTime = 1.35
export const waveCueTime = 1.15
export const rewardCueTime = 0.7

type Enemy = { id: number; kind: keyof typeof attackers; progress: number; health: number; slowed: boolean }
export type Tower = { site: number; kind: TowerKind; reach: boolean; power: boolean; cooldown: number }
type Shot = { from: Point; targetId: number; elapsed: number }
type Impact = { at: Point; elapsed: number; silver: number }
type GateHit = { kind: Enemy['kind']; elapsed: number }
type WaveStats = { stopped: number; escaped: number; runnersEscaped: number; earned: number }
type WaveReport = WaveStats & { waveNumber: number }
const emptyStats: WaveStats = { stopped: 0, escaped: 0, runnersEscaped: 0, earned: 0 }

export function attackerName(kind: Enemy['kind']): string {
  return ({
    infantry: 'Infantry', runner: 'Runner', veteran: 'Veteran', veteranRunner: 'Veteran runner',
  })[kind]
}

type Opening = Pick<Round, 'towers' | 'silver' | 'lives'>

export type Round = {
  phase: 'setup' | 'running' | 'won' | 'lost'
  totalWaves: WaveCount
  waveNumber: number
  towers: Tower[]
  silver: number
  opening: Opening | null
  enemies: Enemy[]
  shots: Shot[]
  impacts: Impact[]
  gateHit: GateHit | null
  waveAge: number
  waveStats: WaveStats
  previousWave: WaveReport | null
  lives: number
  spawned: number
  spawnTimer: number
}

export function createRound(totalWaves: WaveCount = 20): Round {
  return {
    phase: 'setup', totalWaves, waveNumber: 1, towers: [], silver: startingSilver, opening: null,
    enemies: [], shots: [], impacts: [], gateHit: null, waveAge: 0,
    waveStats: emptyStats, previousWave: null, lives: initialLives, spawned: 0, spawnTimer: 0,
  }
}

export function startRound(round: Round): Round {
  if (round.phase !== 'setup') return round
  const opening = { towers: round.towers, silver: round.silver, lives: round.lives }
  return { ...round, phase: 'running', opening }
}

export function retryRound(round: Round): Round {
  if (!round.opening) return round
  return { ...createRound(round.totalWaves), waveNumber: round.waveNumber, previousWave: round.previousWave, ...round.opening }
}

export function enemiesRemaining(round: Round): number {
  return enemyCount - round.spawned + round.enemies.length
}

export function enemyDetails(enemy: Enemy) {
  return attackers[enemy.kind]
}

export function towerRange(kind: TowerKind, upgraded: boolean): number {
  return towerDetails[kind][upgraded ? 'extendedRange' : 'range']
}

export function upgradePrice(tower: Tower): number {
  return baseUpgradePrice + (tower.reach || tower.power ? secondUpgradeSurcharge : 0)
}

export function canSpend(round: Round): boolean {
  return round.phase === 'setup' || round.phase === 'running'
}

export function buildTower(round: Round, site: number, kind: TowerKind): Round {
  if (!canSpend(round) || round.silver < towerPrice || !isBuildable(site)
    || round.towers.some(tower => tower.site === site)) return round
  const tower: Tower = { site, kind, reach: false, power: false, cooldown: 0 }
  return { ...round, silver: round.silver - towerPrice, towers: [...round.towers, tower] }
}

export function upgradeTower(round: Round, site: number, branch: Upgrade): Round {
  const tower = round.towers.find(candidate => candidate.site === site)
  if (!canSpend(round) || !tower || tower[branch] || round.silver < upgradePrice(tower)) return round
  return {
    ...round,
    silver: round.silver - upgradePrice(tower),
    towers: round.towers.map(candidate => candidate === tower ? { ...tower, [branch]: true } : candidate),
  }
}

export function removeTower(round: Round, site: number): Round {
  const tower = round.towers.find(candidate => candidate.site === site)
  if ((round.phase !== 'setup') || !tower) return round
  const refunds = [towerPrice, towerPrice + baseUpgradePrice, towerPrice + 2 * baseUpgradePrice + secondUpgradeSurcharge]
  const branches = Number(tower.reach) + Number(tower.power)
  return {
    ...round, silver: round.silver + refunds[branches],
    towers: round.towers.filter(candidate => candidate !== tower),
  }
}

export function enemyPosition(progress: number): Point {
  const index = Math.min(Math.floor(progress), route.length - 2)
  const fraction = progress - index
  const [x, y] = route[index]
  const [nextX, nextY] = route[index + 1]
  return [x + (nextX - x) * fraction, y + (nextY - y) * fraction]
}

function inRange(tower: Tower, [x, y]: Point): boolean {
  const [towerX, towerY] = sitePosition(tower.site)
  return Math.hypot(x - towerX, y - towerY) <= towerRange(tower.kind, tower.reach)
}

export function advanceRound(round: Round, seconds: number, visualSeconds = seconds): Round {
  if (round.phase !== 'running') return round
  let { spawned, spawnTimer, lives, silver } = round
  const waveStats = { ...round.waveStats }
  const waveAge = round.waveAge + visualSeconds
  let gateHit = round.gateHit && { ...round.gateHit, elapsed: round.gateHit.elapsed + visualSeconds }
  if (gateHit && gateHit.elapsed >= gateCueTime) gateHit = null
  spawnTimer -= seconds
  const drums = round.towers.filter(tower => tower.kind === 'drum')
  const moving = round.enemies.map(enemy => {
    let speedFactor = 1
    const position = enemyPosition(enemy.progress)
    for (const drum of drums) {
      if (inRange(drum, position)) {
        const stats = towerDetails.drum
        speedFactor = Math.min(speedFactor, drum.power ? stats.strongerSpeedFactor : stats.speedFactor)
      }
    }
    return {
      ...enemy, slowed: speedFactor < 1,
      progress: Math.min(route.length - 1, enemy.progress + seconds * enemyDetails(enemy).speed * speedFactor),
    }
  })
  const targets = new Map(moving.map(enemy => [enemy.id, enemy]))
  const impacts = round.impacts
    .map(impact => ({ ...impact, elapsed: impact.elapsed + visualSeconds }))
    .filter(impact => impact.elapsed < (impact.silver ? rewardCueTime : impactTime))
  const shots: Shot[] = []
  const incoming = new Map<number, number>()
  for (const shot of round.shots) {
    const target = targets.get(shot.targetId)
    if (!target || target.health <= 0) continue

    const elapsed = shot.elapsed + seconds
    if (elapsed >= shotFlightTime) {
      target.health--
      const reward = target.health === 0 ? enemyDetails(target).reward : 0
      if (reward > 0) {
        silver += reward
        waveStats.earned += reward
        waveStats.stopped++
      }
      impacts.push({ at: enemyPosition(target.progress), elapsed: 0, silver: reward })
    } else {
      shots.push({ ...shot, elapsed })
      incoming.set(target.id, (incoming.get(target.id) ?? 0) + 1)
    }
  }
  const enemies = moving.filter(enemy => {
    if (enemy.health <= 0) return false
    if (enemy.progress < route.length - 1) return true
    if (lives > 0) {
      lives--
      waveStats.escaped++
      if (enemyDetails(enemy).runner) waveStats.runnersEscaped++
      gateHit = { kind: enemy.kind, elapsed: 0 }
    }
    return false
  })
  if (spawned < enemyCount && spawnTimer <= 0) {
    const kind = waveFormation(round.waveNumber).sequence[spawned]
    enemies.push({ id: spawned, kind, health: attackers[kind].health, progress: 0, slowed: false })
    spawned++
    spawnTimer += spawnInterval
  }
  const activeIds = new Set(enemies.map(enemy => enemy.id))
  const towers = round.towers.map(tower => {
    if (tower.kind === 'drum') return tower
    const cooldown = Math.max(0, tower.cooldown - seconds)
    if (cooldown > 0) return { ...tower, cooldown }

    const target = enemies.find(enemy => enemy.health > (incoming.get(enemy.id) ?? 0)
      && inRange(tower, enemyPosition(enemy.progress)))
    if (!target) return { ...tower, cooldown }
    shots.push({ from: sitePosition(tower.site), targetId: target.id, elapsed: 0 })
    incoming.set(target.id, (incoming.get(target.id) ?? 0) + 1)
    const stats = towerDetails.archer
    return { ...tower, cooldown: tower.power ? stats.fasterShotInterval : stats.shotInterval }
  })
  const cleared = spawned === enemyCount && enemies.length === 0
  if (lives > 0 && cleared && round.waveNumber < round.totalWaves) {
    return startRound({
      ...createRound(round.totalWaves), waveNumber: round.waveNumber + 1,
      towers: towers.map(tower => ({ ...tower, cooldown: 0 })), silver, lives,
      previousWave: { ...waveStats, waveNumber: round.waveNumber }, gateHit, impacts,
    })
  }
  const phase = lives === 0 ? 'lost' : cleared ? 'won' : 'running'
  return {
    ...round, phase, towers, enemies, impacts, gateHit, waveAge, waveStats, silver, lives, spawned, spawnTimer,
    shots: shots.filter(shot => activeIds.has(shot.targetId)),
  }
}

export function tickRound(round: Round, speed: PlaySpeed): Round {
  for (let step = 0; step < speed && round.phase === 'running'; step++) {
    round = advanceRound(round, 0.05, 0.05 / speed)
  }
  return round
}
