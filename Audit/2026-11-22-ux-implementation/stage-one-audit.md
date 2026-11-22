# Stage-one defense planning audit

Review `AUD-022`, 2026-11-22. **Reject `d52a7d0fecbc6e8e5c2554c9e709a37eb21812ac` for private playtest pending GF-057.** This is the superseding candidate. I also reproduced GF-057 on its predecessor `3a193ed`.

## GF-056 · Closed as a false positive

I served the exact active `11e48591149eb2d20953f5a41d8c44d332685ad1` release assets on loopback and ran the test-only `c30ae8415a1c7fb8705636640e7efa4866ae82ff` regression against them in offline touch Chromium. Both sibling directions with each Back method reached the exact Battle orders heading and removed Back to orders. Back again retained the selected Archer, purse and pause state. The exact staged candidate passed the same assertions.

The earlier test waited for an Enemy Types button shared by the Orders and Towers screens. Its pass could establish neither destination. The navigator replaces the same-depth sibling entry, leaving Orders as the parent. The regression now checks the destination heading, guide-control removal and preserved battle state. No runtime repair was required.

## GF-057 · Paused prep readout overlaps the board and purchase controls

At 320 × 420 and 320 × 480, restore a Yiling level 1 win with a retained Archer and zero unspent silver. Pause the level 2 prep, buy three legal 30-silver Drums with the new stipend, and select the Archer. Refund, the prep clock and stipend text, the closure warning, and the 18-silver upgrade shortfall all appear. The readout is 54.44 px high in a 44 px status row. It starts 2.20 px inside the board and ends 5.22 px inside the upgrade-button row at both heights. Document overflow remains zero. The same sequence fit on the active release at 320 × 480. The superseding change fixed button-label containment in the tested cases. Its regression measures button glyphs, which leaves the status row unchecked.

Keep critical countdown, closure and affordability information readable without crossing the board or dock. Add a paused Yiling fixture with real spending and assert the entire readout fits between the battlefield and action row at both heights, alongside button-label containment.

## GF-058 · Mixed Drum overlap is ambiguous

In an offline 320 × 480 Long battle fixture, two Infantry were slowed on separate road segments and one was within the sole Archer's range. The cue read `Drum slowing 2 · in Archer range`. It combines the total slowed count with a Boolean that becomes true when any slowed enemy is in Archer range. This is a non-blocking wording finding. Report the number covered or say that some are covered. Verify a mixed-state fixture as well as the all-in-range and all-outside cases.

## Checks and human gates

The exact candidate passed `npm test`, `npm run build`, `test:ux`, `test:back` and the new defense-planning browser test. The keyboard run bought in two actions, refunded 48 silver after one upgrade, exercised both branches and inspected the 15-silver retry snapshot. It reached a defeat with zero lives, 29 silver and stable board bounds. Controlled recovery fixtures verified the fast-breach count and retry snapshot fit at 320 × 420 and 320 × 480. The offline countdown test bought through the ring, paused through help and auto-started at 3×. Model and browser checks establish behavior. GF-020, GF-023, GF-025 and GF-053 remain in progress for the original uncoached observations.

## Release recheck on ec3a48a

**Accept `ec3a48a708d7659ce765dd06867f025856eda911` for private playtest. GF-057 and GF-058 are verified closed.** Independently ran `npm test`, `npm run build`, `test:ux`, `test:back`, the keyboard defense-planning test and `scripts/test-battle-readout.mjs` from an export of the exact commit.

- **GF-057.** The prep message keeps the clock, closure warning and shortfall during selection, with carryover and stipend detail when no site is selected. The offline Yiling reproduction uses real purchases and verifies that the whole readout clears both neighboring regions at 320 × 420 and 320 × 480. Additional checks at both heights covered the unselected stipend cue, selected second-branch surcharge, and 27-silver shortfall. Each had at least 4.59 px of clearance below the board and 1.59 px above the action row, with zero document overflow.
- **GF-058.** The HUD counts each slowed attacker covered by any Archer once, using combat range logic. With two slowed Infantry, the offline fixtures reported zero, one and two in Archer range for none, mixed and full coverage respectively.

GF-056 remains verified. GF-020, GF-023, GF-025 and GF-053 still require uncoached player evidence.

KongMing pushed and published the accepted commit. Live port 8472 served the byte-identical standalone file. The offline phone suite, strict Back suite, keyboard planning and Yiling/Drum readout regressions passed through the private link, which was queued through Fengchu.
