# Ways of Working

## Current milestone

Start with the existing one-page web game. Make the first round easy to learn and worth replaying on a phone. Keep game rules separate from rendering and input. Start Android packaging once the web round plays well, then verify that a fresh install can launch and finish a round in airplane mode.

## Per change

1. **Plan.** Pick one player-facing change and write down how to tell it works.
2. **Build.** Implement it in the web app and keep the diff focused.
3. **Audit.** Review the diff, run `npm test` and `npm run build`, and check the affected behavior, touch controls, and offline reload.
4. **Playtest.** Ask someone to try meaningful gameplay changes on a phone without coaching. Record where they hesitate or get stuck.
5. **Release.** Publish a reviewed commit using the staged release process in [README.md](README.md). Record the commit, checks, and any device or player evidence.

## Agents and Herdr panes

**KongMing**, Prime Minister of Shu, is the lead agent and owns the game. KongMing plans and implements changes, coordinates playtests, and owns the release decision.

**SimaYi** is the independent auditor. Ask SimaYi for a critical review of completed work when the change warrants it, such as Android packaging, offline updates, or changes to access controls. Check the stated acceptance criteria and report evidence, failure modes, and unresolved verification across reliability, safety, security, and playability. KongMing addresses findings and verifies the result before release.

KongMing and SimaYi each have a dedicated Herdr pane titled with their name.

Whenever adding an agent, create a dedicated Herdr pane in this workspace. Read `herdr --skill`, confirm the calling pane and workspace with `herdr pane current --current`, and split the calling pane in its current tab and project directory with focus preserved. Verify the returned pane ID and start the agent in that pane. If the pane cannot be created, report the blocker before adding the agent.

## Audit follow-up

Record SimaYi’s reviews and track findings, actions, and preventive methods in [Audit](Audit/README.md). For each finding, confirm its cause, plan a fix, and check whether the plan also prevents recurrence. Add a separate preventive step only when needed. Replan if the fix fails the acceptance check. Record the action, test evidence, and learning before closing the finding.

## Recording decisions

When Edward and the lead agent agree to change how we work, update this guide in the same task. Capture the decision, its scope, and any verification it adds. Keep the link in [AGENTS.md](AGENTS.md) so future agents can find it.
