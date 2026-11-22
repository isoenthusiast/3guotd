# Attacker locomotion acceptance audit

Review `AUD-020`, 2026-11-22. **Accept `11e48591149eb2d20953f5a41d8c44d332685ad1` for private playtest.** No release blockers found.

The new renderer keeps the illustrated upper sprites and replaces the static feet with a distance-driven infantry stride and four-leg cavalry gallop. Direction follows the existing horizontal route mirroring. Health bars, shot destinations and impact positions remain anchored to the simulation position, so the decorative body lift does not move the hit point. The change leaves combat and save rules intact.

I ran `npm test` and `npm run build` from an export of the exact commit. I reran the supplied same-attacker harness against that build in offline touch Chromium at 320 × 480 and 1×. Four frames spaced 100 ms apart show the same Infantry and Cavalry changing leg poses. Both held an identical canvas image over 1.5 seconds of Pause. The no-Drum and Drum runs used the same starting positions. Normal travel was 0.56 and 0.945 tiles for Infantry and Cavalry respectively. With the Drum it was 0.1568 and 0.2646 tiles, exactly 28% of normal travel, with both enemies flagged slowed and visible cyan rings. The gait phase therefore slows with actual travel.

An additional offline fixture checked the rendered transform for one leftward and one rightward attacker. After resuming it observed HP pips, a real Archer projectile and the impact ring, and the injured Infantry saved with HP reduced from four to three. These controlled fixtures check software behavior. Perceived readability in a dense wave on Edward's phone remains human playtest evidence.

Keep the same-attacker sequence, the paused canvas comparison and the normal-versus-Drum distance comparison when changing gait. A still frame can show readability but cannot establish cadence or freezing.

All three committed PNGs are approved for Edward's private handoff. `infantry.png` compares the stance and stride, `cavalry.png` compares the horse poses, and `phone.png` shows the full 320 × 480 view with both attackers and HP. The sheets are enlarged crops of the same attacker across each row from seeded encounters. The phone image matches the supplied third candidate frame. No private addresses or identifying information are visible.

KongMing pushed the accepted commit, published it on port 8472 and compared the served standalone HTML byte for byte with the release. The offline touch, Back, and same-attacker motion and Pause checks passed through the private URL with and without a Drum. Fengchu's relay accepted all three approved images and the verified playtest link for Edward.
