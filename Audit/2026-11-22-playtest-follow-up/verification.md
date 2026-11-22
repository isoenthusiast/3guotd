# HUD playtest follow-up

Edward’s Telegram answers are recorded against GF-020, GF-023, GF-025, GF-028 and GF-053 in gameflow.db.

| Finding | Cause and change | Regression check |
| --- | --- | --- |
| GF-020 | Small stakes and a general instruction left the first useful site ambiguous. Mark a legal tile with strong Archer coverage, offer a matching selection button, then highlight the priced Build Archer action. Selection alone spends nothing. | Select the marked cell by touch, confirm the purchase is visible, then buy. Retest discovery with an uncoached player. |
| GF-023 | Before selecting a tile the dock gave little indication of the next action. After selection, “Build” was available only to screen readers. Show the action verb and price. On short phones confine expanded briefing details to their own scroll area and reserve space for Enter battle. | Expand Story and Choose level, then enter battle, buy, refund and upgrade. Assert document overflow is zero, the dock is visible and board bounds stay fixed. |
| GF-025 | The combat ring did not explain what a Drum contributed. Show the count of currently slowed enemies and provide separate Enemy Types and Towers pages under Orders. Keep navigation available while reading. | Compare the table to combat constants, inspect a real slow in combat, navigate both pages offline, and return to the same battle. |
| GF-028 | Edward considers the current Long battle pace acceptable. Retain the current balance. | Submit Edward’s direct evidence for SimaYi’s closure decision and rerun the existing Long battle regressions. |
| GF-053 | The countdown shared a small status line with other wave information. Draw a centred, transparent countdown ring from the existing preparation clock. It accepts no pointer input. | Verify the initial 10, select and buy through the ring, pause, open help, resume at 3× and observe automatic combat. Human noticeability can be retested on the released build. |

## Served scroll reproduction

Tested the private playtest root on build 31a99a5 in mobile touch Chromium. At 320 × 480, expanding both Story and Choose level produced 74 CSS px of document scroll. At 320 × 420 it produced 121 px. On that same build the battle, purchase and upgrade states each had zero document scroll. Edward’s exact browser and gesture were unavailable, so the reproduced briefing surface cannot establish where his purchase attempt scrolled.

On the candidate both expanded briefings produced zero document scroll. The bottom of the purchase and upgrade controls measured 476 px and 416 px respectively for the 480 px and 420 px viewport heights. The map, in-range and out-of-range selections, and both purchase buttons remained accessible. The 320 × 480 screenshots were captured in touch Chromium at device scale factor 2. The countdown capture uses a saved wave-end fixture; the combat capture shows a live Drum slowing an enemy.
