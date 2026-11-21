# Compact purchase UX audit · 2026-11-21

SimaYi reviewed tap count, reserved panel space, and target sizing. KongMing tested the fixes in touch-enabled Chromium at 320 × 640 and 390 × 740.

- **GF-016 · Extra purchase taps.** Separate type selection and upgrade confirmation made common purchases take three taps. Select a tile or tower, then tap its priced action. Upgrade effects and prospective range remain visible before purchase. Repeat both first- and second-branch purchase checks after changing the action bar.
- **GF-017 · Permanent idle box.** The action area reserved 176 pixels even without selection. Render actions only when the player selects something actionable. Check that the idle board has no action region and that tapping the same tile dismisses it.
- **GF-018 · Avoidably small tiles.** The old viewport cap shrank tiles even when more space was available. Fit the portrait canvas to the available width and height and check far-edge taps. At 320 px, eight columns still require targets below 44 px to keep the full map visible. The build and upgrade buttons retain their 44 px minimum.

Both viewports passed map fit, far-tile selection, direct purchases, both upgrade branches, and insufficient-silver feedback.
