import { route } from './board'

type Point = readonly [number, number]

export const towerSites: readonly Point[] = [
  [2, 3], [4, 4], [5, 6], [7, 4], [9, 3], [10, 1],
]
export const towerBudget = 3
export const enemyCount = 9
const spawnInterval = 1.3
const speed = 1.6
export const towerRange = 1.8
const shotInterval = 1.2
export const shotFlightTime = 0.25
export const impactTime = 0.25
export const enemyMaxHealth = 4
export const initialLives = 3

type Enemy = { id: number; progress: number; health: number }
type Shot = { from: Point; targetId: number; elapsed: number }
type Impact = { at: Point; elapsed: number }
type Tower = { site: number; cooldown: number }

export type Round = {
  phase: 'setup' | 'running' | 'won' | 'lost'
  towers: Tower[]
  enemies: Enemy[]
  shots: Shot[]
  impacts: Impact[]
  lives: number
  spawned: number
  spawnTimer: number
}

export function createRound(): Round {
  return { phase: 'setup', towers: [], enemies: [], shots: [], impacts: [], lives: initialLives, spawned: 0, spawnTimer: 0 }
}

export function retryRound(round: Round): Round {
  return {
    ...createRound(),
    towers: round.towers.map(({ site }) => ({ site, cooldown: 0 })),
  }
}

export function enemiesRemaining(round: Round): number {
  return enemyCount - round.spawned + round.enemies.length
}

export function toggleTower(round: Round, site: number): Round {
  if (round.phase !== 'setup' || !towerSites[site]) return round
  const placed = round.towers.some(tower => tower.site === site)
  if (!placed && round.towers.length >= towerBudget) return round
  const towers = placed
    ? round.towers.filter(tower => tower.site !== site)
    : [...round.towers, { site, cooldown: 0 }]
  return { ...round, towers }
}

export function enemyPosition(progress: number): Point {
  const index = Math.min(Math.floor(progress), route.length - 2)
  const fraction = progress - index
  const [x, y] = route[index]
  const [nextX, nextY] = route[index + 1]
  return [x + (nextX - x) * fraction, y + (nextY - y) * fraction]
}

export function advanceRound(round: Round, seconds: number): Round {
  if (round.phase !== 'running') return round
  let { spawned, spawnTimer, lives } = round
  spawnTimer -= seconds
  const moving = round.enemies.map(enemy => ({
    ...enemy,
    progress: Math.min(route.length - 1, enemy.progress + seconds * speed),
  }))
  const targets = new Map(moving.map(enemy => [enemy.id, enemy]))
  const impacts = round.impacts
    .map(impact => ({ ...impact, elapsed: impact.elapsed + seconds }))
    .filter(impact => impact.elapsed < impactTime)
  const shots: Shot[] = []
  const incoming = new Map<number, number>()
  for (const shot of round.shots) {
    const target = targets.get(shot.targetId)
    if (!target || target.health <= 0) continue

    const elapsed = shot.elapsed + seconds
    if (elapsed >= shotFlightTime) {
      target.health--
      impacts.push({ at: enemyPosition(target.progress), elapsed: 0 })
    } else {
      shots.push({ ...shot, elapsed })
      incoming.set(target.id, (incoming.get(target.id) ?? 0) + 1)
    }
  }
  const enemies = moving.filter(enemy => {
    if (enemy.health <= 0) return false
    if (enemy.progress < route.length - 1) return true
    lives = Math.max(0, lives - 1)
    return false
  })
  if (spawned < enemyCount && spawnTimer <= 0) {
    enemies.push({ id: spawned, health: enemyMaxHealth, progress: 0 })
    spawned++
    spawnTimer += spawnInterval
  }
  const towers = round.towers.map(tower => {
    const cooldown = Math.max(0, tower.cooldown - seconds)
    if (cooldown > 0) return { ...tower, cooldown }

    const [x, y] = towerSites[tower.site]
    const target = enemies.find(enemy => {
      const [enemyX, enemyY] = enemyPosition(enemy.progress)
      return enemy.health > (incoming.get(enemy.id) ?? 0)
        && Math.hypot(enemyX - x, enemyY - y) <= towerRange
    })
    if (!target) return { ...tower, cooldown }
    shots.push({ from: [x, y], targetId: target.id, elapsed: 0 })
    incoming.set(target.id, (incoming.get(target.id) ?? 0) + 1)
    return { ...tower, cooldown: shotInterval }
  })
  const cleared = spawned === enemyCount && enemies.length === 0 && impacts.length === 0
  const phase = lives === 0 ? 'lost' : cleared ? 'won' : 'running'
  return { phase, towers, enemies, shots, impacts, lives, spawned, spawnTimer }
}
