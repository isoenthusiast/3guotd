import { columns, rows, sitePosition } from './game/board'
import { attackerName, beaconArcher, buildChoices, isTrialTower, canBuildAt, closedSites, enemyPosition, impactTime, enemyMaxHealth, objectiveProgress, roundRoutes, routeForEnemy, shotFlightTime, towerRange } from './game/round'
import type { Round, TowerKind } from './game/round'

import { drawAttacker } from './attacker-art'
import { currentVisualComfort } from './visual-comfort'
import { rewardCues } from './combat-cues'
import { paintArt } from './battlefield-art-assets'
import { drawLandscape, drawObjective, drawRoadCoverage, drawRoadWear, objectiveAnimationPending } from './battlefield-scenery'
export { loadBattlefieldArt } from './battlefield-art-assets'
export { placementCoverage, roadCoverage } from './battlefield-scenery'

export const tile = 64
export type BattlefieldArtOptions = { timeSeconds?: number; previewKind?: TowerKind; reducedEffects?: boolean; reducedMotion?: boolean }

function cue(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, font = 22) {
  ctx.save()
  ctx.font = `bold ${font}px system-ui`
  const width = ctx.measureText(text).width
  x = Math.max(width / 2 + 7, Math.min(columns * tile - width / 2 - 7, x))
  ctx.fillStyle = '#20291fed'; ctx.fillRect(x - width / 2 - 6, y - font, width + 12, font + 7)
  ctx.textAlign = 'center'; ctx.fillStyle = '#fff2cf'; ctx.fillText(text, x, y)
  ctx.restore()
}

function center([x, y]: readonly [number, number]): [number, number] {
  return [(x + 0.5) * tile, (y + 0.5) * tile]
}

function roof(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, color: string) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(x - width, y + 8)
  ctx.quadraticCurveTo(x - width * 0.55, y + 8, x - 8, y - 9)
  ctx.lineTo(x + 8, y - 9)
  ctx.quadraticCurveTo(x + width * 0.55, y + 8, x + width, y + 8)
  ctx.closePath()
  ctx.fill()
}

export function drawTower(ctx: CanvasRenderingContext2D, x: number, y: number, kind: TowerKind) {
  if (kind === 'beacon') {
    ctx.save()
    ctx.translate(x, y)
    ctx.fillStyle = '#473428'
    ctx.fillRect(-17, 17, 34, 7)
    ctx.fillRect(-4, -23, 8, 45)
    ctx.fillStyle = '#9c653e'
    ctx.fillRect(-10, -20, 20, 22)
    ctx.fillStyle = '#ffe1a1'
    ctx.fillRect(-6, -16, 12, 14)
    roof(ctx, 0, -22, 15, '#554131')
    ctx.restore()
    return
  }
  if (kind === 'crossbow') {
    ctx.save()
    ctx.translate(x, y)
    ctx.fillStyle = '#482e24'
    ctx.fillRect(-19, -12, 38, 36)
    ctx.fillStyle = '#997052'
    ctx.fillRect(-15, -9, 30, 27)
    ctx.strokeStyle = '#ffcf99'
    ctx.lineJoin = 'round'
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(-24, -14)
    ctx.quadraticCurveTo(0, -32, 24, -14)
    ctx.lineTo(0, 0)
    ctx.closePath()
    ctx.moveTo(0, 14)
    ctx.lineTo(0, -24)
    ctx.stroke()
    ctx.restore()
    return
  }
  if (kind === 'volley') {
    ctx.save()
    ctx.translate(x, y)
    ctx.fillStyle = '#482e24'
    ctx.fillRect(-24, -12, 48, 35)
    ctx.fillStyle = '#ac744e'
    ctx.fillRect(-21, -9, 42, 21)
    ctx.strokeStyle = '#ffcf99'
    ctx.lineWidth = 3
    for (const offset of [-13, 0, 13]) {
      ctx.beginPath()
      ctx.moveTo(offset - 4, 7)
      ctx.lineTo(offset + 4, -20)
      ctx.lineTo(offset - 1, -17)
      ctx.stroke()
    }
    ctx.restore()
    return
  }
  const width = kind === 'archer' ? 54 : 53
  const height = kind === 'archer' ? 72 : 55
  if (paintArt(ctx, kind, x - width / 2, y + 25 - height, width, height)) return
  ctx.save()
  ctx.translate(x, y)
  ctx.fillStyle = '#29262280'
  ctx.beginPath()
  ctx.ellipse(0, 21, 24, 7, 0, 0, Math.PI * 2)
  ctx.fill()

  ctx.strokeStyle = '#38291f'
  ctx.lineWidth = 7
  ctx.beginPath()
  const top = kind === 'archer' ? -14 : 8
  ctx.moveTo(-19, 21)
  ctx.lineTo(-12, top)
  ctx.lineTo(12, top)
  ctx.lineTo(19, 21)
  ctx.moveTo(-15, 5)
  ctx.lineTo(16, 19)
  ctx.moveTo(15, 5)
  ctx.lineTo(-16, 19)
  ctx.stroke()
  ctx.strokeStyle = '#ac835d'
  ctx.lineWidth = 3
  ctx.stroke()

  if (kind === 'archer') {
    ctx.fillStyle = '#b88759'
    ctx.fillRect(-18, -11, 36, 6)
    ctx.fillRect(-14, -23, 3, 14)
    ctx.fillRect(11, -23, 3, 14)
    roof(ctx, 0, -24, 27, '#343437')
    ctx.strokeStyle = '#888077'
    ctx.beginPath()
    ctx.moveTo(-19, -20)
    ctx.lineTo(19, -20)
    ctx.stroke()
  } else {
    ctx.fillStyle = '#80372a'
    ctx.beginPath()
    ctx.ellipse(1, -5, 22, 15, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#e2bf8a'
    ctx.beginPath()
    ctx.ellipse(-9, -5, 13, 15, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = '#452a24'
    ctx.stroke()
  }
  ctx.restore()
}

/** Returns true while a departure/delivery needs another animation frame,
 * including after a win. Asset loading and frame scheduling belong to the app.
 */
export function drawBattlefield(
  ctx: CanvasRenderingContext2D, round: Round, selected: number | null,
  options: BattlefieldArtOptions = {},
) {
  const comfort = currentVisualComfort()
  const reducedMotion = options.reducedMotion ?? comfort.reducedMotion
  const reducedEffects = options.reducedEffects ?? comfort.reducedEffects
  const time = options.timeSeconds ?? (typeof performance === 'undefined' ? round.waveAge : performance.now() / 1000)
  const routes = roundRoutes(round)
  drawLandscape(ctx, round)
  ctx.lineCap = 'square'
  ctx.lineJoin = 'round'
  for (const [width, color] of [[57, '#6f6844'], [52, '#ac9461'], [45, '#dcc28c'], [32, '#e2ca98']] as const) {
    ctx.beginPath()
    for (const path of routes) {
      for (const [index, point] of path.entries()) {
        const [x, y] = center(point)
        if (index === 0) ctx.moveTo(x, y - tile / 2)
        ctx.lineTo(x, y)
        if (index === path.length - 1) ctx.lineTo(x, y + tile / 2)
      }
    }
    ctx.lineWidth = width
    ctx.strokeStyle = color
    ctx.stroke()
  }

  drawRoadWear(ctx, routes)
  const [gateX, gateY] = center(routes[0][routes[0].length - 1])
  const closed = closedSites(round)
  const nextClosures = round.mission?.closedSites?.[round.waveNumber] ?? []
  for (const site of new Set([...closed, ...nextClosures])) {
    const [x, y] = center(sitePosition(site))
    ctx.fillStyle = closed.includes(site) ? '#492e2e' : '#9b673b'
    ctx.fillRect(x - 26, y - 26, 52, 52)
    ctx.strokeStyle = '#ffe2ac'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(x - 15, y - 15)
    ctx.lineTo(x + 15, y + 15)
    ctx.moveTo(x + 15, y - 15)
    ctx.lineTo(x - 15, y + 15)
    ctx.stroke()
    ctx.save()
    ctx.setLineDash(closed.includes(site) ? [] : [6, 5])
    ctx.strokeRect(x - 26, y - 26, 52, 52)
    ctx.restore()
    cue(ctx, closed.includes(site) ? 'Closed' : 'Soon', x, y + 24, 15)
  }
  const objective = drawObjective(ctx, round, time, gateX, gateY, reducedMotion)
  if (!objective && !paintArt(ctx, 'gate', gateX - 58, gateY - 55, 116, 80)) {
    ctx.fillStyle = '#a98351'
    ctx.fillRect(gateX - 31, gateY - 5, 62, 26)
    roof(ctx, gateX, gateY - 19, 30, '#37383b')
  }

  if (round.gateHit) {
    ctx.strokeStyle = '#ffa487'
    ctx.lineWidth = 6
    ctx.strokeRect(gateX - 27, gateY - 26, 54, 54)
    const lane = round.gateHit.routeIndex === undefined ? 'lane unrecorded' : `Entry ${round.gateHit.routeIndex + 1}`
    cue(ctx, `${attackerName(round.gateHit.kind)} breach · ${lane}`,
      columns * tile / 2, gateY - 83)
  }
  if (round.mission && objectiveProgress(round) > 0) {
    cue(ctx, `${objectiveProgress(round)}/${round.mission.milestoneCount} ${round.mission.milestone}`,
      columns * tile / 2, gateY - 111, 20)
  }

  for (const path of routes) {
    const [x, y] = center(path[0])
    ctx.fillStyle = '#652b24'
    ctx.fillRect(x - 12, y - 22, 24, 17)
    ctx.strokeStyle = '#fff0cc'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(x - 6, y - 16)
    ctx.lineTo(x, y - 10)
    ctx.lineTo(x + 6, y - 16)
    ctx.stroke()
  }

  const landmarks = routes.map((path, index) => ({
    label: routes.length > 1 ? `Entry ${index + 1}` : 'Entry',
    point: center(path[0]),
  }))
  landmarks.push({ label: round.mission?.gate ?? 'Shu Outpost Gate', point: [gateX, objective ? gateY - 48 : gateY] })
  ctx.font = 'bold 25px system-ui'
  for (const { label, point: [x, y] } of landmarks) {
    const right = x < columns * tile / 2
    const labelWidth = ctx.measureText(label).width
    const desiredX = right ? x + 34 : x - 34 - labelWidth
    const labelX = Math.max(4, Math.min(columns * tile - labelWidth - 4, desiredX))
    ctx.textAlign = 'left'
    ctx.lineWidth = 5
    ctx.strokeStyle = '#29332a'
    ctx.fillStyle = '#fff0cc'
    ctx.strokeText(label, labelX, y + 7)
    ctx.fillText(label, labelX, y + 7)
  }

  if (selected !== null && canBuildAt(round, selected) && !round.towers.some(tower => tower.site === selected)) {
    const [x, y] = center(sitePosition(selected))
    ctx.save()
    ctx.lineWidth = 4
    ctx.strokeStyle = '#ffd08a'
    ctx.beginPath()
    ctx.arc(x, y, towerRange('archer', false) * tile, 0, 2 * Math.PI)
    ctx.stroke()
    const support = buildChoices(round)[1]
    ctx.strokeStyle = support === 'drum' ? '#b7f1e9' : '#f2ac91'
    ctx.setLineDash(support === 'drum' ? [9, 5] : [3, 5])
    ctx.beginPath()
    ctx.arc(x, y, towerRange(support, false) * tile, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.restore()
  }

  const active = round.towers.find(tower => tower.site === selected)
  if (active) {
    const [x, y] = center(sitePosition(active.site))
    ctx.save()
    if (active.kind === 'drum') ctx.setLineDash([9, 5])
    ctx.beginPath()
    ctx.arc(x, y, towerRange(active.kind, active.reach) * tile, 0, 2 * Math.PI)
    ctx.fillStyle = '#fff0af21'
    ctx.strokeStyle = '#ffe2a0b0'
    ctx.lineWidth = 3
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    if (!active.reach && !isTrialTower(active.kind)) {
      ctx.save()
      ctx.setLineDash([9, 5])
      ctx.strokeStyle = '#fff5c4'
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.arc(x, y, towerRange(active.kind, true) * tile, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.restore()
    }
  }

  if (selected !== null) {
    drawRoadCoverage(ctx, round, selected, options.previewKind)
    const links = round.towers.filter(tower => tower.kind === 'beacon').map(tower => tower.site)
    if (!active && round.supportTower === 'beacon' && canBuildAt(round, selected)) links.push(selected)
    for (const site of links) {
      const linked = beaconArcher(round.towers, site)
      if (linked === undefined || (site !== selected && linked !== selected)) continue
      const [x, y] = center(sitePosition(site))
      const [ax, ay] = center(sitePosition(linked))
      ctx.save()
      ctx.lineWidth = 5
      ctx.strokeStyle = '#fff4aa'
      ctx.setLineDash([5, 6])
      ctx.beginPath()
      ctx.moveTo(x, y - 12)
      ctx.lineTo(ax, ay - 12)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.strokeRect(ax - 24, ay - 25, 48, 47)
      ctx.restore()
    }
  }

  for (const tower of round.towers) {
    const [x, y] = center(sitePosition(tower.site))
    if (tower.kind === 'drum') {
      const affected = round.enemies.filter(enemy => {
        const [ex, ey] = center(enemyPosition(enemy.progress, routeForEnemy(round, enemy)))
        return enemy.slowed && Math.hypot(ex - x, ey - y) <= towerRange(tower.kind, tower.reach) * tile
      })
      if (affected.length && !reducedEffects) {
        const pulse = (round.waveAge * 1.8) % 1
        ctx.save()
        ctx.strokeStyle = '#b7f1e9'
        ctx.lineWidth = 3
        ctx.globalAlpha = reducedMotion ? .5 : .65 * (1 - pulse)
        ctx.beginPath()
        ctx.arc(x, y, reducedMotion ? 30 : 22 + pulse * towerRange(tower.kind, tower.reach) * tile, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.globalAlpha = .55
        ctx.setLineDash([3, 8])
        for (const enemy of affected) {
          const [ex, ey] = center(enemyPosition(enemy.progress, routeForEnemy(round, enemy)))
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(ex, ey); ctx.stroke()
        }
        ctx.restore()
      }
    }
    drawTower(ctx, x, y, tower.kind)
    ctx.fillStyle = '#fff0bb'
    if (tower.reach) ctx.fillRect(x - 10, y + 24, 8, 4)
    if (tower.power) ctx.fillRect(x + 2, y + 24, 8, 4)
  }

  const targets = new Map<number, [number, number]>()
  for (const enemy of round.enemies) {
    const path = routeForEnemy(round, enemy)
    const [x, y] = center(enemyPosition(enemy.progress, path))
    targets.set(enemy.id, [x, y])
    const i = Math.min(Math.floor(enemy.progress), path.length - 2)
    if (enemy.slowed) {
      ctx.strokeStyle = '#c6f2f0'
      ctx.lineWidth = 4
      if (!reducedEffects) {
        ctx.beginPath(); ctx.ellipse(x, y + 18, 19, 7, 0, 0, 2 * Math.PI); ctx.stroke()
      }
      // Double underline remains recognizable without color or expanding rings.
      ctx.strokeStyle = '#27382c'; ctx.lineWidth = 7
      ctx.beginPath(); ctx.moveTo(x - 12, y + 24); ctx.lineTo(x + 12, y + 24); ctx.stroke()
      ctx.strokeStyle = '#dcf6ec'; ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(x - 12, y + 22); ctx.lineTo(x + 12, y + 22)
      ctx.moveTo(x - 8, y + 26); ctx.lineTo(x + 8, y + 26); ctx.stroke()
    }
    ctx.save()
    ctx.translate(x, y)
    if (path[i + 1][0] < path[i][0]) ctx.scale(-1, 1)
    drawAttacker(ctx, enemy.kind, enemy.progress, { reducedMotion })
    ctx.restore()
    if (enemy.kind === 'commander') {
      const waiting = round.enemies.some(other => other.id < enemy.id)
      cue(ctx, waiting ? 'WAIT · escort' : 'GO · escort clear', x, y < tile ? y + 52 : y - 47, 22)
    }
  }
  for (const shot of round.shots) {
    const target = targets.get(shot.targetId)
    if (!target) continue
    const [x, y] = center(shot.from)
    const progress = shot.elapsed / shotFlightTime
    const dx = target[0] - x
    const dy = target[1] - y
    const tail = Math.max(0, progress - 0.24)
    ctx.strokeStyle = shot.heavy ? '#f2ac91' : '#ffe5a3'
    ctx.lineWidth = reducedEffects ? 2 : shot.heavy ? 10 : 7
    if (!reducedEffects && !reducedMotion) {
      ctx.beginPath()
      ctx.moveTo(x + dx * tail, y + dy * tail)
      ctx.lineTo(x + dx * progress, y + dy * progress)
      ctx.stroke()
    }
    ctx.fillStyle = '#fff7d0'
    ctx.beginPath()
    ctx.arc(x + dx * progress, y + dy * progress, reducedEffects ? 3 : 6, 0, 2 * Math.PI)
    ctx.fill()
  }
  for (const hit of round.impacts) {
    const [x, y] = center(hit.at)
    const progress = hit.elapsed / impactTime
    if (progress < 1 && !reducedEffects) {
      ctx.globalAlpha = 1 - progress
      ctx.strokeStyle = '#fff2c7'
      ctx.lineWidth = 5
      ctx.beginPath()
      if (reducedMotion) ctx.rect(x - 8, y - 8, 16, 16)
      else ctx.arc(x, y, 10 + progress * 22, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.globalAlpha = 1
    }
  }
  for (const reward of rewardCues(round)) {
    const [x, y] = center([reward.x, reward.y])
    ctx.font = 'bold 26px system-ui'
    ctx.textAlign = 'center'
    ctx.lineWidth = 5
    ctx.strokeStyle = '#31251d'
    ctx.fillStyle = '#ffe4a1'
    const label = `+${reward.silver} silver`
    const half = ctx.measureText(label).width / 2 + 4
    const labelX = Math.max(half, Math.min(columns * tile - half, x))
    const labelY = y - 17 - (reducedMotion ? 0 : reward.elapsed * 30)
    ctx.strokeText(label, labelX, labelY)
    ctx.fillText(label, labelX, labelY)
  }
  for (const enemy of round.enemies) {
    const [x, y] = targets.get(enemy.id)!
    const max = enemyMaxHealth(round, enemy.kind)
    const width = 46
    ctx.fillStyle = '#262827'
    const barX = Math.max(width / 2 + 2, Math.min(columns * tile - width / 2 - 2, x))
    ctx.fillRect(barX - width / 2 - 2, y - 32, width + 4, 12)
    ctx.fillStyle = '#e8f69b'
    const health = Math.max(0, Math.min(max, enemy.health))
    if (max > 10) {
      ctx.fillRect(barX - width / 2, y - 30, width * health / max, 8)
    } else {
      const pipWidth = width / max
      for (let pip = 0; pip < health; pip++) {
        ctx.fillRect(barX - width / 2 + pip * pipWidth, y - 30, Math.max(1, pipWidth - 2), 8)
      }
    }
  }
  return !reducedMotion && objective && round.phase !== 'lost' && objectiveAnimationPending(ctx, time)
}
