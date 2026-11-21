import { render } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import { columns, isBuildable, rows, sitePosition } from './game/board'
import {
  attackerName, baseUpgradePrice, buildTower, canSpend, createRound, enemiesRemaining, evacuatedGroups, removeTower,
  secondUpgradeSurcharge,
  retryRound, speedOptions, startRound, tickRound, towerDetails, towerPrice, upgradePrice,
  upgradeTower, waveCueTime, roundFormation, waveOptions,
} from './game/round'
import type { PlaySpeed, Round, TowerKind, Upgrade } from './game/round'
import { drawBattlefield, drawTower, tile } from './game-art'
import { changban } from './game/campaign'
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

function TowerPortrait({ kind, upgrade }: { kind: TowerKind; upgrade?: Upgrade }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const ctx = canvas.current?.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, 80, 80)
    if (upgrade === 'reach') {
      ctx.strokeStyle = '#ffe6a4'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 4])
      ctx.beginPath()
      ctx.arc(40, 40, 35, 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])
    }
    drawTower(ctx, 40, 40, kind)
    if (upgrade === 'power') {
      ctx.fillStyle = '#ffe6a4'
      ctx.font = 'bold 15px system-ui'
      ctx.fillText('▲', 61, 19)
    }
  }, [kind, upgrade])
  return <canvas ref={canvas} class="tower-portrait" width={80} height={80} aria-hidden="true" />
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
        aria-label={round.mission ? 'Changban Road, with the evacuation gate at the bottom'
          : 'Shu frontier battlefield, with an enemy road from top to bottom ending at the gate'} />
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

const progressKey = '3guotd.cleared-missions.v1'

function loadClears(): string[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(progressKey) ?? '[]')
    return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

function App() {
  const [offline, setOffline] = useState('')
  const [round, setRound] = useState(createRound)
  const [clears, setClears] = useState(loadClears)
  const [selected, setSelected] = useState<number | null>(null)
  const [speed, setSpeed] = useState<PlaySpeed>(1)
  const running = round.phase === 'running'
  const mission = round.mission
  const formation = roundFormation(round)
  const missionCleared = mission !== null && (round.phase === 'won' || clears.includes(mission.id))
  const setup = round.phase === 'setup'
  const [paused, setPaused] = useState(false)
  const initialSetup = setup && round.waveNumber === 1
  const finished = round.phase === 'won' || round.phase === 'lost'
  const tower = round.towers.find(candidate => candidate.site === selected)
  const price = tower ? upgradePrice(tower) : towerPrice
  const shortfall = Math.max(0, price - round.silver)
  const spendingOpen = canSpend(round)
  const canRefund = setup && round.towers.length > 0
  const showActions = selected !== null && spendingOpen && (!tower || !tower.reach || !tower.power || canRefund)
  const report = finished ? { ...round.waveStats, waveNumber: round.waveNumber } : round.previousWave
  let status = setup ? (round.towers.length ? 'Prepare defenses' : 'Tap grass to build')
    : round.phase === 'won' ? (mission ? 'Evacuation complete!' : 'Gate defended!') : 'The gate fell.'
  if (running) {
    status = paused ? 'Paused' : round.waveAge < waveCueTime
      ? `Wave ${round.waveNumber} starts · ${formation.name}`
      : `${enemiesRemaining(round)} of ${formation.sequence.length} attackers`
  }
  const breach = round.gateHit && !paused && `${attackerName(round.gateHit.kind)} reached the gate`
  const showWaveStart = running && round.waveAge < waveCueTime
  const hudStatus = breach ? (showWaveStart || finished ? `${status} · ${breach}` : breach) : status

  function selectTile(site: number | null) {
    setSelected(site)
  }

  useEffect(() => {
    if (round.phase !== 'won' || !mission || clears.includes(mission.id)) return
    const next = [...clears, mission.id]
    setClears(next)
    try {
      localStorage.setItem(progressKey, JSON.stringify(next))
    } catch {
      // The current session can still show the Chronicle if browser storage is unavailable.
    }
  }, [round.phase, mission, clears])

  function openMode(campaign: boolean) {
    setRound(createRound(20, campaign ? changban : null))
    setPaused(false)
    selectTile(null)
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
    <main class={`${mission ? 'campaign' : ''} ${showActions ? (canRefund && tower ? 'with-refund' : 'with-actions') : ''}`}>
      <header>
        <h1>3Guo Tower Defense</h1>
        {offline && <span class="offline">{offline}</span>}
      </header>
      {!running && <nav class="mode-picker" aria-label="Game mode">
        <button type="button" aria-pressed={mission !== null} onClick={() => { if (!mission) openMode(true) }}>Changban story</button>
        <button type="button" aria-pressed={mission === null} onClick={() => { if (mission) openMode(false) }}>Long battle</button>
      </nav>}
      {mission && <section class="mission-briefing" aria-label="Story mission">
        {initialSetup && <>
          <h2>{mission.title}</h2>
          <p><strong>{mission.setting}</strong> · {mission.briefing}</p>
        </>}
        <p aria-label={`Evacuated groups: ${evacuatedGroups(round)} of ${round.totalWaves}`}>
          {evacuatedGroups(round)} of {round.totalWaves} groups across
          {initialSetup && ` · Hold for ${round.totalWaves} waves`}
        </p>
        {setup && <p>Next threat · {formation.name}</p>}
      </section>}
      <div class="hud">
        <strong aria-label={`Silver: ${round.silver}`}><span class="coin" aria-hidden="true" />{round.silver} silver</strong>
        <span>{round.lives} lives</span>
        <span>Wave {round.waveNumber} of {round.totalWaves}</span>
        <span role="status">{hudStatus}</span>
      </div>
      <div class="map-controls">
        {!mission && <div class="map-setting">
          <label for="waves">Waves</label>
          <select id="waves" value={round.totalWaves} disabled={!initialSetup}
            onChange={event => {
              const count = waveOptions.find(option => option === Number(event.currentTarget.value))
              if (count) setRound(current => ({ ...current, totalWaves: count }))
            }}>
            {waveOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>}
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
                onClick={() => { setRound(createRound(round.totalWaves, mission)); selectTile(null) }}>Clear towers</button>}
            </>
          ) : (
            <button type="button" onClick={() => {
              setPaused(false)
              setRound(retryRound)
              selectTile(null)
            }}>Retry wave</button>
          )}
          {finished && <button type="button"
            onClick={() => { setPaused(false); setRound(createRound(round.totalWaves, mission)); selectTile(null) }}>{mission ? 'Restart chapter' : 'New battle'}</button>}
        </div>
        {showActions && selected !== null && (
          <section class="actions" aria-label="Tower actions">
            <div class="action-grid">
              {tower ? (
                <>
                  {upgradeBranches.filter(option => !tower[option]).map(option => (
                    <button key={option} type="button" class="purchase-card" disabled={shortfall > 0}
                      onClick={() => setRound(current => upgradeTower(current, tower.site, option))}>
                      <TowerPortrait kind={tower.kind} upgrade={option} />
                      <span>
                        <strong>{towerDetails[tower.kind][option]}</strong>
                        <span class="card-price">{price} silver</span>
                        <small>{upgradeEffect(tower.kind, option)}
                          {price > baseUpgradePrice && ` · +${secondUpgradeSurcharge} for second upgrade`}</small>
                      </span>
                    </button>
                  ))}
                  {canRefund && <button type="button"
                    onClick={() => setRound(current => removeTower(current, tower.site))}>Remove &amp; refund</button>}
                </>
              ) : towerKinds.map(kind => (
                <button key={kind} type="button" class="purchase-card" disabled={shortfall > 0}
                  onClick={() => setRound(current => buildTower(current, selected, kind))}>
                  <TowerPortrait kind={kind} />
                  <span>
                    <strong>Build {towerDetails[kind].name}</strong>
                    <span class="card-price">{towerPrice} silver</span>
                    <small>{kind === 'archer' ? 'Damage · solid range' : 'Slow · dashed range'}</small>
                  </span>
                </button>
              ))}
            </div>
            {(!tower || !tower.reach || !tower.power) && shortfall > 0
              && <p class="action-note">Need {shortfall} more silver.{!tower && canRefund && ' Remove a tower for a refund.'}</p>}
          </section>
        )}
      </div>
      {mission && finished && <p class="mission-outcome">{round.phase === 'won' ? mission.victory : mission.defeat}</p>}
      {missionCleared && <details class="wave-report" open={round.phase === 'won'}>
        <summary>Changban Chronicle</summary>
        <p>{mission?.chronicle}</p>
        <p>Next chapter · Lanterns at Red Cliffs (in development)</p>
      </details>}
      {report && <details class="wave-report">
        <summary>Wave {report.waveNumber} summary</summary>
        <p>{report.stopped} stopped · {report.escaped} reached the gate · {report.earned} silver earned</p>
        {report.runnersEscaped > 0 && <p>Runners that reached the gate: {report.runnersEscaped}</p>}
      </details>}
    </main>
  )
}

render(<App />, document.getElementById('app')!)
