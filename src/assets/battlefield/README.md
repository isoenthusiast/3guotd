# Battlefield art

The tower, gate and troop cutouts use the approved Late Han art sheet. The preparation script extracts them from `references/late-han-visual-proposal/` with Pillow. Both purchase portraits and battlefield units draw these same local assets. The four landscape paintings in `src/assets/terrain/` supply continuous field, river, woodland and pass backgrounds.

The illustrated ferry and cart move when the mission records a departure or delivery. The renderer requests additional frames until the movement finishes. Range previews use continuous road segments clipped against each tower’s attack radius.
