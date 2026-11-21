import { columns, route, rows, sitePosition } from './game/board'
import { enemyDetails, enemyPosition, impactTime, shotFlightTime, towerRange } from './game/round'
import type { Round, TowerKind } from './game/round'

export const tile = 64

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

export function drawBattlefield(
  ctx: CanvasRenderingContext2D, round: Round, selected: number | null, kind: TowerKind, previewReach: boolean,
) {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      ctx.fillStyle = (x + y) % 2 ? '#49624a' : '#4c654d'
      ctx.fillRect(x * tile, y * tile, tile, tile)
      ctx.strokeStyle = '#263e322f'
      ctx.lineWidth = 1
      ctx.strokeRect(x * tile + 0.5, y * tile + 0.5, tile - 1, tile - 1)
    }
  }
  ctx.lineCap = 'square'
  ctx.lineJoin = 'round'
  for (const [width, color] of [[54, '#80664b'], [47, '#c7a778']] as const) {
    ctx.beginPath()
    for (const [index, point] of route.entries()) {
      const [x, y] = center(point)
      if (index === 0) ctx.moveTo(x, y - tile / 2)
      ctx.lineTo(x, y)
      if (index === route.length - 1) ctx.lineTo(x, y + tile / 2)
    }
    ctx.lineWidth = width
    ctx.strokeStyle = color
    ctx.stroke()
  }

  const [gateX, gateY] = center(route[route.length - 1])
  ctx.fillStyle = '#573b30'
  ctx.fillRect(gateX - 19, gateY - 23, 38, 48)
  ctx.fillStyle = '#ac835b'
  ctx.fillRect(gateX - 14, gateY - 18, 28, 39)
  ctx.fillStyle = '#362b25'
  ctx.fillRect(gateX - 9, gateY + 1, 18, 23)
  roof(ctx, gateX, gateY - 22, 28, '#473b3b')

  if (selected !== null) {
    const active = round.towers.find(tower => tower.site === selected)
    const [x, y] = center(sitePosition(selected))
    ctx.beginPath()
    ctx.arc(x, y, towerRange(active?.kind ?? kind, active?.reach ?? false) * tile, 0, 2 * Math.PI)
    ctx.fillStyle = '#fff0af21'
    ctx.strokeStyle = '#ffe2a0b0'
    ctx.lineWidth = 3
    ctx.fill()
    ctx.stroke()
    if (active && previewReach) {
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

  for (const tower of round.towers) {
    const [x, y] = center(sitePosition(tower.site))
    const archer = tower.kind === 'archer'
    const half = archer ? 16 : 21
    ctx.fillStyle = '#382b27'
    ctx.fillRect(x - half, y - 10, half * 2, 31)
    ctx.fillStyle = '#d1a979'
    ctx.fillRect(x - half + 4, y - 7, 5, 25)
    ctx.fillRect(x + half - 9, y - 7, 5, 25)
    roof(ctx, x, y - (archer ? 18 : 12), half + 7, '#7b3934')
    ctx.strokeStyle = '#f6cc8b'
    ctx.lineWidth = 3
    ctx.beginPath()
    if (archer) {
      ctx.arc(x - 5, y + 5, 10, -Math.PI / 2, Math.PI / 2)
    } else {
      ctx.arc(x, y + 9, 9, 0, 2 * Math.PI)
    }
    ctx.stroke()
    ctx.fillStyle = '#fff0bb'
    if (tower.reach) ctx.fillRect(x - 10, y + 24, 8, 4)
    if (tower.power) ctx.fillRect(x + 2, y + 24, 8, 4)
  }

  const targets = new Map<number, [number, number]>()
  for (const enemy of round.enemies) {
    const [x, y] = center(enemyPosition(enemy.progress))
    const detail = enemyDetails(enemy)
    targets.set(enemy.id, [x, y])
    ctx.fillStyle = detail.runner ? '#593f78' : '#353959'
    ctx.beginPath()
    ctx.ellipse(x, y + 6, detail.runner ? 10 : 16, 16, 0, 0, 2 * Math.PI)
    ctx.fill()
    ctx.fillStyle = detail.level === 2 ? '#e5b168' : '#dcc5a0'
    ctx.beginPath()
    ctx.arc(x, y - 5, detail.runner ? 6 : 8, 0, 2 * Math.PI)
    ctx.fill()
    if (enemy.slowed) {
      ctx.strokeStyle = '#c6f2f0'
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.ellipse(x, y + 18, 19, 7, 0, 0, 2 * Math.PI)
      ctx.stroke()
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
    ctx.strokeStyle = '#ffe5a3'
    ctx.lineWidth = 7
    ctx.beginPath()
    ctx.moveTo(x + dx * tail, y + dy * tail)
    ctx.lineTo(x + dx * progress, y + dy * progress)
    ctx.stroke()
    ctx.fillStyle = '#fff7d0'
    ctx.beginPath()
    ctx.arc(x + dx * progress, y + dy * progress, 6, 0, 2 * Math.PI)
    ctx.fill()
  }
  for (const hit of round.impacts) {
    const [x, y] = center(hit.at)
    const progress = hit.elapsed / impactTime
    if (progress < 1) {
      ctx.globalAlpha = 1 - progress
      ctx.strokeStyle = '#fff2c7'
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.arc(x, y, 10 + progress * 22, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.globalAlpha = 1
    }
    if (hit.silver) {
      ctx.font = 'bold 26px system-ui'
      ctx.textAlign = 'center'
      ctx.lineWidth = 5
      ctx.strokeStyle = '#31251d'
      ctx.fillStyle = '#ffe4a1'
      const labelX = Math.max(33, Math.min(columns * tile - 33, x))
      const labelY = y - 17 - hit.elapsed * 30
      ctx.strokeText(`+${hit.silver}`, labelX, labelY)
      ctx.fillText(`+${hit.silver}`, labelX, labelY)
    }
  }
  for (const enemy of round.enemies) {
    const [x, y] = targets.get(enemy.id)!
    const max = enemyDetails(enemy).health
    const width = 46
    ctx.fillStyle = '#262827'
    ctx.fillRect(x - width / 2 - 2, y - 32, width + 4, 12)
    ctx.fillStyle = '#e8f69b'
    const pipWidth = width / max
    for (let pip = 0; pip < enemy.health; pip++) {
      ctx.fillRect(x - width / 2 + pip * pipWidth, y - 30, pipWidth - 2, 8)
    }
  }
}
