# Ways of Working

## Current milestone

Start with the existing one-page web game. Make the first round easy to learn and worth replaying on a phone. Keep game rules separate from rendering and input. Start Android packaging once the web round plays well, then verify that a fresh install can launch and finish a round in airplane mode.

## Per change

1. **Plan.** Pick one player-facing change and write down how to tell it works.
2. **Build.** Implement it in the web app and keep the diff focused.
3. **Audit.** Review the diff, run `npm test` and `npm run build`, and check the affected behavior, touch controls, and offline reload.
4. **Playtest.** Ask someone to try meaningful gameplay changes on a phone without coaching. Record where they hesitate or get stuck.
5. **Release.** Once SimaYi completes the audit and explicitly accepts the build, push the accepted commit to the project’s configured Git remote, then publish that same commit to the private Tailscale playtest environment using [the staged release process](README.md). Verify the published playtest build and record the commit, checks, and any device or player evidence. Report any push or publish blocker.

## Agents and Herdr panes

**KongMing**, Prime Minister of Shu, is the lead agent and owns the game. KongMing plans and implements changes, coordinates playtests, and publishes builds accepted by SimaYi.

**SimaYi** is the independent auditor and owns build acceptance. Edward tests the published product and shares feedback. The private Tailscale link is a playtest environment. Ask SimaYi for a critical review of completed work when the change warrants it, such as Android packaging, offline updates, or changes to access controls. Check the stated acceptance criteria and report evidence, failure modes, and unresolved verification across reliability, safety, security, and playability. KongMing addresses findings and verifies the result before release.

SimaYi uses the [tower-defense UX playbook](Audit/TOWER-DEFENSE-UX.md) to review player experience and record evidence for acceptance.

Keep the main Herdr tab in four equal quadrants for every agent launch.

| | Left | Right |
|---|---|---|
| Top | KongMing | SimaYi |
| Bottom | FengChu | Current worker |

Give every additional agent its own named pane. Show one worker at a time in the bottom-right quadrant. Before spawning a new worker, move the previous occupant into a named background tab in this workspace. Split SimaYi’s pane downward at 50% to recreate the worker slot, then launch the new agent there. To bring an existing worker forward, park the current occupant and move the desired worker pane below SimaYi. Preserve live sessions and user focus.

Read `herdr --skill` and resolve live pane IDs before changing the layout. Verify the four pane labels and positions with `herdr pane layout` after each change.

## Audit follow-up

Record every audit finding in [Audit](Audit/README.md) and work it through to verified closure.

1. Identify the root cause and define the acceptance check.
2. Plan a fix for that cause. Check whether the plan fixes the issue and prevents recurrence.
3. Add a preventive step when the fix alone will not prevent recurrence. Replan if the solution will not fix the issue.
4. Implement the fix and test it against the finding. Ask SimaYi to review the evidence for closure.
5. Record the action taken, prevention, verification, and learning in `Audit/gameflow.db`. Report completed fixes. If a finding is blocked, keep it open and report the specific blocker.

## Questions for Edward

Whenever asking Edward a question, give at least three meaningful answer options. Mark exactly one option as **Recommended** and briefly explain why it best fits the current goal.

## Recording decisions

When Edward and the lead agent agree to change how we work, update this guide in the same task. Capture the decision, its scope, and any verification it adds. Keep the link in [AGENTS.md](AGENTS.md) so future agents can find it.

HuangZhong handles campaign rules and balance, and MaLiang handles battlefield artwork when KongMing delegates those areas. Each works in a named Herdr pane. KongMing integrates their work and SimaYi owns release acceptance.
