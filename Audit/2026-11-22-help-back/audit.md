# Field guide Back navigation audit

Review `AUD-018`, 2026-11-22. **Accept `abf80ee5ea8e8b06922aff2c00a97c23755a36fb` for private playtest.**

Both field guides now return to Battle orders, where Back to battle resumes the same round. The only runtime change routes the guide's Back button to the Orders screen. The round, selection, purse and pause flag stay in the same application state. Combat and prep time advance only on the battle screen. The app has no browser history or Android Back integration for these screens, so the verified controls are the in-app buttons.

The exact Git export passed `npm test`, `npm run build`, and the complete offline Chromium touch suite. At 320 × 420 with 16 px top, 8 px sides, and a 12 px bottom inset, the suite exercised both guides from running and paused combat. After 60 simulated seconds in each guide, returning through Orders preserved the selected Archer, 60 silver, wave 1 of 3, and the prior Pause or Resume state. The prep-window and six phone regressions also passed.

A separate offline check measured both guide Back buttons at 130.1 × 44 px and the Orders Back button at 125.9 × 44 px. All began at y=16 and ended at x=306 inside the safe area. The Enemy Types panel scrolled 36 px to reveal the final tip while Back stayed fixed and the document stayed at scrollY=0. Returning from setup preserved the selected Archer and 60 silver.

The tested learning is that Back follows the in-app parent screen and leaves the battle state intact. The permanent test exercises both guide routes, running and paused entry, and safe-area bounds on a short viewport. This verifies the guide navigation follow-up on GF-025. Human interpretation of the Drum cue remains in progress.

All three committed screenshots are approved for Edward's private handoff. `orders.png` and `towers.png` show the relevant Back controls and surrounding content. `enemy-types.png` shows the Back control and complete stats table. Its last tip continues inside the scrollable panel, so use it to illustrate navigation and the table. No private addresses or personal information are visible.

KongMing verified the published standalone artifact byte for byte and reran the offline touch suite through the private Tailscale URL. The verified link and three approved screenshots were queued through Fengchu for Edward.
