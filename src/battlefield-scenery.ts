import { columns, rows, sitePosition } from './game/board'
import type { Point, Route } from './game/board'
import { buildChoices, canBuildAt, objectiveProgress, roundRoutes, towerRange } from './game/round'
import type { Round, TowerKind } from './game/round'
import { paintArt } from './battlefield-art-assets'

const tile = 64
type Segment = readonly [Point, Point]

/** Clip continuous road segments against the actual Euclidean attack radius. */
export function roadCoverage(routes: readonly Route[], site: number, kind: TowerKind, reach = false) {
  const [cx, cy] = sitePosition(site)
  const radius = towerRange(kind, reach)
  const segments: Segment[] = []
  const zones = new Set<string>()
  const seen = new Set<string>()
  for (const route of routes) for (let i = 1; i < route.length; i++) {
    const a = route[i - 1], b = route[i]
    const key = [a.join(','), b.join(',')].sort().join(':')
    const dx = b[0] - a[0], dy = b[1] - a[1]
    const length2 = dx * dx + dy * dy
    if (!length2) continue
    const ax = a[0] - cx, ay = a[1] - cy
    const projection = -(ax * dx + ay * dy) / length2
    const discriminant = radius * radius - (ax * ax + ay * ay - projection * projection * length2)
    if (discriminant <= 0) continue
    const half = Math.sqrt(discriminant / length2)
    const start = Math.max(0, projection - half), end = Math.min(1, projection + half)
    if (end <= start) continue
    const along = (i - 1 + (start + end) / 2) / (route.length - 1)
    zones.add(along < 1 / 3 ? 'entry' : along < 2 / 3 ? 'middle' : 'gate')
    if (seen.has(key)) continue
    seen.add(key)
    segments.push([[a[0] + dx * start, a[1] + dy * start], [a[0] + dx * end, a[1] + dy * end]])
  }
  const roadTiles = segments.reduce((sum, [a, b]) => sum + Math.hypot(b[0] - a[0], b[1] - a[1]), 0)
  return { segments, zones: [...zones], roadTiles, reachesRoad: roadTiles > 0 }
}

export function placementCoverage(round: Round, site: number) {
  if (!canBuildAt(round, site) || round.towers.some(tower => tower.site === site)) return null
  const routes = roundRoutes(round)
  return { archer: roadCoverage(routes, site, 'archer'), drum: roadCoverage(routes, site, 'drum'), volley: roadCoverage(routes, site, 'volley'), crossbow: roadCoverage(routes, site, 'crossbow') }
}

export function drawRoadCoverage(ctx: CanvasRenderingContext2D, round: Round, site: number,
  kind?: TowerKind) {
  const coverage = placementCoverage(round, site)
  if (!coverage) return
  ctx.save()
  ctx.lineCap = 'round'
  const choices = buildChoices(round)
  for (const tower of [...choices].reverse()) {
    if (kind && tower !== kind) continue
    ctx.strokeStyle = tower === 'archer' ? '#ffdc87' : tower === 'drum' ? '#7bd9dc' : '#f2ac91'
    ctx.lineWidth = tower === 'archer' ? 13 : 25
    ctx.setLineDash(tower === 'drum' ? [8, 6] : tower === 'archer' ? [] : [3, 5])
    ctx.beginPath()
    for (const [a, b] of coverage[tower].segments) {
      ctx.moveTo((a[0] + .5) * tile, (a[1] + .5) * tile)
      ctx.lineTo((b[0] + .5) * tile, (b[1] + .5) * tile)
    }
    ctx.stroke()
  }
  const [x, y] = sitePosition(site)
  if (kind ? !coverage[kind].reachesRoad : choices.every(tower => !coverage[tower].reachesRoad)) {
    ctx.font = 'bold 17px system-ui'
    ctx.textAlign = 'center'
    ctx.strokeStyle = '#35291f'
    ctx.lineWidth = 4
    ctx.fillStyle = '#ffe0c0'
    ctx.strokeText('No road', (x + .5) * tile, (y + .9) * tile)
    ctx.fillText('No road', (x + .5) * tile, (y + .9) * tile)
  }
  ctx.restore()
}

export function drawLandscape(ctx: CanvasRenderingContext2D, round: Round) {
  const terrain = round.mission?.terrain ?? 'field'
  ctx.fillStyle = ({ field: '#929664', river: '#899778', wood: '#788761', pass: '#a29575' })[terrain]
  ctx.fillRect(0, 0, columns * tile, rows * tile)
  paintArt(ctx, terrain, 0, 0, columns * tile, rows * tile)
  if (round.mission?.battleId === 'jing') {
    const path = roundRoutes(round)[0]
    const gateX = (path[path.length - 1][0] + .5) * tile
    const bottom = rows * tile
    const inlet = ctx.createLinearGradient(0, bottom - tile, 0, bottom)
    inlet.addColorStop(0, '#7eaa9d')
    inlet.addColorStop(1, '#416d6c')
    ctx.fillStyle = inlet
    ctx.beginPath()
    ctx.moveTo(gateX - 25, bottom)
    ctx.bezierCurveTo(gateX + 4, bottom - 57, columns * tile - 90, bottom - 33, columns * tile, bottom - 86)
    ctx.lineTo(columns * tile, bottom)
    ctx.fill()
  }
}

/** Sparse brush marks break up the lane without changing its hit geometry. */
export function drawRoadWear(ctx: CanvasRenderingContext2D, routes: readonly Route[]) {
  ctx.save()
  ctx.lineCap = 'round'
  const seen = new Set<string>()
  for (const path of routes) for (let i = 0; i < path.length - 1; i++) {
    const [x, y] = path[i], [nx, ny] = path[i + 1]
    const key = `${x},${y}`
    if (seen.has(key)) continue
    seen.add(key)
    const dx = nx - x, dy = ny - y
    const cx = (x + .5) * tile, cy = (y + .5) * tile
    for (const side of [-1, 1]) {
      ctx.strokeStyle = '#a98a5860'
      ctx.lineWidth = 1.4
      const offset = side * (10 + (x * 3 + y * 7) % 5)
      ctx.beginPath()
      ctx.moveTo(cx - dy * offset + dx * 7, cy + dx * offset + dy * 7)
      ctx.quadraticCurveTo(cx - dy * (offset + 1) + dx * 17, cy + dx * (offset + 1) + dy * 17,
        cx - dy * offset + dx * 29, cy + dx * offset + dy * 29)
      ctx.stroke()
      if ((x + y) % 3 === 0) {
        const ex = cx - dy * side * 29, ey = cy + dx * side * 29
        ctx.fillStyle = '#ada37c'
        ctx.beginPath(); ctx.ellipse(ex, ey, 3.8, 2.3, .5, 0, Math.PI * 2); ctx.fill()
        ctx.strokeStyle = '#6e794a90'
        ctx.beginPath(); ctx.moveTo(ex + 4, ey); ctx.lineTo(ex + 3, ey - 6)
        ctx.moveTo(ex + 4, ey); ctx.lineTo(ex + 8, ey - 4); ctx.stroke()
      }
    }
  }
  ctx.restore()
}

type ObjectiveAnimation = { mission: string; completed: number; changed: number }
const objectives = new WeakMap<CanvasRenderingContext2D, ObjectiveAnimation>()

export function objectiveAnimationPending(ctx: CanvasRenderingContext2D, time: number) {
  const state = objectives.get(ctx)
  return !!state && time - state.changed < 3
}

/** Scenery follows objectiveProgress; never changes the round or implies a delivery on loss. */
export function drawObjective(ctx: CanvasRenderingContext2D, round: Round, time: number,
  gateX: number, gateY: number, reducedMotion = false) {
  const mission = round.mission
  const ferry = mission?.battleId === 'jing'
  const cart = mission?.battleId === 'wuzhang'
  if (!ferry && !cart) return false
  const completed = objectiveProgress(round)
  let state = objectives.get(ctx)
  if (!state || state.mission !== mission!.id || completed < state.completed) {
    state = { mission: mission!.id, completed, changed: -Infinity }
    objectives.set(ctx, state)
  }
  if (completed > state.completed) {
    state.completed = completed
    state.changed = time
  }
  const progress = reducedMotion ? 1 : Math.max(0, Math.min(1, (time - state.changed) / 3))
  ctx.save()
  if (ferry) {
    ctx.fillStyle = '#765b3b'
    ctx.fillRect(gateX - 27, gateY - 26, 54, 59)
    ctx.strokeStyle = '#c1a474'
    ctx.lineWidth = 2
    for (let y = gateY - 23; y < gateY + 32; y += 7) {
      ctx.beginPath(); ctx.moveTo(gateX - 25, y); ctx.lineTo(gateX + 25, y); ctx.stroke()
    }
    // The departing hull travels toward the farther bank, then the next waits at the dock.
    const distance = Math.max(0, columns * tile - gateX + 100)
    if (progress < 1) paintArt(ctx, 'ferry', gateX - 45 + distance * progress, gateY - 12, 110, 61)
    if (completed < mission!.milestoneCount && (progress === 1 || progress > .45)) {
      paintArt(ctx, 'ferry', gateX - 45, gateY - 12 + (reducedMotion ? 0 : Math.sin(time * 2) * 1.5), 110, 61)
    }
  } else {
    paintArt(ctx, 'cottage', gateX - 62, gateY - 64, 104, 98)
    const x = progress < 1 ? gateX - 120 + progress * 160 : gateX + 4
    paintArt(ctx, 'cart', x, gateY - 34 + (progress < 1 ? Math.sin(time * 16) : 0), 78, 61)
    // Delivered sacks accumulate next to the storehouse as persistent progress.
    ctx.fillStyle = '#d5be85'
    ctx.strokeStyle = '#796442'
    ctx.lineWidth = 2
    for (let i = 0; i < completed; i++) {
      ctx.beginPath(); ctx.ellipse(gateX - 42 + i * 15, gateY + 20, 8, 11, -.2, 0, Math.PI * 2)
      ctx.fill(); ctx.stroke()
    }
  }
  ctx.restore()
  return true
}
