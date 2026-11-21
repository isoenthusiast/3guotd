import { terrainArt } from './terrain-art'
import archer from './assets/battlefield/archer.webp?inline'
import drum from './assets/battlefield/drum.webp?inline'
import gate from './assets/battlefield/gate.webp?inline'
import infantry from './assets/battlefield/infantry.webp?inline'
import runner from './assets/battlefield/runner.webp?inline'
import cavalry from './assets/battlefield/cavalry.webp?inline'
import commander from './assets/battlefield/commander.webp?inline'
import cottage from './assets/battlefield/cottage.webp?inline'
import ferry from './assets/battlefield/ferry.svg?inline'
import cart from './assets/battlefield/cart.svg?inline'

const sources = { ...terrainArt, archer, drum, gate, infantry, runner, cavalry, commander, cottage, ferry, cart }
export type ArtName = keyof typeof sources
const images = new Map<ArtName, HTMLImageElement>()
let loading: Promise<void> | undefined

/** Inline URLs keep both the service-worker build and standalone HTML offline. */
export function loadBattlefieldArt(): Promise<void> {
  return loading ??= Promise.all(Object.entries(sources).map(([name, url]) =>
    new Promise<void>((resolve, reject) => {
      const img = new Image()
      img.onload = () => { images.set(name as ArtName, img); resolve() }
      img.onerror = () => reject(new Error(`Unable to load battlefield art: ${name}`))
      img.src = url
    }),
  )).then(() => undefined)
}

export function artImage(name: ArtName) { return images.get(name) }

export function paintArt(ctx: CanvasRenderingContext2D, name: ArtName,
  x: number, y: number, width: number, height: number): boolean {
  const img = artImage(name)
  if (!img) return false
  ctx.drawImage(img, x, y, width, height)
  return true
}
