URL: https://arxiv.org/pdf/2208.06155v2
TITLE: --- [page 1] ---
RETRIEVED: 2026-11-22
METHOD: curl


--- [page 1] ---
What Features Inﬂuence Impact Feel?
A Study of Impact Feedback in Action Games
1st Zhonghao Lin
School of Science and Engineering
The Chinese Univerisity of Hong Kong, Shenzhen
Shenzhen, China
zhonghaolin@link.cuhk.edu.cn
2nd HaiHan Duan
School of Science and Engineering
The Chinese Univerisity of Hong Kong, Shenzhen
Shenzhen, China
haihanduan@link.cuhk.edu.cn
3rd Zikai Alex Wen
Computational Media and Arts Thrust
The Hong Kong University of Science and Technology (Guangzhou)
Guangzhou, China
zikaiwen@ust.hk
4rd Wei Cai*
School of Science and Engineering
The Chinese Univerisity of Hong Kong, Shenzhen
Shenzhen, China
caiwei@cuhk.edu.cn
Abstract—Making the hit effect satisfy players is a long-
standing problem faced by action game designers. However, no
research systematically analyzed which game design elements
affect such game feel. There is not even a term to describe it.
So, we propose to use impact feel to describe the player’s feeling
when receiving juicy impact feedback. After collecting player’s
comments on action games from Steam’s top seller list, we trained
a natural language processing (NLP) model to rank action games
with their performance on impact feel. We presented a 19-feature
framework of impact feedback design and examined it in the top
eight and last eight games. We listed an inventory of the usage of
features and found that hit stop, sound coherence, and camera
control may strongly inﬂuence players’ impact feel. A lack of
dedicated design on one of these three features may ruin players’
impact feel. Our ﬁndings may become an evaluation metric for
future studies.
Index Terms—impact feel, game feel, impact feedback visual-
ization, juicy design
I. INTRODUCTION
In March 2022, the newly released soulslike action game
Elden Ring1 reached a new peak 950K concurrent players
on Steam2, which ranked the 6th highest among all of the
platform’s games. The phenomenon revealed that the growing
enthusiasm players were devoted to action games. Impact feed-
back design is a critical factor that contributes to the success
of video games. For action games that focus the gameplay on
providing a tasty ﬁghting experience, good impact feedback
is indispensable. There are many successful action games
winning players’ appreciation for providing awesome feeling
when receiving impact feedback, such as Street Fighter3,
Monster Hunter4, and God of War5 Series, while there are also
games that come under ﬁre for the awful feeling of impact.
*Wei Cai is the corresponding author (caiwei@cuhk.edu.cn).
1https://en.bandainamcoent.eu/elden-ring/elden-ring
2https://store.steampowered.com/
3https://streetﬁghter.com/en/
4https://www.monsterhunter.com/
5https://www.playstation.com/zh-hans-hk/games/god-of-war/
However, to the best of our knowledge, no word explicitly
deﬁnes this subtle feeling. Therefore, we propose the word
impact feel, a sub-genre of game feel, to describe the satisfying
feeling when receiving the impact of hits. It is the visceral
emotion derived from a well-designed impact feedback system
that requires juiciness in visual, auditory, and haptic feedback.
How to improve impact feel is a signiﬁcant problem for
action game designers. There exist plenty of technologies ap-
plied in impact feedback system to provide juiciness. Hundreds
of website articles have described how these technologies are
implemented in games. However, the signiﬁcant part “selection
of games” is mainly based on empirical judgment, which is not
convincing for research purposes. Unlike passionate players
and game developers online, only a few researchers target
impact feel. Martin [1] presented several technologies that
contribute to making an attack look more potent in his survey
of game feel, such as hit stop and slow motion. However, the
evidence came from empirical analysis from a game designer’s
blog [2]. Therefore, we aim to carry out a data-driven analysis
to identify features inﬂuencing the impact feel.
To achieve the target, we ﬁrst selected popular ﬁghting
games and rank them for the performance of impact feel by
NLP. By exploring the difference between games with high
and low ranks, we discovered features that inﬂuence players’
feeling of impact. Our work contributes to these aspects: First,
we proposed the word “impact feel” to describe players’ game
feel when receiving impact feedback. It ﬁlls the requirement
for a concise and uniform deﬁnition on this area and makes
it easy to study. Second, we collected game comments from
Steam, manually annotate, and constructed a data set of
5000 comments about game’s impact feel. On this basis, we
provided a data-driven ranking for popular action games with
their performance on impact feel by an NLP model. Based
on previous work on juicy design [3], we presented a 19-
feature framework in impact feedback design that applies to
popular action games. By experiment, we identiﬁed that for
arXiv:2208.06155v2  [cs.HC]  16 Aug 2022

--- [page 2] ---
action games, as long as there is a lack of meticulous design in
hit stop, sound coherence, and camera control, the performance
of impact feel will be unsatisfactory.
II. RELATED WORK
Game Feel and Impact Feel. The word game feel is ﬁrstly
proposed by Swink [4] in his book Game Feel, described
as “real time control of virtual objects in a simulated space,
with interactions emphasized by polish”. Several researchers
have discussed their opinions about game feel in the following
years. Martin [1] proposes the latest perspective; he argues
that game feel should “focus on the player and the design of
their interaction with the game.” As the narrow set of game
feel focusing on the ﬁghting process, the feeling of impact
is a critical element for action games. Methodologies used
in successful action games are discussed frequently on some
websites and online forums, such as Game Developer6 and
Reddit7. There are several expressions describing the feeling
of impact in previous articles, such as “combat impact” [2],
“the feeling of hit” [5], and “hit effect” [6]. Most expressions
lack academic reference, and the diversity makes this subtle
feeling difﬁcult to search and study. Therefore, the requirement
for a uniﬁed and convincing deﬁnition is urgent. In 2021, the
word “impact feedback visualization” is proposed in a survey
of designing game feel [1]. We derive the word “impact feel”
to describe the feeling when receiving “impact feedback”.
Several technologies have been discussed for the inﬂuence
on impact feel such as hit stop, slow motion and special
effects. Daniels [7], the former combat designer of God of
War, presents the importance of hit stop in making a game
feel better. Song [2] provides an overview of how to model
the combat impact in action games, including animation,
camera and special effects. Massoud [6] discusses the role of
animation in improving hit effects. In the game feel survey [1],
the author emphasizes the function of hit stop in signifying the
gameplay-relevant events and classiﬁes hit stop as the research
topic of impact feedback visualization. However, previous
works mostly take an analysis of the games which are selected
empirically. There is never a data-driven ranking for action
games’ performance of impact feel. Therefore, in this paper,
we conduct a quantitative ranking and analysis by NLP.
Juicy Design. The word “Juice” is often mentioned when
discussing how to intensify interactivity. “Juice” ampliﬁes
interactivity by providing excessive amounts of feedback in
relation to user input [8]. The goal of juice is to make actions
feel signiﬁcant and the results can be predicted unambiguously
[9]. As Swink [4] said, “a juicy design can contribute to
good game feel.” However, too much juicy makes it hard
to distinguish what aspects of interactivity have mechani-
cal importance [10]. Kao [11] ﬁnds that none and extreme
amounts of juiciness signiﬁcantly decrease player experience.
Because of the strong connection between juicy design and
game feel, designers should study features of juicy impact
6https://www.gamedeveloper.com/
7https://www.reddit.com/r/Gaming4Gamers/
feedback to learn how to enhance impact feel. Kieran et
al. [3] explores game developers’ understanding of game
feel and juiciness through an online survey. They propose
an empirically grounded framework for juicy design. The
framework is applied to two commercial games and has proven
helpful in analyzing game juiciness. In this paper, based on
their framework, we further the study on juicy impact feedback
design and ﬁgure out several features in action games that may
inﬂuence players’ feeling of impact.
III. METHODOLOGY
A. Overview
In this section, we conduct a quantitative analysis of play-
ers’ comments on popular action games to ﬁnd those that
perform best in providing a satisfying impact feel. First, we
select games from Steam as our data set and collect players’
comments. We manually annotate 5000 comments by their
relevance to impact feel and train a NLP model. By the
model, we obtain a list of games whose comments are highly
dependent on the performance of impact feel and rank them.
Afterward, we propose a 19-feature impact feedback design
framework and apply it to our research target games.
B. Data Collection and Ranking
The ﬁrst step is to collect comments that are related to
impact feel. Steam is one of the most popular digital game
delivery platforms. This data-driven platform can indicate
players’ preferences for games and show comments. Previous
work has proved that players’ reviews can provide developers
with useful information [12]. Therefore, we assume Steam’s
top seller list with tag “ﬁghting” can represent popular games
that highly focus gameplay on ﬁghting. To avoid inﬂuence
from the preference system, we log out of the steam account
and search under the visitor mode. Among the 9000 games on
the top seller list, only 115 games have the tag “ﬁghting”. It
includes three genres: Fighting game, Beat ’em up, and Action
role-playing game (ARPG). We remove games with less than
50 comments to ensure reliability and get 96 games.
In the English player’s community, there are several ex-
pressions for impact feel, such as “the feeling of hit” [5] and
“combat impact” [2]. It makes the training of NLP model
difﬁcult. However, there is an explicit Chinese word clearly
describing impact feel. When Chinese players try to express
how satisfying the impact feels, the terms tend to show
convergence. Despite the difference in language and culture,
players worldwide share a similar game feel. Therefore, we
choose Chinese as our target language to simplify the model
training process. Our open-source dataset 8 contains 281720
Chinese comments on the 96 games.
Naive Bayesian is usually applied to text classiﬁcation [13].
In this paper, we adapt this algorithm to classify comments
into two categories, 0 represents meaningless comments and
1 illustrates comments related to impact feel. Two researchers
are responsible for manually classifying the comments. Both of
8https://github.com/linzhonghao3/ImpactFeelCommentDB

--- [page 3] ---
them have game experience in action games for more than 500
hours, so they are qualiﬁed to distinguish whether a comment
is discussing impact feel. We randomly choose 5000 comments
from 15 of the 96 games and label them. 1000 comments are
randomly chosen as the test set, and the others (4000) are used
as the train set. We observe that only 400 of 4000 comments
in the train set are classiﬁed as category 1, which leads to
an asymmetry. To avoid the imbalance, after several tries, we
ﬁnally apply the ratio 3:1 to our train set, which is composed
of 1200 unrelated comments and 400 related comments. The
trained model achieves an accuracy rate of 88% for category
0 and 92% for category 1 in the test set.
The model is then applied to the 280K comments of the
chosen 96 games. We calculate the coefﬁcient “Impact Feel
(IF) relevance” to represent the game’s relevance with impact
feel. A higher value means more players have ever commented
on the game’s impact feel. We collect the other coefﬁcient
“Impact Feel (IF) attitude” by the positive rate of impact-
feel related comments to represent players’ attitude toward the
impact feel. Over the 96 games, there are respectively 93, 85,
44 games with the “IF relevance” larger than 5%, 10%, and
20%. We set 20% as the threshold value for “IF relevance”
to further truncate games with a weak correlation of impact
feel. Finally, we obtained 44 popular games whose comments
are highly related to impact feel. We select the top and last 8
(20%) games as our research targets to compare the difference.
C. Features of Juicy Design in Combat System
As Swink [4] said, “a juicy design can contribute to a good
game feel.” Therefore, the performance of impact feel largely
depends on the impact feedback design. Our goal is to ﬁnd
detailed features of impact feedback design that leads to the
difference in players’ attitude toward impact feel. As shown
in Table 1, by applying Kieran et al.’s juicy design framework
[3] to chosen games, we furthered the framework to detailed
technologies contributing to impact feel. For example, the
concept of Focus of Attention in juicy design is detailed as
On-Hit Effect and Camera Control.
Based on our analysis of the 16 games, we identify 19 fea-
tures currently used in impact feedback design to improve the
impact feel. This section will present each feature’s deﬁnitions,
examples, and interesting ﬁndings.
1) A. Game Characteristic: The game type of our research
targets is composed of ﬁghting games, beat ’em up and ARPG.
Based on the similar characteristic of the combat system, in
this paper we classify ARPG as ﬁghting games as well.
A1. Mechanic Do actions translate to expected feedback?
A1.1 Game Mechanic. Because of the difference in the
objective of gameplay between ﬁghting games and beat ’em
up, the impact feedback system should be designed differently.
For beat ’em up, the goal is to beat an amount of non-
player enemies [14]. The satisfaction of killing spring is a
tasty experience for players. Therefore, beat ’em up pay more
attention to after-hit effects, such as body destruction, which
builds an invincible feeling for players.
A2. Thematic Coherence Are the world and reactions to
events believable in the context of the game?
A2.1 Story Background. The story background can largely
inﬂuence the thematic coherence of the combat system, in-
cluding weapons, skills, and special effects.
A3. Gameplay Coherence Are the mechanics compatible
with each other?
A3.1 Combat System. The combat system should be well-
designed to ﬁt the coherence with its gameplay mode. For
example, players repeatedly kill enemies on the battleﬁeld
in beat ’em up. The developer should provide a variety of
attacks and a juicy combo system to reduce aesthetic fatigue
and keep stimulating players. As a counter-example, Sacred
Citadel9 receives several negative comments about how boring
the combat system is, for the minimal kind of attacks and
monsters with too many health points.
A4. Feedback Coherence Does feedback reﬂect the impor-
tance of the event?
A4.1 Impact feedback system. The impact feedback system
is responsible for providing feedback on every impact during
the ﬁghting process. The basic idea is the simulation of
physics plus exaggeration. Simulation of physics can evoke
human visceral emotions from daily life experiences, and
exaggeration ampliﬁes players’ feelings. For example, the idea
of Newton’s law is deeply seated in our minds. You can push
away a cup by applying force. The phenomena are always
simulated in games as knocking back the foes by special
attacks. The distance can be adjusted for exaggeration purpose.
2) B. Game State: The game state changes continuously
during the ﬁghting process., the offensive and defensive state
is swapping in every second.
9https://store.steampowered.com/app/207930/
Kieran’s framework factor Features on impact feedback
A. Game Characteristics
A1. Mechanic A1.1 Game Mechanic
A2. Thematic Coherence A2.1 Story Background
A3. Gameplay Coherence A3.1 Combat system
A4. Feedback Coherence A4.1 Impact Feedback System
B. Game State
B1. Exaggerate
B1.1 Attack Effect
B1.2 After-Hit Effect
B1.3 Camera Effect
B1.4 Hit Stop
B1.5 Slow Motion
B2. Focus of Attention B2.1 On-Hit Effect B2.2 Camera Control
B3. Highlighting: B3.1 Color ﬂashing
B4. Ambient Feedback B4.1 Background Breathing
C. Direct Feedback
C1. Conﬁrmatory C1.1 Animation Switching
C2. Multimodal C2.1 Weapon Sound Effect C2.2 Character Sound Effect
C3. Unambiguous: C3.1 Sound Coherence
C4A. Relevant C4A.1 Slight/Heavy Attack
C4B. Supplemental feedback C4B.1 User Interface
TABLE I: Features of juicy design in combat system

--- [page 4] ---
B1. Exaggerate Are reactions to action exaggerated to
detail state change?
B1.1 Attack Effect. Designers apply special effects in attack
animations to make hits more gorgeous and powerful, usually
by visualizing the trace of the weapon. In reality, we can ob-
serve the trail of fast-moving objects because of the persistence
of human vision. As the simulation of this phenomenon, trace
visualization is always used to exaggerate the speed of attack,
which indirectly magniﬁes the power of the hit.
B1.2 After-Hit Effect. When characters are being hit, apart
from the change of animation, some after-hit effects are
applied to the character, such as bleeding and partial body
destruction. This design vastly ampliﬁes the impact of hits by
describing how painful the foes are. In addition, some effects
will remain on the screen for several seconds, prolonging the
sense of achievement from the last kill. We ﬁnd that all of the
ﬁve beat ’em up apply after-hit effect. For example, in One
Finger Death Punch10, blood sprays from the on-hit enemy,
while in Fight’s N Rage11, the death of a monster leads to a
blast, and its bones scatter and fall to the ground.
B1.3 Camera Effect. Camera shake and post-processing
are representative examples of camera effects. Camera shake
is commonly used to communicate a signiﬁcant event like
explosion, taking damage, or high-impact actions. Previous
work has found that a carefully selected easing function in
a semantically signiﬁcant direction communicates more than
randomly moving the camera [1]. As an example, in Guilty
Gear Xrd: Revelator12, the camera slightly shakes in vertical
when the character is knocked down to the ground from the
air. When the player receives a transverse slash, the camera
moves back and forth horizontally. Post-processing technology
is always used to signify the change of game state. In The King
of Fighters XIII, the screen repeatedly ﬂashes between white
and red to mention the whole game is over.
B1.4 Hit Stop. Basically, hit stop is to freeze the animation at
the moment of impact. It is usually introduced to communicate
feedback about the severity of a hit, but it can go further than
that [1]. Hit stop can be used in a way that distinguishes the
weight and impact of a hit. For example, freeze small taps for
fast and light combos to create rhythm and freeze more frames
for a pumped attack to amplify the power [15]. In Guilty Gear
Xrd -SIGN-13, light attacks freeze the animation for 7 frames
while the heavy attacks freeze for about 10 frames. In Dragon
Ball FighterZ14, the opponent’s animation will freeze for a
whole second once the GoKu (character name) is accumulating
for his ultimate skill. This is shown in Figure 1.
B1.5 Slow Motion. Slow motion is to slow down the time
ﬂow in a short duration. It is usually employed at the ﬁnishing
attack. The slow motion makes the climactic ﬁnishing attacks
clearer to the viewer [2]. In One Finger Death Punch, slow
motion is applied to the fatality that fetches the foe’s heart.
10https://store.steampowered.com/app/264200/
11https://store.steampowered.com/app/674520/
12https://arcsystemworks.com/game/guilty-gear-xrd-revelator/
13https://arcsystemworks.com/game/guilty-gear-xrd/
14https://www.bandainamcoent.com/games/dragon-ball-ﬁghterz
(a) Frame 1
 (b) Frame 31
Fig. 1: Hit stop in Dragon Ball FighterZ
(a) Spot effect
 (b) Direction effect
Fig. 2: On-hit effect in BlazBlue Centralﬁction
B2. Focus of Attention. Does the game feature feedback
elements that draw your attention?
B2.1 On-Hit effect. The difference to after-hit effect, de-
scribed above, is that those are effects applied to communicate
the impact of your strike. While the on-hit effects are spot-
pattern effects that try to highlight the hit’s position. Besides,
on-hit effect can express more than just pointing out the impact
position. Some games will apply on-hit effect with different
patterns to distinguish the armaments used. Figure 2 shows
that the on-hit effect varies for various weapons in BlazBlue
Centralﬁction15. The spot pattern is employed for ﬁst and blunt
objects, while an extra directional effect is applied when sharp
weapons like spear and sword have slashed at the target.
B2.2 Camera Control. The control of camera is an effective
way to draw player’s attention to signiﬁcant events like ulti-
mate skills and the ﬁnishing attack. Take the scene in Figure
1 as an example; when Goku is accumulating the ultimate
skill “Spirit Bomb”, the camera gradually zooms in toward
the growing blue ball. When the bomb is ready, the camera
captures the smiling face of Goku, stays for several frames,
and then quickly zooms out to show how this powerful attack
hits the opponent. The dedicated camera control provides
a fantastic user experience that is described as “it is like
watching a movie more than playing a game”.
B3. Highlighting Are feedback elements that highlight
information in harmony with other systems?
B3.1 Color ﬂashing. Color ﬂashing is commonly used in
combat systems to highlight the change of game state. The
most pervasive method is to ﬂash the character when on hit.
B4. Ambient Feedback Is there feedback about the state
of the world that is available without explicit player input,
making the world appear natural and interactive?
B4.1 Background Breathing. Background elements are
breathing without an explicit input, such as the swaying
grasses, the falling leaves, and the ﬂowing water.
3) C. Direct Feedback: Direct feedback is signiﬁcant in
improving the impact feel. Elaborate feedback can respond
immediately to the input, making an interactive experience.
15https://arcsystemworks.com/game/blazblue-centralﬁction-special-edition/

--- [page 5] ---
(a) Frame 1
 (b) Frame 2
 (c) Frame 3
 (d) Frame 5
Fig. 3: Animation Switch in One Finger Death Punch
C1. Conﬁrmatory Does the game give a direct response to
physical input of a button?
C1.1 Animation Switching. Animation switching is the tech-
nology used to blend between two animations. Fighting games
attract players with quick tempo juicy battles, which provide
a variety of attack patterns to choose from. Therefore, how to
switch animation properly in a short period becomes a critical
problem in game development. Most games apply a smooth
lerping between predeﬁned animations and idle animation.
However, we are surprised to ﬁnd the other idea of switching
without any interpolation in One Finger Death Punch, which
won the highest favorite rate among the 44 games. The idea is
to switch the pose directly, as you can see from frame 1 and 2
in Figure 3, the character instantly changes its posture without
any transition. During the period from frame 2 to frame 5, the
animation of the character itself does not change at all, while
the movement of the attack effect indicates the direction of
this kicking and makes the action understandable.
C2. Multimodal Is feedback for one action presented on
multiple channels at once? (visual, audio) The haptic part
is not discussed in this paper since all the target games are
running on PC platform which does not originally support
haptic feedback without extra peripherals.
C2.1 Weapon Sound Effect. Sound effects are applied to
weapons to provide audio feedback to attacks. It contributes to
focusing the player’s attention by communicating information.
A juicy weapon sound effect system should distinguish sound
from different weapons, from missing and hitting, and even
from different on-hit materials. Furthermore, to avoid auditory
fatigue, some games will prepare several sound clips for a
frequently used attack and play one of them randomly.
C2.2 Character Sound Effect. During the ﬁghting process,
the roar of the attacker and the scream of the foes can heat
up the battle by amplifying audio feedback.
C3. Unambiguous Can information be connected to actions
and only interpreted in one way?
C3.1 Sound Coherence. Disharmony between vision and
sound, such as a time delay between observing visual feedback
and capturing the hit sound effect, will lead to a sense of
unnaturalness and ruins the user experience.
C4A. Relevant Is feedback given in response to game
critical events or is feedback received on minor player actions
that require no further action.
C4A.1 Slight/Heavy Attack. The feedback for light and
heavy attacks should be distinguished. For light attacks, mean-
ingful, direct feedback is suitable for communicating necessary
information to players. For feedback to heavy attacks, more
decorative elements can be applied to improve the visual effect
and reward the player.
C4B. Supplementary feedback Does the game offer subtle
additional feedback to emphasize actions already communi-
cated in other ways, or minor player actions?
C4B.1 User interface. The most correlated element in the
user interface to combat system is the health bar and damage
number. For the damage number, some games will turn the
damage number bigger and color it red when a critical hit
happens. For the health bar, the loss of health can be visualized
by the gradual reduction or direct loss.
IV. RESULT
By comparing the distribution of features on the top games
and the last games, we ﬁgure out three elements that largely
inﬂuence players’ impact feel. They can be used as one of
the evaluation methods to examine a game’s impact feel. The
results is provided in Table 2. They are respectively:
1) Hit stop. Almost all games apply hit stop in their combat
system to create rhythm and distinguish attacks except Sacred
Citadel and Draw Slasher, which rank 39th and 40th on
the list. The impact feedback is weak for the lack of hit
stop, making the attacks soft and powerless. The boundary
between missing and hitting, quick attack and heavy attack
is indistinct. Without hit stop, the impact feedback system
cannot communicate enough information for players to feel
the impact. Players describe them as dull, with less than 70%
“IF attitude”.
2) Sound coherence. The coherence of audio feedback is
a critical element in impact feedback system. It contributes to
the game atmosphere, which constitutes an important, but also
highly nuanced, potentially subjective, and subtle experience
[16]. The broken coherence, such as improper sound effects
and time delay between visual and audio feedback, can lead to
a sense of unnaturalness, which essentially ruins the immersive
experience. It is a reason for the low favorite rate of One
Punch Man: A Hero Nobody Knows. Several players complain
about the monotonous background music and minimal kinds
of sound effects. Therefore, maintaining the sound coherence
is necessary for a juicy impact feedback design.
3) Camera control. Camera control is usually used to
draw attention to signiﬁcant events such as heavy attacks and
ﬁnishing attacks. The distribution of Camera control varies in
the ﬁve beat ’em up. All of the three with high rank apply,
while none of the two with low rank apply. In these two games,
the camera just simply moves following the character. The loss
of dedicated camera control dulls the combat experience and
weakens the feeling of impact.

--- [page 6] ---
(A)Genre Rank Game Names Game Features B1 B2 B3 B4 C1 C2 C3 C4A C4B B1.1 B1.2 B1.3 B1.4 B1.5 B2.1 B2.2 B3.1 B4.1 C1.1 C2.1 C2.2 C3.1 C4A.1 C4B.1
Fighting Games
2 GUILTY GEAR Xrd: REVELATOR ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
3 BlazBlue: Centralﬁction ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
4 GUILTY GEAR Xrd -SIGN- ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
5 THE KING OF FIGHTERS XIII ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
8 DRAGON BALL FighterZ ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
37 DEAD OR ALIVE 5   ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
38 BlazBlue: Cross Tag Battle ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
41 Hunter’s arena: legends ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
42 DISSIDIA FINAL FANTASY NT ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
43 NARUTO: Ultimate Ninja STORM ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓  ✓ ✓
44 ONE PUNCH MAN ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓  ✓ ✓
Beat ’em up
1 ONE Finger Death Punch ✓ ✓ ✓ ✓ ✓ ✓ ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓
6 9 Monkeys of Shaolin ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
7 Fight’s N Rage ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
39 Sacred Citadel ✓ ✓ ✓  ✓ ✓  ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
40 Draw Slasher ✓ ✓      ✓ ✓ ✓ ✓ ✓  ✓ 
TABLE II: Distribution of the 15 features on the top 8 and last 8 games
Extra Discovery. During the analysis, we discovered an
interesting phenomenon that ﬁghting games have essentially
all the features despite their ranking while beat ’em up do not.
For beat ’em up, it is evident that games with high ranking
applies more features than those with low ranking. A possible
reason is that popular ﬁghting games are mostly developed
by well-known studios such as Arc System Works16 and Team
Ninjia17. Five of the eleven ﬁghting games are developed by
Arc System Works, so the technologies applied are similar
despite of the ranking. For beat ’em up, even small companies
may create popular games. For example, One Finger Death
Punch, the ﬁrst product of Sliver Dollar Games wins the ﬁrst
prize in players’ attitude toward its performance of impact feel.
It reveals that the bar of developing a popular ﬁghting game
is higher than beat ’em up. It’s hard for companies without
prerequisite experience to produce popular ﬁghting games.
V. CONCLUSION AND FUTURE WORK
Impact feel, a sub-genre of game feel in describing the
sense of satisfaction from receiving the impact of hits, is a
critical element in action games. However, very few researches
have been done to provide a quantitative analysis from an
academic perspective. In this paper, we conducted a data-
driven analysis on ranking popular action games with their
performance of impact feel by NLP. Based on previous work
on juicy design, we deduced a 19-feature framework of impact
feedback design. For each feature, we present the deﬁnition
and exciting applications for better understanding. Afterward,
we examine the framework on the top and last 8 games of our
ranking. Therefore, we can explore the different distribution of
features on games with excellent/awful impact feel. As a result,
we identify that hit stop, sound coherence, and camera control
play a signiﬁcant role in inﬂuencing impact feel. The lack of
even one of the three features will weaken the performance of
impact feel and make it undesirable. We hope the result can
be an evaluation metric for further study.
There are a few limitations that need to be considered in
our work. First, we only fed the data set of Chinese comments
to the NLP model. Corpus with more languages should be
16https://arcsystemworks.com/
17https://www.koeitecmoamerica.com/teams/team-ninja/
considered to improve the generality of the text classiﬁer.
In addition, the small sample of games limited our result in
ﬁnding more about the relationship between other features and
the impact feel. We hope future work can extend our work into
a larger sample that includes more action games.
REFERENCES
[1] M. Pichlmair and M. Johansen, “Designing game feel. a survey.” IEEE
Transactions on Games, pp. 1–1, 2021.
[2] J. Song, “Improving the combat ’impact’ of action games,” Apr. 2005,
https://www.gamedeveloper.com/audio/improving-the-combat-impact-
of-action-games.
[3] H. Kieran, D. Patrick, H. Jussi, and G. Kathrin, “Good game feel: An
empirically grounded framework for juicy design,” in DiGRA &#3918
- Proceedings of the 2018 DiGRA International Conference: The Game
is the Message. DiGRA, July 2018.
[4] S. Swink, Game Feel: A Game Designer’s Guide to Virtual Sensation.
Morgan Kaufmann, 2009.
[5] S.-J. Moon and H.-J. Cho, “A study on enhancing efﬁciency for feeling-
of-hit in games,” Journal of Korea Game Society, vol. 12, no. 2, pp.
3–14, Apr. 2012.
[6] P. Massoud, “The role of animation in hit effects”,” Mar. 2016,
https://www.gamedeveloper.com/programming/the-role-of-animations-
in- hit-effects.
[7] D. Daniels, “Why some games feel better than others - part
3,” Mar. 2007, http://lowﬁerce.blogspot.com/2007/03/why-some-games-
feel-better-than-others.html.
[8] J. Juul and B. Jason, “Good feedback for bad players? a preliminary
study of ‘juicy’ interface feedback,” Aug. 2016, ﬁrst joint FDG/DiGRA
Conference ; Conference date: 01-08-2016 Through 05-08-2016.
[Online]. Available: http://www.digra.org/145807/
[9] K. Hicks, K. Gerling, G. Richardson, T. Pike, O. Burman, and P. Dickin-
son, “Understanding the effects of gamiﬁcation and juiciness on players,”
in 2019 IEEE Conference on Games (CoG), 2019, pp. 1–8.
[10] L. Doucet, “Oil it or spoil it!” Aug. 2016,
https://www.gamedeveloper.com/design/oil-it-or-spoil-it-.
[11] D. Kao, “The effects of juiciness in an action rpg,” Entertkaoainment
Computing, vol. 34, p. 100359, 2020.
[12] D. Lin, C.-P. Bezemer, and A. E. Hassan, “Studying the urgent updates of
popular games on the steam platform,” Empirical Software Engineering,
vol. 22, 08 2017.
[13] H. Zhang and D. Li, “Na¨ıve bayes text classiﬁer,” in 2007 IEEE
International Conference on Granular Computing (GRC 2007), 2007,
pp. 708–708.
[14] S. Spencer, “The tao of beat-’em-ups,” Feb. 2008,
https://www.eurogamer.net/the-tao-of-beat-em-ups-article/.
[15] S. D. Works, “A.b.i.torial: What is hitstop?” May 2020,
https://www.youtube.com/watch?v=s4HKw7Hqqd0.
[16] G. Ribeiro, K. Rogers, M. Altmeyer, T. Terkildsen, and L. E. Nacke,
Game Atmosphere: Effects of Audiovisual Thematic Cohesion on Player
Experience and Psychophysiology. New York, NY, USA: Association
for Computing Machinery, 2020, p. 107–119.
