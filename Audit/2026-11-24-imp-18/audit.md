# IMP-18 Hanzhong Rider Ambush

Review `AUD-046`, 2026-11-24. **Accept exact `2c05fb8e7342270900805b2ff4b4453c5d2030e5` for web release.** GF-081 is verified closed. The build remains unpublished.

## GF-081 · Challenge history could open a blank screen

On `e15e215`, the offline sequence Hanzhong → Rider Ambush → browser Back → reload Hanzhong → browser Forward reached the challenge URL with no visible board or body text. The history handler selected challenge mode without initializing the lazily mounted challenge board in a fresh document. `51c3e69` initializes that board on challenge history entries. The exact final tip retains those runtime bytes and moves the permanent repro to a fresh offline tab. Both the independent reproduction and the permanent test passed. Forward mounted Rider Ambush, its persisted clear was present, and Back still returned to Hanzhong. Test this sequence from a fresh document when history can select a lazy view.

## Independent verification

- Exact-export `npm test`, `npm run build`, and the permanent offline map suite passed. All generated files matched the preceding runtime candidate `51c3e69` byte for byte. Field Trials and system Back regressions also passed on that identical runtime.
- At 320 × 480 with 16 px top, 12 px bottom, and 8 px side insets, both the Hanzhong entry button and direct challenge query worked offline. The briefing and actual combat agreed on three cavalry and two runners. The independent browser probe confirmed that the 60-silver purse closed to purchases once combat started even with 30 silver remaining. The gate layout won with one life, and Replay reset the board and budget. A subsequent loss and direct offline reload preserved the dedicated clear.
- Visible and browser Back restored the original Hanzhong board within the same document, including its selected Archer, resources and pause state. The challenge left the real campaign-progress, manual-save and automatic-checkpoint entries byte-identical. Returning to the main game restored the original saved Archer and 60 silver. The original and challenge boards had identical geometry and the document did not scroll.
- The independent model replay verified all arrivals and the 60-silver crossover at 1× and 3×. The upper layout uses Archers D3 and F5. The gate layout uses Archer E10 and Drum F9. On the original infantry wave they stopped 3/4 and 2/4, respectively. In the five-arrival ambush they stopped 2/5 and 3/5. The upper layout lost and the gate layout held with one life. The final briefing lists the arrivals as “Face” to avoid implying every enemy must be stopped.

## Web release

Pushed and published exact commit `2c05fb8e7342270900805b2ff4b4453c5d2030e5` to private Tailscale. The served standalone page and service worker matched the accepted release files byte for byte. The live 320 × 480 offline Hanzhong run verified the original clear, challenge win and Replay, Back and Forward, static board bounds, and save isolation. Field Trials and browser Back also passed against the live build. The register displayed Accepted and Fengchu confirmed delivery of the direct challenge link to Edward.
