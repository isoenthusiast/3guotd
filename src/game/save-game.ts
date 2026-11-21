import { campaign } from './campaign'
import { campaign as legacyCampaign } from './legacy-campaign'
import { columns, rows } from './board'
import { attackerName, roundFormation, speedOptions, waveOptions } from './round'
import type { PlaySpeed, Round } from './round'

const saveKey = '3guotd.saved-game.v1'
const soundKey = '3guotd.sound.v1'
type SavedGame = { round: Round; speed: PlaySpeed }

type Data = Record<string, unknown>
const record = (value: unknown): value is Data => value !== null && typeof value === 'object' && !Array.isArray(value)
const amount = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value >= 0
const integer = (value: unknown): value is number => amount(value) && Number.isInteger(value)
const point = (value: unknown): boolean => Array.isArray(value) && value.length === 2 && value.every(amount)
const attacker = (value: unknown): boolean => typeof value === 'string' && typeof attackerName(value as Parameters<typeof attackerName>[0]) === 'string'
const tower = (value: unknown): boolean => record(value)
  && integer(value.site) && value.site < columns * rows
  && (value.kind === 'archer' || value.kind === 'drum')
  && typeof value.reach === 'boolean' && typeof value.power === 'boolean' && amount(value.cooldown)
const towers = (value: unknown): boolean => Array.isArray(value) && value.every(tower)
const stats = (value: unknown): boolean => record(value)
  && integer(value.stopped) && integer(value.escaped) && integer(value.runnersEscaped) && integer(value.earned)

function decodeRound(value: unknown, mission: Round['mission']): Round | null {
  if (!record(value)) return null
  if (typeof value.phase !== 'string' || !['setup', 'running', 'won', 'lost'].includes(value.phase)
    || (value.rulesVersion !== undefined && value.rulesVersion !== 2)
    || !integer(value.waveNumber) || value.waveNumber < 1
    || !integer(value.totalWaves) || value.waveNumber > value.totalWaves
    || !(mission ? value.totalWaves === mission.waves.length : waveOptions.some(count => count === value.totalWaves))
    || !integer(value.lives) || value.lives > 3 || !integer(value.silver)
    || !integer(value.spawned) || typeof value.spawnTimer !== 'number' || !Number.isFinite(value.spawnTimer)
    || !amount(value.waveAge) || !amount(value.rebuildTime) || !towers(value.towers)
    || !stats(value.waveStats)) return null

  const { enemies, shots, impacts, opening, gateHit, previousWave } = value
  const routeCount = mission?.routes.length ?? 1
  if (!Array.isArray(enemies) || !enemies.every(enemy => record(enemy) && integer(enemy.id)
    && attacker(enemy.kind) && amount(enemy.progress) && integer(enemy.health) && typeof enemy.slowed === 'boolean'
    && (enemy.routeIndex === undefined || (integer(enemy.routeIndex) && enemy.routeIndex < routeCount)))
    || !Array.isArray(shots) || !shots.every(shot => record(shot) && point(shot.from)
      && integer(shot.targetId) && amount(shot.elapsed))
    || !Array.isArray(impacts) || !impacts.every(impact => record(impact) && point(impact.at)
      && amount(impact.elapsed) && integer(impact.silver))) return null

  if (opening !== null && !(record(opening) && towers(opening.towers) && integer(opening.silver) && integer(opening.lives))) return null
  if (value.phase === 'running' && opening === null) return null
  if (gateHit !== null && !(record(gateHit) && attacker(gateHit.kind) && amount(gateHit.elapsed))) return null
  if (previousWave !== null && !(record(previousWave) && stats(previousWave) && integer(previousWave.waveNumber))) return null

  const round = { ...value, mission } as Round
  return round.spawned <= roundFormation(round).sequence.length ? round : null
}

export function loadGame(): SavedGame | null {
  try {
    const data: unknown = JSON.parse(localStorage.getItem(saveKey) ?? 'null')
    if (!record(data) || data.version !== 1) return null
    const missions = record(data.round) && data.round.rulesVersion === 2 ? campaign : legacyCampaign
    const mission = data.missionId === null ? null : missions.find(level => level.id === data.missionId)
    const speed = speedOptions.find(option => option === data.speed)
    if (mission === undefined || !speed) return null
    const round = decodeRound(data.round, mission)
    return round ? { round, speed } : null
  } catch {
    return null
  }
}

export function saveGame(round: Round, speed: PlaySpeed): boolean {
  try {
    const { mission, ...state } = round
    localStorage.setItem(saveKey, JSON.stringify({ version: 1, missionId: mission?.id ?? null, round: state, speed }))
    return true
  } catch {
    return false
  }
}

export function loadSound(): boolean {
  try {
    return localStorage.getItem(soundKey) === 'on'
  } catch {
    return false
  }
}

export function saveSound(enabled: boolean): void {
  try {
    localStorage.setItem(soundKey, enabled ? 'on' : 'off')
  } catch {
    // Sound can still be changed for this session.
  }
}
