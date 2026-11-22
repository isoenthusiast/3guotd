URL: https://eprints.whiterose.ac.uk/id/eprint/139704/1/1_s2.0_S1875952118300521_main.pdf
TITLE: Player experience and deceptive expectations of difficulty adaptation in digital games (Denisova & Cairns, Entertainment Computing 2019)
RETRIEVED: 2026-11-22
METHOD: curl

--- [pdf page 1] ---
eprints@whiterose.ac.uk
https://eprints.whiterose.ac.uk
Universities of Leeds, Sheffield and York
Deposited via The University of York.
White Rose Research Online URL for this paper:
https://eprints.whiterose.ac.uk/id/eprint/139704/
Version: Accepted Version
Article:
Denisova, Alena and Cairns, Paul Antony (2019) Player Experience and Deceptive 
Expectations of Difficulty Adaptation in Digital Games. Entertainment Computing. pp. 56-
68. ISSN: 1875-9521 
https://doi.org/10.1016/j.entcom.2018.12.001
Reuse 
This article is distributed under the terms of the Creative Commons Attribution-NonCommercial-NoDerivs 
(CC BY-NC-ND) licence. This licence only allows you to download this work and share it with others as long 
as you credit the authors, but you can’t change the article in any way or use it commercially. More 
information and the full terms of the licence here: https://creativecommons.org/licenses/ 
Takedown 
If you consider content in White Rose Research Online to be in breach of UK law, please notify us by 
emailing eprints@whiterose.ac.uk including the URL of the record and the reason for the withdrawal request. 

--- [pdf page 2] ---
Accepted Manuscript
Player Experience and Deceptive Expectations of Difficulty Adaptation in Dig-
ital Games
Alena Denisova, Paul Cairns
PII: S1875-9521(18)30052-1
DOI: https://doi.org/10.1016/j.entcom.2018.12.001
Reference: ENTCOM 280
To appear in: Entertainment Computing
Received Date: 19 June 2018
Revised Date: 5 September 2018
Accepted Date: 3 December 2018
Please cite this article as: A. Denisova, P. Cairns, Player Experience and Deceptive Expectations of Difficulty
Adaptation in Digital Games, Entertainment Computing (2018), doi: https://doi.org/10.1016/j.entcom.2018.12.001
This is a PDF file of an unedited manuscript that has been accepted for publication. As a service to our customers
we are providing this early version of the manuscript. The manuscript will undergo copyediting, typesetting, and
review of the resulting proof before it is published in its final form. Please note that during the production process
errors may be discovered which could affect the content, and all legal disclaimers that apply to the journal pertain.

--- [pdf page 3] ---
  
Player Experience and Deceptive Expectations 
of Difﬁculty Adaptation in Digital Games 
Alena Denisova1 *, Paul Cairns2 
1Department of Computer Science, Swansea University, Swansea, SA2 8PP, United Kingdom, 
alena.denisova@swansea.ac.uk 
2Department of Computer Science, University of York, York, YO10 5GH, United Kingdom, paul.cairns@york.ac.uk 
Corresponding author: Alena Denisova*  
Mailing address: Department of Computer Science, Swansea University, Swansea, SA2 8PP, United Kingdom 
Tel.: +44 (0) 1792 - 513058 
E-mail: alena.s.denisova@gmail.com

--- [pdf page 4] ---
  
Player Experience and Deceptive Expectations of
Diﬃculty Adaptation in Digital Games
Abstract
Increasingly, digital games are including adaptive features that adjust the
level of diﬃculty to match the skills of individual players. The intention is to
improve and prolong the player experience by allowing the player to have the
feeling of challenge without it being overwhelming and leading to repeated
failure and frustration. Previous work has shown that player experience is
indeed improved by such adaptations but also that the player experience can
be improved also by simply claiming such an adaptation is present even when
it is not. It is therefore possible that claims about adaptations and the ac-
tual adaptations could interact and not lead to the intended outcomes for the
players or worse disappoint players. This paper reports on two studies that
were conducted to experimentally investigate the interaction between game
adaptations and player information about adaptations on the player experi-
ence, speciﬁcally their sense of immersion in the game. For this, two games
were developed using two diﬀerent kinds of adaptations to adjust diﬃculty
based on players’ performance in the game. Participants were provided with
information about game adaptations independently of whether the adapta-
tions were present. The results suggest that players felt more immersed in
the game when told that the game adapts to them, regardless of whether
the adaptation was present in the game or not. This eﬀect was observed
in both games despite their diﬀerent adaptations and it remained prominent
even during longer gaming sessions. These ﬁndings demonstrate that players’
knowledge of adaptations inﬂuences their experience independently of adap-
tations. In this particular context, the knowledge reinforced the experience
of the adaptations. This suggests that, at least in some circumstances, de-
velopers do not need to be concerned about negative eﬀects of telling players
about in-game adaptations.
Keywords: Digital games, information, adaptation, diﬃculty adjustment,
deception, immersion, player experience.
Preprint submitted to Entertainment Computing September 4, 2018

--- [pdf page 5] ---
  
1. Introduction
Experience of playing video games is multi-faceted and, undoubtedly,
diﬀers depending on the game you play: living through a year as a school boy
defeating shadows in the dungeons of Shin Megami Tensei games is rather
diﬀerent from playing Monument Valley or Counter Strike games. Whether
it is the types of challenge that the games oﬀer (Denisova et al., 2017), game
controllers players use (Cairns et al., 2014b), or even camera point of view
(Denisova and Cairns, 2015b), in-game factors can have a signiﬁcant eﬀect
on one’s gaming experience.
Player experience of challenge diﬀers not only between games, but also
within the game. It does not solely depend on the diﬃculty setting players
choose, but also the amount of experience players have and skills they bring
with them. In order to cater for diﬀerent abilities of players and varied play
styles, some contemporary video games use adaptive diﬃculty adjustment
to match the diﬃculty in the game according to the player’s performance
and behaviour. In return, this allows any player to experience and enjoy
the game regardless of their previous experience and skills. This feature is
often perceived and discussed as a positive phenomenon that improves player
experience. Balancing game challenge to the skills of players is one of the
contributing factors toward the ﬂow state (Chen, 2007) and it helps players
to become more immersed in the game (Cox et al., 2012).
Despite the evident beneﬁts of adaptive diﬃculty adjustment, it is not
always clear to what extent one’s gaming experience is shaped by the game
or by the player’s expectations about the game. Recent work (Denisova and
Cairns, 2015c) has shown that the mere expectations of adaptive behaviour in
a video game can lead to an increased immersion and heightened enjoyment,
even if the feature is not present in the game. Of course, where adaptations
are complex, it is possible that players cannot, from their own experiences,
evaluate whether the adaptations are present or not. Thus, being told about
a non-existent adaptation is not falsiﬁable and so players “go along” with it.
When the adaptation is actually present, it may be that their expectations
are not met and so the adaptation leads to a negative experience. Or it may
be that adaptation does contribute to the experience beyond simple knowing
that the adaptation is there. The question is therefore: to what extent
does the adaptive technology aﬀect player experience and is this experience
2

--- [pdf page 6] ---
  
inﬂuenced by the player’s expectations or knowledge of this feature?
To address this question we conducted two studies that demonstrate how
diﬀerent levels of information available to the players about adaptive features
in the game aﬀect player experience while playing a game with or without
this feature. In particular, we focused on the player experience of immersion
since this is one of the most common terms used to describe a feeling of
being highly involved in a digital game (Jennett et al., 2008) both by the
video game researchers and video game players.
In the studies, we also explored the durability of this eﬀect by measuring
immersion at two points of a typical casual gaming session. These studies
support the previous research that the information that players receive does
indeed inﬂuence their experience but that this eﬀect occurs in addition to the
eﬀects of adaptive technology in the game. Interestingly, there was no inter-
action between knowledge of the adaptation and whether the adaptation was
present. That is, the knowledge of an adaptation never reduced or interfered
with the beneﬁt to player experience brought about by the adaptation. This
is potentially useful to game developers to know that telling players about
adaptive diﬃculty does not interfere with player experience and that it can
actually help to enhance the experience. However, it does reinforce earlier
ﬁndings that simply telling players about adaptations, even when they are
not present, can inﬂuence the experience (Denisova and Cairns, 2015c) and
hence raise issues for playtesting and evaluation, speciﬁcally for diﬃculty
adaptation algorithms.
2. Adaptation in Digital Games
Challenge in digital games is believed to play a crucial role in shaping
player experience. Matching players’ skills to the challenge in games has been
viewed as an important requirement in order to achieve positive experiences,
such as ﬂow (Csikszentmihalyi, 1991) and immersion (Ermi and M¨ayr¨a, 2005;
Cox et al., 2012). This belief is widely shared amongst game designers and
developers (Adams, 2014; Rouse III, 2010; Sweetser and Wyeth, 2005) who
want to ensure players are satisﬁed.
Naturally, players learn and adapt to the game as they play. Some players
learn faster than others and often players tend to excel in diﬀerent aspects
of the game – each player plays and progresses in their own unique way.
Therefore, having a diﬃculty that rises as one progresses through the game
regardless of their learning curve could hinder one’s experience of the game.
3

--- [pdf page 7] ---
  
Players ﬁnd the game boring if it becomes too easy for them, and other play-
ers can get stuck while trying to advance in the game (Newheiser, 2009). So,
to account for the variation on players’ skills and abilities, various methods
and techniques exist that allow players with any level of expertise to enjoy
the game.
Typically, games have either a gradually raising diﬃculty level from the
beginning to the end (Larsen, 2010), and in some cases players can choose
from a pre-set range of diﬃculty levels. A better way to do it may be to
have an adaptive AI or, speciﬁcally, diﬃculty adaptation, where players’
behaviour in the game is analysed and then used to adjust the diﬃculty
based on threshold heuristics (Hunicke, 2005), or on machine learning models
(Drachen et al., 2009). Such adaptations have been used in several digital
games, including Fallout 3 and Half-Life 2 (Adams, 2014), in which diﬃculty
adaptation changes the number or frequency of spawning enemies, amount
of resources available to the player, the enemies’ advancement levels.
Adaptive technologies can be incorporated into digital games using var-
ious approaches (Missura, 2015). One way to adapt a game is through
the player’s character: the actions that the player takes have implications,
for example, if the character levels up, their weapons and attacks become
more powerful. Another widely used technique alters non-player charac-
ters’ (NPCs) behaviour and characteristics: depending on the players’ per-
formance in the game, the enemies’ health and strength changes, they may
become less or more aware of the characters’ presence, and even vary in terms
of items they carry on them. Finally, the game environment itself can be al-
tered when the player’s performance changes: for example, if the character
levels up, the enemies they encounter change and become more varied in their
quantities, the character might also ﬁnd speciﬁc items and locations, which
might not have been accessible beforehand. These approaches are more com-
mon for role-playing games, however diﬃculty adaptation algorithms have
also been extensively used in games like Tetris (Lora et al., 2016; Spiel et al.,
2017) and Pac-man (Hao et al., 2010), where the typical adjustments af-
fect the moving parts in the games, such as tetrominos in Tetris and ghosts
in Pac-Man. Diﬃculty adaptation has also been explored for games with
continuous gameplay, e.g. Nagle et al. (2016) describe a game in which the
player ﬁghts oﬀ zombies whose spawn rate and distance is controlled by the
algorithms.
Another way to adjust diﬃculty in a game is through time pressure,
i.e. adjusting the amount of time a player spends working towards a goal
4

--- [pdf page 8] ---
  
can be adapted to vary game diﬃculty. Time pressure is one of the key
challenge types, as identiﬁed by Adams (2014), which makes it a suitable
game attribute to be manipulated in order to adjust the perceived diﬃculty.
This adaptation was studied experimentally by Denisova and Cairns (2015a),
who modiﬁed a digital game to incorporate a simple adaptive timer, which
changed the countdown rate according to the players’ performance. The
players were unaware of the adaptation, but the group who played with the
modiﬁed timer felt more immersed overall than people who played with the
standard timer, largely due to players’ perception of challenge.
3. Perception of Adaptive Technology in Digital Games
Generally, diﬃculty adaptation is perceived as beneﬁcial to one’s gaming
experience (Chen, 2007), as it leads to a more balanced gameplay. Recent
work in the area of games user research has provided evidence that sug-
gests that adaptive features in games also have a positive eﬀect on the gam-
ing experiences in shooting games (Bateman et al., 2011; Vicencio-Moreira
et al., 2015), MOBA games (Silva et al., 2017), racing games (Cechanow-
icz et al., 2014), and casual games (Smeddinck et al., 2016): resulting in
higher levels of enjoyment and fun (Newheiser, 2009), experiences of au-
tonomy (Smeddinck et al., 2016; Klarkowski et al., 2016), and competence
(Vicencio-Moreira et al., 2015). Though the eﬀect of adaptive technologies
on more generic player experiences, such as immersion and engagement, has
not been explored to the same extent. Immersion is one of the most desired
gaming experiences nowadays, according to players and researchers (Cairns
et al., 2014a), so studying how adaptive technologies can be used to create a
sense of immersion would beneﬁt both game creators and players.
Adaptive technologies are often invisible in the game design. As the game
AI adapts to the player’s individual approach, the player feels moderately
challenged, and as a result feels increasingly immersed in the game. However,
if the players become aware of another player having an assistance from the
adaptive technology, it can be perceived as an unfair advantage by more
experienced players, like in the case of Mario Kart (Newheiser, 2009). It is
particularly evident in a situation when the player does not need to improve
on their skills to improve their performance, because it is done for them.
Similarly, scaling the level of diﬃculty in the game based on one’s progress
can deprive the player of their sense of achievement (Bostan and ¨O˘g¨ut, 2009).
5

--- [pdf page 9] ---
  
Unlike the multiplayer games, where, in most cases, players compete with
other human opponents, single-player games oﬀer a diﬀerent kind of compet-
itive play. As the player works their way toward a goal, they are mostly
in the race with themselves and the game AI. Therefore, in such settings,
adaptive technology has a potential to assist players with varied experience
levels in making progress through the game in an enjoyable manner.
However, despite the obvious beneﬁts of this technique, there is little
empirical evidence to support the idea that adaptive technologies in games
have an eﬀect on player experience (Karpinskyj et al., 2014). Research into
the eﬀect of game balancing in multiplayer games on player experience has
become more prominent in recent years, identifying the perception of un-
fairness as one of the main issues when it comes to the implementation of
such features in games that are played by several players at once (Hunicke,
2005). Single-player games could beneﬁt from having such systems: they
can prevent players from getting stuck and allow anyone with any level of
skill and previous experience to enjoy the game equally. Unfortunately, lit-
tle research has been done to explore players’ perceptions of these features.
Gathering more empirical data could help game user researchers understand
this phenomenon in more detail and learn about how player experience is af-
fected when playing with such features while being aware of them and when
adaptation is hidden away.
4. Immersion and Player Expectations
Our experience of a game does not solely come from the game conven-
tions alone, players’ perception of the game environment also aﬀects their
immersion (McMahan, 2003). Meeting players’ expectations of a game world
is rather important in order to achieve immersion. While creating false ex-
pectations could work short-term, it would ruin players’ impression of the
game after they realise it does not conform to the expectations set originally.
As many games rely on their players’ continuous engagement with the game,
it is important to explore how players’ expectations of game features aﬀects
their experiences of the game. Players build these expectations based on a
variety of factors: their previous experiences, their individual characteristics
(Bartle, 1996; Park et al., 2011), and the information available to the players
about the game. These, in turn, aﬀect players’ experience and perception of
the game.
6

--- [pdf page 10] ---
  
The idea that players themselves have an eﬀect on their game play is
not novel, and some recent evidence suggests that players’ interpretation
of a game can change their experience signiﬁcantly. Reading game reviews
(Livingston et al., 2011) and referring to the ratings from external sources
(Jenkins et al., 2010) aﬀect the enjoyment of the game. Many players form an
opinion about the game even before playing it, and this opinion may change
their ﬁrst encounter with the game.
Immersion is an experience that many players seek in digital games. The
general experience of being immersed in a digital world is dependent on the
player, as much as it is on the game. Their perception and interpretation
of the game can play an important role when shaping their experience. Ac-
cording to Jennett et al. (2008), immersion is comprised of ﬁve components:
cognitive and emotional involvement, real world dissociation, perceived chal-
lenge and control in the game. Unlike many other gaming experience theories,
which mainly focus on the game factors inﬂuencing players’ experience, this
theory also takes the player into account as a factor, which aﬀects immersion.
The ﬁrst three components are based on the individual diﬀerences between
players, while the other two factors are related to the game itself. The re-
searchers also created the Immersive Experience Questionnaire (IEQ), which
allows to measure an overall immersion level of a player in a digital game.
It is evident that understanding how players form their expectations of
a digital game is rather important not only for game experience researchers,
who wish to contribute to the theoretical ﬁeld of player experience, but also
to the game manufacturers, who are interested in attracting players to their
games, keeping them continuously engaged, and then delivering the experi-
ences that the players were seeking. Expectations of adaptive AI has recently
been studied by Denisova and Cairns (2015a), who explored the idea of ‘the
placebo eﬀect’ that occurs as a result of deceptive perception of adaptivity
in a game. It appears that having a feature in a digital game is not always
a concrete requirement for causing high immersion. Interestingly, players at-
tributed any changes in the game play to being monitored by the AI, and felt
like their experience of playing with it greatly improved their performance
and enjoyment during play.
The studies described in Denisova and Cairns (2015a), however, were con-
ducted using a game that did not adapt to the player in order to investigate
whether the placebo eﬀect exists. Players in these studies may have been
looking for evidence of adaptation but, of course, there was no such evidence
to be found. It may be that the engagement required to seek out evidence
7

--- [pdf page 11] ---
  
was what caused the increased immersion. It may also be that players sim-
ply took the adaptation on trust and the idea that the game may be more
balanced towards them was suﬃcient to increase immersion. Care was delib-
erately taken to avoid giving the players details of the adaptation in order to
avoid any form of conﬁrmation bias. It is possible that if the players knew
the exact detail of how the AI adapts its behaviour according to the play-
ers’ decisions in the game, it could reduce the sense of immersion instead,
as players might doubt the fairness of such adaptation or its usefulness to
their game play. Knowing that a game is adapting its behaviour based on
your choices could also make people change their tactics, and it is possible
that the players might explore the game world in a diﬀerent way than when
someone is playing the game just as it unfolds to them. All of these interac-
tions between adaptation and knowing that there is an adaptation may also
depend on what players have been told about how the adaptation works.
Overall then, there are many ways in which knowledge of an adaptation
could interact with the player experience, speciﬁcally immersion, both when
it is absent and when it is present. Therefore, to investigate how players’ ex-
pectations of adaptive technology in games aﬀects immersion, we conducted
two studies. The main aim was to explore how the accuracy and the precision
of information players know about adaptivity in the game aﬀects their expe-
riences and behaviours when playing the game with or without the feature
present in the game.
5. Hypotheses
Based on the review of the relevant literature, we generated some hy-
potheses with regards to the eﬀects of adaptation and information about
adaptation on player immersion. The ﬁrst two hypotheses were based on the
work of Denisova and Cairns (2015a,c) (H1,H2 respectively).
• H1: Playing an adaptive digital game leads to higher immersion than
playing the same game without diﬃculty adaptation.
• H2: Players who believe that the game has an adaptive feature feel
more immersed than the players who are not aware of the feature when
the feature is absent.
• H3: The more players know about the adaptation, the less immersed
they will be when the adaptation is present.
8

--- [pdf page 12] ---
  
• H4: The eﬀect of information about adaptation on immersion becomes
weaker with game play time.
6. Study I: Information Precision and Accuracy
The aim of the ﬁrst study was to investigate how immersion is aﬀected by
the presence of adaptation and players’ expectations of adaptation based on
varied levels of information precision (the ﬁrst three hypotheses). We used a
mixed-method approach to gain further insight into how players’ perceptions
of the adaptation and the game are aﬀected by their expectations of adaptive
game behaviour. For this, we recruited 120 participants who were split into
six groups based on two conditions: the presence of the adaptive timer or a
standard timer, and the information about the timer (no information, partial
information, or full information).
6.1. Method
A 2 x 3 factorial between-subject design study was conducted in order to
gather information about players’ immersion levels and their performance in
a time-constrained gaming session, during which players were asked to play
a modiﬁed game, Nightmares 1.
Overall, players were split into six independent groups based on the ex-
perimental condition. Half of the participants had their timer adjusted based
on their performance in the game (‘adaptive timer’ condition), while the
other half played with a standard timer displaying the amount of time left un-
til the end of the session (‘standard timer’ condition). One third of each of
these groups were not aware of the timer adaptation (‘no info’ condition),
another third of the players were told that timer adjusted based on their
performance but were not told what exactly this adaptation did (‘partial
info’ condition), and the rest of the players were told how the adaptation
changed their gameplay based on their performance in the game (‘full info’
condition).
6.1.1. Participants
Overall, 120 participants (38 women) took part in the study. Recruited
participants had varied levels of gaming experience, from casual players to
1‘Nightmares – a Survival Shooter’: https://unity3d.com/learn/tutorials/
projects/survival-shooter-tutorial, accessed on 29 May, 2018.
9

--- [pdf page 13] ---
  
Figure 1: Nightmares: an isometric-view shooting game.
dedicated gamers. The average age of the participants was 24.15 (SD =
4.79), mix/max = 18/50.
6.1.2. Materials
The game used in this experiment was Nightmares (Figure 1), which was
modiﬁed to have an adaptive timer, as described in Denisova and Cairns
(2015a). The general idea was that the player controls a little boy in a
nightgown, who is dreaming of his toys becoming zombies and attacking
him. The player has to avoid being hit by the zombie bunnies, bears, and
elephants while trying to shoot them. Diﬀerent enemies are worth diﬀerent
number of points, and spawn at a diﬀerent rate through the game. Similarly,
players lose points depending on the zombie toy attacking them.
The score and the time left until the end of the gaming session were visible
to the player at all times. The timer had two options. In the ‘standard’
option it counted down at a rate of one second at a time, for 90 seconds.
In the ‘adaptive’ version of the timer, the time sped up or slowed down
based on player’s performance at discrete points in the game. Each player’s
performance was evaluated dynamically against the mean score at diﬀerent
10

--- [pdf page 14] ---
  
points in the game. Depending on the player’s performance, the countdown
rate changed to one of the three possible modes (speed up, slow down, or
remain unchanged). The time passage changes were not perceptible.
The player experience data was collected using the Immersive Experi-
ence Questionnaire (IEQ) (Jennett et al., 2008). Additionally, players who
were told about adaptation, either partially or fully, were given an additional
questionnaire at the end of the experiment, asking if they noticed the time
change, how they thought the timer changed, whether it aﬀected their per-
formance in some way, and whether they thought that knowing about the
adaptation changed their experience in any way. This qualitative information
was primarily used to make sense of the quantitative data.
6.1.3. Procedure
At the beginning of each session, participants signed the informed consent
form. The experiment started with a practice round of the game. Partic-
ipants then ﬁlled out a demographics questionnaire, providing information
about their gaming background and their perceived expertise level in this
game, rated from 1 (novice) to 5 (expert). This was then followed by the
main part of the study, during which participants played the game for 1.5
minutes (in the standard condition) or what appeared to be 1.5 minutes (in
the adaptive condition). The aim was to get the highest score they could
within the time limit. At the end of the gaming session their score was
recorded. Participants then ﬁlled in the IEQ, and the additional question-
naire, if applicable.
A two-way ANOVA was performed to test for the main and interaction
eﬀects of the manipulations. Tukey post-hoc test was used for multiple com-
parisons at a signiﬁcance level of α = 0.05.
6.2. Results: Adaptation and Information
This section presents the results of how immersion of players and their
in-game scores were inﬂuenced by the experimental manipulations. Play-
ers’ perceived levels of expertise were also used to determine whether any
additional factors outside the controlled manipulations were aﬀecting their
immersion.
6.2.1. The Inﬂuence on Immersion
With regards to the timer adaptation, the diﬀerence between immersion
scores in the ‘standard timer’ condition and the ‘adaptive timer’ condition
11

--- [pdf page 15] ---
  
was highly signiﬁcant: F (1, 114) = 22.37, p <0.001, with a medium eﬀect
size – η2 p = 0.164, supporting H1.
Information about Adaptive Timer
FullPartialNone
Total Immers ion
1 5 5
1 2 4
9 3
6 2
3 1
2
8 4
Standard
Adaptive
T i m e r
Figure 2: Immersion based on adaptivity and information precision.
Participants with time altered during their game play felt signiﬁcantly
more involved cognitively and emotionally with the game, and were signiﬁ-
cantly less aware of their surroundings, and felt more in control while play-
ing the game. However, there was no signiﬁcant diﬀerence between the two
groups in terms of their perception of challenge in the game (Table 1).
The eﬀect of information about adaptation on the level of immersion
in the game was also signiﬁcant: F (2, 114) = 5.08, p = 0.008, η2 p = 0.082.
Tukey’s HSD showed no signiﬁcant diﬀerence between immersion of player
who did not know about the adaptation and immersion of those with partial
knowledge of adaptation (p = 0.093) or between the groups with partial and
full knowledge of the manipulation (p = 0.745). However, players who re-
ceived a full description of the adaptive timer felt signiﬁcantly more immersed
12

--- [pdf page 16] ---
  
in the gaming session than players without this knowledge (p = 0.015). This
means that H3 is rejected and H2 is supported, based on the collected data.
Out of all ﬁve components, three diﬀered signiﬁcantly between the three
groups of players: cognitive involvement, real world dissociation, and control
(Table 1).
Components Eﬀect of Adaptation Eﬀect of Information Interaction Eﬀect F1,114 p η2 p F2,114 p η2 p F2,114 p η2 p
Total Immersion 22.37 0.000*** 0.164 5.08 0.008** 0.082 0.13 0.879 0.002
Cognitive Involvement 15.64 0.000*** 0.121 5.38 0.006** 0.086 0.87 0.420 0.015
Emotional Involvement 11.68 0.001*** 0.093 0.66 0.520 0.011 0.35 0.706 0.006
Real World Dissociation 7.08 0.009** 0.058 3.89 0.023* 0.064 0.63 0.533 0.011
Challenge 1.22 0.273 0.011 0.03 0.971 0.001 0.65 0.523 0.011
Control 9.36 0.003** 0.076 3.14 0.047* 0.052 0.31 0.734 0.005
Table 1: Interaction and main eﬀects of timer adaptation and information about it on
immersion. ∗p<0.05, ∗∗p<0.01, ∗∗∗p<0.001
The interaction eﬀect of the adaptive timer and the information provided
to the players about it on immersion was not signiﬁcant: F (2, 114) = 0.13,
p = 0.879, η2 p = 0.002. Similarly, there was no signiﬁcant interaction eﬀect
of information and adaptation on immersion and its ﬁve components.
6.2.2. The Inﬂuence on Scores
As expected, the scores were higher and varied less in the group of players
who had the timer adapting to their game play. The scores of players in the
‘standard timer’ condition varied between 103 points and 490 points (Ms
= 345.57, SD = 103.55), while players in the ‘adaptive timer’ group got
between 169 and 647 points (Ma = 406.18, SD = 90.78). The diﬀerence
between scores in these two groups of participants was highly signiﬁcant:
F (1, 114) = 11.63, p = 0.001, η2 p = 0.090.
The information provided to the players also had an eﬀect on players’
scores. On average, players, who were not informed about the adaptive
timer, scored Mnone = 335.63 (SD = 109.58), while players with only partial
knowledge about the timer scored Mpart = 407.85 (SD = 80.05). Players,
who were fully briefed about the adaptation, scored an average of Mf ull =
384.15 points (SD = 101.57). The diﬀerence between the scores obtained
in all three groups of players was highly signiﬁcant: F (2, 114) = 5.66, p =
0.004, η2 p = 0.08.
Interestingly, the pairwise Tukey test showed that the players who were
not aware of the adaptive timer, regardless of its presence in the game, scored
13

--- [pdf page 17] ---
  
I n f o r m a t i o n a b o u t A d a p t i v e T i m e r
FullPartialNone
Total Score
7 0 0
6 5 0
6 0 0
5 5 0
5 0 0
4 5 0
4 0 0
3 5 0
3 0 0
2 5 0
2 0 0
1 5 0
1 0 0
3 5
3 2
1 1 4
1 1 3
1 0 6
Standard
Adaptive
T i m e r
Figure 3: The inﬂuence of adaptation and information on in-game scores.
signiﬁcantly less than the players who only received partial information (p
= 0.003). However, the scores were not signiﬁcantly diﬀerent from those
participants who received the full description of the adaptation (p = 0.069).
Similarly, the scores of the players who were aware of the adaptation and the
group given the full detail about its functionality did not diﬀer signiﬁcantly
either (p = 0.787).
There was no signiﬁcant interaction eﬀect of adaptation and information
about it on players’ scores: F (2, 114) = 0.05, p = 0.947, η2 p = 0.001.
6.2.3. Perceived Expertise
The players rated their expertise with this particular game after the prac-
tice session on a scale from 1 to 5, based on how competent they felt using
the controls and their understanding of the gameplay, where 1 being ‘Novice’
and 5 – ‘Expert’. Players’ perceived levels of expertise had an eﬀect on their
immersion level, which was highly signiﬁcant: F (4, 115) = 5.66, p< 0.001, η2 p
= 0.165. Generally, players who estimated themselves as more proﬁcient at
14

--- [pdf page 18] ---
  
playing the game, were more immersed than those players who thought they
were not as good at shooting zombie toys.
Perceived Expertise
54321
Tota l Im m e r s i on
1 5 5
1 2 4
9 3
6 2
3 1
4 8
2
Standard
Adaptive
T i m e r
Figure 4: Immersion based on players’ perceived level of expertise and the presence of
adaptation.
Components F4,115 p η2 p
Total Immersion 5.66 0.000*** 0.165
Cognitive Involvement 4.60 0.002** 0.138
Emotional Involvement 2.99 0.022* 0.094
Real World Dissociation 3.83 0.006** 0.118
Challenge 1.27 0.288 0.042
Control 7.57 0.000*** 0.208
Table 2: Mean (SD), and the eﬀect of players’ perceived level of expertise in the game on
immersion and its components. ∗p<0.05, ∗∗p<0.01, ∗∗∗p<0.001
15

--- [pdf page 19] ---
  
There was no signiﬁcant interaction eﬀect between perceived level of ex-
pertise and adaptation on players’ immersion: F (4, 110) = 1.76, p = 0.143,
η2 p = 0.060. Similarly, there was no signiﬁcant interaction eﬀect between
perceived expertise and the information about adaptive timer on immersion:
F (7, 106) = 1.38, p = 0.223, η2 p = 0.083.
Four out of ﬁve immersion components diﬀered signiﬁcantly between the
ﬁve groups of players: cognitive involvement – F (4, 115) = 4.60, p = 0.002,
η2 p = 0.138; emotional involvement – F (4, 115) = 2.99, p = 0.022, η2 p = 0.094;
real world dissociation – F (4, 115) = 3.83, p = 0.006, η2 p = 0.118 and control
– F (4, 115) = 7.57, p< 0.001, η2 p = 0.208 (Table 2).
As expected, players’ perception of challenge in the game was inversely
proportionate to their perceived level of expertise. Player with ‘novice’ rat-
ings felt more challenged by the game than the ‘expert’ players. However,
the diﬀerence between the challenge scores was not signiﬁcant: F (4, 115) =
1.27, p = 0.288, η2 p = 0.042.
A similar pattern emerged in the in-game scores of participants based on
their perceived level of expertise. Based on players’ perceived expertise, the
scores obtained in these ﬁve groups diﬀered signiﬁcantly: F (4, 115) = 6.94,
p< 0.001, η2 p = 0.194. There was no signiﬁcant interaction eﬀect between
perceived level of expertise and adaptation on the scores players obtained in
the game: F (4, 110) = 0.33, p = 0.857, η2 p = 0.012. Similarly, there was no
signiﬁcant interaction eﬀect between perceived expertise and the information
about adaptive timer on immersion: F (7, 106) = 1.30, p = 0.259, η2 p = .0079.
6.3. Discussion
Overall, the results demonstrate that the expectation of adaptive tech-
nology in the game aﬀects player immersion regardless of whether the game
contains this feature or not, supporting H2. The results found in this study
replicate the ﬁndings in Denisova and Cairns (2015c), who demonstrated that
those players who engaged with a game without an adaptive AI were more
immersed when believing that the game is changing based on their perfor-
mance than the players who were not aware of such ‘adaptation’ or when
they believed it was not present.
In Denisova and Cairns (2015c), players were not provided the full detail
about what adaptive AI did in order to avoid conﬁrmation bias. However, it
was evident that players who were not familiar with the concept were more
likely to feel more immersed in the game than those players who were not
motivated by the novelty. Therefore, an assumption was made that if the
16

--- [pdf page 20] ---
  
Perceived Expertise
54321
Total Score
6 5 0
6 0 0
5 5 0
5 0 0
4 5 0
4 0 0
3 5 0
3 0 0
2 5 0
2 0 0
1 5 0
1 0 0
5 0
5 7
4 4
2 4
3 6 5 0
1 1 4
8 0
1 1 3
Standard
Adaptive
T i m e r
Figure 5: The game scores based on players’ perceived level of expertise and the presence
of adaptation.
players knew the full details about mechanics behind the adaptation, they
might feel less immersed. This could be either due to the perceived fairness
of the feature or simply because having more comprehensive understand-
ing of the mechanics may decrease the novelty eﬀect or pro-innovation bias.
Similarly, players who are only aware of the presence of this potentially ben-
eﬁcial feature would have more room for interpretation, and would generally
perceive it more positively due to this, which was the basis for H3.
The data obtained in this study shows that this was not the case: players
felt more immersed when knowing about what adaptive timer did than the
other participants who were either unaware of this feature or were just simply
told that the game had an adaptive timer without the explanation of what
it did, which contradicts H3. Participants’ comments collected at the end
17

--- [pdf page 21] ---
  
of the experiment shed some light onto this: in some cases, players evidently
used the information about the adaptation to their advantage, i.e. some
of them tried to incorporate the feature into their gameplay by trying to
extend the time and beat as many zombie toys as possible. This is also
reﬂected in the scores of the players: participants who were aware of the
timer adaptation scored signiﬁcantly higher than the players who were not
told about it. Similarly, although not many players did so, some of them
kept the track of the timer by looking at it, which they would not necessarily
do otherwise, according to their responses. It is possible that the increase in
their cognitive involvement was due to their increased focus on the timer.
Alternatively, players who knew that the adaptive timer was present in
the game without the detailed explanation of its functionality believed it
was somewhat beneﬁcial for their experience. However, without knowing
precisely what the timer was doing, players concentrated more on the main
gameplay rather than the timer. The realisation that it was continuously
adjusting the challenge in the game was something that players were aware
of, but did not actively think about during their game play.
An additional goal of the study was to explore the eﬀect of the presence
of the adaptive timer on immersion of players. The adaptive timer was found
to be beneﬁcial to player experience, as seen in Denisova and Cairns (2015a),
and the ﬁndings in this study also conﬁrmed this hypothesis (H1). Overall,
players felt more immersed when the timer was changing its countdown rate
based on their performance in the game regardless of whether the players
knew about it or not.
These ﬁndings support the idea of adaptive features having a positive
eﬀect on gaming experience: an adaptive timer that matched the challenge
in the game to the players’ skills. The weaker players were provided with
extra time to catch up due to the implemented adaptation. Thus, the players
who knew about this assistance perceived this feature as fair. On the other
hand, players who were more experienced could aim for higher scores without
the help from the game. With the implemented adaptation, players felt
moderately challenged, however they were not able to score much higher
than the players with lesser expertise. Interestingly though, contrary to the
ﬁndings from (Gerling et al., 2014; Cechanowicz et al., 2014) the stronger
players did not perceive this feature as limiting. This can be attributed
to the fact that, although players were competing against the clock, there
were no other players to compare their performance against, as this was a
18

--- [pdf page 22] ---
  
single-player game. Therefore, as seen in the comments of the participants,
players felt they enjoyed themselves while playing the game, and more time
pressure did not have a negative eﬀect on their gaming experience. The
implementation of the adaptation was aimed to increase challenge and not
to deprive players from opportunity to obtain high scores. That explains
why the stronger players did not feel disadvantaged by the adaptation.
The implemented timer adaptation provided an eﬀective balance between
the in-game challenge and the skills of the players, which is supported by
the results of the challenge component of immersion and the players’ esti-
mated expertise level. The perceived challenge did not diﬀer signiﬁcantly
between players with diﬀerent expertise levels, which was also observed in
the comments collected at the end of the study that suggest that players felt
moderately challenged.
Interestingly though, the players did not experience challenge diﬀerently
when playing with the adaptive timer or when having the standard count-
down. This can be attributed to the fact that players did not pay direct
attention to the timer, as it was not an element of the primary gameplay.
Players mostly experienced the challenge in the game through the mechanics
of shooting zombie toys and avoiding getting hit at the same time, while the
time pressure could have indirectly aﬀected their perception of challenge.
The presence of the adaptive timer had an eﬀect on the players’ scores:
those players who experienced the adaptation achieved higher scores than the
players who engaged with the game in the standard condition. The analysis,
however, demonstrated that despite the adaptation having an eﬀect on both
the in-game scores and the immersion levels, immersion in the game was not
directly dependent on the in-game scores.
Interestingly, there was no interaction eﬀect of the timer condition and
what players knew about it on their immersion in the game. As the amount of
detail players received about the adaptation increased, so did the immersion
level of players. However, whether the adaptive timer was present or not did
not aﬀect this. The presence of adaptation increased immersion regardless of
the information precision, yet the eﬀect of information was not linked to the
eﬀect of adaptation. Players felt more immersed when knowing about the
adaptation than the players who were not aware of it regardless of whether it
was present in the game or not and regardless of the precision of information
given to them prior to their engagement with the game.
This study, however, has several limitations. The used adaptation was
19

--- [pdf page 23] ---
  
not a part of the main game mechanics, which could have lead to many
players not noticing it. More conventional adaptations change the number of
enemies in the game, their strength and abilities, or the number and values
of collectible objects. This means that the players’ interaction with the game
has a direct eﬀect on the adaptation and can be more obvious to the naked
eye, which could impact player experience.
Moreover, as the gameplay was somewhat repetitive and the sessions were
short, it is possible that the players’ positive perception of the adaptation
could change with longer play, as the players’ interest in the game would
decrease with time. Therefore, longer gaming sessions should be used to
evaluate whether the eﬀect of players’ perception of the adaptation is durable.
Furthermore, as players make progress in the game, their attitude toward the
adaptation might change. The initial boost they experience from knowing
that that game has adaptive technology might wear oﬀ, and the eﬀect of the
actual adaptation would take over their experience. Finally, as they play for
longer, this kind of assistance might become more useful longer term with
diﬃculty of the game rising with players’ progress.
Therefore, the eﬀect of players’ perception of adaptive technologies in
games on their immersion should be explored in more detail using a diﬀerent
game with a diﬀerent, more conventional adaptation, with which players can
engage for longer periods of time while still remaining within the time period
of casual engagement.
7. Study II: Durability of Information
In order to replicate and extend the ﬁndings from the previous study,
we conducted another experiment in which we used a diﬀerent game with
a diﬀerent, more conventional, kind of adaptation to examine the durability
of the eﬀect of information on immersion. This time, players were engaged
with the game for a longer period of time and their immersion was recorded
twice after each gaming session.
7.1. Method
A (2 x 2) x 2 mixed-measures design study was conducted to test the
hypotheses H1, H2, H4. The experiment was designed around four condi-
tions, addressing two independent variables: the presence of the implemented
diﬃculty adaptation (adaptive condition and standard condition), and
20

--- [pdf page 24] ---
  
the information players receive about the adaptation (some (information)
or no information about the concept of adaptation (no information)).
Immersion in the game was assessed at two measurement points dur-
ing each participant’s gaming session using the IEQ. Additionally, players’
performance in the game was recorded, including the number of completed
levels within the time limit and the number of deaths on each level. More-
over, discrete changes in diﬃculty between levels were also recorded for each
player.
7.1.1. Participants
Overall, 60 participants took part in the study (19 women). The mean age
of the players was 25.60 (SD = 6.61), ranging from 18 to 50 years. Majority
of the participants were frequent game players and, on average, they had
played digital games for just over 15 years, generally between 3 and 35 years.
7.1.2. Materials
Based on this data and set up used in the previous studies and a pilot
study, it was decided that the game for this experiment should provide sus-
tainable engagement for at least 20 minutes. Additionally, this was a suitable
opportunity to explore the eﬀect in a diﬀerent game with a diﬀerent kind of
adaptation. Some of the most widely used adaptive technologies in games
nowadays adjust parameters, such as the speed, power, and health of ene-
mies, their number and frequency of spawning, and the power of the player
(Adams, 2014). Hence, to follow the conventions of the existing diﬃculty
balancing techniques, a level-based game was developed, in which the diﬃ-
culty of each level is adjusted based on the performance of the player in the
previous levels.
A digital game chosen for this study was ‘Trick or Treat’ (Figure 6), a
halloween-themed game, developed speciﬁcally for the study using Unity 5.2.
In the game, a player controls a little girl, who collects candy scattered around
the game world and stolen by monsters in a time-contained environment.
The game has ﬁve levels, where each level increases in diﬃculty based on
the number of sweets required to collect and the speed, health, and attack
strength of monsters. To make the game more challenging, the character
has a limited amount of health on each level: if she gets hit by the enemies,
she loses some health. When her health reaches 0, she dies, triggering the
restart of the same level. There are no items available at any point to restore
21

--- [pdf page 25] ---
  
the health, so the player has to keep the character alive in order to make
progress.
Figure 6: Trick or Treat: a Halloween-themed shooting game.
The diﬃculty of the game increases with each level, which is calculated
based on the number of enemies, their health and attack strength. These pa-
rameters are ﬁxed, however the enemies’ radius of player detection, player’s
health and attack strength are varied based on the diﬃculty adaptation im-
plemented in this game. Unlike the adaptive timer in the previous study, this
more conventional kind of diﬃculty adjustment is often used in contemporary
games. The number of sweets collected on each level is used to adapt the
diﬃculty for the following level. For example, if the player collects most of
the candy available on the level, the diﬃculty mode increases to ‘hard’, while
collecting the minimum of candy needed to level up decreases the diﬃculty
to ‘easy’. Otherwise, the diﬃculty remains at a ‘normal’ level. Additionally,
each restart of the level would decrease the diﬃculty of the level by one, i.e.
the ‘easy’ level would be given to a player who died while playing at the
‘normal’ diﬃculty, and the ‘hard’ diﬃculty mode would become ‘normal’.
Level-based design was chosen for several reasons. Firstly, progressing
from a level to another provides players with a sense of moving forward. If
22

--- [pdf page 26] ---
  
a player fails to keep the character alive, not all progress is lost. This allows
for the diﬃculty adaptation algorithm to adjust diﬃculty at speciﬁc points
in the game, which could not be necessarily possible if the game was open-
world, in which the player continuously ﬁghts oﬀ the monsters and collects
candy, like they did in the ‘Nightmares’ game. Moreover, having diﬀerent
levels allows to vary the content of the game, which should potentially keep
players interested in exploring the game further for longer periods of time.
The reasons for choosing a game speciﬁcally built for this experiment
over a commercial one were as follows. Having a non-commercial digital
game meant that players would not be familiar with it, and all players would
have the same initial response. Secondly, being able to modify the game
provides a greater control over its static and varied parameters, which can
be adjusted based on the diﬃculty of each level, as well as depending on the
diﬃculty set by the diﬃculty adaptation. And ﬁnally, having a level-based
game meant that players’ engagement with the game could last longer due
to its less repetitive nature.
The data about players’ perceived level of immersion was collected using
the IEQ. Participants also answered some questions about their experience of
the diﬃculty adaptation implemented in the game at the end of the session,
if they were in the condition in which information was presented to them
about it at the beginning of the session. This qualitative information is not
reported in full in this paper, however relevant results are discussed below.
7.1.3. Procedure
Participants were provided with a consent form, followed by a demo-
graphics questionnaire about their personal details and gaming habits. This
was then followed a more detailed description of the study procedure. After
that, participants played a short introductory tutorial to the game to famil-
iarise themselves with the controls. This was followed by the main part of
the study, which consisted of two 10-minute gaming sessions. Participants
were stopped by the experiment facilitator after 10 minutes to ﬁll in the ﬁrst
IEQ, after which they continued playing the game from the point where they
paused the game at. Participants then ﬁlled in another IEQ after the second
part of the game. Those players who were explicitly told about the adapta-
tion at the start of the experiment ﬁlled in an additional questionnaire about
their experience of the diﬃculty adaptation.
23

--- [pdf page 27] ---
  
7.2. Results
Overall, participants became signiﬁcantly more immersed in the game
after playing the game for longer, i.e. the diﬀerence between immersion
scores collected after the ﬁrst 10-minute session and after the second round
lasting 10-minute was highly signiﬁcant: F (1, 58) = 24.54, p< 0.001, η2 p =
0.305.
There was a signiﬁcant eﬀect of information about the diﬃculty adapta-
tion on immersion for both sessions: F (1, 56) = 9.46, p = 0.003, η2 p = 0.146;
and the presence of the diﬃculty adaptation also had a signiﬁcant eﬀect on
immersion: F (1, 56) = 10.66, p = 0.002, η2 p = 0.160. However, the interaction
eﬀect of the diﬃculty adaptation and the information about it on immersion
was not signiﬁcant: F (1, 56) = 1.81, p = 0.180, η2 p = 0.031, as also observed
in the previous studies.
The interaction eﬀect of the information players received about diﬃ-
culty adaptation in the game and the game play session was not signiﬁcant:
F (1, 58) = 1.69, p = 0.199, η2 p = 0.029. Neither was the interaction eﬀect
of the adaptation and the game play duration: F (1, 58) = 0.96, p = 0.332,
η2 p = 0.017. The interaction eﬀect of the two independent variables and the
game play duration on immersion was not signiﬁcant: F (1, 56) = 1.08, p =
0.304, η2 p = 0.019.
All but one immersion components (real world dissociation) diﬀered sig-
niﬁcantly between the two gaming sessions. Cognitive involvement: F (1, 58)
= 12.36, p = 0.001, η2 p = 0.173, emotional involvement: F (1, 58) = 19.42, p<
0.001, η2 p = 0.257, real world dissociation: F (1, 58) = 3.20, p = 0.079, η2 p =
0.054, challenge: F (1, 58) = 14.58, p< 0.001, η2 p = 0.207, control: F (1, 58)
= 24.35, p< 0.001, η2 p = 0.303.
Components Eﬀect of Information Eﬀect of Adaptation Interaction Eﬀect F1,56 p η2 p F1,56 p η2 p F1,56 p η2 p
Total Immersion 9.46 0.003** 0.145 10.66 0.002** 0.160 1.81 0.184 0.031
Cognitive Involvement 3.17 0.008** 0.054 6.67 0.012* 0.106 0.01 0.917 0.000
Emotional Involvement 6.66 0.012* 0.106 8.44 0.005** 0.131 0.81 0.372 0.014
Real World Dissociation 6.27 0.015* 0.101 5.68 0.021* 0.092 4.76 0.033* 0.078
Challenge 3.91 0.053 0.065 5.94 0.018* 0.096 3.91 0.053 0.065
Control 6.71 0.012* 0.107 2.79 0.100 0.047 0.72 0.400 0.013
Table 3: Interaction and main eﬀects of diﬃculty adaptation and information about it on
immersion. ∗∗p<0.01, ∗p<0.05
Overall, the component-wise analysis of immersion revealed similar ﬁnd-
ings to the ones observed in the previous study: the information about the
24

--- [pdf page 28] ---
  
InformationNo Information
Total Immersion (Session 1)
155.0
124.0
93.0
62.0
31.0
1 2
5 7
On
Off
D i f f i c u l t y
Balancing
(a) Immersion during the ﬁrst 10-minute
gaming session.
InformationNo information
Total Immersion (Session 2)
155.0
124.0
93.0
62.0
31.0
3 0
2 8
1 4
1 2
On
Off
D i f f i c u l t y
Balancing
(b) Immersion during the second 10-
minute gaming session.
Figure 7
adaptive technology had a signiﬁcant eﬀect on the players’ cognitive involve-
ment with the game and their real world dissociation. However, there was
also a signiﬁcant diﬀerence in players’ emotional involvement with the game
and their perceived sense of control in addition to the other two factors.
The implemented adaptation also inﬂuenced the cognitive and emotional
involvement of the players, and their perceived dissociation from the real
world surroundings. Somewhat surprisingly though, the perception of chal-
lenge was signiﬁcantly diﬀerent between the groups of participants who played
the game with the diﬃculty adaptation and without it.
Considering the ﬁrst 10-minute session, there was a signiﬁcant diﬀerence
in immersion scores of participants based on the presence of the adaptation:
F (1, 59) = 9.49, p = 0.003, η2 p = 0.145. The information about the adaptation
also had a signiﬁcant eﬀect on immersion: F (1, 59) = 7.55, p = 0.008, η2 p =
0.119. However, the interaction eﬀect between the two independent variables
on immersion was not signiﬁcant: F (1, 56) = 1.02, p = 0.316, η2 p = 0.018,
which was on par with the results observed in the previous study.
During the second 10-minute session, participants also felt signiﬁcantly
more immersed in the game when playing with adaptation than those players,
who had a standard diﬃculty increase: F (1, 59) = 9.39, p = 0.003, η2 p =
0.144. The information about the adaptation also had a signiﬁcant eﬀect on
immersion: F (1, 59) = 9.05, p = 0.004, η2 p = 0.139. However, the interaction
eﬀect on immersion was not signiﬁcant: F (1, 56) = 2.05, p = 0.148, η2 p =
25

--- [pdf page 29] ---
  
SESSION I Eﬀect of Information Eﬀect of Adaptation Interaction Eﬀect F1,59 p η2 p F1,59 p η2 p F1,56 p η2 p
Total Immersion 7.55 .008** .119 9.49 .003** .145 1.02 .316 .018
Cognitive Involvement 1.73 .193 .030 4.92 .031* .081 .12 .730 .002
Emotional Involvement 7.23 .009** .114 8.99 .004** .138 .35 .559 .006
Real World Dissociation 3.12 .083 .053 2.63 .110 .045 2.18 .145 .038
Challenge 5.08 .028* .083 11.13 .002** .116 4.30 .043* .071
Control 2.14 .149 .037 .54 .467 .009 .30 .585 .005
Table 4: First 10-minute session: The eﬀects of information and adaptation on immersion.
∗∗p<0.01, ∗p<0.05
0.037.
SESSION II Eﬀect of Information Eﬀect of Adaptation Interaction Eﬀect F1,59 p η2 p F1,59 p η2 p F1,56 p η2 p
Total Immersion 9.05 0.004** 0.139 9.39 0.003** 0.144 2.05 0.148 0.037
Cognitive Involvement 3.83 0.055 0.064 6.60 0.013* 0.105 0.02 0.903 0.000
Emotional Involvement 5.49 0.023** 0.089 7.08 0.010** 0.112 1.25 0.268 0.022
Real World Dissociation 6.40 0.014** 0.103 6.06 0.017* 0.098 5.11 0.028* 0.084
Challenge 1.54 0.219 0.027 1.22 0.274 0.021 1.91 0.173 0.033
Control 11.47 0.001** 0.170 5.73 0.020* 0.093 1.08 0.303 0.019
Table 5: Second 10-minute session: The eﬀects of information and adaptation on immer-
sion. ∗∗p<0.01, ∗p<0.05
Familiarity with the concept of diﬃculty adaptation did not have a sig-
niﬁcant eﬀect on immersion in the two gaming sessions: F (1, 28) = 2.89, p =
0.100, η2 p = 0.093.
7.2.1. Performance in the Game
Overall, the number of levels players fully completed within the required
time ranged between two and ﬁve, out of the ﬁve levels in the game. Majority
of players (33) completed all ﬁve levels, 17 participants completed four levels,
9 participants made no further progress after completing three levels in the
game, and only one participant was unable to make further progress after
completing level two.
The number of levels players completed within the 20-minutes limit did
not have a signiﬁcant eﬀect on immersion during the two gaming sessions:
F (3, 56) = .082, p = 0.489, η2 p = 0.042. Immersion during the second gaming
session was expected to be aﬀected by the number of levels completed in
the game, however the diﬀerence was not signiﬁcant: (F (3, 56) = 0.66, p =
0.583, η2 p = 0.034. Similarly, players who completed the game and those who
26

--- [pdf page 30] ---
  
did not ﬁnish the game within the time limit did not have a signiﬁcant eﬀect
on immersion: F (1, 58) = 0.18, p = 0.675, η2 p = 0.003.
Not all players were able to keep the main character alive at all times:
only 18 participants played the game without dying once, while the other
42 players had to restart the level during which the character lost her life.
The largest number of deaths in the game was seven. However, the diﬀerence
between immersion scores in the two gaming sessions was not signiﬁcantly in-
ﬂuenced by the death of the main character in the game: F (1, 58) = 0.83, p =
0.368, η2 p = 0.014.
There was no signiﬁcant diﬀerence in the number of levels completed
by players who had diﬃculty adaptation and those who did not: U (60) =
335, p = 0.059. Similarly, the information about the diﬃculty adaptation
did not have a signiﬁcant eﬀect on the number of levels players completed:
U (60) = 435, p = 0.805. The presence of the diﬃculty adaptation did not
have a signiﬁcant eﬀect on the number of the main character’s deaths in the
game: U (60) = 369, p = 0.220.
7.3. Discussion
The study was designed with an aim to explore the durability of the eﬀect
of the players’ expectations of the adaptation in a digital game based on the
information they know about it on immersion. An additional goal also set
up at the start of the experiment was to test the eﬀect of a diﬀerent type
of adaptation and the information about it on players’ perceptions of the
feature in a diﬀerent game.
It was hypothesised that the eﬀect of information about adaptation in the
game might not be durable (H4). That is, knowing that the game contains
a potentially beneﬁcial feature might enhance the player’s ﬁrst impression,
but as the player engages with the game for longer periods of time, they
might forget about the presence of the feature and instead focus on the game
mechanics. Alternatively, they might not perceive it as useful or fair, which
could potentially decrease their sense of immersion.
Hence, we anticipated that the eﬀect of information about adaptation
would decrease with time. This would weaken immersion of players espe-
cially for those who were deceptively told about playing with the diﬃculty
adaptation, as with time they could observe that the game’s diﬃculty in-
crease is static, and not based on their performance. However, regardless of
the gaming session, the information about the adaptation increased players’
immersion, which was on a par with the results shown in the previous study.
27

--- [pdf page 31] ---
  
Interestingly, this eﬀect did not change with longer game play, speciﬁcally,
after 20 minutes of playing. Hence, H4 was rejected. Despite the diﬀer-
ent nature of the adaptation in this game compared to the one used in the
previous study, the eﬀect of information on immersion remained signiﬁcant.
Same as in the previous experiment, the players’ immersion increased
when expecting the adaptive feature (supporting H2). This eﬀect was ob-
served both after the ﬁrst gaming session, and at the end of the experi-
ment, regardless of the overall immersion levels increasing as the players
made progress in the game. These ﬁndings suggest that the eﬀect of infor-
mation about adaptation on immersion is durable in a casual gaming session,
i.e. players felt consistently more immersed when being aware of the adap-
tation after playing the game for 10 and 20 minutes, regardless of whether
the game contained the diﬃculty adaptation or not.
The players who did not experience the diﬃculty adaptation, but were
told that they played with the feature being present in the game, felt more
immersed and, generally, had a more enjoyable experience than the players
who were not aware of the existence of such feature. This is somewhat
surprising, considering some qualitative responses suggesting that players
often did not notice the changes to the game done by the adaptation. These
results, therefore, provide additional support to the argument that simple
adaptations that are not obvious to the players have the potential to lead to
a more positive gaming experience.
Knowing that the eﬀect of information is consistent for diﬀerent adap-
tations and is not dependent on the presence of adaptation indicates that,
although players may not actively think about the game changing its be-
haviour according to their actions, reading about its presence prior to the
start of the game can provide players with initial boost in enjoyment and
increase their immersion. As seen in this study, this boost appears to be
consistent throughout the entire duration of play for the players who knew
about the adaptation.
Interestingly, the perception of the adaptation implemented in this game
was generally positive, even though the players were not told the precise
details about its implementation. As the qualitative data suggests, the play-
ers believed that this adaptation would be beneﬁcial to their game play due
to the fact that it would allow them to experience the game and enjoy it
regardless of their level of skill and expertise.
Additionally, the ﬁndings in this study suggest that players’ immersion
in the game increases when playing with the implemented diﬃculty adapta-
28

--- [pdf page 32] ---
  
tion (supporting H1). The nature of this adaptation was more ﬁtting with
the conventions of a typical game adaptation than the one implemented in
the previous study. Changing the main character’s health and their attack
power, while varying the enemies’ radius of player detection on each level,
matched the skills of the players fairly closely leading to a heightened sense of
immersion. These results, therefore, provide additional support for the claim
that adaptive features in games lead to an improved immersive experiences
of players.
‘Nightmares’, used for the previous experiment, is a quick engagement
shooting game, which was only played for 1.5 minutes. Therefore, there
was no opportunity to test whether the positive eﬀect of adaptive features
changes with longer game play. As diﬃculty in the game increases with
further levels, players with diﬀerent experience and skill levels may experience
challenge in the game diﬀerently. Some might get frustrated if the diﬃculty
is too high, while others might get bored if the challenge is not matched
with their skills (Csikszentmihalyi, 1991). Adaptive digital games have a
potential to be played for longer, as players would get assistance when being
stuck in the game, while making progress through levels in a much smoother
fashion. The diﬃculty adaptation implemented in this second game improved
immersion of players not only short-term, but the eﬀect lasted until the end
of the experiment. This is an interesting discovery, as it suggests that the
adaptation used in this game was eﬀective in balancing the challenge based
on the performance of the players.
During the debrieﬁng of participants, some of them questioned whether
having the diﬃculty adaptation would lead to diﬀerent performance in the
game by players in the standard condition and the players with this as-
sistance. This hypothesis was put to the test, but showed no signiﬁcant
diﬀerence between the results of the two groups of participants. In general,
this kind of adaptation was perceived as fair, and many participants stated
that having such assistance could improve many single-player games, however
they had their reservations about adaptive multiplayer games.
8. General Discussion
The main aim of these studies was to explore how players’ perception of
adaptivity in the game is aﬀected by the information they know about it and
how that, in turn, aﬀects their immersion. Both studies demonstrate that the
mere awareness of a digital game containing adaptive features that players
29

--- [pdf page 33] ---
  
might perceive as beneﬁcial to their game play is enough to signiﬁcantly
increase their immersion (see Table 6).
Hypotheses Studies Support
H1
Playing an adaptive digital game leads to higher
immersion than playing the same game without
diﬃculty adaptation.
S1, S2 Yes
H2
Players who believe that the game has an adaptive
feature feel more immersed than the players who are
not aware of the feature when the feature is absent.
S1, S2 Yes
H3 The more players know about the adaptation, the less immersed they will be when the adaptation is present. S1 No
H4 The eﬀect of information about adaptation on immersion becomes weaker with game play time. S2 No
Table 6: A summary of hypotheses for Study 1 (S1) and Study 2 (S2).
Somewhat against our expectations though, there is no interaction be-
tween players’ information on the adaptation and whether the adaptation is
actually present. Both the information and the adaptation itself can sepa-
rately positively increase the immersion that players experience. The gath-
ered evidence suggests that players’ awareness and expectations of adaptive
features in single-player digital games can have a positive eﬀect on their
immersive experiences alongside the beneﬁts of the adaptations themselves.
This evidence was gathered using diﬀerent types of adaptive features in diﬀer-
ent games and varied levels of precision and accuracy of information players
knew about these features.
The ﬁndings demonstrate the importance of ﬁrst impressions based on
the expectations of players of a supposedly beneﬁcial feature like adaptive
technology. The ﬁrst several minutes of game play are crucial to the overall
gaming experience, as at that point many players decide whether they want to
continue playing the game. There are many ways in which players’ impression
of the game during the ﬁrst encounter can be aﬀected by factors outside
the actual gameplay: reading reviews, watching trailers and playthroughs,
recommendations from friends. However, it had not been previously shown
whether the players’ perception speciﬁcally of adaptive features changes their
opinion about the game, their performance, and their gaming experiences.
The qualitative data gathered indicated that players also perceived the
idea of having adaptive technologies in single-player digital games positively,
which contributed to their increased immersion when playing a game with the
feature (or even without it). Previously, the perception of fairness of adap-
tive features has been studied in multiplayer games, while our research here
30

--- [pdf page 34] ---
  
provides additional contributions to the knowledge about players’ perception
of this technology in single-player games.
This research also provides empirical evidence which supports the claim
that adaptations in digital games, even simplistic, can enhance player expe-
rience in single-player games, as also mentioned by (Hunicke, 2005). This
eﬀect appears to be durable beyond the ﬁrst few minutes of play and the
adaptations implemented in the games were generally received positively by
players with diﬀerent expertise levels.
We, however, are not suggesting that digital games creators should not
implement adaptive features in their games. Instead, the ﬁndings should be
used as a supporting evidence for the idea that the players’ expectations,
when met, can positively inﬂuence gaming experiences of players. These
expectations should be nurtured not only solely through the eﬀective game
mechanics, but also via a realistic and truthful explanation and advertisement
of these features.
8.1. Implications
This work has various implications for several areas of research from both
academic and industrial points of view. These ﬁndings provide further insight
into the theoretical understanding of immersion and contribute towards the
development of an immersion model. According to the deﬁnition of immer-
sion by Jennett et al. (2008), cognitive involvement is one of the ﬁve factors
that contribute towards the feeling of immersion. Interestingly, cognitive in-
volvement was consistently higher for those players who believed that they
played games with adaptive technology, and it was the only factor that was
consistently observed in both studies to change, alongside immersion, as a
result of the information manipulation. This could be due to the fact that
what players know about a digital game feeds back to their cognition of the
experience: players think about the gameplay more and possibly analyse
their play according to this knowledge. This was observed in the qualitative
responses gathered at the end of these sessions: players frequently mentioned
how they tried to incorporate the adaptation into their game play, whether
the adaptation was present in the game or not. Therefore, it is possible that
players think about their actions in the game more actively when using this
information during their game play.
Considering that cognitive involvement in this context means curiosity
and interest, according to Jennett et al. (2008), it is evident that players
who were told about the presence of adaptivity felt more involved with the
31

--- [pdf page 35] ---
  
game and, as a result, felt more engaged with it. As cognitive involvement is
measured as a part of immersive experience using the IEQ, the diﬀerence in
immersion scores was evidently related to the diﬀerence in the scores for this
component. These ﬁndings contribute to our understanding of immersion
and the factors it is dependent on: information about potentially beneﬁcial
features in the game leads to higher cognitive involvement of players as a
result of their increased interest and curiosity.
Previous research in this area has focused primarily on exploring the
eﬀects of game features on player experience. While the eﬀects of players’
expectations and perceptions of these technologies has not received as much
attention, it evidently contributes to these experiences, as demonstrated in
these studies. Studying the expectations and perceptions of players can help
researchers form more advanced understanding of gaming experiences, which
in turn can help design and develop games that can be enjoyed by players
with diverse previous experiences and personal skills.
This work has several important implications not only for the digital game
user researchers who wish to reduce bias in their experiments, but also for
game developers and testers. Any experimental investigation into the in-
ﬂuence of new features in a game, such as adaptive technologies, on player
experience must be made carefully, without any opportunity for players to
second guess what the investigation is about. For example, a study in an ar-
tiﬁcial intelligence lab that uses an existing game may trigger the expectation
of ‘something good’. The mere expectation of a diﬀerence can be suﬃcient to
change the experience. This becomes even more challenging in the context of
play-testing where surely players called in for play-testing must be expecting
something new even if it is not explicitly communicated what. As this work
suggests, players are able to experience features in the game when told about
their presence, even if the game does not provide this functionality.
When playing digital games, many players rarely look beyond the game
world they directly interact with. Procedural generation of levels and con-
tent, e.g. (Hendrikx et al., 2013), as well as teaching AI to behave more
naturally, e.g. (Lid´en, 2003), are some of the most widely researched topics
in digital games research nowadays. The general assumption is that these
technologies improve our experiences of playing games. However, as more
complex systems are being developed, players are not always able to objec-
tively say if the technology is improving their game play or it is their own
perception that aﬀects their experiences.
32

--- [pdf page 36] ---
  
Deceptive adjustment of features has been proposed as a design sugges-
tion previously. van Dijk et al. (2016) suggest that due to players’ interpre-
tation of their own performance and results, it is possible to use ambiguity to
personalise visualisations of one’s personal informatics data. Colusso et al.
(2016) explored the concept of closeness to increase players’ performance in
a digital game by adjusting the visual representation of their performance
in such a way that the player’s scores appear closer to the comparison tar-
get. Similarly, Bowey et al. (2015) manipulated leaderboards in a game to
induce the sense of failure or success in players. This kind of deception en-
courages competition, and as Bateman et al. (2011) and Klarkowski et al.
(2016) demonstrated, players enjoy games more when the level of skills and
challenge as perceived by the player is higher than the subjective diﬃculty
oﬀered by the game.
The eﬀect of deception does depend on the context in which it is used. In
design of persuasive systems deception has to be subtle. As Adar et al. (2013)
point out, benevolent deception could enhance one’s experience as long as
the user is not aware of such functionality. This could be applied to designing
serious games for behaviour change and educational purposes, where players’
skills and behaviour could only be manipulated using deceptive functionality
if it is hidden from the user. On the other hand, this work demonstrates
the opposite eﬀect: explicit information about adaptive features does have
a positive eﬀect on players. It may be that in the context of serious games,
such adaptations are seen to be “sneaky” ways to inﬂuence people whereas
in the context of mainstream games, such adaptations may be seen to be fair
ways to provide a good game.
The boundary between an ethical use of deception in design and market-
ing and unethical and illegal use is, however, rather blurred. While designing
a system that encourages players to perform better in a digital game is within
the acceptable ethical norms, deceiving players into purchasing a digital game
by claiming that the game has features it does not come with would be mali-
cious and would certainly damage the reputation of the game and the devel-
oper. This work was aimed at exploring the eﬀects of information about the
game on player experience, with the intention not to encourage false adver-
tisement. Instead, the goal was to explore whether information about certain
features could impair the experiential improvements that the features are in-
tended to provide. Incorporating benevolent deception in designs of serious
games could have a great potential. However, with regards to marketing of
digital games, this kind of deception could be rather questionable.
33

--- [pdf page 37] ---
  
8.2. Limitations and Future Work
While research described in this paper provides evidence to conﬁrm or
reject the explicit hypotheses, it leaves other alternatives open for continued
research which is outside the scope of these studies. To gain further insights
into how players’ perceptions of adaptive technology changes their gaming
experiences, we propose exploring the eﬀect of in-game suggestions about the
presence of the feature, as opposed to the explicit information, as used in the
context of this work.
Curiosity could be invoked in diﬀerent ways to the ones explored in this
paper. The information players were given about the adaptation in the game
was neutrally and generically phrased. Depending on the phrasing of the
information about the game and its features, certain other components of
immersion could be studied as well. For example, a more subjective descrip-
tion could be used to evaluate how players’ emotional involvement with the
game is aﬀected. Perceived challenge can be studied using information of
diﬀerent precision that focuses more on the diﬃculty aspects of the game
and the skills of the player.
More research should be done to explore other types of single-player
games. Perception of narrative-driven games, as opposed to the games that
test mostly players’ dexterity, could potentially be diﬀerent depending on
players’ expectations of adaptive technology. Similarly, games that require
longer engagement, such as role-playing and strategy games, could lead to
diﬀerent experiences too.
Although the adaptations used in the studies lead to higher immersion in
the games, they were somewhat simple. More rigorous research is needed in
order to explore the eﬀect of more sophisticated algorithms on gaming expe-
riences of players in games that provide opportunities for longer engagement.
Finally, the durability of the eﬀect of players’ perceptions of adaptivity on
immersion during a casual gaming session provided an initial insight into the
nature of the eﬀect. Ideally, more research is needed over longer periods of
time and potentially over multiple gaming sessions in order to gain additional
evidence for the claims.
9. Conclusions
In this paper, we examined how players’ expectations of diﬃculty adap-
tation in digital games aﬀects their immersion based on the accuracy and
precision of information they know about the adaptation. Over two studies,
34

--- [pdf page 38] ---
  
with diﬀerent games and diﬀerent types of adaptation, we found that players
consistently feel more immersed and enjoy the game more when expecting
the presence of adaptation in a game, regardless of whether the adaptation
is implemented in the game or not. In particular, telling players about an
adaptation did not reduce the immersion that the adaptation itself brought
about.
Moreover, varying the amount of information players were subjected to
before playing the game led to diﬀerent levels of immersion. Players felt
most immersed in the game when provided with a more detailed description
of adaptation implemented in the game than the players who were merely
aware of its existence. Interestingly, even after being subjected to the game
for longer periods of play, the eﬀect of players’ knowledge about adaptation
remained, both when playing with the implemented adaptation and without.
The outcome of this work represents a contribution to the theoretical un-
derstanding of immersion in digital games. In particular, the results provide
evidence that supports the notion of immersion not being solely dependent
on the physical dimensions of video games. Players’ expectations contribute
to their experience of games too and, as seen in this research, this contri-
bution is not always directly linked to the physical dimensions of the game.
The mere expectation of a game feature that is perceived positively by the
player is enough to increase immersion of the player.
This work also has some potentially useful implications for game develop-
ers, testers, and games user researchers with regards to the design of unbiased
games evaluations and research studies into player experience. When evalu-
ating games in experimental investigation into the inﬂuence of game features
or while playtesting games, it is important to keep the language used to de-
scribe the game as neutral as possible to avoid players second guessing what
the investigation is about. This work also demonstrates that even a casual
reference to speciﬁc game factors could bias the results of playtesting and
games user research.
In addition to the main focus of this research, our work also provides
additional support for the argument that adaptive technologies in single-
player games improve player experience, which could be of interest to game
developers who seek to increase engagement of their players through balanced
gameplay.
35

--- [pdf page 39] ---
  
References
Adams, E., 2014. Fundamentals of game design. Pearson Education.
Adar, E., Tan, D. S., Teevan, J., 2013. Benevolent deception in human com-
puter interaction. In: Proceedings of the SIGCHI conference on human
factors in computing systems. ACM, pp. 1863–1872.
Bartle, R., 1996. Hearts, clubs, diamonds, spades: Players who suit muds.
Journal of MUD research 1 (1), 19.
Bateman, S., Mandryk, R. L., Stach, T., Gutwin, C., 2011. Target assistance
for subtly balancing competitive play. In: Proceedings of the SIGCHI Con-
ference on Human Factors in Computing Systems. ACM, pp. 2355–2364.
Bostan, B., ¨O˘g¨ut, S., 2009. In pursuit of optimal gaming experience: chal-
lenges and diﬃculty levels. In: Entertainment= Emotion, ed PVMT Soto.
Communication pr´esent´ee `a lEntertainment= Emotion Conference (Be-
nasque: Centro de Ciencias de Benasque Pedro Pascual (CCBPP)).
Bowey, J. T., Birk, M. V., Mandryk, R. L., 2015. Manipulating leaderboards
to induce player experience. In: Proceedings of the 2015 Annual Sympo-
sium on Computer-Human Interaction in Play. ACM, pp. 115–120.
Cairns, P., Cox, A., Nordin, A. I., 2014a. Immersion in Digital Games: Re-
view of Gaming Experience Research. John Wiley & Sons, Inc., pp. 337–
361.
Cairns, P., Li, J., Wang, W., Nordin, A. I., 2014b. The inﬂuence of controllers
on immersion in mobile games. In: Proceedings of the SIGCHI Conference
on Human Factors in Computing Systems. ACM, pp. 371–380.
Cechanowicz, J. E., Gutwin, C., Bateman, S., Mandryk, R., Stavness, I.,
2014. Improving player balancing in racing games. In: Proceedings of the
ﬁrst ACM SIGCHI annual symposium on Computer-human interaction in
play. ACM, pp. 47–56.
Chen, J., 2007. Flow in games (and everything else). Communications of the
ACM 50 (4), 31–34.
36

--- [pdf page 40] ---
  
Colusso, L., Hsieh, G., Munson, S. A., 2016. Designing closeness to increase
gamers’ performance. In: Proceedings of the 2016 CHI Conference on Hu-
man Factors in Computing Systems. ACM, pp. 3020–3024.
Cox, A., Cairns, P., Shah, P., Carroll, M., 2012. Not doing but thinking: the
role of challenge in the gaming experience. In: Proceedings of the SIGCHI
Conference on Human Factors in Computing Systems. ACM, pp. 79–88.
Csikszentmihalyi, M., 1991. Flow: The psychology of optimal experience.
New York: Harper Perennial.
Denisova, A., Cairns, P., 2015a. Adaptation in digital games: The eﬀect of
challenge adjustment on player performance and experience. In: Proceed-
ings of the ﬁrst ACM SIGCHI annual symposium on Computer-human
interaction in play. ACM.
Denisova, A., Cairns, P., 2015b. First person vs. third person perspective in
digital games: Do player preferences aﬀect immersion? In: Proceedings
of the 33rd Annual ACM Conference on Human Factors in Computing
Systems. ACM, pp. 145–148.
Denisova, A., Cairns, P., 2015c. The placebo eﬀect in digital games: Phantom
perception of adaptive artiﬁcial intelligence. In: Proceedings of the ﬁrst
ACM SIGCHI annual symposium on Computer-human interaction in play.
ACM.
Denisova, A., Guckelsberger, C., Zendle, D., 2017. Challenge in digital games:
Towards developing a measurement tool. In: Proceedings of the 2017 CHI
Conference Extended Abstracts on Human Factors in Computing Systems.
ACM, pp. 2511–2519.
Drachen, A., Canossa, A., Yannakakis, G. N., 2009. Player modeling using
self-organization in tomb raider: Underworld. In: Computational Intelli-
gence and Games, 2009. CIG 2009. IEEE Symposium on. IEEE, pp. 1–8.
Ermi, L., M¨ayr¨a, F., 2005. Fundamental components of the gameplay expe-
rience: Analysing immersion. Worlds in play: International perspectives
on digital games research, 37.
37

--- [pdf page 41] ---
  
Gerling, K. M., Miller, M., Mandryk, R. L., Birk, M. V., Smeddinck, J. D.,
2014. Eﬀects of balancing for physical abilities on player performance, ex-
perience and self-esteem in exergames. In: Proceedings of the SIGCHI
Conference on Human Factors in Computing Systems. ACM, pp. 2201–
2210.
Hao, Y., He, S., Wang, J., Liu, X., Huang, W., et al., 2010. Dynamic diﬃculty
adjustment of game ai by mcts for the game pac-man. In: Natural Com-
putation (ICNC), 2010 Sixth International Conference on. Vol. 8. IEEE,
pp. 3918–3922.
Hendrikx, M., Meijer, S., Van Der Velden, J., Iosup, A., 2013. Procedural
content generation for games: A survey. ACM Transactions on Multimedia
Computing, Communications, and Applications (TOMM) 9 (1), 1.
Hunicke, R., 2005. The case for dynamic diﬃculty adjustment in games.
In: Proceedings of the 2005 ACM SIGCHI International Conference on
Advances in computer entertainment technology. ACM, pp. 429–433.
Jenkins, R., Lee, M., Archambault, R., Shane, H., Greg, S., 2010. The inﬂu-
ence of professional critic reviews. EEDAR/SMU behavioral study. Tech.
rep., Southern Methodist University, Guildhall. Electronic Entertainment
Design and Research.
Jennett, C., Cox, A. L., Cairns, P., Dhoparee, S., Epps, A., Tijs, T., Walton,
A., 2008. Measuring and deﬁning the experience of immersion in games.
International journal of human-computer studies 66 (9), 641–661.
Karpinskyj, S., Zambetta, F., Cavedon, L., 2014. Video game personalisation
techniques: A comprehensive survey. Entertainment Computing 5 (4), 211–
218.
Klarkowski, M., Johnson, D., Wyeth, P., McEwan, M., Phillips, C., Smith,
S., 2016. Operationalising and evaluating sub-optimal and optimal play
experiences through challenge-skill manipulation. In: Proceedings of the
2016 CHI Conference on Human Factors in Computing Systems. ACM,
pp. 5583–5594.
Larsen, J. M., 2010. Diﬃculty curves, gamasutra. Gamasutra.
38

--- [pdf page 42] ---
  
Lid´en, L., 2003. Artiﬁcial stupidity: The art of intentional mistakes. AI Game
Programming Wisdom 2, 41–48.
Livingston, I. J., Nacke, L. E., Mandryk, R. L., 2011. Inﬂuencing experience:
the eﬀects of reading game reviews on player experience. In: Entertainment
Computing–ICEC 2011. Springer, pp. 89–100.
Lora, D., S´anchez-Ruiz, A. A., Gonz´alez-Calero, P. A., G´omez-Mart´ın, M. A.,
2016. Dynamic diﬃculty adjustment in tetris. In: The Twenty-Ninth In-
ternational Flairs Conference.
McMahan, A., 2003. Immersion, engagement and presence: A method for
analyzing 3-d video games. In: Wolf, M., Perron, B. (Eds.), The video
game theory reader. Routledge, London & New York, pp. 67–86.
Missura, O., 2015. Dynamic diﬃculty adjustment. Ph.D. thesis, University
of Bonn.
Nagle, A., Wolf, P., Riener, R., 2016. Towards a system of customized video
game mechanics based on player personality: Relating the big ﬁve per-
sonality traits with diﬃculty adaptation in a ﬁrst-person shooter game.
Entertainment Computing 13, 10–24.
Newheiser, M., 2009. Playing fair: A look at competition in gaming. Strange
Horizons, 1.
Park, J., Song, Y., Teng, C.-I., 2011. Exploring the links between personality
traits and motivations to play online games. Cyberpsychology, Behavior,
and Social Networking 14 (12), 747–751.
Rouse III, R., 2010. Game design: Theory and practice. Jones & Bartlett
Learning.
Silva, M. P., do Nascimento Silva, V., Chaimowicz, L., 2017. Dynamic diﬃ-
culty adjustment on moba games. Entertainment Computing 18, 103–123.
Smeddinck, J., Mandryk, R., Birk, M., Gerling, K., Barsilowski, D., Malaka,
R., et al., 2016. How to present game diﬃculty choices? exploring the
impact on player experience.
39

--- [pdf page 43] ---
  
Spiel, K., Bertel, S., Kayali, F., 2017. Not another z piece!: Adaptive dif-
ﬁculty in tetris. In: Proceedings of the 2017 CHI Conference on Human
Factors in Computing Systems. ACM, pp. 5126–5131.
Sweetser, P., Wyeth, P., 2005. Gameﬂow: a model for evaluating player
enjoyment in games. Computers in Entertainment (CIE) 3 (3), 3–3.
van Dijk, E. K., IJsselsteijn, W., Westerink, J., 2016. Deceptive visualizations
and user bias: a case for personalization and ambiguity in pi visualizations.
In: Proceedings of the 2016 ACM International Joint Conference on Per-
vasive and Ubiquitous Computing: Adjunct. ACM, pp. 588–593.
Vicencio-Moreira, R., Mandryk, R. L., Gutwin, C., 2015. Now you can com-
pete with anyone: Balancing players of diﬀerent skill levels in a ﬁrst-person
shooter game. In: Proceedings of the SIGCHI Conference on Human Fac-
tors in Computing Systems. ACM, pp. 2255–2264.
40

--- [pdf page 44] ---
  
Highlights 
• Two game experiments using different kinds of adaptive difﬁculty adjustment (n 
= 180). 
• Playing an adaptive digital game leads to higher immersion than playing the 
same game without difﬁculty adaptation.  
• Players who believe that they are playing a game that is adapting its difﬁculty 
based on their performance feel more immersed than the players who are not 
aware of the feature regardless of the presence of this feature in the game. 
• Players feel more immersed in the game when knowing about the adaptation 
regardless of the precision of information given to them about the feature prior 
to their engagement. 
• The effect of information about adaptation on immersion is durable in a casual 
gaming session.
