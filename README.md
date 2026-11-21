# 3Guo Tower Defense

A web-first tower defense game built with Preact, TypeScript, Canvas 2D, and Vite. The current round defends a Shu frontier outpost against infantry and fast runners.

On a phone, scroll the zoomed portrait battlefield to reach more sites, or select **View full map** to see the whole route. Tap an empty tile off the road in the build view to preview an Archer or Drum tower. Confirm the purchase in the action bar. Start with 90 silver, enough for three 30-silver towers. Kills pay 7 or 12 silver depending on enemy level. Spend silver during the wave to build more towers or buy upgrades. An Archer deals damage and a Drum slows attackers. Each tower can buy both upgrade branches in either order. Select a branch to see its effect and confirm the purchase. The first costs 18 silver and the second costs 27 silver, including a 9-silver surcharge.

Choose 1, 3, or 5 waves before the battle. Switch between 1×, 2×, and 3× at any time. Silver, towers, upgrades, and surviving lives carry over. Use **Next wave** to start when ready, or **New battle** to return to setup with a fresh purse and change the wave count.

**Retry wave** restores the towers, upgrades, silver, and lives from the start of that wave, and reopens the build view. Remove a tower for a full refund if you want to change the layout with an empty purse. **Clear towers** in the first setup restores the starting purse.

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

For changes to the board layout or round controls, verify touch at a 320 px viewport. Check 44 px touch targets near and far along the scrollable board. Confirm neighboring tiles select independently, selecting a tile cannot spend silver before confirmation, and the action bar stays in place. Verify upgrades and mid-wave purchases, then retry from **Full map** and confirm **Retry wave** reopens Build with the pre-wave layout and purse. Verify that a refunded tower can fund a replacement and that retry preserves the replacement after restarting the wave. During intermission, check that **New battle** restores setup and lets the player change the wave count. For private-link changes, also record a check from an intended tailnet device.
