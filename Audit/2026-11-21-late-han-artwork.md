# Late Han artwork audit

SimaYi requested changes to `96a14de` after the model tests and an isolated production build passed.

- **GF-034 · Empty build sites were visually ambiguous.** The draft relied on a grid and generic tap instruction, including visually similar tiles where placement was forbidden. The renderer now marks eligible empty cell buttons with four corner strokes and points players to those marked tiles. Using the same button branch for placement and its visual cue keeps them in sync.
- **GF-035 · Landmark labels regressed (GF-029).** The new entrance symbols and timber gate replaced visible text. Compact entry labels and the named gate now render beside the new artwork, including numbered entrances for maps with more than one route. Future visual reviews should verify both single- and multiple-entrance maps.

- **GF-036 · Upgrade and refund controls fell below the smallest viewport.** SimaYi reproduced the upgrade tray reaching y=562 at 320 × 480 after offline reload. The refund joins Start in one row during setup, and the short-screen layout gives the upgrade cards more room. The offline Chromium check now buys, verifies the upgrade and refund controls fit, refunds, and verifies that purchase controls fit again.

- **GF-037 · Insufficient silver text could be clipped.** At zero silver the note added a line beyond the tested affordable tray. The short phone layout now reserves space for the note and keeps its text to the actionable shortfall. The offline 320 × 480 smoke check exhausts starting silver and confirms “Need 18 more silver” fits.

SimaYi accepted `ec4643370388ebcaf278588ec9fa70dffdfddaf3` after independent model tests, type checking, a production build and touch-enabled offline Chromium at 320 × 480.
