# IMP-21 handoff

Paused at Edward’s request on 2026-11-27 after the baseline benchmark. There is no outstanding predecessor. The register is Blocked awaiting explicit resume so the automated queue skips it. No game code changed. No audit was requested, and no release or Telegram handoff was started.

- Source baseline `fc9df98a87bc8c56c71bff33e0be047ab3a1b4c3`.
- Live baseline `5ae12b86455d111e7b73513cf780a5d59c18ebca`.
- Worktree already contained unrelated edits. Scope any future staging to IMP-21.

## Baseline measurements

Headless Chromium on Ed-Z370, using the unmodified Vite renderer at 390 × 740 and DPR 3. The harness drew a fixed Jing Level 5 scene every animation frame with 24 mixed attackers on two lanes, 12 towers, 22 shots and 12 impacts. It set the bitmap to the CSS board width and corresponding 9:13 height times the scale, then used a canvas transform to preserve logical coordinates. Each run retained 71 samples after warm-up. Scale 1 ran once per width, and scales 2 and 3 ran twice. The ranges show the two repeats.

| Board CSS width | Scale | p95 draw submission | p95 frame interval |
| --- | --- | --- | --- |
| 225.7 px | 1 | 3.2 ms | 16.7 ms |
| 225.7 px | 2 | 2.4–2.6 ms | 16.8 ms |
| 225.7 px | 3 | 2.3–2.4 ms | 16.7–16.8 ms |
| 382 px | 1 | 2.2 ms | 16.8 ms |
| 382 px | 2 | 1.7–2.2 ms | 16.7–16.8 ms |
| 382 px | 3 | 0.7–0.8 ms | 16.8 ms |

Zero measured frame gaps exceeded 25 ms. The harness measures JavaScript drawing submission and animation-frame cadence on this host. Treat DPR 3 as the first candidate cap and confirm it in the production UI. Mobile hardware performance and visual sharpness have yet to be measured.

## Resume

1. Mark IMP-21 Building on explicit resume. Keep the logical battlefield at 576 × 832. In `src/main.tsx`, size the canvas backing bitmap from its CSS bounds and device pixel ratio, capped at 3 initially. Observe layout and DPR changes. Apply the logical-coordinate transform before painting. Pin the canvas CSS aspect ratio so backing-size rounding cannot shift board bounds or the DOM tile grid. Keep tower portraits separate.
2. Reuse the busy fixture to compare live baseline and candidate at 320 × 480 and 390 × 740 for DPR 1, 2 and 3. Capture labels, sprites and health pips. Check exact board and tile bounds, touch selection with the dock open, zero page scroll, resize handling, and offline reload. Record frame intervals as well as draw submission. Lower the cap if measurements warrant it.
3. Request SimaYi acceptance for the exact commit. Follow the web release and live verification process, then send Edward the confirmed private link via Fengchu. Keep Android for the accepted web batch.
