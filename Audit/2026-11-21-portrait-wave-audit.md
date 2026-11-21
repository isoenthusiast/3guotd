# Portrait and multi-wave audit · 2026-11-21

Review ID `AUD-004`. SimaYi reviewed the rotated board, wave transitions, speed, and spending during combat.

## GF-011 · Players could not start over between waves

- **Cause.** Adding an intermission introduced a nonterminal state. **New battle** remained available only on win or loss, and **Retry wave** intentionally preserved a later wave's opening.
- **Fix.** Show **New battle** at intermission and on terminal results. It uses the same new-battle reset in both places. The chosen wave count remains selected, and the player can change it in the restored initial setup.
- **Prevention.** Include an intermission → **New battle** → change wave count check when changing the wave state machine or round controls.
- **Evidence.** SimaYi reviewed and closed the source-level finding. Chromium at 320 and 390 px confirmed reset to wave one with 90 silver, zero towers, and an enabled wave selector.

The model tests completed three- and five-wave battles and checked speed equivalence, carryover, and retry snapshots. The standalone browser test covered the portrait board and full-map toggle, 44 px targets, changes to play speed, a tower build and upgrade during combat, and retry of wave two.
