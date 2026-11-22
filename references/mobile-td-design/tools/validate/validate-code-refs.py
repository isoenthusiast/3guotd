#!/usr/bin/env python3
"""Verify every code reference in the pack.

Citations name an ANCHOR -- the text that identifies the place in the source -- not a
line number. The shared checkout moves: a peer's navigation refactor shifted
`src/main.tsx` by three lines while this pack was being written, which would have
silently invalidated every line-number citation.

Three layers:
  1. Every anchor in ANCHORS is checked to exist in the file it is claimed for.
  2. Every anchor in the code-map table must exist in its file.
  3. Every `file` (`anchor`) citation in the prose must exist in that file, and every
     `src/...` path the documents mention must exist on disk.
"""
import os
import re
import sys

REPO = os.path.abspath(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "..")
)
PACK = os.path.join(REPO, "references", "mobile-td-design")
DOCS = [
    os.path.join(PACK, "README.md"),
    os.path.join(PACK, "evidence.md"),
    os.path.join(REPO, "designideas.md"),
]

# (file, anchor) pairs the pack relies on
ANCHORS = [
    ("src/main.tsx", "width={columns * tile}"),
    ("src/main.tsx", "showActions"),
    ("src/main.tsx", "Tap Build Archer for your first defender."),
    ("src/main.tsx", "First: ${attackerName(first)}"),
    ("src/main.tsx", "formation.name"),
    ("src/main.tsx", "prepareNextLevel"),
    ("src/main.tsx", "Next threat"),
    ("src/main.tsx", "Base stats before wave and story bonuses"),
    ("src/main.tsx", "<td>{attackers[kind].health}</td>"),
    ("src/main.tsx", "<td>{attackers[kind].speed}</td>"),
    ("src/main.tsx", "Blue lines mark slowed enemies"),
    ("src/main.tsx", "Drum slowing"),
    ("src/main.tsx", "Need {shortfall} more silver."),
    ("src/main.tsx", "setPaused(value => !value)"),
    ("src/game-art.ts", "export const tile = 64"),
    ("src/game-art.ts", "#b7f1e9"),
    ("src/game-art.ts", "tower.kind === 'drum'"),
    ("src/game-art.ts", "round.waveAge * 1.8"),
    ("src/game/board.ts", "export const columns = 9"),
    ("src/game/board.ts", "export const rows = 13"),
    ("src/game/round.ts", "const formations = ["),
    ("src/game/round.ts", "export function waveFormation(number: number): Formation"),
    ("src/game/round.ts", "export function roundFormation(round: Round): Formation"),
    ("src/game/round.ts", "export function enemyMaxHealth(round: Round, kind: AttackerKind): number"),
    ("src/game/round.ts", "formations[(number - 1) % formations.length]"),
    ("src/game/round.ts", "Math.min(24, stage * 2)"),
    ("src/game/round.ts", "sequence: number % 5 === 0"),
    ("src/game/round.ts", ".fill('cavalry')"),
    ("src/game/round.ts", "interval: Math.max(0.45, 1.25 - stage * 0.08)"),
    ("src/game/round.ts", "healthBonus: Math.min(24, stage * 2)"),
    ("src/game/round.ts", "levelPrepRemainingMs"),
    ("src/game/round.ts", "function storySteps(round: Round): number"),
    ("src/game/round.ts", "round.mission.level - 1"),
    ("src/game/round.ts", "storySteps(round) * 0.12"),
    ("src/game/round.ts", "storySteps(round) * 0.08"),
    ("src/game/campaign.ts", "threats[chapter][enemy % threats[chapter].length]"),
    ("src/style.css", "content: none"),
    ("src/style.css", ".useful-site::before"),
    ("src/style.css", "width: 18%"),
    ("src/style.css", "height: 8%"),
    ("src/style.css", "44px minmax(0, 1fr) 98px"),
    ("src/style.css", "44px 54px"),
    ("src/style.css", "opacity: .76"),
    ("src/style.css", ".prep-clock"),
]

print("=" * 92)
print("CODE REFERENCE VALIDATION (anchor-based)")
print("=" * 92)

fails = []
oks = 0
bodies = {}


def body_of(rel):
    if rel not in bodies:
        path = os.path.join(REPO, rel)
        if not os.path.exists(path):
            bodies[rel] = None
        else:
            with open(path, encoding="utf-8", errors="replace") as fh:
                bodies[rel] = fh.read()
    return bodies[rel]


for rel, anchor in ANCHORS:
    body = body_of(rel)
    if body is None:
        fails.append(f"MISSING FILE {rel}")
        print(f"  MISSING  {rel}")
        continue
    if anchor not in body:
        fails.append(f"ANCHOR GONE {rel}: {anchor!r} is no longer in the file")
        print(f"  GONE     {rel}  {anchor!r}")
        continue
    line = body[: body.index(anchor)].count("\n") + 1
    oks += 1
    print(f"  ok       {rel:<20} line {line:<5} {anchor[:46]}")

# ---------------------------------------------------------------- layer 2
# Every anchor in the code-map table must exist in its file.
print()
print("code-map table:")
table_ok = 0
with open(os.path.join(PACK, "evidence.md"), encoding="utf-8") as fh:
    evidence = fh.read()
row_re = re.compile(
    r"^\|\s*(?P<claim>[^|]+?)\s*\|\s*`(?P<path>[^`]+)`\s*\|\s*`(?P<anchor>[^`]+)`\s*\|$"
)
for row in evidence.splitlines():
    m = row_re.match(row)
    if not m:
        continue
    rel, anchor = m.group("path"), m.group("anchor")
    body = body_of(rel)
    if body is None:
        fails.append(f"TABLE {rel} does not exist")
        print(f"  MISSING  {rel}")
    elif anchor not in body:
        fails.append(f"TABLE {rel} anchor gone: {anchor!r}")
        print(f"  GONE     {rel}  {anchor!r}")
    else:
        table_ok += 1
print(f"  {table_ok} table anchor(s) checked")

# ---------------------------------------------------------------- layer 3
# Every `file` (`anchor`) citation in the prose must resolve, and every `src/...`
# path the documents mention must exist.
print()
print("prose citations:")
prose_ok = 0
prose_paths = set()
# A citation is `file` -> `anchor`. A file may carry several anchors:
#   `src/main.tsx` -> `Drum slowing` and `Blue lines mark slowed enemies`
cite_re = re.compile(
    r"`(?P<path>(?:src|references)/[\w./-]+\.(?:tsx|ts|css|md))`"
    r"\s*->\s*`(?P<anchor>[^`]+)`"
    r"(?P<rest>(?:\s*(?:,|and)\s*`[^`]+`)*)"
)
bare_re = re.compile(r"`(?P<anchor>[^`]+)`")
for doc in DOCS:
    name = os.path.basename(doc)
    with open(doc, encoding="utf-8") as fh:
        text = fh.read()
    for m in cite_re.finditer(text):
        rel = m.group("path")
        prose_paths.add(rel)
        if rel.startswith("src/") and not os.path.exists(os.path.join(REPO, rel)):
            fails.append(f"PROSE {name}: {rel} does not exist")
            print(f"  MISSING  {name} {rel}")
            continue
        body = body_of(rel)
        if body is None:
            continue
        # the anchor plus any further anchors listed against the same file
        anchors = [m.group("anchor")] + [
            a.group("anchor") for a in bare_re.finditer(m.group("rest"))
        ]
        for anchor in anchors:
            if anchor not in body:
                fails.append(f"PROSE {name}: {rel} anchor gone: {anchor!r}")
                print(f"  GONE     {name} {rel} {anchor!r}")
            else:
                prose_ok += 1
print(f"  {prose_ok} prose anchor(s) checked, {len(prose_paths)} path(s) referenced")

print()
print("=" * 92)
print(f"RESULT: {oks}/{len(ANCHORS)} anchors verified, {table_ok} table + {prose_ok} prose")
if fails:
    print(f"\n{len(fails)} FAILURES:")
    for f in fails:
        print(f"  - {f}")
    sys.exit(1)
print("Every code reference in the pack points at text that exists in the source.")
