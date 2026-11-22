# System Back acceptance audit

Review `AUD-019`, 2026-11-22. **Accept `5d4b704b6c0210554b41ca017a26ab0308e3a866` for private playtest.** No release blockers found.

I built a clean export of the exact commit. `npm test`, `npm run build`, `npm run test:back`, and `npm run test:ux` passed. Offline Chromium touch at 320 × 420 verified Back from Campaign and Long battle setup, dismissal of replacement, restart and restore prompts, and return from either field guide via Battle orders. System Back, Escape and Close report returned from Report to Orders. Switching or revisiting guides reused the same history depth. Back to the battle preserved the selected Archer, 60 silver and the existing pause state. Back from the battle reached the title with Continue available. A further Back reached the preceding browser document, including in the offline suite.

A separate offline browser run reloaded inside Enemy Types. The app normalized the history to the title, refused to reconstruct the obsolete guide via Forward, and restored the explicit save with its Archer, 60 silver and paused state. After the restore, returning to title and pressing Back again reached the preceding document.

The supplied `/tmp/sysback-pwa.log` reported installation and launch in Chromium standalone mode. I independently reran its procedure against the exact candidate using a temporary Xvfb desktop Chromium profile. It launched as an installed PWA, reloaded offline, and traversed Enemy Types → Orders → paused battle → title with the selected Archer and purse intact. This installed test ends at the title. Root exit to a previous document was independently verified in a regular Chromium tab.

KongMing's `/tmp/sysback-emu.log` records Android emulator Chrome KEYCODE_BACK traversing Towers → Orders → paused battle → title. The returned battle shows 60 silver and Resume, with the Archer upgrade actions still selected. That log ends at the title. Android launcher or installed-app dismissal at root remains unobserved. No emulator or physical-device interactions were performed in this audit.

History stores the route separately from the simulation and save slot. Keep the root free of an extra history sentinel and keep the replacement, overlay and root-escape cases in the permanent regression suite.

KongMing pushed and published the accepted commit, verified the served standalone artifact byte for byte, and reran both offline touch and Back suites through the Tailscale playtest URL. Fengchu's relay accepted the link for Edward. A separate Android emulator Chrome key-event run continued past the title and reached the preceding browser document. Physical Android and installed Android launcher exit remain untested.
