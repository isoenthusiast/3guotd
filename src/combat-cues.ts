import type { Round } from './game/round'

/** Group nearby recent kill rewards so simultaneous kills do not print over
 * one another. Values come only from existing impacts; no simulated income.
 */
export function rewardCues(round: Round) {
  const groups: { x: number; y: number; silver: number; elapsed: number; count: number }[] = []
  for (const hit of round.impacts) {
    if (!hit.silver) continue
    const [x, y] = hit.at
    const group = groups.find(other => Math.abs(other.x - x) < 2.4 && Math.abs(other.y - y) < 1.2)
    if (group) {
      group.x = (group.x * group.count + x) / (group.count + 1)
      group.y = (group.y * group.count + y) / (group.count + 1)
      group.silver += hit.silver
      group.elapsed = Math.min(group.elapsed, hit.elapsed)
      group.count++
    } else groups.push({ x, y, silver: hit.silver, elapsed: hit.elapsed, count: 1 })
  }
  return groups
}
