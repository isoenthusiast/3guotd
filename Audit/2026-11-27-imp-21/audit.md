# IMP-21 battlefield density

SimaYi · 2026-11-27 · AUD-051. **Accept for private web playtest.** Candidate `0942637122e9a65ead519fd5e512cf021bb8a078` against live baseline commit `5ae12b86455d111e7b73513cf780a5d59c18ebca`. Both production previews came from separate Git archives. The candidate passed `npm test` and `npm run build`, including TypeScript and offline packaging.

## GF-090 · A DPR-only change could leave the board blurry

On `3db28c37d24870b2605b0d7f887a8455a7a42a51` and again on `82444a58437bee2f40d90e5402848432c77ea9db`, full Chromium reported DPR 4 at a constant 374 CSS px board width. The canvas stayed at 576 × 832. The expected capped bitmap was 1122 × 1621. The unchanged test timed out after four seconds on the second commit. Repeated switches on its paused board also left the bitmap at the floor. The supplied passing log for that revision did not reproduce across runs.

CSS bounds and browser resize notifications can stay unchanged when DPR changes. The final tip observes CSS size and samples DPR every 500 ms while the mounted board is visible. A changed ratio triggers measurement even during pause. Unmount clears the timer and disconnects the observer. The final unchanged harness passed the running DPR 1 → 4 switch. A separate paused, offline test held the wide board at 374 CSS px and switched to DPR 4, 2, 1, 3, 1 and 4. After 600 ms at each step the bitmap measured 873 × 1261, 748 × 1080, 576 × 832, 873 × 1261, 576 × 832 and 873 × 1261 respectively. **Verified closed.**

## Offline gameplay and geometry

The production harness waits for **Ready offline**, disables networking, reloads, and restores the same saved Jing Level 5 wave. The fixture starts with 24 mixed attackers across two lanes, 12 towers, 22 shots and 12 impacts. Screenshots capture the paused fixture. Frame intervals are sampled after Resume.

The board uses 9 × 13 logical tiles of 64 units each. The canvas transform maps 576 × 832 logical coordinates onto the bitmap. CSS fixes the 9:13 aspect ratio independently of integer bitmap rounding. The renderer takes the smallest of device DPR, 3 and the square root of 1,100,000 divided by CSS board area. It rounds each scaled dimension to the nearest pixel and retains the original logical dimension as a floor. The area limit is approximate after rounding.

| Viewport | Board CSS dimensions | DPR 1 bitmap | DPR 2 bitmap | DPR 3 bitmap |
| --- | --- | --- | --- | --- |
| 320 × 480 | 210.453125 × 303.984375 | 576 × 832 | 576 × 832 | 631 × 912 |
| 390 × 740 | 374 × 540.21875 | 576 × 832 | 748 × 1080 | 873 × 1261 |

Baseline uses 576 × 832 throughout. The harness compares the board rectangle and every tile rectangle against baseline and across DPRs. It taps row 1 columns 8 and 9 by screen coordinate, checks selection and both purchase cards, and checks board stability and zero document overflow. It also increases viewport height by 40 CSS px and checks the resulting bitmap.

All six offline pairs passed in full Chromium 156.0.8078.4. Every tile rectangle matched exactly. The purchase dock remained usable and neither viewport scrolled.

I reviewed the supplied screenshot pairs in `/tmp/imp21-final-evidence`. Entry lettering, attacker silhouettes and pale health pips remain in place. At 390 × 740 DPR 3, the entry letters have cleaner outlines, the shield and limbs separate more clearly, and the health bar has a sharper edge. Floor cases preserve baseline detail. The harness checks text drawing and counts health-colored pixels. Those assertions alone cannot establish readability.

The [wide DPR 3 comparison](wide-dpr3-detail.png) shows the same native-pixel crop from my final run, baseline on the left and area-capped candidate on the right. The candidate preserves the visible improvement in entry lettering, shield outline and health-bar edge at 873 × 1261.

## GF-091 · Wide DPR 3 frame pacing

On `cd134106501042849625217717c9e6397b8768cc`, the wide canvas reached 1122 × 1621. One independent repeat showed 33.4 ms p95 with 12 of 72 intervals over 25 ms. The supplied full Chromium run showed 33.4 ms with 16 of 72 over 25 ms. A single run below the harness’s 50 ms threshold could miss this regression.

The final tip limits the wide bitmap to 1,100,853 pixels after rounding and retains full DPR 3 on the narrow fixture. In the final six-pair matrix, both candidate and baseline recorded 16.7–16.8 ms p95 and zero intervals over 25 ms across 432 samples per build. The three supplied wide repeats in `/tmp/imp21-budget-pacing.log` also measured 16.7–16.8 ms p95 with zero intervals over 25 ms.

Three further independent wide DPR 3 comparisons reproduced 16.7–16.8 ms p95 and zero intervals over 25 ms for both builds. Repeat this comparison when increasing raster size. **Verified closed for private web playtest.**

The measurements cover short animation-frame intervals in emulated phone viewports on Ed-Z370. Sustained mobile GPU performance, physical-phone readability and uncoached player experience remain unverified. No publication was performed.

## Web release

SimaYi explicitly accepted `0942637122e9a65ead519fd5e512cf021bb8a078` for the private web playtest. Published that exact commit to Tailscale. The served standalone build and service worker matched the release byte for byte. Live offline tests passed at 320 × 480 and 390 × 740 for DPR 1, 2 and 3, including the wide DPR-only switch and zero page scrolling. Live busy-wave frame intervals measured 16.7–16.8 ms p95 with no gaps over 25 ms. Browser Back also passed. The register displayed Accepted, and Fengchu confirmed Telegram delivery.
