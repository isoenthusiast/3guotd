# Focused battle HUD audit

Review `AUD-016`. SimaYi reviewed exact candidate `02974b6b874e3ef00226240d7fc0860f34cb9e2c` against the measured live `ab1ab68` baseline. Release requires GF-055 closure.

## GF-055 · The main-menu title enters the top unsafe area

The candidate adds document-wide `viewport-fit=cover`. Battle and Orders account for the safe-area environment variables, while the main menu still uses its ordinary margins. On the exact build, touch Chromium at 390 × 740 with CDP insets of 44 px top, 34 px bottom and 8 px on both sides placed the main-menu title at y=34.59. The title box extends 9.41 px into the unsafe area on both fresh load and return from battle. The battle's Menu button correctly started at y=44, and the briefing's Enter battle button was clear. The emulation measures layout bounds. A physical cutout device was unavailable.

Apply safe-area spacing to the title screen. Extend the inset test to check the visible title and core controls before entering battle and after returning to the menu. Keep the existing battle geometry checks.

## Checks passed

From the exact Git export, `npm test`, `npm run build`, and all six offline Chromium `test:ux` scenarios passed. The candidate and baseline use identical 9 × 13 geometry and routes, so the ratio of actual board widths is also the ratio of board heights and rendered road lengths.

| Viewport | Live board width | Candidate board width |
| --- | ---: | ---: |
| 320 × 480 | 218.8 px | 225.7 px |
| 320 × 568 | 232.8 px | 286.6 px |
| 320 × 640 | 268.6 px | 312.0 px |
| 320 × 740 | 308.0 px | 312.0 px |
| 390 × 740 | 346.1 px | 382.0 px |

With the simulated insets at 390 × 740, the candidate board measured 355.8 × 514.0 px. The suite verified stable board dimensions, independently reachable cells and adjacent taps, 44 × 44 px minimum battle controls, zero document scrolling, purchases, refunds, upgrade and surcharge, speed changes, retry, and report. Supplemental offline Chromium checks with the same insets exercised the wave-end handoff to Village Watch level 2 with retained defense and silver, and the level 5 Chronicle and Next battle path through to Changban's board. The progression cases used seeded wave-end saves.

Both committed screenshots are approved as images for Edward's private Telegram handoff after release acceptance. The 320 × 480 purchase image shows the selected tile, both ranges, prices and Start wave. The 390 × 740 combat image shows the full road, active combat and the unobstructed Pause control. Both show readable Entry and Village gate labels, with no private address or identifying information.

## GF-055 closure

SimaYi accepts `31a99a5e29d8f334fc5b181c784858a30dddbdca` for private playtest. Shared menu spacing now respects the safe-area insets. The active-run title screen uses a shorter illustration and a compact action grid to keep the additional session controls within reach.

`npm test`, `npm run build`, and all six offline Chromium scenarios passed from an export of the exact commit. With the 44 px simulated top inset at 390 × 740, the title started at y=62.59 on first load and after returning to the menu. A supplemental run checked every enabled action, including Restore after saving. The lowest active-run control ended at y=596.55 with the cutout profile and at y=430.55 on the 320 × 480 viewport.

Full-bleed viewport settings apply to every screen. The regression suite now checks the title and enabled controls before battle and after returning to it. The two approved screenshots are byte-identical to those previously reviewed, and their approval for Edward's private Telegram handoff stands.

## Release verification

KongMing published the accepted build to port 8472 and compared the served standalone artifact byte for byte. All six live offline touch scenarios and the seeded story-transition check passed. The approved screenshots and verified link were queued through Fengchu for Edward.

Measurements below use the Village Watch opening road from entrance tile centre to gate tile centre, rounded to the nearest CSS pixel. The 19-segment route is identical in both releases.

| Phone | Board on ab1ab68 | Board on 31a99a5 | Rendered road before → after |
| --- | --- | --- | --- |
| 320 × 480 | 219 × 316 | 226 × 326 | 462 → 476 |
| 320 × 568 | 233 × 336 | 287 × 414 | 491 → 605 |
| 320 × 640 | 269 × 388 | 312 × 451 | 567 → 659 |
| 320 × 740 | 308 × 445 | 312 × 451 | 650 → 659 |
| 390 × 740 | 346 × 500 | 382 × 552 | 731 → 806 |
