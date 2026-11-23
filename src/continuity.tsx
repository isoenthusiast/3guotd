import { useEffect, useRef, useState } from 'preact/hooks'
import { battles, campaign, isMissionUnlocked, missionPrerequisite } from './game/campaign'
import { loadCheckpoint, loadGame, saveCheckpoint, saveGame } from './game/save-game'
import { towerDetails, trialTowerFor } from './game/round'
import type { Mission, PlaySpeed, Round } from './game/round'

export function recommendedMission(clears: readonly string[]): Mission {
  return campaign.find(level => !clears.includes(level.id) && isMissionUnlocked(level, clears)) ?? campaign[campaign.length - 1]
}

export function runLabel(round: Round): string {
  return `${round.mission ? `${round.mission.title} · Level ${round.mission.level}` : 'Long battle'} · Wave ${round.waveNumber}/${round.totalWaves} · ${round.phase === 'setup' ? 'preparing' : round.phase}`
}

export function campaignDestination(clears: readonly string[]): string {
  if (campaign.every(level => clears.includes(level.id))) return 'Campaign complete · replay any cleared level'
  const next = recommendedMission(clears)
  return `Next battle: ${next.title} · Level ${next.level}`
}

export function useRecovery(round: Round, speed: PlaySpeed, hasRun: boolean) {
  const [manual, setManual] = useState(loadGame)
  const [checkpoint, setCheckpoint] = useState(loadCheckpoint)
  const [checkpointFailed, setCheckpointFailed] = useState(false)
  const latest = useRef({ round, speed, hasRun })
  const lastObserved = useRef('')
  const lastStored = useRef<string | null>(null)
  const checkpointKey = '3guotd.checkpoint.v1'
  latest.current = { round, speed, hasRun }
  function persist() {
    const active = latest.current
    if (!active.hasRun) return
    const { mission, ...state } = active.round
    const fingerprint = JSON.stringify({ state, missionId: mission?.id ?? null, speed: active.speed })
    if (fingerprint === lastObserved.current) return
    lastObserved.current = fingerprint
    // A reclaimed/hidden tab must not roll back a newer checkpoint from another tab.
    try {
      if (document.hidden && lastStored.current !== null && localStorage.getItem(checkpointKey) !== lastStored.current) return
    } catch { /* The validated writer reports unavailable storage below. */ }
    const saved = saveCheckpoint(active.round, active.speed)
    setCheckpointFailed(!saved)
    if (saved) {
      try { lastStored.current = localStorage.getItem(checkpointKey) } catch { /* Already saved. */ }
      setCheckpoint({ round: active.round, speed: active.speed })
    }
  }
  useEffect(() => {
    const timer = window.setInterval(() => { if (!document.hidden) persist() }, 1000)
    const visibility = () => { if (document.hidden) persist() }
    window.addEventListener('pagehide', persist)
    document.addEventListener('visibilitychange', visibility)
    return () => {
      window.clearInterval(timer)
      window.removeEventListener('pagehide', persist)
      document.removeEventListener('visibilitychange', visibility)
    }
  }, [])
  useEffect(() => { persist() }, [hasRun, speed, round.phase, round.waveNumber, round.longSupport,
    round.phase === 'setup' ? round.towers : null])
  return {
    manual, checkpoint, checkpointFailed,
    saveManual() {
      const saved = saveGame(round, speed)
      if (saved) setManual({ round, speed })
      return saved
    },
    readManual() { const saved = loadGame(); setManual(saved); return saved },
    readCheckpoint() { const saved = loadCheckpoint(); setCheckpoint(saved); return saved },
  }
}

export function CampaignProgress({ clears, selected, onSelect }: {
  clears: readonly string[]; selected: Mission; onSelect: (mission: Mission) => void
}) {
  const lockedTrial = campaign.find(level => level.battleId === selected.battleId
    && trialTowerFor(level) && !isMissionUnlocked(level, clears))
  const trial = trialTowerFor(lockedTrial ?? null)
  const prerequisite = lockedTrial && missionPrerequisite(lockedTrial)
  return <section class="campaign-progress" aria-label="Campaign progress">
    <p>{campaign.filter(level => clears.includes(level.id)).length}/30 levels cleared · {campaignDestination(clears)}</p>
    {lockedTrial && trial && prerequisite && <p class="locked-trial">{towerDetails[trial].name} trial · Level {lockedTrial.level}
      <small>Locked · clear {prerequisite.title}, level {prerequisite.level}</small>
    </p>}
    <ol>{battles.map(battle => {
      const levels = campaign.filter(level => level.battleId === battle.id)
      const available = levels.find(level => !clears.includes(level.id) && isMissionUnlocked(level, clears))
        ?? levels.find(level => isMissionUnlocked(level, clears))
      const prerequisite = missionPrerequisite(levels[0])
      const count = levels.filter(level => clears.includes(level.id)).length
      return <li key={battle.id} aria-current={selected.battleId === battle.id ? 'step' : undefined}>
        <button type="button" disabled={!available} onClick={() => available && onSelect(available)}>{battle.title} · {count}/5 cleared</button>
        {!available && prerequisite && <small>Locked · clear {prerequisite.title}, level {prerequisite.level}</small>}
      </li>
    })}</ol>
  </section>
}

export function CampaignRecap({ mission }: { mission: Mission }) {
  const side = mission.battleId === 'red-cliffs' ? 'Liu Bei and Sun Quan’s alliance'
    : mission.battleId === 'village-watch' || mission.battleId === 'changban' ? 'Liu Bei’s company' : 'Shu'
  return <details class="story-scene"><summary>Campaign recap</summary>
    <p>Your side: {side}. {mission.setting} · {mission.leadIn ?? mission.briefing}</p>
    <p>Your command: {mission.objective}. {mission.level > 1 ? `This is level ${mission.level} of five in this chapter.` : 'A new chapter begins here.'}</p>
  </details>
}
