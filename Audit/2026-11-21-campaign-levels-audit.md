# Campaign levels audit

Review `AUD-009` covers six maps and thirty tower-play levels. Road heroes, ranged attacks against heroes, and the Hero Points economy are outside this build.

SimaYi rejected `e1bb8db` for these two issues:

- **GF-030 · Yiling refunds were immediately followed by combat.** Closing sites now start a five-second rebuild window regardless of play speed, and waves resume automatically. Verify the closure, refund, a replacement purchase, and the next spawn in the same flow. The model checks a full five seconds at 3× and Chromium built a replacement Drum before wave two spawned.
- **GF-031 · The pursuit commander rule appeared at wave start.** Level five now previews the commander’s rule before the player starts the first wave. In Chromium, the rule and seven-wave objective were readable during setup.

Model simulations found a winning tower-only path for all 30 levels. Chromium at 320 × 640 checked offline entry, full-map touch, Village Watch victory, level-two unlock after reload, old Changban clear migration, Red Cliffs’ two entrances, Yiling’s closure and rebuild, and Long battle.
