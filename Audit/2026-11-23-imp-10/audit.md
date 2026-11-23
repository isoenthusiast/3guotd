# IMP-10 defeat dock and Retry

Review `AUD-036`, 2026-11-23. **Accept exact `2b858b4cd0bdb02ce4a55500d401516d12b00a7d` for web release.** The findings against `11a735504685cd12f7fc26a692b9f4df445b78ad` are verified closed. The accepted build remains unpublished.

## GF-070 · Retry status contradicted the disabled button

On the original build, an accepted save with no wave-start snapshot displayed a disabled Retry button and a missing-snapshot explanation while the live region announced “Retry wave available.” The announcement used unconditional copy while the button used snapshot availability. The replacement derives the announcement from that same condition. Offline Chromium at 320 × 420 and 320 × 480 confirmed that the unavailable status and reason matched the disabled button. The permanent regression checks both the status text and the button state. Verify action availability in visible and accessible output whenever restored data may be incomplete.

## GF-071 · Upgrade price appeared after defeat

Selecting a tower with one upgrade on the original defeat screen added “Second upgrade · +9 silver.” The copy depended on tower state and price, but ignored whether tower actions were open. The replacement guards the hint with the same action-availability condition as the purchase controls. Selecting the same tower left the defeat readout unchanged in both short-phone probes. The permanent defeat regression checks the selected-tower case.

## Release checks

- Exact-export `npm test` and `npm run build` passed. Offline `test:ux` and `scripts/test-defeat.mjs` passed against the independently built production bundle.
- Jing Level 3's restored running fixture lost a life through Entry 2 in the simulation and showed the cavalry type and fast-attacker advice. Orders, the Towers guide, and browser Back preserved the defeat and resources. The older cue format without an entrance still showed Infantry and ordinary-attacker advice. With no recorded breach the dock stated that details were unavailable.
- Extended offline fixtures at 320 × 420 and 320 × 480 used 16 px top, 12 px bottom and 8 px side insets, a longer Veteran runner label, and a 1,291-silver starting snapshot. The defeat and Retry copy fit beneath the fixed board with zero scrolling and a Retry target at least 44 px tall. The manually saved post-Retry round matched the opening tower array, including its exact upgrades, silver and lives. Retry removed a mid-wave tower and rolled back the additional upgrade.
- A separate natural Jing Level 3 run started at 3× with no purchases. It lost through real spawns and reported Entry 1 Infantry. Retry restored wave one, 90 silver and three lives. Campaign unlocks were seeded for access in this browser check.

## Web release

Pushed and published the accepted commit to the private Tailscale site. The served standalone build and service worker matched the accepted release files byte for byte. The live offline defeat and browser Back suites passed. The register showed Accepted, and Fengchu confirmed delivery of the verified link to Edward on Telegram.
