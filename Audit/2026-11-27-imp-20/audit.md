# IMP-20 First defense guidance

Review `AUD-048`, 2026-11-27. **Accept exact `c8ce3c083171d98159f50860499f79ae28e3e3c6` for private web playtest.** Compared with published baseline `fd6d49dbfd8a9c2122c2e5c6819ee80a0869d617`. No publication performed.

## GF-084 · Off-site purchase advanced the guide

The initial candidate `ee4dba3` inferred completion from the presence of any Archer. This allowed an off-site purchase to replace the marked-site instruction with Start. `c4a902b` advances the tutorial only when the Archer purchase at the marked site changes the round. The exact-tip offline test confirmed an off-site Archer costs 30 silver and leaves the marked-site cue active. Keep negative cases for both the target and the success of the action in step-by-step guidance tests. **Verified.**

## GF-085 · Start bypassed unfinished guidance

On `c4a902b`, independent offline touch at 320 × 480 started combat with 90 silver still in the purse and removed the guide while it was asking for marked-site selection. The Start handler dismissed any active guide without requiring a completed purchase or explicit Skip tips. `6e0ac49` disables Start during the selection and purchase cues. An independent physical-coordinate Chromium touch on disabled Start left the cue, setup and 90 silver intact. The permanent offline test confirms Start unlocks after the marked Archer purchase or after Skip tips. Cover stage order and the explicit exit together. **Verified.**

## GF-086 · General phone fixture used an arbitrary site before Start

On `6e0ac49`, the general phone suite timed out tapping disabled Start at 320 × 480. Its purchase loop chose the first useful tile without completing the new marked-site step. `c8ce3c0` changes only that test to follow the mark when present. The full offline phone suite passed with the exact test file and unchanged production bundle. Keep fresh-run regression fixtures aligned with new prerequisites. **Verified.**

## Verification and remaining playtest evidence

- The `6e0ac49` production build and model suite passed in an isolated export. Verified `c8ce3c0` changes only `scripts/test-mobile-ux.mjs` and reran it against that identical runtime. The full suite passed, including 320 × 420 guide Back, 320 × 480/568/640/740, and both 390 × 740 inset configurations. The separate defense-planning keyboard test passed with upgraded names in the tower summary.
- Offline Chromium at 320 × 480 with 16 px top, 12 px bottom and 8 px side insets confirmed marked selection spends nothing, a single marked Archer purchase costs 30 silver, the guide proceeds to Start, and the board bounds and scroll extents stay fixed. After three alternate Drum purchases exhausted the purse, a coordinate touch on the disabled marked-site Archer card left the purchase cue and zero silver intact. Manual restore, Long Battle and Field Trials showed no IMP-20 cue. No game rules, save format or storage code changed.
- **GF-087 remains open.** There were no participants for the uncoached comparison of first-purchase time and wrong taps against `fd6d49d`. Chromium established the interaction behavior. Human evidence is required to conclude that onboarding improved and does not gate acceptance for this private web playtest.

## Web release and next check

Published the accepted commit to private Tailscale. The live standalone and service worker match the staged release byte for byte. Live offline opening-guide, keyboard defense-planning and browser Back tests passed. Fengchu confirmed the Telegram handoff.

For GF-087, use fresh profiles and assign new players to the published baseline or the candidate. Give both groups the same task of setting up their first Archer, without pointing to controls. Record elapsed time from the interactive battle screen to the first successful Archer purchase and count taps that do not progress toward it. Preserve the original release as the baseline. Record the comparison before claiming a player benefit.
