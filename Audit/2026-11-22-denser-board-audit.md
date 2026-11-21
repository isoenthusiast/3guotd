# Denser portrait board audit

Review `AUD-015`. SimaYi rejects `34a674d08c861c9e81032dabd005b2f1fd4a6138` for release pending GF-054. Both candidate and parent were built from exact Git exports.

## GF-054 · The routes shrink on taller 320-pixel phones

The 9 × 13 board adds four connected segments to every route. The new sidebar layout applies to all portrait viewports at widths up to 360 px. At 320 × 640 and 320 × 740, it reduces the actual board width enough to offset all four added segments. The route regression test compares at equal board width, and the touch test skips these taller 320 px sizes.

Measured Village Watch level 1 centreline length in touch Chromium, using actual canvas CSS width divided by columns and multiplied by segment count. Measurements run from the entrance tile centre to the gate tile centre.

| Viewport | Previous route | Candidate route |
| --- | ---: | ---: |
| 320 × 480 | 395 px | 462 px |
| 320 × 568 | 430 px | 491 px |
| 320 × 640 | 520 px | 491 px |
| 320 × 740 | 578 px | 491 px |

Applying the measured board widths to all 41 lanes gives a 0.5–9.7% reduction at 320 × 640 and a 10.4–18.7% reduction at 320 × 740. Use the available height to retain more board width on taller narrow phones. Verify rendered route length against the parent at all four heights, alongside distinct adjacent taps and zero document overflow with the action tray open.

## Checks passed

- Independently compared 41 campaign and Long battle lanes with the parent. All preserve the original approach, add four orthogonally adjacent segments, start at row 1, end at row 13, and keep road cells unavailable for fresh placement.
- `npm test` and `npm run build` passed. The model cleared 30 standalone levels and six continuous stories. The Archer-only baseline still loses in three chapters. Long battle, legacy saves, and version-1 tower and retry-snapshot remapping passed.
- The exact candidate's offline `test:ux` passed at 320 × 480, 320 × 568 and 390 × 740. Tiles measured 24.3, 25.9 and 38.5 CSS px respectively. Checks covered adjacent edge taps, near-entrance and near-gate placement, purchase, refund, pause, report, and zero scroll in the tested states. Entry and gate labels were visible in the independent 320 × 640 Village Watch capture. Human touch accuracy remains unmeasured.

## GF-054 closure

SimaYi accepts `ab1ab689b45e84f52961428ac35126fcb4eb090d` for private playtest. The sidebar now has a height limit. At taller narrow sizes the board is centred above the controls, with HUD space reserved, so the additional road segments translate into real screen length.

`npm test`, `npm run build`, and the offline touch Chromium `test:ux` passed from an export of the exact commit. The permanent regression compares measured candidate board width with the recorded 8 × 12 release widths. The 19-to-23-segment Wuzhang route gains the least proportionally, because all routes add four segments. Its rendered length increased at every tested viewport.

| Viewport | Old route | Fixed route |
| --- | ---: | ---: |
| 320 × 480 | 500 px | 559 px |
| 320 × 568 | 545 px | 595 px |
| 320 × 640 | 659 px | 686 px |
| 320 × 740 | 732 px | 787 px |
| 390 × 740 | 817 px | 885 px |

The same run verified stable board bounds, adjacent taps, near-landmark selection, purchases, refund, and recap with zero page scrolling at all five viewports. The supplied `/tmp/dense-320-combat.png` is suitable as a private Telegram handoff image after release. It shows the entire 320 × 480 battlefield during combat with readable entry and gate labels and contains no private link or personal information.

KongMing published the accepted commit to the private playtest on port 8472. The served standalone file matched the release artifact byte for byte. The live offline touch suite passed all five viewports. The verified link and approved combat screenshot were queued through Fengchu for Edward.
