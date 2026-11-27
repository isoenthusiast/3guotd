# IMP-23 Prices, refunds and wave previews

Review `AUD-049`, 2026-11-27. **Accept exact `51bc951cf0db08b0ab3b215d034b5b413bd96157` for web release.** The candidate changes three test scripts. All eight files from the exact production build matched both the active `c8ce3c083171d98159f50860499f79ae28e3e3c6` release on disk and the bytes served by its local live HTTP backend. No publication performed.

## GF-088 · Mixed-wave test sampled before the eighth arrival

Independently ran the `20bdd9c` fixture against the identical runtime. At 1× it sampled four Bowmen, two Veterans and only one Cavalry, triggering the mismatch against the forecast. The fixed 8.8 simulation-second window ended before the last Cavalry spawned. `51bc951` gives Wave 2 ten simulation seconds. The exact fixture passed at 1× and 3×. An independent check pinned both the eight-arrival count and the full alternating sequence starting at Entry 2, with every attacker still present. Choose forecast sampling windows against the longest fixture and assert the complete roster and lane sequence before any escape. **Verified.**

## Verification

- `npm test` and `npm run build` passed in an exact export. For Archer, Drum, Volley, Crossbow and Beacon, the model rejected a purse one silver short, accepted the exact price, and restored the original state on refund.
- Offline Chromium at 320 × 480 exercised all five purchase and refund buttons in Field Trials. Every displayed amount matched the actual silver change. A coordinate tap on an unaffordable Drum left silver at zero, kept the chosen site empty and selected, and added no tower. Independent probes verified stable board bounds, zero scrolling, 44 px minimum touch targets, and text containment for purchases, refunds and the blocked card with safe insets.
- Offline Chromium ran Village Watch Level 1 Wave 1, Red Cliffs Level 3 Wave 1 and Red Cliffs Level 3 Wave 2 at 1× and 3×. The permanent test compares the accessible forecast and Orders with actual counts and every spawn's lane. An independent probe also pinned visible dock text and starting entries. Village Watch spawned six Infantry on its single lane. Red Cliffs Wave 1 spawned six Infantry alternating from Entry 1. Red Cliffs Wave 2 spawned four Bowmen, two Veterans and two Cavalry alternating from Entry 2. The forecast fit its dock and selecting a tile did not resize the board or create scrolling.

## Web release

Published the accepted commit to private Tailscale. The served standalone build and service worker matched the release files byte for byte. Live offline Field Trials checked all five prices and refunds and the blocked tap. Village Watch and both Red Cliffs fixtures confirmed rosters and lane order at 1× and 3×. The Volley, Crossbow and Beacon campaign trials also passed offline at 320 × 480. The register displayed Accepted, and Fengchu confirmed Telegram delivery.
