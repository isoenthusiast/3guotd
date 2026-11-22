URL: https://dl.acm.org/doi/10.1145/3815598.3815663
TITLE: Session Architecture Predicts Mobile Game Retention: A Single-Studio Case Study (FDG 2026)
RETRIEVED: 2026-11-22
METHOD: web_extract

[skip to main content](https://dl.acm.org/doi/10.1145/3815598.3815663#skip-to-main-content)

## ACM is now Open Access

×

As part of the Digital Library's transition to [Open Access](https://dl.acm.org/action/clickThrough?id=108180&url=%2Fopenaccess&loc=%2Fdoi%2F10.1145%2F3815598.3815663&pubId=65139650&placeholderId=101025&productId=108179 "Follow link to the ACM DL Open Access information page"), new features for researchers are available in the _Premium Edition_. [Click here to learn more](https://dl.acm.org/action/clickThrough?id=108180&url=%2Fpremium&loc=%2Fdoi%2F10.1145%2F3815598.3815663&pubId=65139650&placeholderId=101025&productId=108179 "More information about Premium Edition").

**You are currently in the Basic Edition. Features requiring a subscription appear in grey.**

[Sign In](https://dl.acm.org/action/clickThrough?id=108180&url=%2Faction%2FshowLogin%3FredirectUri%3Dhttps%253A%252F%252Fdl.acm.org%252Fdoi%252F10.1145%252F3815598.3815663&loc=%2Fdoi%2F10.1145%2F3815598.3815663&pubId=65139650&placeholderId=101025&productId=108179) [Upgrade](https://dl.acm.org/action/clickThrough?id=108180&url=%2Fabout%2Fupgrade&loc=%2Fdoi%2F10.1145%2F3815598.3815663&pubId=65139650&placeholderId=101025&productId=108179 "Learn about upgrading to Premium Edition")

Several features on this page require Premium Access.

[Learn more](https://dl.acm.org/about/upgrade) [Sign in](https://dl.acm.org/action/showLogin?redirectUri=%2Fdoi%2F10.1145%2F3815598.3815663)

Contents

## Abstract

This single-studio case study examined 35 mobile game prototypes (2023–2025) to identify behavioral predictors of Day 1 retention and explore whether expert-coded design features show promise for future validation. Session count demonstrated robust predictive validity for Day 1 retention ( _r_ = 0.84, _p_ < 0.001), consistent with established churn prediction literature. A hierarchical regression model incorporating expert-coded design features—particularly creative confidence ( _r_ = 0.63)—explained significantly more variance than behavioral metrics alone ( _ΔR_ 2 = 0.091, _F_(3, 29) = 5.82, _p_ = 0.003), though the single-rater design precludes generalization. The 71% retention improvement observed over the study period coincided with improvements in design quality ratings. This work establishes session count as a robust behavioral signal and identifies design dimensions warranting multi-studio validation with independent raters.

## 1 Introduction

Mobile games live or die on Day 1 retention. A player who returns after their first session signals long-term value potential, while those who never return represent sunk acquisition costs \[ [7](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0007)\]. Yet while studios obsess over engagement metrics—playtime, sessions, interactions—a fundamental question remains: _Which aspects of early engagement most strongly predict retention?_

Analysis of 35 mobile game prototypes from a single studio reveals a clear hierarchy. Session count demonstrated robust predictive validity for Day 1 retention ( _r_ = 0.84), exceeding total playtime ( _r_ = 0.81). These constructs are distinct: Day 0 session count reflects active repeated choice to re-engage within the install day—indexing habit-loop initiation \[ [9](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0009)\]—whereas Day 1 retention measures whether the player returns the following day, a separate behavioral decision. This distinction aligns with habit formation \[ [12](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0012)\] and distributed practice \[ [1](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0001)\] principles from learning science.

Most retention studies rely exclusively on automated behavioral metrics \[ [4](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0004)\]. This work extends prior research by incorporating expert-coded design features rated by an experienced game producer. Adding three design features to the behavioral model produced a significant increment in explained variance ( _ΔR_ 2 = 0.091, _p_ = 0.003), suggesting producer judgment captures retention drivers missed by automated systems.

**RQ1:** How do behavioral metrics predict Day 1 retention? **RQ2:** Do expert-coded design features show promise warranting future multi-rater validation? **RQ3:** Can longitudinal design improvements validate the predictive framework?

This work contributes: (1) empirical evidence that session count ( _r_ = 0.84) outperforms total playtime as a retention predictor, (2) demonstration that expert-coded design features add significant predictive value ( _p_ = 0.003) beyond behavioral metrics, and (3) longitudinal evidence of 71% retention improvement coinciding with design quality gains. The single-studio, single-rater design limits this to hypothesis generation.

## 2 Related Work

### 2.1 Churn Prediction and Session Behavior

Prior work on player churn emphasizes prediction accuracy using machine learning on behavioral signals \[ [2](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0002), [7](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0007)\]. Hadiji et al. demonstrated that session counts, playtime patterns, and progression metrics enable accurate churn forecasting. Lundquist et al. \[ [4](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0004)\] showed that first-session metrics alone predict retention rapidly. However, this work treats prediction as a black-box problem and does not compare which session architecture metrics matter most, nor why. Direct empirical comparisons of session count versus total playtime as Day 1 retention predictors—particularly in mobile prototypes—remain rare \[ [3](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0003)\].

### 2.2 Design Features, Theory, and Retention

Design features such as onboarding structure and goal clarity are rarely quantified systematically in retention research. This work addresses that gap. Theoretically, Eyal’s Hook Model \[ [5](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0005)\] and Fogg’s Behavior Model \[ [6](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0006)\] both emphasize repetition in establishing behavioral routines. Self-determination theory \[ [10](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0010)\] links competence and autonomy to intrinsic motivation, and distributed practice research \[ [1](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0001)\] supports spaced short sessions over single extended ones—collectively grounding why session count may outperform total playtime as a retention signal. The integration of expert design assessment with behavioral metrics in this context remains novel \[ [11](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0011)\].

## 3 Methods

### 3.1 Dataset

The dataset comprises 35 mobile games released between June 2023 and December 2025 by a single studio. All games were developed within the same studio, providing detailed access to design documentation. This single-coder design, while limiting generalizability, enables expert assessment that would be impossible with automated metrics alone.

Games were tagged with primary genre labels derived from a studio-maintained tagging system. The primary genre for each game was extracted by applying a priority order (Puzzle, Shooter, Action, Strategy, Roguelite) to the game’s tag list, yielding four genre categories after grouping and filtering genres with fewer than three titles: Strategy (including Roguelite, _n_ = 15), Puzzle ( _n_ = 9), Action ( _n_ = 5), and Shooter ( _n_ = 4). Platform distribution: Android (69%, _n_ = 24), iOS (31%, _n_ = 11).

Games ranged from 100 to 2,257 installs (mean=453). All were soft-launched prototypes intended to test core loop viability rather than mature LiveOps titles. This early-stage focus enables examination of design structure before confounding factors (meta-progression, social features, monetization) dominate retention.

### 3.2 Behavioral Metrics

For each game, Day 0 behavioral data were extracted from analytics platforms (Firebase, Unity Analytics):

**Day 1 Retention Rate:** Percentage of Day 0 players who returned on Day 1 (outcome variable).

**Session Count:** Number of distinct play sessions on Day 0 (per-user average across all Day 0 players for that game).

**Total Playtime:** Sum of all session durations on Day 0, per user (minutes).

**Average Session Length:** Mean duration per session on Day 0 (minutes).

These metrics represent the behavioral “session architecture”—the temporal structure of early engagement.

### 3.3 Design Feature Coding

A senior game designer with 8+ years of industry experience—involved in the studio’s development process but blinded to retention outcomes—coded six design features based on design documentation and gameplay recordings. Critically, this rater had no access to Day 1 retention metrics during the coding phase to prevent outcome knowledge bias. Coding occurred retrospectively after all behavioral data collection was complete.

**Creative Confidence (CC):** Novelty and execution quality (5-point scale).

**Goal Clarity (GC):** Player objective transparency (5-point scale).

**Onboarding Friction (OF):** Tutorial complexity and cognitive load (reverse-scored, 5-point scale).

**Meta-Progression:** Persistent advancement systems (binary).

**Social Features:** Multiplayer or social mechanics (binary).

**Content Depth:** Hours of unique content available at launch.

### 3.4 Inter-Rater Reliability Consideration

The design feature coding reflects a single expert’s judgment, introducing potential bias. Three factors partially mitigate this concern: (1) **Temporal independence:** games were coded retrospectively after data collection; (2) coding rubrics used observable anchors; (3) longitudinal consistency was observed across the study period. Future work should incorporate multiple independent raters.

The coder’s direct involvement in game development represents a fundamental limitation. While outcome blinding was enforced, the rater possessed privileged knowledge of design intent that external raters would lack.

### 3.5 Statistical Analysis

Pearson correlations assessed relationships between predictors and Day 1 retention. Hierarchical regression tested whether design features added explanatory power beyond behavioral metrics, using the following model structure:

**Model 1 (Behavioral):**

\\begin{equation\*} \\hat{Y} = \\beta \_0 + \\beta \_1(\\text{SessionCount}) + \\beta \_2(\\text{TotalPlaytime}) + \\varepsilon \\end{equation\*}

**Model 2 (Behavioral + Design):**

\\begin{equation\*} \\hat{Y} = \\beta \_0 + \\beta \_1(\\text{SessionCount}) + \\beta \_2(\\text{TotalPlaytime}) + \\beta \_3(\\text{CC}) + \\beta \_4(\\text{GC}) + \\beta \_5(\\text{OF}) + \\varepsilon \\end{equation\*}

Model 2 is properly nested within Model 1 (all Model 1 predictors retained), enabling a valid hierarchical _F_-test for the design feature increment. Standardized coefficients ( _β_) are reported to facilitate comparison across predictors. Given multiple comparisons across six design features, Bonferroni correction ( _α_ = 0.05/6 = 0.0083) was applied to individual correlations. All analyses used two-tailed tests with _α_ = 0.05 (unless corrected).

## 4 Results

### 4.1 Behavioral Predictors

Session count showed the strongest correlation with Day 1 retention ( _r_ = 0.84, _p_ < 0.001), exceeding total playtime ( _r_ = 0.81, _p_ < 0.001). Average session length showed a moderate correlation ( _r_ = 0.55, _p_ < 0.001).

Hierarchical regression using session count and total playtime as predictors yielded _R_ 2 = 0.76 (adjusted _R_ 2 = 0.74; _F_(2, 32) = 50.35, _p_ < 0.001), with session count contributing unique standardized variance ( _β_ = 0.52, _t_ = 3.82, _p_ = 0.001) beyond playtime ( _β_ = 0.27, _t_ = 2.66, _p_ = 0.012).

![](https://dl.acm.org/cms/10.1145/3815598.3815663/asset/08de24c9-75fb-4363-874e-86279c21c4c9/assets/images/medium/fdg26-65-fig1.jpg)

Session count correlates strongly with Day 1 retention ( _r_ = 0.84, _p_ < 0.001), outperforming total playtime as a behavioral predictor. Each point represents one game ( _N_ = 35); the _x_-axis shows the per-user average session count across all Day 0 players for that game.

### 4.2 Design Feature Contributions

Creative confidence correlated most strongly with retention ( _r_ = 0.63, _p_ < 0.001), followed by goal clarity ( _r_ = 0.44, _p_ = 0.008, both surviving Bonferroni correction). Onboarding friction showed a negative correlation ( _r_ = −0.38, _p_ = 0.024) that did not survive correction. Meta-progression, social features, and content depth showed weak or non-significant relationships.

Adding creative confidence, goal clarity, and onboarding friction to the behavioral model increased _R_ 2 from 0.76 to 0.85 (adjusted _R_ 2 = 0.82; _ΔR_ 2 = 0.091). The hierarchical _F_-test for this increment was statistically significant ( _F_(3, 29) = 5.82, _p_ = 0.003), indicating that expert-coded design features explain meaningful variance beyond behavioral metrics alone. Within the full model, session count ( _β_ = 0.47, _t_ = 3.33, _p_ = 0.002) and creative confidence ( _β_ = 0.30, _t_ = 2.79, _p_ = 0.009) were significant predictors; goal clarity ( _β_ = 0.22, _t_ = 1.95, _p_ = 0.061) and onboarding friction ( _β_ = 0.02, _t_ = 0.16, _p_ = 0.877) were not.

![](https://dl.acm.org/cms/10.1145/3815598.3815663/asset/fbc45d45-110d-457e-a2e4-81b23b786534/assets/images/medium/fdg26-65-fig2.jpg)

Design features add significant predictive value beyond behavioral metrics. Behavioral model: _R_ 2 = 0.76, adj _R_ 2 = 0.74. Behavioral + Design: _R_ 2 = 0.85, adj _R_ 2 = 0.82 ( _ΔR_ 2 = 0.091, _F_(3, 29) = 5.82, _p_ = 0.003).

### 4.3 Temporal Trends

Retention improved substantially over the 2.5-year study period. Correlation between game release date and Day 1 retention was significant ( _r_ = 0.49, _p_ = 0.003), with retention increasing from 20.0% (2023, _n_ = 9) to 22.4% (2024, _n_ = 16) to 34.2% (2025, _n_ = 10)—a 71% improvement from first to final year. This temporal pattern coincided with observable increases in mean design quality ratings: creative confidence increased from 2.78 (2023) to 3.90 (2025), and goal clarity from 2.67 (2023) to 3.20 (2025). Whether these parallel improvements reflect a causal design learning effect, a general studio improvement effect, or shifting market conditions cannot be determined from this observational data.

![](https://dl.acm.org/cms/10.1145/3815598.3815663/asset/7e3a8b08-63a1-4ebe-9011-2888ac4c4308/assets/images/medium/fdg26-65-fig3.jpg)

Retention improved over 2.5 years ( _r_ = 0.49, _p_ = 0.003) coinciding with observable improvements in design quality ratings.

### 4.4 Genre Differences

One-way ANOVA on four primary genre groups (games with fewer than three titles excluded) revealed significant genre effects ( _F_(3, 31) = 4.64, _p_ = 0.009). Strategy games (including Roguelite titles) achieved highest retention (\\(M=30.4\\%\\), _n_ = 15), followed by Shooters (\\(M=29.9\\%\\), _n_ = 4), Action (\\(M=19.9\\%\\), _n_ = 5), and Puzzle (\\(M=18.5\\%\\), _n_ = 9). Strategy games’ superior retention may reflect deeper core loops and meta-progression structures that reward repeated short sessions.

## 5 Discussion

### 5.1 Session Architecture as Primary Signal

Session count ( _r_ = 0.84) emerged as the strongest behavioral predictor, exceeding total playtime ( _r_ = 0.81). The practical implication is direct: designers might prioritize decisions that encourage players to return two or three times during the install day, rather than optimizing exclusively for session duration. Three mechanisms plausibly explain this: multiple returns signal habit-loop initiation \[ [9](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0009)\]; distributed practice across sessions enhances system familiarity \[ [1](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0001)\]; and each return is a discrete intentional choice, whereas extended single-session playtime may reflect passive engagement rather than committed interest \[ [5](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0005), [6](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0006)\].

### 5.2 Expert Judgment Adds Significant Value

Creative confidence—a composite of novelty and execution quality—showed the strongest design feature correlation ( _r_ = 0.63) and remained a significant predictor in the full regression model ( _β_ = 0.30, _p_ = 0.009). The hierarchical increment was statistically significant ( _p_ = 0.003), suggesting that producer judgment of game quality captures retention-relevant dimensions that automated behavioral metrics do not. However, the single-rater, single-studio design means these findings require multi-studio replication with independent raters before any generalized conclusions can be drawn.

### 5.3 Temporal Patterns and Their Limits

The 71% retention improvement over 2.5 years is an encouraging result, but its interpretation is limited. The parallel increases in creative confidence and goal clarity ratings across years are consistent with a design learning interpretation, but the same temporal pattern would be expected from general studio skill improvement, changes in game genre mix, or broader market shifts in player expectations. Causal attribution to specific design practices requires experimental validation.

### 5.4 Genre as Moderator

Strategy and Roguelite games substantially outperformed Puzzle titles (30.4% vs 18.5%), likely reflecting structural differences in loop depth and meta-progression. A methodological caution applies: genres are not independent of the outcome, as some genres are intrinsically designed around high-frequency short sessions. Genre comparisons should be treated as descriptive rather than explanatory.

### 5.5 Ethical Considerations

Designing explicitly to maximize session count raises ethical questions. Optimizing for multiple short sessions per day may shade into compulsive or exploitative design, which has been documented as a risk in mobile game contexts \[ [8](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0008), [13](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0013)\]. The framework presented here is intended as a diagnostic signal, not a design mandate: session count predicts retention, but whether studios choose to optimize for it—and how—involves design ethics considerations that this data alone cannot resolve.

## 6 Limitations

**Single-Studio Generalizability:** All 35 games share the same design philosophy, technology stack, and market positioning, limiting external validity.

**Development Involvement Bias:** The design feature coder participated in developing the rated games. Outcome blinding was enforced, but privileged design intent knowledge that external raters would lack represents a fundamental limitation.

**Equal Game-Level Weighting:** Games were weighted equally regardless of install count (100–2,257), reflecting the design experiment as the unit of analysis. Install-count weighting would allow a handful of high-install titles to dominate. As a robustness check, weighted correlation yielded _r_ = 0.820 vs unweighted _r_ = 0.840 (difference = 0.020), confirming the approach is empirically stable. Retention estimates from low-install games carry wider confidence intervals and should be interpreted accordingly.

**Sample and Causal Inference:** _N_ = 35 supports detection of large effects but limits complex modeling; adjusted _R_ 2 values partially address this. The observational design precludes causal claims; experimental validation is needed.

**Construct Validity:** “Creative confidence” conflates novelty, polish, and execution quality. Future work should decompose this into constituent elements with independent raters.

## 7 Conclusion

Session count provides a robust behavioral signal for mobile game retention ( _r_ = 0.84, _p_ < 0.001), outperforming total playtime across 35 prototypes. This finding has immediate practical value and strong theoretical grounding in habit formation \[ [5](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0005), [9](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0009)\] and distributed practice \[ [1](https://dl.acm.org/doi/10.1145/3815598.3815663#Bib0001)\] literature.

Expert-coded design features added significant predictive value beyond behavioral metrics alone ( _ΔR_ 2 = 0.091, _F_(3, 29) = 5.82, _p_ = 0.003), with creative confidence ( _r_ = 0.63) showing the strongest design-level correlation. However, the single-rater, single-studio design limits generalization; multi-studio replication with independent raters is essential.

The 71% retention improvement observed over 2.5 years coincided with improvements in design quality ratings, though the causal mechanism cannot be established from this observational design. For researchers and practitioners, session count emerges as a validated optimization target, while expert design feature coding represents a promising direction requiring rigorous validation.

## Data Availability

De-identified dataset and analysis code will be made available in a public repository upon publication to facilitate replication.

## References

\[1\]

Nicholas J. Cepeda, Harold Pashler, Edward Vul, John T. Wixted, and Doug Rohrer. 2006. Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis. _Psychological Bulletin_ 132, 3 (2006), 354–380.

[Crossref](https://doi.org/10.1037/0033-2909.132.3.354)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Distributed+Practice+in+Verbal+Recall+Tasks%3A+A+Review+and+Quantitative+Synthesis&author=Nicholas%C2%A0J.+Cepeda&author=Harold+Pashler&author=Edward+Vul&author=John%C2%A0T.+Wixted&author=Doug+Rohrer&publication_year=2006&pages=354-380&doi=10.1037%2F0033-2909.132.3.354)

\[2\]

Quentin Deloison, Akka Zemmari, and Karim Benabdeslem. 2022. Predicting Player Churn of a Free-to-Play Mobile Video Game. _Applied Sciences_ 12, 6 (2022), 2795.

[Crossref](https://doi.org/10.3390/app12062795)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Predicting+Player+Churn+of+a+Free-to-Play+Mobile+Video+Game&author=Quentin+Deloison&author=Akka+Zemmari&author=Karim+Benabdeslem&publication_year=2022&pages=2795&doi=10.3390%2Fapp12062795)

\[3\]

Anders Drachen, Magy Seif El-Nasr, and Alessandro Canossa. 2013. _Game Analytics_. Springer, London, UK.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Game+Analytics&author=Anders+Drachen&author=Magy%C2%A0Seif+El-Nasr&author=Alessandro+Canossa&publication_year=2013)

\[4\]

Anders Drachen, Eric T. Lundquist, Yungjen Kung, Pranav Simha Rao, Rafet Sifa, Julian Runge, and Diego Klabjan. 2016. Rapid Prediction of Player Retention in Free-to-Play Mobile Games. In _Proceedings of the Twelfth AAAI Conference on Artificial Intelligence and Interactive Digital Entertainment (AIIDE)_. 208–214.

[Crossref](https://doi.org/10.1609/aiide.v12i1.12856)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Rapid+Prediction+of+Player+Retention+in+Free-to-Play+Mobile+Games&author=Anders+Drachen&author=Eric%C2%A0T.+Lundquist&author=Yungjen+Kung&author=Pranav%C2%A0Simha+Rao&author=Rafet+Sifa&author=Julian+Runge&author=Diego+Klabjan&publication_year=2016&pages=208-214&doi=10.1609%2Faiide.v12i1.12856)

\[5\]

Nir Eyal. 2014. _Hooked: How to Build Habit-Forming Products_. Portfolio/Penguin, New York, NY.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Hooked%3A+How+to+Build+Habit-Forming+Products&author=Nir+Eyal&publication_year=2014)

\[6\]

Brian J. Fogg. 2009. A Behavior Model for Persuasive Design. In _Proceedings of the 4th International Conference on Persuasive Technology_. ACM, 40:1–40:7.

[Digital Library](https://dl.acm.org/doi/10.1145/1541948.1541999)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=A+Behavior+Model+for+Persuasive+Design&author=Brian%C2%A0J.+Fogg&publication_year=2009&pages=40%3A1%E2%80%9340%3A7&doi=10.1145%2F1541948.1541999)

\[7\]

Fabian Hadiji, Rafet Sifa, Anders Drachen, Christian Thurau, Kristian Kersting, and Christian Bauckhage. 2014. Predicting player churn in the wild. In _2014 IEEE Conference on Computational Intelligence and Games (CIG)_. IEEE, 1–8.

[Crossref](https://doi.org/10.1109/CIG.2014.6932876)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Predicting+player+churn+in+the+wild&author=Fabian+Hadiji&author=Rafet+Sifa&author=Anders+Drachen&author=Christian+Thurau&author=Kristian+Kersting&author=Christian+Bauckhage&publication_year=2014&pages=1-8&doi=10.1109%2FCIG.2014.6932876)

\[8\]

Faltin Karlsen. 2019. Exploited or Engaged? Dark Game Design Patterns. In _Transgression in Games and Play_, Kristine Jørgensen and Faltin Karlsen (Eds.). MIT Press.

[Crossref](https://doi.org/10.7551/mitpress/11550.003.0019)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Exploited+or+Engaged%3F+Dark+Game+Design+Patterns&author=Faltin+Karlsen&publication_year=2019&doi=10.7551%2Fmitpress%2F11550.003.0019)

\[9\]

Phillippa Lally, Cornelia H. M. van Jaarsveld, Henry W. W. Potts, and Jane Wardle. 2010. How Are Habits Formed: Modelling Habit Formation in the Real World. _European Journal of Social Psychology_ 40, 6 (2010), 998–1009.

[Crossref](https://doi.org/10.1002/ejsp.674)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=How+Are+Habits+Formed%3A+Modelling+Habit+Formation+in+the+Real+World&author=Phillippa+Lally&author=Cornelia+H.%C2%A0M.+van+Jaarsveld&author=Henry+W.%C2%A0W.+Potts&author=Jane+Wardle&publication_year=2010&pages=998-1009&doi=10.1002%2Fejsp.674)

\[10\]

Richard M. Ryan and Edward L. Deci. 2000. Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being. _American Psychologist_ 55, 1 (2000), 68–78.

[Crossref](https://doi.org/10.1037/0003-066X.55.1.68)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Self-Determination+Theory+and+the+Facilitation+of+Intrinsic+Motivation%2C+Social+Development%2C+and+Well-Being&author=Richard%C2%A0M.+Ryan&author=Edward%C2%A0L.+Deci&publication_year=2000&pages=68-78&doi=10.1037%2F0003-066X.55.1.68)

\[11\]

Harko Verhagen, Frans Feldberg, Bart van den Hooff, Stijn Meerts, and Johanna Merikivi. 2016. Player Experiences of Habit Formation in Mobile Games. _International Journal of Human-Computer Interaction_ 32, 4 (2016), 291–307.

[Crossref](https://doi.org/10.1080/10447318.2016.1151184)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Player+Experiences+of+Habit+Formation+in+Mobile+Games&author=Harko+Verhagen&author=Frans+Feldberg&author=Bart+van%C2%A0den+Hooff&author=Stijn+Meerts&author=Johanna+Merikivi&publication_year=2016&pages=291-307&doi=10.1080%2F10447318.2016.1151184)

\[12\]

Wendy Wood and Dennis Rünger. 2016. Psychology of Habit. _Annual Review of Psychology_ 67 (2016), 289–314.

[Crossref](https://doi.org/10.1146/annurev-psych-122414-033417)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Psychology+of+Habit&author=Wendy+Wood&author=Dennis+R%C3%BCnger&publication_year=2016&pages=289-314&doi=10.1146%2Fannurev-psych-122414-033417)

\[13\]

José P. Zagal, Staffan Björk, and Chris Lewis. 2013. Dark Patterns in the Design of Games. In _Proceedings of the Foundations of Digital Games_.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Dark+Patterns+in+the+Design+of+Games&author=Jos%C3%A9%C2%A0P.+Zagal&author=Staffan+Bj%C3%B6rk&author=Chris+Lewis&publication_year=2013)

## Index Terms

Index Terms (Premium feature)

1. Session Architecture Predicts Mobile Game Retention: A Single-Studio Case Study

1. [Applied computing](https://dl.acm.org/doi/10.1145/3815598.3815663#)



      1. [Computers in other domains](https://dl.acm.org/doi/10.1145/3815598.3815663#)



         1. [Personal computers and PC applications](https://dl.acm.org/doi/10.1145/3815598.3815663#)



            1. [Computer games](https://dl.acm.org/doi/10.1145/3815598.3815663#)
2. [Information systems](https://dl.acm.org/doi/10.1145/3815598.3815663#)



      1. [Information systems applications](https://dl.acm.org/doi/10.1145/3815598.3815663#)



         1. [Multimedia information systems](https://dl.acm.org/doi/10.1145/3815598.3815663#)



            1. [Massively multiplayer online games](https://dl.acm.org/doi/10.1145/3815598.3815663#)
3. [Software and its engineering](https://dl.acm.org/doi/10.1145/3815598.3815663#)



      1. [Software organization and properties](https://dl.acm.org/doi/10.1145/3815598.3815663#)



         1. [Contextual software domains](https://dl.acm.org/doi/10.1145/3815598.3815663#)



            1. [Virtual worlds software](https://dl.acm.org/doi/10.1145/3815598.3815663#)



               1. [Interactive games](https://dl.acm.org/doi/10.1145/3815598.3815663#)

Index terms have been assigned to the content through auto-classification.

## Recommendations

Recommendations (Premium feature)

- [**The effects of computer-assisted instruction on the achievement, attitudes and retention of fourth grade mathematics students in North Cyprus**](https://dl.acm.org/doi/10.1145/3815598.3815663# "The effects of computer-assisted instruction on the achievement, attitudes and retention of fourth grade mathematics students in North Cyprus")





The purpose of this study was to examine the effects of the educational software Frizbi
Mathematics 4 on 4th grade student's mathematics achievement, retention, attitudes
toward mathematics and attitude toward computer assisted learning. Two groups (...







[Read More](https://dl.acm.org/doi/10.1145/3815598.3815663# "Read More")

- [**A study on the impact of using Edmodo on students’ achievement in English language skills and retention**](https://dl.acm.org/doi/10.1145/3815598.3815663# "A study on the impact of using Edmodo on students’ achievement in English language skills and retention")



Abstract


This quasi-experimental study explores the impact of Edmodo application on students’
achievement in language skills and retention in EFL context. Fifty three eleventh
grade students participated in this study. A quasi-experimental design was used ...







[Read More](https://dl.acm.org/doi/10.1145/3815598.3815663# "Read More")

- [**Impact of Gamification on Student Engagement and Retention: An Experimental Study on Indian School-Going Students**](https://dl.acm.org/doi/10.1145/3815598.3815663# "Impact of Gamification on Student Engagement and Retention: An Experimental Study on Indian School-Going Students")

Proceedings of the International Conference on Technology 4 Education 2024, Volume 2





Abstract


The study aims to explore how integrating gamified elements like game-based activities
and reward systems can improve student motivation and knowledge retention. The research
involved 145 Indian school students from Chennai and Salem, Tamil Nadu, ...







[Read More](https://dl.acm.org/doi/10.1145/3815598.3815663# "Read More")


## Comments

Comments (Premium feature)

Disqus Comments

We were unable to load Disqus. If you are a moderator please see our [troubleshooting guide](https://docs.disqus.com/help/83/).

## DL Comment Policy

Comments should be relevant to the contents of this article, (sign in required).

Got it

- [Share](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3815598.3815663&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3815598.3815663&t_d=Session%20Architecture%20Predicts%20Mobile%20Game%20Retention%3A%20A%20Single-Studio%20Case%20Study%20%7C%20Proceedings%20of%20the%2021st%20International%20Conference%20on%20the%20Foundations%20of%20Digital%20Games&t_t=Session%20Architecture%20Predicts%20Mobile%20Game%20Retention%3A%20A%20Single-Studio%20Case%20Study%20%7C%20Proceedings%20of%20the%2021st%20International%20Conference%20on%20the%20Foundations%20of%20Digital%20Games&s_o=default#)

  - Tweet this discussion
  - Share this discussion on Facebook
  - Share this discussion via email
  - Copy link to discussion

  - [Best](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3815598.3815663&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3815598.3815663&t_d=Session%20Architecture%20Predicts%20Mobile%20Game%20Retention%3A%20A%20Single-Studio%20Case%20Study%20%7C%20Proceedings%20of%20the%2021st%20International%20Conference%20on%20the%20Foundations%20of%20Digital%20Games&t_t=Session%20Architecture%20Predicts%20Mobile%20Game%20Retention%3A%20A%20Single-Studio%20Case%20Study%20%7C%20Proceedings%20of%20the%2021st%20International%20Conference%20on%20the%20Foundations%20of%20Digital%20Games&s_o=default#)
  - [Newest](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3815598.3815663&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3815598.3815663&t_d=Session%20Architecture%20Predicts%20Mobile%20Game%20Retention%3A%20A%20Single-Studio%20Case%20Study%20%7C%20Proceedings%20of%20the%2021st%20International%20Conference%20on%20the%20Foundations%20of%20Digital%20Games&t_t=Session%20Architecture%20Predicts%20Mobile%20Game%20Retention%3A%20A%20Single-Studio%20Case%20Study%20%7C%20Proceedings%20of%20the%2021st%20International%20Conference%20on%20the%20Foundations%20of%20Digital%20Games&s_o=default#)
  - [Oldest](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3815598.3815663&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3815598.3815663&t_d=Session%20Architecture%20Predicts%20Mobile%20Game%20Retention%3A%20A%20Single-Studio%20Case%20Study%20%7C%20Proceedings%20of%20the%2021st%20International%20Conference%20on%20the%20Foundations%20of%20Digital%20Games&t_t=Session%20Architecture%20Predicts%20Mobile%20Game%20Retention%3A%20A%20Single-Studio%20Case%20Study%20%7C%20Proceedings%20of%20the%2021st%20International%20Conference%20on%20the%20Foundations%20of%20Digital%20Games&s_o=default#)

Nothing in this discussion yet.

[Load more comments](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3815598.3815663&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3815598.3815663&t_d=Session%20Architecture%20Predicts%20Mobile%20Game%20Retention%3A%20A%20Single-Studio%20Case%20Study%20%7C%20Proceedings%20of%20the%2021st%20International%20Conference%20on%20the%20Foundations%20of%20Digital%20Games&t_t=Session%20Architecture%20Predicts%20Mobile%20Game%20Retention%3A%20A%20Single-Studio%20Case%20Study%20%7C%20Proceedings%20of%20the%2021st%20International%20Conference%20on%20the%20Foundations%20of%20Digital%20Games&s_o=default#)

### Information

#### Published In

![cover image ACM Other conferences](https://dl.acm.org/cms/asset/4fc8165e-3779-403c-b8ec-53ad85ddf38f/3815598.cover.jpg)

FDG '26: Proceedings of the 21st International Conference on the Foundations of Digital Games

August 2026

1065 pages

ISBN:9798400724954

DOI:10.1145/3815598

- **General Chairs:**
- [![Author Picture](https://dl.acm.org/cms/asset/f54034ac-7f27-46e3-ae14-4b8095a6c377/ale.jpg)Alessandro Canossa](https://dl.acm.org/profile/81392616675 "Alessandro Canossa"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Jesper Juul](https://dl.acm.org/profile/81421592566 "Jesper Juul"),
- **Proceedings Chairs:**
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Phil Lopes](https://dl.acm.org/profile/99659726570 "Phil Lopes"),
- [![Author Picture](https://dl.acm.org/cms/asset/e957c03c-f627-47c0-a4bb-fb275dd1802d/ceng_article.png)Foaad Khosmood](https://dl.acm.org/profile/81464671826 "Foaad Khosmood"),
- **Program Chairs:**
- [![Author Picture](https://dl.acm.org/cms/asset/ea14d7bc-f9d0-4670-b065-a106f7adc59c/max_birk_student_research_competition_chair.jpg)Max Birk](https://dl.acm.org/profile/81557519856 "Max Birk"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Anastasia Salter](https://dl.acm.org/profile/81484642648 "Anastasia Salter")

Copyright © 2026 Copyright held by the owner/author(s).

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

#### Publisher

Association for Computing Machinery

New York, NY, United States

#### Publication History

**Published**: 09 August 2026

#### Check for updates

[Check for updates on crossmark](https://dl.acm.org/doi/10.1145/3815598.3815663# "Check for updates on crossmark")

#### Author Tags

1. [mobile games](https://dl.acm.org/keyword/mobile+games?expand=all)
2. [retention](https://dl.acm.org/keyword/retention?expand=all)
3. [session behavior](https://dl.acm.org/keyword/session+behavior?expand=all)
4. [game analytics](https://dl.acm.org/keyword/game+analytics?expand=all)
5. [design features](https://dl.acm.org/keyword/design+features?expand=all)
6. [expert judgment](https://dl.acm.org/keyword/expert+judgment?expand=all)

#### Qualifiers

- Research-article

#### Conference

FDG '26

[FDG '26: Foundations of Digital Games](https://fdg2026.org/)

August 10 - 13, 2026

Copenhagen, Denmark

#### Acceptance Rates

FDG '26 Paper Acceptance Rate Not Available

Overall Acceptance Rate 152 of 415 submissions, 37%

### Contributors

![](https://dl.acm.org/specs/products/acm/releasedAssets/images/loader-7e60691fbe777356dc81ff6d223a82a6.gif)

#### Other Metrics

[View Article Metrics](https://dl.acm.org/doi/10.1145/3815598.3815663#tab-metrics-inner)

### Bibliometrics

#### Article Metrics

- 0

Total Citations

- 496

Total Downloads


- Downloads (Last 12 months)Advanced metrics (Premium feature)...
- Downloads (Last 6 weeks) Advanced metrics (Premium feature)...

Reflects downloads up to 18 Nov 2026

#### Other Metrics

[View Author Metrics](https://dl.acm.org/doi/10.1145/3815598.3815663#tab-contributors)

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

Md Rakib JahanSiddique

Gameloops, Dhaka, Bangladesh [rakibj56@gmail.com](mailto:rakibj56@gmail.com)

[https://orcid.org/0009-0007-8739-3247](https://orcid.org/0009-0007-8739-3247)

[View Profile](https://dl.acm.org/profile/99662026613)

[View full text](https://dl.acm.org/doi/full/10.1145/3815598.3815663) \| [Download PDF](https://dl.acm.org/doi/pdf/10.1145/3815598.3815663?download=true)

xrefBack.goTo

xrefBack.goTo

Request permissionsExpand All

Collapse

Expand Table

Show all references

SHOW ALL BOOKS

[Authors Info & Affiliations](about:blank#tab-contributors)

[View Table of Contents](https://dl.acm.org/doi/proceedings/10.1145/3815598)

Your Search Results Download Request

We are preparing your search results for download ...

We will inform you here when the file is ready.

[Download now!](https://dl.acm.org/doi/10.1145/3815598.3815663#)

Your Search Results Download Request

Your file of search results citations is now ready.

[Download now!](https://dl.acm.org/doi/10.1145/3815598.3815663#)

Your Search Results Download Request

Your search export query has expired. Please try again.

Copy link

✓

Thanks for sharing!

Find any service

[AddToAny](https://www.addtoany.com/ "Share Buttons")

[More…](https://dl.acm.org/doi/10.1145/3815598.3815663#addtoany "Show all")

A2A
