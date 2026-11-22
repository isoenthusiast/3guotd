export type VisualComfort = { reducedEffects: boolean; reducedMotion: boolean }
const key = '3guotd.visual-comfort.v1'

function storedComfort(): VisualComfort {
  let saved: Partial<VisualComfort> = {}
  try { saved = JSON.parse(localStorage.getItem(key) ?? '{}') ?? {} } catch { /* Storage may be unavailable. */ }
  return { reducedEffects: saved.reducedEffects === true, reducedMotion: saved.reducedMotion === true }
}

export function visualComfort(): VisualComfort {
  const saved = sessionOverride ?? storedComfort()
  return {
    reducedEffects: saved.reducedEffects === true,
    reducedMotion: saved.reducedMotion === true || (typeof matchMedia !== 'undefined'
      && matchMedia('(prefers-reduced-motion: reduce)').matches),
  }
}

/** Change only the requested preference; an OS preference must not become a
 * permanently saved override when the player toggles the other control. */
export function toggleVisualComfort(key: keyof VisualComfort) {
  const saved = sessionOverride ?? storedComfort()
  saveVisualComfort({ ...saved, [key]: !saved[key] })
}

export function saveVisualComfort(value: VisualComfort) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* Session control still works below. */ }
  sessionOverride = value
  syncVisualComfort()
}

let sessionOverride: VisualComfort | undefined
export function currentVisualComfort(): VisualComfort {
  const value = sessionOverride ?? visualComfort()
  return { ...value, reducedMotion: value.reducedMotion || (typeof matchMedia !== 'undefined'
    && matchMedia('(prefers-reduced-motion: reduce)').matches) }
}

function syncVisualComfort() {
  if (typeof document !== 'undefined') document.documentElement.dataset.reducedMotion = String(currentVisualComfort().reducedMotion)
}
syncVisualComfort()
if (typeof matchMedia !== 'undefined') matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', syncVisualComfort)
