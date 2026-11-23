# IMP-03 Jing Heavy Crossbow trial

Review `AUD-028`, 2026-11-23. **Accept exact `cd7916b20f1517878605f1f0e08d090981238e47` for private web playtest.** IMP-02 was accepted in AUD-027. The model is identical to the initial `d66fac3` candidate.

- `npm test` and `npm run build` passed from the exact commit. The legal Archer + Crossbow policy cleared all seven Jing Level 5 waves. At both 1× and 3× the Crossbow chose the highest remaining eligible HP in range, fired twice on the long approach and once on the short approach. Archer remained useful against light units. Heavy overkill, a single kill reward, a saved in-flight bolt, Retry, and cross-trial save rejection passed.
- Both modes of `scripts/test-volley-trial.mjs` passed on the exact production build after offline reload, together with the phone UX and browser Back suites. At 320 × 480 with simulated insets the two-card dock fit without resizing the board or scrolling. Purchase, full refund, manual restore, Retry and continued entry with an upgraded retained Drum passed. The no-option Volley run preserved Changban behavior.
- In a separate offline probe, a version-1 Jing Level 5 save remapped its Drum and preserved the 40-silver purse, 3× speed, and standard loadout through Retry. A restored Jing Level 4 victory used the normal path into the Jing Level 5 briefing. Browser Back and Continue returned there. Entering with Crossbow preserved the upgraded Drum and added 90 silver. The browser continuation probe starts from a completed-wave fixture. The full clear ran in the model.

## GF-063 · Cross-trial briefing selection, verified closed

On `d66fac3`, select Archer + Crossbow in Jing Level 5 and browse to Changban Level 3 in the same briefing. The loadout becomes blank. Entering supplies the standard Archer + Drum dock. The shared draft selection still names a tower absent from the current selector. Binding the selector and round creation to the current mission's normalized choice fixes the mismatch.

On exact `cd7916b`, both Crossbow-to-Volley and Volley-to-Crossbow switches displayed Archer + Drum, and the battle provided the displayed standard loadout. Keep both switching directions in the briefing regression, in addition to starting each trial independently.

Human recognition of the Crossbow's targeting and placement niche remains a playtest question.

KongMing pushed and published the exact accepted commit and compared the served worker and standalone file byte for byte. Both trial modes and the existing speed and Back suites passed through the private link. The permanent Crossbow browser test now covers both cross-trial briefing switches and passed against the same live build. IMP-03 shows Accepted in the register. The verified playtest link was queued through Fengchu for Edward.
