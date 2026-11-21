# 3Guo Tower Defense

A web-first tower defense game built with Preact, TypeScript, Canvas 2D, and Vite. The current round defends a Shu frontier outpost against infantry and fast runners.

The portrait map fits the phone screen on a 9-column, 13-row grid. Follow the entry banners to the final bend and the named gate. Village Watch opens with a 19-step road and Long battle uses 21 steps. Use **Report** for wave results or an unlocked Chronicle. Opening the report pauses active play. Tap an empty tile off the road to preview an Archer or Drum tower. Tap the priced Archer or Drum button to buy it. The action bar appears only when a tile or tower is selected. Start with 90 silver, enough for three 30-silver towers. Kills pay 7 or 12 silver depending on enemy level. Spend silver during the wave to build more towers or buy upgrades. An Archer deals damage and a Drum slows attackers. Each tower can buy both upgrade branches in either order. Select a tower to see the range preview and each available branch’s effect and price. Tap a priced branch to buy it. The first costs 18 silver and the second costs 27 silver, including a 9-silver surcharge.

Choose 20, 40, 60, 80, or 100 waves before the battle. Waves advance automatically through mixed patrols, runner rushes, and veteran columns. Each new wave has a formation cue, and the most recent wave summary shows enemies stopped, escapes, and silver earned. Switch between 1×, 2×, and 3×, or use **Pause** and **Resume**. Buying and upgrading remain available when paused.

**Retry wave** restores the towers, upgrades, silver, and lives from the start of that wave, and lets you edit on the full map. Remove a tower for a full refund if you want to change the layout with an empty purse. **Clear towers** in the first setup restores the starting purse.

## Campaign

Choose **Campaign** to start at Village Watch. There are six battle maps and five levels per map. Clear a level to unlock the next one. The fifth level on each map ends with a pursuit commander and opens the battle’s Chronicle. Progress is saved by level ID in this browser, including earlier Changban clears.

Between levels of the same battle, towers keep their positions and upgrades. Unspent silver carries over, and each new level grants 90 silver. You have ten seconds to build or upgrade before the first wave starts automatically. Pause or open the menu to hold the countdown. During continuous play, each level after the first adds 8% of base movement speed and 12% of formation health, reaching +32% speed and +48% health at level five.

Maps add different pressures. Red Cliffs and Jing have two approaches. Yiling marks tower sites that close on the next wave, refunds affected towers, and gives you five seconds to rebuild before attackers arrive. Wuzhang tracks supply deliveries. The current campaign uses the existing Archer and Drum towers. Road heroes and their upgrade economy are future systems. **Long battle** retains the 20–100 wave choices.

## Main menu and saves

Choose Campaign or Long battle from the main menu. Campaign shows the story briefing before you enter the battle. Use **Main menu** during play to freeze the battle, then **Continue** to return to the same run. **Restart** returns to wave one in the same mode and keeps the saved slot available.

Starting a new battle or restoring a save asks for confirmation if you have an unfinished run. **Save game** writes one slot on this browser. **Restore saved game** opens that exact battle, including towers, enemies, silver, and wave state. A restored battle pauses if combat was active. The sound toggle is saved separately. Campaign clears are saved independently from the battle slot.

## Local development

Use Node.js 20.19+ on the 20.x line or Node.js 22.12+.

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
npm run preview
```

`dev` serves source with live reload. `check` runs TypeScript validation. `test` checks combat, economy, retry, and a winning mixed-defense scenario. `build` writes the production site and service worker to `dist/`. `preview` serves that build for local testing.

## Single HTML file

`npm run build` also writes `dist/standalone.html`, which contains the game code, styles, and programmatically drawn art. To try the single-file version, open it directly or use the [private standalone link](https://edward-z370-hd3.tail94dc7a.ts.net:8472/standalone.html). The normal web build still has its existing service worker.

## Offline web

Serve `dist/` over HTTPS in production. Localhost works for testing. Open the production build while online and wait for **Ready offline**. Switch the browser to offline mode and reload to verify the battlefield still opens. Android Chrome can install the web app through its browser menu. The production worker precaches the shipped files, including local artwork. Close all open app tabs and reopen to activate a waiting update.

## Game code and Android

Keep game rules and board data in `src/game/`, independent of the browser, Canvas, and Preact. Keep rendering, input, and persistence at the platform boundary. Bundle game assets locally so the app can load them offline.

Capacitor is the shortest path to an Android package sharing the web implementation. When that phase begins, configure its `webDir` as `dist`, build the web app, and sync the bundle into the Android project. The bundled files can load on first launch in airplane mode. The web service worker is bypassed in a Capacitor native runtime. A Kotlin-native UI would be a separate implementation that can use the same board data and game rules as its reference.

## Ed-Z370 private play link

Open [3Guo Tower Defense](https://edward-z370-hd3.tail94dc7a.ts.net:8472/) on a device connected to the tailnet. Tailscale Serve proxies HTTPS port 8472 to the loopback static server on port 8804. The enabled user service is `3guotd-web.service`. The service reads the active release through `.releases/current`.

Commit the reviewed changes, then run `bash scripts/publish.sh` on Ed-Z370. The script builds and tests the committed source in staging and switches the active release with one rename. It prints the published commit for the audit record. `npm run build` is available for local verification in `dist/`.

For changes to the offline update path, open the old release and leave a tab open when publishing the new build. Check that the new worker waits and that the old tab can still reload offline. Close all game tabs and reopen to let the waiting worker activate. Confirm the new release then reloads offline.

For changes to the board layout or round controls, verify touch at a 320 px viewport. Check that the entire map fits and tiles near the entrance and gate can both be selected. Confirm neighboring tiles select independently, selecting a tile cannot spend silver before confirmation, and the action bar stays in place. Verify upgrades and mid-wave purchases, then confirm **Retry wave** restores the pre-wave layout and purse. Verify that a refunded tower can fund a replacement and that retry preserves the replacement after restarting the wave. Check automatic wave advancement and verify that Pause freezes combat while tower actions remain available. For private-link changes, also record a check from an intended tailnet device.

To check mobile interactions against a production preview, run `npx playwright install chromium` once, start `npm run preview`, then run `npm run test:ux`. Pass a preview URL as the first argument or set `CHROMIUM_PATH` to use a local Chromium executable. The checks exercise offline purchase, refund, road coverage feedback, and stable board dimensions on two phone sizes.
