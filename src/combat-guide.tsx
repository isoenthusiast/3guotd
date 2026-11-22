import { useEffect, useRef, useState } from 'preact/hooks'
import { attackers, attackerName, enemyMaxHealth, roundFormation } from './game/round'
import type { AttackerKind, Round } from './game/round'
import { drawAttacker } from './attacker-art'
import { drawTower } from './game-art'
import { loadBattlefieldArt } from './battlefield-art-assets'
import { currentVisualComfort, toggleVisualComfort } from './visual-comfort'

function Illustration({ kind }: { kind: AttackerKind | 'pairing' }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    let mounted = true
    const paint = () => {
      if (!mounted) return
      const ctx = canvas.current?.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      if (kind !== 'pairing') {
        ctx.save(); ctx.translate(38, 38)
        drawAttacker(ctx, kind, 0, { reducedMotion: true }); ctx.restore()
        return
      }
      ctx.fillStyle = '#566147'; ctx.fillRect(0, 0, 280, 145)
      ctx.lineWidth = 28; ctx.strokeStyle = '#d6bd85'
      ctx.beginPath(); ctx.moveTo(4, 43); ctx.lineTo(276, 43); ctx.stroke()
      for (const [x, radius, dash] of [[95, 66, [5, 5]], [178, 56, []]] as const) {
        ctx.setLineDash([...dash]); ctx.strokeStyle = '#f4e6bf'; ctx.lineWidth = 2
        ctx.beginPath(); ctx.arc(x, 86, radius, 0, Math.PI * 2); ctx.stroke()
      }
      ctx.setLineDash([])
      drawTower(ctx, 95, 87, 'drum'); drawTower(ctx, 178, 87, 'archer')
      ctx.save(); ctx.translate(138, 43); drawAttacker(ctx, 'runner', 0, { reducedMotion: true }); ctx.restore()
      ctx.strokeStyle = '#b7f1e9'; ctx.lineWidth = 3
      ctx.beginPath(); ctx.ellipse(138, 60, 21, 8, 0, 0, Math.PI * 2); ctx.stroke()
      ctx.font = 'bold 12px system-ui'; ctx.textAlign = 'center'; ctx.fillStyle = '#fff0cc'
      ctx.fillText('DRUM · slows', 70, 135); ctx.fillText('ARCHER · hits', 212, 135)
    }
    paint()
    void loadBattlefieldArt().then(paint).catch(console.error)
    return () => { mounted = false }
  }, [kind])
  return <canvas ref={canvas} width={kind === 'pairing' ? 280 : 76}
    height={kind === 'pairing' ? 145 : 68} class={kind === 'pairing' ? 'pairing-example' : 'enemy-example'}
    role="img" aria-label={kind === 'pairing'
      ? 'A Drum and Archer cover the same road. A slowed runner stays in Archer range longer.'
      : `${attackerName(kind)}: the same silhouette used in battle`} />
}

const cues: Record<AttackerKind, string> = {
  infantry: 'Round shield and spear. Archer hits wear it down.',
  veteran: 'Crest and broad shoulder armour. More HP than infantry.',
  runner: 'Narrow body and long stride. Slow it where an Archer can shoot.',
  veteranRunner: 'Runner stride with crest and shoulder armour. Fast and tougher.',
  bowman: 'Raised bow, no round shield. Watch the bow silhouette.',
  cavalry: 'Horse and reaching gallop. Cover a long stretch with Archer and Drum.',
  commander: 'Broad armour and pennant. WAIT means earlier soldiers still live; GO means the escort cleared.',
}

export function EnemyGuide({ round }: { round: Round }) {
  const formation = roundFormation(round)
  const story = round.continuedStory && round.mission ? round.mission.level - 1 : 0
  return <>
    <p>Wave {round.waveNumber} · {formation.name}. HP shows base → this wave.
      {formation.healthBonus ? ` Wave adds ${formation.healthBonus} HP before story scaling.` : ' No wave HP bonus.'}
      {story > 0 ? ` Continued story: HP ×${(1 + story * .12).toFixed(2)}, speed ×${(1 + story * .08).toFixed(2)}.` : ' No continued-story scaling.'}
      {' '}HP rounds up. Tiles/s is this wave’s speed before slowing. Silver stays the base kill reward; the Drum slows speed, not HP.</p>
    <table class="illustrated-enemies"><thead><tr><th>Attacker</th><th>HP</th><th>Tiles/s</th><th>Silver</th></tr></thead>
      <tbody>{(Object.keys(attackers) as AttackerKind[]).map(kind => <tr key={kind}>
        <th scope="row"><Illustration kind={kind} /><span>{attackerName(kind)}</span></th>
        <td>{attackers[kind].health} → {enemyMaxHealth(round, kind)}</td>
        <td>{(attackers[kind].speed * (1 + story * .08)).toFixed(2)}</td>
        <td>{attackers[kind].reward}</td>
      </tr>)}</tbody></table>
    <dl class="enemy-cues">{(Object.keys(attackers) as AttackerKind[]).map(kind =>
      <div key={kind}><dt>{attackerName(kind)}</dt><dd>{cues[kind]}</dd></div>)}</dl>
    <p>The commander advances after all earlier soldiers fall or escape. A breach costs one gate life.
      The breach cue names its entrance. Older saved cues without a lane say “lane unrecorded”.</p>
  </>
}

export function PairingGuide() {
  return <figure class="pairing-guide"><Illustration kind="pairing" />
    <figcaption>Place both beside the same stretch of road. The dashed Drum ring slows the runner;
      the Archer keeps firing while it remains inside the solid ring. The Drum deals no damage.
      Diagram only; rings are schematic.</figcaption></figure>
}

export function VisualComfortControls() {
  const [value, setValue] = useState(currentVisualComfort)
  function toggle(key: 'reducedEffects' | 'reducedMotion') {
    toggleVisualComfort(key); setValue(currentVisualComfort())
  }
  return <fieldset class="visual-comfort"><legend>Visual comfort</legend>
    <button type="button" aria-label="Reduced effects" aria-pressed={value.reducedEffects} onClick={() => toggle('reducedEffects')}>Reduced effects</button>
    <button type="button" aria-label="Reduced motion" aria-pressed={value.reducedMotion} onClick={() => toggle('reducedMotion')}>Reduced motion</button>
    <p>Effects reduces overlapping trails, impact rings and Drum links. Motion holds stride poses and uses static cues.
      Attackers still move at normal speed; damage, rewards and preparation timing stay the same.
      Device reduced motion is always honored. Choices stay on this device when storage is available.</p>
    <p>Shapes: solid = Archer range; dashed = Drum range; X = closing site;
      double underline = slowed attacker. WAIT / GO marks the commander’s escort state.</p>
  </fieldset>
}
