# IMP-12 Hanzhong Supply Pass wireframe

Review `AUD-038`, 2026-11-23. **Accept exact `3fa3a9ba91917e8b7c13129497da4ef8b84dd1e8` for private web playtest.** GF-074 and GF-075 are verified closed. The build remains unpublished.

## GF-074 · Fractional road coverage overflow

On `0b37041`, A1 and I13 displayed raw fractional values such as “0.9165151389911684 road tiles.” Text extended past the card. Pausing with the purchase dock open shifted the board 6.7 CSS px and expanded the 320 × 480 document to 325 × 488. The card used an unformatted geometric coverage length. `93af3c4` limits display precision to one decimal or uses “<0.1” and adds corner glyph checks. The exact final build passed those checks and the independent setup, running, and paused viewport checks. Keep fractional edge coverage in the phone fit test.

## GF-075 · The board covered the resource HUD

At 320 × 480, the narrow-screen heading selector overrode the prototype heading size. The heading wrapped and pushed the silver, life, and wave line below the 44 px header. A board cell received the hit test where the resources should have been. The final build increases the specificity of the prototype heading selector and adds a permanent HUD text-containment assertion. The rendered resource line now ends at y = 52.6 CSS px, inside the header and above the board at y = 63, in setup, combat, and pause. Verify rendered containment alongside text presence.

## Verification

- Exact-export `npm test`, `npm run build`, `scripts/test-map-preview.mjs`, and original `test:ux` passed. Hanzhong is outside the 30-level campaign. Its route has 23 unique orthogonally adjacent cells from C1 to G13, with road cells excluded from legal placement.
- For 60 silver, Archers at D3 and F5 stopped 3 of 4 infantry and 2 of 4 fast riders. An Archer at E10 and Drum at F9 stopped 2 infantry and 3 fast riders. The independently replayed outcomes matched at 1× and 3×. Adding the Archer at B2 let either layout clear all three waves at 1×.
- In the 320 × 480 Chromium run with 16 px top, 12 px bottom and 8 px side insets, Entry and Supply gate were visible on the complete wireframe. Adjacent and boundary taps selected the intended cells, and edge taps on Build, Refund, Start and Pause reached the intended controls. The board stayed fixed with zero scrolling and 44 px dock controls. [Paused phone capture](hanzhong-320-paused.png).
- The offline save probe created a valid Village Watch Level 2 save and checkpoint before entering Hanzhong. The preview left both records and campaign progress byte-identical. Return to main game restored the original Archer and 60 silver while offline. Physical phone play remains pending.

## Web release

Pushed and published the accepted commit to the private Tailscale site. The served standalone build and service worker matched the accepted release files byte for byte. The live offline map preview, continuity and browser Back suites passed. The live register showed Accepted, and Fengchu confirmed delivery of the verified Hanzhong preview link to Edward on Telegram.
