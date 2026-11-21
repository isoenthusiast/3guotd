export const columns = 12
export const rows = 8

export const route = [
  [0, 2], [1, 2], [2, 2], [3, 2], [3, 3], [3, 4], [3, 5],
  [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [8, 4], [8, 3],
  [8, 2], [9, 2], [10, 2], [11, 2],
] as const

const road = new Set<string>(route.map(([x, y]) => `${x},${y}`))

export function isBuildable(site: number): boolean {
  return Number.isInteger(site) && site >= 0 && site < columns * rows
    && !road.has(`${site % columns},${Math.floor(site / columns)}`)
}

export function sitePosition(site: number): readonly [number, number] {
  return [site % columns, Math.floor(site / columns)]
}
