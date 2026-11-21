# Main menu and mobile battlefield audit

SimaYi requested changes to `cd49c90` after independently running the model tests, type check, and production build.

- **GF-032 · Unfinished runs could be replaced silently.** Restore and Enter battle called the same transition as a fresh start without checking for an unfinished run. Both now ask for confirmation before replacing a setup or running battle. Cancel leaves the run available under Continue. Chromium exercised confirmation, cancellation and continuation on three phone-sized viewports. Keep both paths in the menu smoke check.
- **GF-033 · The save decoder accepted an array as the phase.** String coercion allowed an array containing “running” to pass validation, then the simulator could neither tick nor retry. The decoder now requires an exact string from the supported phases. A regression test rejects the reproduced malformed save.

The mobile smoke check also covers the briefing, full map, menu freeze, save, restart, reload and restore, sound, and the fixed wave count. The smallest viewport is 320 × 480.

SimaYi accepted `cd7a961f5312a22dcbdce53890e904b0d43992fc` after closing both findings and independently rerunning the tests, type check and isolated production build.

Published and verified on the private Tailscale root at 320 × 480, 320 × 640, and 390 × 740.
