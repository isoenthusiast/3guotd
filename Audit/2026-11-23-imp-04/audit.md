# IMP-04 Wuzhang Watch Beacon trial

Review `AUD-029`, 2026-11-23. **Accept exact `48e9bddccf066ff37b216ca05a57e5de7615bf3f` for private web playtest.** No release blockers found. IMP-03 was accepted in AUD-028.

- Model and build passed from an export of the exact commit. The legal Archer + Beacon run cleared Wuzhang Level 3. The Beacon is offered only on that level, selects the nearest Archer within an inclusive two tiles, and breaks ties by the lower board site. Shot tests at 1× and 3× verified 0.6-second supported reload against 1.05 seconds base and 0.75 seconds for Faster fire. The effect does not stack with another Beacon or Faster fire, and a Beacon alone deals no damage.
- The equal-silver model cases showed a practical placement tradeoff. Beacon beat a second Archer at a weak site, while a second Archer at a strong site could do better. Save, Retry and retirement refund passed. Campaign, Long battle, and legacy-save tests passed.
- Offline production Chromium passed `scripts/test-volley-trial.mjs` under `--beacon`, `--crossbow`, and the default Volley mode. The 320 × 480 touch dock passed with simulated safe-area insets, stable board and no document scroll. These tests covered direct and continued briefing entry, refund, manual restore, Retry and a carried Drum upgrade. Offline UX and browser Back suites also passed.
- A separate offline browser probe used native web Back and Continue through the Wuzhang Level 3 briefing. The distant tile preview said No link. At the inclusive two-tile boundary, the preview and built Beacon named Archer F2, and the canvas drew the dotted line to F2. I inspected the linked phone capture and checked glyph bounds for the linked and unlinked purchase cards and the linked Archer's upgrade labels. The follow-up Level 4 fixture retained the upgraded Archer, retired the Beacon for 30 silver, paid the 90-silver stipend and returned the standard dock without scrolling. The continuation probes used controlled victory fixtures.
- Whether a new player independently identifies the supported Archer and chooses when the Beacon is worth its site still needs uncoached playtest evidence. Android is outside the review.

## Web release

KongMing pushed and published the accepted commit. The live standalone build and service worker matched the release files byte for byte. The three tower trial modes, battle speed and browser Back passed against the private Tailscale URL, including offline touch at 320 × 480. The live improvement register showed Accepted, and Fengchu confirmed delivery of the playtest link to Edward on Telegram.
