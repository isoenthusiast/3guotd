import { h, render } from 'preact'
import { EnemyGuide } from '../src/combat-guide'
import type { Round } from '../src/game/round'

export function renderEnemyGuide(round: Round, host: HTMLElement) {
  render(h(EnemyGuide, { round }), host)
  return () => render(null, host)
}
