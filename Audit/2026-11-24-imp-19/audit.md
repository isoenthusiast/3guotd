# IMP-19 Field Trials support cues

Review `AUD-047`, 2026-11-24. **Accept exact `fd6d49dbfd8a9c2122c2e5c6819ee80a0869d617` for web release.** GF-082 and GF-083 are verified closed. The build remains unpublished.

## GF-082 · Beacon cue understated the actual reload

On `f0d64a6`, the cue displayed the assigned 0.60 s cooldown. The fixed 50 ms simulation steps took 13 substeps to reach zero because floating-point subtraction left a positive remainder after the twelfth. Actual linked launches were 0.65 simulation seconds apart at 1×, 2× and 3×. With no link, successive launches were 1.05 seconds apart and no support cue appeared.

`e7c4313` derives availability from the same cooldown decrement as combat without changing it. On the exact final build, I independently compared successive real launches with both displayed values at all three speeds. The affected F2 Archer matched the displayed site, and an out-of-range Beacon produced no cue. Keep actual interval checks alongside cooldown-value assertions.

## GF-083 · Unlinked Beacon purchase text overflowed

At 320 × 420 and 320 × 480 with safe insets, the long unlinked Beacon hint wrapped inside the 87.53 px card, pushing glyph bounds about 4.72 px above and 4.48 px below the button. The final build uses the visible hint “No link” and the accessible description “No Archer in reach.” The permanent test and independent edge and near-entry probes verified glyph containment for all four practice purchase cards at both heights. Keep the unsupported state in phone fit tests whenever adding a shared dock control.

## Verification

- Exact-export model and production build passed. The permanent Field Trials browser suite passed offline at both heights, covering both supported rates, reduced-motion markers, Reset, and campaign and Long Battle save isolation. Independent viewport probes used 16 px top, 12 px bottom and 8 px side insets. The controls stayed at least 44 × 44, the board stayed fixed, and the page did not scroll with the dock open.
- At all three speeds, the independent model probe matched the Drum cue to the marked attacker's actual last 50 ms movement, including a mixed group with some attackers outside and periods with no slowed unit. Infantry showed 1.60 → 0.45 tiles/s after rounding. A separate 3× reduced-motion browser check matched the static F2 and attacker-number marks to the cues and confirmed the bitmap and text stayed fixed during Pause. Reset removed the cue and restored 90 silver.
- Sampled combat state through 240 ticks per speed against published baseline `2c05fb8` in the existing practice choices, campaign, Long Battle and Hanzhong ambush. The shared simulation results matched. The independent Hanzhong offline regression also passed. Physical phone and spoken screen-reader behavior were outside this test.

## Web release

Pushed and published exact commit `fd6d49dbfd8a9c2122c2e5c6819ee80a0869d617` to private Tailscale. The served standalone build and service worker matched the accepted release bytes. The live offline Field Trials suites passed at 320 × 420 and 320 × 480, including support rates, reduced-motion markers, fixed board, Reset and save isolation. Hanzhong and browser Back also passed on the live build. The register displayed Accepted, and Fengchu confirmed Telegram delivery to Edward.
