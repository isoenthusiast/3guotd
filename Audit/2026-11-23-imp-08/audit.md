# IMP-08 reusable equal-silver tower balance encounters

Review `AUD-034`, 2026-11-23. **Changes required for exact `3dcdc83d25503c3b9fa88f496ffbf7db8da7b978`**. GF-069 blocks the requested inclusive Drum boundary regression. The exact build is unpublished.

## GF-069 · Drum boundary fixture is already inside range

The fixture starts an enemy at `sqrt(range² − 1)` on the road one tile to the right of the Drum. In the model's distance calculation, the result is `2.1999999999999997`, and the configured range is `2.2000000000000002` at full floating-point display precision. An exclusive comparator still slows the enemy. The independent audit changed only the Drum comparator from inclusive to exclusive in a temporary exact export. All of `checkTowerBalance` still passed, including the boundary assertion.

Use a legal axis-aligned fixture whose computed distance equals the configured range exactly. For example, put the Drum at zero-based (1, 3) and start the enemy at route progress 4.2, which gives road point (3.2, 3). Verify equality before checking first-substep movement at 1× and 3×. The audit confirmed this geometry reaches an exact equal distance and the exclusive comparator rejects it. Preserve the adjacent just-outside check. A mathematical construction can round across a floating-point branch, so test the numeric equality actually seen by the model.

## Verified evidence

`npm test` and `npm run build` passed from the exact Git export. The only tracked changes are the two model test scripts. The candidate and its parent build produced the same eight web files byte for byte, including the standalone and service worker.

The harness supplies a one-wave copy of the mission and the same seeded attackers, HP, starting progress, route, initial gate lives and budget to both sides in each comparison. It spends the entire budget before combat. Volley changes spacing while holding the first starting position fixed. Crossbow changes placement for both sides to change road exposure. Beacon keeps the lead Archer and trial layout fixed while varying the quality of the baseline's second site. This is seeded model evidence for those six conditions.

| Comparison | Silver per layout | Baseline leaks / kills / lives | Trial leaks / kills / lives |
| --- | ---: | ---: | ---: |
| Volley, packed | 30 | 1 / 2 / 2 | 0 / 3 / 3 |
| Volley, spaced | 30 | 2 / 1 / 1 | 2 / 1 / 1 |
| Crossbow, long exposure | 30 | 1 / 0 / 2 | 0 / 1 / 3 |
| Crossbow, short exposure | 30 | 1 / 0 / 2 | 1 / 0 / 2 |
| Beacon, weak second Archer site | 60 | 2 / 0 / 1 | 1 / 1 / 2 |
| Beacon, strong second Archer site | 60 | 0 / 2 / 3 | 1 / 1 / 2 |

All 24 runs reached a terminal outcome. Each enemy resolved as a leak or a kill, and each row matched its counterpart at the other speed. Crossbow and Volley ties resolved deterministically at both speeds, and the pre-existing Beacon tie and tradeoff checks passed. Strongest-only Drum overlap passed in both tower orders and at both speeds. A separate temporary model using multiplicative Drum slow tripped the strongest-only assertion.

## GF-069 closure and final verdict

**Accept exact `b86c99ec77c61573d01cd62bcb2380fc5c436e74` for web release.** GF-069 is verified closed. The earlier hold applies to `3dcdc83`.

The new boundary fixture uses a legal Drum at (0, 0) and an axis-aligned road at x = 0. It asserts that the model's interpolated y coordinate equals the configured range exactly. The positive check and the just-outside control pass at 1× and 3×. In a separate export, changing only the Drum range comparison to strict `<` made `npm test` fail at `Drum range includes the boundary`. This confirms the regression now detects exclusion of equality.

The unmodified exact candidate passed `npm test` and `npm run build`. The six comparisons retained the outcomes above. The final output remained byte-identical to the web build preceding IMP-08. The audit did not publish the candidate.

## Web release

Pushed and published the accepted commit to the private Tailscale site. The served standalone build and service worker matched the accepted release files and the preceding live build byte for byte. All three trial flows at 320 × 480 and browser Back passed offline against the live URL. The live register showed Accepted, and Fengchu confirmed delivery of the verified link to Edward on Telegram.
