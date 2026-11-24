# IMP-14 offline Field Trials

Review `AUD-042`, 2026-11-24. **Accept exact `e5b1562708119b0e96e6490a563e82c3aaf36410` for web release.** GF-078 is verified closed. The build remains unpublished.

## GF-078 · Sound fell below the short-phone safe area

On `7b3fd45`, the extra title-menu row pushed the Sound button outside the visible safe area at 320 × 480 and worsened an overflow already present at 320 × 420. The independent Chrome probe measured the button bottom at y = 498.1 and y = 481.3 respectively. The safe limits were 468 and 408. `0b06343` grouped the menu choices in the existing rows, fixing the 480 case. At 420 it restored the pre-feature geometry, where the button still ended at y = 430.1. The final commit reduces the title art height for viewports at or below 440 px. The exact final build kept all enabled title controls within the safe area on fresh and active-run menus at both tested heights. Keep both short-phone cases in the permanent fit check whenever adding a menu action.

## Verification

- Independent exact-export `npm test` and `npm run build` passed. The production Field Trials suite passed offline at 320 × 420 and 320 × 480 with 16 px top, 12 px bottom and 8 px side insets. On a fresh profile, Volley and Crossbow produced actual combat impact cues, and the Beacon linked to its Archer.
- Linked and unlinked practice fixtures fired real Archer shots. The permanent model test measured the 0.60 s and 1.05 s cooldowns. In an independent production browser probe, successive visible launch strokes were 640 ms apart with the Beacon and 1,056 ms apart without it at both heights. These render measurements include fixed-tick and frame dispatch.
- The independent phone probe kept all practice controls at least 44 × 44 and inside the safe area, contained dock glyphs, and showed a fixed board and zero scrolling through selection, buying, refunds, and terminal Replay. Replay from a real loss kept the selected trial, cleared its board, and restored 90 silver and three lives.
- Browser Back and the practice Menu returned to the original game. The permanent suite checked campaign and Long Battle storage in separate scenarios. The independent campaign run returned from mid-combat practice with its stored state byte-identical and the original active Archer and 60 silver. The Hanzhong offline map suite, mobile UX suite and system Back suite also passed.

## Web release

Pushed and published the accepted commit to the private Tailscale site. The served standalone build and service worker matched the accepted release files byte for byte. Live offline Field Trials at both phone heights, Hanzhong, and browser Back passed. The register showed Accepted, and Fengchu confirmed delivery of the link to Edward on Telegram.
