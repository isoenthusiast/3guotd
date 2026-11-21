import { render } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import { columns, route, rows } from './game/board'
import { advanceRound, createRound, enemyPosition, toggleTower, towerBudget, towerRange, towerSites } from './game/round'
import type { Round } from './game/round'
import './style.css'

function Battlefield({ round, onToggle }: { round: Round; onToggle: (site: number) => void }) {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const context = canvas.current?.getContext('2d')
    if (!context) return

    const tile = 64
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        context.fillStyle = (row + column) % 2 ? '#314638' : '#384f3f'
        context.fillRect(column * tile, row * tile, tile, tile)
      }
    }

    context.fillStyle = '#c6a36e'
    for (const [column, row] of route) {
      context.fillRect(column * tile, row * tile, tile, tile)
    }
    if (round.phase === 'setup') {
      context.fillStyle = '#f5dca933'
      context.strokeStyle = '#f5dca9aa'
      context.lineWidth = 2
      for (const tower of round.towers) {
        const [x, y] = towerSites[tower.site]
        context.beginPath()
        context.arc((x + 0.5) * tile, (y + 0.5) * tile, towerRange * tile, 0, Math.PI * 2)
        context.fill()
        context.stroke()
      }
    }

    for (const enemy of round.enemies) {
      const [x, y] = enemyPosition(enemy.progress)
      context.fillStyle = '#9e352c'
      context.beginPath()
      context.arc((x + 0.5) * tile, (y + 0.5) * tile, tile * 0.29, 0, Math.PI * 2)
      context.fill()
    }
    context.strokeStyle = '#fff0b2'
    context.lineWidth = 4
    for (const { from, to } of round.shots) {
      context.beginPath()
      context.moveTo((from[0] + 0.5) * tile, (from[1] + 0.5) * tile)
      context.lineTo((to[0] + 0.5) * tile, (to[1] + 0.5) * tile)
      context.stroke()
    }
  }, [round])

  return (
    <div class="battlefield">
      <canvas ref={canvas} width={columns * 64} height={rows * 64}
        role="img" aria-label="Battlefield with an enemy route from left to right" />
      {towerSites.map(([x, y], site) => {
        const placed = round.towers.some(tower => tower.site === site)
        return (
          <button key={site} type="button" class="tower-site"
            style={{ left: `${(x + 0.5) / columns * 100}%`, top: `${(y + 0.5) / rows * 100}%` }}
            disabled={round.phase !== 'setup' || (!placed && round.towers.length >= towerBudget)}
            aria-label={`Tower site ${site + 1}`} aria-pressed={placed}
            onClick={() => onToggle(site)}>{placed ? '▲' : '+'}</button>
        )
      })}
    </div>
  )
}

function App() {
  const [status, setStatus] = useState('')
  const [round, setRound] = useState(createRound)
  const running = round.phase === 'running'

  useEffect(() => {
    if (!running) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setRound(current => advanceRound(current, 0.05))
    }, 50)
    return () => window.clearInterval(timer)
  }, [running])

  useEffect(() => {
    const platform = (window as Window & {
      Capacitor?: { isNativePlatform(): boolean }
    }).Capacitor

    if (!import.meta.env.PROD || platform?.isNativePlatform()) return
    if (!('serviceWorker' in navigator)) return

    navigator.serviceWorker.register('./sw.js')
      .catch(() => setStatus('Offline setup failed.'))
    const markReady = () => {
      if (navigator.serviceWorker.controller) setStatus('Ready offline')
    }
    markReady()
    navigator.serviceWorker.addEventListener('controllerchange', markReady)
    return () => navigator.serviceWorker.removeEventListener('controllerchange', markReady)
  }, [])

  return (
    <main>
      <header>
        <h1>3Guo Tower Defense</h1>
        {status && <p role="status">{status}</p>}
      </header>
      <p>Tap marked sites to place up to three towers. The circles show firing range. Cover the bends, then start the wave.</p>
      <p role="status">Lives: {round.lives} · Towers: {round.towers.length}/{towerBudget}
        {round.phase === 'won' && ' · Gate defended!'}
        {round.phase === 'lost' && ' · The gate fell.'}
      </p>
      <Battlefield round={round} onToggle={site => setRound(current => toggleTower(current, site))} />
      <div class="controls">
        <button type="button" disabled={round.phase !== 'setup'}
          onClick={() => setRound(current => ({ ...current, phase: 'running' }))}>Start wave</button>
        <button type="button" onClick={() => setRound(createRound())}>Reset</button>
      </div>
    </main>
  )
}

render(<App />, document.getElementById('app')!)
