import { render } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import { columns, route, rows } from './game/board'
import { advanceRound, createRound, enemiesRemaining, enemyCount, enemyMaxHealth, enemyPosition, impactTime, retryRound, shotFlightTime, toggleTower, towerBudget, towerRange, towerSites } from './game/round'
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

    const enemyCenters = new Map<number, [number, number]>()
    for (const enemy of round.enemies) {
      const [x, y] = enemyPosition(enemy.progress)
      const center: [number, number] = [(x + 0.5) * tile, (y + 0.5) * tile]
      enemyCenters.set(enemy.id, center)
      context.fillStyle = '#a73735'
      context.strokeStyle = '#371c1d'
      context.lineWidth = 3
      context.beginPath()
      context.arc(...center, tile * 0.29, 0, Math.PI * 2)
      context.fill()
      context.stroke()
    }

    for (const shot of round.shots) {
      const target = enemyCenters.get(shot.targetId)
      if (!target) continue
      const fromX = (shot.from[0] + 0.5) * tile
      const fromY = (shot.from[1] + 0.5) * tile
      const progress = shot.elapsed / shotFlightTime
      const tail = Math.max(0, progress - 0.22)
      const dx = target[0] - fromX
      const dy = target[1] - fromY
      const x = fromX + dx * progress
      const y = fromY + dy * progress
      context.strokeStyle = '#604116'
      context.lineWidth = 9
      context.lineCap = 'round'
      context.beginPath()
      context.moveTo(fromX + dx * tail, fromY + dy * tail)
      context.lineTo(x, y)
      context.stroke()
      context.strokeStyle = '#ffd27a'
      context.lineWidth = 4
      context.stroke()
      context.fillStyle = '#fff4c5'
      context.beginPath()
      context.arc(x, y, 6, 0, Math.PI * 2)
      context.fill()
    }

    for (const impact of round.impacts) {
      const progress = impact.elapsed / impactTime
      context.globalAlpha = 1 - progress
      context.strokeStyle = '#fff4c5'
      context.lineWidth = 5
      context.beginPath()
      context.arc((impact.at[0] + 0.5) * tile, (impact.at[1] + 0.5) * tile,
        10 + 23 * progress, 0, Math.PI * 2)
      context.stroke()
    }
    context.globalAlpha = 1

    for (const enemy of round.enemies) {
      const center = enemyCenters.get(enemy.id)
      if (!center) continue
      const [x, y] = center
      const pipWidth = 10
      const gap = 2
      const width = (pipWidth + gap) * enemyMaxHealth - gap
      const left = x - width / 2
      context.fillStyle = '#1b2220'
      context.fillRect(left - 3, y - 35, width + 6, 13)
      for (let pip = 0; pip < enemyMaxHealth; pip++) {
        context.fillStyle = pip < enemy.health ? '#e4f6a7' : '#555b4d'
        context.fillRect(left + pip * (pipWidth + gap), y - 32, pipWidth, 7)
      }
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
            onClick={() => onToggle(site)}>
              <span class="tower-marker" aria-hidden="true">{placed ? '▲' : '+'}</span>
            </button>
        )
      })}
    </div>
  )
}

function App() {
  const [status, setStatus] = useState('')
  const [round, setRound] = useState(createRound)
  const running = round.phase === 'running'
  const settingUp = round.phase === 'setup'

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
      <p role="status">Lives: {round.lives} · Towers: {round.towers.length}/{towerBudget}</p>
      <Battlefield round={round} onToggle={site => setRound(current => toggleTower(current, site))} />
      <div class="controls">
        {settingUp ? (
          <>
            <button type="button"
              onClick={() => setRound(current => ({ ...current, phase: 'running' }))}>Start wave</button>
            <button type="button" disabled={round.towers.length === 0}
              onClick={() => setRound(createRound())}>Clear towers</button>
          </>
        ) : (
          <button type="button" onClick={() => setRound(retryRound)}>Retry round</button>
        )}
      </div>
      {settingUp && <p>Tap marked sites to place up to three towers. The circles show firing range. Cover the bends, then start the wave.</p>}
      <p role="status" class="wave-status">
        {running && `Enemies remaining: ${enemiesRemaining(round)} of ${enemyCount}`}
        {round.phase === 'won' && 'Gate defended!'}
        {round.phase === 'lost' && 'The gate fell.'}
      </p>
    </main>
  )
}

render(<App />, document.getElementById('app')!)
