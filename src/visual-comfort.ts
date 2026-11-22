export type VisualComfort = { reducedEffects: boolean; reducedMotion: boolean }
const key = '3guotd.visual-comfort.v1'
const deviceMotion = typeof matchMedia === 'undefined' ? null : matchMedia('(prefers-reduced-motion: reduce)')

function storedComfort(): VisualComfort {
  let saved: Partial<VisualComfort> = {}
  try { saved = JSON.parse(localStorage.getItem(key) ?? '{}') ?? {} } catch { /* Optional storage. */ }
  return { reducedEffects: saved.reducedEffects === true, reducedMotion: saved.reducedMotion === true }
}

let saved = storedComfort()
let effective: VisualComfort
const listeners = new Set<() => void>()

export function currentVisualComfort() { return effective }
export function deviceReducesMotion() { return deviceMotion?.matches === true }

function apply() {
  effective = { ...saved, reducedMotion: saved.reducedMotion || deviceReducesMotion() }
  if (typeof document !== 'undefined') document.documentElement.dataset.reducedMotion = String(effective.reducedMotion)
  listeners.forEach(notify => notify())
}

export function observeVisualComfort(notify: () => void) {
  listeners.add(notify)
  return () => { listeners.delete(notify) }
}

export function toggleVisualComfort(option: keyof VisualComfort) {
  saved = { ...saved, [option]: !saved[option] }
  try { localStorage.setItem(key, JSON.stringify(saved)) } catch { /* Keep the session choice. */ }
  apply()
}

apply()
deviceMotion?.addEventListener('change', apply)
if (typeof window !== 'undefined') window.addEventListener('storage', event => {
  if (event.key === null || event.key === key) { saved = storedComfort(); apply() }
})
