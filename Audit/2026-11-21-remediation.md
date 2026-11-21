# AUD-001 remediation · 2026-11-21

Baseline `17a77c1`. Remediation release `26e6581`.

| Item | Cause and solution considered | Why it fixes the finding and how it prevents recurrence | Outcome |
|---|---|---|---|
| GF-001 | The build cleared and rewrote the live directory. Build the committed source in staging, run checks, and atomically switch the active symlink. | The server reads a completed release throughout the build. A failed check exits before switching, so the publish path itself prevents partial build exposure. | Published release HTML and worker matched HTTPS responses. Forced npm exit 42 and confirmed the active target and both responses remained intact. |
| GF-002 | Wide range and fast shots made two or more towers win from any site combination. Reduce range, increase shot interval, and show range circles and shots. | The tuning makes geography matter now. The separate 42-layout regression test prevents a future change from making every full-budget layout win or leaving fewer than two winning layouts. | Of 20 three-tower layouts, nine won and eleven lost. All 42 tested layouts finished. |
| GF-003 | The project had no commits for comparing or reproducing changes. Record the original baseline and publish a separate reviewed remediation commit. | A baseline fixes the immediate history gap. The publish script builds from a Git archive and prints its commit, so live builds remain tied to reviewable source. | Verified both commits exist and the live release path names the full remediation commit. |
| GF-004 | The audit runner could not host a real browser preview. Verify in a fresh mobile Chromium context across two releases. | This supplies the missing browser evidence. The documented update procedure is the preventive step for future changes to the offline update path. | Old build reloaded offline while the new worker waited. Closing the old tab allowed activation. The new build reloaded offline and supported touch placement, a complete wave, and Reset. |
| GF-005 | Host-side checks could not show whether the intended player could reach and play the game. Ask for an uncoached phone playtest through the private link. | Player feedback adds acceptance evidence. The release checklist calls for an intended-device check on private-link changes and a phone playtest for meaningful gameplay changes. | Edward reported that the playtest worked. Device identity, exact build, and usability observations were not supplied. |

## Closure review

SimaYi independently reviewed the commits, publish script, service override, and active target. She found GF-001 through GF-003 addressed and verified the layout test and shell syntax. The lead agent subsequently supplied the two-build browser evidence for GF-004. SimaYi accepted Edward's report in the context of the intended phone and tailnet playtest for GF-005. The report records successful play, with no claim about exact device, browser, revision, or where the player hesitated. The tailnet policy itself was outside this remediation.

All five findings are verified for their stated scope in `gameflow.db`.
