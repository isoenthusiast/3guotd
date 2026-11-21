# Three Kingdoms UX remediation

Follow-up to [AUD-008](2026-11-21-three-kingdoms-ux-top-10.md). All ten items have a corresponding change. Technical checks support closure of six source findings. The four playtest hypotheses still need uncoached player evidence.

| Finding | Change | Verification and prevention |
|---|---|---|
| GF-020 | Show “Tap grass to build” when setup has no towers. | Fresh-start and empty-layout retry checks show the cue. Observe first taps and time to first placement in a human session. |
| GF-021 | Show both ranges on an empty tile, with solid Archer and dashed Drum conventions on cards. | Chromium observed two different preview radii with no charge until purchase. Check both outlines whenever placement or range changes. |
| GF-022 | Highlight the gate and name the escaping attacker when a life is lost. | Model tests count escapes. Chromium verified the named breach and summary after a loss. Check gate cue and life count together. |
| GF-023 | Reserve space for contextual actions only while selected, keeping cards and selected terrain visible together. | Chromium checked a far-edge selection and tray fit at 320 × 640 and 390 × 740. Observe discovery and selection context on actual devices. |
| GF-024 | Age impact rings and silver popups in real elapsed tick time regardless of game speed. | Fixed-tick tests at 1× and 3× keep a reward visible for at least 600 ms. Combat still advances at the selected speed. |
| GF-025 | Pulse the Drum while it has slowed attackers in reach. | Source ties the pulse to the slowdown and uses the enemy ring’s visual treatment. Ask players to explain the pairing without coaching. |
| GF-026 | Add a distinct helmet silhouette to both veteran types. | Veteran shape differs independently of color in the drawing. Retain a shape distinction when revising enemy art. |
| GF-027 | Show a brief start cue with the wave number and formation. Keep the latest wave summary accessible. | The next wave starts automatically and tests verify its retry snapshot and prior summary. Browser checks covered the start cue and the loss summary. |
| GF-028 | Rotate mixed patrol, runner rush, and veteran column formations. | Model tests verify different lineups and preserve the original opening wave. Compare 20- and 40-wave playtests for meaningful decisions and disengagement. |
| GF-029 | Label Entry and Shu Outpost Gate on the battlefield. | Chromium observed both map labels. Keep testing the visible route endpoints on narrow screens. |

The build, model tests, and direct build and upgrade paths passed. No human discovery, comprehension, or long-session pacing results are claimed.

## Acceptance recheck

SimaYi rejected the first candidate because a breach at the end of a wave masked the next-wave cue. The HUD now shows both together. A model regression reproduces the last veteran runner reaching the gate exactly as wave two begins. Chromium showed the runner breach, the new formation, two remaining lives, and the prior wave summary at both phone sizes. Repeat this overlap check when changing HUD message priority.
