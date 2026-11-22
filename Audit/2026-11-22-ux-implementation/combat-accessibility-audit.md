# Combat and accessibility integration audit

Review `AUD-024`, 2026-11-22. **Reject `9bd67643a3593a8aa7b2fe1ba16f484568053a2f` for private playtest pending GF-060.** Verified ancestry `79a38f4 → f08f042 → 1c053d1 → 9bd6764`. Tests below used a clean archive of the exact candidate.

## GF-060 · Selected defense hides the two-second wave cue

Reproduced in offline touch Chromium at 320 × 480. Enter Village Watch, build an Archer, buy both branches, and leave it selected. Set speed to 3× in Orders, return, and start the wave. At 0.6 s and 1.25 s the live readout only shows `Archer · Longer range + Faster fire`. Deselect at 1.25 s and `Wave 1 starts · Infantry approaching` appears. At 2.1 s it expires normally. The longer window works when the opening message survives the competing presentation states.

In `src/main.tsx`, the maxed tower readout overwrites status after the wave cue is set. The wave-one empty-board opening hint can also override that cue. Give wave start priority over persistent selection and first-placement hints during the promised interval. Add a browser check that starts a wave at 3× with a maxed tower selected, verifies the cue through the two-second window, and checks that persistent tower text returns afterward. Include the no-tower opening.

## GF-061 · Split-route breach lane is canvas-only

Non-blocking accessibility follow-up. A seeded offline Jing breach for Cavalry from Entry 2 produced `Cavalry breach · Entry 2` on canvas. The live region only exposed `Cavalry reached the gate`. Read the same route attribution from the recorded gate hit in accessible status, and verify both entrances and the legacy fallback without assuming that a screen reader can read canvas text.

## Checks passed and remaining evidence

- `npm test`, `npm run build`, offline `test:ux`, `test:back`, `test:continuity`, and the combat-guide and comfort suites passed independently. The board retained its no-scroll layout in the standard phone cases. Paused recovery, distinct manual saves, incomplete-cache repair and root Back passed. The supplied emulator and two-build update logs are additional lead evidence.
- The seven-figure guide and shared Archer/Drum diagram rendered after an offline reload. The wave-100 table showed Infantry at 4 → 28 HP, 1.60 tiles/s and 7 silver. The controlled combat test covered both split lanes in model checks, an actual Entry 2 label on canvas, and the legacy lane-unrecorded label. It also checked commander WAIT/GO, the named ferry milestone, grouped silver and unchanged simulation state.
- In the synthetic crowd probe, normal and reduced effects produced 25 and 12 arc calls respectively. Reduced motion held the gait pose while normal motion changed it, and the numeric prep countdown remained available. Browser tests covered saved comfort choices and the OS motion override. These fixtures verify rendering and timing behavior in the tested states. They cannot establish human recognition, comfort, frame rate on physical devices, or screen-reader interpretation.
- At 320 × 480, the Enemy Types table fit at default size. With 150% or 200% root text, the table required horizontal scrolling inside the guide panel, with no document overflow. The accepted parent had the same measured table widths. Physical text scaling, device Back, and uncoached playtest gates remain open. The existing latest-only same-tick breach behavior is outside this patch's tested visual change.

## Release recheck on 9d8b0a4

**Accept `9d8b0a4414270fa298dc9c243d411617c37aff55` for private playtest. GF-060 and GF-061 are verified closed.** The exact export passed `npm test`, `npm run build`, and the expanded offline battle-readout suite. The final commit adds only the permanent accessible-breach test. Its built distribution matched the independently tested `fe35a26` build byte-for-byte, including the offline worker and standalone file. Offline UX, Back and comfort passed on that identical build.

- **GF-060.** On a touch viewport at 320 × 480, both an empty opening and a selected fully upgraded Archer showed the wave threat at 1.5 seconds at 3×. At 2.25 seconds the first-placement or upgrade readout returned. Inspection confirmed rebuild alerts share the same priority guard.
- **GF-061.** The atomic live region reported the attacker, recorded entry and remaining lives. The permanent regression passed for Entry 1, Entry 2 and a legacy breach with no recorded entry. A separate offline fixture independently matched the Entry 2 canvas cue to `Cavalry reached the gate. Entry 2. 2 lives remaining.` The test verifies the accessible text. Physical assistive-technology and human playtest gates remain open.

KongMing pushed and published the accepted commit. The served service worker and standalone file matched release bytes. Offline phone UX, strict Back, keyboard planning, Yiling/Drum/fast-alert/breach announcements, campaign continuity/cache recovery and the illustrated comfort guide all passed through port 8472. Fengchu’s link handoff accepted the final live commit, outcome and outstanding player/device checks for Edward’s Telegram update.
