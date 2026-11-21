# SimaYi’s tower-defense UX playbook

Use this before accepting a 3Guo TD build. Audit the player experience from noticing a threat through acting, understanding the result, and trying again. A feature can work correctly and still be hard to discover. Assess tactical difficulty separately from friction in the controls.

## Research translated into review criteria

- **Readable decisions.** Ironhide's guide describes a loop of selecting a site, choosing a defense, earning gold, and upgrading. For 3Guo TD, observe whether players recognize a buildable tile, tell Archer from Drum, and anticipate the purchase effect and price. Compare the value of an upgrade with a new tower. Use familiar interaction patterns with original artwork and screen layouts. [Ironhide's guide](https://support.ironhidegames.com/support/solutions/articles/4000223620-kingdom-rush-battles-beginners-guide)
- **Combat the player can explain.** Check whether the route, gate, runners, slowing, health loss, kills, and silver payouts can be followed at normal speed. Check faster speeds for lost feedback. On retry, a player should be able to name a change they want to make and why. Existing reference frames illustrate legible roles, ranges, and prices. [Project reference frames](../references/tower-defense-ux/README.md)
- **Time and input.** Check large, distinct action targets, edge tiles, keyboard movement, focus order, and the complete map at narrow phone sizes. Check that Pause stops combat while preserving purchases and that speed and state are legible. Distinguish eligibility, selection, and effects through shape, labels, or motion as well as color. If placement ever supports dragging, verify an equivalent tap path. [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/basic/) · [W3C on dragging](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements)
- **Learn from a first encounter.** Let a new player try the game silently and without coaching. Observe where they hesitate or take a different path from the intended one. Afterward, ask what they expected their purchase to do and why they think an attacker reached the gate. Avoid prompting during the task unless needed to unblock the session. [Steve Bromley on observation and game user research](https://gamesuserresearch.com/games-user-research-methods/)

## Acceptance exercise for a changed playtest build

| Player task | Record or verify |
|---|---|
| Open the game and defend the gate | Time to first valid placement, wrong taps, route and gate recognition, and coaching required. Start with a fresh session. |
| Place an Archer and a Drum, then upgrade a tower | Taps, silver before and after, ability to compare effects, affordability feedback, and whether selection spends silver. Check both upgrade orders when economy changes. |
| Watch a fast attacker and edit the defense | Identify the runner, observe slowing and impacts, and see whether a player can explain the outcome. Verify Pause and Resume, including purchases while paused. |
| Advance a wave and recover from a poor layout | Verify carryover, result legibility, retry snapshot, and that refunding allows a replacement from zero silver. Ask the player what they would change before giving advice. |
| Repeat on a narrow phone | Check 320 × 640 and 390 × 740. Capture a screenshot or short clip for the affected state. Record whether the gate, selected tile, and actions remain reachable. Check keyboard or another supported input when the interaction changes. |

## Evidence and release decisions

Identify the exact candidate commit, tested viewport, input method, state, and reproduction steps. Record the expected and actual behavior, player impact, and the smallest acceptance check that would prove a fix. Separate observations, hypotheses, and matters of taste. Source review and browser automation verify behavior. A human playtest provides evidence about comprehension, comfort, and enjoyment.

End with **Accept**, **Changes required**, or **Blocked on evidence** for the exact candidate. A failure in a core path such as building, affording an upgrade, reading combat feedback, or retrying requires closure or an explicit scope decision before acceptance. Record findings and prevention in [the audit ledger](README.md). Edward’s playtests inform subsequent decisions. SimaYi owns the gate.

## Calibration on 6e62a91

SimaYi accepted the reviewed purchase and retry behavior. Source inspection and model tests confirmed selection is free, the priced action charges silver, and Retry restores the wave’s opening. Earlier touch-browser evidence covered both upgrades, exact shortfalls, and refund plus replacement at zero silver. First-time discovery and comprehension still need an uncoached player session. This scoped exercise did not reopen the release decision.
