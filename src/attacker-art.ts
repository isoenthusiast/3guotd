import { artImage } from './battlefield-art-assets'
import type { AttackerKind } from './game/round'

// Coordinates are in the battlefield's 64 px tile space, facing right.
function leg(ctx: CanvasRenderingContext2D, hip: number, knee: number, kneeY: number,
  heel: number, heelY: number, far: boolean, mounted: boolean) {
  ctx.strokeStyle = far ? '#45362b' : mounted ? '#855634' : '#92734e'
  ctx.lineWidth = mounted ? 3 : 4.5
  ctx.beginPath()
  ctx.moveTo(hip, 2)
  ctx.lineTo(knee, kneeY)
  ctx.lineTo(heel, heelY)
  ctx.stroke()
  ctx.strokeStyle = far ? '#352c29' : '#49392e'
  ctx.lineWidth = mounted ? 3 : 4
  ctx.beginPath()
  ctx.moveTo(heel, heelY - 3)
  ctx.lineTo(heel, heelY)
  ctx.lineTo(heel + (mounted ? 2 : 4), heelY)
  ctx.stroke()
}

export function drawAttacker(ctx: CanvasRenderingContext2D, kind: AttackerKind, progress: number,
  options: { reducedMotion?: boolean } = {}) {
  const mounted = kind === 'cavalry'
  const runner = kind === 'runner' || kind === 'veteranRunner'
  const sprite = mounted ? 'cavalry' : runner ? 'runner' : kind === 'commander' ? 'commander' : kind === 'bowman' ? 'bowman' : 'infantry'
  const width = mounted ? 54 : kind === 'commander' ? 46 : 36
  // A full cycle is a distance along the road. Slows, fast play and Pause
  // therefore affect the feet and body together, including across turns.
  const phase = (options.reducedMotion ? 0 : progress) * 2 * Math.PI / (mounted ? 1.45 : 0.95)
  const swing = Math.sin(phase)
  const lift = mounted ? 3 * Math.max(0, Math.cos(phase)) : 2 * Math.abs(swing)
  ctx.save()
  ctx.lineCap = 'round'
  if (mounted) {
    // Haunches drive while forelegs reach, then all four gather under the rider.
    for (const far of [true, false]) {
      const t = phase + (far ? 1.15 : 0)
      for (const front of [false, true]) {
        const hip = (front ? 12 : -12) + (far ? -2 : 0)
        const extension = Math.sin(t) * (front ? 9 : -9)
        const tuck = Math.max(0, Math.cos(t + (front ? 0 : 1.1)))
        leg(ctx, hip, hip + extension * 0.45 + (front ? 4 : -5), 10 - tuck * 4,
          hip + extension, 20 - tuck * 9 - lift, far, true)
      }
    }
  } else {
    for (const far of [true, false]) {
      const step = far ? -swing : swing
      const tuck = Math.max(0, (far ? -1 : 1) * Math.cos(phase))
      const hip = far ? -3 : 3
      leg(ctx, hip, hip + step * 4 + tuck * 3, 12 - tuck * 4,
        hip + step * (runner ? 10 : 8), 20 - tuck * (runner ? 8 : 6), far, false)
    }
  }

  // Retain the approved illustrated head, weapon, armour and mount. Replace
  // the painted stationary feet and baked ground shadow below the hem/belly.
  ctx.translate(0, -lift)
  ctx.rotate(mounted ? 0.055 * swing : 0.038 * swing)
  const img = artImage(sprite)
  const fraction = kind === 'bowman' ? 1 : mounted ? 0.69 : 0.74
  if (img) {
    ctx.drawImage(img, 0, 0, img.width, img.height * fraction,
      -width / 2, -26, width, kind === 'bowman' ? 30 : 48 * fraction)
  } else {
    ctx.fillStyle = mounted ? '#825234' : '#615041'
    ctx.fillRect(-width / 3, -10, width * 2 / 3, 17)
    ctx.fillStyle = '#ad895f'
    ctx.fillRect(mounted ? 12 : -6, -20, 12, 13)
  }
  if (kind === 'bowman' && !img) {
    ctx.strokeStyle = '#f4d59c'
    ctx.lineWidth = 2.5
    ctx.beginPath()
    ctx.arc(12, 0, 14, -Math.PI / 2, Math.PI / 2)
    ctx.closePath()
    ctx.stroke()
  }
  if (kind === 'veteran' || kind === 'veteranRunner') {
    // Broad stepped pauldrons and a crested helmet survive grayscale and tiny
    // phone scale; the existing cinnabar rank ribbon remains a secondary cue.
    ctx.fillStyle = '#373b38'
    ctx.strokeStyle = '#d5c49a'
    ctx.lineWidth = 1.5
    for (const side of [-1, 1]) {
      ctx.beginPath()
      ctx.moveTo(side * 7, -16); ctx.lineTo(side * 19, -12)
      ctx.lineTo(side * 21, -4); ctx.lineTo(side * 10, -6)
      ctx.closePath(); ctx.fill(); ctx.stroke()
    }
    ctx.beginPath(); ctx.moveTo(-7, -22); ctx.lineTo(-5, -30)
    ctx.lineTo(5, -30); ctx.lineTo(8, -22); ctx.closePath(); ctx.fill(); ctx.stroke()
    ctx.fillStyle = '#b33f2a'
    ctx.fillRect(-12, -12, 6, 12)
  }
  ctx.restore()
}
