import { render } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import { columns, isBuildable, rows, sitePosition } from './game/board'
import {
  baseUpgradePrice, buildTower, canSpend, createRound, enemiesRemaining, enemyCount, removeTower,
  secondUpgradeSurcharge,
  retryRound, speedOptions, startRound, tickRound, towerDetails, towerPrice, upgradePrice,
  upgradeTower, waveOptions,
} from './game/round'
import type { PlaySpeed, Round, TowerKind, Upgrade } from './game/round'
import { drawBattlefield, tile } from './game-art'
import './style.css'

const siteCount = columns * rows
const towerKinds = ['archer', 'drum'] as const
const upgradeBranches = ['reach', 'power'] as const

function upgradeEffect(kind: TowerKind, branch: Upgrade): string {
  if (branch === 'reach') {
    const { range, extendedRange } = towerDetails[kind]
    return `${range} → ${extendedRange} tiles`
  }
  if (kind === 'archer') {
    const { shotInterval, fasterShotInterval } = towerDetails.archer
    return `${shotInterval} → ${fasterShotInterval} s per shot`
  }
  const { speedFactor, strongerSpeedFactor } = towerDetails.drum
  const slow = (factor: number) => Math.round((1 - factor) * 100)
  return `${slow(speedFactor)}% → ${slow(strongerSpeedFactor)}% slower`
}

function Battlefield({ round, selected, onSelect }: {
  round: Round
  selected: number | null
  onSelect: (site: number | null) => void
}) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const cells = useRef<(HTMLButtonElement | null)[]>([])
  useEffect(() => {
    const ctx = canvas.current?.getContext('2d')
    if (ctx) drawBattlefield(ctx, round, selected)
  }, [round, selected])

  return (
    <div class="battlefield">
      <canvas ref={canvas} width={columns * tile} height={rows * tile} role="img"
        aria-label="Shu frontier battlefield, with an enemy road from top to bottom ending at the gate" />
      <div class="cells" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }} role="group" aria-label="Battlefield tiles. Use arrow keys to select a nearby tile.">
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
  const [speed, setSpeed] = useState<PlaySpeed>(1)
  const running = round.phase === 'running'
  const setup = round.phase === 'setup'
  const [paused, setPaused] = useState(false)
  const initialSetup = setup && round.waveNumber === 1
  const finished = round.phase === 'won' || round.phase === 'lost'
  const tower = round.towers.find(candidate => candidate.site === selected)
  const price = tower ? upgradePrice(tower) : towerPrice
  const shortfall = Math.max(0, price - round.silver)
  const spendingOpen = canSpend(round)
  const canRefund = setup && round.towers.length > 0

  function selectTile(site: number | null) {
    setSelected(site)
  }

  useEffect(() => {
    if (!running || paused) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setRound(current => tickRound(current, speed))
    }, 50)
    return () => window.clearInterval(timer)
  }, [running, speed, paused])

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
        <span>Wave {round.waveNumber} of {round.totalWaves}</span>
        <span role="status">{running ? (paused ? 'Paused' : `${enemiesRemaining(round)} of ${enemyCount} attackers`) : setup
          ? 'Prepare defenses' : round.phase === 'won'
            ? 'Gate defended!' : 'The gate fell.'}</span>
      </div>
      <div class="map-controls">
        <div class="map-setting">
          <label for="waves">Waves</label>
          <select id="waves" value={round.totalWaves} disabled={!initialSetup}
            onChange={event => {
              const count = waveOptions.find(option => option === Number(event.currentTarget.value))
              if (count) setRound(current => ({ ...current, totalWaves: count }))
            }}>
            {waveOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div class="map-setting">
          <label for="speed">Speed</label>
          <select id="speed" value={speed} onChange={event => {
            const value = speedOptions.find(option => option === Number(event.currentTarget.value))
            if (value) setSpeed(value)
          }}>
            {speedOptions.map(option => <option key={option} value={option}>{option}×</option>)}
          </select>
        </div>
        {running && <button type="button" class="pause-control" onClick={() => setPaused(value => !value)}>
          {paused ? 'Resume' : 'Pause'}
        </button>}
      </div>
      <div class="board-view">
        <Battlefield round={round} selected={selected} onSelect={site => selectTile(site === selected ? null : site)} />
      </div>
      <div class="command-bar">
        <div class="round-controls">
          {setup ? (
            <>
              <button type="button" class="primary"
                onClick={() => setRound(startRound)}>Start wave</button>
              {initialSetup && round.towers.length > 0 && <button type="button"
                onClick={() => { setRound(createRound(round.totalWaves)); selectTile(null) }}>Clear towers</button>}
            </>
          ) : (
            <button type="button" onClick={() => {
              setPaused(false)
              setRound(retryRound)
              selectTile(null)
            }}>Retry wave</button>
          )}
          {finished && <button type="button"
            onClick={() => { setPaused(false); setRound(createRound(round.totalWaves)); selectTile(null) }}>New battle</button>}
        </div>
        {selected !== null && spendingOpen && (!tower || !tower.reach || !tower.power || canRefund) && (
          <section class="actions" aria-label="Tower actions">
            <div class="action-grid">
              {tower ? (
                <>
                  {upgradeBranches.filter(option => !tower[option]).map(option => (
                    <button key={option} type="button" class="primary" disabled={shortfall > 0}
                      onClick={() => setRound(current => upgradeTower(current, tower.site, option))}>
                      {towerDetails[tower.kind][option]} · {price} silver
                      <small>{upgradeEffect(tower.kind, option)}
                        {price > baseUpgradePrice && ` · +${secondUpgradeSurcharge} for second upgrade`}</small>
                    </button>
                  ))}
                  {canRefund && <button type="button"
                    onClick={() => setRound(current => removeTower(current, tower.site))}>Remove &amp; refund</button>}
                </>
              ) : towerKinds.map(kind => (
                <button key={kind} type="button" class="primary" disabled={shortfall > 0}
                  onClick={() => setRound(current => buildTower(current, selected, kind))}>
                  Build {towerDetails[kind].name} · {towerPrice} silver
                  <small>{kind === 'archer' ? 'Deals damage' : 'Slows attackers'}</small>
                </button>
              ))}
            </div>
            {(!tower || !tower.reach || !tower.power) && shortfall > 0
              && <p class="action-note">Need {shortfall} more silver.{!tower && canRefund && ' Remove a tower for a refund.'}</p>}
          </section>
        )}
      </div>
    </main>
  )
}

render(<App />, document.getElementById('app')!)
