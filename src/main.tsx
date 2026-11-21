import { render } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import { columns, rows, sitePosition } from './game/board'
import {
  attackerName, baseUpgradePrice, buildTower, canBuildAt, canSpend, closedSites, createRound, enemiesRemaining, objectiveProgress, removeTower,
  secondUpgradeSurcharge,
  retryRound, speedOptions, startRound, tickRound, towerDetails, towerPrice, upgradePrice,
  upgradeTower, waveCueTime, roundFormation, waveOptions,
} from './game/round'
import type { Mission, PlaySpeed, Round, TowerKind, Upgrade } from './game/round'
import { drawBattlefield, drawTower, tile } from './game-art'
import { battles, campaign, isMissionUnlocked, nextMission } from './game/campaign'
import { loadGame, loadSound, saveGame, saveSound } from './game/save-game'
import { enableAudio, playCue } from './sound'
import villageGate from './assets/village-gate.webp?inline'
import villageWatch from './assets/village-watch.webp?inline'
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
        aria-label={round.mission ? `${round.mission.title}, with ${round.mission.gate} at the bottom`
          : 'Shu frontier battlefield, with an enemy road from top to bottom ending at the gate'} />
      <div class="cells" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }} role="group" aria-label="Battlefield tiles. Use arrow keys to select a nearby tile.">
        {Array.from({ length: siteCount }, (_, site) => {
          if (!canBuildAt(round, site)) return <span key={site} aria-hidden="true" />
          const [x, y] = sitePosition(site)
          const tower = round.towers.find(candidate => candidate.site === site)
          const label = tower ? towerDetails[tower.kind].name : 'Empty tile'
          return (
            <button key={site} ref={button => { cells.current[site] = button }}
              type="button" class={tower ? 'cell' : 'cell empty-cell'} tabIndex={site === (selected ?? 0) ? 0 : -1}
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
    if (!Array.isArray(value)) return []
    const ids = value.filter((id): id is string => typeof id === 'string')
    if (ids.includes('changban') && !ids.includes('changban:1')) return [...ids, 'changban:1']
    return ids
  } catch {
    return []
  }
}

function App() {
  const [offline, setOffline] = useState('')
  const [screen, setScreen] = useState<'menu' | 'campaign' | 'long' | 'battle'>('menu')
  const [hasRun, setHasRun] = useState(false)
  const [hasSave, setHasSave] = useState(() => loadGame() !== null)
  const [sound, setSound] = useState(loadSound)
  const [notice, setNotice] = useState('')
  const [confirmation, setConfirmation] = useState<'restart' | 'restore' | 'new' | null>(null)
  const [draftMission, setDraftMission] = useState<Mission>(campaign[0])
  const [draftWaves, setDraftWaves] = useState(20)
  const previousAudio = useRef<Round | null>(null)
  const [round, setRound] = useState(createRound)
  const [clears, setClears] = useState(loadClears)
  const [selected, setSelected] = useState<number | null>(null)
  const [speed, setSpeed] = useState<PlaySpeed>(1)
  const running = round.phase === 'running'
  const mission = round.mission
  const formation = roundFormation(round)
  const upcoming = mission ? nextMission(mission) : undefined
  const showChronicle = mission !== null && ((mission.level === 5 && round.phase === 'won') || clears.includes(`${mission.battleId}:5`)
    || (mission.battleId === 'changban' && clears.includes('changban')))
  const upcomingClosures = (mission?.closedSites?.[round.waveNumber]?.length ?? 0) > closedSites(round).length
  const setup = round.phase === 'setup'
  const [paused, setPaused] = useState(false)
  const initialSetup = setup && round.waveNumber === 1
  const finished = round.phase === 'won' || round.phase === 'lost'
  const activeSite = selected !== null && canBuildAt(round, selected) ? selected : null
  const tower = round.towers.find(candidate => candidate.site === activeSite)
  const price = tower ? upgradePrice(tower) : towerPrice
  const shortfall = Math.max(0, price - round.silver)
  const spendingOpen = canSpend(round)
  const canRefund = setup && round.towers.length > 0
  const showActions = activeSite !== null && spendingOpen && (!tower || !tower.reach || !tower.power || canRefund)
  const report = finished ? { ...round.waveStats, waveNumber: round.waveNumber } : round.previousWave
  let status = setup ? (round.towers.length ? '' : 'Tap a marked tile to build')
    : round.phase === 'won' ? (mission ? 'Level cleared!' : 'Gate defended!') : 'The gate fell.'
  if (running) {
    status = paused ? 'Paused' : round.rebuildTime > 0
      ? `Rebuild · ${Math.ceil(round.rebuildTime)}s before attackers arrive`
      : round.waveAge < waveCueTime
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
    const next = [...new Set([...loadClears(), ...clears, mission.id])]
    setClears(next)
    try {
      localStorage.setItem(progressKey, JSON.stringify(next))
    } catch {
      // The current session can still show the Chronicle if browser storage is unavailable.
    }
  }, [round.phase, mission, clears])

  function showMenu() {
    previousAudio.current = null
    setNotice('')
    setConfirmation(null)
    setScreen('menu')
  }

  function enterBattle(next: Round, restore = false) {
    setConfirmation(null)
    setRound(next)
    setHasRun(true)
    setPaused(restore && next.phase === 'running')
    selectTile(null)
    previousAudio.current = null
    if (sound) enableAudio()
    setScreen('battle')
  }

  const unfinishedRun = hasRun && (round.phase === 'setup' || running)

  function restoreGame() {
    const saved = loadGame()
    if (!saved) {
      setConfirmation(null)
      setHasSave(false)
      setNotice('The saved game could not be restored.')
      return
    }
    setSpeed(saved.speed)
    enterBattle(saved.round, true)
  }

  function openMission(next: Mission) {
    if (!isMissionUnlocked(next, clears) && !(round.phase === 'won' && upcoming === next)) return
    setDraftMission(next)
    setScreen('campaign')
  }

  function buy(event: (current: Round) => Round) {
    const updated = event(round)
    if (updated === round) return
    if (sound) {
      enableAudio()
      playCue('purchase')
    }
    setRound(current => event(current))
  }

  useEffect(() => {
    if (screen !== 'battle' || !running || paused) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setRound(current => tickRound(current, speed))
    }, 50)
    return () => window.clearInterval(timer)
  }, [screen, running, speed, paused])

  useEffect(() => {
    const previous = previousAudio.current
    previousAudio.current = screen === 'battle' ? round : null
    if (!sound || screen !== 'battle' || !previous) return
    if (round.lives < previous.lives) playCue('breach')
    else if (running && (previous.phase === 'setup' || previous.waveNumber !== round.waveNumber)) playCue('wave')
    else if (round.impacts.some(hit => hit.elapsed < 0.05 && !previous.impacts.includes(hit))) playCue('hit')
  }, [round, screen, sound, running])

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

  const speedPicker = (
    <div class="map-setting">
      <label for="speed">Speed</label>
      <select id="speed" value={speed} onChange={event => {
        const value = speedOptions.find(option => option === Number(event.currentTarget.value))
        if (value) setSpeed(value)
      }}>
        {speedOptions.map(option => <option key={option} value={option}>{option}×</option>)}
      </select>
    </div>
  )

  const header = <header>
    <h1>3Guo Tower Defense</h1>
    {offline && <span class="offline">{offline}</span>}
  </header>

  if (screen === 'menu') {
    return <main class="menu-screen">
      {header}
      <h2 class="visually-hidden">Main menu</h2>
      <img class="menu-art" src={villageGate} alt="" />
      {hasRun && <p>{mission ? `${mission.title} · Level ${mission.level}` : 'Long battle'}
        {` · Wave ${round.waveNumber} of ${round.totalWaves}`}</p>}
      <div class="menu-actions">
        {hasRun && <button type="button" class="primary" onClick={() => {
          if (sound) enableAudio()
          setConfirmation(null)
          setScreen('battle')
        }}>Continue</button>}
        <button type="button" class={hasRun ? undefined : 'primary'} onClick={() => {
          setConfirmation(null)
          setScreen('campaign')
        }}>Campaign</button>
        <button type="button" onClick={() => {
          setConfirmation(null)
          setScreen('long')
        }}>Long battle</button>
        <button type="button" disabled={!hasRun} onClick={() => {
          const saved = saveGame(round, speed)
          if (saved) setHasSave(true)
          setNotice(saved ? 'Game saved on this browser.' : 'This browser could not save the game.')
        }}>Save game</button>
        <button type="button" disabled={!hasSave} onClick={() => {
          if (unfinishedRun) setConfirmation('restore')
          else restoreGame()
        }}>Restore saved game</button>
        {hasRun && confirmation !== 'restart' && <button type="button" onClick={() => setConfirmation('restart')}>
          {mission ? 'Restart level' : 'Restart battle'}
        </button>}
        <button type="button" aria-pressed={sound} onClick={() => {
          const enabled = !sound
          if (enabled) enableAudio()
          setSound(enabled)
          saveSound(enabled)
        }}>Sound {sound ? 'on' : 'off'}</button>
      </div>
      {confirmation === 'restart' && <div class="menu-confirm">
        <p>Restart from wave one? Your saved game stays available.</p>
        <button type="button" class="primary" onClick={() => enterBattle(createRound(round.totalWaves, mission))}>Restart from wave one</button>
        <button type="button" onClick={() => setConfirmation(null)}>Cancel</button>
      </div>}
      {confirmation === 'restore' && <div class="menu-confirm">
        <p>Replace your current run with the saved game?</p>
        <button type="button" class="primary" onClick={restoreGame}>Replace with saved game</button>
        <button type="button" onClick={() => setConfirmation(null)}>Cancel</button>
      </div>}
      {notice && <p role="status">{notice}</p>}
    </main>
  }

  if (screen === 'campaign' || screen === 'long') {
    const selectedMission = screen === 'campaign' ? draftMission : null
    return <main class="menu-screen setup-screen">
      {header}
      <button type="button" onClick={showMenu}>Main menu</button>
      {selectedMission ? <section class="mission-briefing" aria-label="Mission briefing">
        <h2 class="visually-hidden">Campaign</h2>
        <div class="campaign-options">
          <label for="battle">Battle</label>
          <select id="battle" value={selectedMission.battleId} onChange={event => {
            const first = campaign.find(level => level.battleId === event.currentTarget.value
              && isMissionUnlocked(level, clears))
            if (first) setDraftMission(first)
          }}>
            {battles.map(battle => <option key={battle.id} value={battle.id}
              disabled={!campaign.some(level => level.battleId === battle.id && isMissionUnlocked(level, clears))}>
              {battle.title}
            </option>)}
          </select>
          <label for="level">Level</label>
          <select id="level" value={selectedMission.id} onChange={event => {
            const level = campaign.find(candidate => candidate.id === event.currentTarget.value)
            if (level && isMissionUnlocked(level, clears)) setDraftMission(level)
          }}>
            {campaign.filter(level => level.battleId === selectedMission.battleId).map(level =>
              <option key={level.id} value={level.id} disabled={!isMissionUnlocked(level, clears)}>
                {level.level}{clears.includes(level.id) ? ' · Cleared' : ''}
              </option>)}
          </select>
        </div>
        <h3>{selectedMission.title} · Level {selectedMission.level}</h3>
        {selectedMission.battleId === 'village-watch' && <img class="briefing-art" src={villageWatch}
          alt="Villagers gather beneath the timber gate under the watch of a mounted guard." />}
        {selectedMission.battleId === 'village-watch'
          ? <details class="story-scene"><summary>Story</summary><p>{selectedMission.briefing}</p></details>
          : <p><strong>{selectedMission.setting}</strong> · {selectedMission.briefing}</p>}
        {selectedMission.leadIn && <details class="story-scene"><summary>Before the battle</summary><p>{selectedMission.leadIn}</p></details>}
        <p>{selectedMission.objective} · Hold for {selectedMission.waves.length} waves</p>
        <p>{selectedMission.level === 5 ? 'Final threat · The commander waits for his escort to clear.'
          : `Next threat · ${selectedMission.waves[0].name}`}</p>
        {(clears.includes(`${selectedMission.battleId}:5`)
          || (selectedMission.battleId === 'changban' && clears.includes('changban'))) &&
          <details class="story-scene"><summary>{selectedMission.title} Chronicle</summary><p>{selectedMission.chronicle}</p></details>}
      </section> : <section class="mission-briefing" aria-label="Long battle setup">
        <h2>Long battle</h2>
        <div class="map-setting"><label for="waves">Waves</label>
          <select id="waves" value={draftWaves} onChange={event => {
            const count = waveOptions.find(option => option === Number(event.currentTarget.value))
            if (count) setDraftWaves(count)
          }}>
            {waveOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
      </section>}
      {confirmation === 'new' ? <div class="menu-confirm">
        <p>Start this battle and replace your current run?</p>
        <button class="primary" type="button"
          onClick={() => enterBattle(createRound(draftWaves, selectedMission))}>Replace and enter battle</button>
        <button type="button" onClick={() => setConfirmation(null)}>Cancel</button>
      </div> : <button class="primary enter-battle" type="button" onClick={() => {
        if (unfinishedRun) setConfirmation('new')
        else enterBattle(createRound(draftWaves, selectedMission))
      }}>Enter battle</button>}
    </main>
  }

  return (
    <main class={`battle-screen ${showActions ? (canRefund && tower ? 'with-refund' : 'with-actions') : ''}`.trim()}>
      <h1 class="visually-hidden">3Guo Tower Defense</h1>
      <div class="hud">
        <strong aria-label={`Silver: ${round.silver}`}><span class="coin" aria-hidden="true" />{round.silver} silver</strong>
        <span>{round.lives} lives</span>
        <span>Wave {round.waveNumber} of {round.totalWaves}</span>
        <span role="status">{hudStatus}</span>
        {mission && <span>{objectiveProgress(round)}/{mission.milestoneCount} {mission.milestone}</span>}
      </div>
      <div class="map-controls">
        <button type="button" class="pause-control" onClick={showMenu}>Main menu</button>
        {speedPicker}
        {running && <button type="button" class="pause-control" onClick={() => setPaused(value => !value)}>
          {paused ? 'Resume' : 'Pause'}
        </button>}
      </div>
      {!finished && upcomingClosures && <p class="closure-note">Marked sites close next wave.</p>}
      <div class="board-view">
        <Battlefield round={round} selected={activeSite} onSelect={site => selectTile(site === activeSite ? null : site)} />
      </div>
      <div class="command-bar">
        <div class="round-controls">
          {setup ? (
            <>
              <button type="button" class="primary"
                onClick={() => setRound(startRound)}>Start wave</button>
              {initialSetup && round.towers.length > 0 && !(canRefund && tower) && <button type="button"
                onClick={() => { setRound(createRound(round.totalWaves, mission)); selectTile(null) }}>Clear towers</button>}
              {canRefund && tower && <button type="button"
                onClick={() => setRound(current => removeTower(current, tower.site))}>Remove &amp; refund</button>}
            </>
          ) : (
            <button type="button" onClick={() => {
              setPaused(false)
              setRound(retryRound)
              selectTile(null)
            }}>Retry wave</button>
          )}
          {round.phase === 'won' && upcoming && <button class="primary" type="button"
            onClick={() => openMission(upcoming)}>{upcoming.battleId === mission?.battleId ? 'Next level' : 'Next battle'}</button>}
          {finished && <button type="button"
            onClick={() => enterBattle(createRound(round.totalWaves, mission))}>{mission ? 'Restart level' : 'New battle'}</button>}
        </div>
        {showActions && activeSite !== null && (
          <section class="actions" aria-label="Tower actions">
            <div class="action-grid">
              {tower ? (
                <>
                  {upgradeBranches.filter(option => !tower[option]).map(option => (
                    <button key={option} type="button" class="purchase-card" disabled={shortfall > 0}
                      onClick={() => buy(current => upgradeTower(current, tower.site, option))}>
                      <TowerPortrait kind={tower.kind} upgrade={option} />
                      <span>
                        <strong>{towerDetails[tower.kind][option]}</strong>
                        <span class="card-price">{price} silver</span>
                        <small>{upgradeEffect(tower.kind, option)}
                          {price > baseUpgradePrice && ` · +${secondUpgradeSurcharge} for second upgrade`}</small>
                      </span>
                    </button>
                  ))}
                </>
              ) : towerKinds.map(kind => (
                <button key={kind} type="button" class="purchase-card" disabled={shortfall > 0}
                  onClick={() => buy(current => buildTower(current, activeSite, kind))}>
                  <TowerPortrait kind={kind} />
                  <span>
                    <strong>Build {towerDetails[kind].name}</strong>
                    <span class="card-price">{towerPrice} silver</span>
                    <small><i class={`range-key ${kind}`} aria-hidden="true" />
                      {kind === 'archer' ? 'Damage' : 'Slow'}</small>
                  </span>
                </button>
              ))}
            </div>
            {(!tower || !tower.reach || !tower.power) && shortfall > 0
              && <p class="action-note">Need {shortfall} more silver.{!tower && canRefund && ' Remove a tower for a refund.'}</p>}
          </section>
        )}
      </div>
      {mission && finished && <p class="mission-outcome">{round.phase === 'lost' ? mission.defeat
        : mission.level === 5 ? mission.victory : `Level ${mission.level} cleared. Level ${mission.level + 1} unlocked.`}</p>}
      {showChronicle && <details class="wave-report" open={round.phase === 'won'}>
        <summary>{mission?.title} Chronicle</summary>
        <p>{mission?.chronicle}</p>
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
