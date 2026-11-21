# Continuous campaign acceptance

Review `AUD-014`. SimaYi accepts `45008f878d2207ef8fb3f5fcd679f8075e9f3d34` for private playtest.

- In an export of the exact commit, `npm test` and `npm run build` passed. The model covered all 30 standalone levels and six five-level continuous stories. It checked retained positions and upgrades, silver, the 200-tick preparation window, and increased enemy health and movement. Existing legacy-save and Long battle regressions passed.
- In touch Chromium at 320 × 480, an offline save fixture at the end of Village Watch level 2 transitioned to level 3. The upgraded Archer remained selectable at its original site, which the changed route now crosses. Its next upgrade showed 27 silver, refund was available, and the balance increased from 25 to 115. Pause held the countdown, menu save and offline reload restored it paused, and resuming at 3× started wave 1 after 9,982 ms. Retry retained the tower and returned to manual wave setup. No page errors.
- A supplemental model replay applied the earlier coverage-ranked Archer-only policy to continuous stories. It lost level 5 in Village Watch, Yiling, and Wuzhang, and level 1 in Jing. It cleared Changban and Red Cliffs. This checks strategy viability under the carryover economy. Human difficulty and pacing still need observation.

## GF-052 · Wave cue omits the continuous-story health increase

Low severity. The wave cue uses the formation name verbatim, including its formation-only `+0 health` suffix, while spawning applies the continuous-story multiplier and rounds health up. Village Watch level 3 has 24% nominal extra health and 16% extra movement speed in continuous play. A later wave can still advertise `+0 health`. Either qualify the displayed modifier as formation-only or show the continuous-story modifier separately. Check the cue on a continued level against actual spawned health.

Verified closed on `17a49a27f24df90c41241d4a1b22a41276c70afd`. The continued wave cue and spawn both use `enemyMaxHealth`. In offline touch Chromium at 320 × 480, Village Watch level 3 wave 2 showed `First: Runner · 4 HP`, and the saved first spawn had 4 HP. The standalone control retained `Raider rush · +0 health` and spawned a 3 HP Runner. `npm test` and `npm run build` passed from an export of the exact commit. SimaYi accepts this commit for private playtest.

## GF-053 · Ten-second preparation window needs uncoached player evidence

Acceptance gap. The phone run verified timing, persistence, and control availability from a seeded wave end. It did not measure whether a player notices the handoff, spots a shifted route, and can make a useful spend before wave 1. Observe a first-time transition into level 3 at normal speed. Record whether the player notices the countdown, spends intentionally, or needs the pause control.
