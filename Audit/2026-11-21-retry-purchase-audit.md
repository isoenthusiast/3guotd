# Retry and purchase feedback audit · 2026-11-21

Review `AUD-005` covers editable wave retries and the accepted purchase preview. KongMing reproduced the retry bug on the previously published standalone game. SimaYi reviewed the retry fix and independently found two purchase feedback issues.

| ID | Root cause | Fix and prevention | Evidence |
|---|---|---|---|
| GF-012 | Retry restored the round snapshot, but the independent map-mode state could stay in Full map, which hides the build tiles. | Reopen Build on retry and clear the old selection and preview. Show an exact shortfall and offer a refund hint if the restored budget cannot buy a tower. Repeat real-browser checks from Full map with a zero-silver opening. | At 320 and 390 px, Retry restored the original silver and upgrades, opened Build, and allowed a refund and replacement. Restarting and retrying kept the revised opening layout. |
| GF-013 | The initial fire-rate preview showed the nominal 0.72 s cooldown, which takes 0.75 s to elapse in 50 ms steps. | Store the effective cadence and use it in both the model and the preview. Keep a test that measures the simulated interval between shots. | Fixed-tick regression checks measured 1.05 s and 0.75 s. SimaYi confirmed the preview matches the simulation. |
| GF-014 | The initial pricing text showed a 9-silver surcharge without its trigger. | Tie the extra 9 silver explicitly to the second upgrade. Keep checking the confirmed total and reason together after pricing changes. | Chromium showed 27 silver with the second-upgrade explanation and a 15-silver shortfall at 12 silver. Both branch orders were checked in the model. SimaYi confirmed closure. |
| GF-015 | The unaffordable upgrade state added content beyond the reserved action-bar height, moving the round control. | Keep the upgrade shortfall concise and reserve height for the two action rows and shortfall. Check round-control position before and after entering this state at phone sizes. | Chromium measured the same Start wave offset in setup, tile selection, and the unaffordable preview at 320 and 390 px. |

The browser also checked the dashed range preview before silver was spent, and the existing combat flow still allowed mid-wave purchases and upgrades. Retry preserves the opening snapshot of the current wave. Mid-wave earnings and spending are rolled back as designed.
