URL: https://dl.acm.org/doi/full/10.1145/3772363.3798911
TITLE: Quantifying Hit Feedback Preferences in 2D Action Games: A User-Adjustment Study of Visual and Temporal Parameters
RETRIEVED: 2026-11-22
METHOD: web_extract

[skip to main content](https://dl.acm.org/doi/full/10.1145/3772363.3798911#skip-to-main-content)

## ACM is now Open Access

×

As part of the Digital Library's transition to [Open Access](https://dl.acm.org/action/clickThrough?id=108180&url=%2Fopenaccess&loc=%2Fdoi%2Ffull%2F10.1145%2F3772363.3798911&pubId=64542264&placeholderId=101025&productId=108179 "Follow link to the ACM DL Open Access information page"), new features for researchers are available in the _Premium Edition_. [Click here to learn more](https://dl.acm.org/action/clickThrough?id=108180&url=%2Fpremium&loc=%2Fdoi%2Ffull%2F10.1145%2F3772363.3798911&pubId=64542264&placeholderId=101025&productId=108179 "More information about Premium Edition").

**You are currently in the Basic Edition. Features requiring a subscription appear in grey.**

[Sign In](https://dl.acm.org/action/clickThrough?id=108180&url=%2Faction%2FshowLogin%3FredirectUri%3Dhttps%253A%252F%252Fdl.acm.org%252Fdoi%252Ffull%252F10.1145%252F3772363.3798911&loc=%2Fdoi%2Ffull%2F10.1145%2F3772363.3798911&pubId=64542264&placeholderId=101025&productId=108179) [Upgrade](https://dl.acm.org/action/clickThrough?id=108180&url=%2Fabout%2Fupgrade&loc=%2Fdoi%2Ffull%2F10.1145%2F3772363.3798911&pubId=64542264&placeholderId=101025&productId=108179 "Learn about upgrading to Premium Edition")

Several features on this page require Premium Access.

[Learn more](https://dl.acm.org/about/upgrade) [Sign in](https://dl.acm.org/action/showLogin?redirectUri=%2Fdoi%2F10.1145%2F3772363.3798911)

Contents

## Abstract

Hit feedback presentation at the moment of attack impact is fundamental to player experience in action games, yet quantitative understanding of optimal parameter settings remains limited. We present a user-adjustment methodology where players directly calibrate eight visual and temporal parameters in a 2D action game. Through parameter adjustment (N=16) and gameplay validation (N=116) experiments, we quantified preferences across attack types and distances. Key findings reveal: (1) preferences are universal across attack distances but differ significantly by type, with charge attacks requiring 1.7× stronger presentation; (2) individual differences span 6-fold ranges with three distinct preference types; (3) random settings are perceived as excessive 45% of the time, indicating comfortable ranges are biased toward lower values. Settings averaged from 16 participants achieved over 80% optimal ratings from new users, demonstrating practical applicability. These findings provide evidence-based design guidelines emphasizing upper-bound constraints and customization options.

![](https://dl.acm.org/cms/10.1145/3772363.3798911/asset/a1177f88-6931-4273-a135-c7a3c8007d12/assets/images/medium/chiea26-662-fig1.jpg)

Left: Two game scenes showing melee (top) and ranged (bottom) attack environments with adjustable presentation parameters. Right: Bar chart comparing all presentation parameters between melee and ranged attacks, showing no significant differences.

Experimental setup and findings. (A) Melee attack scene and (B) ranged attack scene where players adjust presentation parameters via sliders. (C) Comparison of presentation parameter settings shows no significant differences between attack distances (melee vs. ranged), indicating universal player preferences regardless of attack range.

## 1 Introduction

Game development has become increasingly democratized, making it critical to provide engaging experiences within limited resources. Hit feedback presentation at the moment of attack impact is a fundamental element directly linked to players’ sense of exhilaration and achievement. While the importance of sensory elements such as “control feel” and “tactility” is recognized, questions about what presentations work effectively and how to handle individual differences remain quantitatively unexplored.

In this study, we propose an experimental method where players adjust hit feedback presentations in 2D action games, and quantitatively analyze parameter setting tendencies and individual differences. In contrast to conventional research centered on subjective evaluation, we clarify the relationship between actual play behavior and presentation settings through analysis of behavioral data based on operation logs.

Specifically, we address the following research questions:

•

**RQ1:** Are there differences in preferred presentation parameters depending on attack types (melee, ranged, normal, charge)?

•

**RQ2:** What characteristics and patterns exist in players’ presentation adjustment behaviors?

•

**RQ3:** What are the important factors in presentation design considering individual differences?

Understanding how presentation elements interact with player psychology requires grounding in both game design theory and player motivation research. Swink’s foundational work on "game feel" \[ [16](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0016)\] established a vocabulary for describing the tactile and kinesthetic sensations in games, while research on player motivations \[ [2](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0002), [18](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0018)\] has demonstrated how players differ in their motivations for achievement, social interaction, and immersion—differences that may extend to presentation preferences.

## 2 Related Work

Game presentation research has developed primarily from three perspectives.

First is understanding the impact of presentation elements on psychological experience. Hicks et al. empirically verified the impact of “juiciness” on player experience through both visual \[ [5](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0005)\] and audio \[ [6](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0006)\] elements. Kao et al. demonstrated through large-scale experiments how Juicy Feedback affects players’ motivation and enjoyment through psychological factors of effectance, competence, and curiosity \[ [9](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0009)\]. Pichlmair and Johansen systematized the concept of Game Feel into specific design elements \[ [14](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0014)\].

Second is knowledge on presentation design in attack actions. Ujitoko and Ban comprehensively compiled the mechanisms of “pseudo-haptics,” where visual operation delays such as cursor deceleration and hit-stop generate pseudo-tactile sensations \[ [17](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0017)\]. These findings have been applied to VR environments \[ [1](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0001), [11](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0011), [12](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0012)\]. Lécuyer’s comprehensive survey \[ [10](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0010)\] further established pseudo-haptics as a technique where visual feedback manipulates haptic perception, demonstrating that control-display ratio modifications can create illusory sensations without physical force feedback devices. As Interrante et al. showed, since distance perception in virtual space depends on visual cues \[ [8](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0008)\], optimal feedback intensity is expected to differ by attack distance. Young et al. verified the relationship between time and reward in charge attacks \[ [19](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0019)\].

Third are attempts at user-adjustable presentation. Bhatnagar et al. integrated “emotional impact” and “Game Feel” \[ [3](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0003)\]. Garver et al. investigated the impact of visual style on player experience \[ [4](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0004)\].

From a methodological perspective, formal frameworks for game design \[ [7](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0007)\] and user-centered approaches \[ [13](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0013)\] emphasize the importance of player feedback in iterative design. However, accessibility research \[ [15](https://dl.acm.org/doi/full/10.1145/3772363.3798911#Bib0015)\] has highlighted that even well-intentioned design processes often fail to accommodate diverse player needs, particularly when relying solely on subjective evaluation rather than behavioral data. This underscores the value of methods that directly capture player adjustment behaviors.

However, much knowledge relies on subjective evaluations, and quantitative analysis based on operation logs and comparative verification by attack types are insufficient. This study quantitatively elucidates presentation setting tendencies and individual differences in 2D action games through slider adjustments by players themselves.

## 3 Method

We conducted two experiments in this study. In Experiment 1, we recorded the process of players freely adjusting presentation parameters to explore their preferred settings. In Experiment 2, we verified the effectiveness of the setting values obtained in Experiment 1 in an actual gameplay environment.

### 3.1 Experiment 1: Parameter Adjustment

We prepared a 2D action game environment built on Unity, with a melee attack scene (Fig. [1](https://dl.acm.org/doi/full/10.1145/3772363.3798911#fig1) (A)) and a ranged attack scene (Fig. [1](https://dl.acm.org/doi/full/10.1145/3772363.3798911#fig1) (B)). Each scene implements two types of attacks: normal and charge, and participants can adjust eight presentation parameters using sliders (Table [1](https://dl.acm.org/doi/full/10.1145/3772363.3798911#tab1)). The experiment was conducted online, with participants running a distributed Unity application on their home PC environments. The frame rate was fixed at 60fps to maintain uniformity in physics calculations.

|     |     |     |     |
| --- | --- | --- | --- |
| Parameter | Range | Unit | Description |
| CameraShake | 0.0–1.0 | Unit | Camera shake intensity |
| CameraShakeTime | 0.0–1.0 | sec | Camera shake duration |
| HitEffect | 0.0–5.0 | Scale | Effect size (1.0 = standard) |
| HitStop | 0.0–1.0 | sec | Freeze time on hit |

Setting ranges and units of presentation parameters

Participants performed the following four tasks in order: (1) Melee attack, pleasant condition: Adjust to settings that feel most suitable (pleasant); (2) Melee attack, unpleasant boundary condition: Adjust to settings that are just barely not unpleasant; (3) Ranged attack, pleasant condition: Adjust to optimal settings similar to melee; (4) Ranged attack, unpleasant boundary condition: Adjust to boundary settings similar to melee. When satisfied with the settings in each scene, participants pressed a button in the lower right to proceed, with no time limit set.

A total of 16 participants (14 male, 2 female, average age 22.5 years) including students from an information science university and external collaborators participated. Gaming frequency was “almost every day” for 11, “several times a week” for 3, and “several times a month” for 2, with the majority being regular gamers.

### 3.2 Experiment 2: Validation in Gameplay

To verify whether the setting values obtained in Experiment 1 function effectively in actual gameplay situations, we constructed a new stage-format 2D action game. Participants played three scenes (A, B, C) in randomized order and responded to an evaluation questionnaire about their play experience using Google Forms after each scene.

Presentation parameters for each scene were set as shown in Table 2 . Scene A applied the mean values from the “pleasant condition” of Experiment 1. Scene B determined all parameters randomly. To create “unpleasant” settings for Scene C,

\\begin{equation} V\_{\\text{unpleasant}} = 2V\_{\\text{boundary}} - V\_{\\text{pleasant}} \\end{equation}

(1)

we used this equation, adding the difference between the unpleasant boundary value _V_ boundary and pleasant value _V_ pleasant to the boundary value, intentionally setting excessive presentation.

![](https://dl.acm.org/cms/10.1145/3772363.3798911/asset/06727f63-b69e-41b4-b06b-d310d7ee562a/assets/images/medium/chiea26-662-fig2.jpg)

Comparison of presentation parameters between normal and charge attacks (mean ± SD). \*\*\* _p_ < 0.01.

A total of 116 students (93 male, 23 female, average age 21.1 years) from an information science university participated. Since some participated in both melee and ranged attack experiments, the total number of valid responses was 130 (60 melee, 70 ranged). Subjective evaluations used a 5-point Likert scale.

## 4 Results and Discussion

Normality was confirmed by Shapiro-Wilk test for all parameters (all _p_ >.05), allowing the use of parametric tests.

### 4.1 RQ1: Differences by Attack Types

T-tests showed no significant differences in all presentation parameters between melee and ranged attacks (all _p_ \> 0.10, Fig. [1](https://dl.acm.org/doi/full/10.1145/3772363.3798911#fig1) (C)). In contrast, as shown in Fig. [2](https://dl.acm.org/doi/full/10.1145/3772363.3798911#fig2), significant differences were confirmed for all parameters between normal and charge attacks (all _p_ < 0.01, Cohen’s _d_ = 1.01–1.81). Notably, HitEffect increased approximately 1.7-fold from 1.858 for normal attacks to 3.184 for charge attacks (Cohen’s _d_ = 1.28), demonstrating the importance of visual impact for charge attacks.

This indicates that players’ criteria for comfort are universal regardless of attack distance, while they have clearly different presentation expectations for attack types (normal/charge). Practically, individual adjustments for attack distance are unnecessary, but charge attacks require approximately 1.7-fold (HitEffect) more powerful presentation. This finding enables developers to create distinction in presentation intensity based on statistical evidence without relying on empirical rules. Additionally, the finding that adjustments by attack distance are unnecessary greatly contributes to reducing development costs.

### 4.2 RQ2: Adjustment Behavior Patterns

Time-series analysis revealed three adjustment behavior patterns: (1) exploratory type: fine-tuning after major changes; (2) gradual type: stepwise value increases; (3) intuitive type: few changes after early determination. The average adjustment time was approximately 120 seconds, with a median of approximately 84 seconds.

The three observed adjustment patterns provide important implications for presentation adjustment interface design. Adaptive UI is suggested, such as high-precision sliders for exploratory types and preset functions for intuitive types.

### 4.3 RQ3: Individual Differences and Design Factors

As shown in Fig. [3](https://dl.acm.org/doi/full/10.1145/3772363.3798911#fig3) (a), the largest individual differences were observed in HitEffect (range: 0.643–4.036, approximately 6-fold). Other parameters showed relatively small individual differences.

![](https://dl.acm.org/cms/10.1145/3772363.3798911/asset/8bc05295-afda-4d65-94a9-5e7963eadae3/assets/images/medium/chiea26-662-fig4.jpg)

Individual differences and preference typology. (a) Distribution showing largest variance in HitEffect (6-fold range) with diamond markers indicating min/max values. (b) Three preference types identified through cluster analysis. Each point represents one participant (N=16). Axes derived from principal component analysis of four presentation parameters.

K-means cluster analysis revealed three preference groups (Fig. [3](https://dl.acm.org/doi/full/10.1145/3772363.3798911#fig3) (b)): (1) Impact-oriented type (high HitEffect and CameraShake settings); (2) Tempo-oriented type (extremely short HitStop and CameraShakeTime settings); (3) Balanced type (all parameters set to intermediate values). The cluster number k=3 was determined through examination of the Elbow method and Silhouette coefficient.

Correlation analysis revealed moderate positive correlations between CameraShakeTime and HitStop ( _r_ = 0.60), and between CameraShakeTime and HitEffect ( _r_ = 0.59). The correlation between CameraShake and HitEffect was weak ( _r_ = 0.16).

The largest individual differences (approximately 6-fold) in HitEffect demonstrate the importance of customization features according to individual preferences. Meanwhile, cluster analysis clearly classified three preference types, providing guidelines for preset design.

### 4.4 Validation in Gameplay (Experiment 2)

A total of 116 participants (93 male, 23 female, average age 21.1 years) participated in Experiment 2, with 130 valid responses (60 melee, 70 ranged).

As shown in Fig. [4](https://dl.acm.org/doi/full/10.1145/3772363.3798911#fig4) (a), Scene A applying mean values from Experiment 1 was ranked first by 81.7% for melee and 72.9% for ranged attacks. In overall satisfaction (Fig. [4](https://dl.acm.org/doi/full/10.1145/3772363.3798911#fig4) (b)), Scene A was significantly higher than other scenes (both _p_ < 0.01). No significant differences were found between Scene B (random) and Scene C (unpleasant).

![](https://dl.acm.org/cms/10.1145/3772363.3798911/asset/3de69549-cb95-446a-9408-23858220adbe/assets/images/medium/chiea26-662-fig5.jpg)

Validation experiment results. (a) Scene A (averaged settings from Experiment 1) was ranked first by 81.7% (melee) and 72.9% (ranged). (b) Scene A showed significantly higher satisfaction than random (Scene B) and unpleasant (Scene C) settings.

The mean values from a small number of participants in Experiment 1 (N=16) were evaluated as “optimal” by over 80% of new participants (N=130). This demonstrates that the simple method of averaging adjustment results from several representative individuals is practical as an alternative to large-scale testing.

The most important finding is that random settings (Scene B) were as unpopular as unpleasant settings (Scene C), with the cause mainly being “excessive presentation” (45%). Mathematically, “insufficient” and “excessive” should occur to similar degrees, but “insufficient” was only 7% in reality. This means that comfortable parameter ranges are biased toward the lower side of the settable range, providing design guidelines that strict upper limits are necessary in automatic generation of presentations.

### 4.5 Limitations

Limitations of this study include: (1) small sample size in Experiment 1 (N=16), (2) participants mainly limited to information science students, and (3) focus only on 2D action games. Future work requires verification with larger and more diverse participants, and extension research to 3D games and FPS.

## 5 Conclusion

This study quantitatively elucidated design guidelines for attack hit feedback presentation in 2D action games through user-adjustment experiments.

Key findings for the three research questions are as follows: **RQ1:** No significant differences by attack distance (melee/ranged), but significant differences for all parameters by attack type (normal/charge) with large effect sizes (Cohen’s _d_ = 1.01–1.81). Charge attacks require approximately 1.7-fold setting values for visual effects. **RQ2:** Adjustment behaviors are classified into three patterns (exploratory, gradual, intuitive), providing guidelines for adaptive UI design. **RQ3:** Six-fold individual differences exist in HitEffect, with preferences classified into three types (Impact-oriented, Tempo-oriented, Balanced).

The most important finding is that random settings are perceived as excessive presentation (45%), indicating that comfortable ranges are biased toward the lower limit of the settable range. This demonstrates that strict upper limits are essential in automatic generation of presentations. Additionally, mean values from a small group (N=16) were evaluated as optimal by over 80% of new users (N=130), demonstrating the practicality of simple averaging methods.

As practical contributions, this study provides developers with: (1) statistically-grounded presentation ratios for charge/normal attacks (approximately 1.7-fold); (2) cost-reduction insight that adjustments by attack distance are unnecessary; (3) design principles for upper limit restrictions in automatic generation; (4) preset design guidelines based on three preference types.

Future research directions include verification with larger and more diverse participants, extension to 3D games and FPS, multimodal verification including auditory elements, and construction of personalized adaptive presentation systems using machine learning.

## Acknowledgments

This work was supported by TOYO University Top Priority Research Program Grant Number 2025T2.

## References

\[1\]

Yuki Ban and Yusuke Ujitoko. 2021. Hit-stop in VR: Combination of pseudo-haptics and vibration enhances impact sensation. In _2021 IEEE World Haptics Conference (WHC)_. IEEE, 991–996.

[Crossref](https://doi.org/10.1109/WHC49131.2021.9517129)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Hit-stop+in+VR%3A+Combination+of+pseudo-haptics+and+vibration+enhances+impact+sensation&author=Yuki+Ban&author=Yusuke+Ujitoko&publication_year=2021&pages=991-996&doi=10.1109%2FWHC49131.2021.9517129)

\[2\]

Richard Bartle. 1996. Hearts, Clubs, Diamonds, Spades: Players Who Suit MUDs. _Journal of MUD Research_ 1, 1 (1996). [https://mud.co.uk/richard/hcds.htm](https://mud.co.uk/richard/hcds.htm)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Hearts%2C+Clubs%2C+Diamonds%2C+Spades%3A+Players+Who+Suit+MUDs&author=Richard+Bartle&publication_year=1996)

\[3\]

Prabhav Bhatnagar, Markus Laattala, Supriya Dutta, and Perttu Hämäläinen. 2024. Understanding the Design of Emotionally Impactful Game Feel. In _Companion Proceedings of the 2024 Annual Symposium on Computer-Human Interaction in Play_. 24–30.

[Digital Library](https://dl.acm.org/doi/10.1145/3665463.3678781)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Understanding+the+Design+of+Emotionally+Impactful+Game+Feel&author=Prabhav+Bhatnagar&author=Markus+Laattala&author=Supriya+Dutta&author=Perttu+H%C3%A4m%C3%A4l%C3%A4inen&publication_year=2024&pages=24-30&doi=10.1145%2F3665463.3678781)

\[4\]

Stephen A Garver. 2015. _The impact of visual style on user experience in games_. Master’s thesis. Purdue University.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=The+impact+of+visual+style+on+user+experience+in+games&author=Stephen%C2%A0A+Garver&publication_year=2015)

\[5\]

Kieran Hicks, Kathrin Gerling, Patrick Dickinson, and Vero Vanden Abeele. 2019. Juicy game design: Understanding the impact of visual embellishments on player experience. In _Proceedings of the annual symposium on computer-human interaction in play_. 185–197.

[Digital Library](https://dl.acm.org/doi/10.1145/3311350.3347171)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Juicy+game+design%3A+Understanding+the+impact+of+visual+embellishments+on+player+experience&author=Kieran+Hicks&author=Kathrin+Gerling&author=Patrick+Dickinson&author=Vero+Vanden%C2%A0Abeele&publication_year=2019&pages=185-197&doi=10.1145%2F3311350.3347171)

\[6\]

Kieran Hicks, Katja Rogers, Kathrin Gerling, and Lennart E Nacke. 2024. Juicy Audio: Audio Designers’ Conceptualization of the Term in Video Games. _Proceedings of the ACM on Human-Computer Interaction_ 8, CHI PLAY (2024), 1–28.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Juicy+Audio%3A+Audio+Designers%E2%80%99+Conceptualization+of+the+Term+in+Video+Games&author=Kieran+Hicks&author=Katja+Rogers&author=Kathrin+Gerling&author=Lennart%C2%A0E+Nacke&publication_year=2024&pages=1-28)

\[7\]

Robin Hunicke, Marc LeBlanc, and Robert Zubek. 2004. MDA: A Formal Approach to Game Design and Game Research. In _Proceedings of the AAAI Workshop on Challenges in Game AI_.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=MDA%3A+A+Formal+Approach+to+Game+Design+and+Game+Research&author=Robin+Hunicke&author=Marc+LeBlanc&author=Robert+Zubek&publication_year=2004)

\[8\]

Victoria Interrante, Brian Ries, and Lee Anderson. 2007. Distance perception in immersive virtual environments, revisited. _IEEE Virtual Reality Conference_ (2007), 3–10.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Distance+perception+in+immersive+virtual+environments%2C+revisited&author=Victoria+Interrante&author=Brian+Ries&author=Lee+Anderson&publication_year=2007&pages=3-10)

\[9\]

Dominic Kao, Nick Ballou, Kathrin Gerling, Heiko Breitsohl, and Sebastian Deterding. 2024. How does Juicy Game Feedback Motivate? Testing Curiosity, Competence, and Effectance. In _Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems_. 1–16.

[Digital Library](https://dl.acm.org/doi/10.1145/3613904.3642656)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=How+does+Juicy+Game+Feedback+Motivate%3F+Testing+Curiosity%2C+Competence%2C+and+Effectance&author=Dominic+Kao&author=Nick+Ballou&author=Kathrin+Gerling&author=Heiko+Breitsohl&author=Sebastian+Deterding&publication_year=2024&pages=1-16&doi=10.1145%2F3613904.3642656)

\[10\]

Anatole Lécuyer. 2009. Simulating Haptic Feedback Using Vision: A Survey of Research and Applications of Pseudo-Haptic Feedback. _Presence: Teleoperators and Virtual Environments_ 18, 1 (2009), 39–53.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Simulating+Haptic+Feedback+Using+Vision%3A+A+Survey+of+Research+and+Applications+of+Pseudo-Haptic+Feedback&author=Anatole+L%C3%A9cuyer&publication_year=2009&pages=39-53)

\[11\]

Akihiro Maehigashi, Yui Oura, and Naoya Ikeda. 2024. Effect of Virtual Object Material on the Pseudo-Haptic Weight. _IEEE Access_ 12 (2024), 10123–10133.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Effect+of+Virtual+Object+Material+on+the+Pseudo-Haptic+Weight&author=Akihiro+Maehigashi&author=Yui+Oura&author=Naoya+Ikeda&publication_year=2024&pages=10123-10133)

\[12\]

Shinnosuke Noguchi, Keigo Matsumoto, Yuki Ban, and Takuji Narumi. 2024. Realistic Impact Perception in Multi-User VR Tennis: Enhancing UX through Hit-Stop and Modification of Others’ Movement. In _SIGGRAPH Asia 2024 Emerging Technologies_. 1–2.

[Digital Library](https://dl.acm.org/doi/10.1145/3681755.3688941)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Realistic+Impact+Perception+in+Multi-User+VR+Tennis%3A+Enhancing+UX+through+Hit-Stop+and+Modification+of+Others%E2%80%99+Movement&author=Shinnosuke+Noguchi&author=Keigo+Matsumoto&author=Yuki+Ban&author=Takuji+Narumi&publication_year=2024&pages=1-2&doi=10.1145%2F3681755.3688941)

\[13\]

Randy J Pagulayan, Kevin Keeker, Dennis Wixon, Ramon L Romero, and Thomas Fuller. 2003. User-Centered Design in Games. In _The Human-Computer Interaction Handbook: Fundamentals, Evolving Technologies and Emerging Applications_. Lawrence Erlbaum Associates, Mahwah, NJ, 883–906.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=User-Centered+Design+in+Games&author=Randy%C2%A0J+Pagulayan&author=Kevin+Keeker&author=Dennis+Wixon&author=Ramon%C2%A0L+Romero&author=Thomas+Fuller&publication_year=2003&pages=883-906)

\[14\]

Martin Pichlmair and Mads Johansen. 2021. Designing game feel: A survey. _IEEE Transactions on Games_ 14, 2 (2021), 138–152.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Designing+game+feel%3A+A+survey&author=Martin+Pichlmair&author=Mads+Johansen&publication_year=2021&pages=138-152)

\[15\]

John R Porter and Julie A Kientz. 2013. An Empirical Study of Issues and Barriers to Mainstream Video Game Accessibility. In _Proceedings of the 15th International ACM SIGACCESS Conference on Computers and Accessibility_. ACM, 3:1–3:8.

[Digital Library](https://dl.acm.org/doi/10.1145/2513383.2513444)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=An+Empirical+Study+of+Issues+and+Barriers+to+Mainstream+Video+Game+Accessibility&author=John%C2%A0R+Porter&author=Julie%C2%A0A+Kientz&publication_year=2013&pages=3%3A1%E2%80%933%3A8&doi=10.1145%2F2513383.2513444)

\[16\]

Steve Swink. 2009. _Game Feel: A Game Designer’s Guide to Virtual Sensation_. CRC Press, Amsterdam.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Game+Feel%3A+A+Game+Designer%E2%80%99s+Guide+to+Virtual+Sensation&author=Steve+Swink&publication_year=2009)

\[17\]

Yusuke Ujitoko and Yuki Ban. 2021. Survey of pseudo-haptics: Haptic feedback design and application proposals. _IEEE Transactions on Haptics_ 14, 3 (2021), 491–506.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Survey+of+pseudo-haptics%3A+Haptic+feedback+design+and+application+proposals&author=Yusuke+Ujitoko&author=Yuki+Ban&publication_year=2021&pages=491-506)

\[18\]

Nick Yee. 2006. Motivations for Play in Online Games. _CyberPsychology & Behavior_ 9, 6 (2006), 772–775.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Motivations+for+Play+in+Online+Games&author=Nick+Yee&publication_year=2006&pages=772-775)

\[19\]

Michael E Young, Tara L Webb, Steven C Sutherland, and Eric A Jacobs. 2013. Magnitude effects for experienced rewards at short delays in the escalating interest task. _Psychonomic bulletin & review_ 20 (2013), 302–309.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Magnitude+effects+for+experienced+rewards+at+short+delays+in+the+escalating+interest+task&author=Michael%C2%A0E+Young&author=Tara%C2%A0L+Webb&author=Steven%C2%A0C+Sutherland&author=Eric%C2%A0A+Jacobs&publication_year=2013&pages=302-309)

## Index Terms

Index Terms (Premium feature)

1. Quantifying Hit Feedback Preferences in 2D Action Games: A User-Adjustment Study of Visual and Temporal Parameters

1. [Human-centered computing](https://dl.acm.org/doi/full/10.1145/3772363.3798911#)



      1. [Interaction design](https://dl.acm.org/doi/full/10.1145/3772363.3798911#)



         1. [Empirical studies in interaction design](https://dl.acm.org/doi/full/10.1145/3772363.3798911#)

         2. [Interaction design process and methods](https://dl.acm.org/doi/full/10.1145/3772363.3798911#)



            1. [User centered design](https://dl.acm.org/doi/full/10.1145/3772363.3798911#)

## Recommendations

Recommendations (Premium feature)

- [**Understanding the Design of Emotionally Impactful Game Feel**](https://dl.acm.org/doi/full/10.1145/3772363.3798911# "Understanding the Design of Emotionally Impactful Game Feel")

CHI PLAY Companion '24: Companion Proceedings of the 2024 Annual Symposium on Computer-Human Interaction in Play







This paper seeks to understand the connections between two previously disjoint subfields
of game research and design: 1) the study of emotionally impactful games and 2) the
study of game feel. Regarding games and emotion, we now understand aspects such ...







[Read More](https://dl.acm.org/doi/full/10.1145/3772363.3798911# "Read More")

- [**Player Characteristics and Video Game Preferences**](https://dl.acm.org/doi/full/10.1145/3772363.3798911# "Player Characteristics and Video Game Preferences")

CHI PLAY '19: Proceedings of the Annual Symposium on Computer-Human Interaction in Play







The Games User Research literature has advanced considerably on understanding why
people play games and what different types of games or mechanics they prefer. However,
what has been less studied is how models of player preferences explain their game
...







[Read More](https://dl.acm.org/doi/full/10.1145/3772363.3798911# "Read More")

- [**Power-Ups in Digital Games: The Rewarding Effect of Phantom Game Elements on Player Experience**](https://dl.acm.org/doi/full/10.1145/3772363.3798911# "Power-Ups in Digital Games: The Rewarding Effect of Phantom Game Elements on Player Experience")

CHI PLAY '19: Proceedings of the Annual Symposium on Computer-Human Interaction in Play







Power-ups are a type of game reward that allow the player to customise their experience
by altering gameplay for a short period of time. Despite the wide use of power-ups
in video games, little is known about their effect on gaming experiences. To ...







[Read More](https://dl.acm.org/doi/full/10.1145/3772363.3798911# "Read More")


## Comments

Comments (Premium feature)

Disqus Comments

We were unable to load Disqus. If you are a moderator please see our [troubleshooting guide](https://docs.disqus.com/help/83/).

## DL Comment Policy

Comments should be relevant to the contents of this article, (sign in required).

Got it

- [Share](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3772363.3798911&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2Ffull%2F10.1145%2F3772363.3798911&t_d=Quantifying%20Hit%20Feedback%20Preferences%20in%202D%20Action%20Games%3A%20A%20User-Adjustment%20Study%20of%20Visual%20and%20Temporal%20Parameters%20%7C%20Proceedings%20of%20the%20Extended%20Abstracts%20of%20the%202026%20CHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&t_t=Quantifying%20Hit%20Feedback%20Preferences%20in%202D%20Action%20Games%3A%20A%20User-Adjustment%20Study%20of%20Visual%20and%20Temporal%20Parameters%20%7C%20Proceedings%20of%20the%20Extended%20Abstracts%20of%20the%202026%20CHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&s_o=default#)

  - Tweet this discussion
  - Share this discussion on Facebook
  - Share this discussion via email
  - Copy link to discussion

  - [Best](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3772363.3798911&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2Ffull%2F10.1145%2F3772363.3798911&t_d=Quantifying%20Hit%20Feedback%20Preferences%20in%202D%20Action%20Games%3A%20A%20User-Adjustment%20Study%20of%20Visual%20and%20Temporal%20Parameters%20%7C%20Proceedings%20of%20the%20Extended%20Abstracts%20of%20the%202026%20CHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&t_t=Quantifying%20Hit%20Feedback%20Preferences%20in%202D%20Action%20Games%3A%20A%20User-Adjustment%20Study%20of%20Visual%20and%20Temporal%20Parameters%20%7C%20Proceedings%20of%20the%20Extended%20Abstracts%20of%20the%202026%20CHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&s_o=default#)
  - [Newest](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3772363.3798911&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2Ffull%2F10.1145%2F3772363.3798911&t_d=Quantifying%20Hit%20Feedback%20Preferences%20in%202D%20Action%20Games%3A%20A%20User-Adjustment%20Study%20of%20Visual%20and%20Temporal%20Parameters%20%7C%20Proceedings%20of%20the%20Extended%20Abstracts%20of%20the%202026%20CHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&t_t=Quantifying%20Hit%20Feedback%20Preferences%20in%202D%20Action%20Games%3A%20A%20User-Adjustment%20Study%20of%20Visual%20and%20Temporal%20Parameters%20%7C%20Proceedings%20of%20the%20Extended%20Abstracts%20of%20the%202026%20CHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&s_o=default#)
  - [Oldest](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3772363.3798911&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2Ffull%2F10.1145%2F3772363.3798911&t_d=Quantifying%20Hit%20Feedback%20Preferences%20in%202D%20Action%20Games%3A%20A%20User-Adjustment%20Study%20of%20Visual%20and%20Temporal%20Parameters%20%7C%20Proceedings%20of%20the%20Extended%20Abstracts%20of%20the%202026%20CHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&t_t=Quantifying%20Hit%20Feedback%20Preferences%20in%202D%20Action%20Games%3A%20A%20User-Adjustment%20Study%20of%20Visual%20and%20Temporal%20Parameters%20%7C%20Proceedings%20of%20the%20Extended%20Abstracts%20of%20the%202026%20CHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&s_o=default#)

Nothing in this discussion yet.

[Load more comments](https://disqus.com/embed/comments/?base=default&f=acm-prod&t_i=10.1145%2F3772363.3798911&t_u=https%3A%2F%2Fdl.acm.org%2Fdoi%2Ffull%2F10.1145%2F3772363.3798911&t_d=Quantifying%20Hit%20Feedback%20Preferences%20in%202D%20Action%20Games%3A%20A%20User-Adjustment%20Study%20of%20Visual%20and%20Temporal%20Parameters%20%7C%20Proceedings%20of%20the%20Extended%20Abstracts%20of%20the%202026%20CHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&t_t=Quantifying%20Hit%20Feedback%20Preferences%20in%202D%20Action%20Games%3A%20A%20User-Adjustment%20Study%20of%20Visual%20and%20Temporal%20Parameters%20%7C%20Proceedings%20of%20the%20Extended%20Abstracts%20of%20the%202026%20CHI%20Conference%20on%20Human%20Factors%20in%20Computing%20Systems&s_o=default#)

### Information

#### Published In

![cover image ACM Conferences](https://dl.acm.org/cms/asset/12a596f5-5ee0-4586-8526-778ada4a1a1e/3772363.cover.jpg)

CHI EA '26: Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems

April 2026

6339 pages

ISBN:9798400722813

DOI:10.1145/3772363

- **Editors:**
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Nuria Oliver](https://dl.acm.org/profile/99662137854 "Nuria Oliver"),
- [![Author Picture](https://dl.acm.org/cms/asset/c4cc7c62-67c3-4f95-b861-b853b3bef6ab/me.jpg)David A. Shamma](https://dl.acm.org/profile/81100288295 "David A. Shamma"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Heloisa Candello](https://dl.acm.org/profile/81442618367 "Heloisa Candello"),
- [![Author Picture](https://dl.acm.org/cms/asset/45855ac8-60fa-4ef9-b550-27698dcfd598/pablo.jpg)Pablo Cesar](https://dl.acm.org/profile/81318497573 "Pablo Cesar"),
- [![Author Picture](https://dl.acm.org/cms/asset/aa3faf41-c100-410d-9d6b-cb2bbf32b49c/_pedrolopes_uchicago.jpg)Pedro Lopes](https://dl.acm.org/profile/81557182156 "Pedro Lopes"),
- [![Author Picture](https://dl.acm.org/cms/asset/7db6776c-376f-44df-a241-0a4e145add3b/1711636131746.jpeg)Valentino Artizzu](https://dl.acm.org/profile/99659583970 "Valentino Artizzu"),
- [![Author Picture](https://dl.acm.org/cms/asset/c3428a6b-c9bd-4fb6-a8e3-ee1b68df9fe3/fiona_2024_small_copy.jpg)Fiona Draxler](https://dl.acm.org/profile/99659468601 "Fiona Draxler"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Gustavo López](https://dl.acm.org/profile/99661945005 "Gustavo López"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Anke V. Reinschluessel](https://dl.acm.org/profile/99659077519 "Anke V. Reinschluessel"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Xin Tong](https://dl.acm.org/profile/99661860099 "Xin Tong"),
- [![Author Picture](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)Phoebe O. Toups Dugas](https://dl.acm.org/profile/99662125901 "Phoebe O. Toups Dugas")

Copyright © 2026 Copyright held by the owner/author(s).

This work is licensed under a Creative Commons Attribution International 4.0 License.

#### Sponsors

- [SIGCHI: ACM Special Interest Group on Computer-Human Interaction](https://dl.acm.org/sig/sigchi)

#### Publisher

Association for Computing Machinery

New York, NY, United States

#### Publication History

**Published**: 13 April 2026

#### Check for updates

[Check for updates on crossmark](https://dl.acm.org/doi/full/10.1145/3772363.3798911# "Check for updates on crossmark")

#### Author Tags

1. [Hit feedback](https://dl.acm.org/keyword/Hit+feedback?expand=all)
2. [Game feel](https://dl.acm.org/keyword/Game+feel?expand=all)
3. [Player preferences](https://dl.acm.org/keyword/Player+preferences?expand=all)
4. [2D action games](https://dl.acm.org/keyword/2D+action+games?expand=all)
5. [Player experience](https://dl.acm.org/keyword/Player+experience?expand=all)

#### Qualifiers

- Extended-abstract

#### Conference

CHI EA '26

Sponsor:

- [SIGCHI](https://dl.acm.org/sig/sigchi)

[CHI EA '26: Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems](https://chi2026.acm.org/)

April 13 - 17, 2026

Barcelona, Spain

#### Acceptance Rates

CHI EA '26 Paper Acceptance Rate Not Available

Overall Acceptance Rate 6,555 of 24,617 submissions, 27%

#### Upcoming Conference

CHI '27

- **Sponsor:**
- [sigchi](https://dl.acm.org/sig/sigchi "Special Interest Group on Computer-Human Interaction")

[ACM CHI Conference on Human Factors in Computing Systems](https://dl.acm.org/conference/chi "ACM CHI Conference on Human Factors in Computing Systems")

May 10 - 14, 2027



Pittsburgh ,


PA ,


USA



### Contributors

![](https://dl.acm.org/specs/products/acm/releasedAssets/images/loader-7e60691fbe777356dc81ff6d223a82a6.gif)

#### Other Metrics

[View Article Metrics](https://dl.acm.org/doi/full/10.1145/3772363.3798911#tab-metrics-inner)

### Bibliometrics

#### Article Metrics

- 0

Total Citations

- 419

Total Downloads


- Downloads (Last 12 months)Advanced metrics (Premium feature)...
- Downloads (Last 6 weeks) Advanced metrics (Premium feature)...

Reflects downloads up to 18 Nov 2026

#### Other Metrics

[View Author Metrics](https://dl.acm.org/doi/full/10.1145/3772363.3798911#tab-contributors)

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

ShokiSeki

Toyo University, Tokyo, Japan [s1f102200053@iniad.org](mailto:s1f102200053@iniad.org)

[https://orcid.org/0009-0008-8285-3758](https://orcid.org/0009-0008-8285-3758)

[View Profile](https://dl.acm.org/profile/99661861895)

![](https://dl.acm.org/pb-assets/icons/DOs/default-profile-1543932446943.svg)

TomokazuIshikawa

Toyo University, Tokyo, Japan and Prometech CG Research, Tokyo, Japan [tomokazu.ishikawa@iniad.org](mailto:tomokazu.ishikawa@iniad.org)

[https://orcid.org/0000-0002-9176-1336](https://orcid.org/0000-0002-9176-1336)

[View Profile](https://dl.acm.org/profile/99661866070)

[View full text](https://dl.acm.org/doi/full/10.1145/3772363.3798911) \| [Download PDF](https://dl.acm.org/doi/pdf/10.1145/3772363.3798911?download=true)

xrefBack.goTo

xrefBack.goTo

Request permissionsExpand All

Collapse

Expand Table

Show all references

SHOW ALL BOOKS

[Authors Info & Affiliations](about:blank#tab-contributors)

[View Table of Contents](https://dl.acm.org/doi/proceedings/10.1145/3772363)

Your Search Results Download Request

We are preparing your search results for download ...

We will inform you here when the file is ready.

[Download now!](https://dl.acm.org/doi/full/10.1145/3772363.3798911#)

Your Search Results Download Request

Your file of search results citations is now ready.

[Download now!](https://dl.acm.org/doi/full/10.1145/3772363.3798911#)

Your Search Results Download Request

Your search export query has expired. Please try again.

Copy link

✓

Thanks for sharing!

Find any service

[AddToAny](https://www.addtoany.com/ "Share Buttons")

[More…](https://dl.acm.org/doi/full/10.1145/3772363.3798911#addtoany "Show all")

A2A