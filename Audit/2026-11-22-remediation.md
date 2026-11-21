# Campaign and battlefield remediation

[Visual audit](2026-11-22-visual/audit.md) · [Campaign audit](2026-11-22-maps/audit.md)

| Findings | Change | Regression check |
|---|---|---|
| GF-038, GF-039 | Use illustrated terrain, scenery, defenders, and attackers during play. The shop and battlefield share tower portraits. | Inspect phone captures during combat and compare silhouettes with the approved artwork. |
| GF-040 | Reserve one battlefield frame across setup, selection, purchase, upgrade and refund. | The mobile browser test measures the board’s position and size before and after each action. |
| GF-041, GF-050 | Concentrate subtle placement stakes near the road, preview the reachable road and show a warning on cards outside base range. | Test useful and distant sites. Keep free placement available. |
| GF-042, GF-043 | Give play actions priority over session controls. Lead the briefing with the mission and objective, then the illustration. Level selectors open on demand. | Check fresh, returning and offline sessions at both phone sizes. |
| GF-044, GF-045 | Change campaign pressure and test legal mixed builds as well as the two policies that previously trivialized the campaign. | Run all thirty levels and replay the old coverage-ranked policies in the model suite. |
| GF-046, GF-047, GF-048 | Give chapters different threats, change later approaches, and withdraw strategically valuable sites at Yiling with advance warning and refunds. | Check route geometry, formations, closures and a winning playthrough for each level. |
| GF-049 | Put ferries at Jing’s landing and delivery carts at Wuzhang. Reflect milestone progress in the scene. | Compare mission-specific landmarks and milestone states. |

Earlier playtest findings GF-020, GF-023, GF-025 and GF-028 have engineering checks. Their acceptance criteria also call for observations of first-time placement, purchase discovery, understanding Drum effects, and engagement during longer runs. Record actual player observations in gameflow.db.
