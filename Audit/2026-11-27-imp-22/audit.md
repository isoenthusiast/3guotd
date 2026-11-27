# IMP-22 Tower roles and linked Field Trials

Review `AUD-050`, 2026-11-27. **Accept exact `5ae12b86455d111e7b73513cf780a5d59c18ebca` for private web playtest.** IMP-14 is accepted. No publication performed.

## GF-089 · The original test compared storage before the checkpoint settled

On the `88379c3` test, the application had already registered its periodic checkpoint timer before Playwright installed its clock. The test's 1.1 simulated seconds therefore did not settle the actual timer. I reproduced the storage comparison failure on the identical runtime. The changed checkpoint belonged to the original Village Watch run and recorded its first Infantry and 0.4 seconds of progress. The final test installs the clock before reloading the App. Its settled checkpoint remains byte-identical through the trials. Install the clock before the app registers periodic callbacks in tests that assert persisted state. **Verified.**

## Verification

- Matched the Damage, Slowing and Support guide entries to the shared tower prices, targeting and availability rules. Archer shoots one target and is available in campaign, Long Battle and every Field Trial. Drum slows without damage and uses the strongest overlapping effect. Volley hits up to three clustered enemies, Crossbow targets the highest HP in range, and Beacon links to the nearest Archer within two tiles. Trial locations and unlocks matched Changban 3 and Long Battle Wave 2 for Volley, Jing 5 and Wave 4 for Crossbow, and Wuzhang 3 and Wave 6 for Beacon.
- In a clean offline Chromium phone profile at 320 × 480 with 16 px top, 12 px bottom and 8 px side insets, the five guide links opened the appropriate practice loadouts. Beacon worked with no campaign clears. Each 30-silver guide price matched its purchase card and the deduction. The title-menu Field Trials entry retained its Menu return.
- The permanent test and an independent probe covered visible Back and browser Back/Forward, including re-entering Beacon through Forward. The original Village Watch Archer stayed selected, the purse stayed at 60 silver, and the battle returned to the previous paused or playing state. Practice purchases and a running trial made no changes to original local storage. The original and practice boards retained their respective bounds, and linked trials matched title-menu trial geometry and fit without scrolling.
- The isolated `88379c3` production build and model suite passed. The final tip changes only the fixture's clock setup. Ran its exact guide test and the Field Trials, system Back and guide comfort suites against the identical runtime.

## Web release

Published the accepted commit to private Tailscale. The live standalone and service worker matched the staged build byte for byte. The offline Towers guide, Field Trials and system Back checks passed against the live build. The register showed Accepted. Fengchu's relay claimed the playtest link and reported an uncertain send. The claim remains available for delivery review.
