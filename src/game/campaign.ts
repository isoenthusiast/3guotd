import type { Mission } from './round'

export const changban = {
  id: 'changban',
  title: 'Hold the Changban Road',
  setting: 'Changban · 208 CE',
  briefing: 'Families are still on the road. Hold the crossing until the last group reaches the far bank.',
  victory: 'The last group is across. Liu Bei’s forces are still retreating. Keep moving toward the river.',
  defeat: 'The crossing has fallen. Retry the wave to change your defenses.',
  chronicle: 'Cao Cao defeated Liu Bei at Changban. In the novel, Zhang Fei holds the bridge as Zhao Yun crosses. The families, map, and evacuation waves are game fiction.',
  waves: [
    { name: 'Infantry approaching', sequence: ['infantry', 'infantry', 'infantry', 'infantry', 'infantry', 'infantry'] },
    { name: 'Runners approaching', sequence: ['runner', 'runner', 'runner', 'runner', 'runner', 'runner'] },
    { name: 'Infantry and runners approaching', sequence: ['infantry', 'runner', 'infantry', 'runner',
      'veteran', 'runner', 'veteran', 'veteranRunner'] },
  ],
} as const satisfies Mission
