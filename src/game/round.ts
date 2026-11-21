import { route } from './board'

type Point = readonly [number, number]

export const towerSites: readonly Point[] = [
  [2, 3], [4, 4], [5, 6], [7, 4], [9, 3], [10, 1],
]
export const towerBudget = 3
const enemyCount = 9
const spawnInterval = 1.3
const speed = 1.6
export const towerRange = 1.8
const shotInterval = 1.2
export const initialLives = 3

type Enemy = { progress: number; health: number }
type Tower = { site: number; cooldown: number }

export type Round = {
  phase: 'setup' | 'running' | 'won' | 'lost'
  towers: Tower[]
  enemies: Enemy[]
  shots: { from: Point; to: Point }[]
  lives: number
  spawned: number
  spawnTimer: number
}

export function createRound(): Round {
  return { phase: 'setup', towers: [], enemies: [], shots: [], lives: initialLives, spawned: 0, spawnTimer: 0 }
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
  const enemies = round.enemies.map(enemy => ({
    ...enemy,
    progress: enemy.progress + seconds * speed,
  })).filter(enemy => {
    if (enemy.progress < route.length - 1) return true
    lives = Math.max(0, lives - 1)
    return false
  })
  if (spawned < enemyCount && spawnTimer <= 0) {
    enemies.push({ health: 4, progress: 0 })
    spawned++
    spawnTimer += spawnInterval
  }
  const shots: Round['shots'] = []
  const towers = round.towers.map(tower => {
    const cooldown = Math.max(0, tower.cooldown - seconds)
    if (cooldown > 0) return { ...tower, cooldown }

    const [x, y] = towerSites[tower.site]
    const target = enemies.find(enemy => {
      const [enemyX, enemyY] = enemyPosition(enemy.progress)
      return enemy.health > 0 && Math.hypot(enemyX - x, enemyY - y) <= towerRange
    })
    if (!target) return { ...tower, cooldown }
    target.health--
    shots.push({ from: [x, y], to: enemyPosition(target.progress) })
    return { ...tower, cooldown: shotInterval }
  })
  const surviving = enemies.filter(enemy => enemy.health > 0)
  const phase = lives === 0 ? 'lost' : spawned === enemyCount && !surviving.length ? 'won' : 'running'
  return { phase, towers, enemies: surviving, shots, lives, spawned, spawnTimer }
}
