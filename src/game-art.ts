import { columns, rows, sitePosition } from './game/board'
import { closedSites, enemyDetails, enemyPosition, impactTime, roundRoutes, routeForEnemy, shotFlightTime, towerRange } from './game/round'
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

export function drawTower(ctx: CanvasRenderingContext2D, x: number, y: number, kind: TowerKind) {
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

export function drawBattlefield(
  ctx: CanvasRenderingContext2D, round: Round, selected: number | null,
) {
  const routes = roundRoutes(round)
  const palette = ({
    field: ['#68714b', '#646e48'], river: ['#446961', '#40645c'],
    wood: ['#4c6246', '#465c41'], pass: ['#716049', '#6a5946'],
  })[round.mission?.terrain ?? 'field']
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      ctx.fillStyle = palette[(x + y) % 2]
      ctx.fillRect(x * tile, y * tile, tile, tile)
      ctx.strokeStyle = '#28322220'
      ctx.lineWidth = 1
      ctx.strokeRect(x * tile + 0.5, y * tile + 0.5, tile - 1, tile - 1)
      const px = x * tile
      const py = y * tile
      ctx.strokeStyle = '#2f41233f'
      ctx.beginPath()
      for (let stem = 0; stem < 3; stem++) {
        const offset = 7 + stem * 5
        const base = 16 + (x * 11 + y * 7) % 34
        ctx.moveTo(px + offset, py + base)
        ctx.lineTo(px + offset - 2 + stem * 2, py + base - 4 - stem)
      }
      ctx.stroke()
    }
  }
  ctx.lineCap = 'square'
  ctx.lineJoin = 'round'
  for (const [width, color] of [[54, '#8b6a45'], [47, '#dbbb83']] as const) {
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
  }
  ctx.fillStyle = '#a98351'
  ctx.fillRect(gateX - 31, gateY - 5, 62, 26)
  ctx.fillStyle = '#716653'
  ctx.fillRect(gateX - 31, gateY + 16, 62, 7)
  ctx.fillStyle = '#402b22'
  ctx.fillRect(gateX - 19, gateY - 17, 38, 40)
  ctx.fillStyle = '#8c6749'
  ctx.fillRect(gateX - 13, gateY - 9, 11, 30)
  ctx.fillRect(gateX + 2, gateY - 9, 11, 30)
  roof(ctx, gateX, gateY - 19, 30, '#37383b')

  if (round.gateHit) {
    ctx.strokeStyle = '#ffa487'
    ctx.lineWidth = 6
    ctx.strokeRect(gateX - 27, gateY - 26, 54, 54)
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

  if (!round.towers.some(tower => tower.site === selected) && selected !== null) {
    const [x, y] = center(sitePosition(selected))
    ctx.save()
    ctx.lineWidth = 4
    ctx.strokeStyle = '#ffd08a'
    ctx.beginPath()
    ctx.arc(x, y, towerRange('archer', false) * tile, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.strokeStyle = '#b7f1e9'
    ctx.setLineDash([9, 5])
    ctx.beginPath()
    ctx.arc(x, y, towerRange('drum', false) * tile, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.restore()
  }

  const active = round.towers.find(tower => tower.site === selected)
  if (active) {
    const [x, y] = center(sitePosition(active.site))
    ctx.beginPath()
    ctx.arc(x, y, towerRange(active.kind, active.reach) * tile, 0, 2 * Math.PI)
    ctx.fillStyle = '#fff0af21'
    ctx.strokeStyle = '#ffe2a0b0'
    ctx.lineWidth = 3
    ctx.fill()
    ctx.stroke()
    if (!active.reach) {
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
    if (tower.kind === 'drum' && round.enemies.some(enemy => {
      const [enemyX, enemyY] = center(enemyPosition(enemy.progress, routeForEnemy(round, enemy)))
      return enemy.slowed && Math.hypot(enemyX - x, enemyY - y) <= towerRange(tower.kind, tower.reach) * tile
    })) {
      ctx.strokeStyle = '#b7f1e9'
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.arc(x, y, 28 + (Math.sin(round.waveAge * 9) + 1) * 5, 0, 2 * Math.PI)
      ctx.stroke()
    }
    drawTower(ctx, x, y, tower.kind)
    ctx.fillStyle = '#fff0bb'
    if (tower.reach) ctx.fillRect(x - 10, y + 24, 8, 4)
    if (tower.power) ctx.fillRect(x + 2, y + 24, 8, 4)
  }

  const targets = new Map<number, [number, number]>()
  for (const enemy of round.enemies) {
    const [x, y] = center(enemyPosition(enemy.progress, routeForEnemy(round, enemy)))
    const detail = enemyDetails(enemy)
    targets.set(enemy.id, [x, y])
    ctx.fillStyle = detail.runner ? '#72382e' : '#33353c'
    ctx.beginPath()
    ctx.ellipse(x, y + 6, enemy.kind === 'cavalry' ? 21 : detail.runner ? 10 : 16,
      enemy.kind === 'commander' ? 20 : 16, 0, 0, 2 * Math.PI)
    ctx.fill()
    if (enemy.kind === 'cavalry') {
      ctx.fillStyle = '#6b402e'
      ctx.fillRect(x + 13, y - 8, 13, 11)
      ctx.fillRect(x - 16, y + 12, 6, 12)
      ctx.fillRect(x + 10, y + 12, 6, 12)
    } else if (enemy.kind === 'infantry' || enemy.kind === 'veteran') {
      ctx.fillStyle = '#906842'
      ctx.strokeStyle = '#342c26'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(x + 10, y + 8, 9, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
    }
    ctx.fillStyle = detail.level === 2 ? '#e5b168' : '#dcc5a0'
    ctx.beginPath()
    ctx.arc(x, y - 5, detail.runner ? 6 : 8, 0, 2 * Math.PI)
    ctx.fill()
    if (detail.level === 2) {
      ctx.fillStyle = '#302d35'
      ctx.beginPath()
      ctx.moveTo(x - 11, y - 4)
      ctx.lineTo(x - 8, y - 15)
      ctx.lineTo(x + 8, y - 15)
      ctx.lineTo(x + 11, y - 4)
      ctx.closePath()
      ctx.fill()
      ctx.fillRect(x - 14, y - 6, 28, 4)
    }
    if (enemy.kind === 'bowman' || enemy.kind === 'commander') {
      ctx.strokeStyle = '#f5d693'
      ctx.lineWidth = 3
      ctx.beginPath()
      if (enemy.kind === 'bowman') {
        ctx.arc(x + 11, y + 8, 10, -Math.PI / 2, Math.PI / 2)
      } else {
        ctx.moveTo(x - 20, y + 19)
        ctx.lineTo(x - 20, y - 19)
        ctx.lineTo(x - 4, y - 15)
        ctx.lineTo(x - 20, y - 8)
      }
      ctx.stroke()
    }
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
