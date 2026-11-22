# Evidence — the measured basis for the design ideas

*Companion to [`README.md`](README.md), which holds the design ideas themselves. This file
holds what they were measured against, where each claim lives in the code, and how to
reproduce every number.*

**Measured against:** commit `64de80d`, the tip of `main` when this was last checked. The
interface measurements (canvas upscale, tile size, cells under 44 px) were re-run against that
tip after a peer's navigation work landed; the game-logic measurements derive from
`src/game/round.ts` and `src/game/campaign.ts`, which that work did not touch.
**Method:** headless Chromium against the shipped `dist/` build at six phone viewports, driven
through Campaign → Enter battle → site selection; cross-checked against the live audit ledger
(`Audit/gameflow.db`) and against 202 primary-source captures in [`sources/`](sources/).

---

## What the player sees today

| Viewport | Build tile | Canvas backing | Upscale | Buildable cells under 44 px |
|---|---|---|---|---|
| iPhone SE 2 (375×667, dpr 2) | 39.5 px | 576×832 | **1.23×** | 97 of 97 |
| iPhone 13 mini (375×812, dpr 3) | 40.8 px | 576×832 | **1.91×** | 97 of 97 |
| iPhone 15 (393×852, dpr 3) | 42.8 px | 576×832 | **2.01×** | 97 of 97 |
| Pixel 7 (412×915, dpr 2.625) | 44.9 px | 576×832 | **1.84×** | 0 of 97 |
| Galaxy S8 (360×740, dpr 3) | 39.1 px | 576×832 | **1.83×** | 97 of 97 |
| Galaxy S20 (360×800, dpr 3) | 39.1 px | 576×832 | **1.83×** | 97 of 97 |

Upscale factor is measured, not derived: `(canvas CSS width × devicePixelRatio) ÷ backing-store
width`. Every tested device upscales; the worst is the iPhone 15 at **2.01×**.

The **44 px** threshold in the last column is Apple's **44 × 44 pt** minimum (`ui-15`), applied
as the nominal pixel bar. NN/g's article (`ui-01`) supplies a *physical* floor — 1 cm × 1 cm —
and explicitly says pixel values do not communicate it; it states no 44-pixel minimum of its own,
so the two rules are never interchangeable.

**The board is 117 cells: 9 columns × 13 rows.** Of those, **97 are buildable** (40 of which are
`.useful-site` — buildable *and* adjacent enough for an Archer to cover the road — and 57 are
`.empty-cell`, buildable but useless for the current tower) and 20 are non-buildable spans.

**All 97 buildable cells are the same size.** The grid is uniform, so on every device except the
Pixel 7 *every* buildable tile is under 44 px — 97 of 97, not a handful. An earlier draft of this
research reported "40 of 97"; that number was an artifact of a truncated button list, not a
count, and it understated the problem by more than half. The Pixel 7 clears 44 px only because
its viewport is 52 px wider than a Galaxy's, which is a coincidence of screen width, not a design
decision.

`references/tower-defense-ux/README.md` states *"Keep the 44 px build tiles"*. **That claim does
not hold** — measured reality is 39.1–44.9 px depending on viewport width, and only the Pixel 7
clears 44 px. It is a documentation defect, and 44 px is the number the audit has been reasoning
from.

---

## Physical size of the build tile

| Device | Build tile | vs 1 cm minimum | css px needed for 1 cm |
|---|---|---|---|
| iPhone SE 2 | 0.62 cm | FAIL — short 0.38 cm | 64 |
| iPhone 13 mini | 0.63 cm | FAIL — short 0.37 cm | 65 |
| iPhone 15 | 0.71 cm | FAIL — short 0.29 cm | 60 |
| Pixel 7 | 0.70 cm | FAIL — short 0.30 cm | 64 |
| Galaxy S8 | 0.70 cm | FAIL — short 0.30 cm | 56 |
| Galaxy S20 | 0.70 cm | FAIL — short 0.30 cm | 56 |

Every device tested fails. The method is physical, not nominal: screen width in device pixels
divided by the device's PPI gives the physical inches across the viewport; the measured CSS-px
tile is then converted through that density.

**The tile cannot simply be made bigger — and the reason is instructive.** The game's internal
tile is **64 px** (`columns=9 × tile=64` gives the 576 px canvas). At the ~155 css-px-per-inch
density of a modern phone, **64 css px is very close to exactly 1 cm**. So 3guotd was authored at
the right physical scale; the phone layout then scales the whole board *down* to fit a 360–412
css px viewport, which is where the touch target is lost. The fix is a **layout** question —
fewer columns, a scrollable or pannable board, or a tap-to-zoom board — not a question of
enlarging the tile.

---

## The build mound, physically

`.useful-site::before` draws the mound at `width: 18%; height: 8%` of the tile in `#d0ae74`. On
a 39.1–44.9 px tile that is **7.0–8.1 × 3.1–3.6 px**, which at phone density is **1.11–1.28 mm
wide and 0.49–0.57 mm tall** — roughly **11–13% of the 1 cm minimum** in width. The measured
colour `rgb(208, 174, 116)` is a low-contrast tan against grass.

Two consequences:

- **It is not a target.** It was never going to be a hit area — the whole tile is — but it is not
  a legible marker either. At 1.2 mm it is smaller than a printed full stop.
- **It is on only 40 of the 97 buildable cells.** `.empty-cell::before { content: none; }`, so
  57 buildable tiles carry **no mound at all**. A player scanning for a place to build sees 40
  faint specks and 57 blank tiles, and has no way to know the other 57 are also legal.

---

## Enemy Types: the guide against the battlefield

The Field Guide's **Enemy Types** screen is the one place a player can look up what an enemy is.
It renders `attackers[kind].health` and `attackers[kind].speed` — the **base** numbers, before any
wave or story bonus — and says so: "Base stats before wave and story bonuses."

But the numbers that reach the board are escalated: health is `ceil((base + healthBonus) ×
(1 + storySteps × 0.12))` (`src/game/round.ts` -> `storySteps(round) * 0.12`) and speed is `base × (1 + storySteps × 0.08)`
(`src/game/round.ts` -> `storySteps(round) * 0.08`), with `storySteps` = `mission.level - 1` on the continued-story path
(`src/game/round.ts` -> `function storySteps(round: Round): number`). On a continued story at level 5 the table and the battlefield
disagree for **every enemy type**:

| Enemy | Table HP | Actual HP | Table speed | Actual speed |
|---|---|---|---|---|
| Infantry | 4 | 6 | 1.60 | 2.11 |
| Runner | 3 | 5 | 2.40 | 3.17 |
| Veteran | 6 | 9 | 1.60 | 2.11 |
| Bowman | 4 | 6 | 1.32 | 1.74 |
| Cavalry | 4 | 6 | 2.70 | 3.56 |
| Commander | 10 | 15 | 1.18 | 1.56 |
| Veteran runner | 4 | 6 | 2.40 | 3.17 |

At level 3 the health gap is already 25–33% and the speed gap 16%. At level 5 a Commander reads
as 10 HP in the guide and arrives with 15 — a 50% lie, and the health number is exactly what a
player sizes a tower against.

---

## The Drum's cyan pulse

`measure-drum-pulse.mjs` places a Drum, starts a wave, and samples the rendered canvas every
half second for cyan pixels. On iPhone SE 2 and Pixel 7 alike, cyan is present in **24 of 40
samples** and then drops to zero as the last slowed enemy dies — roughly **12 seconds** of
continuous expanding ring per wave.

The cycle is not a guess. The source sets `pulse = (round.waveAge * 1.8) % 1`
(`src/game-art.ts` -> `round.waveAge * 1.8`), so one expansion every **1/1.8 s = 0.56 s**, and
12 s is about **22 expansions**. Because the phase comes from `waveAge`, the pulse is
wall-clock driven and speed-independent — the same at 1× and 3×.

`prefers-reduced-motion` and `matchMedia` appear nowhere in `src/`, so the pulse plays the same
way for a player who has asked the operating system for less motion. The game's Pause button
does satisfy WCAG 2.2.2's pause mechanism — pausing freezes the tick loop, and the pulse with
it — so what is missing is the OS-level preference, not the pause.

---

## Waves: what actually changes

`waveFormation()` (`src/game/round.ts` -> `formations[(number - 1) % formations.length]`) picks the wave's
enemy list by index into `formations`, and `formations` holds exactly **three** entries:
Mixed patrol, Runner rush, Veteran column. Measured over a 40-wave run, the composition repeats
on a cycle of three, with every fifth wave swapped to a uniform cavalry column (waves 5, 10, …,
40) (`src/game/round.ts` -> `sequence: number % 5 === 0`). What changes across the run is the **health bonus** (capped at
+24), the spawn **interval** (1.25 s at wave 4, down to 0.69 s by wave 40, floored at 0.45 s),
and the wave **name** — "Runner rush · +8 health", which is wave 23.

The mission path cycles too: `threats[chapter][enemy % threats[chapter].length]`
(`src/game/campaign.ts` -> `threats[chapter][enemy % threats[chapter].length]`) rotates a four-enemy list per chapter.

So across a 40-wave session the player meets **three enemy patterns, repeated**, getting
numerically harder. The health number is in the wave name, but the *pattern* is never named as a
pattern — and a player has no way to learn that wave 34 is the same shape as wave 4.

---

## Where the claims live in the code

| Claim | File | Anchor |
|---|---|---|
| Canvas backing store fixed at `columns * tile` x `rows * tile` | `src/main.tsx` | `width={columns * tile}` |
| `tile = 64` | `src/game-art.ts` | `export const tile = 64` |
| `columns = 9` | `src/game/board.ts` | `export const columns = 9` |
| `rows = 13` | `src/game/board.ts` | `export const rows = 13` |
| Purchase tray is contextual (`activeSite !== null && spendingOpen`) | `src/main.tsx` | `showActions` |
| First-purchase status copy "Tap Build Archer for your first defender." | `src/main.tsx` | `Tap Build Archer for your first defender.` |
| Current wave's formation name shown in the status line | `src/main.tsx` | `formation.name` |
| Wave-start cue names only the first enemy, on continued story | `src/main.tsx` | `First: ${attackerName(first)}` |
| `prepareNextLevel` invoked only on a won round with a matching `battleId` | `src/main.tsx` | `prepareNextLevel` |
| "Drum slowing N" readout | `src/main.tsx` | `Drum slowing` |
| Shortfall text "Need {n} more silver." | `src/main.tsx` | `Need {shortfall} more silver.` |
| Enemy Types table renders base `attackers[kind].health` | `src/main.tsx` | `<td>{attackers[kind].health}</td>` |
| Enemy Types table renders base `attackers[kind].speed` | `src/main.tsx` | `<td>{attackers[kind].speed}</td>` |
| Caption "Base stats before wave and story bonuses." | `src/main.tsx` | `Base stats before wave and story bonuses` |
| Campaign screen names only the first wave ("Next threat - {name}") | `src/main.tsx` | `Next threat` |
| Towers guide: "Blue lines mark slowed enemies. The Drum deals no damage." | `src/main.tsx` | `Blue lines mark slowed enemies` |
| Pause button (`setPaused(value => !value)`) | `src/main.tsx` | `setPaused(value => !value)` |
| `.purchase-card:disabled { opacity: .76 }` | `src/style.css` | `opacity: .76` |
| Build mound selector `.useful-site::before` | `src/style.css` | `.useful-site::before` |
| Build mound width `18%` | `src/style.css` | `width: 18%` |
| Build mound height `8%` | `src/style.css` | `height: 8%` |
| Mound suppressed on `.empty-cell` (`content: none`) | `src/style.css` | `content: none` |
| Page grid `grid-template-rows: 44px minmax(0, 1fr) 98px` | `src/style.css` | `44px minmax(0, 1fr) 98px` |
| Command bar `grid-template-rows: 44px 54px` | `src/style.css` | `44px 54px` |
| `levelPrepRemainingMs` written only by `prepareNextLevel()` | `src/game/round.ts` | `levelPrepRemainingMs` |
| `storySteps` is `mission.level - 1` on the continued-story path | `src/game/round.ts` | `round.mission.level - 1` |
| `storySteps` function definition | `src/game/round.ts` | `function storySteps(round: Round): number` |
| In-play health `ceil((base + healthBonus) x (1 + storySteps x 0.12))` | `src/game/round.ts` | `storySteps(round) * 0.12` |
| Wave formation picker `waveFormation(number)` | `src/game/round.ts` | `export function waveFormation(number: number): Formation` |
| Wave composition cycles `formations[(number - 1) % formations.length]` | `src/game/round.ts` | `formations[(number - 1) % formations.length]` |
| `formations` list (3 entries) | `src/game/round.ts` | `const formations = [` |
| Every 5th wave becomes a uniform cavalry column | `src/game/round.ts` | `sequence: number % 5 === 0` |
| Cavalry column fills all 12 slots | `src/game/round.ts` | `.fill('cavalry')` |
| Wave health bonus capped at +24 | `src/game/round.ts` | `Math.min(24, stage * 2)` |
| Spawn interval ramp | `src/game/round.ts` | `interval: Math.max(0.45, 1.25 - stage * 0.08)` |
| In-play speed `base x (1 + storySteps x 0.08)` | `src/game/round.ts` | `storySteps(round) * 0.08` |
| Mission waves rotate `threats[chapter][enemy % threats[chapter].length]` (4 per chapter) | `src/game/campaign.ts` | `threats[chapter][enemy % threats[chapter].length]` |
| Drum cyan pulse colour | `src/game-art.ts` | `#b7f1e9` |
| Drum pulse phase driven by `round.waveAge * 1.8` | `src/game-art.ts` | `round.waveAge * 1.8` |
| Drum pulse draw path | `src/game-art.ts` | `tower.kind === 'drum'` |

Every anchor is verified to exist in its file by `tools/validate/validate-code-refs.py`. Anchors are used rather than line numbers because the shared checkout moves: a peer's navigation refactor shifted `src/main.tsx` by three lines while this pack was being written. Line numbers are reported by the validator, not asserted by the document.

---

## Reproducing the measurements

The measurement and validation scripts ship with this pack, in [`tools/measure/`](tools/measure/)
and [`tools/validate/`](tools/validate/). They are read-only against the project and write only
into `out/` (gitignored) unless `OUT_DIR` says otherwise.

- `measure-ui-live.mjs` — drives the shipped `dist/` build through Campaign → Enter battle →
  site selection; reports live rendered geometry.
- `measure-cells.mjs` — enumerates the cell population (117 grid items → 97 buildable: 40
  `.useful-site` + 57 `.empty-cell`), their sizes, and whether the mound renders on each class.
- `measure-mound.mjs` — converts the mound's used CSS-px box into physical millimetres.
- `measure-mound-physical.py` — the same conversion, arithmetically, per device.
- `measure-under44.mjs` — counts, per device, how many buildable cells are under 44 × 44 px.
- `measure-canvas-upscale.mjs` — required device pixels vs the fixed backing store, per viewport.
- `measure-header-contrast.mjs` — rendered font sizes and computed WCAG contrast.
- `verify-prep-clock.mjs` — drives the first mission and asserts whether `.prep-clock` ever
  renders (it does not, on level 1).
- `verify-frame-one.mjs`, `capture-current-ui.mjs` — screenshots of the current build at iPhone SE
  and Pixel 7.
- `measure-physical-size.py` — converts the measured CSS-px tile into physical cm against device
  PPI, and compares to the 1 cm minimum.
- `measure-cue-duration.mjs`, `waveage.mjs` — cue wall-clock timing and `waveAge` speed
  independence.
- `measure-enemy-table.mjs` — compares the Enemy Types guide's values against the escalated
  values the simulation actually uses, per level; and emulates a 40-wave run to show the
  composition cycle and the health/interval ramp.
- `measure-drum-pulse.mjs` — samples the rendered canvas for the Drum's cyan pulse and reports
  how long it stays on screen per wave.

Validation:

- `validate-citations.py` — checks every source reference against the capture pack.
- `validate-quotes.py` — checks every verbatim quotation in the deliverable against its cited
  capture, and rejects a quotation that is not verbatim.
- `validate-code-refs.py` — checks every code anchor against the current source, in the
  deliverables and in the project backlog.
- `validate-links.py` — checks every relative Markdown link resolves.
- `validate-sources-readme.py` — checks the stream-count table in `sources/README.md` against the
  files on disk, and that every capture carries its `URL`/`TITLE`/`RETRIEVED`/`METHOD` header.
- `validate-nng-attribution.py` — checks that Apple is cited for the 44 × 44 pt nominal bar, that
  NN/g is cited for the physical 1 cm floor, and that the 1 cm floor is attributed to the
  target-size study rather than to fingertip dimensions.

The capture tooling that produced the 202-file pack ships with it, in [`tools/`](tools/) — see
[`tools/README.md`](tools/README.md). It writes only into `sources/`; it never touches the game's
source, the build, or the audit ledger.

Browser: the harnesses launch Chromium themselves and honour `CHROME_PATH`. On this box that is
`/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome` (Playwright's bundled
revision 1223 is not installed).
