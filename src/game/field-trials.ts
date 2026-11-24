import { campaign } from './campaign'
import { createRound } from './round'
import type { Mission, Round, TrialTower } from './round'

export const practiceTowers = ['volley', 'crossbow', 'beacon'] as const
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

export function practiceRound(kind: TrialTower): Round {
  return { ...createRound(20, practiceMap), supportTower: kind }
}
