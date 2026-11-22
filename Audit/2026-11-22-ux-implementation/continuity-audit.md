# Continuity stage acceptance audit

Review `AUD-023`, 2026-11-22. **Reject `a728cd1838c2eba23fe69dc78c3c7bd86e13c2f7` for private playtest pending GF-059.** The parent is the accepted and deployed stage one, `ec3a48a708d7659ce765dd06867f025856eda911`.

## GF-059 · Reconnect and reload does not repair an incomplete offline cache

In touch Chromium at 320 × 480, install the exact build's service worker and wait for Ready offline. Disable the separate HTTP cache and delete only the stylesheet from the app's Cache Storage. Keep the browser online and reload twice. Both reloads fetch the stylesheet successfully over HTTP. Both still show `Offline files incomplete · reconnect and reload`, and the stylesheet remains absent from Cache Storage. An offline reload then fails that stylesheet with `net::ERR_FAILED`.

The service worker checks all precache entries but never fills missing entries after installation. Its runtime fetch handler serves a cache miss from the network without writing it back. The permanent continuity test restores the entry with a direct `cache.put`, so its passing assertion verifies the indicator and bypasses the recovery instruction. Make the advertised online flow repair the current build's missing precache entries. Delete a requested file and a file the page does not request, reconnect and reload through the UI, and verify that Ready offline returns and a fresh airplane-mode load works without manipulating Cache Storage to restore the files.

## Independently passed

- **Ranks 8, 37, 38 and 40.** The continuity suite opened Changban after five Village Watch clears, checked chapter locks, progress and story recap, and exercised the Long battle duration and recovery explanations. Campaign and Long setup Back worked offline. All 30 levels and six continuous stories passed the model suite.
- **Ranks 39 and 49.** Active run, manual save and separate automatic checkpoint were distinguishable. Offline reload exposed recovery without pretending the run was active, opened the recovered run paused, and preserved the manual slot. Legacy remapping, explicit restart, corrupt checkpoint refusal, storage failure, unchanged checkpoint deduplication and confirmation Back passed.
- **Rank 45.** At 320 × 480 with 150% and 200% root text sizes, the briefing scrolled internally and the selectors and Enter battle remained reachable. The suite also reached guide Back controls. This is browser text-size emulation. Physical font scaling and uncoached observations remain open.
- **Rank 48, intact cache and build update.** A separate loopback test switched from the exact deployed parent assets to the exact candidate build at the same origin. The old board continued playing while the candidate worker waited. After all game tabs closed, the candidate reported Ready offline and restored the identical manual save after an offline reload. This reproduces the supplied two-build evidence.
- `npm test`, `npm run build`, exact offline `test:continuity`, `test:ux`, `test:back`, keyboard planning and battle-readout suites passed. The original human playtest gates remain open.

## Release recheck on 79a38f4

**Accept `79a38f42029e667d092a3edf2367de3852e90067` for private playtest. GF-059 is verified closed.** `npm test`, `npm run build`, and `npm run test:continuity` passed from an export of the exact commit. The permanent regression removed the stylesheet and an icon while offline, detected the incomplete cache, then repaired both through an ordinary online reload. A subsequent offline reload was styled and displayed Ready offline.

The build pins each precache request to its SHA-256 digest. On a disposable copy of the exact build, I served different valid PNG bytes at the pinned icon URL. A fresh install became redundant and left the icon uncached. During repair, the worker likewise rejected the changed bytes and kept the incomplete status. After restoring the matching file on the temporary server, ordinary reload repaired the cache and the next offline reload passed.

The separate two-build check used the exact deployed stage-one assets and exact candidate at one loopback origin. The existing battle and manual save survived the wait for the candidate worker. An immediate scripted reopen once loaded the old UI before activation completed. A fresh rerun with a one-second interval after closing the last game tab activated the new worker and restored the identical save offline. Verify the reported cached build when checking an update.

KongMing verified the accepted release at the private port 8472 URL. The standalone file matched the release bytes, the general offline/Back/keyboard/Yiling suites passed, and the live continuity suite repaired deliberately removed cached assets then restored a styled offline page. The stage link was queued through Fengchu.
