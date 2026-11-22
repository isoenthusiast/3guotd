# IMP-01 web speed toggle

Review `AUD-026`, 2026-11-23. **Accept `ecebf58fd1f52749934e472409be33e3a0752933` for private web playtest.** The comparison build is `9d8b0a4`. The audit covers the existing web game speed values and controls.

On an export of the exact commit, `npm test`, `npm run build`, `scripts/test-battle-speed.mjs`, offline `test:ux`, `test:back`, battle readout, and keyboard defense planning passed. Offline touch Chromium at 320 × 480 used simulated insets of 16 px top, 12 px bottom and 8 px on each side. The speed button cycled 1× → 2× → 3× → 1× during setup and running play while the purchase tray was open. It stayed within the safe area beside Start or Pause/Resume. The board bounds stayed fixed and document scroll stayed zero.

Speed changes while paused preserved the complete round snapshot. On resume, the test measured the same Infantry advancing at 1.6, 3.2 and 4.8 tiles per viewing second. An independent extension saved and reloaded each numeric web speed, then confirmed the restored toggle value. Orders had no Speed combobox. The existing save/load logic and fixed-tick speed values carry the new control.

## GF-062 · Purchase label containment, verified closed

The initial `86e3c1c` dock-fit assertion failed on the first Archer card. The `15c876e` revision passed its first-site test, but the additional row 1, column 9 check still drew Build text about 4 px above both out-of-range card bounds. The accepted comparison build also had out-of-range text extending above the card. Testing the suggested site alone missed this case.

The final commit uses centered, portrait-free purchase cards at widths up to 360 px and shows a range key only where the tower covers road. The exact permanent test and independent probe both verified all dock glyphs for the suggested site and the distant site at 320 × 480 with insets. Both cards retained their prices and displayed the correct reach warning. Controls remained at least 44 px and the board did not resize. Preserve both text-containment cases alongside the document and board checks.

KongMing pushed and published the accepted commit. The live worker and standalone file matched the release bytes. The offline speed, mobile UX, and Back suites passed through the Tailscale URL. The improvement register now shows Accepted and names the audit and released commit. Fengchu accepted the verified playtest link for Edward's Telegram chat.
