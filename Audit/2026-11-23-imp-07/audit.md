# IMP-07 mixed-wave combat cues

Review `AUD-032`, 2026-11-23. **Changes required for exact `47fabb29f9676fce378ad6f72748ffa7477be293`.** GF-067 blocks acceptance for private web playtest.

## GF-067 · Close Volley recipients lose individual health readouts

At 1×, seed Changban Level 3 at wave 5, legally build one Volley at zero-based site 94 (row 11, column 5), and start the wave with its real formation and spawn timing. After 163 fixed ticks, the model records contact on runner 1 and cavalry 2. Their health is 6 and 7. They are 16.32 canvas pixels apart on the same horizontal road segment, about 6.4 CSS px at 320 × 480. The renderer anchors both 50 px health backgrounds at the same height, so the later one paints over the earlier one's pips. The two bracket pairs also crowd into the same small visual cluster beside the breach and evacuation labels. The player cannot follow both HP readings. The permanent cue test checks draw positions and that HP draws last. It does not check whether the final pixels of each bar remain visible after other bars are drawn.

The [standard-motion frame](changban-wave-5-standard.png) and [reduced-motion frame](changban-wave-5-reduced.png) show the same contact in a renderer harness at the measured 225.7 × 326 CSS px battlefield size. The probe seeded the wave index and ran normal spawning and combat. Earlier waves were bypassed. Keep this formation as a short-phone regression. Give overlapping recipients separate legible HP readouts and enough visual separation to associate their hits with the right attackers.

## GF-066 · Exact-build and contact-test failures, verified closed

The original `53088b4` failed TypeScript because a conditional spread did not satisfy the impact discriminated union. Its Volley assertion also sampled transient marks after expiry. `47fabb29` constructs explicit ordinary and trial impacts and checks the Volley at contact. Both `npm test` and `npm run build` passed from the exact commit export. Keep both checks in the exact-commit gate and assert transient cues at their intended lifetime.

## Other checks

- `scripts/test-trial-cues.mjs` passed on a local Vite server running the exact export. Independent Chromium frames at 320 × 480 used both the normal and OS reduced-motion preferences. At 1×, a seeded Changban cluster produced one damage each to three recorded Volley recipients and zero to the fourth. The Jing bolt reduced only the targeted veteran's health by three and the marker rendered on the impact lane. The permanent probe verified the exact canvas positions.
- Wuzhang's unselected Beacon visibly linked to Archer site 17. With a carried Drum, the in-range attacker's first-tick movement dropped from 0.08 to 0.0224 tiles while the out-of-range attacker stayed at 0.12. The static slowdown mark appeared only on the slowed enemy in the checked frame. Uncrowded health pips remained legible in both motion preferences.
- The screenshots exercise the shipped renderer with simulation states. Human recognition during uncoached live play and on physical hardware is pending.
