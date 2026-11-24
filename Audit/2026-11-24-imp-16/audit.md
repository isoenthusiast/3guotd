# IMP-16 Archer purchase and upgrades

Review `AUD-044`, 2026-11-24. **Accept exact `4c4b051346e9f2b8a767854dee7a90cbd81f4bc9` for web release.** GF-080 is verified closed. The build remains unpublished.

## GF-080 · Faster fire glyph containment

The original 87.53 px combat card wrapped the upgrade title and cadence across too many lines for the fixed 54 px dock. The final build shortens its visible effect and uses smaller upgrade headings on narrow screens. The independent production probe used the same 320 × 480 safe-area geometry and active 3× and Pause controls. Faster fire at 18 and 27 silver cleared the top border by 8.13 px and the bottom border by 8.38 px. Longer range fit at both prices. The two branch orders charged 18 then 27, and the 9-silver surcharge was visible before the second purchase. The 30-silver Archer card showed which section of road it would cover. The dock remained still with zero scrolling.

The linked Beacon kept the visible and accessible “0.75s unlinked” qualification on the 27-silver branch. Both Drum upgrade effects also fit with combat controls present. Keep the combat glyph checks alongside touch dimensions and viewport geometry.

## Balance and regressions

- Model and build passed from the exact export. The game rules in `src/game` match the prior accepted release. The only change from `54d004d` to `4c4b051` updates the keyboard test's expected Retry summary punctuation. Costs, effects and runtime from `54d004d` are identical across those two candidates. The exact final keyboard defense-planning, mobile UX and offline Beacon trial suites passed.
- Independently reran the same opening Archer with a 30-silver decision purse on the real Village Watch and Jing maps, with their first formations and legal placements. At both 1× and 3×, the kills for no purchase / Longer range / Faster fire / second Archer were 0/2/0/0 on the bend, 0/0/3/0 on the firing lane, and 0/1/1/3 when a second firing point was available. The two upgrades cost 18 and left 12 silver. The new Archer used all 30. The controlled fixtures give 20 lives to let all attackers resolve. Repeating with three lives preserved the same kill ranking and every sparse layout lost. The comparison establishes the relative value of each choice in these fixtures.

## Web release

Pushed and published exact commit `4c4b051346e9f2b8a767854dee7a90cbd81f4bc9` to the private Tailscale site. The served standalone and service worker matched the accepted build byte for byte. Live mobile UX passed offline across the phone matrix, including combat upgrade label containment, stationary board and zero scrolling at 320 × 480. The keyboard Retry and Beacon trial checks passed on the live build. The register showed Accepted, and Fengchu confirmed Telegram delivery to Edward.
