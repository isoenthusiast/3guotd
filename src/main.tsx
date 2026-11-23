import { render } from 'preact'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks'
import { columns, rows, sitePosition } from './game/board'
import {
  beaconArcher, buildChoices, isTrialTower, trialTowerFor, levelPrepMs, attackerName, enemyMaxHealth, baseUpgradePrice, buildTower, canBuildAt, canSpend, closedSites, createRound, enemiesRemaining, objectiveProgress, removeTower,
  roundRoutes, levelCarryover, prepareNextLevel, nextEntry, towerRefund, inRange, routeForEnemy, enemyPosition, startingSilver, secondUpgradeSurcharge,
  retryRound, longBuildSlots, longUnlockAt, longUnlockCueTime, selectLongSupport, speedOptions, startRound, tickRound, towerDetails, upgradePrice,
  upgradeTower, waveCueTime, roundFormation, waveOptions,
} from './game/round'
import type { Mission, PlaySpeed, Round, TowerKind, Upgrade } from './game/round'
import { roadCoverage } from './battlefield-scenery'
import { loadBattlefieldArt } from './battlefield-art-assets'
import { drawBattlefield, drawTower, tile } from './game-art'
import { battles, campaign, isMissionUnlocked, nextMission } from './game/campaign'
import { hanzhongPreview } from './game/hanzhong-preview'
import { loadSound, saveSound } from './game/save-game'
import { CampaignProgress, CampaignRecap, campaignDestination, recommendedMission, runLabel, useRecovery } from './continuity'
import { OfflineDetails, useOfflineReadiness } from './offline-readiness'
import { enableAudio, playCue } from './sound'
import { terrainArt } from './terrain-art'
import villageGate from './assets/village-gate.webp?inline'
import villageWatch from './assets/village-watch.webp?inline'
import { useGameNavigation } from './navigation'
import { EnemyGuide, PairingGuide, VisualComfortControls } from './combat-guide'
import './style.css'

const siteCount = columns * rows
const upgradeBranches = ['reach', 'power'] as const
function towerRole(kind: TowerKind) {
  switch (towerDetails[kind].targeting) {
    case 'first': return 'Road damage'
    case 'areaSlow': return 'Slows enemies'
    case 'cluster': return `Hits up to ${towerDetails.volley.maxTargets}`
    case 'highestHealth': return 'Targets highest HP'
    case 'nearestArcher': return 'Speeds up Archer'
  }
}

function siteName(site: number) {
  const [column, row] = sitePosition(site)
  return String.fromCharCode(65 + column) + (row + 1)
}

const trialNames = { volley: 'Volley', crossbow: 'Crossbow', beacon: 'Beacon' } as const
const trialBrief = {
  volley: `Volley hits up to ${towerDetails.volley.maxTargets} nearby enemies. Try a bend where the column bunches. Volley is recalled for full silver after this level.`,
  crossbow: 'Heavy Crossbow targets the enemy with the most HP in range. Place it by a long stretch so it can reload before that enemy leaves.',
  beacon: `Watch Beacon boosts the nearest Archer within ${towerDetails.beacon.range} tiles. Link it to an Archer that covers useful road. The Beacon is refunded after this level.`,
} as const

function upgradeEffect(kind: Exclude<TowerKind, Round['supportTower']>, branch: Upgrade): string {
  if (branch === 'reach') {
    const { range, extendedRange } = towerDetails[kind]
    return `${range} → ${extendedRange} tiles`
  }
  if (kind === 'archer') {
    const { shotInterval, fasterShotInterval } = towerDetails.archer
    return `${shotInterval}→${fasterShotInterval}s per shot`
  }
  const { speedFactor, strongerSpeedFactor } = towerDetails.drum
  const slow = (factor: number) => Math.round((1 - factor) * 100)
  return `Slow ${slow(speedFactor)}→${slow(strongerSpeedFactor)}%`
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

function Battlefield({ round, selected, suggested, onSelect, wireframe = false }: {
  suggested: number | null
  wireframe?: boolean
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
      if (drawBattlefield(ctx, round, selected, { wireframe })) frame = requestAnimationFrame(paint)
    }
    paint()
    return () => cancelAnimationFrame(frame)
  }, [round, selected, artReady, wireframe])

  const closingSites = round.mission?.closedSites?.[round.waveNumber] ?? []
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
              aria-description={[
                tower ? 'Occupied' : 'Available to build',
                !tower && reachable[site] && 'Archer can reach the road',
                closingSites.includes(site) && 'Closes next wave. Tower refunded in full.',
                site === suggested && 'Suggested first tower site',
              ].filter(Boolean).join('. ')}
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
  const [draftSupport, setDraftSupport] = useState<Round['supportTower']>()
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
  const selectedClosing = selected !== null && mission?.closedSites?.[round.waveNumber]?.includes(selected)
  const nextChapter = round.phase === 'won' && upcoming && upcoming.battleId !== mission?.battleId ? upcoming : undefined
  const setup = round.phase === 'setup'
  const [paused, setPaused] = useState(false)
  const preparingLevel = round.levelPrepRemainingMs !== undefined
  const initialSetup = setup && round.waveNumber === 1
  const finished = round.phase === 'won' || round.phase === 'lost'
  const activeSite = selected !== null && (canBuildAt(round, selected) || round.towers.some(tower => tower.site === selected)) ? selected : null
  const tower = round.towers.find(candidate => candidate.site === activeSite)
  const upgradeKind = isTrialTower(tower?.kind) ? undefined : tower?.kind
  const upgradeable = upgradeKind ? tower : undefined
  const installedUpgrades = upgradeKind ? towerDetails[upgradeKind] : null
  const appliedUpgrades = installedUpgrades && upgradeable
    ? upgradeBranches.filter(branch => upgradeable[branch]).map(branch => installedUpgrades[branch])
    : []
  const choices = buildChoices(round)
  const prices = choices.map(kind => towerDetails[kind].price)
  const price = upgradeable ? upgradePrice(upgradeable) : Math.min(...prices)
  const shortfall = Math.max(0, price - round.silver)
  const spendingOpen = canSpend(round)
  const canRefund = setup && round.towers.length > 0
  const showActions = activeSite !== null && spendingOpen && (!tower || !!upgradeable && (!upgradeable.reach || !upgradeable.power))
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
    volley: roadCoverage(roundRoutes(round), activeSite, 'volley'),
    crossbow: roadCoverage(roundRoutes(round), activeSite, 'crossbow'),
  }, [activeSite, tower, mission, round.rulesVersion])
  const firstBuy = firstPlacement && coverage?.archer.reachesRoad
  const selectedName = activeSite === null ? '' : siteName(activeSite)
  const linkedArcher = activeSite !== null && (tower?.kind === 'beacon' || (!tower && choices.includes('beacon')))
    ? beaconArcher(round.towers, activeSite) : undefined
  const linkLabel = linkedArcher === undefined ? 'No Archer in reach' : `Archer ${siteName(linkedArcher)}`
  const towerSummary = tower && <div class="command-location tower-summary">
    <strong>{towerDetails[tower.kind].name} · {towerRole(tower.kind)}</strong>
    <small>{tower.kind === 'beacon' ? linkLabel : appliedUpgrades.join(' + ') || 'No upgrades installed'}</small>
  </div>
  const boosted = tower?.kind === 'archer' && round.towers.some(candidate =>
    candidate.kind === 'beacon' && beaconArcher(round.towers, candidate.site) === tower.site)
  function branchEffect(branch: Upgrade) {
    return boosted && branch === 'power' ? `${towerDetails.archer.fasterShotInterval}s unlinked` : upgradeKind ? upgradeEffect(upgradeKind, branch) : ''
  }
  const openingHint = activeSite === null ? 'Tap the gold + for an Archer site.'
    : firstBuy ? `${selectedName} · Tap Build Archer to guard the gold road.` : 'Choose a site closer to the road.'
  const forecast = new Map<typeof formation.sequence[number], number>()
  for (const kind of formation.sequence) forecast.set(kind, (forecast.get(kind) ?? 0) + 1)
  const counts = [...forecast]
  const compactNames = {
    infantry: 'Inf', runner: 'Run', veteran: 'Vet', veteranRunner: 'Vet run',
    bowman: 'Bow', cavalry: 'Cav', commander: 'Cmd',
  }
  const fullCounts = counts.map(([kind, count]) => `${count} × ${attackerName(kind)}`).join(' · ')
  const lanes = roundRoutes(round).length
  const previewing = setup || preparingLevel
  const firstEntrance = lanes > 1 ? ` · Entry ${nextEntry(round, 0) + 1} first` : ''
  const report = finished ? { ...round.waveStats, waveNumber: round.waveNumber } : round.previousWave
  let status = setup ? (firstPlacement ? openingHint : tower ? `${towerDetails[tower.kind].name}${!upgradeable ? '' : tower.reach && tower.power ? ' · Fully upgraded' : ' · Choose an upgrade'}`
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
  const unlocked = running && round.announceUnlock && round.waveAge < longUnlockCueTime
    ? longUnlockAt(round.waveNumber) : undefined
  const unlockMessage = unlocked && `${towerDetails[unlocked].name} unlocked · Choose in Orders`
  const alertActive = unlocked || showWaveStart || (running && round.rebuildTime > 0)
  if (running && firstPlacement && !paused && !alertActive) status = openingHint
  if (preparingLevel) {
    const seconds = Math.ceil(round.levelPrepRemainingMs! / 1000)
    status = `${paused ? 'Paused · ' : ''}Wave in ${seconds}s${round.trialRefund ? ` · +${round.trialRefund} trial refund` : ''}`
  }
  if (!preparingLevel && !finished && coverage && !firstPlacement && !paused && !alertActive) {
    status = `${selectedName} available · Choose a tower${shortfall || prices.some(value => value !== price) ? '' : ` · ${round.silver - price} silver left`}`
  }
  if (!preparingLevel && !finished && tower && installedUpgrades && tower.reach && tower.power && !paused && !alertActive) {
    status = `${towerDetails[tower.kind].name} · ${installedUpgrades.reach} + ${installedUpgrades.power}`
  }
  const opening = round.opening
  const openingSummary = opening && `${opening.towers.length} ${opening.towers.length === 1 ? 'tower' : 'towers'} · ${opening.silver} silver · ${opening.lives} ${opening.lives === 1 ? 'life' : 'lives'}`
  const lost = round.phase === 'lost'
  const lastBreach = !round.gateHit ? 'Breach details unavailable' : [
    round.gateHit.routeIndex === undefined ? 'Entrance unknown' : `Entry ${round.gateHit.routeIndex + 1}`,
    attackerName(round.gateHit.kind),
  ].join(' · ')
  const defeatAdvice = round.waveStats.runnersEscaped ? 'Pair a Drum with an Archer.' : 'Cover more road with Archers.'
  const breach = round.gateHit && !paused && `${attackerName(round.gateHit.kind)} reached the gate`
  const breachAnnouncement = breach && round.gateHit
    ? `${breach}. ${round.gateHit.routeIndex !== undefined ? `Entry ${round.gateHit.routeIndex + 1}. ` : ''}${round.lives} lives remaining.`
    : ''
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
    if (trialTowerFor(upcoming)) {
      setDraftMission(upcoming)
      setDraftSupport(undefined)
      navigate('campaign')
      return
    }
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
    const { announceUnlock, ...restored } = saved.round
    enterBattle(restored, true)
  }

  function openMission(next: Mission) {
    if (!isMissionUnlocked(next, clears) && !(round.phase === 'won' && upcoming === next)) return
    setDraftMission(next)
    setDraftSupport(undefined)
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
          setDraftSupport(undefined)
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
        <button type="button" class="primary" onClick={() => enterBattle(createRound(round.totalWaves, mission, round.supportTower))}>Restart from wave one</button>
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
    const trial = trialTowerFor(selectedMission)
    const selectedSupport = draftSupport === trial ? draftSupport : undefined
    const continuingTrial = trial && round.phase === 'won' && upcoming?.id === selectedMission?.id
    const carryover = continuingTrial ? levelCarryover(round) : undefined
    function startBattle() {
      if (selectedMission && continuingTrial) {
        enterBattle(prepareNextLevel(round, selectedMission, selectedSupport))
      } else enterBattle(createRound(draftWaves, selectedMission, selectedSupport))
    }
    return <main class="menu-screen setup-screen">
      {header}
      <button type="button" onClick={back}>Main menu</button>
      {selectedMission ? <section class="mission-briefing" aria-label="Mission briefing" tabIndex={0}>
        <h2 class="visually-hidden">Campaign</h2>
        <h3>{selectedMission.title} · Level {selectedMission.level}</h3>
        <p class="mission-order">{selectedMission.objective} · Hold for {selectedMission.waves.length} waves</p>
        {carryover && <p class="campaign-carryover">Level cleared. Silver and standard towers with upgrades carry over.
          {` +${startingSilver} silver grant.`}{carryover.trialRefund > 0 && ` +${carryover.trialRefund} silver trial refund.`}</p>}
        {nextChapter?.id === selectedMission.id && <p class="campaign-carryover">New chapter starts with {startingSilver} silver and an empty board.</p>}
        {trial && <div class="map-setting trial-loadout">
          <label for="support-tower">Tower loadout</label>
          <select id="support-tower" value={selectedSupport ?? 'drum'}
            onChange={event => setDraftSupport(event.currentTarget.value === trial ? trial : undefined)}>
            <option value="drum">Archer + Drum</option>
            <option value={trial}>Archer + {trialNames[trial]}</option>
          </select>
          <p>{trialBrief[trial]}</p>
        </div>}
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
          onClick={startBattle}>Replace and enter battle</button>
        <button type="button" onClick={back}>Cancel</button>
      </div> : <button class="primary enter-battle" type="button" onClick={() => {
        if (unfinishedRun) navigate(screen, 'new')
        else startBattle()
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
        <EnemyGuide round={round} />
      </> : <>
        <h2>Archer · {towerDetails.archer.price} silver</h2>
        <p>Shoots one enemy at a time. Cover both sides of a bend. Upgrade range to reach farther or fire rate to land more shots.</p>
        <h2>Drum · {towerDetails.drum.price} silver</h2>
        <p>Slows enemies inside its ring. Pair it with an Archer for extra shots. Blue lines mark slowed enemies. The Drum deals no damage.</p>
        <p>Wider reach extends the ring. Stronger slow raises the speed reduction from {Math.round(100 * (1 - towerDetails.drum.speedFactor))}% to {Math.round(100 * (1 - towerDetails.drum.strongerSpeedFactor))}%. Where Drums overlap, the strongest slow applies.</p>
        <PairingGuide />
        {(mission ? trialTowerFor(mission) === 'beacon' : longBuildSlots(round.waveNumber).includes('beacon')) && <p>Watch Beacon · {towerDetails.beacon.price} silver. The dotted line points to the nearest Archer within {towerDetails.beacon.range} tiles. That Archer reloads in {towerDetails.beacon.archerInterval}s. Equal distances favor the earlier board tile. Beacons and Faster fire do not stack. A Beacon deals no damage.</p>}
        {(mission ? trialTowerFor(mission) === 'crossbow' : longBuildSlots(round.waveNumber).includes('crossbow')) && <p>Heavy Crossbow · {towerDetails.crossbow.price} silver. {towerRole('crossbow')}. A bolt deals {towerDetails.crossbow.damage} damage within {towerDetails.crossbow.range} tiles. Reloads in {towerDetails.crossbow.shotInterval}s. No upgrades in this trial.</p>}
        {(mission ? trialTowerFor(mission) === 'volley' : longBuildSlots(round.waveNumber).includes('volley')) && <p>Volley Platform · {towerDetails.volley.price} silver. {towerRole('volley')} enemies within {towerDetails.volley.clusterRadius} tiles of the first target. Range {towerDetails.volley.range} tiles. Reloads in {towerDetails.volley.shotInterval}s. No upgrades in this trial.</p>}
      </>}
      <VisualComfortControls />
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
      <p class="orders-intel">Wave {round.waveNumber} · {formation.name}. {fullCounts}{previewing && firstEntrance}.
        {!previewing && lanes > 1 && round.spawned < formation.sequence.length && ` Next arrival: Entry ${nextEntry(round) + 1}.`}
        {' '}{running || preparingLevel ? paused ? 'Returns paused.' : 'Returns to play.' : ''}</p>
      <div class="orders-list">
        {!mission && !finished && <div class="map-setting">
          <label for="long-support">Second build slot</label>
          <select id="long-support" value={round.longSupport ?? 'drum'} onChange={event => {
            const kind = event.currentTarget.value
            setRound(current => selectLongSupport(current, kind))
          }}>
            {longBuildSlots(round.waveNumber).map(kind => <option key={kind} value={kind}>{towerDetails[kind].name}</option>)}
          </select>
        </div>}
        <nav class="guide-links" aria-label="Field guide">
          <button type="button" onClick={() => navigate('enemies')}>Enemy Types</button>
          <button type="button" onClick={() => navigate('towers')}>Towers</button>
        </nav>
        {(report || showChronicle) && <button type="button" onClick={() => {
          if (running || preparingLevel) setPaused(true)
          navigate('orders', 'report')
        }} aria-label="Report">Report{(running || preparingLevel) && !paused && ' · pauses play'}</button>}
        {!setup && <div><button type="button" disabled={!opening} onClick={retryWave}>Retry wave</button> {openingSummary && <small>Wave start · {openingSummary} · upgrades kept</small>}</div>}
        {initialSetup && !round.continuedStory && round.towers.length > 0 && <button type="button"
          onClick={() => enterBattle(createRound(round.totalWaves, mission, round.supportTower))}>Clear towers</button>}
        {finished && <button type="button" onClick={() => enterBattle(createRound(round.totalWaves, mission, round.supportTower))}>
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
        <button type="button" class="edge-control" aria-label="Battle orders" onClick={() => navigate('orders')}>Orders<small>Help</small></button>
      </header>
      <div class="board-view">
        <Battlefield round={round} selected={activeSite} suggested={suggested} onSelect={site => selectTile(site === activeSite ? null : site)} />
      </div>
      <footer class="command-bar">
        <div class="command-status">
          <div class="battle-readout">
            {previewing && <div class="wave-preview" aria-label={`Wave ${round.waveNumber}: ${fullCounts}${firstEntrance}`}>
              {counts.map(([kind, count]) => `${count} ${compactNames[kind]}`).join(' · ')}
              {firstEntrance}
            </div>}
            {lost ? <div class="defeat-breach">
              <strong>Last breach · {lastBreach}</strong>
              <div>{defeatAdvice}</div>
            </div> : unlockMessage ? <>
              <div>{unlockMessage}</div>
              {breach && <div>{breach}</div>}
            </> : hudStatus && <span>{hudStatus}</span>}
            {!finished && upcomingClosures && <span>{selectedClosing ? 'This tile' : '×'} closes next wave · refunded.</span>}
            {!lost && !unlockMessage && slowed.length > 0 && <span class="drum-effect">Drum slowing {slowed.length} · {inArcherRange} in Archer range</span>}
            {!unlockMessage && needsSilver && <span class="action-note">Need {shortfall} more silver.</span>}
            {!unlockMessage && showActions && upgradeable && !needsSilver && price > baseUpgradePrice && (!upgradeable.reach || !upgradeable.power) &&
              <span>Second upgrade · +{price - baseUpgradePrice} silver</span>}
          </div>
          <span class="visually-hidden" role="status" aria-atomic="true">{lost ? `Gate fell. Last breach. ${lastBreach}. ${defeatAdvice} ${opening ? 'Retry wave available.' : 'Retry unavailable. Wave-start snapshot missing.'}`
            : unlockMessage ? `${unlockMessage}. ${breachAnnouncement}`.trim()
              : breachAnnouncement || (preparingLevel ? 'Build or upgrade before the next level starts.' : `Wave ${round.waveNumber}. ${paused ? 'Paused.' : ''}`)}</span>
          {setup && !preparingLevel && upgradeable && !upgradeable.reach && !upgradeable.power && !needsSilver &&
            <small>Next branch {baseUpgradePrice + secondUpgradeSurcharge}</small>}
          {canRefund && tower && <button type="button" class="refund" aria-label="Remove & refund" aria-description={`Returns ${towerRefund(tower)} silver`}
            onClick={() => setRound(current => removeTower(current, tower.site))}>Refund {towerRefund(tower)}</button>}
        </div>
        <div class="command-row">
          {showActions && activeSite !== null ? (
            <section class="actions" aria-label="Tower actions">
              {upgradeable && installedUpgrades && upgradeKind ? <>
                {appliedUpgrades.length === 1 && towerSummary}
                {upgradeBranches.filter(option => !upgradeable[option]).map(option => (
                  <button key={option} type="button" class="purchase-card" disabled={shortfall > 0}
                    title={branchEffect(option)} onClick={() => buy(current => upgradeTower(current, upgradeable.site, option))}>
                    <strong>{installedUpgrades[option]}</strong>
                    <span>{price} silver</span>
                    {appliedUpgrades.length === 0 && option === 'reach'
                      ? <small class="tower-role">{towerRole(upgradeKind)}</small>
                      : <small>{branchEffect(option)}</small>}
                  </button>
              ))}</> : choices.map(kind => (
                <button key={kind} type="button" class={`purchase-card build-card${firstBuy && kind === 'archer' ? ' first-buy' : ''}`} disabled={round.silver < towerDetails[kind].price}
                  title={towerRole(kind)}
                  aria-description={round.silver < towerDetails[kind].price
                    ? `${towerRole(kind)}. Need ${towerDetails[kind].price - round.silver} more silver`
                    : towerRole(kind)}
                  onClick={() => buy(current => buildTower(current, activeSite, kind))}>
                  <TowerPortrait kind={kind} />
                  <span><strong>Build {isTrialTower(kind) ? trialNames[kind] : towerDetails[kind].name}</strong>
                    <span>{towerDetails[kind].price} silver</span></span>
                  <small>{kind === 'beacon' ? (linkedArcher === undefined ? 'No link' : linkLabel) : coverage?.[kind].reachesRoad
                    ? <><i class={`range-key ${kind}`} aria-hidden="true" />{kind === 'drum' ? 'Slow' : kind === 'volley' ? 'Volley' : 'Hit'} · {coverage[kind].zones[0]}</>
                    : 'Out of range'}</small>
                </button>
              ))}
            </section>
          ) : suggested !== null && activeSite === null ? <button type="button" class="choose-site"
            onClick={() => selectTile(suggested)} aria-label="Select marked site">Select marked site<small>Archer · {towerDetails.archer.price} silver</small></button> : lost ? <div class="defeat-rewind" id="retry-restores">
              {opening ? <>
                <strong>Retry restores wave start</strong>
                <small>{openingSummary}</small>
                <small>Tower upgrades kept</small>
              </> : <strong>Wave-start snapshot unavailable</strong>}
            </div> : (preparingLevel && mission && activeSite === null ? <div class="campaign-handoff">
              <strong>{mission.title} · L{mission.level}</strong>
              <small>Silver kept · +{startingSilver} grant</small>
              <small aria-hidden="true">Archer/Drum + upgrades</small>
              <span class="visually-hidden">Archer and Drum towers and their upgrades carry over.</span>
            </div> : nextChapter ? <div class="campaign-handoff">
              <strong>Next · {nextChapter.title} · Level {nextChapter.level}</strong>
              <small>Fresh board · {startingSilver} silver</small>
            </div> : towerSummary ?? <div class="command-location">{mission?.title ?? 'Shu frontier'}</div>)}
          {!finished && <button class="battle-speed" type="button" aria-label={`Play speed ${speed}×`}
            onClick={() => setSpeed(value => speedOptions[(speedOptions.indexOf(value) + 1) % speedOptions.length])}>
            {speed}×</button>}
          {running || preparingLevel ? <button class="battle-primary" type="button" onClick={() => setPaused(value => !value)}>
            {paused ? 'Resume' : 'Pause'}</button>
            : setup ? <button class="battle-primary" type="button" aria-label="Start wave" onClick={() => setRound(startRound)}>Start</button>
            : round.phase === 'won' && upcoming && upcoming.battleId !== mission?.battleId ? <button class="battle-primary" type="button" onClick={() => openMission(upcoming)}>Next battle</button>
            : round.phase === 'lost' ? <button class="battle-primary" type="button" aria-describedby="retry-restores" disabled={!opening} onClick={retryWave}>Retry wave</button>
            : <button class="battle-primary" type="button" onClick={back}>Main menu</button>}
        </div>
      </footer>
    </main>
  )
}

function MapPreview() {
  const offline = useOfflineReadiness()
  const [round, setRound] = useState(() => createRound(20, hanzhongPreview))
  const [selected, select] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)
  const setup = round.phase === 'setup'
  const running = round.phase === 'running'
  const occupied = round.towers.find(tower => tower.site === selected)
  const open = selected !== null && canSpend(round) && !occupied
  useEffect(() => {
    if (!running || paused) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setRound(current => tickRound(current, 1))
    }, 50)
    return () => window.clearInterval(timer)
  }, [running, paused])

  return <main class="battle-screen map-preview">
    <header class="battle-header">
      <a class="edge-control" href="?" aria-label="Return to main game">Game</a>
      <div class="hud">
        <h1>{hanzhongPreview.title}</h1>
        <div class="resources">
          <strong>{round.silver} silver</strong><span>{round.lives} lives</span><span>Wave {round.waveNumber}/{round.totalWaves}</span>
        </div>
      </div>
      <button class="edge-control" type="button" onClick={() => {
        setRound(createRound(20, hanzhongPreview))
        select(null)
        setPaused(false)
      }}>Reset</button>
    </header>
    <div class="board-view">
      <Battlefield round={round} selected={selected} suggested={null} onSelect={site => select(site === selected ? null : site)} wireframe />
    </div>
    <footer class="command-bar">
      <div class="command-status">
        <div class="battle-readout" role="status">{round.phase === 'lost' ? hanzhongPreview.defeat
          : round.phase === 'won' ? hanzhongPreview.victory
          : running ? paused ? 'Paused' : `${enemiesRemaining(round)} attackers remain`
          : occupied ? `${siteName(occupied.site)} · ${towerDetails[occupied.kind].name}`
          : selected !== null ? `${siteName(selected)} · Choose a tower` : 'Tap a site. Compare upper-bend coverage with slowing near the gate.'}</div>
        {setup && occupied && <button class="refund" type="button"
          onClick={() => setRound(current => removeTower(current, occupied.site))}>Refund {towerRefund(occupied)}</button>}
      </div>
      <div class="command-row">
        {open ? <section class="actions" aria-label="Tower actions">
          {buildChoices(round).map(kind => {
            const { price, name } = towerDetails[kind]
            const coverage = roadCoverage(roundRoutes(round), selected, kind)
            const distance = coverage.roadTiles < 0.1 ? '<0.1' : Number(coverage.roadTiles.toFixed(1))
            return <button key={kind} class="purchase-card" type="button" disabled={round.silver < price}
              onClick={() => setRound(current => buildTower(current, selected, kind))}>
              <strong>Build {name}</strong><span>{price} silver</span>
              <small>{coverage.reachesRoad ? `${distance} road tiles` : 'Out of range'}</small>
            </button>
          })}
        </section> : <div class="map-preview-note">Map prototype · {offline.status}</div>}
        {setup ? <button class="battle-primary" type="button" onClick={() => setRound(startRound)}>Start wave</button>
          : running ? <button class="battle-primary" type="button" onClick={() => setPaused(value => !value)}>{paused ? 'Resume' : 'Pause'}</button>
          : round.phase === 'lost' ? <button class="battle-primary" type="button" onClick={() => {
            setRound(retryRound)
            select(null)
          }}>Retry wave</button> : null}
      </div>
    </footer>
  </main>
}

const preview = new URLSearchParams(location.search).get('map-preview') === 'hanzhong'
render(preview ? <MapPreview /> : <App />, document.getElementById('app')!)
