# IMP-11 campaign handoff and prerequisites

Review `AUD-037`, 2026-11-23. **Accept exact `ce00c99a43ef9adc29103c6794883ea63176c139` for web release.** GF-072 and GF-073 are verified closed. The build remains unpublished.

## GF-072 · Carryover wording included refunded towers

The handoff in `10111410` said “Towers & upgrades kept” while retiring the trial towers. A four-tower refund fixture demonstrated the ambiguity. The dock now names Archer and Drum and retains the separate trial refund amount. The root cause was using an unqualified summary for a filtered carryover. Keep the groups named when a handoff retains one and refunds another. The permanent test checks the qualified wording, and both short-phone Wuzhang layouts fit.

## GF-073 · Full wording depended on a generic element label

In `13a4f22`, the full phrase was assigned to the `aria-label` of an unstructured `small` element. Chromium's raw accessibility tree returned that generic name, but the Playwright content snapshot returned only “Archer/Drum + upgrades.” The final build exposes the full sentence as text and hides the compact duplicate from assistive technology. The permanent 320 × 480 check and the independent Wuzhang 320 × 420 and 320 × 480 snapshots expose the full sentence. The Wuzhang probe also confirms that the compact phrase is absent from the snapshot. Keep accessibility-tree checks alongside visual glyph-fit assertions. Spoken screen-reader behavior on a phone remains untested.

## Verification

- Independent exact export passed `npm test` and `npm run build`. Offline Chromium passed the permanent campaign-handoff, battle-readout and mobile UX suites.
- The permanent Changban test seeds one actual pending Volley projectile. The game resolves the kill and clear, writes completion once, and transitions to Level 4 with the correct 90-silver grant, 30-silver refund and upgraded Archer. Reload restores the same standard Archer/Drum choices and no duplicate award. A separate 320 × 420 variant held four Volley Platforms and received a 120-silver refund with the same carryover and single progress write.
- The Wuzhang Level 4 dock fit at 320 × 420 and 320 × 480 with 16 px top, 12 px bottom and 8 px side insets. The long title, grant, compact carryover line and 120-silver Beacon refund fit with zero scrolling and 44 px controls. The saved wave-one opening held the fully upgraded Archer, and 1,054 + 90 + 120 yielded 1,264 silver. Preparation lasted about ten browser-clock seconds at 3×, started automatically and cleared the refund cue.
- A version-one Changban Level 2 save without the refund field restored its mission ID. The legacy Changban clear kept Level 2 unlocked and the Level 3 Volley trial locked behind Level 2. The Red Cliffs prerequisite correctly named Changban Level 5. The permanent cross-chapter fixture entered Red Cliffs with an empty board and 90 silver.

## Web release

Pushed and published the accepted commit to the private Tailscale site. The served standalone build and service worker matched the accepted release files byte for byte. Live offline campaign handoff, continuity and browser Back passed. The register showed Accepted, and Fengchu confirmed delivery of the verified link to Edward on Telegram.
