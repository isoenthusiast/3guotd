import { defaultRoutes, frontierApproach, isBuildable, route, sitePosition } from './board'
import { campaign } from './campaign'

import type { Point, Route } from './board'
export type TrialTower = 'volley' | 'crossbow' | 'beacon'
export type TowerKind = 'archer' | 'drum' | TrialTower
export type Upgrade = 'reach' | 'power'
export const waveOptions = [20, 40, 60, 80, 100] as const
export const speedOptions = [1, 2, 3] as const
export type WaveCount = typeof waveOptions[number]
export type PlaySpeed = typeof speedOptions[number]
export const startingSilver = 90
export const baseUpgradePrice = 18
export const secondUpgradeSurcharge = 9
export const initialLives = 3
export const shotFlightTime = 0.25
export const impactTime = 0.25
export const trialImpactTime = 0.42

export const towerDetails = {
  archer: {
    name: 'Archer', price: 30, targeting: 'first', reach: 'Longer range', power: 'Faster fire', range: 1.8, extendedRange: 2.5,
    shotInterval: 1.05, fasterShotInterval: 0.75,
  },
  drum: {
    name: 'Drum', price: 30, targeting: 'areaSlow', reach: 'Wider reach', power: 'Stronger slow', range: 2.2, extendedRange: 2.8,
    speedFactor: 0.28, strongerSpeedFactor: 0.18,
  },
  volley: {
    name: 'Volley Platform', price: 30, targeting: 'cluster', range: 1.8, extendedRange: 1.8,
    shotInterval: 2.1, clusterRadius: 1.15, maxTargets: 3,
  },
  crossbow: {
    name: 'Heavy Crossbow', price: 30, targeting: 'highestHealth', range: 2.35, extendedRange: 2.35,
    shotInterval: 2.6, damage: 3,
  },
  beacon: { name: 'Watch Beacon', price: 30, targeting: 'nearestArcher', range: 2, extendedRange: 2, archerInterval: 0.6 },
} as const

export function trialTowerFor(mission: Mission | null): TrialTower | undefined {
  if (mission?.id === 'changban:3') return 'volley'
  if (mission?.id === 'jing:5') return 'crossbow'
  if (mission?.id === 'wuzhang:3') return 'beacon'
}

export function isTrialTower(kind: unknown): kind is TrialTower {
  return kind === 'volley' || kind === 'crossbow' || kind === 'beacon'
}

export function beaconArcher(towers: readonly Tower[], site: number): number | undefined {
  const [x, y] = sitePosition(site)
  let selected: number | undefined
  let closest = towerDetails.beacon.range ** 2
  for (const tower of towers) {
    if (tower.kind !== 'archer') continue
    const [ax, ay] = sitePosition(tower.site)
    const distance = (ax - x) ** 2 + (ay - y) ** 2
    if (distance < closest || (distance === closest && (selected === undefined || tower.site < selected))) {
      closest = distance
      selected = tower.site
    }
  }
  return selected
}

export function buildChoices(round: Round): readonly TowerKind[] {
  return ['archer', round.supportTower ?? 'drum']
}

const wave = [
  'infantry', 'infantry', 'runner', 'infantry', 'runner',
  'veteran', 'runner', 'veteran', 'veteranRunner',
] as const

export const attackers = {
  infantry: { health: 4, speed: 1.6, reward: 7, runner: false, level: 1 },
  runner: { health: 3, speed: 2.4, reward: 7, runner: true, level: 1 },
  veteran: { health: 6, speed: 1.6, reward: 12, runner: false, level: 2 },
  bowman: { health: 4, speed: 1.32, reward: 8, runner: false, level: 1 },
  cavalry: { health: 4, speed: 2.7, reward: 10, runner: true, level: 2 },
  commander: { health: 10, speed: 1.18, reward: 20, runner: false, level: 2 },
  veteranRunner: { health: 4, speed: 2.4, reward: 12, runner: true, level: 2 },
} as const

export type AttackerKind = keyof typeof attackers
export type Formation = {
  name: string
  sequence: readonly AttackerKind[]
  interval?: number
  healthBonus?: number
}

export type Mission = {
  id: string
  title: string
  setting: string
  briefing: string
  leadIn?: string
  victory: string
  defeat: string
  chronicle: string
  battleId: string
  level: number
  routes: readonly Route[]
  gate: string
  objective: string
  milestone: string
  milestoneCount: number
  terrain: 'field' | 'river' | 'wood' | 'pass'
  waves: readonly Formation[]
  closedSites?: readonly (readonly number[])[]
}

export const enemyCount = wave.length
const formations = [
  { name: 'Mixed patrol', sequence: wave },
  { name: 'Runner rush', sequence: ['runner', 'runner', 'infantry', 'runner', 'veteranRunner',
    'runner', 'infantry', 'veteran', 'runner'] },
  { name: 'Veteran column', sequence: ['infantry', 'veteran', 'veteran', 'runner', 'veteran',
    'infantry', 'veteranRunner', 'veteran', 'runner'] },
] as const

export function waveFormation(number: number): Formation {
  const base = formations[(number - 1) % formations.length]
  if (number <= 3) return base
  const stage = Math.floor((number - 1) / 5)
  return {
    name: `${number % 5 === 0 ? 'Breakthrough' : base.name} · +${Math.min(24, stage * 2)} health`,
    sequence: number % 5 === 0
      ? Array<AttackerKind>(12).fill('cavalry') : base.sequence,
    interval: Math.max(0.45, 1.25 - stage * 0.08),
    healthBonus: Math.min(24, stage * 2),
  }
}

const spawnInterval = 1.65
const gateCueTime = 1.35
export const rebuildWindow = 5
export const waveCueTime = 1.15
export const rewardCueTime = 0.7

type Enemy = { id: number; kind: AttackerKind; progress: number; health: number; slowed: boolean; routeIndex?: number }
export type Tower = { site: number; kind: TowerKind; reach: boolean; power: boolean; cooldown: number }
type Shot = { from: Point; targetId: number; elapsed: number; heavy?: true; volley?: true }
type Impact = { at: Point; elapsed: number; silver: number } &
  ({ cue?: undefined; targetId?: undefined } | { cue: 'volley' | 'crossbow'; targetId: number })
type GateHit = { kind: Enemy['kind']; elapsed: number; routeIndex?: number }
type WaveStats = { stopped: number; escaped: number; runnersEscaped: number; earned: number }
type WaveReport = WaveStats & { waveNumber: number }
const emptyStats: WaveStats = { stopped: 0, escaped: 0, runnersEscaped: 0, earned: 0 }

export function attackerName(kind: Enemy['kind']): string {
  return ({
    infantry: 'Infantry', runner: 'Runner', veteran: 'Veteran', veteranRunner: 'Veteran runner',
    bowman: 'Bowman', cavalry: 'Cavalry', commander: 'Pursuit commander',
  })[kind]
}

type Opening = Pick<Round, 'towers' | 'silver' | 'lives'>

export const levelPrepMs = 10_000

export type Round = {
  supportTower?: TrialTower
  continuedStory?: true
  levelPrepRemainingMs?: number
  trialRefund?: number
  rulesVersion?: 2
  phase: 'setup' | 'running' | 'won' | 'lost'
  totalWaves: number
  mission: Mission | null
  waveNumber: number
  towers: Tower[]
  silver: number
  opening: Opening | null
  enemies: Enemy[]
  shots: Shot[]
  impacts: Impact[]
  gateHit: GateHit | null
  waveAge: number
  rebuildTime: number
  waveStats: WaveStats
  previousWave: WaveReport | null
  lives: number
  spawned: number
  spawnTimer: number
}

export function createRound(totalWaves = 20, mission: Mission | null = null, supportTower?: Round['supportTower']): Round {
  // Explicit restarts adopt current rules; retry and wave transitions retain the snapshot's rules.
  const missionId = mission?.id
  if (missionId) mission = campaign.find(candidate => candidate.id === missionId) ?? mission
  return {
    ...(supportTower && supportTower === trialTowerFor(mission) && { supportTower }),
    rulesVersion: 2, phase: 'setup', totalWaves: mission?.waves.length ?? totalWaves, mission, waveNumber: 1, towers: [], silver: startingSilver, opening: null,
    enemies: [], shots: [], impacts: [], gateHit: null, waveAge: 0, rebuildTime: 0,
    waveStats: emptyStats, previousWave: null, lives: initialLives, spawned: 0, spawnTimer: 0,
  }
}

export function levelCarryover(round: Round) {
  const towers = round.towers.filter(tower => !isTrialTower(tower.kind))
  const trialRefund = round.towers.filter(tower => isTrialTower(tower.kind))
    .reduce((sum, tower) => sum + towerRefund(tower), 0)
  return { towers, trialRefund, silver: round.silver + startingSilver + trialRefund }
}

export function prepareNextLevel(round: Round, next: Mission, supportTower?: Round['supportTower']): Round {
  if (round.phase !== 'won' || next.battleId !== round.mission?.battleId || next.level !== round.mission.level + 1) return round
  const { towers, trialRefund, silver } = levelCarryover(round)
  return {
    ...createRound(20, next, supportTower), continuedStory: true, levelPrepRemainingMs: levelPrepMs,
    towers: towers.map(tower => ({ ...tower, cooldown: 0 })), silver, ...(trialRefund > 0 && { trialRefund }),
  }
}

function storySteps(round: Round): number {
  return round.continuedStory && round.mission ? round.mission.level - 1 : 0
}

export function enemyMaxHealth(round: Round, kind: AttackerKind): number {
  return Math.ceil((attackers[kind].health + (roundFormation(round).healthBonus ?? 0)) * (1 + storySteps(round) * 0.12))
}

export function startRound(round: Round): Round {
  if (round.phase !== 'setup') return round
  const opening = { towers: round.towers, silver: round.silver, lives: round.lives }
  return { ...round, phase: 'running', opening }
}

export function retryRound(round: Round): Round {
  if (!round.opening) return round
  return { ...createRound(round.totalWaves, round.mission, round.supportTower), mission: round.mission, ...(round.continuedStory && { continuedStory: true as const }), rulesVersion: round.rulesVersion, waveNumber: round.waveNumber, previousWave: round.previousWave, ...round.opening }
}

export function roundFormation(round: Round): Formation {
  return round.mission?.waves[round.waveNumber - 1]
    ?? (round.rulesVersion === 2 ? waveFormation(round.waveNumber) : formations[(round.waveNumber - 1) % formations.length])
}

export function objectiveProgress(round: Round): number {
  const cleared = round.waveNumber - 1 + Number(round.phase === 'won')
  return Math.floor(cleared * (round.mission?.milestoneCount ?? round.totalWaves) / round.totalWaves)
}

export const evacuatedGroups = objectiveProgress

export function roundRoutes(round: Round): readonly Route[] {
  return round.mission?.routes ?? (round.rulesVersion === undefined ? [frontierApproach] : defaultRoutes)
}

export function closedSites(round: Round): readonly number[] {
  return round.mission?.closedSites?.[round.waveNumber - 1] ?? []
}

export function canBuildAt(round: Round, site: number): boolean {
  return isBuildable(site, roundRoutes(round)) && !closedSites(round).includes(site)
}

export function nextEntry(round: Round, spawn = round.spawned): number {
  return (round.waveNumber + spawn - 1) % roundRoutes(round).length
}

export function routeForEnemy(round: Round, enemy: Enemy): Route {
  return roundRoutes(round)[enemy.routeIndex ?? 0]
}

export function enemiesRemaining(round: Round): number {
  return roundFormation(round).sequence.length - round.spawned + round.enemies.length
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
  const { price } = towerDetails[kind]
  if (!canSpend(round) || !buildChoices(round).includes(kind) || round.silver < price || !canBuildAt(round, site)
    || round.towers.some(tower => tower.site === site)) return round
  const tower: Tower = { site, kind, reach: false, power: false, cooldown: 0 }
  return { ...round, silver: round.silver - price, towers: [...round.towers, tower] }
}

export function upgradeTower(round: Round, site: number, branch: Upgrade): Round {
  const tower = round.towers.find(candidate => candidate.site === site)
  if (!canSpend(round) || !tower || isTrialTower(tower.kind) || tower[branch] || round.silver < upgradePrice(tower)) return round
  return {
    ...round,
    silver: round.silver - upgradePrice(tower),
    towers: round.towers.map(candidate => candidate === tower ? { ...tower, [branch]: true } : candidate),
  }
}

export function towerRefund(tower: Tower): number {
  return towerDetails[tower.kind].price + Number(tower.reach || tower.power) * baseUpgradePrice
    + Number(tower.reach && tower.power) * (baseUpgradePrice + secondUpgradeSurcharge)
}

export function removeTower(round: Round, site: number): Round {
  const tower = round.towers.find(candidate => candidate.site === site)
  if ((round.phase !== 'setup') || !tower) return round
  return {
    ...round, silver: round.silver + towerRefund(tower),
    towers: round.towers.filter(candidate => candidate !== tower),
  }
}

export function enemyPosition(progress: number, path: Route = route): Point {
  const index = Math.min(Math.floor(progress), path.length - 2)
  const fraction = progress - index
  const [x, y] = path[index]
  const [nextX, nextY] = path[index + 1]
  return [x + (nextX - x) * fraction, y + (nextY - y) * fraction]
}

export function inRange(tower: Tower, [x, y]: Point): boolean {
  const [towerX, towerY] = sitePosition(tower.site)
  return Math.hypot(x - towerX, y - towerY) <= towerRange(tower.kind, tower.reach)
}

export function advanceRound(round: Round, seconds: number, visualSeconds = seconds): Round {
  if (round.phase !== 'running') return round
  if (round.rebuildTime > 0) {
    return { ...round, rebuildTime: round.rebuildTime <= visualSeconds + 1e-9
      ? 0 : round.rebuildTime - visualSeconds }
  }
  let { spawned, spawnTimer, lives, silver } = round
  const waveStats = { ...round.waveStats }
  const waveAge = round.waveAge + visualSeconds
  let gateHit = round.gateHit && { ...round.gateHit, elapsed: round.gateHit.elapsed + visualSeconds }
  if (gateHit && gateHit.elapsed >= gateCueTime) gateHit = null
  spawnTimer -= seconds
  const drums = round.towers.filter(tower => tower.kind === 'drum')
  const moving = round.enemies.map(enemy => {
    let speedFactor = 1
    const path = routeForEnemy(round, enemy)
    const position = enemyPosition(enemy.progress, path)
    for (const drum of drums) {
      if (inRange(drum, position)) {
        const stats = towerDetails.drum
        speedFactor = Math.min(speedFactor, drum.power ? stats.strongerSpeedFactor : stats.speedFactor)
      }
    }
    return {
      ...enemy, slowed: speedFactor < 1,
      progress: Math.min(path.length - 1, enemy.progress + seconds * enemyDetails(enemy).speed * (1 + storySteps(round) * 0.08) * speedFactor
        * (enemy.kind === 'commander' && round.enemies.some(other => other.id < enemy.id) ? 0 : 1)),
    }
  })
  const targets = new Map(moving.map(enemy => [enemy.id, enemy]))
  const impacts = round.impacts
    .map(impact => ({ ...impact, elapsed: impact.elapsed + visualSeconds }))
    .filter(impact => impact.elapsed < (impact.silver ? rewardCueTime : impact.cue ? trialImpactTime : impactTime))
  const shots: Shot[] = []
  const incoming = new Map<number, number>()
  for (const shot of round.shots) {
    const target = targets.get(shot.targetId)
    if (!target || target.health <= 0) continue

    const elapsed = shot.elapsed + seconds
    const damage = shot.heavy ? towerDetails.crossbow.damage : 1
    if (elapsed >= shotFlightTime) {
      target.health = Math.max(0, target.health - damage)
      const reward = target.health === 0 ? enemyDetails(target).reward : 0
      if (reward > 0) {
        silver += reward
        waveStats.earned += reward
        waveStats.stopped++
      }
      const cue = shot.heavy ? 'crossbow' : shot.volley ? 'volley' : undefined
      const impact = { at: enemyPosition(target.progress, routeForEnemy(round, target)), elapsed: 0, silver: reward }
      impacts.push(cue ? { ...impact, cue, targetId: target.id } : impact)
    } else {
      shots.push({ ...shot, elapsed })
      incoming.set(target.id, (incoming.get(target.id) ?? 0) + damage)
    }
  }
  const enemies = moving.filter(enemy => {
    if (enemy.health <= 0) return false
    if (enemy.progress < routeForEnemy(round, enemy).length - 1) return true
    if (lives > 0) {
      lives--
      waveStats.escaped++
      if (enemyDetails(enemy).runner) waveStats.runnersEscaped++
      gateHit = { kind: enemy.kind, elapsed: 0, routeIndex: enemy.routeIndex ?? 0 }
    }
    return false
  })
  const formation = roundFormation(round)
  if (spawned < formation.sequence.length && spawnTimer <= 0) {
    const kind = formation.sequence[spawned]
    const routeIndex = nextEntry(round, spawned)
    enemies.push({ id: spawned, kind, health: enemyMaxHealth(round, kind), progress: 0, slowed: false, routeIndex })
    spawned++
    spawnTimer += formation.interval ?? spawnInterval
  }
  const activeIds = new Set(enemies.map(enemy => enemy.id))
  const supported = new Set(round.towers.filter(tower => tower.kind === 'beacon')
    .map(tower => beaconArcher(round.towers, tower.site)))
  const towers = round.towers.map(tower => {
    if (tower.kind === 'drum' || tower.kind === 'beacon') return tower
    const cooldown = Math.max(0, tower.cooldown - seconds)
    if (cooldown > 0) return { ...tower, cooldown }

    const eligible = (enemy: Enemy) => enemy.health > (incoming.get(enemy.id) ?? 0)
      && inRange(tower, enemyPosition(enemy.progress, routeForEnemy(round, enemy)))
    const heavy = tower.kind === 'crossbow'
    const targeting = towerDetails[tower.kind].targeting
    const target = targeting === 'highestHealth'
      ? enemies.reduce<Enemy | undefined>((best, enemy) =>
        (!best || enemy.health > best.health) && eligible(enemy) ? enemy : best, undefined)
      : enemies.find(eligible)
    if (!target) return { ...tower, cooldown }
    let recipients = [target]
    if (targeting === 'cluster') {
      const [x, y] = enemyPosition(target.progress, routeForEnemy(round, target))
      const nearby = enemies.filter(enemy => {
        if (enemy === target || enemy.health <= (incoming.get(enemy.id) ?? 0)) return false
        const point = enemyPosition(enemy.progress, routeForEnemy(round, enemy))
        return inRange(tower, point) && Math.hypot(point[0] - x, point[1] - y) <= towerDetails.volley.clusterRadius
      })
      recipients = [target, ...nearby.slice(0, towerDetails.volley.maxTargets - 1)]
    }
    for (const enemy of recipients) {
      shots.push({ from: sitePosition(tower.site), targetId: enemy.id, elapsed: 0, ...(heavy && { heavy: true as const }), ...(tower.kind === 'volley' && { volley: true as const }) })
      incoming.set(enemy.id, (incoming.get(enemy.id) ?? 0) + (heavy ? towerDetails.crossbow.damage : 1))
    }
    const interval = tower.kind === 'archer'
      ? supported.has(tower.site) ? towerDetails.beacon.archerInterval
        : tower.power ? towerDetails.archer.fasterShotInterval : towerDetails.archer.shotInterval
      : towerDetails[tower.kind].shotInterval
    return { ...tower, cooldown: interval }
  })
  const cleared = spawned === formation.sequence.length && enemies.length === 0
  if (lives > 0 && cleared && round.waveNumber < round.totalWaves) {
    const next = { ...createRound(round.totalWaves, round.mission, round.supportTower), mission: round.mission, ...(round.continuedStory && { continuedStory: true as const }), rulesVersion: round.rulesVersion, waveNumber: round.waveNumber + 1 }
    const closed = closedSites(next)
    const needsRebuild = closed.length > closedSites(round).length
    const remaining = towers.filter(tower => !closed.includes(tower.site))
    const refund = towers.reduce((amount, tower) => amount + (closed.includes(tower.site) ? towerRefund(tower) : 0), 0)
    return startRound({
      ...next, towers: remaining.map(tower => ({ ...tower, cooldown: 0 })), silver: silver + refund, lives,
      previousWave: { ...waveStats, waveNumber: round.waveNumber },
      gateHit: needsRebuild ? null : gateHit, impacts: needsRebuild ? [] : impacts, rebuildTime: needsRebuild ? rebuildWindow : 0,
    })
  }
  const phase = lives === 0 ? 'lost' : cleared ? 'won' : 'running'
  return {
    ...round, phase, towers, enemies, impacts, gateHit, waveAge, waveStats, silver, lives, spawned, spawnTimer,
    shots: shots.filter(shot => activeIds.has(shot.targetId)),
  }
}

export function tickRound(round: Round, speed: PlaySpeed): Round {
  if (round.phase === 'setup' && round.levelPrepRemainingMs !== undefined) {
    const remaining = round.levelPrepRemainingMs - 50
    if (remaining > 0) return { ...round, levelPrepRemainingMs: remaining }
    const { trialRefund, levelPrepRemainingMs, ...ready } = round
    return startRound(ready)
  }
  for (let step = 0; step < speed && round.phase === 'running'; step++) {
    round = advanceRound(round, 0.05, 0.05 / speed)
  }
  return round
}
