# Repository Guidelines

## Project Scope and Layout

This checkout is the 3Guo Tower Defense workspace. See `WORKSPACE.md` for ownership and milestones and `README.md` for development and offline verification steps. Build the mobile-friendly web app first and preserve a path to Android packaging.

Keep game rules and board data in `src/game/`, independent of Preact, Canvas, and browser APIs. Keep browser rendering and input in the app layer. Put shipped static assets in `public/`. Offline build code lives in `scripts/`. Keep runtime assets local so the game can load offline.

## Ways of Working

Follow [Ways of Working](WAYS-OF-WORKING.md) for planning, review, releases, and Herdr panes. Record agreed workflow changes there.

## Development and Verification

Run commands from this checkout. Use `npm ci` to install from the lockfile, `npm run dev` for local development, and `npm run check` for TypeScript validation. Use `npm run build` to produce the web bundle and service worker, then `npm run preview` to serve that build.

For changes to startup, caching, or shipped assets, load the production preview and wait for **Ready offline**. Switch the browser offline and reload. Confirm the screen renders and test the affected flow at a phone-sized viewport.

## Coding Style and Reviews

Follow the existing strict TypeScript setup and two-space indentation. Keep changes scoped to the project. In pull requests, summarize the change, list the checks run, link the relevant issue when available, and include screenshots when they help verify visible changes.
