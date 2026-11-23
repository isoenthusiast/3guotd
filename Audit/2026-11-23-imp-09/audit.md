# IMP-09 shared tower definitions

Review `AUD-035`, 2026-11-23. **Accept exact `a36e161010be70ac30eff2196bb102feeac916ab` for web release.** No release blockers in the reviewed scope. The candidate remains unpublished.

- The exact diff preserves the five 30-silver prices, starting purse, upgrade costs and combat values. Purchase, removal and trial retirement use the tower definition's price. The shot resolver uses the targeting definition for highest eligible HP and Volley clustering, preserving the prior selection rules. The dock uses the definition for price and role, and the guide reads trial price and numeric effects from it.
- Exact-export `npm test`, `npm run build`, `test:ux`, and `test-trial-cues.mjs` passed. Verified the campaign, maintained trial tradeoffs and ties, upgrade/refund, save/restore, Retry, and carried Drum upgrade paths through the model and browser suites.
- Independent offline production Chromium probes ran all three trial loadouts at 320 × 420 and 320 × 480 with 16 px top, 12 px bottom and 8 px side insets. The board stayed fixed, battle scrolling stayed zero, both cards and action controls fit, and button glyphs stayed within bounds. Guide values matched the model: Volley up to three recipients, 1.15-tile cluster, 1.8-tile range and 2.1 s cadence; Crossbow highest eligible HP, 3 damage, 2.35-tile range and 2.6 s cadence; Beacon nearest Archer within two tiles and 0.6 s reload. The cue suite separately confirmed actual hits and target mapping.
- In a separate export with only Crossbow price changed to 41, both short-phone probes confirmed a disabled Crossbow and enabled 30-silver Archer at 40 silver. The Crossbow card exposes the one-silver shortfall in its accessible description. Dock and guide quoted 41, a purchase left 49, refund restored 90, and restored save and Retry retained the purchased Crossbow and 49 silver. This was a same-build save test. Historical purchase prices across a future rebalance were outside scope.

## Web release

Pushed and published the accepted commit to the private Tailscale site. The served standalone build and service worker matched the accepted release files byte for byte. The live register showed Accepted, and all three live trial flows and browser Back passed offline. Fengchu confirmed delivery of the verified link to Edward on Telegram.
