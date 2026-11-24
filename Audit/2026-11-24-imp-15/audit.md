# IMP-15 Changban Volley spacing

Review `AUD-043`, 2026-11-24. **Accept exact `3214feb9b7659b87a8342e05fb7a37ecfe0428a7` for web release.** GF-079 is verified closed. GF-080 is a pre-existing upgrade-dock issue outside the IMP-15 release finding. The candidate remains unpublished.

## GF-079 · In-flight saves mixed old attacker HP with the new wave

A valid Wave 1 Volley save produced by the pre-feature build restored on `bc7c2bf` with its original 4-HP infantry. The updated round looked up the new 2-HP maximum and spawned the next infantry at 2 HP. The HP display uses the looked-up maximum, so it could show old infantry as full after damage. The new formation was previously chosen solely by the mission and loadout.

`3214feb` uses a validated per-run marker for new Volley starts. Saves without the marker preserve their original formation, HP and timing through Retry and the next wave. The exact model regression passed. An independent production browser restore from a genuine pre-feature save showed the existing infantry and the next infantry at 4 HP each. Old and new manual saves also passed the permanent offline Retry and silver checks.

## GF-080 · Existing Faster fire upgrade glyph overflow

At 320 × 480 with 8 px side insets, an unupgraded Archer selected during combat shows Faster fire, its cost, and its cadence overflowing an 87.53 px card. The paint ranges extended 4.72 px above and 4.48 px below that button. The measurements were identical on pre-IMP-15 `231a28106b32947471fe23c24fb1cc66c3cb69f4` and exact `3214feb`. The unlocked purchase cards and the formation readout fit. The upgrade overlap reproduces on an ordinary Changban loadout, independently of the spacing change. Keep this open for the shared upgrade dock. Check text-range containment in active combat with the Speed and Pause controls present.

## Independent verification

- Exact-export model and build passed. All three offline trial suites passed. Compared every ordinary level formation and purchase choices in the model with the pre-feature build. Sampled Long Battle waves and the separate Volley Field Trial were also unchanged.
- Each layout spent 60 silver with one identical supporting Archer. At both 1× and 3×, baseline/Volley kills were 1/2 for the new clustered wave and 8/6 for the new spaced wave. Spacing the identical clustered roster and keeping its HP fixed reversed the result to 6/5. The small matched encounters gave both sides enough lives for all enemies to resolve.
- At 320 × 480 offline, an independent touch run built Volley at F2 and Archers at F3 and C8 with the initial 90 silver. It cleared all six Wave 1 enemies without leaking, automatically announced the spaced Wave 2, and carried 42 earned silver and the three towers. Retry rolled back a Wave 2 purchase while preserving all three towers, silver, lives, and the spaced cue. The purchase dock fit and the board stayed fixed with zero scrolling.

## Web release

Pushed and published exact commit `3214feb9b7659b87a8342e05fb7a37ecfe0428a7` to the private Tailscale site. The served standalone build and service worker matched the accepted release files byte for byte. All three campaign tower trial suites passed offline at 320 × 480, including the new Volley cues, auto-transition and old/new Retry checks. Field Trials save isolation and browser Back also passed on the live build. The live register showed Accepted, and Fengchu confirmed that Telegram delivered the playtest link to Edward.
