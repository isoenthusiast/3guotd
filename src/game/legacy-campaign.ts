// Frozen ec46433 mission rules for unversioned v1 saves. New games use campaign.ts.
import { columns, connectRoute, defaultRoutes } from './board'
import type { AttackerKind, Formation, Mission } from './round'

const formation = (name: string, sequence: readonly AttackerKind[], interval?: number): Formation => ({
  name, sequence, interval,
})
const infantry = formation('Infantry approaching', Array<AttackerKind>(6).fill('infantry'))
const runners = formation('Runners approaching', Array<AttackerKind>(6).fill('runner'))
const bows = formation('Bowmen approaching', ['infantry', 'bowman', 'bowman', 'infantry', 'bowman', 'runner'])
const cavalry = formation('Cavalry approaching', ['infantry', 'cavalry', 'runner', 'cavalry', 'infantry', 'cavalry'])
const mixed = formation('Infantry and runners approaching', [
  'infantry', 'runner', 'infantry', 'runner', 'veteran', 'runner', 'veteran', 'veteranRunner',
])
const combined = formation('Combined column approaching', [
  'infantry', 'bowman', 'cavalry', 'infantry', 'veteran', 'bowman', 'cavalry',
])
const escort = formation('Commander waits for the escort', [
  'infantry', 'bowman', 'cavalry', 'veteran', 'commander',
], 1.8)

const levels = [
  [infantry, runners, mixed],
  [infantry, bows, runners, mixed],
  [infantry, bows, cavalry, runners, combined],
  [infantry, runners, bows, cavalry, mixed, combined],
  [infantry, bows, runners, cavalry, mixed, combined, escort],
] as const

type Battle = Omit<Mission, 'id' | 'battleId' | 'level' | 'waves' | 'closedSites'> & {
  id: string
  leadIn?: string
  withdrawnSites?: readonly number[]
}

export const battles: readonly Battle[] = [
  {
    id: 'village-watch', title: 'Village Watch', setting: 'Late Han · 184 CE',
    briefing: 'Liu Bei asks you to guard the village road. Guan Yu points to the bend. Zhang Fei watches for runners.',
    victory: 'The villagers are safe. Liu Bei asks you to ride with his company.',
    defeat: 'The village road has fallen. Retry and cover the bend.',
    chronicle: 'The Yellow Turban uprising challenged Han rule in 184. This village defense is fictional.',
    routes: [connectRoute([3, 0], [3, 4], [5, 4], [5, 7], [3, 7], [3, 11])],
    gate: 'Village gate', objective: 'Protect the village road', milestone: 'watch shifts held',
    milestoneCount: 3, terrain: 'field',
  },
  {
    id: 'changban', title: 'Hold the Changban Road', setting: 'Changban · 208 CE',
    leadIn: 'After Guandu, Cao Cao strengthens his position in the north. Zhuge Liang advises Liu Bei to keep a road open toward the river.',
    briefing: 'Families are still on the road. Hold the crossing until the last group reaches the far bank.',
    victory: 'The last group is across. Liu Bei’s forces are still retreating. Keep moving toward the river.',
    defeat: 'The crossing has fallen. Retry the wave to change your defenses.',
    chronicle: 'Cao Cao defeated Liu Bei at Changban. In the novel, Zhang Fei holds the bridge as Zhao Yun crosses. The families, map, and evacuation waves are game fiction.',
    routes: defaultRoutes, gate: 'Evacuation gate', objective: 'Protect the crossing', milestone: 'groups across',
    milestoneCount: 3, terrain: 'field',
  },
  {
    id: 'red-cliffs', title: 'Lanterns at Red Cliffs', setting: 'Red Cliffs · 208 CE',
    briefing: 'Sun Quan commits his fleet to the alliance. Zhou Yu asks you to keep the signal landing clear as attackers alternate between two docks.',
    victory: 'The lantern signal is seen and the allied boats pass.',
    defeat: 'The signal landing is lost. Retry and cover both docks.',
    chronicle: 'Zhou Yu commanded Sun Quan’s forces in the allied victory over Cao Cao. The signal landing is a fictional assignment.',
    routes: [
      connectRoute([1, 0], [1, 3], [2, 3], [2, 6], [3, 6], [3, 11]),
      connectRoute([6, 0], [6, 3], [4, 3], [4, 7], [3, 7], [3, 11]),
    ],
    gate: 'Signal landing', objective: 'Protect the signal at both docks', milestone: 'signals sent',
    milestoneCount: 3, terrain: 'river',
  },
  {
    id: 'jing', title: 'The Last Boats from Jing', setting: 'Jing · 219 CE',
    leadIn: 'Liu Bei establishes a western base and wins at Hanzhong. Guan Yu remains in Jing, where he lays siege to Cao Ren.',
    briefing: 'Lü Meng has struck the rear bases. Guan Ping and the ferry captain need time for three boats to depart.',
    victory: 'The last boat departs. News of Guan Yu’s defeat follows.',
    defeat: 'The ferry has fallen. Retry and keep both approaches covered.',
    chronicle: 'While Guan Yu fought Cao Ren, Lü Meng captured rear bases and Sun Quan took control of the disputed territory. The ferry and its passengers are fictional.',
    routes: [
      connectRoute([2, 0], [2, 4], [3, 4], [3, 11]),
      connectRoute([6, 0], [6, 5], [4, 5], [4, 8], [3, 8], [3, 11]),
    ],
    gate: 'Ferry landing', objective: 'Hold the ferry until three departures', milestone: 'boats departed',
    milestoneCount: 3, terrain: 'river',
  },
  {
    id: 'yiling', title: 'The Road Back from Yiling', setting: 'Yiling · 222 CE',
    leadIn: 'Cao Pi takes the throne and Liu Bei claims the imperial title. Liu Bei marches east after the loss of Jing.',
    briefing: 'Lu Xun has broken Liu Bei’s attack. Cover Huang Quan’s isolated retreat party before the outer positions close.',
    victory: 'The party reaches safety. Lu Xun still holds the battlefield.',
    defeat: 'The retreat road is cut. Retry and rebuild behind the closing sites.',
    chronicle: 'Lu Xun defeated Liu Bei at Yiling. The particular retreat party and the closing tower sites are game fiction.',
    routes: [connectRoute([2, 0], [2, 3], [5, 3], [5, 6], [3, 6], [3, 9], [2, 9], [2, 11])],
    gate: 'Retreat gate', objective: 'Protect the retreat as outer sites close', milestone: 'stages covered',
    milestoneCount: 3, terrain: 'wood', withdrawnSites: [columns, columns + 1, columns * 2 + 1],
  },
  {
    id: 'wuzhang', title: 'The Wuzhang Supply Road', setting: 'Wuzhang · 234 CE',
    leadIn: 'Liu Shan succeeds Liu Bei. Shu and Wu restore their alliance, and Zhuge Liang turns north.',
    briefing: 'Zhuge Liang’s army faces Sima Yi. Jiang Wei and Wei Yan need three supply deliveries to secure the withdrawal.',
    victory: 'The last supplies arrive and the withdrawal begins. Your final assignment is complete.',
    defeat: 'The supply road is cut. Retry and reinforce the final bend.',
    chronicle: 'Zhuge Liang died during the final expedition facing Sima Yi. Wei conquered Shu in 263, Jin replaced Wei, and Jin conquered Wu in 280. The supply assignments are fictional.',
    routes: [connectRoute([4, 0], [4, 3], [1, 3], [1, 6], [5, 6], [5, 9], [4, 9], [4, 11])],
    gate: 'Supply post', objective: 'Keep the road open for three deliveries', milestone: 'deliveries made',
    milestoneCount: 3, terrain: 'pass',
  },
]

export const campaign: readonly Mission[] = battles.flatMap(({ id, withdrawnSites, ...battle }) =>
  levels.map((waves, index) => ({
    ...battle, battleId: id, id: `${id}:${index + 1}`, level: index + 1, waves,
    closedSites: withdrawnSites && waves.map((_, wave) => withdrawnSites.slice(0, wave)),
  })),
)

export const changban = campaign.find(mission => mission.id === 'changban:1')!

export function isMissionUnlocked(mission: Mission, clears: readonly string[]): boolean {
  const index = campaign.indexOf(mission)
  return index === 0 || (index > 0 && (clears.includes(mission.id) || clears.includes(campaign[index - 1].id)))
}

export function nextMission(mission: Mission): Mission | undefined {
  return campaign[campaign.indexOf(mission) + 1]
}
