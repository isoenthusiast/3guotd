import { campaign } from './campaign'
import { sitePosition } from './board'
import { beaconArcher, createRound, enemyDetails, reloadTime, tickRound, towerDetails } from './round'
import type { AttackerKind, Mission, PlaySpeed, Round } from './round'

export const practiceTowers = ['volley', 'crossbow', 'beacon', 'drum'] as const
export type PracticeTower = typeof practiceTowers[number]
export const practiceMap: Mission = {
  ...campaign.find(mission => mission.id === 'changban:3')!,
  id: 'field-trials:1',
  battleId: 'field-trials',
  title: 'Field Trials',
  waves: [{ name: 'Practice column', sequence: ['infantry', 'infantry', 'infantry', 'veteran', 'runner'], interval: 0.28 }],
  milestoneCount: 1,
  victory: 'Formation cleared.',
  defeat: 'The practice gate fell.',
}

export function practiceRound(kind: PracticeTower): Round {
  return { ...createRound(20, practiceMap), ...(kind !== 'drum' && { supportTower: kind }) }
}

export type SupportCue = { before: number; after: number } & (
  { kind: 'beacon'; site: number } | { kind: 'drum'; id: number; attacker: AttackerKind }
)

export function tickPractice(round: Round, speed: PlaySpeed, tower: PracticeTower, previous: SupportCue | null) {
  let cue = previous
  const next = tickRound(round, speed, (before, after, seconds) => {
    if (tower === 'drum') {
      // Prefer the same marked attacker until it leaves the slow or the board.
      const marked = cue?.kind === 'drum' ? cue.id : undefined
      const slowed = after.enemies.filter(enemy => enemy.slowed)
      const enemy = slowed.find(candidate => candidate.id === marked) ?? slowed[0]
      const original = before.enemies.find(candidate => candidate.id === enemy?.id)
      const distance = enemy && original ? enemy.progress - original.progress : 0
      cue = enemy && distance > 0 ? { kind: 'drum', id: enemy.id, attacker: enemy.kind,
        before: enemyDetails(enemy).speed, after: distance / seconds } : null
    } else if (tower === 'beacon') {
      const links = after.towers.filter(candidate => candidate.kind === 'beacon')
        .map(beacon => beaconArcher(before.towers, beacon.site))
      if (cue?.kind === 'beacon' && !links.includes(cue.site)) cue = null
      const archer = after.towers.find(candidate => candidate.kind === 'archer' && links.includes(candidate.site)
        && after.shots.some(shot => shot.elapsed === 0 && shot.from.every((coordinate, axis) =>
          coordinate === sitePosition(candidate.site)[axis])))
      if (archer) cue = { kind: 'beacon', site: archer.site,
        before: reloadTime(towerDetails.archer.shotInterval, seconds), after: reloadTime(archer.cooldown, seconds) }
    }
  })
  return { round: next, cue }
}
