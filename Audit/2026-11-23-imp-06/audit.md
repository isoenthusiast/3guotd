# IMP-06 selected tiles and tower upgrades

Review `AUD-031`, 2026-11-23. **Accept exact `0ee0b8c716b0c4544c64772516b6a85a44ef289f` for private web playtest.** No blockers remain in the reviewed scope. The release was left unpublished.

- Built from an export of the exact Git object. `npm test`, `npm run build`, `test-battle-readout.mjs`, and `test:ux` passed. Offline Chromium at 320 × 480 verified separate adjacent tile taps, the available and occupied cues, useful versus out-of-range purchase cards, a stable board, and zero scrolling. A coordinate tap through the preparation ring selected the underlying tile without spending. Tapping the dock then bought an Archer on that same tile.
- The selected Yiling closure cue named the selected tile and disclosed the full refund. An additional offline probe selected the closing tile during paused preparation at 320 × 420 and 320 × 480. The readout stayed between the board and action row, the document fit the viewport, and selecting cost no silver.
- An independent offline touch probe bought Archer and Drum at 320 × 480 and checked base, range-only, power-only, and fully upgraded states. It confirmed the role and installed upgrades, the 18 and 27 silver branch prices, and glyph containment in the purchase buttons. Removing either fully upgraded tower returned all 75 silver and restored the original 90. Trials with no branches continue to use a role summary. Human understanding of the selected-tile cues and compact upgrade copy remains a playtest question.

## GF-065 · Upgrade card overflow, verified closed

Buying an Archer in `b9a1c78` produced 6 px of vertical document overflow at 320 × 480. Its range card combined the range preview and added role copy inside the fixed phone dock. `78554f9` kept the precise range effect in the title and reduced the visible copy, clearing the document overflow. In the base and range-upgraded Drum states, the wrapped Stronger slow heading and effect still extended up to 4.7 px beyond the button. The offline screenshot showed the heading above the top border and the last line below the bottom border.

`0ee0b8c` shortened both power effects without changing their values. Offline DOM text-range checks placed the Drum's power-card text inside the button in both affected states. Both upgrade orders for both towers returned a 320 × 480 document throughout the probe, and the permanent mobile suite passed.

Keep both upgrade orders and text-range containment in future short-phone dock checks. A zero-scroll document and a passing purchase touch can coexist with clipped button text. The final Drum text check was an independent probe alongside the permanent suites.

## Web release

Published the accepted commit to the private Tailscale site. The served standalone build and service worker matched the release files byte for byte. The live offline battle-readout, mobile touch and browser Back suites passed. The live register showed Accepted, and Fengchu confirmed delivery of the verified link to Edward on Telegram.
