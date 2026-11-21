export type Point = readonly [number, number]
export type Route = readonly Point[]

export const columns = 9
export const rows = 13

export const frontierApproach = [
  [2, 0], [2, 1], [2, 2], [2, 3], [3, 3], [4, 3], [5, 3],
  [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [4, 8], [3, 8],
  [2, 8], [2, 9], [2, 10], [2, 11],
] as const

// Keep the original approach so enemies in older saves retain their progress.
export function withGateRoad(approach: Route): Route {
  const [x, y] = approach[approach.length - 1]
  const gateX = x + 3
  return [...approach, ...connectRoute([x, y], [gateX, y], [gateX, rows - 1]).slice(1)]
}

export const route = withGateRoad(frontierApproach)
export const defaultRoutes: readonly Route[] = [route]

export function isBuildable(site: number, routes = defaultRoutes): boolean {
  if (!Number.isInteger(site) || site < 0 || site >= columns * rows) return false
  const [x, y] = sitePosition(site)
  return !routes.some(path => path.some(([roadX, roadY]) => roadX === x && roadY === y))
}

export function connectRoute(...waypoints: Point[]): Route {
  const tiles = [waypoints[0]]
  for (const [targetX, targetY] of waypoints.slice(1)) {
    let [x, y] = tiles[tiles.length - 1]
    if (x !== targetX && y !== targetY) throw new Error('Road bends must follow the grid')
    while (x !== targetX || y !== targetY) {
      x += Math.sign(targetX - x)
      y += Math.sign(targetY - y)
      tiles.push([x, y])
    }
  }
  return tiles
}

export function sitePosition(site: number): readonly [number, number] {
  return [site % columns, Math.floor(site / columns)]
}
