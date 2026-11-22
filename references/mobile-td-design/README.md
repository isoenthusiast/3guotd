# Mobile TD interface research — findings for 3Guo Tower Defense

**Question this answers:** what should change in the *interface* of a mobile tower-defense game
so a first-time player on a phone can (a) find the build sites, (b) understand what a purchase
buys, (c) see what their towers are doing, and (d) feel in control of the wave clock?

**Scope:** the player-facing interface only — HUD, build affordance, purchase tray, feedback
cues, prep-window communication. Rules, balance and economy are out of scope except where they
are *visible in the interface*.

**Method:** 202 primary-source captures in `sources/` (Apple HIG, Material 3, WCAG 2.2, NN/g,
Game Accessibility Guidelines, Game Developer, GDC, Unity, Android web-app quality guidance, and
peer-reviewed game-feel and tutorial papers), cross-checked against 3guotd's own live audit ledger
(`Audit/gameflow.db`) and against **measurements taken from the running build** in headless
Chromium at six phone viewports.

**Measured against:** commit `d40a108` (2026-11-22 13:17), the current tip of `main`.

**Status:** research findings. Nothing here has been implemented. The four live audit findings
are *acceptance gaps* — the code fix for each has already landed; what remains is the uncoached
human observation their preventive methods call for. This document therefore reports the
**residual** interface problem: what is still wrong on screen after those fixes.

---

## The headline

The 2026-11-22 HUD work (`31d391b`, `d40a108`) closed the *obvious* parts of the four open
findings. The gold `+` marker is now accompanied by a highlighted first-purchase card; the
purchase tray is contextual rather than permanently resident; the cards carry an explicit action
verb and price; the Drum has a cyan activation cue, a tether, and a text readout; and a prep
countdown ring exists. A player who picks up the phone now gets a coherent first frame.

**That work was measured against the wrong baseline, and one root defect survives all of it.**
3guotd draws its battlefield into a canvas backing store fixed at **576 × 832**, whatever the
device. On a real phone that canvas is upscaled **1.23×–2.01×**, so every board cue — build
mounds, enemy silhouettes, the Drum's slow pulse, the "Entry" and "Village gate" labels — is
rendered soft and then stretched. The DOM around it (header, cards, status) is crisp. That
mismatch reads as *the map is background art*, when the map is the game.

Underneath that, the board is **too small to hit**. The build tile is **0.62–0.71 cm
physically**, against the 1 cm physical floor NN/g reports from Parhi, Karlson & Bederson's
target-size study. And the thing that says "you can build here" — the beige mound — measures
**1.2 × 0.5 mm**. It is not a target; it is a texture. Only 40 of the 97 buildable cells carry
one at all.

So the residual interface problem is three things, in this order:

1. **The board renders at desktop resolution.** Fixes the legibility of every cue at once.
2. **The build tile is below the physical touch minimum.** A layout problem, not a scale problem.
3. **The build mound is not a cue.** 1.2 mm wide, on 57 of 97 buildable cells absent entirely.

---

## What the player actually sees today

Measured in headless Chromium against the current `dist/` build. Tiles are in CSS px.

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

**All 97 buildable cells are the same size.** The grid is uniform, so on every device except
the Pixel 7 *every* buildable tile is under 44 px — 97 of 97, not a handful. An earlier draft
of this document reported "40 of 97"; that number was an artifact of a truncated button list,
not a count, and it understated the problem by more than half. The Pixel 7 clears 44 px only
because its viewport is 52 px wider than a Galaxy's, which is a coincidence of screen width,
not a design decision.

`references/tower-defense-ux/README.md` states *"Keep the 44 px build tiles"*. **That claim does
not hold** — measured reality is 39.1–44.9 px depending on viewport width, and only the Pixel 7
clears 44 px. It is a documentation defect, and 44 px is the number the audit has been reasoning
from.

### Frame one, as a new player sees it

*(iPhone SE, wave 1, before any input)*

The frame is now good. The gold `+` marker is large and high-contrast; the status line reads
**"Tap the gold + on the map to place a tower."**; and the command row carries a
**"Select marked site"** button — a non-map route to the same action — beside **"Start wave"**.
**GF-020's recommended site exists and is visible.**

The purchase tray is *contextual*, so frame one shows **no purchase cards at all**: the row is
`Select marked site | Start wave`. Selecting the gold `+` swaps it for
`Build Archer | 30 silver | Damage` and `Build Drum | 30 silver | Slow`, and the status line
changes to **"Tap Build Archer for your first defender."** with the Archer card gold-highlighted
(`.first-buy`). That is the correct trade — the tray no longer competes with the board — but it
means a first-time player's *second* frame is where they first see what a purchase actually is.

What is still wrong on that frame:

- **The enemy route is legible, but its purpose is not stated.** "Entry" (top) and "Village
  gate" (bottom) are visible and the road is traceable. Nothing on screen says *the gate is
  what you are defending*. A player cannot tell whether they should be blocking Entry or
  protecting the gate.
- **The header carries five facts in a 44 px band.** "90 silver / 3 lives / Wave 1/3 / 0/3 watch
  shifts held" — the second line renders at 11.7 px and is centred under the first, so the eye
  reads it as a subtitle rather than as a fourth and fifth statistic. "0/3 watch shifts held" is
  the least legible phrase in the game and is not obviously about the player. Measured contrast
  is fine (9.16:1) — this is a **size and phrasing** problem, not a colour problem.
- **There is no threat preview.** The player sees the board before seeing the wave.

### In wave, as the player sees it

- **Enemy sprites blur together.** At a 39–43 px tile, the enemy roles are distinguished mainly
  by hue. This is the exact failure mode the Game Accessibility Guidelines name: *"Ensure no
  essential information is conveyed by a fixed colour alone."*
- **The range circle competes with the road.** Range rings and road art are similar values and
  similar weights, so the ring that says "this tower covers here" is confused with the road that
  says "enemies walk here."
- **The Drum's cue now exists but is faint.** GF-025's fix is real: the Drum pulses in cyan
  `#b7f1e9`, draws a dashed tether to each affected enemy, the slowed enemy carries a cyan ring,
  and the HUD prints **"Drum slowing 3"**. It works — but every one of those elements is a
  *colour* channel, and the cyan sits at low alpha (`.65` falling to 0) over a canvas that is
  itself being upscaled 2×. A player watching a slowed enemy still cannot reliably connect the
  enemy to the Drum that slowed it.

---

## The four live findings, with residual interface answers

All four are **acceptance-gap** severity in the ledger. In each case the code fix has landed and
the finding stays open only because its preventive method requires *uncoached human
observation*. This research cannot close them — it can say precisely what to watch for.

### GF-020 — "First placement is easy to miss"

**Already fixed in code.** The gold `+`, the "Select marked site" button, the
**"Tap Build Archer for your first defender."** status line on first purchase, and the gold
`first-buy` card border all landed in `31d391b`. The ledger's own learning — *"A visible
route-adjacent recommendation can turn first placement into a concrete first action"* — is now
implemented.

- **Player sees:** a gold `+`, a highlighted "Build Archer" card, and a sentence telling them to
  tap the card.
- **Residual:** the player still has no reason to care *yet*. Nothing names the thing being
  defended or the thing that is coming.
- **Interface change:** one plain sentence of intent above the board — *"Hold the village gate.
  Raiders come from Entry."* One line, not behind Help. The `+` stays.
- **Do not** add a modal tutorial overlay. NN/g's overlay-overload guidance is explicit that
  interrupting play to teach a recurring action is the wrong instrument; Filament's tutorial
  guidance makes the same point — teach by placing the cue in the world where the action
  happens. 3guotd already does this, and CHI 2012 (*Video Game Tutorials Are Not...*) found
  that tutorials produced **no significant improvement** for games whose mechanics can be
  discovery through experimentation — which is exactly this game.
- Ironhide's own account of the Kingdom Rush campaign opens the same way: *"The enemies in
  Southport are pitifully easy to deal with, as most setups can defeat them without issue"*
  (`econ-05`, `feedback-25`, `pacing-17`) — the first wave is deliberately trivial so the
  mechanic lands before the challenge.

### GF-023 — "Purchase cards can be hard to find on short phones"

**Already fixed in code.** The tray is **contextual** — `showActions` requires `activeSite !== null`,
so the cards appear only after a site is selected, and the cards carry an explicit **"Build
Archer"** verb, a **30 silver** price, and a role label. The ledger's learning — *"Effects are
easier to attribute when the cue names the source"* — is the same pattern applied to purchase.

- **Player sees:** the board. Tap a tile, and the cards appear for *that* tile.
- **Residual:** the cards sit in a fixed bottom band, so a player looking at the board has to
  know the cards are below it. And when the player cannot afford a tower, the card dims to
  `opacity: .76` while the shortfall text sits on the status line — *below the board*, where a
  player looking at the card is not looking.
- **Interface change:** put the shortfall **on the card** — "Need 12 more silver" directly under
  the price, price in the warning colour. Material 3's position is that *"Disabled states don't
  need to meet Material's contrast requirements"*, but that guidance applies to a *permanently*
  disabled control;
  3guotd's cards are disabled because the player is **short of silver**, a transient, recoverable
  state. The right pattern for that is "shown, with the shortfall and the way to fix it".
- Also keep the gold `+` route as an equivalent affordance, because GF-020's preventive method
  explicitly requires *"the marked site and equivalent button"* to be checked together.

### GF-025 — "The Drum's contribution is hard to trace"

**Mostly fixed in code.** The cyan pulse, the tether to each affected enemy, the cyan ring on the
slowed enemy, the **"Drum slowing N"** readout, and the Towers guide page (*"Blue lines mark
slowed enemies. The Drum deals no damage."*) have all landed.

- **Player sees:** a cyan ring on the enemy, a cyan tether back to the Drum, a cyan pulse at the
  Drum, and a text count.
- **Residual:** **every channel is colour.** Per WCAG 1.4.1 and the Game Accessibility
  Guidelines, an effect conveyed only by hue fails for colour-vision-deficient players — and
  the cyan is drawn at low alpha into a canvas that is being upscaled 2×, so on a real phone the
  whole cue is soft.
- **Interface change:**
  1. A **status badge on the enemy** — an icon, not only a colour, so it survives colour-vision
     deficiency and satisfies WCAG 1.4.1.
  2. A **distinct sound for the Drum hit** — the Game Accessibility Guidelines require distinct
     sounds for key events, and it is the cheapest of these because the game already has an
     audio path.
  3. Keep the tether, but make it **opaque and full-width** rather than low-alpha dashed.
- Attribution is a real design requirement, not a nicety: Game Developer, *Enemy attacks and
  telegraphing* — *"If the player needs to dodge, block, or otherwise avoid damage - the player
  must first know the damage is coming"* — and the same logic runs in reverse, where the player
  must know which of their own towers caused an effect they can see.

### GF-053 — "Uncoached discovery and use of the ten-second preparation window are unverified"

**Partially fixed in code, and the fix does not reach the case that matters.** The `.prep-clock`
ring exists: a centred transparent countdown with a filling arc and a large numeral, plus a
status line reading *"Level 2 · Wave 1 in 8s"*.

**But it never appears on the first level a player sees.** `levelPrepRemainingMs` is written in
exactly one place — `prepareNextLevel()` — which runs only when `round.phase === 'won'` and the
next mission shares the current `battleId`. That is the *continued story* path: level 2 and
beyond. Verified in the running build: on the first mission, at rest, and with the wave running,
`.prep-clock` is **absent** in all three states.

So the countdown is real, but it is the countdown for the *second* level. A first-time player
never sees one, and GF-053's preventive method asks to *"observe an uncoached player's first
prep-window decision"* — there is no first prep window to observe.

- **Player sees today:** on level 1, a "Start wave" button and no clock at all; on level 2+,
  a prominent countdown that auto-starts the wave.
- **Interface change:** the prep window needs a **visible, non-blocking countdown on the first
  level too** — the same `.prep-clock` component, shown when the player is in setup with no
  towers placed. The header's second line currently holds "0/3 watch shifts held" at 11.7 px;
  that band is the natural home for the countdown, and it is the band currently carrying the
  least legible phrase. Repurposing it removes a clutter item and creates the one thing the
  player needs.
- 0.1 s / 1 s / 10 s from NN/g's response-time limits apply directly: the tap on a build site
  must feel instantaneous (< 0.1 s), and a 10 s wait is exactly at the attention boundary where
  a progress-style indicator becomes necessary rather than optional.

---

## Cross-cutting interface findings

These are not in the audit ledger. They are defects this research surfaced by measurement, and
each one degrades the reading of the board.

### 1. The canvas renders at a fixed 576 × 832 regardless of device — *the root defect*

`src/main.tsx:100` sets the canvas backing store to a constant:
`<canvas ref={canvas} width={columns * tile} height={rows * tile} …>`. The browser then upscales
it to the CSS size of the board container. On an iPhone 15 at dpr 3 the board is drawn at 576 px
wide and shown at 1155 device px — **a 2.01× upscale of every sprite, label and ring.**

This is why enemies blur, why the Drum pulse is mush, and why the "Entry" / "Village gate"
labels have soft edges. It is also why fixing cue *design* alone will not make cues *read*.

- **Player sees:** a board that looks slightly out of focus compared to the crisp DOM UI around
  it. The header and the tray are sharp (they are DOM); the battlefield is soft (it is canvas).
  That inconsistency is itself a legibility problem.
- **Interface change:** size the canvas backing store from `devicePixelRatio` and the container's
  actual pixel size, and redraw on resize/orientation change. A small change with
  disproportionate effect, because it improves every board-reading task at once.
- **Normative backing:** Android's web-app quality guidelines list **"blurring or pixelation"**
  among the visual defects a web app must not exhibit — which is precisely what a 2× upscale
  produces on a real device.

### 2. The build tile is 0.62–0.71 cm — *below the physical minimum*

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
tile is then converted through that density. Apple HIG asks for **44 × 44 pt** on frequently
used game controls; Material 3 asks for **48 × 48 dp** (*"consider making touch targets at least
48 x 48dp"* — which *"results in a physical size of about 9mm, regardless of screen size"*).
NN/g's study (Parhi, Karlson & Bederson) puts the physical floor at **1 cm × 1 cm** — *"its
minimum size should be 1cm × 1cm (0.4in x 0.4in)"* — noting the average fingertip is
1.6–2.0 cm wide and the thumb's impact area about 2.5 cm. 3guotd's build tile is
**0.39×–0.44× a fingertip**, and 0.25×–0.28× a thumb's impact area.

**The tile cannot simply be made bigger — but the reason is instructive.** The game's
internal tile is **64 px** (`columns=9 × tile=64` gives the 576 px canvas). At the ~155
css-px-per-inch density of a modern phone, **64 css px is very close to exactly 1 cm**. So
3guotd was authored at the right physical scale; the phone layout then scales the whole board
*down* to fit a 360–412 css px viewport, which is where the touch target is lost. The fix is
therefore a **layout** question — fewer columns, a scrollable or pannable board, or a
tap-to-zoom board — not a question of enlarging the tile.

Note the interaction with finding #1: a board that renders at native resolution but remains at
0.62 cm still fails on hit-target grounds. The two fixes are independent, and both are needed.
The late-Han visual proposal already anticipated the second half of this: *"distinct corner
stakes at buildable sites so the road edge and placement cues read separately."*

### 3. The build mound is 1.2 × 0.5 mm — a texture, not a cue

`.useful-site::before` draws the mound: `width: 18%; height: 8%` of the tile, `background:
#d0ae74`. On a 39.1–44.9 px tile that is **7.0–8.1 × 3.1–3.6 px**, which at phone density is
**1.11–1.28 mm wide and 0.49–0.57 mm tall** — roughly **11–13% of the 1 cm minimum** in width.
The measured colour `rgb(208, 174, 116)` is a low-contrast tan against grass.

Two consequences:

- **It is not a target.** It was never going to be a hit area — the whole tile is — but it is
  not a legible marker either. At 1.2 mm it is smaller than a printed full stop.
- **It is on only 40 of the 97 buildable cells.** `.empty-cell::before { content: none; }`, so
  57 buildable tiles carry **no mound at all**. A player scanning for a place to build sees 40
  faint specks and 57 blank tiles, and has no way to know the other 57 are also legal.

**This is a follow-on to GF-034, not a reopening of it.** GF-034 ("Empty buildable tiles lacked a
visible placement cue") was **verified** on 2026-11-21: KongMing *"marked empty eligible tile
buttons and amended the initial instruction"*, and SimaYi verified the marks at 320×480. The
mound *is* that fix — `.useful-site` is the class that carries it, so it marks the 40
road-adjacent sites and suppresses the mark on the 57 that are buildable but not yet useful for
the current tower.

The finding was closed against the criterion "does a visible cue exist", and it passes that. What
measurement shows is that the cue **passes at 320×480 but fails at modern phone sizes** — the
mark is 1.2 mm wide, and on a 375–412 css-px viewport it is rendered from a canvas that is
upscaled up to 2.01×. The closure criterion and the defect are different questions, and this one
was never asked.

- **Player sees:** scattered tan flecks that read as ground texture. In the screenshot they are
  visible only if you already know to look.
- **Interface change:** keep the mound as ambient texture if you like, but make the **active**
  suggestion a high-contrast marker with a distinct shape — and make the *set* of buildable
  tiles legible, not just one of them. Shape, not just brightness: WCAG 1.4.1 and the Game
  Accessibility Guidelines both require a non-colour channel. The late-Han proposal's *"distinct
  corner stakes at buildable sites"* is the right shape of answer.
- Do this **after** finding #1, so the resolution headroom exists.

### 4. Unaffordable purchase cards are dimmed to `opacity: .76` — *too subtle*

`.purchase-card:disabled { opacity: .76; }`. Material 3's position is that disabled states are
communicated by colour change and reduced elevation, and explicitly that *"Disabled states don't
need to meet Material's contrast requirements."* But that guidance applies to a **permanently
disabled** control. 3guotd's cards are disabled **because the player is short of silver** — a
transient, recoverable state.

- **Player sees today:** a dimmed card, plus "Need 12 more silver." on the status line.
- **Interface change:** keep the card *enabled-looking* and put the shortfall on the card
  itself — "Need 12 more silver" directly under the price, with the price in the warning
  colour. The status line is the wrong place: it is below the board, so a player looking at
  the card is not looking at the status line. One line, clear payoff.

### 5. The header second line is 11.7 px and carries the least important text

Measured on iPhone SE and Galaxy S8: 13.1 px for the first line, 11.7 px for the second.
"0/3 watch shifts held" is the smallest text in the interface and the hardest phrase to parse.
Its contrast is adequate (9.16:1) — the defect is **size and phrasing**, not colour, which
matters because the obvious fix (recolour it) would not help.

- **Interface change:** delete or relabel that phrase, and use the band for the prep countdown
  (GF-053). Two birds: less clutter, and the most time-critical information gets the slot.

### 6. The game honours no motion preference — the Drum's pulse runs for the whole wave

`grep` for `prefers-reduced-motion` or `matchMedia` across `src/` returns **nothing**. The game
has no motion-reduced variant at all, and the one animation that runs continuously is the Drum's
cyan pulse.

Measured in the running build on iPhone SE 2 and Pixel 7: the pulse is on screen for the **whole
wave** — cyan pixels present in 25 of 40 half-second samples, then dropping to zero as the last
slowed enemy dies — roughly **12.5 seconds** of continuous expanding ring per wave. It is drawn
from `round.waveAge` (`src/game-art.ts:219`), so it is wall-clock driven and speed-independent.

Two separate standards apply, and the game satisfies one and ignores the other:

- **WCAG 2.2 SC 2.2.2 (Pause, Stop, Hide)** requires a mechanism to pause, stop or hide moving
  content that lasts more than five seconds, *"unless the movement, blinking, or scrolling is
  part of an activity where it is essential"*. 3guotd **does** have a Pause button
  (`src/main.tsx:607`), and pausing freezes the tick loop, which freezes the pulse — so the
  criterion's mechanism is present, and a game in which the pulse carries the slow's meaning has
  a fair claim to "essential". This one is satisfied.
- **`prefers-reduced-motion`** is the OS-level switch a player sets when animation causes
  discomfort. MDN is blunt about what it covers: *"Animations such as scaling or panning large
  objects can be vestibular motion triggers."* The Drum's ring **scales outward from the tower
  every 0.56 s** — that is the pattern MDN names. web.dev's framing is that the query *"lets
  developers create a variant of a page for users who, well, prefer"* less movement. The game
  has no such variant.

- **Player sees today:** the same pulse for everyone, on a device where the user has explicitly
  asked the system for less motion. On a phone held still in a train, a ring that expands from
  the tower twenty-two times over a 12.5-second wave is exactly the kind of motion that
  setting exists to suppress.
- **Interface change:** read the preference once (`window.matchMedia('(prefers-reduced-motion:
  reduce)')`) and, when it is set, draw the slow's **state** rather than its **animation** — a
  steady cyan ring and the existing cyan tether instead of the expanding pulse. The information
  is unchanged; the motion is removed. The Drum's readout already carries the meaning in text
  (*"Drum slowing N"*), so nothing is lost. Note this pairs with finding #1: a pulse rendered
  into a 2×-upscaled canvas is a soft pulse, so a reduced-motion variant is also a legibility
  win.
- This is cheap to get wrong and cheap to fix: one `matchMedia` call and one branch in the
  Drum's draw path (`src/game-art.ts:211–234`).

---

## What the research says about the general patterns, in brief

*Sources in `sources/`; each capture carries its URL, title and retrieval date.*

**Touch targets.** Apple HIG, *Game controls* (`ui-15`): frequently used controls should be
**44 × 44 pt** minimum. Material 3, *Material structure* (`ui-03`): **48 × 48 dp** minimum —
*"consider making touch targets at least 48 x 48dp"*, which *"results in a physical size of
about 9mm, regardless of screen size"*. NN/g, *Touch Target Size* (`ui-01`): the physical floor
is **1 cm × 1 cm** — *"its minimum size should be 1cm × 1cm (0.4in x 0.4in)"* — noting the
average fingertip is 1.6–2.0 cm wide and the thumb's impact area about 2.5 cm.

**Discoverability without interruption.** NN/g, *Overlay overload* (`ui-36`): interrupting play
to teach a recurring action is the wrong instrument; teach in the world where the action
happens. Filament, *10 tips for designing a game tutorial* (`ui-20`): teach by placing the cue
where the action occurs. CHI 2012, *Video Game Tutorials Are Not...* (`discover-08`): tutorials
produced **no significant improvement** for simple games whose mechanics can be discovered
through experimentation. Ironhide (Kingdom Rush) ship their own lesson here — the first waves
are *"pitifully easy to deal with"* specifically so the mechanic lands before the challenge
(`econ-05`, `feedback-25`, `pacing-17`).

**Legibility of status effects.** The Game Accessibility Guidelines require that no essential
information is conveyed by a fixed colour alone (`feedback-05`), that key events have distinct
sounds (`feedback-56`), and that status effects are visible (`feedback-59`). WCAG 2.2 SC 1.4.1
(*Use of color*, `feedback-02`) and SC 2.5.8 (*Target size minimum*, `feedback-03`) are the
normative backing.

**Attribution of effects.** Game Developer, *Enemy attacks and telegraphing* (`feedback-06`):
*"If the player needs to dodge, block, or otherwise avoid damage - the player must first know the
damage is coming"* — and the same logic applies in reverse, where a player must know which of
their own towers caused an effect they can see.

**Game feel and timing.** NN/g's response-time limits (`ui-32`: 0.1 s / 1 s / 10 s) and the
game-feel literature (Game Developer's *Juice it or lose it*, `ui-29`/`ui-30`; the *Data Feel*
`ui-18`, *Impact Feel* `feedback-18` and *Designing Game Feel* `ui-34` survey papers) converge
on one point: **feedback timing should be wall-clock, not simulation-clock.** 3guotd's combat
cues already honour this — measured at ≈250 ms at 1× and ≈300 ms at 3×, and `waveAge` confirmed
to advance at wall-clock rate at all three speeds — so the machinery is right and only the
*salience* of the cue is wrong.

**Focus and thinking in TD.** Game Developer, *Optimizing Tower Defense for Focus and Thinking*
(Defender's Quest, `feedback-12` / `pacing-20`): *"Scrolling maps are the enemy of FOCUS"*;
status-effect icons should carry a tooltip naming the effect and its duration; enemies should
have floating health bars invisible at full health. 3guotd has no scroll and no hover — on a
phone the tooltip has to become a **tap-to-inspect** or a permanently-legible badge.

**Cost and slot legibility in a purchase.** PvZ's seed packet shows its sun cost *on the packet
itself* and greys the packet when it cannot be afforded, with the sun total shown in the corner
(`discover-17`, `discover-19`). 3guotd's card already names the price; it does not yet carry the
shortfall (finding #4).

---

## Recommended order of work

Ordered by payoff per unit of effort, and each is independently verifiable.

| # | Change | Fixes | Why first |
|---|---|---|---|
| 1 | **Render the canvas at device resolution** (backing store from `devicePixelRatio` + container size; redraw on resize) | legibility of every board cue | Root cause. Nothing else on the board reads properly until this lands. Small diff. |
| 2 | **Show the prep countdown on the first level**, not only on continued story levels | GF-053 | The countdown exists but a first-time player never sees one. Small diff, and the one thing GF-053 asks to observe. |
| 3 | **Show the shortfall on the card, not only on the status line** | GF-023 | One line. Makes an un-affordable purchase legible where the player is looking. |
| 4 | **Give the Drum a non-colour channel** (status badge on the slowed enemy + a distinct hit sound) | GF-025, WCAG 1.4.1 | Converts a colour-only cue into an attributable one. The badge is a small diff; the sound is cheapest of all. |
| 5 | **Make the buildable set legible** (distinct stake/marker shape; a cue on every buildable tile, not 40 of 97) | GF-034 follow-on | Do *after* #1, so the resolution headroom exists. GF-034's mound passes at 320×480 but is 1.2 mm at modern sizes. |
| 6 | **Fix the board's touch scale** — fewer columns, pannable board, or tap-to-zoom | hit-target minimum | The 64 px internal tile is already ~1 cm; the phone layout is what scales it down. A layout change, not a scale change. |
| 7 | **Enemy differentiation by shape and silhouette**, not hue alone | GF-026 pattern | GF-026's fix gave veterans a distinctive helmet silhouette — the same principle, applied to the whole enemy set. Prerequisite for #1 to actually pay off; the art proposal already calls for distinct silhouettes. |
| 8 | **Correct the "44 px build tiles" claim** in `references/tower-defense-ux/README.md` | doc drift | One-line truth fix. The audit has been reasoning from a wrong number. |
| 9 | **Honour `prefers-reduced-motion`** — draw the Drum's slow as a steady ring instead of an expanding pulse | reduced-motion | One `matchMedia` call and one branch. Cheap, and it pairs with #1: a pulse in a 2×-upscaled canvas is a soft pulse. |

Items 1–2 are the ones I would do first: #1 is the root cause of the board legibility, and #2 is
the only one of the four findings that the current build has *not* yet addressed in code.

---

## What this research does **not** answer

- **Human comprehension.** Every finding here is a measurement or a cited guideline. GF-020,
  GF-023, GF-025 and GF-053 all name human observation in their preventive methods, and this
  research cannot close them — only an uncoached phone playtest can. It can tell you what to
  look for when you run it.
- **Balance and economy.** Out of scope. GF-028 is verified and is not reopened here.
- **Art direction.** The late-Han visual proposal already governs the art; this research only
  identifies where the art fails to *read* on a phone, and defers to the proposal for what it
  should look like.
- **Android packaging.** The Canvas work applies equally to the Capacitor build, but the
  Capacitor path is not exercised here.
- **Whether the four findings are now *closed*.** That is SimaYi's call after an uncoached
  session, not this document's.

---

## Reproducing the measurements

All measurement scripts live outside the repo, in the orchestrator scratch area, and are
read-only against the project:

- `measure-ui-live.mjs` — Playwright/Chromium; drives the shipped `dist/` build through
  Campaign → Enter battle → site selection; reports live rendered geometry.
- `measure-cells.mjs` — enumerates the cell population (117 grid items → 97 buildable: 40
  `.useful-site` + 57 `.empty-cell`), their sizes, and whether the mound renders on each class.
- `measure-mound.mjs` — converts the mound's used CSS-px box into physical millimetres.
- `measure-under44.mjs` — counts, per device, how many buildable cells are under 44 × 44 px
  (97 of 97 on five of six devices; 0 of 97 on the Pixel 7).
- `measure-canvas-upscale.mjs` — required device pixels vs the fixed backing store, per viewport.
- `measure-header-contrast.mjs` — rendered font sizes and computed WCAG contrast for the header
  and status text.
- `verify-prep-clock.mjs` — drives the first mission and asserts whether `.prep-clock` ever
  renders (it does not, on level 1).
- `capture-current-ui.mjs` — screenshots of the current build at iPhone SE and Pixel 7.
- `measure-physical-size.py` — converts the measured CSS-px tile into physical cm against
  device PPI, and compares to the 1 cm minimum.
- `measure-cue-duration.mjs`, `waveage.mjs` — cue wall-clock timing and `waveAge` speed
  independence.
- `validate-citations.py`, `validate-quotes.py` — check every source reference and every
  verbatim quotation in this document against the capture pack.
- `validate-code-refs.py` — check every `file:line` code reference in this document against the
  current source.
- `validate-links.py` — check every relative Markdown link in this document and in
  `designideas.md` resolves.
- `validate-sources-readme.py` — check the stream-count table in `sources/README.md` against
  the files on disk, and that every capture carries its `URL`/`TITLE`/`RETRIEVED`/`METHOD`
  header.

The capture tooling that produced the 202-file pack ships with it, in `tools/` — see
`tools/README.md`. It writes only into `sources/`; it never touches the game's source, the
build, or the audit ledger.

Browser: `/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome`
(Playwright's bundled revision 1223 is not installed on this box).

---

## Where the claims come from, in the code

| Claim | File | Line |
|---|---|---|
| Canvas backing store fixed at `columns * tile` × `rows * tile` | `src/main.tsx` | 100 |
| `tile = 64`, `columns = 9`, `rows = 13` | `src/game-art.ts` 10; `src/game/board.ts` 4–5 | — |
| Purchase tray is contextual (`activeSite !== null && spendingOpen`) | `src/main.tsx` | 196 |
| First-purchase status copy `"Tap Build Archer for your first defender."` | `src/main.tsx` | 212 |
| Shortfall text `"Need {n} more silver."` | `src/main.tsx` | 577 |
| `.purchase-card:disabled { opacity: .76 }` | `src/style.css` | 239 |
| Build mound `.useful-site::before` — 18% × 8%, `#d0ae74` | `src/style.css` | 112–118 |
| Mound suppressed on `.empty-cell` (`content: none`) | `src/style.css` | 111 |
| `levelPrepRemainingMs` written only by `prepareNextLevel()` | `src/game/round.ts` | 160 |
| `prepareNextLevel` invoked only on a won round with a matching `battleId` | `src/main.tsx` | 254 |
| Drum cyan pulse / dashed tether | `src/game-art.ts` | 179–183 |
| Drum pulse phase driven by `round.waveAge * 1.8` | `src/game-art.ts` | 219 |
| Pause button (`setPaused(value => !value)`) | `src/main.tsx` | 607 |
| `"Drum slowing N"` readout | `src/main.tsx` | 576 |
| Towers guide: *"Blue lines mark slowed enemies. The Drum deals no damage."* | `src/main.tsx` | 504 |
| Page grid `44px minmax(0,1fr) 98px`; command bar `44px 54px` | `src/style.css` | 2–5; 17–20 |

All line numbers are against commit `d40a108`.
