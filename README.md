# 3Guo Tower Defense

A web-first tower defense starter built with Preact, TypeScript, Canvas 2D, and Vite. The starter includes one playable wave. Tap up to three tower sites, select Start wave, and survive with at least one life. Select Reset to try a different placement.

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

`dev` serves source with live reload. `check` runs TypeScript validation. `test` simulates all legal tower layouts and checks that placement matters. `build` writes the production site and service worker to `dist/`. `preview` serves that build for local testing.

## Offline web

Serve `dist/` over HTTPS in production. Localhost works for testing. Open the production build while online and wait for **Ready offline**. Switch the browser to offline mode and reload to verify the battlefield still opens. Android Chrome can install the web app through its browser menu. The production worker precaches the shipped files, including local artwork. Close all open app tabs and reopen to activate a waiting update.

## Game code and Android

Keep game rules and board data in `src/game/`, independent of the browser, Canvas, and Preact. Keep rendering, input, and persistence at the platform boundary. Bundle game assets locally so the app can load them offline.

Capacitor is the shortest path to an Android package sharing the web implementation. When that phase begins, configure its `webDir` as `dist`, build the web app, and sync the bundle into the Android project. The bundled files can load on first launch in airplane mode. The web service worker is bypassed in a Capacitor native runtime. A Kotlin-native UI would be a separate implementation that can use the same board data and game rules as its reference.

## Ed-Z370 private play link

Open [3Guo Tower Defense](https://edward-z370-hd3.tail94dc7a.ts.net:8472/) on a device connected to the tailnet. Tailscale Serve proxies HTTPS port 8472 to the loopback static server on port 8804. The enabled user service is `3guotd-web.service`. The service reads the active release through `.releases/current`.

Commit the reviewed changes, then run `bash scripts/publish.sh` on Ed-Z370. The script builds and tests the committed source in staging and switches the active release with one rename. It prints the published commit for the audit record. `npm run build` is available for local verification in `dist/`.

For changes to the offline update path, open the old release and leave a tab open when publishing the new build. Check that the new worker waits and that the old tab can still reload offline. Close all game tabs and reopen to let the waiting worker activate. Confirm the new release then reloads offline. For private-link changes, also record a check from an intended tailnet device.
