# Single-page silver round audit · 2026-11-21

Review ID `AUD-003`. SimaYi reviewed the round, controls, and self-contained HTML output. The build and model tests passed. SimaYi found two mobile regressions and confirmed their closure after source review and KongMing's browser checks.

| ID | Cause | Fix and prevention | Evidence |
|---|---|---|---|
| GF-009 | The action area was in normal flow and grew when a tile was selected. | Anchor the command bar and reserve action space. Recheck the position of the round controls before and after selecting a tile at narrow widths. | At 320 and 390 px, the Start wave button stayed in place while selecting a tile. |
| GF-010 | A full-width 12-column board shrank each touch target to about 25 px at 320 px. | Keep 44 px tiles in a scrollable build view, with separate full-map viewing. Check neighboring targets near both ends of the board after board changes. | At both widths, Chromium measured 44 × 44 px and independently selected adjacent far-right tiles. Selection did not spend silver. Full-map mode fit the viewport. |

KongMing also opened the generated `standalone.html` directly in Chromium. Both mobile viewports completed placement, upgrades, a kill-funded fourth purchase, and retry rollback without requesting HTTP subresources. The model tests cover an Archer–Drum opening that can win by reinvesting kill rewards. Hero commands, campaign unlocks, and offline release acceptance are outside this round.
