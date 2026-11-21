import { render } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import { columns, isBuildable, rows, sitePosition } from './game/board'
import {
  advanceRound, buildTower, canSpend, createRound, enemiesRemaining, enemyCount, removeTower,
  retryRound, startRound, towerDetails, towerPrice, upgradePrice, upgradeTower,
} from './game/round'
import type { Round, TowerKind } from './game/round'
import { drawBattlefield, tile } from './game-art'
import './style.css'

const siteCount = columns * rows
const towerKinds = ['archer', 'drum'] as const
const upgradeBranches = ['reach', 'power'] as const

function Battlefield({ round, selected, kind, onSelect }: {
  round: Round
  selected: number | null
  kind: TowerKind
  onSelect: (site: number | null) => void
}) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const cells = useRef<(HTMLButtonElement | null)[]>([])
  useEffect(() => {
    const ctx = canvas.current?.getContext('2d')
    if (ctx) drawBattlefield(ctx, round, selected, kind)
  }, [round, selected, kind])

  return (
    <div class="battlefield">
      <canvas ref={canvas} width={columns * tile} height={rows * tile} role="img"
        aria-label="Shu frontier battlefield, with an enemy road from left to right ending at the gate" />
      <div class="cells" role="group" aria-label="Battlefield tiles. Use arrow keys to select a nearby tile.">
        {Array.from({ length: siteCount }, (_, site) => {
          if (!isBuildable(site)) return <span key={site} aria-hidden="true" />
          const [x, y] = sitePosition(site)
          const tower = round.towers.find(candidate => candidate.site === site)
          const label = tower ? towerDetails[tower.kind].name : 'Empty tile'
          return (
            <button key={site} ref={button => { cells.current[site] = button }}
              type="button" class="cell" tabIndex={site === (selected ?? 0) ? 0 : -1}
              aria-label={`${label}, row ${y + 1}, column ${x + 1}`}
              aria-pressed={selected === site} onClick={() => onSelect(site)}
              onKeyDown={event => {
                const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -columns, ArrowDown: columns }[event.key]
                if (step === undefined) return
                event.preventDefault()
                let next = site + step
                while (next >= 0 && next < siteCount) {
                  const sameLine = Math.abs(step) === 1 ? sitePosition(next)[1] === y : sitePosition(next)[0] === x
                  if (!sameLine) return
                  if (cells.current[next]) {
                    onSelect(next)
                    cells.current[next]?.focus()
                    return
                  }
                  next += step
                }
              }} />
          )
        })}
      </div>
    </div>
  )
}

function App() {
  const [offline, setOffline] = useState('')
  const [round, setRound] = useState(createRound)
  const [selected, setSelected] = useState<number | null>(null)
  const [kind, setKind] = useState<TowerKind>('archer')
  const [zoomed, setZoomed] = useState(true)
  const running = round.phase === 'running'
  const setup = round.phase === 'setup'
  const tower = round.towers.find(candidate => candidate.site === selected)
  const selection = selected === null ? null : sitePosition(selected)

  useEffect(() => {
    if (!running) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setRound(current => advanceRound(current, 0.05))
    }, 50)
    return () => window.clearInterval(timer)
  }, [running])

  useEffect(() => {
    const platform = (window as Window & { Capacitor?: { isNativePlatform(): boolean } }).Capacitor
    if (!import.meta.env.PROD || document.documentElement.hasAttribute('data-standalone')
      || platform?.isNativePlatform() || !('serviceWorker' in navigator)) return
    navigator.serviceWorker.register('./sw.js').catch(() => setOffline('Offline setup failed.'))
    const ready = () => {
      if (navigator.serviceWorker.controller) setOffline('Ready offline')
    }
    ready()
    navigator.serviceWorker.addEventListener('controllerchange', ready)
    return () => navigator.serviceWorker.removeEventListener('controllerchange', ready)
  }, [])

  return (
    <main>
      <header>
        <h1>3Guo Tower Defense</h1>
        {offline && <span class="offline">{offline}</span>}
      </header>
      <div class="hud">
        <strong aria-label={`Silver: ${round.silver}`}><span class="coin" aria-hidden="true" />{round.silver} silver</strong>
        <span>{round.lives} lives</span>
        <span role="status">{running ? `${enemiesRemaining(round)} of ${enemyCount} attackers` : setup
          ? 'Prepare defenses' : round.phase === 'won' ? 'Gate defended!' : 'The gate fell.'}</span>
      </div>
      <button type="button" class="map-mode" aria-pressed={!zoomed}
        onClick={() => { setZoomed(current => !current); setSelected(null) }}>
        {zoomed ? 'View full map' : 'Zoom to build'}
      </button>
      <div class={`board-view ${zoomed ? 'zoomed' : ''}`}>
        <Battlefield round={round} selected={selected} kind={kind} onSelect={setSelected} />
      </div>
      <div class="command-bar">
        <section class="actions" aria-label="Tower actions">
          {selection ? (
            <>
              <p class="action-label">{tower ? towerDetails[tower.kind].name : 'Build tower'} · Row {selection[1] + 1}, column {selection[0] + 1}</p>
              {tower ? (
                <div class="action-grid">
                  {upgradeBranches.map(branch => (
                    <button key={branch} type="button"
                      disabled={tower[branch] || !canSpend(round) || round.silver < upgradePrice(tower)}
                      onClick={() => setRound(current => upgradeTower(current, tower.site, branch))}>
                      {towerDetails[tower.kind][branch]}<small>{tower[branch] ? 'Purchased' : `${upgradePrice(tower)} silver`}</small>
                    </button>
                  ))}
                  {setup && <button type="button" onClick={() => setRound(current => removeTower(current, tower.site))}>Remove &amp; refund</button>}
                </div>
              ) : (
                <>
                  <div class="action-grid">
                    {towerKinds.map(option => (
                      <button key={option} type="button" aria-pressed={kind === option} onClick={() => setKind(option)}>
                        {towerDetails[option].name}<small>{option === 'archer' ? 'Deals damage' : 'Slows attackers'}</small>
                      </button>
                    ))}
                    <button type="button" class="primary"
                      disabled={!canSpend(round) || round.silver < towerPrice}
                      onClick={() => setRound(current => buildTower(current, selected!, kind))}>
                      Build {towerDetails[kind].name}<small>{towerPrice} silver</small>
                    </button>
                  </div>
                </>
              )}
            </>
          ) : <p class="action-label">Tap an empty tile to preview a tower, or tap a tower to upgrade it.</p>}
        </section>
        <div class="round-controls">
          {setup ? (
            <>
              <button type="button" class="primary" onClick={() => setRound(startRound)}>Start wave</button>
              {round.towers.length > 0 && <button type="button"
                onClick={() => { setRound(createRound()); setSelected(null) }}>Clear towers</button>}
            </>
          ) : <button type="button" onClick={() => { setRound(retryRound); setSelected(null) }}>Retry round</button>}
        </div>
      </div>
    </main>
  )
}

render(<App />, document.getElementById('app')!)
