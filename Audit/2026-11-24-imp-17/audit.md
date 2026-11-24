# IMP-17 Long Battle Commander escort

Review `AUD-045`, 2026-11-24. **Accept exact `1afc8c2cb375ea7696509b26a89fd50c603d2327` for web release.** No release blockers found. The build remains unpublished.

## Placement crossover

Both layouts spend 180 silver on six Archers, with five common sites. The sixth Archer is at B5 or F11. At both 1× and 3×, the exact model returned these results with three starting lives per encounter.

| Wave | Total HP | B5 kills / leaks / lives | F11 kills / leaks / lives |
| --- | ---: | ---: | ---: |
| 7 | 55 | 8 / 1 / 2 | 7 / 2 / 1 |
| 8 Commander escort | 56 | 5 / 1 / 2 | 6 / 0 / 3 |

This reproduces the placement reversal while both layouts survive each fixture.

## Forecast, progression and compatibility

- Exact-export `npm test` and `npm run build` passed. The independent production build passed the offline 320 × 480 Long Battle, mobile UX, and continuity suites. The browser simulation advanced a clean run to Wave 8 by playing combat, unlocked and placed the three towers at Waves 2, 4 and 6, and preserved the Crossbow slot, opening towers and silver through Wave 8 save, restore and Retry.
- The production run displayed the Wave 7 preview and the Wave 8 launch cue. A separate safe-inset probe matched the Orders counts and the compact Retry forecast to all actual spawns in order: Veteran (8 HP), Pursuit commander (12), Veteran (8), Veteran (8), Pursuit commander (12), Veteran (8). The board stayed fixed with zero scrolling and the Wave 8 forecast fit with the purchase dock open. In Wave 7, selecting an empty tile gives the visible dock to purchase instructions, while Orders and the live-region text retain the upcoming formation.
- Compared all 100 Long Battle formation and route definitions to the exact accepted `4c4b051` source. Only new-rule Wave 8 differs. Sampled opening ticks on all other waves matched. The campaign formations and trial schedules also matched. Genuine v2 and unversioned saves from the baseline retained their schedule and rule version across restore, the Wave 7–8 transition and Retry. The independent browser probe restored both older Wave 8 formats with the original Runner rush preview.
- The sole delta from `4b689f0` updates the continuity test's post-cache-repair assertion from a flex title menu to its existing grid layout. The repaired test passed offline, including missing-asset repair and a styled second offline reload.

## Web release

Pushed and published exact commit `1afc8c2cb375ea7696509b26a89fd50c603d2327` to private Tailscale. The served standalone page and service worker matched the accepted build byte for byte. Live offline Long Battle reached Wave 8 through combat, and the unlocks, forecast, save, Retry and legacy schedule passed at 320 × 480. The campaign forecast, browser Back and offline continuity suites also passed. The register showed Accepted, and Fengchu confirmed Telegram delivery to Edward.
