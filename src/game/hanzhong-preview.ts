import { connectRoute } from './board'
import type { Mission } from './round'

// A playtest-only mission. Keep its route and unlocks out of the released campaign.
export const hanzhongPreview: Mission = {
  id: 'hanzhong-preview:1',
  battleId: 'hanzhong-preview',
  level: 1,
  title: 'Hanzhong Supply Pass',
  setting: 'Hanzhong · 219 CE',
  briefing: 'Prototype a defense at the upper bend or guard the last turn before the supply gate.',
  objective: 'Hold the supply gate',
  gate: 'Supply gate',
  milestone: 'waves held',
  milestoneCount: 3,
  victory: 'The supply gate held.',
  defeat: 'The supply gate fell.',
  chronicle: 'This supply-pass defense is fictional.',
  terrain: 'pass',
  routes: [connectRoute([2, 0], [2, 3], [6, 3], [6, 7], [3, 7], [3, 10], [6, 10], [6, 12])],
  waves: [
    { name: 'Infantry column', sequence: ['infantry', 'infantry', 'infantry', 'infantry'], interval: 1.25 },
    { name: 'Fast riders', sequence: ['cavalry', 'runner', 'cavalry', 'runner'], interval: 1.25 },
    { name: 'Mixed column', sequence: ['infantry', 'veteran', 'runner', 'cavalry'], interval: 1.35 },
  ],
}

export const hanzhongChallengeSilver = 60
export const hanzhongChallenge: Mission = {
  ...hanzhongPreview,
  id: 'hanzhong-rider-ambush:1',
  battleId: 'hanzhong-rider-ambush',
  title: 'Hanzhong Rider Ambush',
  briefing: '60 silver to deploy. Build before combat. Stop 3 cavalry and 2 runners.',
  milestoneCount: 1,
  victory: 'Rider Ambush cleared.',
  waves: [{
    name: 'Rider ambush',
    sequence: ['cavalry', 'runner', 'cavalry', 'runner', 'cavalry'],
    interval: 1.35,
  }],
}
