# IMP-13 Long Battle tower unlocks

Review `AUD-040`, 2026-11-24. **Accept exact `a5b2c6c152c73ae0136fcc2166c57e613e4fd90c` for web release.** GF-076 and GF-077 are verified closed. The build remains unpublished.

## GF-076 · An unlock masked a simultaneous gate breach

On `2f709a5`, an offline restore of the last Veteran runner just before the Long Battle gate produced a real breach and advanced to Wave 2. The saved round showed Entry 1 and two lives, but both the visible dock and the live region showed only the Volley unlock. The unlock branch replaced the existing breach text. The final build draws the two signals together, and the live region includes the attacker, entrance and remaining lives. An independent 320 × 480 safe-area probe reproduced the same transition, confirmed both messages and no scroll, and measured the combined text inside the status row. The permanent test now exercises that overlap. On unlock waves the unlock occupies the ordinary formation teaser slot. Orders still shows the formation.

## GF-077 · One saved projectile could carry incompatible tags

On `2f709a5`, separately validating each tag let a single shot carry both `heavy` and `volley` once both towers were unlocked. Manual restore and the validated checkpoint accepted the record, and combat silently treated it as a heavy bolt. `2404374` rejects that combination while permitting distinct projectiles of both types in the same round. Independent decoder checks verified that manual restore rejects the contradictory record and that checkpoint validation preserves the existing good snapshot. The permanent model regression passed on the final build. Verify both legitimate coexistence and contradictory per-record traits whenever a new saved variant is enabled.

## Release checks

- Independently exported and built the exact commit. `npm test`, `npm run build`, and the offline 320 × 480 Long Battle suite passed. A clean profile reached Wave 6 using actual combat, bought Volley, Crossbow and Beacon at the expected 2/4/6 unlocks, and kept Archer in the first slot. The second slot retained its choice until changed in Orders. Already placed towers survived slot changes. The two cards fit and the board stayed fixed.
- Save and checkpoint preserved the slot and mixed towers. Retry restored the wave opening and retained the selected slot without replaying the unlock. A pre-feature Long Battle save restored with Drum selected and wave-derived choices. The clean run did not create a campaign clear.
- All three campaign trial production checks passed offline. An independent Chromium renderer probe used Long Battle with all three trial towers on the board while Drum occupied the second slot. Distinct Volley and heavy impacts rendered in both motion modes, the Volley bracket mapped to its separated HP row, and the Beacon link remained visible without selection. The proposed Beacon link appeared only when Beacon held the build slot. Assistive-technology speech on a physical phone was outside this verification.

## Web release

Pushed and published the accepted commit to the private Tailscale site. The served standalone build and service worker matched the accepted release files byte for byte. The live offline clean-profile Long Battle run, all three campaign trials, and browser Back passed. The register showed Accepted, and Fengchu confirmed delivery of the verified link to Edward on Telegram.
