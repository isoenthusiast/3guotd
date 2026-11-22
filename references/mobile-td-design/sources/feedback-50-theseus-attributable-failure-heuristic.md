URL: https://www.theseus.fi/bitstreams/e011aaf2-4b1d-4698-8ba7-956babfde381/download
TITLE: Readability and Designing for Attributable Failure: A Heuristic Framework and its application to Commercial Action-Roguelites: Case Study of Hades (Minenko 2025, Haaga-Helia)
RETRIEVED: 2026-11-22
METHOD: web_extract

**Readability and Designing for Attributable Failure: A Heuristic** 
**Framework and its application to Commercial Action-Roguelites:** 
**Case Study of Hades.**

Egor Minenko

Haaga-Helia University of Applied Sciences

Business Information Technology

Thesis

2025

---

Abstract

Author(s) Egor Minenko

Degree Bachelor of Business Administration

Report/Thesis Title Readability and Designing for Attributable Failure: A Heuristic Framework and its application to Commercial Action-Roguelites: Case Study of Hades.

Number of pages and appendix pages 46 + 1

This thesis proposes a heuristic framework for readability and fairness in action-roguelites: practical rules that developers can apply to ensure legible hazards, fast fail-to-retry loops, and perceived fairness. Building on theory (failure attribution, flow, and learning-through-patterns), the study operationalizes readability with explicit thresholds for five items: telegraph window ( ≥ 500 ms), bullet-to-background contrast (≥ 3:1), HUD/VFX occlusion (≤ 10% of sampled frames), death-to-control latency (“friction seconds”, ≤ 5 s), and first-death attribution (player can state the cause in one sentence). A 0–2 scoring rubric and a compact protocol (clips, frame counts, sampled frames, timed restarts) support consistent evaluation.

We apply the checklist to a commercial action-roguelite called Hades, producing one-pagers (table + annotated frame + notes) and a game matrix. Across the sample, we observe recurrent failure modes: contrast clashes in dark biomes, telegraph windows collapsed by overlapping events, and celebratory VFX or damage numbers masking hazards; and effective patterns such as consistent telegraphs, palette discipline, UI/VFX layering that avoids occlusion, and near-instant restarts.

The contribution is threefold: (1) a printable checklist with definitions and thresholds; (2) a replicable protocol for evidence captures and scoring; and (3) comparative observations that translate into actionable guidance for developers seeking evidence-backed readability improvements.

Keywords Readability; Attributable failure; Heuristic framework; Heuristic evaluation; Action roguelites; Attack Telegraphing; Visual contrast and color coding; HUD occlusion; post-death friction; Fairness

---

## Table of Contents

Abbreviations .................................................................................................................................. 5
1 Introduction........................................................................................................................ 1
1.1 Aims and Objectives.......................................................................................................... 2
1.2 Limitations ......................................................................................................................... 2
2 Theoretical Framework...................................................................................................... 4
2.1 Core constructs and definitions.......................................................................................... 4
2.2 Perception and attention.................................................................................................... 5
2.3 Time Pressure and decision windows................................................................................ 6
2.4 Fairness and feedback....................................................................................................... 9
2.5 Genre and Pillars............................................................................................................. 10
2.5.1 Pillar of clarity ..................................................................................................... 11
2.5.2 Pillar of speed..................................................................................................... 11
2.5.3 Pillar of replayability............................................................................................ 11
2.5.4 Pillars define genre............................................................................................. 12
2.6 Interface interference: HUD and VFX as double-edged swords....................................... 13
2.7 Failure and Difficulty ........................................................................................................ 14
2.8 Fail -> retry loop and motivation....................................................................................... 15
2.9 Bounded randomness and replayability........................................................................... 16
2.10 Operational checks..................................................................................................... 18
2.10.1 Telegraph window: onset -> first damage-possible frame................................ 18
2.10.2 Projectile–background contrast: local luminance ratio..................................... 18
2.10.3 HUD/VFX occlusion: masking by interfaces/effects......................................... 19
2.10.4 Run–restart latency (“friction seconds”): death -> regained control.................. 19
2.10.5 First-death attribution: can the player state cause + why?............................... 20
2.11 Link to research questions.............................................................................................. 20
3 Empirical part................................................................................................................... 22
3.1 Study design.................................................................................................................... 22
3.2 Materials.......................................................................................................................... 22
3.3 Sample............................................................................................................................ 23
3.4 Measures and Thresholds................................................................................................ 23
3.5 Procedure........................................................................................................................ 24
3.6 Results............................................................................................................................. 26
3.7 Reliability and Critique..................................................................................................... 31
3.8 Ethics and data handling.................................................................................................. 32

---

4 Discussion....................................................................................................................... 33
4.1 Answering RQ1: What most impairs readability and perceived fairness?......................... 33
4.2 Answering RQ2: Does the compact heuristic identify issues consistently?....................... 33
4.3 Design implications.......................................................................................................... 34
4.4 Failure attribution in Hades.............................................................................................. 35
4.5 Where the heuristic should (and should not) be used....................................................... 36
4.6 Limitations revisited......................................................................................................... 36
4.7 Reflection......................................................................................................................... 37
4.7.1 Reflection on projectile contrast and color use in Hades..................................... 37
4.7.2 Difficulty tuning without breaking fairness............................................................ 38
4.7.3 Reflection on Telegraphing of Hades................................................................... 39
References.................................................................................................................................... 40
Appendices.................................................................................................................................... 42
4.8 Appendix 1. Heuristic checklist (printable)........................................................................ 42
4.9 Appendix 2. Data collection & calculations (protocol + formulas) ..................................... 42
4.10 Appendix 3. Data summary & schema........................................................................ 43
4.11 Appendix 4. Materials list................................................................................................ 43
4.12 Appendix 5. Telegraph timings in Hades with mean, median, quartiles, IQR, min–max, 
share ≥ 500 ms, and count........................................................................................................ 44
4.13 Appendix 6. HUD/VFX occlusion cases and their impact on visibility.......................... 45
4.14 Appendix 7. Contrast sampling dataset (img1–img11): RGB values, luminance, ratio, 
pass/fail. 46

---

## Abbreviations

| Abbreviation | Spelling |
| --- | --- |
| CPU | Central Processing Unit |
| FPS | Frames Per Second (here: performance metric, not “first-person shooter”) |
| GPU | Graphics Processing Unit |
| HUD | Heads-Up Display |
| PRNG | Pseudorandom Number Generator |
| RNG | Random Number Generation |
| SFX | Sound Effects |
| UI | User Interface |
| UX | User Experience |
| VFX | Visual Effects |
| 2D | Two-Dimensional |
| WCAG | Web Content Accessibility Guidelines. |
| W3C | World Wide Web Consortium. |
| RT | Response Time. |
| IQR | Interquartile Range. |
| RGB | Red, Green, Blue. |

Table 1. Abbreviations and their meanings.

---

## 1 Introduction

Accessible game engines and distribution platforms have enabled small teams and solo 
developers to release commercially successful titles displayed in Figure 1 (Chia et al. 2020). Yet in 
action-roguelites: fast, combat-heavy games with procedural variety: the most common player 
complaints cluster around readability (“I couldn’t see what killed me”) and perceived unfairness
(Chen 2023). These problems are derived from the core loop, and not simply from amount of 
content, if hazards are hard to read or recovery is slow, players irritation is inevitable, even if the 
polish is pristine (Csikszentmihalyi 1990).

45/75 1/1
321

Figure 1. Examples of roguelite games: Hades (Supergiant Games, 2020), Risk of Rain 2 (Hopoo 
Games, 2020), Enter the Gungeon (Dodge Roll, 2016), and Dead Cells (Motion Twin, 2018).

This thesis addresses that problem by proposing and evaluating a heuristic framework for 
designing readable encounters and attributable failure in action-roguelites. The study defines 
practical rules of thumb: telegraph visibility, bullet/background contrast, HUD/VFX occlusion, postdeath restart friction, and first-death/hit attribution, and applies them to contemporary commercial 
titles to see how well the rules flag issues and guide fixes.

---

### 1.1 Aims and Objectives

### Aim

Define and validate readability & attributable-failure heuristic for action-roguelites and demonstrate 
its usefulness through a case study of the game called Hades.

### Objectives

### 1. Operational concepts

– Telegraph window (target ≥ 500 ms; ≈30 frames at 60 FPS) (Swink 2009).

– Bullet/background contrast (target ≥ 3:1), adapting WCAG’s non-text contrast guidance for 
graphical objects to dynamic play scenes (W3C n.d).

– HUD/VFX occlusion budget (target ≤ 10% of sampled frames), reflecting risks from crowding 
and change-blindness in visually dense displays (Marples et at. 2019).

– Post-death “friction seconds” (death -> back to control ≤ 5 s), to preserve flow and reduce the 
cognitive cost of resuming activity (Csikszentmihalyi 1990).

– First-death attribution (player can state the cause in one sentence), aligning fairness with 
visible causes and plausible counterplay

2. Create a scoring rubric and protocol along with a 0–2 scoring system.

3. Conduct a game evaluation. Apply the heuristic to the game called Hades, producing onepagers (table + annotated screenshot + brief notes).

4. Examine cross-game trends. Compile scores into a matrix, pinpoint typical patterns of success 
and failure, and connect the results to theory (fairness, flow, learning).

5. Deliver actionable guidance. Compile a printable checklist and practical recommendations for 
teams to apply for production.

Success criteria: The heuristic is understandable (fits on one page), usable, and informative 
(reveals consistent issues/patterns).

### 1.2 Limitations

While this thesis seeks to deliver a reproducible workflow, several limitations bound the scope and 
generalizability of the work:

• Small-N, qualitative emphasis. Results rely on structured heuristic scoring and brief 
observations, not large-scale user studies or inferential statistics.

• Measurement precision. Frame counts, contrast sampling, and occlusion sampling are 
approximations from short clips and screenshots; minor error is expected.

---

• Hardware & capture variability. Tests run on a single PC setup; display characteristics (size, 
brightness, HDR) and system performance can influence perceived readability and 
measured latency.

• Patch dynamics. Commercial games receive updates; findings reflect the tested versions at 
the time of capture.

• Subjectivity in scoring. Although a rubric is used, judgments (e.g., “borderline”) include 
expert interpretation.

• No comprehensive accessibility audit. The study touches on color-vision concerns via 
contrast and palette checks but does not perform full accessibility testing.

• Genre scope. Conclusions target real-time action-forward roguelites; they may not 
generalize to turn-based roguelikes or non-action genres.

• Because the empirical part focuses solely on Hades—with its dark backgrounds and highluminance projectiles—the thresholds may partially reflect that palette strategy; titles with 
bright or low-contrast environments, or dense bullet-hell patterns, could surface different 
constraints.

---

## 2 Theoretical Framework

This framework defines the core concepts that link readability to designing for attributable failure in 
action-roguelites.

### 2.1 Core constructs and definitions

Readability is the player’s ability to perceive and interpret hazards in time to act, drawing on work 
in perception and visualization about how contrast, motion, and layout support rapid scene 
understanding: “objects differentiated in terms of these simple low-level features popout and can 
be easily found” (Ware 2020, p. 181) and “for glyphs to be seen rapidly, they must stand out 
clearly… on at least one coding dimension” (Ware 2020, p. 181). Moreover, “the luminance 
channel underlies perception of the elements of form (shape), texture, and motion,” which 
motivates our emphasis on luminance/contrast (Ware 2020, p. 150). Attributable failure means a 
death the player can credibly explain by their own decisions (“I dashed late”) rather than by clutter 
or ambiguity, aligning with accounts of meaningful, fair failure in games (Juul 2013). We translate 
the genre’s goals: clarity, speed, and replayability: into practical checks a developer can apply 
during production.

Clarity focuses on signal visibility and consistency. It is operationalized through telegraph windows, 
projectile-to-background contrast, and limits on HUD/VFX occlusion: each grounded in perceptual 
limits on attention and detection, and in accessibility guidance for graphical contrast (W3C n.d.). 
Concretely, “there is more visual interference within channels… ‘like’ interferes with ‘like’,” so 
same-channel HUD/VFX can mask threats unless hazards are coded on a distinct channel (Ware 
2020, p. 181).

Speed concerns fast learning loops and motivation; we capture it with post-death friction seconds 
(time from death to regained control), which supports flow and reduces the cognitive cost of 
resuming activity. As Schell puts it, “this cycle of ‘tense and release, tense and release’ comes up 
again and again in design,” (Schell 2019, p. 122) and “you can see how useful the idea of flow and 
the flow channel can be… so useful that it is Lens #18” (Schell 2019, p. 122).

Replayability requires bounded randomness that remains legible; we test this indirectly via firstdeath attribution (can players state what killed them on their very first failure?), consistent with 
design-centric views that preserve learnable patterns and fair counterplay. Here, output 
randomness is a double-edged sword: it “involves some kind of random element being triggered in 
response to a player action… The benefit… is that it adds excitement… [and] allows for faster 
play,” (Schreiber & Romero 2021, p. 483) yet “on the downside… ‘unlucky’ outcomes can lead to

---

‘cheap’ losses… [players] feel… they lost (or won) because of the dice and not because of their 
choices” (Schreiber & Romero 2021, p. 483).

Together these items form the thesis’s heuristic framework: a compact, repeatable set of rules (with 
thresholds and a 0–2 scoring rubric) used later to evaluate commercial titles and surface patterns 
that affect fairness and player experience: consistent with Schell’s view that “good game design 
happens when you view your game from as many perspectives as possible… [the] lenses… are 
not blueprints or recipes, but tools for examining your design” (Schell 2019, p. xxvi).

### 2.2 Perception and attention

Players form early judgements through preattentive features: differences in color, form, orientation 
and motion: detected in parallel before deliberate attention engages. In visually dense scenes, 
transients from particle effects, screen shake and decorative VFX elevate visual search time and 
increase the likelihood of change blindness, where even large changes go unnoticed when masked 
by clutter or eye movements (Interaction Design Foundation 2018). For readability in actionroguelites, hazards must therefore be designed to stand out at this preattentive stage and remain 
visible long enough to afford a response. As Ware clarifies, “not all preattentive effects are equally 
strong… the strongest effects are based on color, orientation, size, contrast, and motion or 
blinking” (Ware 2020, p. 158), and “purely chromatic differences are not suitable for displaying any 
kind of fine detail” (Ware 2020, p. 112). Moreover, when you must yank attention quickly, “pull cues 
are faster; it takes only about 100 msec to shift attention based on a pull cue” (Ware 2020, p. 407–
408).

In practice, hostile projectiles and threat cues should employ hues and shapes that are clearly 
distinct from friendly or decorative graphics so they “pop” rapidly against the surrounding scene 
(Interaction Design Foundation 2018; Ware 2020). As Ware implied earlier, shape appearance and 
animation are perceived through the luminance channel, a local contrast floor between hazards 
and their immediate background is crucial (Ware 2020 p.150); WCAG non-text contrast guidance is 
a useful baseline to adapt for dynamic game imagery (W3C n.d).

Equally important is avoiding competition on the same visual channel described in Figure 2: 
“information on different channels is easy to separate … whereas information on the same channel 
is easy to fuse, but difficult to separate. There is also less interference between information 
displayed on separate channels” (Ware 2020, p. 150). Reserving the strongest motion/flash 
channels for telegraphs: brief, predictive signals layered across animation, VFX and audio: rather 
than spending them on nearby decorative elements reduces masking and accelerates detection 
(Gray, J. 2015).

---

| Visual Channels | Elements of form and texture | Spatial frequency channels |
| --- | --- | --- |
| Visual Channels | Elements of form and texture | Orientation tuning |
| Visual Channels | Motion | Phase |
| Visual Channels | Motion | Direction |
| Visual Channels | Motion | Luminance |
| Visual Channels | Color differences | Red-Green |
| Visual Channels | Color differences | Yellow-Blue |
| Verbal and Acoustic Channels |  |  |

Figure 2. We distinguish between visual (is divided into 3 groups and these groups consist of 2 
elements) and acoustic information (Ware 2020, p. 149).

These considerations justify two elements of the heuristic: (1) a contrast threshold to ensure 
hazards remain salient under load, and (2) an occlusion budget to limit the proportion of moments 
where UI or celebratory VFX mask critical pixels. When either condition is routinely violated, 
preattentive detection breaks down and timely decision-making: and thus, perceived fairness
suffers (W3C n.d.; Ware 2020, p. 149-150, 181).

While this thesis stresses the importance of luminance contrast because of its role in shape and 
motion perception, this work should not be read as a rejection of chroma-based solutions. Many 
successful action games embody the structure created on saturated color coding, outline shaders, 
emissive glows, and strong silhouettes in order to mark dangers readable even when their base 
luminance is not much different to the luminance of background. In practice, robust readability 
comes from combining channels: sufficient luminance separation where possible, reinforced by 
distinct hues, silhouettes, and animation. The ≥3:1 luminance guideline proposed below is 
therefore a conservative backbone rather than a ban on chroma-driven art direction, and it may 
overfit dark-world/high-luma-threat aesthetics such as Hades if applied rigidly to other palettes.

### 2.3 Time Pressure and decision windows

For action-roguelites, salience must work with how the human visual system encodes and selects 
information under load. In normal viewing the retinal image is imperfect: “retinal image blur varies 
across the retina, and the blur is strongly wavelength dependent (chromatic aberration)”: yet the 
brain constructs a sharp-seeming scene as an inference (Wandell & Winawer 2024). Meanwhile, 
the cortex handles vision through “multiple maps and areas in the posterior cortex,” including 
motion-specialized regions (Wandell & Winawer 2024), so onset/motion cues are privileged routes 
for capture.

---

In fact, “many V1 axons terminate in MT/V5, a region of cortex filled with motion-responsive 
neurons,” and eye-head orienting is tightly coupled to the superior colliculus (Wandell & Winawer 
2024), which helps explain why brief, directional telegraphs (flashes, expansions, trajectory hints) 
pull gaze rapidly. At a coding level, the system favors efficient, low-overlap inputs: visual 
processing “reduce[s] redundancy, using sparse and asynchronous signals” that are later 
integrated (Wandell & Winawer 2024): so cluttered, like-for-like VFX compete on the same 
channels and delay selection.

Design-wise, this physiology sets time and channel constraints. On the time side, response of the 
player depends on games visual feedback in order to adapt it, where motion feels acceptable
above about 10 fps and feedback inside 100–240 ms fuses cause and effect (Swink 2009 at p. 35-
37). Telegraphs that end before a player’s 240 ms perceive–decide–act loop finish “feel sluggish” 
or simply go unseen (Swink 2009 p. 44,45, 47).

Time-pressure and decision windows are illustrated in Figure 3 and provide a benchmark for what 
‘usable’ reaction time looks like. Under task pressure comes from a Brinley plot contrasting gamers 
with non-gamers across many tasks: “VGPs responded 11% faster than NVGPs across a wide 
range of RTs,” (Dye, Green & Bavelier 2009), concluding fundamental trade-off between speed and 
precision (Dye, Green & Bavelier 2009, fig. 3). In practice, telegraph windows must leave enough 
time for a perceive->decide->act cycle to complete; delays near the lower bound feel 
instantaneous, whereas longer delays start to degrade control: Swink notes that 50–100 ms “feels 
instantaneous,” while around 240 ms marks the threshold where real-time control begins to break 
down (Swink 2009, pp. 111–115, 137). Seen together, the 11% RT advantage without accuracy 
loss and the 240 ms human correction cycle motivates a conservative window (≥ 500 ms in this 
thesis) to preserve fairness under attention load.

---

| NVGP Reaction Time (msec) | spatial cueing (VGP RT, msec) | inhibition of return (VGP RT, msec) | Simon task (VGP RT, msec) | ANT - adults (VGP RT, msec) | ANT - children (VGP RT, msec) | flanker interference (VGP RT, msec) | visual search (VGP RT, msec) | n-back (VGP RT, msec) | PI task (VGP RT, msec) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 260 | 245 |  |  |  |  |  |  |  |  |
| 300 | 290 |  |  |  |  |  |  |  |  |
| 315 | 280 |  |  |  |  |  |  |  |  |
| 325 |  | 295 |  |  |  |  |  |  |  |
| 335 | 270 |  |  |  |  |  |  |  |  |
| 345 |  | 315 |  |  |  |  |  |  |  |
| 360 |  | 330 |  |  |  |  |  |  |  |
| 375 |  | 335 |  |  |  |  |  |  |  |
| 390 |  |  |  | 355 |  |  |  |  |  |
| 420 | 320 |  |  |  |  |  |  |  |  |
| 435 |  |  | 415 |  |  |  |  |  |  |
| 445 |  |  | 430 |  |  |  |  |  |  |
| 455 |  |  |  | 420 |  |  |  |  |  |
| 465 |  |  |  | 430 |  |  |  |  |  |
| 480 |  |  |  | 445 |  |  |  |  |  |
| 495 |  |  |  | 460 |  |  |  |  |  |
| 510 |  |  |  | 475 |  |  |  |  |  |
| 530 |  |  |  | 490 |  |  |  |  |  |
| 545 |  |  |  | 505 |  |  |  |  |  |
| 555 |  |  |  | 515 |  |  |  |  |  |
| 565 |  |  |  | 525 |  |  |  |  |  |
| 575 |  |  |  | 535 |  |  |  |  |  |
| 580 |  |  |  |  | 540 |  |  |  |  |
| 590 |  |  |  | 545 |  |  |  |  |  |
| 595 |  |  |  |  | 550 |  |  |  |  |
| 600 |  |  |  |  | 555 |  |  |  |  |

Figure 3. Comparison of RT among gamers and non-gamers across different scenarios (Wandell & 
Winawer 2024 Fig. 1).

On the channel side, because motion and onset are highly weighted and retinal/optic blur degrades 
fine detail outside the fovea, hazards should use coarse, high-contrast shapes with clear motion 
onsets and avoid decorative effects that mimic those same cues in the periphery. Together, these 
facts justify the heuristic’s contrast floor, occlusion budget, and telegraph window: design signals 
that pop in peripheral vision, last long enough to cross a player’s correction cycle, and don’t 
compete on the same perceptual real estate. (Swink 2009, p. 35-37,44-47)

It is worth noting that evidence for broad “gamer RT advantages” is mixed and task-dependent; 
gains are clearer for specific perceptual tasks than for all-purpose decision speed, and simple RT in controlled settings does not map directly onto cluttered, multi-target combat scenes. This 
uncertainty reinforces the choice to treat ≥ 500 ms as a conservative affordance window rather 
than tuning thresholds down under the assumption of uniformly enhanced reflexes among players. 
If anything, contested RT transfer findings argue for leaving more slack in telegraph design, 
especially in early-game content.

Broader claims about global reaction-time transfer are debated and task-dependent; accordingly, 
this thesis keeps a conservative ≥500 ms telegraph window to remain generous under clutter, 
choice RT, and decision bottlenecks rather than simple RT alone.

### 2.4 Fairness and feedback

Failures are experienced as fair when the player can see what is happening, relate the outcome to 
a consistent cause, and imagine or execute a reasonable counteraction. In practice this demands 
precise, timely feedback that verifies what happened (camera shake, sound cues, hit flashes, UI 
states) and a close match between telegraph and outcome so that the cause is visible and 
consistent (cf. Swink 2009). In flow terms, fairness is a condition in balance of challenge and the 
player’s ability, open set goals, instant and expressed in a way that makes it completely clear 
feedback is meant: “Flow conditions include challenge-skill balance, clear goals, and unambiguous 
or immediate feedback dimensions” (Perttula et al. 2017, p. 58). Moreover, good interface usability 
supports entering flow: “good usability of the game interface was found to be a critical prerequisite 
of flow experience” (Perttula et al. 2017, p. 59). These map directly to readability: the player must 
know what to do (goal), see what happened (feedback), and feel that difficulty tracks skill 
(challenge–skill balance) rather than arbitrary punishment.

Operationally, Flow frames the temporal and informational qualities of feedback. Temporally, 
responsive play relies on brief latencies and ongoing control, with a display over 10 fps facilitating 
motion and a response time of approximately 50–100 ms perceived as rapid, whereas around 200 
ms, the response appears slow. (Swink 2009, p. 44–45, 47). Informationally, feedback should be 
interpretable at a glance; Flow is “a state of complete absorption or engagement” (Perttula et al. 
2017, p. 57), which presumes signals that are stable and readable rather than noisy or 
contradictory.

This thesis therefore treats first-death attribution as an operational fairness check: immediately 
after the first death, can a player state in one sentence what killed them and why: linking a visible 
cause to a plausible counteraction? Games that enable such attribution are more likely to maintain 
motivation (cf. Juul 2013), whereas obfuscated causation, muddled signals, or denied counterplay 
tend to induce perceptions of injustice and wasted time. Finally, Flow-compatible design, see

---

Figure 4, patterns also underlie established game-centric models such as Game Flow: 
“concentration, challenge, skills, control, clear goals and feedback” among its core elements 
(Perttula et al. 2017, p. 59).

Figure 4. Flow State Diagram (Csikszentmihalyi, 1997).

### 2.5 Genre and Pillars

This thesis is situated within the parent genre of roguelite, which are roguelikes that retain
procedural generation and the high stakes of permadeath, but the difference being that roguelites 
add between-run “meta progression”, so players carry something forward after failure (Switzer 
2021, cited in Kammonen 2025, pp.5,9-10). Roguelite games are based on the fundamental 
principles of roguelike games, however the difference is crucial, as they include permanent or 
semi-permanent upgrades and unlockable elements, thereby creating a regulatory difficulty (the 
more you try, the easier it becomes, as players carry more upgrades over time) and increasing accessibility while maintaining an emphasis on replayability. (Torick 2021, cited in Kammonen, 
2025 pp. 10, 13).

Genre definition. Roguelites are best read as a design sensibility rather than a narrow genre label: 
the form spans top-down action, FPS, deck-builders, and more, but consistently relies on runbased repetition, procedural variety, and consequence-laden failure (Kammonen, 2025 pp. 5-7). 
Where classic roguelikes limit “progression” chiefly to player skill across restarts, roguelites 
introduce legacy systems: new items, characters, currencies, or modifiers that persist, so, the next 
attempt is meaningfully altered even when a run ends (Kammonen, 2025).

Design implication for this project. Procedural variation will be used to remix encounters within 
bounded rules, while any meta progression remains minimal and illustrative. This aligns with 
Kammonen’s emphasis that replay value in roguelites arises from a mixture of procedural variety 
and progression systems that let players pursue synergies and distinct playstyles across runs 
(Kammonen, 2025 pp. 11-13).

#### 2.5.1 Pillar of clarity

Encounters must be instantly legible so players can parse threats and make informed choices at 
pace. In a roguelite context: where new items, weapons, or status effects combine into emergent 
builds: clear telegraphs, consistent signals, and restrained HUD noise are prerequisites for fair 
experimentation and learning across repeated runs (cf. the thesis’ focus on readable systems that 
support player choice and build construction) (Kammonen, 2025 pp.11-13).

#### 2.5.2 Pillar of speed

The loop from fail to retry should be nearly frictionless, and moment-to-moment control should feel 
immediate. Kammonen stresses that run-based designs thrive when players can quickly re-enter 
play and explore new combinations; fast resets and responsive combat maintain engagement 
while players probe the space of synergies unlocked by progression systems (Kammonen, 2025
pp.9-11).

#### 2.5.3 Pillar of replayability

Variety is the central promise: procedural generation, bounded randomness, and progression 
systems together create different paths, rewards, and synergies from run to run. Kammonen shows 
that expanding the pool of items/weapons and enabling synergistic interactions “vastly” improves 
replay value by letting players refine preferred playstyles over many attempts: an observation this 
slice adopts as a design target (Kammonen, 2025 p. 30).

---

#### 2.5.4 Pillars define genre

Taken together, this framing treats roguelite as a commitment to iterated, varied runs in which clear 
communication, immediate responsiveness, and evolving choices keep players engaged: even 
when a single run ends in failure. In this thesis, these ideas are used as contextual background 
only. We do not develop a vertical slice or implement meta-progression; instead, we evaluate 
readability and fairness using the heuristic defined in Section 2 (telegraph windows, contrast, 
occlusion, friction seconds, and first-death attribution) on a representative case. References to 
roguelite progression and replay structures (e.g., procedural variety and between-run persistence) 
are cited to situate the analysis within the genre’s design sensibility (see Kammonen 2025, pp. 5–
7, 9–13) rather than to prescribe features for this study.

| Pillar | Joy Drivers | Risks |
| --- | --- | --- |
| Replayability (core) | Procedural variety and expanding content pools “vastly” increase replay value by letting players pursue synergies and distinct playstyles across runs. | If variety is insufficient or options converge, players feel they’re “getting the same rewards over and over,” harming engagement; designers must avoid dominant choices. |
| Meta progression | Carrying something forward after failure gives a clear sense of progress, reduces friction, and creates goals beyond a single win; often “paramount to victory,” ensuring players feel the system before their first clear. | Poorly tuned meta can overshadow run skill or pace; over-reliance may dilute tension compared with pure roguelikes (trade-off noted in the thesis’ accessibility vs. friction discussion). |
| Replayability (luck and playstyles) | Build construction (choosing weapons/items/skills) and bounded luck enable exciting “power spikes” when synergies click, helping players push past scaling difficulty. | Luck-based progression can also produce “unlucky” runs where needed synergies don’t appear, leaving players behind the curve: systems should include ways to influence odds. |
| Clarity | Clear, consistent systems and rewards help players learn interactions across many attempts, supporting mastery and satisfying completion of a run from start to end.ds | If communication is unclear (effects, rewards, stakes), players misread options, compounding randomness frustrations and reducing perceived fairness. (Risk inferred from permadeath/learning emphasis.) |

---

| Speed | Fast fail->retry loops and between-run unlocks maintain momentum; players are motivated to “look forward to the next run,” not just the end credits. | Excess friction (slow restarts, repetitive early rooms) undermines the run-based promise and can make losses feel punitive rather than motivating. (Aligned with the thesis’ accessibility rationale.) |
| --- | --- | --- |

Table 2. Pillars and their Risks of Roguelite according to Kammonen 2025. Presents key joy drivers 
and risks associated with roguelite pillars.

### 2.6 Interface interference: HUD and VFX as double-edged swords

HUD elements, floating damage numbers and celebratory VFX can mask or crowd the very pixels 
players need to judge incoming threats. Nearby overlays diminish recognizability of enemies, 
projectiles and pickups by inducing visual crowding: when targets share similar spatial-frequency 
and orientation content with nearby elements, they become hard to segregate from the background 
(letters are “difficult to perceive where the background has spatial frequency components similar to 
the letters”) (Ware 2020, pp. 152–153).

In design terms, “information on different channels is easy to separate… [but] on the same channel 
is easy to fuse, [and] difficult to separate,” so like-for-like HUD/VFX cues amplify interference 
(Ware 2020, p. 150). The risk of momentary blindness rises with transients: during eye movements 
(saccadic suppression) brief changes in the periphery are commonly missed; small peripheral 
targets are also detected poorly, making single, abrupt flashes unreliable (Ware 2020, p. 180). 
Motion onsets can capture attention, but excessive, rapid motion and blinking become irritating 
noise; subtle, sparing use is advised (Ware 2020, pp. 161, 181).

In short, “too many, too similar, too close, too fast” obscures fleeting cues (masking) and 
overwhelms peripheral identification (crowding): the display collapses into texture, and you see 
activity without being able to identify targets or attack patterns—classic outcomes when spatial 
frequency/orientation content between signal and clutter is poorly separated (Ware 2020, pp. 152–
154, guideline G5.4). Finally, “polish” effects applied to the camera—screen shake, motion blur, 
cinematic slowdowns—strongly modulate perception; they can sell impact, but they also overwrite 
the player’s visual channel (the camera is “the players’ eyes”), so overuse risks masking critical 
information (Swink 2009, pp. 6, 26, 162).

Perfect separation of HUD, VFX and gameplay layers is rarely feasible, this thesis adopts an 
occlusion budget: a tolerable share of sampled frames in which hostile bullets are partially hidden by UI/VFX. Keeping that budget low preserves clarity without banning expressive feedback and 
provides a concrete operational check on when interface elements begin to undermine readability.

### 2.7 Failure and Difficulty

Following Juul, failure is not an accident but a structural element that gives play meaning via 
setbacks and effort; the player’s time and energy are the fundamental currency at stake. Juul 
frames the paradox of failure succinctly: “players prefer games in which they fail,” and yet this 
failure is “potentially painful or at least unpleasant,” motivating us to continue in order to escape it 
(Juul 2013, p. 9). Whether failure motivates another attempt or produces churn hinges on fairness: 
losses must be legible and attributable to the player’s decisions and skill, not to opaque systems 
(Juul 2013, p. 9). When the game communicates clearly what went wrong, failure functions as 
information and yields forward momentum: “failure gives the opportunity to consider why we failed 
… [and] has the very concrete positive effect of making us see new details and depth in the game” 
(Juul 2013, p. 59). When it does not, the same failure reads as wasted time.

This fairness lens aligns with the classic Flow account of enjoyment: players are most engaged 
when challenge is matched to skill, often illustrated as a “flow channel” between boredom 
(challenge too low) and anxiety (challenge too high) (Yerkes & Dodson 1908). It also dovetails with 
Koster’s thesis that fun is the process of learning: players enjoy discovering and mastering 
patterns; once patterns are exhausted or illegible, engagement drops. In practice for a roguelite 
slice, readable telegraphs, bounded randomness, consistent hit feedback, and graduated pattern 
density are the primary levers for keeping moment-to-moment challenge inside the flow channel 
and for continually offering fresh, learnable patterns. Meta progression should reinforce mastery of 
this core loop rather than compensate for unclear or punitive baseline play (Kammonen 2025, pp. 
2, 30).

The states of flow and zone are derived on a basis of Yerkes–Dodson curve see Figure 5, which 
suggests designers should aim for moderate cognitive load, is a related but distinct perspective. 
Performance generally increases with increasing arousal until an optimal threshold is reached, 
optimal threshold being when a person instead of focused arousal enters the state of being 
overanxious, which declines the performance as well as the absence of arousal at optimal point, 
increases boredom which again leads to lower performance and focus (Yerkes & Dodson, 1908). 
Increase the complexity of visual patterns in spaces to prevent under-stimulation, and ensure clear 
information transmission and a consistent pace of frame changes with many moving objects to 
mitigate overload.

---

High Performance quality Low Optimal level Boredom or apathy High anxiety Low Arousal level High

Figure 5. The Yerkes–Dodson curve often illustrated as a “flow channel” between boredom 
(challenge too low) and anxiety (challenge too high) (Yerkes & Dodson 1908).

Taken together, fairness explains why readable, attributable failures preserve motivation; Flow and 
Koster explain where and how difficulty should evolve as a stream of learnable patterns; and 
roguelite progression (Kammonen and Juul) explains how between-run systems can maintain 
momentum after a fair loss: without masking a weak core. Accordingly, this thesis locks the core 
loop first (telegraphs, feedback, stability) and introduces only minimal, illustrative meta once the 
run-to-run experience is already satisfying.

### 2.8 Fail -> retry loop and motivation

In high-iteration genres, the latency to try again is a powerful driver of motivation and learning. 
Each additional confirmation step or loading pause inserts friction seconds that disrupt rhythm, 
increase the cognitive cost of resuming the task, and erode a player’s sense of momentum. By 
contrast, near-immediate restarts provide quick cycles of hypothesis and testing after failure and 
success, which helps maintain flow when challenge is calibrated to skill (Perttula et al. 2017, pp. 
58–59; Schell 2019, p. 122).

Timely, clear transitions from death to control preserve a constant sense of agency, when the 
handoff is obvious: through readable cues: players can map failure to their own choices and 
immediately try a different tactic; “failure gives the opportunity to consider why we failed … [and] 
has the very concrete positive effect of making us see new details and depth in the game” (Juul 
2013, p. 59). For these reasons, this thesis times death -> control explicitly and flags slow loops: 
short friction windows support the Speed pillar and sustain perceived fairness by enabling fast 
recovery from mistakes (Swink 2009, pp. 44–47; Perttula et al. 2017, pp. 58–59).

---

### 2.9 Bounded randomness and replayability

Randomness can expand variety and engagement, but it must be bounded so outcomes remain 
legible and counterplay remains available. In design terms, input randomness (before the player 
acts) tends to boost replay value without undermining agency: “Input randomness benefits a game 
mainly by increasing replayability… Players can still plan in advance and rely on their actions, so 
there is the possibility of deep strategy” (Schreiber & Romero 2021, p. 483). On the other hand, 
output unpredictability (after the player acts) increases excitement and speeds up play, but it can 
also result in inexpensive losses, where players believe they lost due to the dice rather than their 
decisions (Schreiber & Romero 2021, p. 483).

Roguelike-derived games can remain fundamentally skill-based if the random elements are 
exposed and counterplay exists: “Yet, these are still games of skill, because of the nature of the 
randomness… Probabilities of everything are exposed to the player… [and] the player is never put 
in an unfair situation where they are sure to die” (Schreiber & Romero 2021, pp. 486–487).

True vs. pseudo randomness (and why it matters). In digital games we almost always use 
pseudorandom numbers: deterministic sequences produced from a seed; “if you give it the same 
seed, you get exactly the same results… it’s deterministic” (Schreiber & Romero 2021, pp. 512–
513).

By contrast, true randomness comes from physical processes (e.g., radioactive decay) and is 
impractical for routine game use (Schreiber & Romero 2021, p. 513). Design implications follow
small seed spaces or naïve shuffles can create patterns players exploit; even good shuffles are 
bounded by machine limits (Schreiber & Romero 2021, pp. 517–519). For most non-competitive 
contexts, “close enough” randomness is acceptable; the standard is fitness-for-purpose rather than 
perfection (Schreiber & Romero 2021, p. 521). In a roguelite, that means we should bound RNG so 
players can read probabilities, anticipate ranges, and retain agency: even when the underlying 
randomness is pseudo rather than truly random, see Figure 6 for visual comparison of True RNG 
and pseudo RNG.

---

**Figure 6. Comparison of true randomness(left) and pseudo-randomness (right) (Menezo, 2000).**

| Category | True randomness (number of points) | Pseudo-randomness (number of points) |
| --- | --- | --- |
| 0 | 1000 | 1000 |
| 0.2 | 1000 | 1000 |
| 0.4 | 1000 | 1000 |
| 0.6 | 1000 | 1000 |
| 0.8 | 1000 | 1000 |
| 1 | 1000 | 1000 |

Figure 6. Comparison of true randomness(left) and pseudo-randomness (right) (Menezo, 2000).

Put simply, randomness should reshape situations, not remove agency. For this thesis, bounded 
randomness means that variety without opacity (players can anticipate ranges and prepare), no 
degenerate cases (random layouts/events don’t routinely erase counterplay or clip telegraphs 
below usable windows), and traceability (after a failure, players can state what happened and 
why).

These principles align with our heuristic checks: minimum telegraph windows (so variation doesn’t 
compress cues beneath reaction budgets), contrast floors and occlusion budgets (so VFX/HUD do 
not turn RNG outcomes into unreadable noise), and first-death attribution (so early losses are still 
explainable).

That said, output randomness is not inherently unfair. When volatile outcomes are clearly 
telegraphed, bound in impact, and paired with visible mitigation tools (e.g., rerolls, safety valves, or 
warnings), they can increase excitement without eroding agency. The heuristic in this thesis 
therefore does not reject output randomness; instead, it assumes that whenever random 
consequences materially affect survival, players should be able to see plausible causes and 
counterplay—an assumption made explicit in the attribution and telegraph checks.

---

### 2.10 Operational checks

Grounded in the principles above, the study evaluates five items that together capture moment-tomoment readability and perceived fairness. Here we define each construct and state its threshold 
with a brief theoretical rationale; full capture/coding procedures appear in Section 3 (Empirical 
methods) and the appendices.

#### 2.10.1 Telegraph window: onset -> first damage-possible frame

Threshold: ≥ 500 ms.

Real-time control depends on tight response budgets: “display above 10 fps” sustains motion; 50–
100 ms feels instantaneous; “around 200 ms” feels sluggish and beyond 240 ms the correction 
cycle breaks (Swink 2009, pp. 44–45, 47).

This 500 ms line should be read as a conservative heuristic rather than a universal perceptual 
boundary. Reaction-time studies and design writing typically report faster correction cycles for 
expert players and for simple, centrally presented stimuli, while more complex choice reactions 
under clutter require longer windows. In practice, usable telegraph time depends on task demands 
(melee vs projectile vs area denial), player expertise, and concurrent load. An alternative would be 
to define adaptive target windows by attack class (for example, shorter for single-source melee 
swings, longer for off-screen or multi-source hazards) or by the density of simultaneous cues. For 
this thesis, a single ≥ 500 ms cutoff is retained for simplicity and to bias judgement toward 
readability; the empirical results are interpreted with this limitation in mind.

#### 2.10.2 Projectile–background contrast: local luminance ratio

### Threshold: ≥3:1 local contrast floor (adapted from WCAG non-text guidance).

Rationale (visibility): The luminance channel carries form/texture/motion (“the luminance channel 
underlies perception of the elements of form (shape), texture, and motion”), and chromatic-only 
differences are poor for fine detail (Ware 2020, pp. 150, 112). A luminance-based floor helps bullets 
“pop” against varied backdrops (cf. W3C, n.d.). Because action-roguelites add motion blur, additive 
VFX, emissive sprites, exposure shifts, and camera movement, perceived contrast can vary frameto-frame; alternative metrics (e.g., local Michelson or Weber contrast on temporally filtered frames, 
or sampling over short frame windows) may sometimes track readability better in motion. Note: 
classical Weber/Michelson definitions and WCAG relative luminance can rank the same sprite–
background pair differently—especially under bloom, tone mapping, or vignetting—so this thesis uses the WCAG-style ratio as a pragmatic, accessibility-aligned baseline and a first-pass screen, 
not a definitive model of moment-to-moment salience.

#### 2.10.3 HUD/VFX occlusion: masking by interfaces/effects

Threshold: ≤ 10% of sampled moments may be fully occluded (budget).

Rationale (channel interference): Information placed on different channels is easy to separate, 
whereas same-channel signals fuse and are hard to separate (Ware 2020, p. 150); keeping a low 
budget for full occlusions preserves legibility during dense effects.

The ≤ 10% occlusion budget is deliberately generous and methodologically convenient rather than 
empirically derived: it marks a point at which masking is frequent enough to plausibly undermine 
trust. The sparse sampling approach used here (selected frames plus Wilson bounds) risks 
undercounting rare but critical occlusions, and it treats all screen locations equally even though 
masking near the avatar is more consequential than in remote corners. More precise alternatives 
would include full-run census methods using engine object-ID or depth buffers, heatmaps of nearavatar visibility, or per-attack visibility traces. These were beyond the scope of this thesis, so the 
occlusion results are interpreted as a conservative lower bound on masking problems, not a 
definitive rate.

#### 2.10.4 Run–restart latency (“friction seconds”): death -> regained control

Threshold: median ≤ 5 s per title/condition.

Rationale (motivation/flow): Short loops maintain agency and flow (Perttula et al. 2017, pp. 58–59); 
longer delays erode the sense of control given the response thresholds above (Swink 2009, pp. 
44–47).

Literature and practice are split on restart pacing: some designers advocate near-instant restarts in 
high-iteration games to protect motivation, while others intentionally use brief interludes to deliver 
narrative beats or emotional comedown. A universal numeric optimum is unlikely. The ≤5 s target 
positions this checklist between two stances: near-instant retries advocated for high-iteration play, 
and slightly longer, narratively meaningful pauses; we favor low friction but allow brief, informationrich interludes when they clearly improve comprehension or pacing. Titles that choose longer 
delays may still be defensible if those pauses are meaningfully used; in such cases, this heuristic 
would flag a trade-off rather than an outright failure.

The ≤5 s target also positions this checklist between two competing recommendations in the 
literature: advocates of near-instant retry in high-failure-loop games, and arguments for slightly longer, narratively meaningful pauses that contextualize failure. Here, the heuristic favors of lowfriction restart while allowing brief, information-rich interludes when they clearly contribute to 
comprehension or pacing rather than empty delay.

#### 2.10.5 First-death attribution: can the player state cause + why?

Threshold: Yes/No (one-sentence cause linking a visible cue to plausible counterplay).

Rationale (fairness as information): When readable, “failure gives the opportunity to consider why 
we failed … [and] makes us see new details and depth in the game” (Juul 2013, p. 59). Nonattributable losses risk churn.

Each instance captured in image is scored on a scale 0-2 (0 = fails; 1 = inconsistent; 2 = clear). 
Procedures (sampling counts, coding rules, inter-rater checks) are specified in Section 3 and 
Appendixes, not here.

This operationalization is intentionally simple but also subjective. It collapses many dimensions—
perceptual clarity, mechanical understanding, and memory—into a single researcher judgement. 
More formal alternatives could include coding errors into categories (misread telegraph, unseen 
projectile, input mistake), think-aloud protocols with independent raters, or confidence ratings 
(“How sure are you about this explanation?”) to separate genuine opacity from momentary 
uncertainty. Within this thesis the one-sentence rule serves as a pragmatic proxy: failures are 
treated as indicators that something in the presentation or timing merits scrutiny, not as a definitive 
measure of cognitive attribution.

### 2.11 Link to research questions

### RQ1: What impairs readability/fairness?

We operate the constructs in Section 2.10 and apply the five checks to each title. A flag is recorded 
when an item fails its threshold (score 0) or is borderline/inconsistent (score 1). Brief notes capture 
the circumstances (scene, effect, camera, palette) that produced the flag so causes remain 
interpretable.

### RQ2: Can a compact heuristic consistently identify issues?

We assess consistency by inspecting game patterns and by estimating inter-rater agreement on a 
small double-rated subset, see Table 3. Agreement is interpreted alongside frame-referenced 
evidence (timestamps, annotated frames).

---

Procedural details for sampling, double-rating, and agreement metrics appear in Section 3 
(Empirical methods).

| Pillar | Construct | Heuristic Item | Rationale |
| --- | --- | --- | --- |
| Clarity | Visual salience | Bullet/background contrast | Hazards must “pop” against local background. |
| Clarity | Signal availability | Telegraph window | Players need a minimum reaction window to act. |
| Clarity | Signal persistence | HUD/VFX occlusion | UI/FX should not routinely hide hazards. |
| Speed | Loop latency | Friction seconds | Fast retry sustains learning and motivation. |
| Replayability | Bounded randomness | First-death attribution | Early failures should be explainable despite RNG. |

Table 3. Mapping of design pillars to heuristic items and their rationales.

Analysis outputs. RQ1 yields per-game one-pagers (summary table + annotated frame + notes). 
RQ2 yields a cross-game matrix (items × games) and a short agreement summary on the doublerated subset, plus a Section explaining any divergences and how they were resolved. Each flag 
references concrete evidence (clip timestamp, frame count, or screenshot ID), ensuring that 
findings can be independently inspected and replicated later.

---

## 3 Empirical part

The empirical part is a focused case study of Hades that demonstrates the heuristic and its 
evidence protocol. Methods (capture, sampling, and computation) are described in Section 3.1–
3.5. Results for each check are reported in Section 3.6 with compact tables/figures; raw perframe/per-event data and screenshots are provided in Appendices 1–7 for traceability.

### 3.1 Study design

This empirical work applies a five-item readability/fairness heuristic to a single exemplar title, 
Hades. The items are: (1) telegraph window (first visible warning -> first damage-possible frame), 
(2) projectile–background contrast (local luminance ratio), (3) HUD/VFX occlusion (masking by 
interface or effects), (4) run-restart latency (“friction seconds” after death/revive), and (5) per-hit 
attribution (whether the cause of a health loss can be stated in one clear sentence). Evidence is 
gathered with a fixed, frame-referenced protocol: one targeted about 20 s dense combat segment 
is captured at 60 fps; ten evenly spaced frames from that segment are exported for RGB sampling 
and occlusion coding; telegraph events are timed frame-accurately from onset to impact; and a 
brief note is recorded immediately after each hit for attribution. Measurements are mapped to 
thresholds (telegraph ≥ 500 ms; contrast ≥ 3:1; occlusion ≤ 10% of sampled frames; restart ≤ 5 s; 
attribution = “Yes”) and each item is scored 0–2 per title (0 = fails, 1 = borderline/inconsistent, 2 = 
meets/clear) with justifications anchored to timestamps and annotated frames. Methods for 
capture, sampling, and calculation (including the luminance/contrast formulas and the occlusion 
rubric) are detailed in Appendix 2. Results for each check are reported in Section 3.6, and the raw 
per-frame / per-event tables and example screenshots are provided for traceability in Appendix 5-7.

$$
\leq5s;
$$

Supplementary materials, clips, images and game play videos mentioned in this empirical part are 
available in my GitHub repository (Minenko 2025).

### 3.2 Materials

Full hardware and software versions, codecs, and storage conventions are listed in Appendix 4.

Screen recordings were captured at the monitor’s native resolution and 240 fps using OBS 32.0, 
encoded with FFmpeg. Frame-accurate inspection used Vegas Pro 21.0 with frame-step enabled; 
death-to-control intervals were timed on the recording timeline. For contrast sampling, a 
pixel/region color picker Krita measured projectile and local-background values; readings were 
taken from lossless PNG frame exports. Evidence assets clips, frames, and annotated figures were 
stored under a structured directory with stable identifiers (e.g., clip01.mp4, img01.png, 
Excel_Figures_Calculations.xlsx) to support traceability to in-text timestamps.

---

Interaction used standard controller with in-game sensitivity at default values and platform input 
remapping disabled unless required by the title. Game platforms and versions/build numbers are 
reported on each per-game results page; where possible, tests were performed on the latest patch 
with default graphics presets and with motion blur, film grain, and chromatic aberration noted if 
changed.

### 3.3 Sample

The empirical dataset is a single-title case study of Hades (PC, 1920×1080 @ 60 fps). To keep the 
protocol tight and reproducible, I constructed a small but focused sample:

Targeted combat segment (≈20 s). From this segment I exported 11 still images and drew three 
local samples per frame (projectile core / halo edge / immediate background), yielding 33 
projectile–background pairs for contrast and matched per-frame occlusion codes (0, 0.5, 1). 
Telegraph events. Across the same capture and adjacent clips, I identified and timed 30 enemy 
telegraphs (first visible warning -> first damage-possible frame) covering common foes in 
Tartarus/Asphodel/Elysium. Per-hit attribution clips. I reviewed 11 health-loss events (clip1–clip11) 
and recorded a one-sentence cause immediately after each hit. Run-level occlusion evidence. In 
addition to the per-frame codes, I logged annotated occlusion cases encountered during a 50-
minute playthrough (e.g., smoke/explosion masking, terrain/prop overlap) to illustrate real 
situations; corresponding screenshots are referenced in Appendix 6. This purposive sample is 
designed to exercise the five checks (telegraph timing, contrast, HUD/VFX occlusion, run-restart 
context, and per-hit attribution) in depth within one representative title. Raw per-frame/per-event 
tables and image references for all items appear in Appendix 6 and Appendix 7(Because samples 
are static frames from dynamic scenes, the reported ratios should be read as indicative rather than 
exhaustive; denser temporal sampling or motion-aware measures could refine these estimates in 
future work).

Hades’ strong dark-ground / bright-threat art direction is also non-neutral: it is unusually friendly to 
the proposed contrast and telegraph heuristics compared to pastel, high-key, or visually busier 
roguelites.

### 3.4 Measures and Thresholds

Telegraph window. Frames from the earliest clearly visible warning to the first frame on which the 
hazard can inflict damage. Because capture rates may vary, timings are computed in milliseconds. 
Target ≥ 500 ms.

---

Projectile–background contrast. Local visibility of a hostile projectile against its immediate 
backdrop. On sampled frames from a dense combat segment, one pixel is taken from the 
projectile’s core and one from the adjacent background to compute relative luminance and the 
contrast ratio. Target ≥ 3:1 (WCAG-style relative luminance; local sampling).

HUD/VFX occlusion. Frequency with which interface layers or visual effects partially or fully hide 
hostile projectiles. On the same frames used for contrast, the focal projectile is coded 0 = clear, 0.5 
= partly occluded, 1 = fully occluded/unreadable; the mean occlusion percentage is then computed. 
Budget ≤ 10% of sampled frames.

Run–restart latency (“friction seconds”). Elapsed time from the first post-death (or revive) frame to 
the moment player input regains control, timed on the recording timeline. Target ≤ 5 s (median per 
title/condition).

Per-hit attribution (Hades). Immediately after each health-loss event, the player states the cause in 
one clear sentence (“what hit + why”). Target: Yes.

Scoring rubric. All five items use a common 0–2 rubric (0 = fails threshold; 1 = 
borderline/inconsistent; 2 = meets/clear), with each score tied to a clip timestamp and/or annotated 
frame for traceability. Calculation details (luminance/contrast formulae, telegraph timing, and the 
occlusion coding rule) are provided in Appendix 2.

### 3.5 Procedure

Gameplay footage (60 fps, 1920×1080) was reviewed to collect evidence for the five checks using 
a fixed, frame-referenced protocol. First, an approximately 20-s dense combat segment was 
selected, and eleven evenly spaced images were exported (img1–img11), see Figure 7 for an 
example. On each image, one pixel was sampled from a projectile core and one from the adjacent 
background to compute relative luminance and the projectile–background contrast ratio; the same 
projectile was coded for HUD/VFX occlusion on a three-level rubric (0 = clear, 0.5 = partly 
occluded, 1 = fully occluded/unreadable).

---

11
44

Figure 7. img4.png as an example of score 0 as clear and non-occluded encounter (Minenko 2025)

For telegraph windows, attacks with a visible warning were identified in the segment and adjacent 
clips; the earliest clearly visible telegraph frame and the first damage-possible frame were marked 
and counted frame-by-frame as illustrated in Figure 8. Durations were recorded in milliseconds 
(frames ÷ 60 × 1000) and later summarized (median, IQR; percentage of animations that is ≥ 500 
ms).

---

Figure 8 WretchedLouts.mp4. This clip illustrates frame by frame attack animation of an enemy
(Minenko 2025)

For per-hit attribution (Hades is hit-based), each health-loss event was paused immediately after 
impact and a one-sentence cause (“what hit + why”) was written; outcomes were coded as Yes / 
Partial / No.

For run–restart latency, in-run revives (Death Defiance) were timed from the first post-death frame 
to the first frame with regained input; the end-of-run hub reset was documented qualitatively as 
part of the structural loop (outside combat).

All measurements were anchored to traceable evidence (video time stamps and image IDs). When 
recordings were logged, long tables and frame screenshots were provided in Appendix 3, and 
calculation details in Appendix 2.

### 3.6 Results

Telegraph windows met the ≥ 500 ms target in 76.7% of coded events (median 800 ms, IQR 525–
900 ms, n = 30). Projectile–background contrast cleared the ≥ 3:1 threshold in 75.8% of samples 
(median 4.09:1, mean 5.97:1, range 1.09–16.23, n = 33). For occlusion, a full-run scan (≈49 min) 
yielded 9 occlusion cases across > 10,000 attacks/projectiles; 2 of these were fully occluded

---

(undetectable due to VFX), 0 were caused by HUD elements, and 0.5 cases were treated as 
visible by design. Under a rough envelope of 3,390–10,410 instances per run, this sample implies 
a very low occlusion rate (<0.1%). However, this figure is extrapolated from sparse observations 
rather than a full census. Denser sampling, automated visibility checks, or spatial heatmaps around 
the avatar might surface additional short occlusions that this protocol misses, so the result is best 
read as “no obvious systematic occlusion problem detected” rather than a precise bound on the 
true rate. Per-hit attribution was 72.7% “Yes” (8/11 clear attributions) and 81.8% on the weighted 
score (Yes = 1, Partial = 0.5, No = 0). Run–restart context is reported qualitatively because Hades 
supports in-run revive; the revive sequence is 3 s to control with 2 s invulnerability, consistent with 
a ≤ 5 s friction target.

$$
72.7\%\text{"}Yes\text{"}
$$

$$
a\leq5s
$$

Telegraph windows (Figure 8) shows the distribution of telegraph durations with the 500 ms 
decision line. Table 3 summarizes per-enemy timings and the aggregate statistics (median 800 ms; 
IQR 525–900 ms; 76.7% ≥ 500 ms; n = 30). In Appendix 5 Enemies without a telegraphed attack 
are listed as “-” and treated as not applicable rather than failures, since the check concerns 
telegraphed hazards.

**Telegraph ms per type**

| Category | Telegraph ms per type (ms) |
| --- | --- |
| unlabelled 1 | 2100 |
| unlabelled 2 | 1020 |
| unlabelled 3 | 1000 |
| unlabelled 4 | 1000 |
| unlabelled 5 | 1000 |
| unlabelled 6 | 1000 |
| unlabelled 7 | 1000 |
| unlabelled 8 | 1000 |
| unlabelled 9 | 1000 |
| unlabelled 10 | 900 |
| unlabelled 11 | 860 |
| unlabelled 12 | 860 |
| unlabelled 13 | 850 |
| unlabelled 14 | 800 |
| unlabelled 15 | 800 |
| unlabelled 16 | 800 |
| unlabelled 17 | 800 |
| unlabelled 18 | 800 |
| unlabelled 19 | 800 |
| unlabelled 20 | 600 |
| unlabelled 21 | 450 |
| unlabelled 22 | 400 |
| unlabelled 23 | 250 |
| unlabelled 24 | 150 |
| unlabelled 25 | 150 |
| unlabelled 26 | 150 |
| unlabelled 27 | 150 |
| unlabelled 28 | 100 |

Figure 8. Telegraph window durations in Hades (n = 30). The dashed line marks the ≥ 500 ms 
target. (Minenko 2025)

HUD/VFX occlusion. Table 4 in appendix 6 lists the nine documented occlusion cases with links to 
evidence images (all evidence available at git, also see Figure 9 and 10). By rule, 0.5 codes (partly 
occluding but still perceivable as intended) are counted as visible; only two cases were fully 
unreadable (1.0). To avoid an impractical census, occlusion is assessed via sampling and bounded 
with confidence intervals; at the run scale observed here (≈3.4k–10.4k instances), a sample 
proportion p̂ whose 95% Wilson upper bound is < 10% is taken as satisfying the budget. The

$$
\hat{\mathsf{p}}
$$ observed counts and the illustrative CI logic together indicate that occlusion lies well below the ≤
10% threshold for the run.

1

Figure 9 img17.png. Example of score 1 with full occlusion of an enemy and its attacks and 
possible projectiles. (Minenko 2025)

---

7

Figure 10 img13.png. Example of 0.5 score of intended occlusions to raise the difficulty (There is a 
projectile in smoke, smoke clears out over time) (Minenko 2025)

Per-hit attribution. Table 4 reports the eleven health-loss clips with the one-sentence cause and 
correctness judgement. Clear attributions (“Yes”) were 72.7%, and the weighted attribution score 
was 81.8% (sum of rates = 9.0 over 11). Ambiguities typically coincide with moments of heavy VFX 
or overlapping actions.

Table 4. Per-hit attribution in Hades (clip-level outcomes and weighted score).

| Clip Name | What hit me? | Is the perceived hit correct? | Rate |
| --- | --- | --- | --- |
| clip1 | got hit by a statue trap | yes | 1 |
| clip2 | Double bomb? | one bomb | 0.5 |
| clip3 | got hit by a trap | yes | 1 |
| clip4 | got hit by walking into enemy or they attacked? | they used animation attack | 0.5 |
| clip5 | got hit by enemy melee attack | yes | 1 |

---

| clip6 | got hit by melee attack | yes | 1 |
| --- | --- | --- | --- |
| clip7 | got hit by range attack once? | yes, once | 1 |
| clip8 | got hit twice by sliding attack | yes | 1 |
| clip9 | got hit by range attack once | yes | 1 |
| clip10 | unsure if I got hit, didn't notice | hit twice | 0 |
| clip11 | got hit by melee attack | yes | 1 |

Projectile–background contrast. Figure 11 shows contrast ratios with a vertical reference at 3:1. 
Based on the samples, the calculated median of 4.09:1 and a mean of 5.97:1 with 75.8% of 
samples being above 3:1. Failures clustered in a few frames with darker or color-matched 
backgrounds: most notably img8 (3 fails) and img7 (2 fails): where pink/light-blue projectiles 
overlapped with cooler mid-tones, the local background skewed greenish-bluish, which reduced 
perceived separation from the projectile’s near-white; this explains the sub-3:1 measurements 
compared with other scenes. A per-image aggregation (3 samples per frame; pass if 2 out of 3 
samples pass and if coefficient ≥ 3:1) yielded 91% passing frames, indicating that even when 
individual pixels drop below threshold, the overall projectile appearance in the frame remains 
distinguishable in most scenes. Table 7 provides the summary of the full 33-row dataset on 
telegraphing is in Appendix 5.

**CONTRAST RATIO**

| Category | Contrast ratio |
| --- | --- |
| 1 | 3.6 |
| 2 | 2.4 |
| 3 | 6.4 |
| 4 | 3.0 |
| 5 | 3.4 |
| 6 | 2.5 |
| 7 | 14.1 |
| 8 | 9.4 |
| 9 | 15.4 |
| 101 | 16.1 |
| 11 | 4.0 |
| 121 | 15.6 |
| 131 | 6.0 |
| 141 | 5.1 |
| 151 | 3.0 |
| 161 | 6.6 |
| 171 | 15.1 |
| 181 | 5.5 |
| 192 | 2.2 |
| 202 | 5.4 |
| 212 | 1.1 |
| 222 | 2.7 |
| 232 | 2.8 |
| 242 | 2.7 |
| 252 | 7.6 |
| 262 | 8.0 |
| 272 | 1.6 |
| 282 | 4.0 |
| 293 | 3.3 |
| 303 | 4.3 |
| 313 | 6.2 |
| 323 | 4.0 |
| 333 | 3.0 |

Figure 11. Projectile–background contrast ratios per sampled observation (img1–img11; n = 33). 
The dashed line marks the ≥ 3:1 target. (Minenko 2025)

---

These results in table 5 are illustrated with additional per-enemy timings and contrast examples in 
Section 4.1–Section 4.2, and the underlying frames/tables are archived for traceability in Appendix 
7.

Given that the ≥ 500 ms standard is intentionally conservative and not tailored by attack type or 
player skill, these results indicate Hades generally exceeds a strict readability bar, while 
acknowledging that some advanced players may cope with shorter windows and that clustered 
threats can compress the effective reaction time.

$$
\geq500
$$

| Mean contrast ratio | Median | Min | Max | % ≥ 3:1 | Samples | percentage per image |
| --- | --- | --- | --- | --- | --- | --- |
| 5.97 | 4.09 | 1.09 | 16.23 | 0.76 | 33 | 91% |

Table 5. Projectile–background contrast in Hades*: per-frame and per-image summary (mean, 
median, min–max, % ≥ 3:1, samples, per-image pass). (Minenko 2025)

$$
\%\geq3:1
$$

### 3.7 Reliability and Critique

A formal second-rater exercise was not conducted for this single-title case study. To mitigate 
subjectivity, all items use fixed, a-priori thresholds and a documented rubric, and every judgement 
is tied to traceable evidence (video timestamps and annotated frame IDs) so that another reader 
could re-code the same material. If a second rater is added later, agreement can be summarized
as percent agreement and, where appropriate, Cohen’s κ on dichotomised pass/fail outcomes 
(collapsing scores 1–2 to “meets/borderline” and 0 to “fails”), with discrepancies resolved against 
the written thresholds.

Internal validity. Threats were reduced by relying on frame-referenced measures (telegraph onset-
>impact counts, per-frame RGB sampling, timed revives), converting timing to milliseconds before 
any presentation in frames to avoid FPS bias, applying a predefined 0/0.5/1 occlusion rubric and 
reporting the mean percentage, using robust summaries (medians and IQRs for latencies; 
proportions for threshold passes for contrast and occlusion), and maintaining an audit trail of 
frame/clip IDs with raw CSVs.

Unobservable occlusions. A methodological limitation of the current protocol is that it can only 
record visible occlusions: moments where a projectile or hazard is at least partially seen before 
being masked. Complete occlusions, where the threat is entirely hidden from the player’s view for 
the entire duration of its relevant window, are by definition undetectable in post-hoc frame analysis. 
In such cases, neither frame sampling nor contrast metrics can capture the event, because no 
visible evidence remains to measure.

---

This introduces a blind spot: the dataset may systematically undercount rare but consequential 
cases of total invisibility. These are precisely the moments most damaging to perceived fairness, 
yet they evade measurement because they leave no visual trace. A potential mitigation would 
require instrumented capture (e.g., engine-level object IDs or depth buffers) to reveal whether 
unseen threats existed off-screen or behind occluding layers. The present study therefore 
quantifies only observable occlusions and treats the reported rates as conservative lower bounds.

The protocol can only register occlusion when a threat is visible at least once within the sampled 
window — for example, when a projectile is seen, then momentarily hidden by effects or interface 
elements, and later reappears. These transitional occlusions are measurable because the analyst 
can compare visible and masked frames. By contrast, hazards that remain completely invisible for 
their entire lifespan — for instance, a projectile that spawns, travels, and expires entirely behind 
opaque layers — cannot be detected by frame-based inspection. Consequently, the analysis 
inherently captures only occlusion transitions, not persistent invisibility, and should therefore be 
interpreted as a measure of observable interference rather than total occlusion frequency.

External validity. Findings are limited by a single-title, purposive sample and a single capture 
configuration, which may not reflect other hardware, display calibrations, difficulty modifiers, or 
later patches. To aid replication, the thesis reports platform and capture settings, cites source clips 
where public recordings are used, and supplies both a step-by-step protocol with formulas 
(Appendix 2) and a CSV schema with raw tables (Appendix 5) so the procedure can be repeated 
on different rigs or builds.

The attribution scores are therefore best read as structured expert impressions; a multi-coder 
setup with an explicit error taxonomy would be required to claim stronger reliability.

### 3.8 Ethics and data handling

Ethical considerations & data management. No personal data was collected. Attribution notes 
consist only of the researcher’s one-sentence descriptions written immediately after each hit; these 
are stored with scene IDs and contain no identifying information. All footage was recorded from a 
legally acquired copy of Hades under normal play. Copyrighted audiovisual material is reproduced 
here solely for analysis and criticism, using short, low-resolution snippets and annotated still 
frames necessary to evidence the findings. Raw screen-capture clips and lossless frame exports 
are stored on a local encrypted drive with stable identifiers (e.g., clip01.mp4, img07.png) and 
mirrored working files; the thesis includes only the minimal derived artefacts (summary tables and 
annotated figures) required for replication.

---

## 4 Discussion

This discussion responds to the thesis question and considers telegraphing readability together 
with personal discoveries gained through the case study of Hades.

### 4.1 Answering RQ1: What most impairs readability and perceived fairness?

In this Hades case study, three conditions most often undermined readability: compressed 
telegraph windows at the moment of attention, insufficient local contrast in specific scenes, and 
short bursts of VFX masking. Although 76.7% of timed telegraphs met the ≥ 500 ms target (median 
800 ms, IQR 525–900 ms), simultaneous dangers and attention bottlenecks meant the effective 
window frequently felt far shorter than measured; players tend to register the cue only in the bright 
end of the color ramp, leaving ≈200–300 ms of usable time in busy moments. Contrast was 
adequate in most samples (75.8% were ≥ 3:1; median being 4.09:1), but failures clustered in 
darker or color-matched contexts (e.g., img7–img8), where pink/white/light-blue projectiles crossed 
cooler blueish mid-tones of environmental colors of Elysium (is a section as location of the main 
loop). Occlusion was rare across the run (nine cases in >7000 instances, only two fully unreadable; 
0 caused by HUD), yet when smoke or explosions temporarily covered enemies, attribution 
became harder in exactly those windows. Consistent with these patterns, per-hit attribution was 
72.7% “Yes” (weighted 81.8%): clear in ordinary scenes, weaker during dense effects or 
overlapping threats. Overall, the data suggests that perceived unfairness is less about any single 
asset and more about co-occurrence: when two of the three factors: compressed windows, low 
local contrast, brief masking: align in the same second, visibility drops and hits become less 
attributable.

$$
75.8\%\mathrm{Were}\geq3:1;
$$

$$
72.7\%\text{"}Yes\text{"}
$$

### 4.2 Answering RQ2: Does the compact heuristic identify issues consistently?

Within one title, the five-item heuristic produced coherent, traceable signals. Items that cleared 
their thresholds (telegraph window, contrast) tended to coincide with clearer per-hit attributions, 
while the few failures aligned with specific evidence frames (timestamps and annotated images) 
that made the cause auditable. The 0–2 rubric was expressive enough to distinguish “clear/within 
threshold” scenes from “borderline” and “fails”, and because each item maps to an operational 
check (window length, local contrast, masking rate, restart context, attribution sentence), flagged 
moments could be tied to concrete, fixable causes rather than general impressions. A formal 
second-rater exercise was not conducted, which limits claims about between-coder consistency; 
however, fixed thresholds, frame-accurate timing in milliseconds, and preserved evidence (clips 
and stills) provide a practical basis for replication. The main edge cases were scenes with dense, dynamic VFX and exposure shifts; converting windows to milliseconds and evaluating contrast on 
local backgrounds mitigated ambiguity in those cases.

### 4.3 Design implications

The Hades case study suggests four practical adjustments that raise readability without diluting 
intensity. First, avoid compressing effective telegraph time when hazards overlap. Although most 
telegraphs measured ≥ 500 ms (median 800 ms), players often only notice cues in the bright end 
of the ramp; staggering concurrent attacks by even 150–250 ms or delaying a secondary cue until 
the first resolves preserves a usable window under real attention load. Second, maintain local 
contrast where it matters. Hostile projectiles in Hades cluster in bright white/pink; small hue/value 
nudges or an inner outline on the projectile when the local background is mid-tone or dark 
prevented the few sub-3:1 cases (e.g., frames like img7–img8) without redesigning assets. Third, 
minimize near-avatar masking. While occlusion was rare overall <0.1% across ≈7,000 instances
per run (Given the light-weight sampling, the <0.1% estimate should be interpreted as “no obvious 
systemic occlusion issue under this protocol” rather than proof that problematic overlaps never 
occur), the unreadable moments coincided with short smoke/explosion bursts; fading damage 
numbers and high-alpha VFX within around 120 pixels of the avatar or pushing them one layer 
back kept threats visible at the exact moment they mattered. Fourth, preserve smooth restarts in 
live play. The 3 s in-run revive with 2 s invulnerability already prevents punitive chain hits; 
surprisingly the invulnerability isn’t visually explicit (brief ring/flash), which could be made more 
explicit to help players reorient with confidence about input safety.

All four adjustments are cheap to validate using the same protocol as this study: stagger or palette 
tweaks can be checked with frame counts and local contrast sampling on a few busy clips; VFX 
layering can be assessed by occlusion coding on the exported frames; revive/readiness states can 
be timed and illustrated with a short, annotated snippet.

Where runs exceed this heuristic, the question is not only “how long” but “what happens during that 
time”: restart friction is more acceptable when it delivers clear feedback or purposeful pacing rather 
than empty downtime. These findings suggest that Hades largely aligns with the “immediate retry” 
school in terms of perceived responsiveness, while selectively spending a few seconds of restart 
latency on feedback, narrative framing, or hub interactions. In doing so, it illustrates the intended 
nuance of the ≤5 s guideline: truncating dead time without forbidding short, purposeful pauses that 
add clarity or meaning to repeated failure. Hades largely realizes the “immediate retry” ideal in 
perceived responsiveness while selectively spending a few seconds on feedback or framing; this illustrates the intent of the ≤5 s guideline, trim dead time without forbidding short, purposeful 
pauses.

### 4.4 Failure attribution in Hades

In Hades, a hit-based health system makes per-hit attribution a better proxy for perceived fairness 
than a single first-death statement. Using that adaptation, 72.7% of health-loss events were 
described immediately with a specific, actionable cause (“what hit + why”), and the weighted 
attribution score reached 81.8% when partial attributions were counted (Yes = 1, Partial = 0.5, No = 
0). In ordinary scenes this clarity tracked the other checks: telegraphs typically offered a 
measurable window around 800 ms and local contrast met the > 3:1 target in most samples, so the 
post-hoc sentence was straightforward (“dash late into Lout charge,” “walked into trap arc”). Where 
attribution slipped: entries marked Partial or No: the frame-referenced evidence almost always 
showed one of two conditions the rest of the analysis also surfaced: overlap spikes that 
compressed the usable window even though the raw telegraph still measured ≥ 500 ms, or short 
VFX bursts (smoke/explosions, yellow–orange screen tints) that briefly hid the cue or the attacker. 
These moments align with the few sub-3:1 contrast frames (for example, img7–img8) and with the 
occlusion cases logged across the run, suggesting that loss of explainability is less about unknown 
mechanics and more about presentation timing and visibility in the final 200–300 ms before impact.

Although attribution is, by nature, a subjective judgment made in context, tying each sentence to 
traceable frames and timestamps helps distinguish genuine ambiguity from correctable 
presentation issues. When the attribution read “unsure: didn’t notice,” the linked frames typically 
revealed either simultaneous threats converging near the avatar or a short-lived masking layer at 
the exact decision moment; conversely, when the footage showed a clear cue and separation from 
background, the written cause was precise and often suggested immediate counterplay (earlier 
dash, reposition out of arc, avoid trap line). In this sense, per-hit attribution functions as a 
coherence check on the other items: high telegraph/contrast scores tend to co-occur with 
explainable hits, while the few lapses cluster exactly where the heuristic flags compressed 
windows, low local contrast, or transient masking. That pattern supports the interpretation that 
perceived fairness in Hades is primarily governed by whether the player can see and time a 
response in the final slice of the action, not by hidden rules; it also underlines why small 
adjustments: staggering overlaps, nudging local values, and fading near-avatar VFX: can 
measurably improve both readability and the player’s ability to tell, in one sentence, what just 
happened and how to avoid it next time.

---

### 4.5 Where the heuristic should (and should not) be used

The five checks in this study are designed for the moment-to-moment readability of action-forward 
roguelites, where hazards, telegraphs, and VFX arrive quickly and repeatedly. In that setting the 
rubric acts as a practical front-line triage: telegraph timing identifies whether warnings are long 
enough to be usable under attention load; local contrast captures whether threats separate from 
their immediate backgrounds; the occlusion code reveals when celebratory effects or props 
temporarily hide danger; per-hit attribution verifies that outcomes are explainable in plain language; 
and the restart measure keeps the loop from feeling punitive. The Hades case shows how these 
items work together: most telegraphs measured at or above 500 ms, contrast cleared 3:1 in the 
majority of samples, occlusion was rare in absolute terms, and per-hit attribution was strong in 
ordinary scenes but weakened during dense effects. That mix of signals is exactly the kind of 
pattern the heuristic is meant to surface for designers under production time pressure. At the same 
time, rubric is not a substitute for broader accessibility or difficulty-curve work. It does not test 
color-vision variants, audio cue reliance, input remapping, or long-horizon progression fairness, 
and it is not intended to compare absolute art direction between titles. It also assumes a playercentered, camera-stable view; genres with very different presentations: first-person shooters with 
aggressive motion blur, 2D platformers with parallax foregrounds, or strategy games with heavy UI 
overlays: may need adapted thresholds or additional items. The right way to use this heuristic is as 
an early warning and verification tool for visual and temporal clarity: apply it to busy segments, act 
on any flags it reveals, and then layer deeper studies: accessibility reviews, user tests, telemetry, 
or expert playthroughs: when questions exceed the scope of frame-level readability.

### 4.6 Limitations revisited

The findings are bounded by a focused, purposive sample centered on a single title, Hades, 
analyzed from one capture configuration. That scope was deliberate to keep the protocol tight and 
the evidence traceable, but it limits generalization to other games, patches, hardware, and display 
calibrations. Measurement itself favors practicality over instrumentation: telegraphs are timed 
frame-accurately from video rather than from engine events; contrast relies on sRGB pixel 
sampling and the WCAG luminance model rather than photometric calibration; occlusion is coded 
on a three-level rubric and summarized as proportions; and attribution is an immediate, researcherwritten sentence after each hit. These choices make the method fast and repeatable, yet they 
inherit known constraints: attention is distributed unequally across the screen, per-frame sampling 
can miss within-frame variation, projectiles with halos or motion blur can produce conservative 
contrast estimates, and rare occlusion events require enough samples to bound their rate with 
confidence. The use of public recordings where applicable introduces further variability in compression and color space, mitigated here by lossless frame exports for analysis and by 
reporting in milliseconds to avoid FPS bias. Inter-rater reliability was not formally run for every item, 
so consistency claims rest on fixed thresholds, preserved timestamps and frame IDs, and 
transparent rubrics rather than large-scale coder studies. Despite these limits, the patterns are 
coherent with the evidence gathered: telegraphs cluster around 800 ms with a clear pass majority, 
contrast passes in most contexts with failures concentrated in darker or color-matched scenes, 
occlusion appears rarely relative to the scale of a run, and per-hit attributions align with visible 
causes except during brief VFX saturation. The study’s value lies in that traceability. Every claim is 
tied to frames, times, and simple calculations, and the protocol and CSV schema enable others to 
re-run the same checks on different rigs, later builds, or additional titles to test how far the patterns 
hold.

A natural next step would be to apply the same protocol to brighter, flatter, or more visually chaotic 
roguelites and bullet-hells to test whether the present thresholds systematically favor “dark world, 
bright hazard” solutions and under-represent other successful readability strategies.

### 4.7 Reflection

The following three reflections translate the quantitative results into design-level insights for Hades.

#### 4.7.1 Reflection on projectile contrast and color use in Hades

Methodologically, When I began sampling frames for contrast, I expected a broad palette: one 
projectile color per enemy, more or less. The measurements showed the opposite: almost all 
projectiles I captured, roughly 90–95%, sit in a narrow band of bright white, pink, or white with a 
pink tint. I have ≥ sixty hours in Hades, yet I had never consciously noticed this. If asked before 
measuring, I would have said “it depends on the enemy,” but the data shows it mostly does not. In 
retrospect this makes sense because the game darkens the world and brightens danger. 
Backgrounds and floor tiles sit at low RGB values (often below 70–80 on a 0–255 scale), while 
threats occupy the high end. Readability is therefore not only a frame-by-frame comparison of 
projectile against background; it is a global separation strategy where the playfield remains dim 
and any threat needs only a modest push toward white or pink to stand out.

This finding connects directly to the telegraph timings. Enemies do not simply start an attack; they 
ramp into a brighter state as the attack progresses, with color moving toward white just before the 
damaging frame. That ramp creates a shared visual language: more white means more imminent: 
and it also compensates for attention limits. In actual play, attention does not track every enemy 
from the first animation frame; many cues are only registered in the final 200–300 milliseconds, when brightness is already high. The color ramp effectively meets the player where attention 
actually lands. Taken together, the design forms a simple triangle: the world stays low-luminance 
and muted, threats use a narrow high-luminance palette centered on white and pink, and the timing 
system peaks brightness at the moment of impact. The result is that danger feels “visibly 
inevitable”: even if the very start of a move was missed, the approach to white signals urgency in 
time to matter. This also explains why measured windows were long (around 800 ms) while play 
still felt tight. The windows are not necessarily short; rather, they are often noticed only once the 
color ramp is already high or once temporary VFX clears. Explosions and yellow/orange screen 
tints can remove 200–300 ms of visibility, and human reaction time (250 ms plus 50–100 ms to 
parse what is happening) consumes more of the budget. The color system is doing significant work 
to keep what remains readable.

For the thesis, this matters because it shows contrast in Hades is ≥ a high-versus-low ratio. It is a 
layered solution: dark world, light threats, and time-based brightening. Our >3:1 heuristic captures 
the frame-level component, but the lived experience depends on when in the animation the highcontrast state appears and how much of that window is lost to effects or divided attention.

#### 4.7.2 Difficulty tuning without breaking fairness

Our results support treating the heuristic thresholds as guardrails, not absolutes. Designers can 
deliberately tighten telegraph windows (e.g., approach 200–300 ms) or introduce intentional subocclusions (brief smoke, sparks, screen tint) to raise difficulty: provided feedback remains 
interpretable and failures stay attributable. In our coding, 0.5 occlusions (partly occluded but still 
perceivable) were treated as visible by design, not counted as failures (see Appendix 6; “by rule, 
0.5 codes … are counted as visible”): which reflects this intent to allow tasteful masking that 
heightens challenge without erasing information (Appendix 6).

The risk is that these same tools are double-edged: compounded masking or overly compressed 
cues can push players from engagement into anxiety, while removing them entirely can slide into 
boredom. In flow terms, the craft is to balance challenge–skill, keep goals clear, and provide 
immediate/unambiguous feedback so players feel progress rather than arbitrariness (Perttula et al. 
2017, pp. 58–59). Swink’s timing guardrails help here: displays above around 10 fps sustain 
motion; 50–100 ms response feels instantaneous; 200 ms starts to feel sluggish; and around 240 
ms real-time control begins to break down (Swink 2009, pp. 44–45, 47). Used sparingly, subocclusions and faster animations can “shape” difficulty to keep players in the flow channel: “tense 
and release” rather than overload (Schell 2019, p. 122): but stacked or persistent versions will 
undermine readability and perceived fairness.

---

Practically, recommendation: cap concurrent masking events (e.g., avoid overlapping smoke + 
camera shake during the same 300 ms telegraph), keep telegraph shortening above a 
conservative floor (≥ 250–300 ms of truly visible warning after clutter), and verify with first-death 
attribution: if new players cannot say in one sentence what hit them and why, the tuning has 
slipped from meaningful difficulty into unfair opacity (cf. our attribution check in Section 2 and 
Results).

#### 4.7.3 Reflection on Telegraphing of Hades

A striking result from the empirical coding was that most Hades enemies offered relatively long 
telegraph windows, averaging around 800 ms before impact. However, this figure did not align with 
my subjective experience while playing during live combat, the window often feels much shorter. 
Reviewing footage clarified why. First, enemies begin their animations gradually. Their color or 
glow intensifies over several hundred milliseconds, but the early frames are subtle and easily lost 
among other motion cues. When multiple enemies are present, my visual attention does not 
register the start of those animations until they become bright white: often in the final 200–300 ms 
of the sequence. Second, the effective reaction window for the player is further reduced by human 
response latency (250 ms for visual stimuli) and cognitive processing time (50–100 ms to identify 
the source and decide on a dodge or block). So, 800 ms telegraph can feel like only 400–500 ms 
of usable time. Lastly, intense visual effects play a big role as well like environmental VFX: 
explosions, damage flashes, and area effects: frequently mask attack cues for 200–300 ms at a 
time, particularly through large yellow–orange screen tints. When the scene clears, the attack 
animation has already progressed toward impact, leaving little room to react.

Together these observations show that while the raw timings in Hades meet the nominal ≥ 500 ms 
readability threshold, the perceived readability is substantially lower under typical play conditions. 
The gradual bright-white telegraphing system helps restore some visibility by signaling “danger 
now,” but only in the final stage of the animation. This interplay between technical telegraph 
duration, visual clutter, and human reaction latency appears central to how difficulty and fairness 
are perceived in dense action scenes.

---

## References

Gray, J. 2015. Enemy Attacks and Telegraphing. Game Developer. URL: 
https://www.gamedeveloper.com/design/enemy-attacks-and-telegraphing. Accessed 4 November 
2025.

Interaction Design Foundation - IxDF. (2018, October 2). Preattentive Visual Properties and How to 
Use Them in Information Visualization. Interaction Design Foundation - IxDF. 
https://www.interaction-design.org/literature/article/preattentive-visual-properties-and-how-to-use-
<u>them-in-information-visualization</u> Accessed 4 November 2025.

Juul, J. 2013. The Art of Failure: An Essay on the Pain of Playing Video Games. Cambridge, MA: 
MIT Press.

Kammonen, E. 2025. Progression Systems in Roguelite Games. Bachelor’s thesis. Tampere 
University of Applied Sciences. URL: https://www.theseus.fi/handle/10024/881994. Accessed 4 
November 2025. (Used in text with secondary citations such as “Switzer 2021, cited in Kammonen 
2025” and “Torick 2021, cited in Kammonen 2025”.)

Perttula, A., Kiili, K., Lindstedt, A. and Tuomi, P. (2017). Flow experience in game-based learning –
a systematic literature review. International Journal of Serious Games, URL: 
https://researchportal.tuni.fi/en/publications/flow-experience-in-game-based-learning-a-systematic-
<u>literature-re/</u> (Used in text with secondary citation such as Csikszentmihalyi, M., Finding Flow, 
1997.)

Schell, J. 2019. The Art of Game Design: A Book of Lenses. 3rd ed. Boca Raton: CRC Press.

Schreiber, I. & Romero, B. 2021. Game Balance. Boca Raton: CRC Press.

Simply Psychology. n.d. What is the Yerkes–Dodson law? URL: 
https://www.simplypsychology.org/what-is-the-yerkes-dodson-law.html. Accessed 4 November 
2025. (Used in text with secondary citations such as “Yerkes & Dodson, 1908”)

W3C. n.d. WCAG 2.x — Non-text contrast (SC 1.4.11). World Wide Web Consortium. URL: 
https://w3c.github.io/wcag21/understanding/non-text-contrast.html. Accessed 4 November 2025.

Wandell, B.A. & Winawer, J. 2024. Human visual cortex. In: Encyclopedia of the Human Brain.
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC2871325/#F1. Accessed 4 November 2025. (Used 
in text with secondary citations such as Dye, Green & Bavelier 2009 as referenced when 
discussing reaction-time evidence.)

---

Ware, C. 2020. Information Visualization: Perception for Design. 4th ed. Cambridge, MA: Morgan 
Kaufmann.

Minenko, E. 2025. Case Study of Hades. GitHub repository. Available at: 
https://github.com/EruVangeance/Case-Study-of-Hades/tree/master (Accessed 11 November 
2025).

Chen, Y. 2023. Cyber Discipline: How Roguelite Games Engage Players – A Perspective from 
Foucault’s Discipline and Punish. Available at: 
https://www.researchgate.net/publication/371386626_Cyber_Discipline_How_Roguelite_Games_E
<u>ngage&#95;Players&#95;-&#95;A&#95;Perspective&#95;from&#95;Foucaults&#95;Discipline&#95;and&#95;Punish</u> (Accessed 11 
November 2025).

Debnath, S.; Levy, T. J.; Bellehsen, M.; Schwartz, R. M.; Barnaby, D. P.; Zanos, S.; Volpe, B. T.; & 
Zanos, T. P. 2021. A method to quantify autonomic nervous system function in healthy, able-bodied 
individuals. Bioelectronic Medicine 7:13. URL: 
https://bioelecmed.biomedcentral.com/articles/10.1186/s42234-021-00075-7 Accessed 12 
November 2025.

Depecker, P.; Ménézo, C.; Aude, P.; Bouia, H.; Virgone, J. 2000. Simulation of Thermal Building 
State in Summer—Study of Results Uncertainties for Thermal Ambient Prediction. International 
Journal on Architectural Science, 1(3). URL: 
https://www.academia.edu/95939267/Simulation_of_Thermal_Building_State_in_Summer_Study_
<u>of&#95;Results&#95;Uncertainties&#95;for&#95;Thermal&#95;Ambient&#95;Prediction</u>. Accessed 12 November 2025.

---

## Appendices

### 4.8 Appendix 1. Heuristic checklist (printable)

Five checks, thresholds, scoring (0–2)

1. Telegraph window: time from first visible warning -> first damage-possible frame. Pass 
target is ≥ 500 ms.

2. Projectile–background contrast: Pass target ≥ 3:1 (local ratio).

3. HUD/VFX occlusion: % of sampled frames where a projectile is partly or fully masked by 
HUD/VFX/terrain. Budget is ≤ 10%.

4. Death->control (“friction seconds”): median restart ≤ 5 s.

5. Attribution: (here adapted to per-hit attribution) “Can the cause of the hit be stated in one 
sentence?” Target = Yes.

Scoring rubric per item (0–2): 0 = fails threshold routinely; 1 = borderline/inconsistent; 2 = 
meets/clear. Evidence: clip timestamp and/or annotated image ID.

### 4.9 Appendix 2. Data collection & calculations (protocol + formulas)

### Capture & sampling

• Recordings at 60 fps and 1920×1080 resolution.

• Frames for contrast/occlusion: 10 evenly spaced per segment (n = 33 in our Hades 
dataset).

• Telegraphs: identify at least 4–5 per enemy type (n = 30 total).

### Telegraph window (ms)

1. Pause on first visible telegraph frame -> start_frame.

2. Step to first damage-possible frame -> hit_frame.

3. Measure length in ms in Vegas 21 pro.

4. Report median and IQR (Q3–Q1); percentage ≥ 500 ms.

### Contrast ratio (projectile vs local background)

1. Sample RGB from the projectile core pixel and from the adjacent background (avoid HUD).

2. Compute relative luminance: L=0.2126R+0.7152G+0.0722B (Debnath et al., 2021),
R′=(R/255)2.2 (Debnath et al., 2021).

3. Contrast ratio calculation function: CR= (max(Lproj,Lbg)+0.05) / (min(Lproj,Lbg)+0.05)

4. Pass if CR ≥ 3:1

HUD/VFX occlusion scoring system 0 clear; 0.5 partly occluded; 1 fully occluded/unreadable.

---

### Per-hit attribution (Hades is hit-based)

1. After each hit, record a one-sentence cause (“what hit + why I got hit”).

2. Code Rate: Yes = 1; Partial = 0.5; No = 0.

3. Report percentage and weighted attribution score = AVERAGE(Rate).

### Death->control

• Measure on the timeline: first frame after death -> first frame of regained input. Report 
median; threshold ≤ 5 s.

### Data management

• Store frames as PNG; name frames/clips with stable IDs (e.g., hades_seg1_f03.png).

• Keep a CSV with game, segment, frame_id, proj_RGB, bg_RGB, CR, occlusion, notes and 
an events CSV for telegraphs and hits.

### 4.10 Appendix 3. Data summary & schema

### All evidence for the Hades case study is stored under the repository:

https://github.com/EruVangeance/Case-Study-of-Hades/tree/master

• Hades\AttackFrames\: short clips for telegraph timing, one file per enemy, e.g., 
WretchedThugs.mp4, SlamDancer.mp4. These clips provide the onset->impact frames 
used for the telegraph window measure.

• Hades\AttributedFailure\: per-hit attribution clips, named Clip1.mp4 … Clip11.mp4. Each 
clip corresponds to one row in the attribution table in the thesis.

• Hades\ContrastChecks\: contrast frames used for RGB sampling, named img1.png … 
img11.png. These are the sources for the 33 projectile–background samples.

• Hades\OcclusionChecks\: occlusion examples and evidence frames, named img12.png … 
img19.png, referenced from Table 4 in Results.

• Hades\ Excel_Figures_Calculations.xlsx: the working file containing all derived tables and 
formulas.

### 4.11 Appendix 4. Materials list

| Component | Specification |
| --- | --- |
| System | Windows 10 (64 bit) |
| CPU | Intel Core i7-8700K (3.7 GHz) |
| GPU | Asus GeForce GTX 1080 Ti ROG-STRIX-GTX1080TI-O11G (11 GB) |

---

| RAM | 32 GB DDR4-2400 (G.Skill Aegis, 2 × 16 GB) |
| --- | --- |
| Motherboard | Asus ROG STRIX Z370-F GAMING (Intel Z370, ATX) |
| SSD | Samsung 850 EVO 500 GB SATA SSD |
| Display | AOC 32G2WG8 |
| Input | Keyboard and mouse; Sony wireless controller model CFI-ZCT1W |
| Recording | OBS Studio 32.0, 1920×1080 60 fps, MP4 |
| Frame stepping | Vegas 21 Pro |
| Color/contrast sampling | Krita |
| File formats | MP4/MOV (clips); PNG (frames &amp; annotated Figures) |
| Evidence storage | /empirical//{clips,frames,figs}/ with stable IDs |

**4.12 Appendix 5. Telegraph timings in Hades with mean, median, quartiles, IQR, min–max, 
share ≥ 500 ms, and count**

| Enemy | Telegraphms | Pass/Fail | / | Mean | 746.3333 |
| --- | --- | --- | --- | --- | --- |
| Numbskull | 850 | Pass | / | Median | 800 |
| Skullomat | - | Pass | / | Q1 | 487.5 |
| Wringer | 800 | Pass | / | Q3 | 1000 |
| Wretched Witches | 150 | Fail | / | IQR | 512.5 |
| Wretched Louts | 860 | Pass | / | Min | 100 |
| Wretched Thugs | 860 | Pass | / | Max | 2100 |
| Brimstone | 800 | Pass | / | % of ≥ 500ms | 73.33% |
| Wretched Pest | 2100 | Pass | / | Count | 30 |
| Inferno Bombers | 1020 | Pass | / |  |  |
| Doomstone | 900 | Pass | / |  |  |

---

| Wretched Sneak | 150 | Fail | / |
| --- | --- | --- | --- |
| Bloodless | 800 | Pass | / |
| Bone-Raker | 150 | Fail | / |
| Slam Dancer | 1000 | Pass | / |
| Skull Crusher | 1000 | Pass | / |
| Dracon | 800 | Pass | / |
| Megagorgon | 800 | Pass | / |
| Lernean Bone Hydra | 450 | Fail | / |
| Splitter | 150 | Fail | / |
| Flame Wheel | 1000 | Pass | / |
| Nemean Chariot | 1000 | Pass | / |
| Brightsword | 800 | Pass | / |
| Longspear | 1000 | Pass | / |
| Strongbow | 100 | Fail | / |
| Greatshield | 800 | Pass | / |
| Soul Catcher | - | Pass | / |
| Asterius | 250 | Fail | / |
| Theseus | 800 | Pass | / |
| Crawler | 400 | Fail | / |
| Gigantic Vermin | - | Pass | / |
| Snakestone | 1000 | Pass | / |
| Satyr Cultist | 600 | Pass | / |
| King Vermin | - | Pass | / |
| Hades | 1000 | Pass | / |

### 4.13 Appendix 6. HUD/VFX occlusion cases and their impact on visibility

The cases listed here are illustrative. A more exhaustive approach (e.g., engine-level visibility tests 
on every frame) could refine or challenge the low-rate estimate reported in the main text.

| Image | Projectile/Enemy visible? | Occluded value |
| --- | --- | --- |
| img12 | yes/environment adapts | 0 |
| img13 | yes, but occluded by smoke | 0.5 |
| img14 | yes, but occluded by smoke | 0.5 |
| img14 | UI does not occlude at all | 0 |
| img15 | can't see enemy/only HP bar | 1 |
| img16 | enemy in smoke barely visible | 0.5 |
| img17 | enemy occluded by sculpture | 1 |
| img18 | enemies visible through terrain | 0 |
| img19 | enemies visible through terrain | 0 |

---

**4.14 Appendix 7. Contrast sampling dataset (img1–img11): RGB values, luminance, ratio, 
pass/fail.**

| Image_id | pro_R | pro_G | pro_B | bg_R | bg_G | bg_B | L_pro | L_bg | Contrast Ratio | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| img1 | 248 | 86 | 207 | 48 | 67 | 69 | 0.31 | 0.05 | 3.71 | Pass |
| img1 | 36 | 8 | 22 | 55 | 84 | 85 | 0.00 | 0.08 | 2.35 | Fail |
| img1 | 225 | 226 | 225 | 58 | 84 | 80 | 0.76 | 0.08 | 6.47 | Pass |
| img2 | 225 | 196 | 225 | 78 | 122 | 120 | 0.62 | 0.17 | 3.02 | Pass |
| img2 | 225 | 132 | 229 | 59 | 82 | 81 | 0.39 | 0.07 | 3.54 | Pass |
| img2 | 224 | 90 | 183 | 46 | 87 | 85 | 0.27 | 0.08 | 2.47 | Fail |
| img3 | 255 | 244 | 229 | 33 | 45 | 33 | 0.92 | 0.02 | 14.06 | Pass |
| img3 | 225 | 211 | 217 | 55 | 49 | 45 | 0.68 | 0.03 | 9.42 | Pass |
| img3 | 255 | 246 | 238 | 36 | 37 | 30 | 0.94 | 0.01 | 15.46 | Pass |
| img4 | 255 | 249 | 255 | 37 | 31 | 55 | 0.96 | 0.01 | 16.23 | Pass |
| img4 | 237 | 85 | 245 | 57 | 55 | 81 | 0.31 | 0.04 | 4.09 | Pass |
| img4 | 250 | 237 | 249 | 28 | 29 | 48 | 0.88 | 0.01 | 15.65 | Pass |
| img5 | 200 | 255 | 247 | 19 | 103 | 103 | 0.91 | 0.11 | 6.06 | Pass |
| img5 | 255 | 255 | 255 | 28 | 119 | 144 | 1.00 | 0.16 | 5.10 | Pass |
| img5 | 215 | 45 | 205 | 14 | 62 | 47 | 0.21 | 0.03 | 3.05 | Pass |
| img6 | 245 | 248 | 253 | 21 | 99 | 88 | 0.94 | 0.10 | 6.72 | Pass |
| img6 | 255 | 234 | 255 | 41 | 11 | 88 | 0.88 | 0.01 | 15.08 | Pass |
| img6 | 237 | 32 | 210 | 26 | 0 | 13 | 0.24 | 0.00 | 5.54 | Pass |
| img7 | 90 | 73 | 124 | 41 | 147 | 110 | 0.08 | 0.23 | 2.11 | Fail |
| img7 | 54 | 44 | 80 | 44 | 185 | 107 | 0.03 | 0.37 | 5.39 | Pass |
| img7 | 94 | 99 | 157 | 23 | 110 | 97 | 0.14 | 0.12 | 1.09 | Fail |
| img8 | 251 | 83 | 162 | 52 | 86 | 103 | 0.29 | 0.08 | 2.60 | Fail |
| img8 | 255 | 220 | 255 | 87 | 147 | 163 | 0.80 | 0.26 | 2.75 | Fail |
| img8 | 153 | 72 | 126 | 28 | 194 | 184 | 0.13 | 0.43 | 2.68 | Fail |
| img9 | 255 | 255 | 255 | 70 | 90 | 65 | 1.00 | 0.09 | 7.59 | Pass |
| img9 | 255 | 228 | 226 | 56 | 75 | 68 | 0.83 | 0.06 | 7.98 | Pass |
| img9 | 246 | 57 | 96 | 85 | 104 | 76 | 0.23 | 0.12 | 1.62 | Fail |
| img10 | 255 | 254 | 223 | 176 | 106 | 69 | 0.98 | 0.20 | 4.07 | Pass |
| img10 | 255 | 247 | 179 | 185 | 116 | 76 | 0.91 | 0.24 | 3.36 | Pass |
| img10 | 255 | 223 | 174 | 204 | 33 | 7 | 0.78 | 0.14 | 4.39 | Pass |
| img11 | 129 | 253 | 69 | 85 | 80 | 56 | 0.75 | 0.08 | 6.32 | Pass |
| img11 | 44 | 225 | 7 | 92 | 90 | 80 | 0.55 | 0.10 | 3.97 | Pass |
| img11 | 250 | 165 | 24 | 104 | 94 | 109 | 0.48 | 0.12 | 3.10 | Pass |