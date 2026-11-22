# Mobile TD interface — design ideas for 3Guo Tower Defense

**What this is.** Thirteen changes to the phone interface of 3guotd, each written as something
you could build, plus the four audit findings that only a human can close.

**Basis.** Measured from the running build in headless Chromium at six phone viewports, and
quoted from 202 primary-source captures. The numbers, the code map and the reproduction
instructions are in [`evidence.md`](evidence.md); this file is the ideas.

**Scope.** The player-facing interface only — HUD, build affordance, purchase tray, feedback
cues, wave communication. Rules, balance and economy are out of scope except where they are
*visible in the interface*.

**Status.** Nothing here is implemented. Four of the findings are *acceptance gaps*: the code
fix for each has already landed, and what remains is the uncoached human observation their
preventive methods call for. These are the **residual** problems — what is still wrong on screen
after those fixes.

---

## How to read an idea

**Change** — what the interface should become.
**Sees today** — what the player actually sees on the phone.
**Works when** — the observable test that says the idea landed.
**Rule** — the standard or source behind it, with the capture id.

`GF-0xx` marks a live audit finding. `§1`–`§13` mark the ideas themselves.

---

## Priority order

Ordered by payoff per unit of effort. Each is independently verifiable.

| # | Idea | Fixes | Why this order |
|---|---|---|---|
| 1 | **Render the board at device resolution** | legibility of every board cue | Root cause. Nothing else on the board reads until this lands. Small diff. |
| 2 | **Show the prep countdown on the first level** | GF-053 | The countdown exists, but a first-time player never sees one. The only live finding the build has not addressed. |
| 3 | **Show the shortfall on the card** | GF-023 | One line. Makes an unaffordable purchase legible where the player is looking. |
| 4 | **Give the Drum a non-colour channel** | GF-025, WCAG 1.4.1 | Turns a colour-only cue into an attributable one. The badge is a small diff; the sound is the cheapest of all. |
| 5 | **Make the buildable set legible** | GF-034 follow-on | Do *after* #1, so the resolution headroom exists. The mound passes at 320×480 but is 1.2 mm at modern sizes. |
| 6 | **Fix the board's touch scale** | hit-target minimum | The 64 px internal tile is already ≈1 cm; the phone layout scales it down. A layout change, not a scale change. |
| 7 | **Differentiate enemies by shape, not hue** | GF-026 pattern | The principle GF-026 already applies to veterans, extended to the whole set. |
| 8 | **Correct the "44 px build tiles" claim** in `references/tower-defense-ux/README.md` | doc drift | One-line truth fix. The audit has been reasoning from a wrong number. |
| 9 | **Honour `prefers-reduced-motion`** | reduced-motion | One `matchMedia` call and one branch. Pairs with #1: a pulse in a 2×-upscaled canvas is a soft pulse. |
| 10 | **Render the Enemy Types table from live numbers** | truthfulness | The guide gives the player the wrong HP and speed on every continued-story level. One call site; the numbers become true. |
| 11 | **Add a next-wave preview to the prep header** | decision quality | The player currently places towers blind. `roundFormation()` already computes the wave; this is a display change, not new logic. |
| 12 | **Say what the wave is, not just how hard it is** | decision quality | Waves cycle through three compositions while the name advertises only a health delta. Balance is the owner's call; the interface currently claims escalation it does not deliver. |
| 13 | **Give the player a reason to care on frame one** | GF-020 | One line above the board. The rest of GF-020 is already shipped. |

Items 1–2 first: #1 is the root cause of board legibility, and #2 is the only live finding the
build has not yet addressed in code. Items 10–11 are worth pulling forward regardless — #10 is a
correctness defect in the only reference the player has, and #11 gives the player something to
decide *with*. Both reuse functions that already exist.

---

## §1 Render the board at device resolution — *the root defect*

**Change.** Size the canvas backing store from `devicePixelRatio` and the container's real pixel
size, and redraw on resize and orientation change.

**Sees today.** A battlefield that looks slightly out of focus next to crisp DOM chrome — the
header and tray are sharp (they are DOM), the board is soft (it is canvas). That inconsistency is
itself a legibility problem, and it reads as *the map is background art* when the map is the
game. Enemies blur, the Drum pulse is mush, "Entry" and "Village gate" have soft edges.

**Why.** `src/main.tsx` -> `width={columns * tile}` sets the backing store to a constant — 576 px
wide by `height={rows * tile}` = 832 px — whatever the device. The browser upscales it to the
container's CSS size. On an iPhone 15 at dpr 3 the board is drawn 576 px wide and shown at 1155
device px: **a 2.01× upscale of every sprite, label and ring**. Fixing cue *design* alone will
not make cues *read*.

**Works when.** The backing store's device-pixel width equals the container's device-pixel width
on every tested viewport, and the upscale factor is 1.0.

**Rule.** Android's core app quality guidelines require that a web app's visuals be
*"free of distortion, blurring, or pixelation"* (`tech-18`) — precisely what a 2× upscale
produces on a real device.

**Where.** `src/main.tsx` -> `width={columns * tile}` (the canvas backing store);
`src/game-art.ts` -> `export const tile = 64`; `src/game/board.ts` -> `export const columns = 9`
and `export const rows = 13`.

---

## §2 Show the prep countdown on the first level — *GF-053*

**Change.** Show the existing `.prep-clock` ring whenever the player is in setup with no towers
placed — including on the first level — and put it in the header's second line.

**Sees today.** On level 1: a "Start wave" button and no clock at all. On level 2+: a prominent
countdown that auto-starts the wave. `levelPrepRemainingMs` is written in exactly one place,
`prepareNextLevel()` (`src/game/round.ts` -> `levelPrepRemainingMs`), which runs only when `round.phase === 'won'` and
the next mission shares the current `battleId` (`src/main.tsx` -> `prepareNextLevel`) — the *continued story* path.
Verified in the running build: on the first mission, at rest, and with the wave running,
`.prep-clock` is **absent in all three states**.

The countdown is real, but it is the countdown for the *second* level. A first-time player never
sees one — and GF-053's preventive method asks to "observe an uncoached player's first
prep-window decision". There is no first prep window to observe.

**Why this slot.** The header's second line carries "0/3 watch shifts held" at 11.7 px — the
smallest text in the interface and the hardest phrase to parse. Its contrast is fine (9.16:1), so
this is a **size and phrasing** problem, not a colour problem, and recolouring would not help.
Repurposing that band removes a clutter item and creates the one thing the player needs.

**Works when.** A first-time player on mission 1 sees a countdown during their first setup
window, and can tell how long they have.

**Rule.** NN/g's response-time limits (`ui-32`): the tap on a build site must feel instantaneous
(< 0.1 s), and a 10 s wait is exactly at the attention boundary where a progress-style indicator
becomes necessary rather than optional.

**Where.** `src/game/round.ts` -> `levelPrepRemainingMs`; `src/main.tsx` -> `prepareNextLevel`;
`src/style.css` -> `.prep-clock`.

---

## §3 Show the shortfall on the card — *GF-023*

**Change.** Keep the card *enabled-looking* and put the shortfall on the card itself — "Need 12
more silver" directly under the price, with the price in the warning colour.

**Sees today.** A dimmed card at `opacity: .76` (`src/style.css`), plus "Need 12 more silver."
on the status line — which is *below the board*, where a player looking at the card is not
looking.

**Why.** Material 3's position is that disabled states are communicated by colour change and
reduced elevation, and explicitly that *"Disabled states don't need to meet Material's contrast
requirements"* (`ui-16`). But that guidance applies to a **permanently** disabled control.
3guotd's cards are disabled because the player is **short of silver** — a transient, recoverable
state. The right pattern for that is "shown, with the shortfall and the way to fix it".

**Works when.** A player who cannot afford a tower reads the shortfall without looking away from
the card.

**Rule.** PvZ's seed packet shows its sun cost on the packet itself and greys the packet when it
cannot be afforded, with the sun total in the corner (`discover-17`, `discover-19`). 3guotd's card
already names the price; it does not carry the shortfall.

**Where.** `src/style.css` -> `opacity: .76`; `src/main.tsx` -> `Need {shortfall} more silver.`.

---

## §4 Give the Drum a non-colour channel — *GF-025*

**Change.** Three things: a **status badge on the enemy** (an icon, not only a colour), a
**distinct sound for the Drum hit**, and a **tether that is opaque and full-width** rather than
low-alpha dashed.

**Sees today.** A cyan ring on the enemy, a cyan tether back to the Drum, a cyan pulse at the
Drum, and the text "Drum slowing 3". It works — but **every channel is colour**. The cyan is
drawn at low alpha (`.65` falling to 0) over a canvas that is itself being upscaled 2×, so on a
real phone a player watching a slowed enemy still cannot reliably connect that enemy to the Drum
that slowed it.

**Works when.** A player can point at the screen and say what the Drum did, unprompted.

**Rule.** WCAG 2.2 SC 1.4.1 (*Use of color*, `feedback-02`) and the Game Accessibility Guidelines
(`feedback-05`) require that no essential information be conveyed by a fixed colour alone; the
guidelines require distinct sounds for key events (`feedback-56`). Attribution is a design
requirement, not a nicety: Game Developer, *Enemy attacks and telegraphing* (`feedback-06`) —
*"If the player needs to dodge, block, or otherwise avoid damage - the player must first know the
damage is coming"* — and the same logic runs in reverse, where the player must know which of
their own towers caused an effect they can see.

**Where.** `src/main.tsx` -> `Drum slowing` and `Blue lines mark slowed enemies`;
`src/game-art.ts` -> `#b7f1e9`.

---

## §5 Make the buildable set legible — *GF-034 follow-on*

**Change.** Keep the mound as ambient texture if you like, but make the **active** suggestion a
high-contrast marker with a distinct shape — and make the *set* of buildable tiles legible, not
just one of them.

**Sees today.** Scattered tan flecks that read as ground texture, and 57 of the 97 buildable
tiles carrying **no marker at all**. `.useful-site::before` draws the mound at `width: 18%;
height: 8%` of the tile in `#d0ae74` (`src/style.css` -> `.useful-site::before`). On a 39.1–44.9 px tile that is
**1.11–1.28 mm wide and 0.49–0.57 mm tall** — roughly **11–13% of the 1 cm minimum** in width,
smaller than a printed full stop. `.empty-cell::before { content: none; }`
(`src/style.css` -> `content: none`) suppresses it on the other 57. A player scanning for a place to build sees
40 faint specks and 57 blank tiles, with no way to know the other 57 are also legal.

**Why this is not a reopening of GF-034.** GF-034 ("Empty buildable tiles lacked a visible
placement cue") was **verified** on 2026-11-21: KongMing *"marked empty eligible tile buttons and
amended the initial instruction"*, and SimaYi verified the marks at 320×480. The mound *is* that
fix — `.useful-site` is the class that carries it, so it marks the 40 road-adjacent sites and
suppresses the mark on the 57 that are buildable but not yet useful for the current tower. The
finding was closed against the criterion "does a visible cue exist", and it passes that.
Measurement shows the cue **passes at 320×480 but fails at modern phone sizes**. The closure
criterion and the defect are different questions, and this one was never asked.

**Works when.** Every buildable tile carries a cue the player can see, and the active suggestion
is distinguishable by shape as well as brightness.

**Rule.** WCAG 1.4.1 and the Game Accessibility Guidelines both require a non-colour channel. The
late-Han visual proposal already anticipated this: *"distinct corner stakes at buildable sites so
the road edge and placement cues read separately."*

**Where.** `src/style.css` -> `.useful-site::before`.

---

## §6 Fix the board's touch scale

**Change.** Fewer columns, a scrollable or pannable board, or a tap-to-zoom board.

**Sees today.** A build tile of **0.62–0.71 cm physically** on every device tested — against the
1 cm physical floor. All 97 buildable cells are the same size, so on every device except the
Pixel 7 *every* buildable tile is under 44 px: **97 of 97**, not a handful. An earlier draft of
this research reported "40 of 97"; that number was an artifact of a truncated button list, not a
count, and it understated the problem by more than half. The Pixel 7 clears 44 px only because
its viewport is 52 px wider than a Galaxy's — a coincidence of screen width, not a design
decision.

**Why it is a layout problem.** The game's internal tile is **64 px** (`columns=9 × tile=64`
gives the 576 px canvas). At the ~155 css-px-per-inch density of a modern phone, **64 css px is
very close to exactly 1 cm**. So 3guotd was authored at the right physical scale; the phone
layout then scales the whole board *down* to fit a 360–412 css px viewport, which is where the
touch target is lost. Change the layout, not the tile.

**Works when.** The build tile measures at least 1 cm × 1 cm on every supported device.

**Rule.** Apple HIG, *Game controls* (`ui-15`): frequently used controls should be **44 × 44 pt**
minimum. Material 3, *Material structure* (`ui-03`): **48 × 48 dp** — *"consider making touch
targets at least 48 x 48dp"*, which *"results in a physical size of about 9mm, regardless of
screen size"*. NN/g, *Touch Target Size* (`ui-01`): the physical floor is **1 cm × 1 cm** —
*"its minimum size should be 1cm × 1cm (0.4in x 0.4in)"* — noting the average fingertip is
1.6–2.0 cm wide and the thumb's impact area about 2.5 cm. 3guotd's build tile is **0.39×–0.44× a
fingertip** and 0.25×–0.28× a thumb's impact area. A nominal pixel target and the physical floor
are never interchangeable: NN/g states that *"Citing dimensions in pixel value doesn't effectively
communicate this physical aspect of touch targets"* (`ui-01`). Apple's 44 × 44 pt is a nominal
bar in points; NN/g's 1 cm × 1 cm is a physical floor in millimetres.

**Where.** `src/style.css` -> `44px minmax(0, 1fr) 98px` (the page grid) and
`44px 54px` (the command bar).

---

## §7 Correct the "44 px build tiles" claim — *doc drift*

**Change.** Correct the sentence in `references/tower-defense-ux/README.md` that reads *"Keep the
44 px build tiles"*.

**Sees today.** Nothing on screen — this is a defect in the record the audit reasons from.
Measured reality is 39.1–44.9 px depending on viewport width, and only the Pixel 7 clears 44 px.

**Works when.** The document and the measurement agree.

---

## §8 Honour `prefers-reduced-motion`

**Change.** Read the preference once — `window.matchMedia('(prefers-reduced-motion: reduce)')` —
and when it is set, draw the slow's **state** rather than its **animation**: a steady cyan ring
and the existing cyan tether instead of the expanding pulse. One `matchMedia` call and one
branch in the Drum's draw path.

**Sees today.** The same pulse for everyone, on a device where the user has explicitly asked the
system for less motion. The Drum's ring **scales outward from the tower every 0.56 s** — the
pattern MDN names as a vestibular trigger. Measured in the running build on iPhone SE 2 and
Pixel 7: cyan pixels present in **24 of 40 half-second samples**, dropping to zero as the last
slowed enemy dies — roughly **12 seconds** of continuous expanding ring per wave, about **22
expansions** at the 0.56 s cycle the source sets (`round.waveAge * 1.8` gives a 1/1.8 s period).
It is drawn from `round.waveAge` (`src/game-art.ts` -> `round.waveAge * 1.8`), so it is wall-clock driven
and speed-independent.

**Two standards apply, and the game satisfies one and ignores the other.** WCAG 2.2 SC 2.2.2
(*Pause, Stop, Hide*, `ui-37`) requires a mechanism to pause, stop or hide moving content lasting
more than five seconds, *"unless the movement, blinking, or scrolling is part of an activity where
it is essential"*. 3guotd **does** have a Pause button (`src/main.tsx` -> `setPaused(value => !value)`), and pausing freezes
the tick loop, which freezes the pulse — so the criterion's mechanism is present, and a game in
which the pulse carries the slow's meaning has a fair claim to "essential". **This one is
satisfied.** `prefers-reduced-motion` is the OS-level switch for a player whose animation causes
discomfort, and the game has no such variant at all: `grep` for `prefers-reduced-motion` or
`matchMedia` across `src/` returns **nothing**.

**Works when.** With the OS reduced-motion preference on, the Drum shows a steady ring and the
text "Drum slowing N" still appears. The information is unchanged; the motion is removed.

**Rule.** MDN (`ui-39`): *"Animations such as scaling or panning large objects can be vestibular
motion triggers."* web.dev (`ui-40`): the query *"lets developers create a variant of a page for
users who, well, prefer"* less movement.

**Where.** `src/game-art.ts` -> `tower.kind === 'drum'`; `src/main.tsx` -> `setPaused(value => !value)`.

---

## §9 Render the Enemy Types table from the live numbers — *truthfulness*

**Change.** Render the table from the same functions the simulation uses — `enemyMaxHealth(round,
kind)` and the escalated speed — for the level the player is on. The caption becomes "Stats at
level 3. Higher levels add 12% health and 8% speed per step." One call site.

**Sees today.** A reference table that is honest about being a base, and a battlefield that never
matches it. The Field Guide's **Enemy Types** screen (`src/main.tsx` -> `Base stats before wave and story bonuses`) is the one place a
player can look up what an enemy is; it renders `attackers[kind].health` and
`attackers[kind].speed` — the **base** numbers — and says so: "Base stats before wave and story
bonuses." But the numbers that reach the board are escalated: health is `ceil((base +
healthBonus) × (1 + storySteps × 0.12))` (`src/game/round.ts` -> `storySteps(round) * 0.12`) and speed is `base × (1 +
storySteps × 0.08)` (`src/game/round.ts` -> `storySteps(round) * 0.08`), with `storySteps` = `mission.level - 1` on the
continued-story path (`src/game/round.ts` -> `function storySteps(round: Round): number`). At level 5 a Commander reads as 10 HP in the
guide and arrives with 15 — a 50% lie, and the health number is exactly what a player sizes a
tower against. The full table is in [`evidence.md`](evidence.md).

**Why this is a different class of defect.** It is a **truthfulness** defect, not a legibility
one. Nothing about the table's appearance is wrong, so it is invisible to every other idea here.

**Works when.** Every row of the table equals what the player meets at the current level.

**Where.** `src/main.tsx` -> `<td>{attackers[kind].health}</td>` and
`<td>{attackers[kind].speed}</td>`; `src/game/round.ts` -> `export function enemyMaxHealth(round: Round, kind: AttackerKind): number`,
`function storySteps(round: Round): number`, `storySteps(round) * 0.12` and `storySteps(round) * 0.08`.

---

## §10 Say what the wave is, not just how hard it is

**Change.** If the intent is repetition-with-a-numbers-ratchet, say so — the wave name already
carries a suffix, so "Veteran column · +12 health · veteran pack again" is cheap. If the intent
is genuine escalation, that is a `formations` change in `src/game/round.ts`, and the interface
then needs to preview the change (§11).

**Sees today.** "Veteran column · +12 health", and the player reads *+12 health* as the whole
story. Nothing tells them the enemy *mix* they already handled has returned unchanged.

**Why.** `waveFormation()` (`src/game/round.ts` -> `formations[(number - 1) % formations.length]`) picks the wave's
enemy list by index into `formations`, and `formations` holds exactly **three** entries:
Mixed patrol, Runner rush, Veteran column. Measured over a 40-wave run, the composition repeats
on a cycle of three, with every fifth wave swapped to a uniform cavalry column (waves 5, 10, …,
40) (`src/game/round.ts` -> `sequence: number % 5 === 0`). What changes across the run is the **health bonus** (capped at
+24), the spawn **interval** (1.25 s at wave 4, down to 0.69 s by wave 40, floored at 0.45 s),
and the wave **name** — "Runner rush · +8 health", which is wave 23. The mission path cycles
too: `threats[chapter][enemy % threats[chapter].length]` (`src/game/campaign.ts` -> `threats[chapter][enemy % threats[chapter].length]`) rotates a
four-enemy list per chapter.

So across a 40-wave session the player meets **three enemy patterns, repeated**, getting
numerically harder. The health number is in the wave name, but the *pattern* is never named as a
pattern — and a player has no way to learn that wave 34 is the same shape as wave 4.

**Why this is a UI finding and not a balance finding.** The scope is deliberately narrow: **not**
"the waves should escalate differently" — that is a design decision for the owner — but "the
interface currently claims escalation where it delivers repetition." A player cannot make a
different decision based on information they do not have. Right now the only wave information is
a health delta, so the only decision available is "more of the same, harder".

**Works when.** The wave name tells the player what to expect, not only how much harder it is.

---

## §11 Add a next-wave preview

**Change.** A one-line next-wave preview in the prep header — composition, count, and health —
using `roundFormation(round)` for the *next* wave, which is the same call that already builds the
wave. This is a display change, not new logic.

**Sees today.** A decision to place or upgrade a tower with no idea what is coming, and no way
to check. The status line during a wave names the **current** formation (`src/main.tsx` -> `formation.name`), and
the campaign screen names only the **first** wave of a mission (`src/main.tsx` -> `Next threat`, "Next threat
· {name}") — both before the wave exists. Between waves the player gets the formation name only
at the moment the wave starts, as the cue line ("Wave N starts · {waveCue}"), which on a
continued story names only the **first** enemy's name and HP (`src/main.tsx` -> `First: ${attackerName(first)}`).

**Works when.** Before every wave, the player can see what is coming and change their build
accordingly.

**Rule.** Doucet, on the Defender's Quest wave-prep pass (`pacing-20`): *"The player should have a
similar treatment for enemy waves -- what type of enemy will spawn, how many, at what strength
level, at what spawn locations."* Doucet pairs this with the readout idea: *"A player should be
able to click on any defender or enemy at any time and get a full readout of its current health
and stats."* 3guotd has the stats screen but no tap-on-enemy readout, and the enemy table it does
have is the one in §9. Fixing §9 makes that screen usable; adding a tap readout makes it
reachable mid-wave.

**Where.** `src/main.tsx` -> `First: ${attackerName(first)}` and `Next threat`;
`src/game/round.ts` -> `export function waveFormation(number: number): Formation`.

---

## §12 Give the player a reason to care on frame one — *GF-020*

**Change.** One plain sentence of intent above the board — "Hold the village gate. Raiders come
from Entry." One line, not behind Help. The gold `+` stays.

**Sees today.** The frame is good: the gold `+` marker is large and high-contrast, the status line
reads "Tap the gold + on the map to place a tower.", and the command row carries a "Select
marked site" button — a non-map route to the same action — beside "Start wave". **GF-020's
recommended site exists and is visible.**

But the enemy route is legible while its purpose is not stated. "Entry" (top) and "Village gate"
(bottom) are visible and the road is traceable; nothing on screen says *the gate is what you are
defending*. A player cannot tell whether they should be blocking Entry or protecting the gate.

**Note on the purchase tray.** The tray is *contextual* — `showActions` requires
`activeSite !== null` (`src/main.tsx` -> `showActions`) — so frame one shows **no purchase cards at all**: the
row is `Select marked site | Start wave`. Selecting the gold `+` swaps it for `Build Archer | 30
silver | Damage` and `Build Drum | 30 silver | Slow`, and the status line changes to "Tap Build
Archer for your first defender." (`src/main.tsx` -> `Tap Build Archer for your first defender.`) with the Archer card gold-highlighted
(`.first-buy`). That is the correct trade — the tray no longer competes with the board — but a
first-time player's *second* frame is where they first see what a purchase actually is.

**Do not** add a modal tutorial overlay. NN/g's overlay-overload guidance (`ui-36`) is explicit
that interrupting play to teach a recurring action is the wrong instrument; Filament's tutorial
guidance (`ui-20`) makes the same point — teach by placing the cue in the world where the action
happens. 3guotd already does this, and CHI 2012 (`discover-08`) found that tutorials produced **no
significant improvement** for games whose mechanics can be discovered through experimentation —
which is exactly this game. Ironhide's own account of the Kingdom Rush campaign opens the same
way: *"The enemies in Southport are pitifully easy to deal with, as most setups can defeat them
without issue"* (`econ-05`, `feedback-25`, `pacing-17`) — the first wave is deliberately trivial
so the mechanic lands before the challenge.

**Works when.** A first-time player can say, unprompted, what they are defending.

---

## §13 Make the prep window a decision, not a countdown

**Change.** Pay the player for starting a wave early — free silver equal to the seconds left on
the clock — or give them a reason to spend those ten seconds.

**Sees today.** A ten-second window the player waits out, with a "Start wave" button that does
not reward the risk.

**Why.** Kingdom Rush's early-calling mechanic (`pacing-17`) pays the player for starting a wave
early: *"The benefit of doing so is free Gold equal to the number of seconds left before the wave
would have come in naturally."* This is §11 seen from the other side — a wave the player can
call is a wave the player has information about.

**Works when.** Starting early is a decision the player makes on purpose.

**Where.** `src/main.tsx` -> `prepareNextLevel`; `src/game/round.ts` -> `levelPrepRemainingMs`.

---

## The four findings that need an uncoached player

All four are **acceptance-gap** severity in the ledger. In each case the code fix has landed and
the finding stays open only because its preventive method requires *uncoached human observation*.
This research cannot close them — it can say precisely what to watch for.

| Finding | Already in code | Residual |
|---|---|---|
| **GF-020** — first placement is easy to miss | Gold `+`, "Select marked site" button, "Tap Build Archer for your first defender." status line, gold `first-buy` card border (`31d391b`) | The player has no reason to care *yet* — nothing names the thing being defended or the thing that is coming (§12) |
| **GF-023** — purchase cards hard to find on short phones | Contextual tray (`activeSite !== null`), explicit "Build Archer" verb, 30 silver price, role label | Cards sit in a fixed bottom band; the shortfall is on the status line, below the board (§3) |
| **GF-025** — the Drum's contribution is hard to trace | Cyan pulse, tether to each affected enemy, cyan ring on the slowed enemy, "Drum slowing N" readout, Towers guide page | Every channel is colour, drawn at low alpha into a 2×-upscaled canvas (§4) |
| **GF-053** — uncoached use of the prep window is unverified | `.prep-clock` ring: centred transparent countdown, filling arc, large numeral, "Level 2 · Wave 1 in 8s" status line | It never appears on the first level a player sees (§2) |

---

## How to run the uncoached playtest this research asks for

The four findings cannot be closed from a document. They close only when an uncoached player holds
a phone. This is the protocol, so the session is not run on impressions.

**How many people.** NN/g's answer for a qualitative study is 5: *"With **5 users**, you almost
always get close to user testing's maximum benefit-cost ratio"* (`discover-15`). Five first-time
players is enough to see whether the first-placement cue, the purchase tray, the Drum's
contribution and the prep window are legible. That is the number to start from — not a target to
exceed, and not a reason to test ten.

**What to observe, per finding.** Written as things you can see on a screen, not as questions.

- **GF-020 (first placement).** Watch the player's finger on the first turn: does it go to a
  build site unprompted, or does it hunt the board first? Record how long it takes to find the
  first buildable site, and whether they read the status line at all.
- **GF-023 (purchase cards).** Watch for the card, not the board. When silver is short, does the
  player look at the card or at the status line below the board? A player who reads the status
  line for the shortfall has found the pattern you want to move onto the card.
- **GF-025 (Drum's contribution).** After the wave, ask nothing — just note whether the player
  can point at the screen and say what the Drum did. If they cannot attribute it unprompted, the
  cyan pulse is not carrying the attribution.
- **GF-053 (prep window).** On the **first** mission, watch what the player does during the ten
  seconds: do they place a tower, look for a clock, or start the wave early? Watch the first prep
  window specifically — a continued-story player has already been trained by the clock, which is
  exactly what you are trying to test.

**What not to do.** Do not say "tap a build site" or "what does the blue circle mean?" —
leading questions teach the answer and destroy the evidence. Do not explain the Drum, the prep
clock or the silver economy when the player asks mid-session; note that they asked and answer
only after the session. Do not rescue a stuck player before 60 seconds of silence; stuck is a
finding.

**What to record.** For each participant: time to first placement; whether the purchase tray was
found before or after the first silver spend; the first moment the player looked for the wave's
contents; and whether they could attribute the Drum's slow unprompted. Five rows, four columns,
and the four findings answered or not answered.

**One caution.** First sessions are short and attrition is fast: 90% of games in a 5,000-game
platform had a median first session under 20 minutes (`pacing-05`), and *"Almost 24 percent of
players drop off after one session with a game"* (`pacing-06`). Both are vendor research rather
than peer-reviewed work — they size the risk, they do not set the standard. So test the **first
mission only** — one level, one phone, one sitting — and make the window generous. A session that
ends before the player has placed a tower tells you about onboarding; a session that ends after
ten waves tells you about pacing. Do not run the 40-wave mode as a first session.

---

## Rules behind the ideas

*Sources in `sources/`; each capture carries its URL, title and retrieval date.*

**Discoverability without interruption.** NN/g, *Overlay overload* (`ui-36`): interrupting play to
teach a recurring action is the wrong instrument; teach in the world where the action happens.
Filament, *10 tips for designing a game tutorial* (`ui-20`): teach by placing the cue where the
action occurs. CHI 2012 (`discover-08`): tutorials produced **no significant improvement** for
simple games whose mechanics can be discovered through experimentation.

**Legibility of status effects.** The Game Accessibility Guidelines require that no essential
information be conveyed by a fixed colour alone (`feedback-05`), that key events have distinct
sounds (`feedback-56`), and that status effects are visible (`feedback-59`). WCAG 2.2 SC 1.4.1
(`feedback-02`) and SC 2.5.8 (*Target size minimum*, `feedback-03`) are the normative backing.

**Game feel and timing.** NN/g's response-time limits (`ui-32`) and the game-feel literature
(Game Developer's *Juice it or lose it*, `ui-29`/`ui-30`; *Data Feel* `ui-18`, *Impact Feel*
`feedback-18`, *Designing Game Feel* `ui-34`) converge on one point: **feedback timing should be
wall-clock, not simulation-clock.** 3guotd's combat cues already honour this — measured at
≈250 ms at 1× and ≈300 ms at 3×, with `waveAge` confirmed to advance at wall-clock rate at all
three speeds — so the machinery is right and only the *salience* of the cue is wrong.

**Focus and thinking in TD.** Game Developer, *Optimizing Tower Defense for Focus and Thinking*
(Defender's Quest, `feedback-12` / `pacing-20`): *"Scrolling maps are the enemy of FOCUS"*;
status-effect icons should carry a tooltip naming the effect and its duration; enemies should have
floating health bars invisible at full health. 3guotd has no scroll and no hover — on a phone the
tooltip has to become a **tap-to-inspect** or a permanently-legible badge.

**Difficulty should be visible, not inferred.** Kim, CHI PLAY 2026 (`pacing-27`), argues that
difficulty is a *system* the player must be able to see, and that personalization which cannot be
perceived is indistinguishable from unfairness — *"the invisibility of current personalization is
itself a source of player distrust."* Hunicke, GDC 2005 (`pacing-25`), reaches the same place
from the other side: *"they will feel \"cheated\" if games are adjusted during or across play
sessions."* 3guotd escalates every continued-story level by +12% health and +8% speed
(`src/game/round.ts` -> `storySteps(round) * 0.12` and `storySteps(round) * 0.08`) and tells the player nothing — the only visible signal is a
`+N health` suffix on the wave name, which describes the wave, not the escalation.

---

## What this research does **not** answer

- **Human comprehension.** Every finding here is a measurement or a cited guideline. GF-020,
  GF-023, GF-025 and GF-053 all name human observation in their preventive methods, and this
  research cannot close them — only an uncoached phone playtest can. It can tell you what to look
  for when you run it.
- **Balance and economy.** Out of scope. GF-028 is verified and is not reopened here. §10 touches
  balance — whether waves should escalate in composition rather than cycle — but it stops at the
  interface: what the game currently claims versus what it delivers. The design decision is the
  owner's.
- **Which baseline the Enemy Types table should show.** §9 establishes that the table and the
  battlefield disagree. Which number the table should show is a call for the owner; the defect is
  the disagreement, not the choice of baseline.
- **Art direction.** The late-Han visual proposal already governs the art; this research only
  identifies where the art fails to *read* on a phone, and defers to the proposal for what it
  should look like.
- **Android packaging.** The Canvas work applies equally to the Capacitor build, but the
  Capacitor path is not exercised here.
- **Whether the four findings are now *closed*.** That is SimaYi's call after an uncoached session,
  not this document's.
