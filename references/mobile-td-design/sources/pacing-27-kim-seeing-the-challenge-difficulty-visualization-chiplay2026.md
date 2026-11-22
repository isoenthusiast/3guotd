URL: https://dl.acm.org/doi/10.1145/3800965.3834315
TITLE: Seeing the Challenge: How Commercial Mobile Puzzle Games Visualize and Personalize Difficulty (CHI PLAY Companion 2026, Jungtae Kim)
RETRIEVED: 2026-11-22
METHOD: web_extract

[skip to main content](https://dl.acm.org/doi/10.1145/3800965.3834315#skip-to-main-content)

## ACM is now Open Access

×

As part of the Digital Library's transition to [Open Access](https://dl.acm.org/action/clickThrough?id=108180&url=%2Fopenaccess&loc=%2Fdoi%2F10.1145%2F3800965.3834315&pubId=65479948&placeholderId=101025&productId=108179 "Follow link to the ACM DL Open Access information page"), new features for researchers are available in the _Premium Edition_. [Click here to learn more](https://dl.acm.org/action/clickThrough?id=108180&url=%2Fpremium&loc=%2Fdoi%2F10.1145%2F3800965.3834315&pubId=65479948&placeholderId=101025&productId=108179 "More information about Premium Edition").

**You are currently in the Basic Edition. Features requiring a subscription appear in grey.**

[Sign In](https://dl.acm.org/action/clickThrough?id=108180&url=%2Faction%2FshowLogin%3FredirectUri%3Dhttps%253A%252F%252Fdl.acm.org%252Fdoi%252F10.1145%252F3800965.3834315&loc=%2Fdoi%2F10.1145%2F3800965.3834315&pubId=65479948&placeholderId=101025&productId=108179) [Upgrade](https://dl.acm.org/action/clickThrough?id=108180&url=%2Fabout%2Fupgrade&loc=%2Fdoi%2F10.1145%2F3800965.3834315&pubId=65479948&placeholderId=101025&productId=108179 "Learn about upgrading to Premium Edition")

Several features on this page require Premium Access.

[Learn more](https://dl.acm.org/about/upgrade) [Sign in](https://dl.acm.org/action/showLogin?redirectUri=%2Fdoi%2F10.1145%2F3800965.3834315)

Contents

## Abstract

In free-to-play (F2P) mobile puzzle games, difficulty is a major lever for both player motivation and monetization, alongside levers such as ad pacing, reward scheduling, and scarcity. Yet HCI research rarely examines how difficulty is _communicated_ to players and _personalized_ across a heterogeneous player base in commercial practice. This work-in-progress contributes (1) an analysis of current commercial practice across two puzzle sub-genres—match-3 ( _Candy Crush Saga_, _Royal Match_) and block-placement ( _Block Blast_)—showing that difficulty is already _visualized_ to players through discrete labels and already _personalized_ through data-driven, AI-assisted tuning, but that visualization remains shallow and personalization remains invisible and, in some cases, contested as manipulative; (2) a design framework, grounded in Self-Determination Theory (SDT) and flow theory, that treats **Difficulty Visualization (DV)** and **Segment-Personalized Difficulty (SPD)** as orthogonal, intentionally designed levers, with disclosure operationalized through DV so that personalization and its disclosure can vary independently; and (3) a planned four-arm live A/B evaluation that will measure motivational and monetization outcomes jointly. We argue that making difficulty _legible_ and _personalized_—within explicit ethical guardrails—may help align player wellbeing with commercial outcomes, a claim our planned evaluation is designed to begin testing rather than one we assert, and that the invisibility of current personalization is itself a source of player distrust. We invite discussion on study design, measures, and the boundary between motivating friction and dark patterns.

## 1 Introduction

Mobile puzzle games are among the most commercially significant categories in the free-to-play (F2P) market, spanning match-3 titles such as _Candy Crush Saga_, _Royal Match_, and _Toon Blast_, and block-placement titles such as _Block Blast_. Their business model rests on two intertwined pillars: _retention_ across days and weeks, and _monetization_ through rewarded video advertising (RV) and in-app purchases (IAP) such as boosters, extra moves, and lives. Both pillars are shaped substantially by one major design variable among several—alongside ad pacing, reward scheduling, convenience, and scarcity—namely _difficulty_. A level—or a board state—that is too easy fails to engage; one that is too hard drives churn, or, at exactly the friction point where it becomes hard, motivates a player to watch an ad, buy a booster, or restart for “one more try.”

This places difficulty at the center of an ethical and strategic tension, and raises two questions this work-in-progress addresses: _how is difficulty communicated to players_, and _how is it personalized across a diverse player base_? We make three contributions: (1) an analysis of current commercial practice across two sub-genres (§3); (2) a design framework relating **Difficulty Visualization (DV)** and **Segment-Personalized Difficulty (SPD)** to motivation and monetization (§4); and (3) a planned live evaluation (§5). To state the intended outcome and its beneficiaries explicitly: for players, the intervention targets sustained, autonomous engagement with challenge they can see, interpret, and choose—rather than engagement extracted through opaque friction; for studios, it targets retention-led revenue that does not depend on players failing to notice manipulation. Our thesis is that legible, personalized difficulty may sustain intrinsic motivation rather than merely extract revenue, when bounded by explicit ethical guardrails—and that the invisibility of today’s personalization is itself a liability.

## 2 Background and Related Work

**Motivation.** Self-Determination Theory \[ [20](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0020)\] frames intrinsic motivation as arising from competence, autonomy, and relatedness; Ryan, Rigby, and Przybylski \[ [21](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0021)\] showed that need satisfaction predicts game enjoyment and continued play. Difficulty design speaks directly to competence and, when players are given informed choices about challenge, to autonomy.

**Flow and difficulty balancing.** Flow theory \[ [6](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0006), [8](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0008)\] describes optimal experience as a balance of challenge and skill. GameFlow \[ [22](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0022)\] operationalized this for player enjoyment. A literature on Dynamic Difficulty Adjustment (DDA) realizes the flow channel computationally \[ [2](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0002), [12](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0012)\]. DDA can operate at multiple granularities, from per-player real-time adaptation to coarser policies; we position SPD as a segment-granularity instantiation of DDA, chosen for robustness, auditability, and deployability at commercial scale rather than as a competitor to finer-grained approaches.

**Framing of difficulty.** The _experienced_ value of difficulty depends on framing, not only objective level. Lomas et al. \[ [15](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0015)\] found that choice, novelty, and suspense—rather than raw difficulty—drive intrinsic motivation, and that imposed difficulty can be “overrated”; Alexander et al. \[ [1](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0001)\] reported non-monotonic difficulty–enjoyment relationships. These findings motivate DV: surfacing difficulty creates anticipation and supports choice.

**Visible design elements.** Gamification research \[ [9](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0009)\] and Koster’s account of fun as learning \[ [14](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0014)\] suggest that making the structure of a challenge legible can enhance the satisfaction of mastering it. DV applies this to difficulty as a first-class, visible element.

**Manipulation, personalization, and trust.** Adjacent literatures sharpen both the risk and the opportunity. Hadan et al. \[ [11](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0011)\] document how a game’s free-to-play transition shifted design from motivating to manipulative through deceptive patterns, showing that monetization pressure can convert legitimate design levers into dark patterns. In personalized advertising, Bleier and Eisenbeiss \[ [4](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0004)\] show that the effectiveness of personalization hinges on consumer trust—personalization without trust backfires. In games specifically, Ascarza et al. \[ [3](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0003)\] demonstrate that personalized game design can improve retention and monetization in freemium titles, but do so from a firm-outcome perspective. Our work sits at the intersection these literatures leave open: personalization of difficulty as an HCI question of _legibility and disclosure_, evaluated jointly on player-motivational and commercial outcomes.

**Gap.** Prior HCI work rarely (a) treats _visualizing_ difficulty as a motivational intervention (difficulty labels appear in commercial practice and in gamification catalogs \[ [9](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0009)\], but not as a studied intervention), (b) examines _segment-personalized_ difficulty as deployed commercially (personalization work such as Ascarza et al. \[ [3](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0003)\] optimizes firm outcomes without addressing what players are told), and (c) measures motivational and monetization outcomes jointly (deceptive-design work such as Hadan et al. \[ [11](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0011)\] examines harms without testing disclosed alternatives). We address this gap, beginning with how the commercial state of the art already operates.

**What DV × SPD adds.** Both levers build on established constructs—difficulty labeling and DDA. The framework’s contribution is not either lever alone but three moves their combination enables: (1) it treats _disclosure_ as an independent design variable, operationalized through DV, rather than a property bundled into personalization—so “personalized but hidden” and “personalized and legible” become distinct, testable states; (2) it locates the ethical problem in the _invisibility_ of current personalization rather than in personalization itself, a distinction the dark-patterns literature \[ [11](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0011)\] motivates but does not test; and (3) it commits to evaluating motivational and commercial outcomes jointly, treating “monetization up, motivation down” as failure—an evaluation stance absent from both the DDA and the personalization-for-revenue literatures \[ [3](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0003)\].

## 3 Difficulty in Commercial Practice

We analyze publicly documented practice across two puzzle sub-genres to establish what difficulty design currently looks like, and where the design space remains open. Sources are of two kinds, which we distinguish throughout: studio-originated claims (marketing, developer talks, official community posts) and independent player-facing documentation (community observation, third-party analyses); studio claims are reported as claims, not established fact.

### 3.1 Difficulty is already visualized—but shallowly

Leading match-3 titles already surface difficulty to players. _Candy Crush Saga_ marks levels with escalating, on-map designations—Hard, Super Hard, and Nightmare—each with a distinct icon \[ [13](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0013)\]. _Royal Match_ similarly flags selected levels as “Hard” or “Super Hard” \[ [17](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0017)\]. Difficulty visualization is therefore established practice. However, it is typically reduced to a discrete _warning label_: it signals “this will be hard,” but does not richly support competence (interpreting performance against a standard), autonomy (informed choice to engage, defer, or prepare), or the anticipation that the framing literature identifies as motivational \[ [15](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0015)\].

### 3.2 Difficulty is already personalized—but invisibly

These labels are not hand-authored constants. According to King’s own player-community documentation, a level’s difficulty class in _Candy Crush Saga_ is assigned algorithmically from aggregate player telemetry (e.g., average attempts and time-to-clear) and is periodically re-labeled as data accrue \[ [13](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0013)\]. King has further stated—in developer-facing interviews and talks—that it uses AI both to pre-test levels with bots and to personalize the experience by weighting certain experiences toward certain player profiles, deliberately keeping personalization “fuzzy” rather than rule-based \[ [16](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0016)\], and that it has formalized difficulty drivers (“blockers”) into a shared statistical design language across studios \[ [7](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0007)\]. Taken as stated, these practices map directly onto SPD: difficulty is already personalized at scale—but the personalization is hidden from the player and optimized primarily for retention and revenue.

### 3.3 The piece tray as a difficulty instrument: the Block Blast case

The block-placement sub-genre makes the unit of difficulty even more granular. In _Block Blast_ (launched 2024), there are no authored levels: the game presents an endless board and a _tray of three polyomino pieces_ at a time, which the player places on an 8 × 8 grid to clear rows and columns; the run ends precisely when none of the three offered pieces can be placed anywhere \[ [18](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0018)\]. The three-piece tray is therefore the primary difficulty instrument—the specific shapes offered, relative to the current board state, determine whether the player extends a high-scoring combo or is forced into a dead end.

Crucially, _whether this tray is purely random or adaptively tuned is contested_, and the contestation is itself instructive. Promotional descriptions characterize each tray as a balanced, fair mix designed so no two sessions feel alike \[ [5](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0005)\]. Some player-facing analyses and a widespread player perception, however, hold that the game serves awkward shapes when board space is tight or when a player nears a personal best, producing artificial difficulty spikes that alternate satisfaction and frustration to sustain “one more try” engagement \[ [19](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0019)\]; other guides insist that piece generation is non-adaptive pseudo-random variance rather than rigging \[ [23](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0023)\]. We take no position on the ground truth. What matters for our argument is that _the personalization, if any, is invisible_: because players cannot see whether or how difficulty adapts, even fair tuning can be experienced as manipulation, eroding the trust on which sustained intrinsic motivation depends—consistent with findings that personalization’s effectiveness hinges on trust \[ [4](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0004)\]. The Block Blast discourse is thus a cautionary instance of the exact failure mode that disclosed, legible personalization (SPD combined with DV) is intended to avoid.

### 3.4 Difficulty is coupled to motivation and monetization

Friction points are monetization and re-engagement points. In match-3 titles, hard levels are where booster purchases, extra-move continues, and rewarded-video offers surface; commentary on _Royal Match_ attributes its strong retention and monetization to a difficulty curve engineered so that victory feels close and achievable \[ [17](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0017)\]. In the block-placement format, the endless structure converts each near-miss into an immediate restart, turning the alternation of success and frustration into a tight retry loop \[ [19](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0019)\]. The unresolved question across both is whether such friction is experienced as _meaningful_ (a fair, anticipated challenge the player autonomously chooses to overcome) or _arbitrary_ (opaque difficulty that reads as a paywall or as rigging).

### 3.5 Synthesis: an open design space

Figure [1](https://dl.acm.org/doi/10.1145/3800965.3834315#fig1) renders the design space directly: the horizontal axis runs from hidden to richly visualized difficulty, the vertical axis from a global curve to segment-personalized difficulty. Table [1](https://dl.acm.org/doi/10.1145/3800965.3834315#tab1) summarizes the documented practice behind each placement. Current titles cluster in the shallow-visualization, invisible-personalization region; the open quadrant—rich, choice-supporting visualization combined with _disclosed_, intentionally motivational personalization—is unoccupied. This is the space our framework targets.

![](https://dl.acm.org/cms/10.1145/3800965.3834315/asset/88a7c465-d482-444e-bf64-3fecedca8a21/assets/images/medium/chiplaycompanion26-41-fig1.jpg)

A two-axis quadrant diagram. The horizontal axis represents difficulty visualization, ranging from hidden on the left to rich and choice-supporting on the right. The vertical axis represents personalization, ranging from a global uniform curve at the bottom to segment-personalized at the top. A generic baseline sits in the lower-left quadrant, labeled hidden and uniform. Block Blast sits in the upper-left area, labeled contested and invisible personalization perceived as adaptive. Candy Crush Saga and Royal Match sit near the center-left, labeled as having difficulty labels only, with personalization undisclosed. The upper-right quadrant is highlighted as the open quadrant targeted by the proposed DV plus SPD framework, combining rich visualization with disclosed, bounded personalization. The lower-right quadrant, labels without personalization, is noted as rare in current practice.

The difficulty design space as two axes: visualization (hidden → rich) and personalization (global → segment-personalized). Documented commercial titles occupy the left and lower regions; the upper-right quadrant—rich visualization combined with disclosed, bounded personalization—is unoccupied and is the target of the DV+SPD framework.

| Title | Difficulty visualization | Personalization |
| --- | --- | --- |
| Candy Crush Saga | Labels (Hard/Super/Nightmare) \[ [13](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0013)\] | Data-driven, AI-assisted; invisible \[ [7](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0007), [16](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0016)\] |
| Royal Match | Labels (Hard/Super Hard) \[ [17](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0017)\] | Curve-engineered; not disclosed \[ [17](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0017)\] |
| Block Blast | None (implicit in piece tray) | Contested/invisible (perceived adaptive) \[ [19](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0019), [23](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0023)\] |
| Generic baseline | None (hidden) | Global (uniform) |
| **Proposed (DV+SPD)** | **Rich, choice-supporting** | **Segment-aware, disclosed, bounded** |

Difficulty design in commercial puzzle titles, by visualization and personalization. Cells summarize publicly documented practice and player perception.

## 4 Design Framework: DV × SPD

We frame two orthogonal, intentionally designed levers. Orthogonality here is a design commitment with a concrete operationalization: DV governs what the player _sees_ (including whether personalization is disclosed), while SPD governs what the system _does_ (whether difficulty is personalized). Either can be toggled without the other, which is what makes the four combinations in §5 distinct, testable states.

**Difficulty Visualization (DV).** Beyond a warning label, DV makes upcoming challenge legible and actionable: per-level (or per-board) difficulty ratings, advance signposting, optional player-initiated challenge framing, and post-attempt feedback situating performance against a known standard. When personalization is active, DV is also the disclosure channel: it communicates that difficulty is tuned to the player’s segment and what that tuning targets. Hypothesized mechanisms: _competence support_ (interpretable success), _autonomy support_ (informed choice to attempt, prepare, or defer), and _anticipation_—a framing effect distinct from difficulty itself \[ [15](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0015)\]. In a block-placement context, DV might surface the role of the piece tray—for example, signaling board risk or making the generation policy legible—so that the player attributes outcomes to a fair system rather than to suspected rigging.

**Segment-Personalized Difficulty (SPD).** SPD conditions the difficulty curve (or piece-generation policy) on behavioral segments along three commonly-instrumented dimensions: _skill_ (rolling win rate, attempts-per-clear), _engagement cadence_ (sessions/day, inter-session interval), and _spending propensity_ (RV engagement, IAP history). Per-segment tuning keeps each player near a target challenge band (the flow channel \[ [8](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0008)\]). Guardrails are first-class: difficulty is never inflated specifically to trigger a monetization event, and per-segment tuning is bounded to avoid extreme divergence from the designed experience. SPD itself is silent to the player; whether personalization is disclosed is determined by DV, so that personalization and disclosure vary independently rather than being bundled.

**Coupling motivation and monetization.** Where commercial practice optimizes hidden difficulty for revenue, our framework asks whether _legible_ and _disclosed_ personalization shifts friction toward the meaningful end—improving motivation _and_ monetization together. We measure both jointly not because they must move together, but because measuring either alone licenses the wrong conclusions: monetization-only evaluation cannot detect extraction, and motivation-only evaluation cannot show studios a deployable alternative. Any configuration that raises monetization while degrading motivation, or that depends on players not noticing the manipulation, is treated as a design failure.

## 5 Planned Evaluation

We plan a four-arm, between-subjects live A/B experiment (2 × 2: DV off/on × SPD off/on)—Control (hidden, global difficulty), DV-only, SPD-only, and DV+SPD—deployed in a live commercial mobile puzzle title, with players randomly assigned at first session and held in-arm via remote configuration. Because disclosure is carried by DV and SPD is silent (§4), the SPD-only arm operationalizes precisely the “personalized but hidden” condition that characterizes current commercial practice, and the DV × SPD contrast isolates the effect of making personalization legible from the effect of personalization itself.

**Measures.** _Engagement:_ D1/D7/D30 retention, sessions per active day, levels (or boards) cleared per session, attempts-per-clear. _Motivation:_ an in-game micro-survey at a fixed progression milestone using validated competence and autonomy subscales plus enjoyment and perceived-fairness items. We acknowledge that a single-milestone micro-survey cannot carry all motivational constructs; we therefore treat survey measures as primary for H1 only, triangulate motivation behaviorally elsewhere, and plan repeated-milestone sampling in the full study. _Monetization:_ RV impressions per DAU, RV opt-in at friction points, IAP conversion, ARPDAU; with booster usage, continue-acceptance, and restart rate as mediators linking difficulty to monetization and re-engagement.

**Hypothesis–measure mapping.** Table [2](https://dl.acm.org/doi/10.1145/3800965.3834315#tab2) states, for each hypothesis, the primary measures that would confirm or reject it and the comparison that carries the test.

| Hypothesis | Primary measures | Deciding comparison |
| --- | --- | --- |
| H1: DV ↑ competence, autonomy | Competence/autonomy subscales; perceived fairness | DV-on vs. DV-off |
| H2: DV ↑ retention, depth | D7 retention (primary); D1/D30, sessions/day, levels/session | DV-on vs. DV-off |
| H3: SPD ↑ retention, largest at skill tails | D7/D30 retention, attempts-per-clear, by skill segment | SPD-on vs. SPD-off; segment × condition interaction |
| H4: monetization ↑ without motivation loss | ARPDAU, RV/DAU, IAP conversion _jointly with_ motivation/fairness (non-inferiority) | each arm vs. Control |
| H5: DV × SPD positive interaction | All outcome families | DV × SPD interaction term |

Mapping from hypotheses to primary measures and deciding comparisons.

**Hypotheses.** (H1) DV increases competence and autonomy; (H2) DV increases retention and session depth; (H3) SPD increases retention, with largest effects in the lowest- and highest-skill segments; (H4) DV and SPD increase monetization _without_ reducing motivation or perceived fairness, tested as a non-inferiority criterion on motivation alongside superiority on monetization; (H5) DV × SPD interact positively.

**Analysis and ethics.** Retention is analyzed with survival models; engagement and monetization with regression controlling for platform, region, and acquisition source; motivation with ANOVA/regression; with multiple-comparison correction across outcome families. Data are analyzed in aggregate under the title’s existing privacy policy; the design forbids manipulative difficulty inflation tied to monetization (§4), and treats disclosure of personalization as a design requirement informed by documented free-to-play deceptive-design risks \[ [11](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0011)\].

## 6 Discussion and Open Questions

**Legibility as a motivational lever.** If DV improves competence and autonomy without changing the underlying difficulty, this reinforces the framing literature’s claim that _how_ challenge is presented matters as much as the challenge itself—reframing difficulty as a front-end communication problem, not only back-end tuning.

**Personalization and the individualized flow channel.** SPD operationalizes the flow channel at segment granularity, with expected benefits largest at the distribution tails where a global curve mis-serves most players.

**Invisible personalization erodes trust.** The Block Blast discourse (§3.3) suggests that hidden adaptation, fair or not, invites suspicion of manipulation, echoing evidence that personalization without trust backfires \[ [4](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0004)\]. Disclosing personalization may therefore be not only more ethical but also more effective at sustaining motivation, an empirical question our evaluation is designed to begin answering: the SPD-only vs. DV+SPD contrast directly compares hidden and disclosed personalization.

**Difficulty as a potential dark pattern.** DV and SPD can be misused—manufacturing artificial scarcity, or targeting high-spenders with frustration; the free-to-play deceptive-design literature documents exactly this drift from motivating to manipulative \[ [11](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0011)\]. We therefore treat ethical guardrails and disclosure as design requirements, and pose this boundary—between motivating friction and coercion—as a key open question for discussion at the venue. The boundary is also becoming regulatory: the EU’s forthcoming Digital Fairness Act—expected to be tabled in late 2026—explicitly targets dark patterns, addictive design, and unfair personalization in apps and games \[ [10](https://dl.acm.org/doi/10.1145/3800965.3834315#Bib0010)\]. Disclosed, bounded personalization is therefore not only an ethical stance but a plausible compliance posture for studios ahead of such regulation.

**Who benefits.** The intended payoff is twofold. For research, the study would provide the first joint evidence on whether disclosing difficulty personalization helps or harms motivation and revenue, informing both the DDA and dark-patterns literatures. For practice, a positive result would give studios a deployable, ethically defensible alternative to hidden tuning; a negative result would document the real cost of transparency, which is equally decision-relevant for designers and for emerging regulation of manipulative design.

## 7 Conclusion

Commercial puzzle games already visualize and personalize difficulty—through difficulty labels, data-driven re-rating, AI-assisted personalization, and, in block-placement games, the moment-to-moment design of the piece tray—but they do so shallowly, invisibly, and primarily for revenue, sometimes at the cost of player trust. We proposed DV and SPD as intentional, motivation-aligned levers grounded in SDT and flow theory, with disclosure operationalized independently of personalization, and outlined a live evaluation measuring motivation and monetization jointly—an evaluation designed to test, rather than presume, whether legible personalized difficulty can align player wellbeing with commercial outcomes. As work-in-progress, we seek feedback on measures, segment definitions, and the ethical boundary of motivating friction.

## Acknowledgments

The author used a generative AI assistant to support drafting, structuring, and literature and industry-source discovery; all claims, analyses, and final text were reviewed and verified by the author. The author thanks the anonymous reviewers for feedback that substantially sharpened the framework and the planned evaluation.

## References

\[1\]

John Thomas Alexander, John Sear, and Andreas Oikonomou. 2013. An Investigation of the Effects of Game Difficulty on Player Enjoyment. _Entertainment Computing_ 4, 1 (2013), 53–62.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=An+Investigation+of+the+Effects+of+Game+Difficulty+on+Player+Enjoyment&author=John%C2%A0Thomas+Alexander&author=John+Sear&author=Andreas+Oikonomou&publication_year=2013&pages=53-62)

\[2\]

Maria-Virginia Aponte, Guillaume Levieux, and Stéphane Natkin. 2011. Measuring the Level of Difficulty in Single Player Video Games. _Entertainment Computing_ 2, 4 (2011), 205–213.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Measuring+the+Level+of+Difficulty+in+Single+Player+Video+Games&author=Maria-Virginia+Aponte&author=Guillaume+Levieux&author=St%C3%A9phane+Natkin&publication_year=2011&pages=205-213)

\[3\]

Eva Ascarza, Oded Netzer, and Julian Runge. 2024. Personalized Game Design for Improved User Retention and Monetization in Freemium Mobile Games. _SSRN Working Paper_. [https://doi.org/10.2139/ssrn.4653319](https://doi.org/10.2139/ssrn.4653319).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Personalized+Game+Design+for+Improved+User+Retention+and+Monetization+in+Freemium+Mobile+Games&author=Eva+Ascarza&author=Oded+Netzer&author=Julian+Runge&publication_year=2024&doi=10.2139%2Fssrn.4653319)

\[4\]

Alexander Bleier and Maik Eisenbeiss. 2015. The Importance of Trust for Personalized Online Advertising. _Journal of Retailing_ 91, 3 (2015), 390–409.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=The+Importance+of+Trust+for+Personalized+Online+Advertising&author=Alexander+Bleier&author=Maik+Eisenbeiss&publication_year=2015&pages=390-409)

\[5\]

Block Blast Store Listing. 2024. Block Blast — Tray of Three Pieces Described as a Balanced Mix. _[https://apps.apple.com/](https://apps.apple.com/)_. Promotional description; Accessed June 3, 2026.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Block+Blast+%E2%80%94+Tray+of+Three+Pieces+Described+as+a+Balanced+Mix&author=Block+Blast+Store+Listing&publication_year=2024)

\[6\]

Jenova Chen. 2007. Flow in Games (and Everything Else). _Commun. ACM_ 50, 4 (2007), 31–34.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Flow+in+Games+%28and+Everything+Else%29&author=Jenova+Chen&publication_year=2007&pages=31-34)

\[7\]

Lucien Yen-Chu Chen. 2023. Blockers: Analyzing Difficulty Drivers in Candy Crush Games. In _Game Developers Conference (GDC) Summer_. Conference talk.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Blockers%3A+Analyzing+Difficulty+Drivers+in+Candy+Crush+Games&author=Lucien+Yen-Chu+Chen&publication_year=2023)

\[8\]

Mihaly Csikszentmihalyi. 1990. _Flow: The Psychology of Optimal Experience_. Harper and Row, New York, NY.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Flow%3A+The+Psychology+of+Optimal+Experience&author=Mihaly+Csikszentmihalyi&publication_year=1990)

\[9\]

Sebastian Deterding, Dan Dixon, Rilla Khaled, and Lennart Nacke. 2011. From Game Design Elements to Gamefulness: Defining “Gamification”. In _Proc. 15th International Academic MindTrek Conference_. ACM, 9–15.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=From+Game+Design+Elements+to+Gamefulness%3A+Defining+%E2%80%9CGamification%E2%80%9D&author=Sebastian+Deterding&author=Dan+Dixon&author=Rilla+Khaled&author=Lennart+Nacke&publication_year=2011&pages=9-15)

\[10\]

European Commission. 2026. Digital Fairness Act (Legislative Initiative on Fairness of Digital Practices). _[https://www.europarl.europa.eu/legislative-train/theme-protecting-our-democracy-upholding-our-values/file-digital-fairness-act](https://www.europarl.europa.eu/legislative-train/theme-protecting-our-democracy-upholding-our-values/file-digital-fairness-act)_. Legislative proposal expected Q4 2026; targets dark patterns, addictive design, and unfair personalization. Accessed July 19, 2026.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Digital+Fairness+Act+%28Legislative+Initiative+on+Fairness+of+Digital+Practices%29&author=European+Commission&publication_year=2026)

\[11\]

Hilda Hadan, Sabrina A. Sgandurra, Leah Zhang-Kennedy, and Lennart E. Nacke. 2024. From Motivating to Manipulative: The Use of Deceptive Design in a Game’s Free-to-Play Transition. _Proceedings of the ACM on Human-Computer Interaction_ 8, CHI PLAY (2024), 1–31. [https://doi.org/10.1145/3677074](https://doi.org/10.1145/3677074).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=From+Motivating+to+Manipulative%3A+The+Use+of+Deceptive+Design+in+a+Game%E2%80%99s+Free-to-Play+Transition&author=Hilda+Hadan&author=Sabrina%C2%A0A.+Sgandurra&author=Leah+Zhang-Kennedy&author=Lennart%C2%A0E.+Nacke&publication_year=2024&pages=1-31&doi=10.1145%2F3677074)

\[12\]

Robin Hunicke. 2005. The Case for Dynamic Difficulty Adjustment in Games. In _Proc. 2005 ACM SIGCHI Intl. Conf. on Advances in Computer Entertainment Technology (ACE ’05)_. ACM, 429–433.

[Digital Library](https://dl.acm.org/doi/10.1145/1178477.1178573)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=The+Case+for+Dynamic+Difficulty+Adjustment+in+Games&author=Robin+Hunicke&publication_year=2005&pages=429-433&doi=10.1145%2F1178477.1178573)

\[13\]

King Player Community. 2022. Level Difficulty Classification is Assigned by Script from Player Data. _[https://community.king.com/en/candy-crush-saga/discussion/360374/super-hard-level](https://community.king.com/en/candy-crush-saga/discussion/360374/super-hard-level)_. Accessed June 3, 2026.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Level+Difficulty+Classification+is+Assigned+by+Script+from+Player+Data&author=King+Player+Community&publication_year=2022)

\[14\]

Raph Koster. 2013. _Theory of Fun for Game Design (2nd ed.)_. O’Reilly Media, Sebastopol, CA.

[Digital Library](https://dl.acm.org/doi/10.5555/2601678)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Theory+of+Fun+for+Game+Design+%282nd+ed.%29&author=Raph+Koster&publication_year=2013&doi=10.5555%2F2601678)

\[15\]

J. Derek Lomas, Kenneth Koedinger, Nirmal Patel, Sharan Shodhan, Nikhil Poonwala, and Jodi L. Forlizzi. 2017. Is Difficulty Overrated? The Effects of Choice, Novelty and Suspense on Intrinsic Motivation in Educational Games. In _Proc. 2017 CHI Conference on Human Factors in Computing Systems (CHI ’17)_. ACM, 1028–1039.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Is+Difficulty+Overrated%3F+The+Effects+of+Choice%2C+Novelty+and+Suspense+on+Intrinsic+Motivation+in+Educational+Games&author=J.%C2%A0Derek+Lomas&author=Kenneth+Koedinger&author=Nirmal+Patel&author=Sharan+Shodhan&author=Nikhil+Poonwala&author=Jodi%C2%A0L.+Forlizzi&publication_year=2017&pages=1028-1039)

\[16\]

MobileGamer.biz. 2024. How King Balances Human and AI-Powered Design in Candy Crush Saga. _[https://mobilegamer.biz/how-king-balances-human-and-ai-powered-design-in-candy-crush-saga/](https://mobilegamer.biz/how-king-balances-human-and-ai-powered-design-in-candy-crush-saga/)_. Accessed June 3, 2026.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=How+King+Balances+Human+and+AI-Powered+Design+in+Candy+Crush+Saga&author=MobileGamer.biz&publication_year=2024)

\[17\]

Naavik. 2025. Royal Match: Dream Games’ Regal Performance. _[https://naavik.co/deep-dives/royal-match/](https://naavik.co/deep-dives/royal-match/)_. Accessed June 3, 2026.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Royal+Match%3A+Dream+Games%E2%80%99+Regal+Performance&author=Naavik&publication_year=2025)

\[18\]

Playgama. 2025. How Does the Block Blast Algorithm Function? _[https://playgama.com/blog/game-faqs/how-does-the-block-blast-algorithm-function/](https://playgama.com/blog/game-faqs/how-does-the-block-blast-algorithm-function/)_. Accessed June 3, 2026.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=How+Does+the+Block+Blast+Algorithm+Function%3F&author=Playgama&publication_year=2025)

\[19\]

Playgama. 2025. Why Do People Think Block Blast is Rigged? _[https://playgama.com/blog/game-faqs/why-do-people-think-block-blast-is-rigged/](https://playgama.com/blog/game-faqs/why-do-people-think-block-blast-is-rigged/)_. Accessed June 3, 2026.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Why+Do+People+Think+Block+Blast+is+Rigged%3F&author=Playgama&publication_year=2025)

\[20\]

Richard M. Ryan and Edward L. Deci. 2000. Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being. _American Psychologist_ 55, 1 (2000), 68–78.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Self-Determination+Theory+and+the+Facilitation+of+Intrinsic+Motivation%2C+Social+Development%2C+and+Well-Being&author=Richard%C2%A0M.+Ryan&author=Edward%C2%A0L.+Deci&publication_year=2000&pages=68-78)

\[21\]

Richard M. Ryan, C. Scott Rigby, and Andrew Przybylski. 2006. The Motivational Pull of Video Games: A Self-Determination Theory Approach. _Motivation and Emotion_ 30, 4 (2006), 344–360.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=The+Motivational+Pull+of+Video+Games%3A+A+Self-Determination+Theory+Approach&author=Richard%C2%A0M.+Ryan&author=C.%C2%A0Scott+Rigby&author=Andrew+Przybylski&publication_year=2006&pages=344-360)

\[22\]

Penelope Sweetser and Peta Wyeth. 2005. GameFlow: A Model for Evaluating Player Enjoyment in Games. _Computers in Entertainment_ 3, 3 (2005), 3.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=GameFlow%3A+A+Model+for+Evaluating+Player+Enjoyment+in+Games&author=Penelope+Sweetser&author=Peta+Wyeth&publication_year=2005&pages=3)

\[23\]

TechsnGames. 2026. Block Blast Tips and Tricks: The Complete Strategy Guide. _[https://techsngames.com/block-blast-tips-and-tricks/](https://techsngames.com/block-blast-tips-and-tricks/)_. Player guide; Accessed June 3, 2026.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Block+Blast+Tips+and+Tricks%3A+The+Complete+Strategy+Guide&author=TechsnGames&publication_year=2026)

## Index Terms

Index Terms (Premium feature)

1. Seeing the Challenge: How Commercial Mobile Puzzle Games Visualize and Personalize Difficulty to Sustain Motivation and Monetization

1. [Computing methodologies](https://dl.acm.org/doi/10.1145/3800965.3834315#)



      1. [Modeling and simulation](https://dl.acm.org/doi/10.1145/3800965.3834315#)



         1. [Simulation evaluation](https://dl.acm.org/doi/10.1145/3800965.3834315#)
2. [Human-centered computing](https://dl.acm.org/doi/10.1145/3800965.3834315#)



      1. [Accessibility](https://dl.acm.org/doi/10.1145/3800965.3834315#)



         1. [Empirical studies in accessibility](https://dl.acm.org/doi/10.1145/3800965.3834315#)
      2. [Human computer interaction (HCI)](https://dl.acm.org/doi/10.1145/3800965.3834315#)



         1. [HCI design and evaluation methods](https://dl.acm.org/doi/10.1145/3800965.3834315#)



            1. [User models](https://dl.acm.org/doi/10.1145/3800965.3834315#)

## Recommendations

Recommendations (Premium feature)

- [**Investigating the Impact of Monetization on Children’s Experience With Mobile Games**](https://dl.acm.org/doi/10.1145/3800965.3834315# "Investigating the Impact of Monetization on Children’s Experience With Mobile Games")

IDC '24: Proceedings of the 23rd Annual ACM Interaction Design and Children Conference







Monetization is fundamental to “free-to-play” mobile games, typically in the form
of advertising placed within gameplay. Monetization within digital games is linked
to deceptive design, and other ethically dubious practices such as loot-boxes. However,
...







[Read More](https://dl.acm.org/doi/10.1145/3800965.3834315# "Read More")

- [**Dynamic Difficulty Adjustment Impact on Players' Confidence**](https://dl.acm.org/doi/10.1145/3800965.3834315# "Dynamic Difficulty Adjustment Impact on Players' Confidence")

CHI '19: Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems







Difficulty is one of the major motivational pull of video games, and thus many games
use Dynamic Difficulty Adjustment (DDA) systems to improve the game experience. This
paper describes our research investigating the influence of DDA systems on player's
...







[Read More](https://dl.acm.org/doi/10.1145/3800965.3834315# "Read More")

- [**Is Difficulty Overrated?: The Effects of Choice, Novelty and Suspense on Intrinsic Motivation in Educational Games**](https://dl.acm.org/doi/10.1145/3800965.3834315# "Is Difficulty Overrated?: The Effects of Choice, Novelty and Suspense on Intrinsic Motivation in Educational Games")

CHI '17: Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems







Many game designers aim to optimize difficulty to make games that are "not too hard,
not too easy." However, recent experiments have shown that even moderate difficulty
can reduce player engagement. The present work investigates other design factors ...











[Read More](https://dl.acm.org/doi/10.1145/3800965.3834315# "Read More")


## Comments

Comments (Premium feature)

Disqus Comments

We were unable to load Disqus. If you are a moderator please see our [troubleshooting guide](https://docs.disqus.com/help/83/).

## DL Comment Policy

Comments should be relevant to the contents of this article, (sign in required).

Got it

- [Share](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3800965.3834315&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3800965.3834315&t_d=Seeing%20the%20Challenge%3A%20How%20Commercial%20Mobile%20Puzzle%20Games%20Visualize%20and%20Personalize%20Difficulty%20to%20Sustain%20Motivation%20and%20Monetization&t_t=Seeing%20the%20Challenge%3A%20How%20Commercial%20Mobile%20Puzzle%20Games%20Visualize%20and%20Personalize%20Difficulty%20to%20Sustain%20Motivation%20and%20Monetization&s_o=default#)

  - Tweet this discussion
  - Share this discussion on Facebook
  - Share this discussion via email
  - Copy link to discussion

  - [Best](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3800965.3834315&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3800965.3834315&t_d=Seeing%20the%20Challenge%3A%20How%20Commercial%20Mobile%20Puzzle%20Games%20Visualize%20and%20Personalize%20Difficulty%20to%20Sustain%20Motivation%20and%20Monetization&t_t=Seeing%20the%20Challenge%3A%20How%20Commercial%20Mobile%20Puzzle%20Games%20Visualize%20and%20Personalize%20Difficulty%20to%20Sustain%20Motivation%20and%20Monetization&s_o=default#)
  - [Newest](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3800965.3834315&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3800965.3834315&t_d=Seeing%20the%20Challenge%3A%20How%20Commercial%20Mobile%20Puzzle%20Games%20Visualize%20and%20Personalize%20Difficulty%20to%20Sustain%20Motivation%20and%20Monetization&t_t=Seeing%20the%20Challenge%3A%20How%20Commercial%20Mobile%20Puzzle%20Games%20Visualize%20and%20Personalize%20Difficulty%20to%20Sustain%20Motivation%20and%20Monetization&s_o=default#)
  - [Oldest](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3800965.3834315&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3800965.3834315&t_d=Seeing%20the%20Challenge%3A%20How%20Commercial%20Mobile%20Puzzle%20Games%20Visualize%20and%20Personalize%20Difficulty%20to%20Sustain%20Motivation%20and%20Monetization&t_t=Seeing%20the%20Challenge%3A%20How%20Commercial%20Mobile%20Puzzle%20Games%20Visualize%20and%20Personalize%20Difficulty%20to%20Sustain%20Motivation%20and%20Monetization&s_o=default#)

Nothing in this discussion yet.

[Load more comments](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3800965.3834315&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3800965.3834315&t_d=Seeing%20the%20Challenge%3A%20How%20Commercial%20Mobile%20Puzzle%20Games%20Visualize%20and%20Personalize%20Difficulty%20to%20Sustain%20Motivation%20and%20Monetization&t_t=Seeing%20the%20Challenge%3A%20How%20Commercial%20Mobile%20Puzzle%20Games%20Visualize%20and%20Personalize%20Difficulty%20to%20Sustain%20Motivation%20and%20Monetization&s_o=default#)

### Information

#### Published In

![cover image ACM Conferences](https://dl.acm.org/cms/asset/0d832998-9f13-4a6d-a9d0-8f2b36aaa288/3800965.cover.jpg)

CHI PLAY Companion '26: Companion Proceedings of the Annual Symposium on Computer-Human Interaction in Play

November 2026

608 pages

ISBN:9798400725654

DOI:10.1145/3800965

- **Editors:**
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Alena Denisova](https://dl.acm.org/profile/99658704936 "Alena Denisova"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Joe Cutting](https://dl.acm.org/profile/99659212192 "Joe Cutting"),
- [![Author Picture](https://dl.acm.org/cms/asset/4e8ae660-8b62-4376-b7ae-0e21f0428308/87959145157.jpg)Oğuz 'Oz' Buruk](https://dl.acm.org/profile/87959145157 "Oğuz 'Oz' Buruk"),
- [![Author Picture](https://dl.acm.org/cms/asset/ec2c1476-6583-4bc7-9837-046f2ded9dc3/cmentowski_sebastian_id_po_vh_ud_square.jpg)Sebastian Cmentowski](https://dl.acm.org/profile/99659210449 "Sebastian Cmentowski"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Madison Klarkowski](https://dl.acm.org/profile/99658771903 "Madison Klarkowski"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Anke V. Reinschluessel](https://dl.acm.org/profile/99659077519 "Anke V. Reinschluessel"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Imke Alenka Harbig](https://dl.acm.org/profile/99661023808 "Imke Alenka Harbig"),
- [![Author Picture](https://dl.acm.org/cms/asset/165bc276-581f-4c4b-9434-74e3c03496de/img_0601_copy.jpg)Vanissa Wanick](https://dl.acm.org/profile/99658766335 "Vanissa Wanick"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Leanne Chukoskie](https://dl.acm.org/profile/99659431421 "Leanne Chukoskie")

Copyright © 2026 Copyright held by the owner/author(s).

This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivs International 4.0 License.

#### Sponsors

- [SIGCHI: ACM Special Interest Group on Computer-Human Interaction](https://dl.acm.org/sig/SP923)

#### Publisher

Association for Computing Machinery

New York, NY, United States

#### Publication History

**Published**: 01 November 2026

#### Check for updates

[Check for updates on crossmark](https://dl.acm.org/doi/10.1145/3800965.3834315# "Check for updates on crossmark")

#### Author Tags

01. [mobile games](https://dl.acm.org/keyword/mobile+games?expand=all)
02. [puzzle games](https://dl.acm.org/keyword/puzzle+games?expand=all)
03. [match-3](https://dl.acm.org/keyword/match-3?expand=all)
04. [block puzzle](https://dl.acm.org/keyword/block+puzzle?expand=all)
05. [player motivation](https://dl.acm.org/keyword/player+motivation?expand=all)
06. [difficulty](https://dl.acm.org/keyword/difficulty?expand=all)
07. [difficulty visualization](https://dl.acm.org/keyword/difficulty+visualization?expand=all)
08. [dynamic difficulty adjustment](https://dl.acm.org/keyword/dynamic+difficulty+adjustment?expand=all)
09. [player segmentation](https://dl.acm.org/keyword/player+segmentation?expand=all)
10. [personalization](https://dl.acm.org/keyword/personalization?expand=all)
11. [disclosure](https://dl.acm.org/keyword/disclosure?expand=all)
12. [free-to-play](https://dl.acm.org/keyword/free-to-play?expand=all)
13. [monetization](https://dl.acm.org/keyword/monetization?expand=all)
14. [dark patterns](https://dl.acm.org/keyword/dark+patterns?expand=all)
15. [self-determination theory](https://dl.acm.org/keyword/self-determination+theory?expand=all)
16. [flow](https://dl.acm.org/keyword/flow?expand=all)

#### Qualifiers

- Work in progress

#### Conference

CHI PLAY Companion '26

Sponsor:

- [SIGCHI](https://dl.acm.org/sig/SP923)

[CHI PLAY Companion '26: Companion Proceedings of the Annual Symposium on Computer-Human Interaction in Play](https://chiplay.acm.org/2026)

November 2 - 5, 2026

York, United Kingdom

#### Acceptance Rates

CHI PLAY Companion '26 Paper Acceptance Rate 101 of 191 submissions, 53%;

Overall Acceptance Rate 522 of 1,577 submissions, 33%

[More](https://dl.acm.org/doi/proceedings/10.1145/3800965#sec-acceptance-rates "More")

### Contributors

![](https://dl.acm.org/specs/products/acm/releasedAssets/images/loader-7e60691fbe777356dc81ff6d223a82a6.gif)

#### Other Metrics

[View Article Metrics](https://dl.acm.org/doi/10.1145/3800965.3834315#tab-metrics-inner)

### Bibliometrics

#### Article Metrics

- 0

Total Citations

- 99

Total Downloads


- Downloads (Last 12 months)Advanced metrics (Premium feature)...
- Downloads (Last 6 weeks) Advanced metrics (Premium feature)...

Reflects downloads up to 18 Nov 2026

#### Other Metrics

[View Author Metrics](https://dl.acm.org/doi/10.1145/3800965.3834315#tab-contributors)

### Citations

### Share

#### Share this Publication link

Copy Link

Copied!

Copying failed.

#### Share on social media

[X](https://dl.acm.org/#twitter "Share on X") [LinkedIn](https://dl.acm.org/#linkedin "Share on LinkedIn") [Reddit](https://dl.acm.org/#reddit "Share on Reddit") [Facebook](https://dl.acm.org/#facebook "Share on Facebook") [Threads](https://dl.acm.org/#threads "Share on Threads") [email](https://dl.acm.org/#email "Share on email")

#### Affiliations

![](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)

JungtaeKim

Game Design, Sungkyunkwan University, Seoul, Republic of Korea and Sungkyunkwan University, Seoul, Republic of Korea [jayce0kim@gmail.com](mailto:jayce0kim@gmail.com)

[https://orcid.org/0009-0002-2941-973X](https://orcid.org/0009-0002-2941-973X)

[View Profile](https://dl.acm.org/profile/99662118830)

[View full text](https://dl.acm.org/doi/full/10.1145/3800965.3834315) \| [Download PDF](https://dl.acm.org/doi/pdf/10.1145/3800965.3834315?download=true)

xrefBack.goTo

xrefBack.goTo

Request permissionsExpand All

Collapse

Expand Table

Show all references

SHOW ALL BOOKS

[Authors Info & Affiliations](about:blank#tab-contributors)

[View Table of Contents](https://dl.acm.org/doi/proceedings/10.1145/3800965)

Your Search Results Download Request

We are preparing your search results for download ...

We will inform you here when the file is ready.

[Download now!](https://dl.acm.org/doi/10.1145/3800965.3834315#)

Your Search Results Download Request

Your file of search results citations is now ready.

[Download now!](https://dl.acm.org/doi/10.1145/3800965.3834315#)

Your Search Results Download Request

Your search export query has expired. Please try again.

Copy link

✓

Thanks for sharing!

Find any service

[AddToAny](https://www.addtoany.com/ "Share Buttons")

[More…](https://dl.acm.org/doi/10.1145/3800965.3834315#addtoany "Show all")

A2A
