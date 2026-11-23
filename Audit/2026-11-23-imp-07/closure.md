# IMP-07 follow-up

Review `AUD-033`, 2026-11-23. **Acceptance held for exact `2a1313bb0653361dcae46b2eed1ab540f46ccf36`.** GF-067 is verified closed. GF-068 remains open.

## GF-067 · Overlapping Volley health bars, verified closed

Rebuilt the exact commit and replayed the [original natural wave-five witness](audit.md). At 320 × 480, both outputs showed separate runner and cavalry health rows. The row centers were 21 canvas pixels apart vertically, with 12 px backgrounds and separately centered hit brackets. The displaced cavalry row was tethered to its own enemy. A separate lethal fixture rendered all three kill markers at the model's landing coordinates. Exact-export model/build and the updated browser cue regression passed.

The original overlap came from painting fixed-size bars at the raw enemy positions and drawing the brackets around the clustered sprites. The replacement computes a distinct row for each nearby enemy and resolves each live recipient's bracket by ID to that row. It uses the landing point when the enemy is gone.

## GF-068 · Displaced HP row masks evacuation text

In the same contact frame, the newly displaced cavalry row and its brackets overlap the `2/3 groups across` objective text. The runner row also sits on the breach banner. The collision check reserves space for other HP rows but omits the objective and breach label bands. The rows and markers draw in front of those labels. The result reproduces at 320 × 480 in [standard motion](changban-wave-5-separated-standard.png) and [reduced motion](changban-wave-5-separated-reduced.png).

Verify HP and bracket clearance against any active gate labels in the natural repro. Include the tether draw order so finding space for each health row also preserves the objective and breach text. Human recognition in uncoached play remains pending.

## Final verdict for 4957c40

**Accept exact `4957c40067e5d1c2d0f3bce3737f3fc82af2b3b4` for private web playtest.** GF-068 is verified closed. The previous hold applies to `2a1313b`.

The fix reserves the active objective and breach bands when placing Volley health rows. Their tethers paint beneath the labels. The exact-export `npm test`, `npm run build`, and `scripts/test-trial-cues.mjs` passed. The permanent cue test includes the 163-tick natural fixture and checks both hit markers against each other and the label backgrounds in both motion modes.

The independent 320 × 480 1× replay confirmed that runner 1 and cavalry 2 retained the correct health and received dedicated brackets 21 canvas px apart. The lower bracket cleared the objective background by 12 canvas px. Both tethers preceded the label draw calls, and both banners remained readable in the [standard frame](changban-wave-5-clear-standard.png) and [reduced-motion frame](changban-wave-5-clear-reduced.png). A separate seeded fixture confirmed all three lethal Volley markers remained at their actual contact positions. Crossbow, the unselected Beacon link, and the in-range Drum slowdown passed the cue checks.

This acceptance covers the engineering checks. Uncoached recognition during live phone play, including following a tether when the gate labels are present, is pending.

## Web release

Pushed and published the accepted commit to the private Tailscale site. The served standalone build and service worker matched the release files byte for byte. All three live offline trial flows at 320 × 480 and browser Back passed. The live register showed Accepted, and Fengchu confirmed delivery of the verified link to Edward on Telegram.
