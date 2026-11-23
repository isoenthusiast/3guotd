# IMP-05 wave preview

Review `AUD-030`, 2026-11-23. **Accept exact `895f2633e69c9a776e11f0f399a0ad6a8f924fbc` for private web playtest.** Compared with the IMP-05 brief in the project register. No release blockers remain.

- Model and build passed from an export of the exact commit. Offline Chromium at 320 × 480 matched dock and Orders forecasts to actual Village Watch and Red Cliffs spawns at 1× and 3×. The preview disappeared after Start, and the purchase dock and board stayed in place. The offline touch, battle-readout and keyboard defense-planning suites passed.
- A supplemental offline Jing Level 5 probe restored setup for waves 6 and 7 with a legal Archer site, selected the Archer, and checked the readout against the board and action row at 320 × 420 and 320 × 480. Wave 7 displayed a mixed 19-attacker formation covering four types. With refund and upgrade text present, the readout cleared the board by 4.59 px and the action row by 1.59 px. The board did not move and document scroll stayed zero.
- The same fixtures compared the forecast with the first spawned enemy recorded in the saved round. Jing wave 6 correctly started at Entry 2 at 3×. Wave 7 correctly started at Entry 1 at 1×. The first-spawn checks used restored setup fixtures. Human interpretation of the compact abbreviations remains untested.

## GF-064 · Preparation forecast overlap, verified closed

The initial `37e6dd8` runtime failed the existing offline Yiling prep containment test. The new forecast shared a 44 px status row with countdown, closure and upgrade-shortfall text, causing the readout to overlap neighboring regions. The test-only `5f2074f` moved the planning assertion to the forecast's new location and carried the same runtime issue.

Exact `895f263` shortens the countdown and closure copy. The existing readout regression again passes at both 320 × 420 and 320 × 480 with a paused prep clock, refund action, closure warning, forecast and silver shortfall. Keep compound prep and wide mixed forecasts in dock-fit checks. Zero document scrolling alone does not establish separation between the board and controls.

## Web release

Published the accepted commit to the private Tailscale site. The served standalone build and service worker matched the release files byte for byte. The live offline spawn comparison at 1× and 3× and browser Back passed. The live register showed Accepted, and Fengchu confirmed delivery of the verified link to Edward on Telegram.
