import { render } from 'preact'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks'
import { columns, rows, sitePosition } from './game/board'
import {
  attackers, levelPrepMs, attackerName, enemyMaxHealth, baseUpgradePrice, buildTower, canBuildAt, canSpend, closedSites, createRound, enemiesRemaining, objectiveProgress, removeTower,
  roundRoutes, prepareNextLevel, nextEntry, towerRefund, inRange, routeForEnemy, enemyPosition, startingSilver, secondUpgradeSurcharge,
  retryRound, speedOptions, startRound, tickRound, towerDetails, towerPrice, upgradePrice,
  upgradeTower, waveCueTime, roundFormation, waveOptions,
} from './game/round'
import type { AttackerKind, Mission, PlaySpeed, Round, TowerKind, Upgrade } from './game/round'
import { roadCoverage } from './battlefield-scenery'
import { loadBattlefieldArt } from './battlefield-art-assets'
import { drawBattlefield, drawTower, tile } from './game-art'
import { battles, campaign, isMissionUnlocked, nextMission } from './game/campaign'
import { loadSound, saveSound } from './game/save-game'
import { CampaignProgress, CampaignRecap, campaignDestination, recommendedMission, runLabel, useRecovery } from './continuity'
import { OfflineDetails, useOfflineReadiness } from './offline-readiness'
import { enableAudio, playCue } from './sound'
import { terrainArt } from './terrain-art'
import villageGate from './assets/village-gate.webp?inline'
import villageWatch from './assets/village-watch.webp?inline'
import { useGameNavigation } from './navigation'
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

function useBattlefieldArt() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let mounted = true
    loadBattlefieldArt().then(() => { if (mounted) setReady(true) }).catch(console.error)
    return () => { mounted = false }
  }, [])
  return ready
}

function TowerPortrait({ kind, upgrade }: { kind: TowerKind; upgrade?: Upgrade }) {
  const artReady = useBattlefieldArt()
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
  }, [kind, upgrade, artReady])
  return <canvas ref={canvas} class="tower-portrait" width={80} height={80} aria-hidden="true" />
}

function Battlefield({ round, selected, suggested, onSelect }: {
  suggested: number | null
  round: Round
  selected: number | null
  onSelect: (site: number | null) => void
}) {
  const artReady = useBattlefieldArt()
  const canvas = useRef<HTMLCanvasElement>(null)
  const cells = useRef<(HTMLButtonElement | null)[]>([])
  const reachable = useMemo(() => Array.from({ length: siteCount }, (_, site) =>
    roadCoverage(roundRoutes(round), site, 'archer').reachesRoad), [round.mission])
  useEffect(() => {
    const ctx = canvas.current?.getContext('2d')
    if (!ctx) return
    let frame = 0
    const paint = () => {
      if (drawBattlefield(ctx, round, selected)) frame = requestAnimationFrame(paint)
    }
    paint()
    return () => cancelAnimationFrame(frame)
  }, [round, selected, artReady])

  const tabSite = selected ?? suggested ?? reachable.findIndex((_, site) => canBuildAt(round, site))
  return (
    <div class="battlefield">
      <canvas ref={canvas} width={columns * tile} height={rows * tile} role="img"
        aria-label={round.mission ? `${round.mission.title}, with ${round.mission.gate} at the bottom`
          : 'Shu frontier battlefield, with an enemy road from top to bottom ending at the gate'} />
      <div class="cells" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }} role="group" aria-label="Battlefield tiles. Use arrow keys to select a nearby tile.">
        {Array.from({ length: siteCount }, (_, site) => {
          const tower = round.towers.find(candidate => candidate.site === site)
          if (!tower && !canBuildAt(round, site)) return <span key={site} aria-hidden="true" />
          const [x, y] = sitePosition(site)
          const label = tower ? towerDetails[tower.kind].name : 'Empty tile'
          return (
            <button key={site} ref={button => { cells.current[site] = button }}
              type="button" class={tower ? 'cell' : reachable[site] ? 'cell empty-cell useful-site' : 'cell empty-cell'} data-suggested={site === suggested && selected === null ? 'true' : undefined}
              aria-description={site === suggested ? 'Suggested first tower site' : undefined}
              tabIndex={site === tabSite ? 0 : -1}
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
      {round.levelPrepRemainingMs !== undefined && <div class="prep-clock" aria-hidden="true">
        <svg viewBox="0 0 100 100" focusable="false">
          <circle class="clock-track" cx="50" cy="50" r="46" />
          <circle class="clock-fill" cx="50" cy="50" r="46" pathLength="100" stroke-dasharray="100"
            stroke-dashoffset={100 * (1 - round.levelPrepRemainingMs / levelPrepMs)} />
        </svg>
        <strong>{Math.ceil(round.levelPrepRemainingMs / 1000)}</strong>
      </div>}
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
  const reportDialog = useRef<HTMLDialogElement>(null)
  const offline = useOfflineReadiness()
  const { screen, overlay: confirmation, navigate, back } = useGameNavigation()
  const [hasRun, setHasRun] = useState(false)
  const [sound, setSound] = useState(loadSound)
  const [notice, setNotice] = useState('')
  useLayoutEffect(() => {
    if (confirmation === 'report') reportDialog.current?.showModal()
  }, [confirmation])
  const [draftMission, setDraftMission] = useState<Mission>(campaign[0])
  const [draftWaves, setDraftWaves] = useState(20)
  const previousAudio = useRef<Round | null>(null)
  const [round, setRound] = useState(createRound)
  const [clears, setClears] = useState(loadClears)
  const [selected, setSelected] = useState<number | null>(null)
  const [speed, setSpeed] = useState<PlaySpeed>(1)
  const recovery = useRecovery(round, speed, hasRun)
  const hasSave = recovery.manual !== null
  const running = round.phase === 'running'
  const mission = round.mission
  const formation = roundFormation(round)
  const upcoming = mission ? nextMission(mission) : undefined
  const showChronicle = mission !== null && ((mission.level === 5 && round.phase === 'won') || clears.includes(`${mission.battleId}:5`)
    || (mission.battleId === 'changban' && clears.includes('changban')))
  const upcomingClosures = (mission?.closedSites?.[round.waveNumber]?.length ?? 0) > closedSites(round).length
  const setup = round.phase === 'setup'
  const [paused, setPaused] = useState(false)
  const preparingLevel = round.levelPrepRemainingMs !== undefined
  const initialSetup = setup && round.waveNumber === 1
  const finished = round.phase === 'won' || round.phase === 'lost'
  const activeSite = selected !== null && (canBuildAt(round, selected) || round.towers.some(tower => tower.site === selected)) ? selected : null
  const tower = round.towers.find(candidate => candidate.site === activeSite)
  const price = tower ? upgradePrice(tower) : towerPrice
  const shortfall = Math.max(0, price - round.silver)
  const spendingOpen = canSpend(round)
  const canRefund = setup && round.towers.length > 0
  const showActions = activeSite !== null && spendingOpen && (!tower || !tower.reach || !tower.power || canRefund)
  const firstPlacement = (setup || running) && round.waveNumber === 1 && !preparingLevel && round.towers.length === 0
  const suggested = useMemo(() => {
    if (!firstPlacement) return null
    let best: number | null = null
    let mostRoad = 0
    for (let site = 0; site < siteCount; site++) {
      if (!canBuildAt(round, site)) continue
      const { roadTiles } = roadCoverage(roundRoutes(round), site, 'archer')
      if (roadTiles > mostRoad) { best = site; mostRoad = roadTiles }
    }
    return best
  }, [firstPlacement, mission, round.rulesVersion])
  const slowed = round.enemies.filter(enemy => enemy.slowed)
  const inArcherRange = slowed.filter(enemy => round.towers.some(defense => defense.kind === 'archer'
    && inRange(defense, enemyPosition(enemy.progress, routeForEnemy(round, enemy))))).length
  const coverage = useMemo(() => activeSite === null || tower ? null : {
    archer: roadCoverage(roundRoutes(round), activeSite, 'archer'),
    drum: roadCoverage(roundRoutes(round), activeSite, 'drum'),
  }, [activeSite, tower, mission, round.rulesVersion])
  const firstBuy = firstPlacement && coverage?.archer.reachesRoad
  const selectedName = activeSite === null ? '' : String.fromCharCode(65 + activeSite % columns) + (1 + Math.floor(activeSite / columns))
  const openingHint = activeSite === null ? 'Tap the gold + for an Archer site.'
    : firstBuy ? `${selectedName} · Tap Build Archer to guard the gold road.` : 'Choose a site closer to the road.'
  const firstThreat = attackerName(formation.sequence[0])
  const lanes = roundRoutes(round).length
  const report = finished ? { ...round.waveStats, waveNumber: round.waveNumber } : round.previousWave
  let status = setup ? (firstPlacement ? openingHint : tower ? `${towerDetails[tower.kind].name}${tower.reach && tower.power ? ' · Fully upgraded' : ' · Choose an upgrade'}`
    : activeSite !== null ? 'Choose a tower' : 'Select a tower to upgrade or a stake to build')
    : round.phase === 'won' ? (mission ? 'Level cleared!' : 'Gate defended!') : 'The gate fell.'
  // waveAge measures viewing time even at 3×. Give fast play two seconds to read
  // the formation without slowing attackers or delaying the next wave.
  const showWaveStart = running && round.waveAge < (speed === 3 ? 2 : waveCueTime)
  if (running) {
    const first = formation.sequence[0]
    const waveCue = round.continuedStory
      ? `First: ${attackerName(first)} · ${enemyMaxHealth(round, first)} HP`
      : formation.name
    status = paused ? 'Paused' : round.rebuildTime > 0
      ? `Rebuild · ${Math.ceil(round.rebuildTime)}s before attackers arrive`
      : showWaveStart
      ? `Wave ${round.waveNumber} starts · ${waveCue}`
      : `${enemiesRemaining(round)} of ${formation.sequence.length} attackers`
  }
  if (running && firstPlacement && !paused) status = openingHint
  if (preparingLevel) {
    const seconds = Math.ceil(round.levelPrepRemainingMs! / 1000)
    status = `${paused ? 'Paused · ' : ''}Build or upgrade · Wave in ${seconds}s`
    if (activeSite === null) status += `. Towers kept; +${startingSilver} silver.`
  }
  if (!preparingLevel && !finished && coverage && !firstPlacement && !paused && !showWaveStart) {
    status = `${selectedName} · Choose a tower${shortfall ? '' : ` · ${round.silver - towerPrice} silver left after buying`}`
  }
  if (!preparingLevel && !finished && tower && tower.reach && tower.power && !paused) {
    status = `${towerDetails[tower.kind].name} · ${towerDetails[tower.kind].reach} + ${towerDetails[tower.kind].power}`
  }
  const opening = round.opening
  const rewind = opening && `Wave start: ${opening.towers.length} tower${opening.towers.length === 1 ? '' : 's'} (upgrades kept), ${opening.silver} silver, ${opening.lives} lives.`
  if (round.phase === 'lost') status = `${round.waveStats.escaped} breached · ${round.waveStats.runnersEscaped} fast. ${round.waveStats.runnersEscaped ? 'Pair a Drum with an Archer.' : 'Cover more road with Archers.'}`
  const breach = round.gateHit && !paused && `${attackerName(round.gateHit.kind)} reached the gate`
  const hudStatus = breach ? (showWaveStart || finished ? `${status} · ${breach}` : breach) : status

  const keyboard = useRef(false)
  useEffect(() => {
    const onKey = () => { keyboard.current = true }
    const onPointer = () => { keyboard.current = false }
    window.addEventListener('keydown', onKey, true)
    window.addEventListener('pointerdown', onPointer, true)
    return () => {
      window.removeEventListener('keydown', onKey, true)
      window.removeEventListener('pointerdown', onPointer, true)
    }
  }, [])
  useLayoutEffect(() => {
    if (!keyboard.current || document.activeElement !== document.body) return
    const focus = screen === 'battle' ? '.cells [tabindex="0"]' : 'main button:not(:disabled)'
    document.querySelector<HTMLElement>(focus)?.focus({ preventScroll: true })
  }, [screen, confirmation, activeSite, tower?.kind, tower?.power, tower?.reach])

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

  useEffect(() => {
    if (screen !== 'battle' || round.phase !== 'won' || !upcoming || upcoming.battleId !== mission?.battleId) return
    setRound(current => prepareNextLevel(current, upcoming))
    setDraftMission(upcoming)
    selectTile(null)
    setPaused(false)
  }, [screen, round.phase, mission, upcoming])

  useEffect(() => {
    if (screen === 'menu') {
      previousAudio.current = null
      setNotice('')
    }
  }, [screen])

  function enterBattle(next: Round, restore = false) {
    setRound(next)
    setHasRun(true)
    setPaused(restore && (next.phase === 'running' || next.levelPrepRemainingMs !== undefined))
    selectTile(null)
    previousAudio.current = null
    if (sound) enableAudio()
    navigate('battle')
  }

  const unfinishedRun = hasRun && (round.phase === 'setup' || running)

  function restoreGame(automatic = false) {
    const saved = automatic ? recovery.readCheckpoint() : recovery.readManual()
    if (!saved) {
      navigate('menu')
      setNotice(automatic ? 'The automatic checkpoint could not be restored.' : 'The saved game could not be restored.')
      return
    }
    setSpeed(saved.speed)
    enterBattle(saved.round, true)
  }

  function openMission(next: Mission) {
    if (!isMissionUnlocked(next, clears) && !(round.phase === 'won' && upcoming === next)) return
    setDraftMission(next)
    navigate('campaign')
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
    if (screen !== 'battle' || (!running && !preparingLevel) || paused) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setRound(current => tickRound(current, speed))
    }, 50)
    return () => window.clearInterval(timer)
  }, [screen, running, preparingLevel, speed, paused])

  useEffect(() => {
    const previous = previousAudio.current
    previousAudio.current = screen === 'battle' ? round : null
    if (!sound || screen !== 'battle' || !previous) return
    if (round.lives < previous.lives) playCue('breach')
    else if (running && (previous.phase === 'setup' || previous.waveNumber !== round.waveNumber)) playCue('wave')
    else if (round.impacts.some(hit => hit.elapsed < 0.05 && !previous.impacts.includes(hit))) playCue('hit')
  }, [round, screen, sound, running])

  const speedPicker = (
    <div class="map-setting">
      <label class="visually-hidden" for="speed">Speed</label>
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
    <span class="offline">{offline.status}</span>
  </header>

  if (screen === 'menu') {
    return <main class={`menu-screen title-screen${hasRun ? ' has-run' : ''}`}>
      {header}
      <h2 class="visually-hidden">Main menu</h2>
      <img class="menu-art" src={villageGate} alt="" />
      {hasRun && <p class="run-summary">Active run · {runLabel(round)}<small>Continue opens this board. Save game replaces the manual slot.</small></p>}
      <div class="menu-actions">
        {hasRun && <button type="button" class="primary" onClick={() => {
          if (sound) enableAudio()
          navigate('battle')
        }}>Continue</button>}
        <button type="button" class={hasRun ? undefined : 'primary'} onClick={() => {
          setDraftMission(recommendedMission(clears))
          navigate('campaign')
        }}>Campaign</button>
        <button type="button" onClick={() => {
          navigate('long')
        }}>Long battle</button>
      </div>
      <div class="session-actions">
        <button type="button" disabled={!hasRun} onClick={() => {
          const saved = recovery.saveManual()
          setNotice(saved ? 'Manual save updated on this browser. Automatic recovery is separate.' : 'This browser could not save the game.')
        }}>Save game</button>
        <button type="button" disabled={!hasSave} onClick={() => {
          if (unfinishedRun) navigate('menu', 'restore')
          else restoreGame()
        }} aria-label="Restore saved game">Restore saved game
          <small>{recovery.manual ? `Manual · ${runLabel(recovery.manual.round)}` : 'Manual slot empty'}</small>
        </button>
        {hasRun && confirmation !== 'restart' && <button type="button" onClick={() => navigate('menu', 'restart')}>
          {mission ? 'Restart level' : 'Restart battle'}
        </button>}
        <button type="button" aria-pressed={sound} onClick={() => {
          const enabled = !sound
          if (enabled) enableAudio()
          setSound(enabled)
          saveSound(enabled)
        }}>Sound {sound ? 'on' : 'off'}</button>
      </div>
      {!hasRun && recovery.checkpoint && <div class="recovery-card">
        <button type="button" aria-label="Recover checkpoint" onClick={() => restoreGame(true)}>Recover checkpoint
          <small>Automatic · {runLabel(recovery.checkpoint.round)}</small>
        </button>
        <p>Recovered battles open paused. The manual save stays separate.</p>
      </div>}
      {recovery.checkpointFailed && <p role="status">Automatic recovery unavailable. Use Save game before leaving.</p>}
      <details class="menu-progress"><summary>Campaign progress · {campaign.filter(level => clears.includes(level.id)).length}/30 cleared</summary>
        <p>{campaignDestination(clears)}</p>
        <CampaignRecap mission={recommendedMission(clears)} />
      </details>
      <OfflineDetails {...offline} />
      <details class="offline-details"><summary>Recovery details</summary>
        <p>Automatic recovery saves changed play every second and when you leave the page. Unchanged menu or paused states are not rewritten. Recover checkpoint opens paused.</p>
        <p>Save game replaces only the manual slot. Restore saved game opens that manual board; Continue opens the active board.</p>
      </details>
      {confirmation === 'restart' && <div class="menu-confirm">
        <p>Restart from wave one? Your saved game stays available.</p>
        <button type="button" class="primary" onClick={() => enterBattle(createRound(round.totalWaves, mission))}>Restart from wave one</button>
        <button type="button" onClick={back}>Cancel</button>
      </div>}
      {confirmation === 'restore' && <div class="menu-confirm">
        <p>Replace the active run with the manual save? Automatic recovery will follow the restored run.</p>
        {recovery.manual && <p>{runLabel(recovery.manual.round)}</p>}
        <button type="button" class="primary" onClick={() => restoreGame()}>Replace with saved game</button>
        <button type="button" onClick={back}>Cancel</button>
      </div>}
      {notice && <p role="status">{notice}</p>}
    </main>
  }

  if (screen === 'campaign' || screen === 'long') {
    const selectedMission = screen === 'campaign' ? draftMission : null
    return <main class="menu-screen setup-screen">
      {header}
      <button type="button" onClick={back}>Main menu</button>
      {selectedMission ? <section class="mission-briefing" aria-label="Mission briefing" tabIndex={0}>
        <h2 class="visually-hidden">Campaign</h2>
        <h3>{selectedMission.title} · Level {selectedMission.level}</h3>
        <p class="mission-order">{selectedMission.objective} · Hold for {selectedMission.waves.length} waves</p>
        <img class="briefing-art" src={selectedMission.battleId === 'village-watch'
          ? villageWatch : terrainArt[selectedMission.terrain]} alt="" />
        <details class="story-scene"><summary>Story</summary>
          <p>{selectedMission.setting} · {selectedMission.briefing}</p>
        </details>
        <CampaignRecap mission={selectedMission} />
        {selectedMission.leadIn && <details class="story-scene"><summary>Before the battle</summary><p>{selectedMission.leadIn}</p></details>}

        <p>{selectedMission.level === 5 ? 'Final threat · The commander waits for his escort to clear.'
          : `Next threat · ${selectedMission.waves[0].name}`}</p>
        {(clears.includes(`${selectedMission.battleId}:5`)
          || (selectedMission.battleId === 'changban' && clears.includes('changban'))) &&
          <details class="story-scene"><summary>{selectedMission.title} Chronicle</summary><p>{selectedMission.chronicle}</p></details>}
        <details class="mission-select"><summary>Choose level</summary>
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
        <CampaignProgress clears={clears} selected={selectedMission} onSelect={setDraftMission} />
        </details>
      </section> : <section class="mission-briefing" aria-label="Long battle setup" tabIndex={0}>
        <h2>Long battle</h2>
        <p>A continuous defense with reinforcements and no campaign progress. Twenty waves is the shortest run; one hundred is five times as many waves. Time varies with speed, purchases and pauses.</p>
        <p>Main menu pauses play. Continue returns to the active run. Automatic recovery keeps a checkpoint; Save game keeps a separate manual slot for later.</p>
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
        <p>Start this battle and replace your active run and automatic checkpoint? Your manual save stays available.</p>
        <button class="primary" type="button"
          onClick={() => enterBattle(createRound(draftWaves, selectedMission))}>Replace and enter battle</button>
        <button type="button" onClick={back}>Cancel</button>
      </div> : <button class="primary enter-battle" type="button" onClick={() => {
        if (unfinishedRun) navigate(screen, 'new')
        else enterBattle(createRound(draftWaves, selectedMission))
      }}>Enter battle</button>}
    </main>
  }

  function retryWave() {
    setPaused(false)
    setRound(retryRound)
    selectTile(null)
    navigate('battle')
  }

  if (screen === 'enemies' || screen === 'towers') {
    const enemyPage = screen === 'enemies'
    return <main class="battle-orders field-guide">
      <header><h1>{enemyPage ? 'Enemy Types' : 'Towers'}</h1>
        <button type="button" onClick={back}>Back to orders</button></header>
      <section key={screen} class="guide-content">
      {enemyPage ? <>
        <p>Base stats before wave and story bonuses. Silver is the kill reward.</p>
        <table><thead><tr><th>Attacker</th><th>HP</th><th>Tiles/s</th><th>Silver</th></tr></thead>
          <tbody>{(Object.keys(attackers) as AttackerKind[]).map(kind => <tr key={kind}>
            <th scope="row">{attackerName(kind)}</th><td>{attackers[kind].health}</td>
            <td>{attackers[kind].speed}</td><td>{attackers[kind].reward}</td></tr>)}</tbody></table>
        <p>Slow runners and cavalry near Archers. Veterans take more hits. The commander waits until the soldiers ahead fall or escape.</p>
      </> : <>
        <h2>Archer · {towerPrice} silver</h2>
        <p>Shoots one enemy at a time. Cover both sides of a bend. Upgrade range to reach farther or fire rate to land more shots.</p>
        <h2>Drum · {towerPrice} silver</h2>
        <p>Slows enemies inside its ring. Pair it with an Archer for extra shots. Blue lines mark slowed enemies. The Drum deals no damage.</p>
        <p>Wider reach extends the ring. Stronger slow raises the speed reduction from {Math.round(100 * (1 - towerDetails.drum.speedFactor))}% to {Math.round(100 * (1 - towerDetails.drum.strongerSpeedFactor))}%. Where Drums overlap, the strongest slow applies.</p>
      </>}
      </section>
      <button type="button" onClick={() => navigate(enemyPage ? 'towers' : 'enemies')}>{enemyPage ? 'Towers' : 'Enemy Types'}</button>
    </main>
  }

  if (screen === 'orders') {
    return <main class="battle-orders">
      <header><h1>Battle orders</h1>
        <button type="button" onClick={back}>Back to battle</button>
      </header>
      <p>{mission?.title ?? 'Shu frontier'} · Wave {round.waveNumber} of {round.totalWaves}</p>
      <p class="orders-intel">Wave {round.waveNumber} · {formation.name}. {Array.from(new Set(formation.sequence)).map(attackerName).join(', ')}.
        {lanes > 1 && round.spawned < formation.sequence.length && ` Next arrival: Entry ${nextEntry(round) + 1}.`}
        {' '}{running || preparingLevel ? paused ? 'Returns paused.' : 'Returns to play.' : ''}</p>
      <div class="orders-list">
        <nav class="guide-links" aria-label="Field guide">
          <button type="button" onClick={() => navigate('enemies')}>Enemy Types</button>
          <button type="button" onClick={() => navigate('towers')}>Towers</button>
        </nav>
        <div class="speed-order">Play speed {speedPicker}</div>
        {(report || showChronicle) && <button type="button" onClick={() => {
          if (running || preparingLevel) setPaused(true)
          navigate('orders', 'report')
        }} aria-label="Report">Report{(running || preparingLevel) && !paused && ' · pauses play'}</button>}
        {!setup && <div><button type="button" onClick={retryWave}>Retry wave</button> <small>{rewind}</small></div>}
        {initialSetup && !round.continuedStory && round.towers.length > 0 && <button type="button"
          onClick={() => enterBattle(createRound(round.totalWaves, mission))}>Clear towers</button>}
        {finished && <button type="button" onClick={() => enterBattle(createRound(round.totalWaves, mission))}>
          {mission ? 'Restart level' : 'New battle'}</button>}
      </div>
      {confirmation === 'report' && <dialog ref={reportDialog} onCancel={event => {
        event.preventDefault()
        back()
      }} class="battle-report" aria-label="Battle report">
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
        <button type="button" onClick={back}>Close report</button>
      </dialog>}
    </main>
  }

  const needsSilver = showActions && (!tower || !tower.reach || !tower.power) && shortfall > 0
  const battleName = mission ? `${mission.title} · Level ${mission.level}` : 'Shu frontier'
  return (
    <main class="battle-screen">
      <h1 class="visually-hidden">{battleName}</h1>
      <header class="battle-header">
        <button type="button" class="edge-control" aria-label="Main menu" onClick={back}>Menu</button>
        <div class="hud">
          <div class="resources">
            <strong><i class="coin" aria-hidden="true" />{round.silver} silver</strong>
            <span>{round.lives} lives</span>
            <span>Wave {round.waveNumber}/{round.totalWaves}</span>
          </div>
          <div class="objective">{mission ? `${objectiveProgress(round)}/${mission.milestoneCount} ${mission.milestone}` : 'Defend the outpost gate'}</div>
        </div>
        <button type="button" class="edge-control" aria-label="Battle orders" onClick={() => navigate('orders')}>Orders<small>Help · {speed}×</small></button>
      </header>
      <div class="board-view">
        <Battlefield round={round} selected={activeSite} suggested={suggested} onSelect={site => selectTile(site === activeSite ? null : site)} />
      </div>
      <footer class="command-bar">
        <div class="command-status">
          <div class="battle-readout">
            {hudStatus && <span>{hudStatus}</span>}
            {!finished && upcomingClosures && <span>× closes next wave · tower refunded.</span>}
            {slowed.length > 0 && <span class="drum-effect">Drum slowing {slowed.length} · {inArcherRange} in Archer range</span>}
            {needsSilver && <span class="action-note">Need {shortfall} more silver.</span>}
            {tower && !needsSilver && price > baseUpgradePrice && (!tower.reach || !tower.power) &&
              <span>Second upgrade · +{price - baseUpgradePrice} silver</span>}
          </div>
          <span class="visually-hidden" role="status" aria-atomic="true">{round.phase === 'lost' ? 'Gate fell. Retry wave available.'
            : breach || (preparingLevel ? 'Build or upgrade before the next level starts.' : `Wave ${round.waveNumber}. ${paused ? 'Paused.' : ''}`)}</span>
          {setup && !preparingLevel && tower && !tower.reach && !tower.power && !needsSilver &&
            <small>Next branch {baseUpgradePrice + secondUpgradeSurcharge}</small>}
          {canRefund && tower && <button type="button" class="refund" aria-label="Remove & refund" aria-description={`Returns ${towerRefund(tower)} silver`}
            onClick={() => setRound(current => removeTower(current, tower.site))}>Refund {towerRefund(tower)}</button>}
        </div>
        <div class="command-row">
          {showActions && activeSite !== null && (!tower || !tower.reach || !tower.power) ? (
            <section class="actions" aria-label="Tower actions">
              {tower ? upgradeBranches.filter(option => !tower[option]).map(option => (
                <button key={option} type="button" class="purchase-card" disabled={shortfall > 0}
                  title={upgradeEffect(tower.kind, option)} onClick={() => buy(current => upgradeTower(current, tower.site, option))}>
                  <strong>{towerDetails[tower.kind][option]}</strong>
                  <span>{price} silver</span>
                  <small>{upgradeEffect(tower.kind, option)}</small>
                </button>
              )) : towerKinds.map(kind => (
                <button key={kind} type="button" class={`purchase-card build-card${firstBuy && kind === 'archer' ? ' first-buy' : ''}`} disabled={shortfall > 0}
                  onClick={() => buy(current => buildTower(current, activeSite, kind))}>
                  <TowerPortrait kind={kind} />
                  <span><strong>Build {towerDetails[kind].name}</strong>
                    <span>{towerPrice} silver</span></span>
                  <small><i class={`range-key ${kind}`} aria-hidden="true" />{coverage?.[kind].reachesRoad
                    ? `${kind === 'archer' ? 'Hit' : 'Slow'} · ${coverage[kind].zones[0]}` : 'Road out of range'}</small>
                </button>
              ))}
            </section>
          ) : suggested !== null && activeSite === null ? <button type="button" class="choose-site"
            onClick={() => selectTile(suggested)} aria-label="Select marked site">Select marked site<small>Archer · {towerPrice} silver</small></button> : <div class="command-location">{round.phase === 'lost' ? rewind : mission?.title ?? 'Shu frontier'}</div>}
          {running || preparingLevel ? <button class="battle-primary" type="button" onClick={() => setPaused(value => !value)}>
            {paused ? 'Resume' : 'Pause'}</button>
            : setup ? <button class="battle-primary" type="button" aria-label="Start wave" onClick={() => setRound(startRound)}>Start<small>{firstThreat}{lanes > 1 ? ` · E${nextEntry(round) + 1}` : ''}</small></button>
            : round.phase === 'won' && upcoming && upcoming.battleId !== mission?.battleId ? <button class="battle-primary" type="button" onClick={() => openMission(upcoming)}>Next battle</button>
            : round.phase === 'lost' ? <button class="battle-primary" type="button" onClick={retryWave}>Retry wave</button>
            : <button class="battle-primary" type="button" onClick={back}>Main menu</button>}
        </div>
      </footer>
    </main>
  )
}

render(<App />, document.getElementById('app')!)
