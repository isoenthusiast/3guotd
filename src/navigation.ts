import { useLayoutEffect, useRef, useState } from 'preact/hooks'

type Screen = 'menu' | 'field-trials' | 'campaign' | 'long' | 'battle' | 'orders' | 'enemies' | 'towers'
type Overlay = 'restart' | 'restore' | 'new' | 'report'
type Route = { screen: Screen; overlay: Overlay | null }

const root: Route = { screen: 'menu', overlay: null }

function depth({ screen, overlay }: Route) {
  const level = screen === 'menu' ? 0 : screen === 'orders' ? 2 : screen === 'enemies' || screen === 'towers' ? 3 : 1
  return level + Number(overlay !== null)
}

function parent({ screen, overlay }: Route): Route {
  if (overlay) return { screen, overlay: null }
  if (screen === 'enemies' || screen === 'towers') return { screen: 'orders', overlay: null }
  if (screen === 'orders') return { screen: 'battle', overlay: null }
  return root
}

// History carries navigation only. The simulation and explicit save slot belong to App.
export function useGameNavigation() {
  const [route, renderRoute] = useState(root)
  const current = useRef(root)
  const session = useRef('')
  const pending = useRef<Route | null>(null)

  function write(next: Route, push: boolean) {
    const state = { ...history.state, guoNavigation: { session: session.current, route: next, depth: depth(next) } }
    if (push) history.pushState(state, '')
    else history.replaceState(state, '')
  }

  function apply(next: Route) {
    current.current = next
    renderRoute(next)
  }

  useLayoutEffect(() => {
    session.current = String(performance.timeOrigin)
    function onPop(event: PopStateEvent) {
      const entry = event.state?.guoNavigation
      if (!pending.current && entry?.session !== session.current) {
        // A forward entry from a reloaded game cannot reconstruct its old battle.
        if (entry?.depth > 0) {
          pending.current = root
          history.go(-entry.depth)
          return
        }
      }
      const next = pending.current ?? entry?.route ?? root
      pending.current = null
      write(next, false)
      apply(next)
    }
    window.addEventListener('popstate', onPop)
    const oldDepth = history.state?.guoNavigation?.depth
    if (oldDepth > 0) {
      // A fresh document starts on the title. Return to its actual root entry.
      pending.current = root
      history.go(-oldDepth)
    } else write(root, false)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function navigate(screen: Screen, overlay: Overlay | null = null) {
    if (pending.current) return
    const next = { screen, overlay }
    const from = current.current
    if (from.screen === screen && from.overlay === overlay) return
    const difference = depth(next) - depth(from)
    if (difference < 0) {
      pending.current = next
      history.go(difference)
    } else {
      // Setup → battle and switches between sibling guides reuse the same entry.
      write(next, difference > 0)
      apply(next)
    }
  }

  function back() {
    const next = parent(current.current)
    navigate(next.screen, next.overlay)
  }

  return { ...route, navigate, back }
}
