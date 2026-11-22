# Tower defense design references

GAME FROG’s [TOP 20 BEST Tower Defense Games for Android and iOS | 2026](https://www.youtube.com/watch?v=76Zm1yxgaHc), published 18 August 2026. Notes use the creator’s chapter timestamps and YouTube’s auto-generated English captions, retrieved 21 November 2026. Game names follow the chapter labels. Mechanics below are the narrator’s descriptions. The lessons are interpretations for 3Guo TD. The captions do not establish how a mechanic feels to play or how clearly the footage presents it.

## What the video covers

| Rank and chapter | Game | Design described |
|---|---|---|
| 20 · [0:25](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=25s) | Kingdom Rush Tower Defense | Tower abilities and trainable heroes support defense across varied terrain. |
| 19 · [1:02](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=62s) | Empire Warrior: Tower Defense | A tower deck, heroes, and runes shape the player’s options across an offline campaign. |
| 18 · [1:35](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=95s) | Raid Rush: Tower Defense | Random tower draws force adaptation. Path cards let players shape the enemy route. |
| 17 · [2:04](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=124s) | Bloons TD 6 | Three upgrade paths per tower, heroes, and themed map sequences. |
| 16 · [2:41](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=161s) | Duck Survival | A shooter and defense hybrid with daytime preparation and nighttime survival. |
| 15 · [3:14](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=194s) | Kingdom Rush Frontiers | Specialized upgrades, distinctive enemies, and alternate challenge modes. |
| 14 · [3:49](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=229s) | Clash of Critters | Collectible units evolve and combine in formations against waves. |
| 13 · [4:13](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=253s) | Plants vs. Zombies | Limited sun and seed choices pit specialized plants against different zombie behaviors. |
| 12 · [4:53](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=293s) | 2112TD: Tower Defense Survival | Passive turrets coexist with timed air strikes, charged attacks, and a tactical drone. |
| 11 · [5:30](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=330s) | Ancient Planet Tower Defense | Open-field placement and freely redistributable improvements. |
| 10 · [5:59](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=359s) | Arcane Arena: Tower Defense | Two players defend against identical waves using decks, path choices, and disruption cards. |
| 9 · [6:33](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=393s) | Battle Strategy: Tower Defense | Players allocate resources among turret upgrades, minefields, and active abilities. |
| 8 · [7:01](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=421s) | Wild Castle: Tower Defense | Castle defense with hero combinations, leveling, and auto-battle. |
| 7 · [7:27](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=447s) | Tower Defense: Towerlands | Fortress upgrades, army training, and territorial capture extend play beyond a defense round. |
| 6 · [8:04](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=484s) | Fantasy Tower: Castle Defense | Three unit classes counter one another, with different enemies and bosses across biomes. |
| 5 · [8:40](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=520s) | Plants vs. Zombies 2 | World-based campaign, seed-packet progression, and score competition. |
| 4 · [9:11](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=551s) | Mecha Fortress: Robot War | One mobile fortress with configurable weapons, recruitable pilots, and idle progression. |
| 3 · [9:44](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=584s) | Kingdom Rush Vengeance TD Game | A villain’s campaign shifts the player’s perspective and gives the defense a different cast and arsenal. |
| 2 · [10:10](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=610s) | Tower War – Tactical Conquest | Short capture missions turn a swipe into a tactical commitment. |
| 1 · [10:40](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=640s) | Kingshot | Town survival, job allocation, and alliances surround the defense layer. |

The [closing segment](https://www.youtube.com/watch?v=76Zm1yxgaHc&t=671s) asks viewers which games they have played and what the list missed.

## What 3Guo TD can learn

- **Make different placements solve different problems.** Raid Rush turns the route into a decision. Ancient Planet gives the player more freedom around a route. Our board already makes site choice affect the outcome. These examples raise a useful distinction between choosing where to defend and choosing where the fight happens.
- **Give the enemy a behavior the player can read.** Plants vs. Zombies and Fantasy Tower illustrate two ways to make threats distinct: an enemy can break a familiar rule, or it can require a different counter. A player should be able to point to the attacker that caused the loss and explain what made it dangerous. Our health bars and impact effects already answer whether a hit landed. Threat variety would ask a different question about why some hits were insufficient.
- **Use scarcity to create a tradeoff.** Sun, tower draws, and branching upgrades create different kinds of pressure. A known budget rewards planning. A random draw rewards adaptation. An upgrade branch forces commitment. These mechanics may look interchangeable in a feature list, but each teaches a different skill.
- **Separate preparation from intervention.** Duck Survival makes the rhythm explicit with day and night. 2112TD gives the player meaningful actions after combat starts. Our setup-and-wave loop leaves room to discuss whether watching a placement pay off is satisfying on its own or whether a wave should include a decision under pressure.
- **Remove friction from experimentation.** Ancient Planet’s refundable improvements and Tower War’s short missions both make another attempt easier. The comparable question for our Retry flow is whether a player can form a hypothesis, change one thing, and quickly see the effect.
- **Consider what the Three Kingdoms setting communicates through play.** The perspective switch in Vengeance and the governor role in Kingshot give players different responsibilities. For 3Guo TD, the setting could inform what a player is defending and why a decision matters. The references illustrate a way to think about identity without supplying our story, units, or art.

## Opening question for the design conversation

When a player retries 3Guo TD, what should they most want to rethink: **where to defend, which defenders answer the threat, or when to intervene during the wave?**

## Follow-up reference

[Reality Escape video and UI/UX notes](references/tower-defense-ux/README.md) contains timestamped screenshots, a comparison with the live portrait build, and recommendations for clearer purchases, route context, and combat feedback.

## Interface findings from phone measurement — 2026-11-22

[Mobile TD interface research](references/mobile-td-design/README.md) measures the live portrait build in headless Chromium at six phone viewports and reads the result against Apple HIG, Material 3, WCAG 2.2, NN/g and the Game Accessibility Guidelines. Its 202 primary-source captures sit in `references/mobile-td-design/sources/`.

The priority here is **interface**: what the player sees on a phone, and what must change for them to read it.

> **Source note.** Everything below rests on measurement of the running build and on the 202 primary-source captures in the research pack. The GameFrog video summarised above is a *top-20 list* — useful as orientation, but it is not evidence for any of these findings, and none of them depend on it.

- **Render the board at device resolution.** The canvas backing store is fixed at 576 × 832 (`src/main.tsx` -> `width={columns * tile}`) whatever the device, so the battlefield is upscaled **1.23×–2.01×** on the tested phones while the header and tray around it stay sharp. This is the root cause of soft enemy sprites, mushy Drum pulses and blurred Entry/Village labels — and it taxes every board-reading task at once.
- **The build tile is 0.62–0.71 cm.** Below NN/g's 1 cm × 1 cm physical floor on every device tested, and 0.39×–0.44× a fingertip. The internal tile is already 64 px — about 1 cm — so the phone *layout* is what scales it down. A layout change (fewer columns, pannable board, or tap-to-zoom), not a scale change.
- **The build mound is 1.2 × 0.5 mm.** `.useful-site::before` (`src/style.css`) marks the 40 road-adjacent sites, but at that size it reads as ground texture, and the other 57 buildable cells carry no mark at all. GF-034 verified this cue at 320 × 480; it does not survive a modern viewport.
- **The preparation clock never appears on the first mission.** `levelPrepRemainingMs` (`src/game/round.ts`) is written only by `prepareNextLevel()` (`src/main.tsx`), which runs on the *continued story* path. A first-time player sees a "Start wave" button and no clock — so the one thing GF-053 asks to observe does not exist yet.
- **The Drum's cue is colour-only.** Cyan pulse, cyan tether, cyan ring — all of it, on a canvas that is itself upscaled 2×. WCAG 1.4.1 wants a non-colour channel; a status badge plus a distinct hit sound would carry it.
- **An un-affordable card dims to `opacity: .76` and puts the shortfall on the status line.** The status line is below the board, so a player looking at the card is not looking at it. Put "Need 12 more silver" on the card.
- **The game honours no motion preference.** `prefers-reduced-motion` appears nowhere in `src/`, and the Drum's cyan pulse — a ring that expands outward from the tower every 0.56 s — runs for the whole wave, measured at ~12 s continuous over four runs. MDN names scaling animations as vestibular motion triggers. The Pause button already satisfies WCAG 2.2.2's pause mechanism; what is missing is the OS-level motion preference. One `matchMedia` call and one branch in the Drum's draw path: draw the slow as a steady ring instead of a pulse.
- **The Enemy Types guide shows the wrong numbers.** The table renders `attackers[kind].health` and `.speed` (`src/main.tsx` -> `<td>{attackers[kind].health}</td>`) — the base values — while the board uses `ceil((base + healthBonus) × (1 + storySteps × 0.12))` for health (`src/game/round.ts` -> `export function enemyMaxHealth(round: Round, kind: AttackerKind): number`) and `base × (1 + storySteps × 0.08)` for speed (`src/game/round.ts` -> `storySteps(round) * 0.08`). On a continued story at level 5 the guide reads Infantry 4 HP / 1.60 tiles/s and the battlefield delivers 6 HP / 2.11; a Commander reads 10 and arrives with 15. Every enemy type is wrong on every level past the first. This is a truthfulness defect, not a legibility one, and it is invisible to every other finding because nothing about the table's appearance is off. Fix: render the table from `enemyMaxHealth(round, kind)` for the player's current level.
- **Nothing tells the player what the next wave contains.** `waveFormation()` (`src/game/round.ts` -> `export function waveFormation(number: number): Formation`) picks the enemy list by `formations[(number - 1) % formations.length]`, and `formations` holds exactly three entries — so across a 40-wave session the player meets three compositions, repeated, getting numerically harder, with every fifth wave relabelled "Breakthrough" for a cavalry column. The mission path rotates a four-enemy list per chapter the same way (`src/game/campaign.ts` -> `threats[chapter][enemy % threats[chapter].length]`). The wave name carries only a health delta (`"Runner rush · +8 health"`), so the game advertises escalation it does not deliver. Doucet's Defender's Quest pass names what the player needs before spending silver: *"what type of enemy will spawn, how many, at what strength level, at what spawn locations."* Fix: a next-wave preview in the prep header, built from `roundFormation()` and `enemyMaxHealth()`.

The four live audit findings — GF-020, GF-023, GF-025, GF-053 — are **acceptance gaps**: the code fix has landed for each, and what remains is the uncoached human observation their preventive methods call for. The research cannot close them, but it says what to watch for.

The research also carries the **protocol** for that session: five first-time players (NN/g's qualitative number), what to observe for each of the four findings, what not to prompt, and why to test the first mission only rather than a long run.
