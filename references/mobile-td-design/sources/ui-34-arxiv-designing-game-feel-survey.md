URL: https://arxiv.org/html/2011.09201v1
TITLE: Designing Game Feel. A Survey - Pichlmair & Johansen
RETRIEVED: 2026-11-22
METHOD: web_extract

[Skip to main content](https://arxiv.org/html/2011.09201v1#infobox)

Title:

Content selection saved. Describe the issue below:

Description:

[License: arXiv.org perpetual non-exclusive license](https://info.arxiv.org/help/license/index.html#licenses-available)

arXiv:2011.09201v1 \[cs.HC\] 18 Nov 2020

# Designing Game Feel.   A Survey

Martin Pichlmair and Mads Johansen
Affiliation: Center for Computer Games Research

IT University Copenhagen

Copenhagen, Denmark

Email: mpic@itu.dk and madj@itu.dk

###### Abstract

Game feel design is the intentional design of the affective impact of moment-to-moment interaction with games. In this paper we survey academic research and publications by practitioners to give a complete overview of the state of research concerning this aspect of game design, including context from related areas. We analysed over 200 sources and categorised their content according to the design purpose presented. This resulted in three different domains of intended player experiences: physicality, amplification, and support. In these domains, the act of polishing that determines game feel, takes the shape of tuning, juicing, and streamlining respectively. Tuning the physicality of game objects creates cohesion, predictability, and the resulting movement informs many other design aspects. Juicing is the act of polishing amplification and it results in empowerment and provides clarity of feedback by communicating the importance of game events. Streamlining allows a game to act on the intention of the player, supporting the execution of actions in the game. These three design intents are the main means through which designers control minute details of interactivity and inform the player’s reaction. This framework and its nuanced vocabulary can lead to an understanding of game feel that is shared between practitioners and researchers as highlighted in the concluding future research section.

## I Introduction

The logical starting point for any exploration of game feel as a research subject is the book of the same name by Steve Swink, who defines Game Feel as “real-time control of virtual objects in a simulated space, with interactions emphasised by polish” \[ [1](https://arxiv.org/html/2011.09201v1#bib.bib1 "")\]. He further expands on that definition by stating that great-feeling games convey five kinds of experiences, namely:

- •


The aesthetic sensation of control

- •


The pleasure of learning, practising and mastering a skill

- •


Extension of the senses

- •


Extension of identity

- •


Interaction with a unique physical reality within the game


Yet, while Swink’s definition of game feel covers a wide range of video games, it is too limited to encompass all kinds of them. He explicitly excludes particular classes of games from the group of games that possess the quality of game feel. Doug Wilson \[ [2](https://arxiv.org/html/2011.09201v1#bib.bib2 "")\] challenges this aspect of Swink’s book and extends the notion of aesthetic sensation of control by connecting game feel with the cultural history of gestures. Wilson distinguishes between ‘Game Feel’ and ‘game feel’, the first being the positive feeling of control that Swink describes, the second being any feeling a game communicates. Jesse Schell does not mention the term ‘game feel’ in his book \[ [3](https://arxiv.org/html/2011.09201v1#bib.bib3 "")\] at all. Yet he writes that designers should consider how their game feels in the context of required skills, learnability, and balance. The journalist and game maker Tim Rogers wrote an exhaustive article \[ [4](https://arxiv.org/html/2011.09201v1#bib.bib4 "")\] about what he calls ‘friction’, an alternative term for how a game feels. Friction is the experience of the player pushing against the boundaries of the system. It is the feeling of the inertia of the design working against the user’s force. Friction is often experienced by the player over a longer duration than moment-to-moment interaction, as it extends over several game elements. Friction can be the defining element of a game, or just a part of the experience. Rogers’ monolithic article is difficult to parse and, while detailed, does not go deep into specific aspects of game feel. It mostly recounts different feelings the author had during particular situations in games, establishing a wide vocabulary for talking about the aesthetic experience of playing. Similarly, Anthropy & Clark \[ [5](https://arxiv.org/html/2011.09201v1#bib.bib5 "")\] establish a ‘game design vocabulary’ in their book of the same name. In it, they approach friction from the designer’s perspective, and call it ‘resistance’. The resistance of the game determines the experienced friction. It decides how the game feels to the player.

Ehrndal \[ [6](https://arxiv.org/html/2011.09201v1#bib.bib6 "")\] approaches the topic of game feel in an academic way that links reflections of practitioners with aesthetic theories of games. Larsen \[ [7](https://arxiv.org/html/2011.09201v1#bib.bib7 "")\] starts from a similar point and attempts to define an ‘aesthetics of action’. He builds on Swink \[ [1](https://arxiv.org/html/2011.09201v1#bib.bib1 "")\] and Nijman \[ [8](https://arxiv.org/html/2011.09201v1#bib.bib8 "")\], both game developers more than researchers, in order to analyse the components of a game that contribute to what he calls a ‘thrilling experience’. Yang \[ [9](https://arxiv.org/html/2011.09201v1#bib.bib9 "")\] on the other hand expands the theory of game feel to include the metaphorical aspects of game objects and their relations to players. Building on queer theory, he includes political aspects of games in their ‘feel’ in order to communicate the diversity of the gameplay experience over diverse players, and also in order to provide game makers with a richer set of design tools.

While games are multi-sensory experiences, we are focusing on the haptic and visual aspects of game feel in this article, aware that narrative content, sound, music, art, and many other aspects of a game influence how it feels. Very similar techniques to the ones described in this paper exist for example for designing the feel of the story of a game \[ [10](https://arxiv.org/html/2011.09201v1#bib.bib10 "")\], writing the voices of in-game characters, balancing its rules and tuning its atmosphere. Yet, this paper is concerned with moment-to-moment interactivity \[ [11](https://arxiv.org/html/2011.09201v1#bib.bib11 ""), [12](https://arxiv.org/html/2011.09201v1#bib.bib12 ""), [13](https://arxiv.org/html/2011.09201v1#bib.bib13 "")\], microinteractions \[ [14](https://arxiv.org/html/2011.09201v1#bib.bib14 "")\] and interactions with core loops \[ [15](https://arxiv.org/html/2011.09201v1#bib.bib15 "")\] and their design. Unlike Swink’s precise but narrow definition of ‘Game Feel’, we will look at game feel more broadly as the affective aspect of real-time interactivity.

## II The Physicality of Interactivity

This survey paper gives an overview of the history, context, and state of the art of the understanding of game feel and how to design it. It is based on research in the field and publications by practitioners in order to capture both, conceptual and the practical knowledge. This chapter gives an overview of academic lines of thinking that lead to an understanding of game feel.

### II-AFrom Flow to Feel

In the years before Steve Swink wrote the book ‘Game Feel’ in 2009, research about the link between emotions and gameplay was most often connected to Mihaly Csikszentmihalyi’s famous ‘Flow theory’, which was one of the results of a global research project about experiences that are “so gratifying that people are willing to do it for its own sake, with little concern for what they will get out of it, even when it is difficult or dangerous” \[ [16](https://arxiv.org/html/2011.09201v1#bib.bib16 "")\]. Tasks that allow for this quality of experience feature the following eight elements:

1. 1.


a task that can be completed;

2. 2.


the ability to concentrate on the task;

3. 3.


that concentration is possible because the task has clear goals;

4. 4.


that concentration is possible because the task provides immediate feedback;

5. 5.


the ability to exercise a sense of control over actions;

6. 6.


a deep but effortless involvement that removes awareness of the frustrations of everyday life;

7. 7.


concern for self disappears, but sense of self emerges stronger afterwards; and

8. 8.


the sense of the duration of time is altered.


The concept of flow has had an enormous influence on the understanding of experiential qualities of games. Sweetser & Wyeth \[ [17](https://arxiv.org/html/2011.09201v1#bib.bib17 "")\] adapted Flow theory to games and Juul \[ [18](https://arxiv.org/html/2011.09201v1#bib.bib18 "")\] discusses and criticises the theory’s relevance for describing enjoyable challenges in games. Both texts contain multiple references to how games make a player feel, so it is natural to think of it as a stepping stone towards a closer examination of game feel. Ciccoricco \[ [19](https://arxiv.org/html/2011.09201v1#bib.bib19 "")\] links Flow to the gameplay experience of Mirror’s Edge \[ [20](https://arxiv.org/html/2011.09201v1#bib.bib20 "")\], a game that was sold on its merits in fluidity of movement, and contrasts it with the feminist concept of fluidity. Jenova Chen \[ [21](https://arxiv.org/html/2011.09201v1#bib.bib21 "")\] famously not only based his graduation thesis on Flow but also released three successful commercial games based on his understanding of this concept with his studio That Game Company; Flow \[ [22](https://arxiv.org/html/2011.09201v1#bib.bib22 "")\], Flower \[ [23](https://arxiv.org/html/2011.09201v1#bib.bib23 "")\], and Journey \[ [24](https://arxiv.org/html/2011.09201v1#bib.bib24 "")\].

Game feel is most strongly reliant on points three, four, and five in the above list of criteria. Clarity of goals will be discussed in the context of streamlining of the player experience in Section [IV-C](https://arxiv.org/html/2011.09201v1#S4.SS3 "IV-C Streamlining Support ‣ IV Game Feel ‣ Designing Game Feel.A Survey"). Immediate feedback is at the heart of this paper and of the link between a game and how it feels. The sense of control will be mentioned at various points, for example in relation to the illusion of control and immersion. While some of the other items in Csikszentmihalyi’s list apply to games too, they do so in a more indirect way.

### II-BThe Purpose of Juice

While Flow is very well suited for understanding the dynamics of immersion, game feel is more focused on the role interactivity plays in this process. A design concept often mentioned when talking about how interactivity can be intensified is ‘juice’. Juice amplifies interactivity by providing excessive amounts of feedback in relation to user input \[ [25](https://arxiv.org/html/2011.09201v1#bib.bib25 "")\] (see also \[ [26](https://arxiv.org/html/2011.09201v1#bib.bib26 "")\]). The goal of juice is to make actions feel significant. It is superfluous from a strictly mechanical perspective, but turns interacting with the system into a more pleasurable experience. There is an adequacy to juice. Juice-rich interaction makes it hard to learn what aspects of interactivity have mechanical importance \[ [27](https://arxiv.org/html/2011.09201v1#bib.bib27 "")\] as decoding the actual system behind the game is cumbersome, when the whole screen is filled with wobbling particle effects — unless this is a conscious aesthetic choice and itself part of the game’s mechanics.

At the same time, the diversity of the medium allows that some games — we can call them ‘toys’ or ‘autotelic experiences’ \[ [28](https://arxiv.org/html/2011.09201v1#bib.bib28 "")\] — are almost purely made of juice. Interacting with those toys is still playful and based on feedback amplified by juice. Only through feedback can we learn (to play), and all play is learning (\[ [29](https://arxiv.org/html/2011.09201v1#bib.bib29 ""), [30](https://arxiv.org/html/2011.09201v1#bib.bib30 ""), [31](https://arxiv.org/html/2011.09201v1#bib.bib31 "")\], see also \[ [32](https://arxiv.org/html/2011.09201v1#bib.bib32 "")\] and \[ [33](https://arxiv.org/html/2011.09201v1#bib.bib33 "")\]). One could even go so far as to argue that all cognition is rooted in feedback from the real world that we actively engage with in a process of interactive cognition (see \[ [34](https://arxiv.org/html/2011.09201v1#bib.bib34 "")\], based on \[ [35](https://arxiv.org/html/2011.09201v1#bib.bib35 "")\]).

Overall, the goal of the application of juiciness is to enhance the feedback when interacting with game objects. Kao \[ [36](https://arxiv.org/html/2011.09201v1#bib.bib36 "")\] conducted a large-scale study on the amount of juice appropriate for a specific gaming situation, concluding that juice has to be applied adequately to the situation. In their study, medium and high levels of juiciness outperformed extreme levels and the absence of juiciness across the measures of player experience, intrinsic motivation, play time, and in-game performance. Hicks et al. \[ [26](https://arxiv.org/html/2011.09201v1#bib.bib26 "")\] bridge industry knowledge and academic analysis, building on Juul’s \[ [37](https://arxiv.org/html/2011.09201v1#bib.bib37 ""), [25](https://arxiv.org/html/2011.09201v1#bib.bib25 "")\], Schell’s \[ [3](https://arxiv.org/html/2011.09201v1#bib.bib3 "")\] and Deterding’s \[ [38](https://arxiv.org/html/2011.09201v1#bib.bib38 "")\] work on juice in video games (see also \[ [39](https://arxiv.org/html/2011.09201v1#bib.bib39 "")\]). They present a framework for analysis of juiciness in games that they hope can also be used in game design.
Sometimes juice exists not for the player but for the audience watching the game. Rogers hints at that when he says “The player knows where the hit range of the weapon is. He doesn’t see the little juice-dance of the chain-daggers.” \[ [4](https://arxiv.org/html/2011.09201v1#bib.bib4 "")\]. Swink attributes a similar effect to ragdoll physics: “The ragdoll raptors have ‘over the shoulder’ appeal. People walking by someone playing the game often stop and want to know more…” \[ [1](https://arxiv.org/html/2011.09201v1#bib.bib1 "")\]. Gage \[ [40](https://arxiv.org/html/2011.09201v1#bib.bib40 "")\] describes the upsides of having a game that is readable on different levels in his talk on ‘subway legibility’. More generally, there are elements of juiciness that designers implement for the audience, especially for streaming and e-Sports \[ [41](https://arxiv.org/html/2011.09201v1#bib.bib41 "")\]. Some elements might also draw in the player but become invisible to them over time.

Hunicke \[ [42](https://arxiv.org/html/2011.09201v1#bib.bib42 "")\] remarks that “juiciness can be applied to abstract forms and elements and it is a way of embodying arbitrarily defined objects and giving them some aliveness, some qua, some thing, some tenderness”. Interestingly, Swink \[ [1](https://arxiv.org/html/2011.09201v1#bib.bib1 "")\], Larsen \[ [7](https://arxiv.org/html/2011.09201v1#bib.bib7 "")\] as well as Fullerton \[ [43](https://arxiv.org/html/2011.09201v1#bib.bib43 "")\] use the term ‘polishing’ to describe something very similar to this. Fullerton describes the act of polishing as “the impression of physicality created by layering of reactive motion, proactive motion, sounds, and effects, and the synergy between those layers” \[ [43](https://arxiv.org/html/2011.09201v1#bib.bib43 "")\]. In other words she sees polish as a means of giving physicality to inanimate objects in order to render them more tangible, which is remarkably similar to Hunicke’s reasoning for juiciness. Practitioners use the term ‘polish’ closer to its dictionary sense. They call many things polish, e.g. fixing the timing of voice cues, or fixing bugs in the code (see e.g. \[ [44](https://arxiv.org/html/2011.09201v1#bib.bib44 "")\]). Polish is linked to juiciness in that all juicy elements are polished at some point, but it is seen as a mostly aesthetic endeavour that stops short of changing the basic rules of a game, its core narrative, or its principal game mechanics. In practice, this separation is not always maintained and the connection between juicing, polishing, designing, and the feelings elicited by the feedback loop of interacting with a game is complex.

The intentionality of polishing and juicing apparent in Hunicke’s and Fullerton’s comments is at the centre of Lisa Brown’s assertion that “you’re not juicing your game –– you’re actually picking a feeling that your game should communicate and juicing that feeling” \[ [45](https://arxiv.org/html/2011.09201v1#bib.bib45 "")\]. In this paper we limit ourselves to feelings, steering clear of complex emotions — love, hate, and such –– which require a closer connection between the game and the player than the moment-to-moment interaction we are concerned with provides. Baumeister et al. \[ [46](https://arxiv.org/html/2011.09201v1#bib.bib46 "")\] call the class of feelings we work with ‘automatic affect’. This type of affect is closely linked to experience via feedback loops. The emotional reaction to a stimulus has an effect on future experiences of stimuli and those have an effect on the person experiencing them and so on. Affect is generally characterised by arousal, the quality of the experience, and valence, which can be either positive or negative. Game designers are of course concerned with positive as well as negative thoughts, because stretches of sadness and near-frustrating challenges provide the perfect breeding ground for happiness and relief. It is important to note that humans are capable of experiencing multiple and even conflicting emotions simultaneously \[ [47](https://arxiv.org/html/2011.09201v1#bib.bib47 "")\]. Further, experiments in mood regulation have shown that humans exhibit a ‘homeostatic mood management mechanism’ \[ [48](https://arxiv.org/html/2011.09201v1#bib.bib48 "")\]. After initial mood-congruent responses, we spontaneously reverse and replace those by mood-incongruent reactions. So, additionally to the feedback between the outside world — including mediated experiences like video games — and our emotional state, there is a feedback loop built into our mood.

### II-CDesigning for Emotions

The connection between emotion and cognition is a vast research field and proponents of that field like Okon-Singer et al. often speak of how central emotion is to our cognition \[ [49](https://arxiv.org/html/2011.09201v1#bib.bib49 "")\]. The emotional aspect of design has been reflected by design thinkers like Löwgren, Kirkpatrick, Hodent, and Karhulati. Löwgren \[ [50](https://arxiv.org/html/2011.09201v1#bib.bib50 ""), [51](https://arxiv.org/html/2011.09201v1#bib.bib51 "")\] provides a vocabulary for linking aesthetics, design, and emotional responses. The sensibility and precision he employs to talk about design elements and design choices is valuable for better discussions about game design. Hodent \[ [52](https://arxiv.org/html/2011.09201v1#bib.bib52 "")\] successfully bridges the chasm between interaction design and user experience design for games and accurately summarises the links between Norman’s work \[ [53](https://arxiv.org/html/2011.09201v1#bib.bib53 "")\] and video game design. In general, User Experience (UX) Design is an area that is concerned with the experiential aspects of interactivity within the vast field of Human-Computer Interaction. Hassenzahl \[ [54](https://arxiv.org/html/2011.09201v1#bib.bib54 "")\] presents an in-depth study of the complex links between needs, affect, and interactivity. Methods originating in UX design have found their way into games \[ [55](https://arxiv.org/html/2011.09201v1#bib.bib55 "")\]. Their main influence is indirect. They inform the design and iteration process by offering a portfolio of tools and techniques. For example, Dan Saffer’s proposal of microinteractions \[ [14](https://arxiv.org/html/2011.09201v1#bib.bib14 "")\] links to game design in that the basic components of a microinteractions are triggers, rules, feedback, and loops (or modes) — all basic building blocks of game design.

Kirkpatrick \[ [56](https://arxiv.org/html/2011.09201v1#bib.bib56 ""), [57](https://arxiv.org/html/2011.09201v1#bib.bib57 ""), [58](https://arxiv.org/html/2011.09201v1#bib.bib58 "")\] and Karhulahti \[ [59](https://arxiv.org/html/2011.09201v1#bib.bib59 "")\] employ aesthetic theory and critical theory to build an aesthetic theory of video games that encompasses kinaesthetics as a foundational building block. Keogh \[ [60](https://arxiv.org/html/2011.09201v1#bib.bib60 "")\] takes this argument a step further in that he argues that the phenomenology of play, rooted in the understanding of embodiment by Merleau-Ponty \[ [61](https://arxiv.org/html/2011.09201v1#bib.bib61 "")\], Bateson \[ [62](https://arxiv.org/html/2011.09201v1#bib.bib62 "")\], and Weiss \[ [63](https://arxiv.org/html/2011.09201v1#bib.bib63 "")\], “must not start with the experience of the player’s body, but with the experience through which the player’s amalgam embodiment in and as part of the videogame performance emerges.” \[ [60](https://arxiv.org/html/2011.09201v1#bib.bib60 "")\]. Surman \[ [64](https://arxiv.org/html/2011.09201v1#bib.bib64 "")\], Davnall \[ [65](https://arxiv.org/html/2011.09201v1#bib.bib65 "")\], Putney \[ [66](https://arxiv.org/html/2011.09201v1#bib.bib66 "")\] offer three personal takes on three different games, echoing similar struggles of coming to terms with the bodily experience of playing games and the implications of the act of doing so.

In summary, game feel research is concerned with how our minds and our bodies experience the emotions of playing games. The question of how to design the emotional aspect of the play experience has been at the centre of a lot of research that connects design theory, psychology, phenomenology, philosophy, and many more areas.

## III Game Feel Design Elements in Practice

Gameplay designers, of which some have a programming background and some have a design background, have analysed their own practice in countless blog posts, podcast episodes, conference presentations, and, sometimes, scholarly publications. The majority of works concerned with topics of game feel are descriptive in nature. They usually focus on either a single game or a specific feature or set of features that the designers have worked on. What can be learned from these texts, more than anything, is that experienced gameplay designers are very conscious about which aspects of their game are relevant for shaping its feel.

Some practitioners talk about how to structure game development processes around the design of game feel \[ [67](https://arxiv.org/html/2011.09201v1#bib.bib67 ""), [68](https://arxiv.org/html/2011.09201v1#bib.bib68 ""), [69](https://arxiv.org/html/2011.09201v1#bib.bib69 "")\]. Others focus on giving broad overviews of techniques \[ [13](https://arxiv.org/html/2011.09201v1#bib.bib13 ""), [70](https://arxiv.org/html/2011.09201v1#bib.bib70 ""), [8](https://arxiv.org/html/2011.09201v1#bib.bib8 ""), [71](https://arxiv.org/html/2011.09201v1#bib.bib71 ""), [72](https://arxiv.org/html/2011.09201v1#bib.bib72 "")\]. Podcasts and video series by experienced practitioners such as The Spelunky Showlike \[ [73](https://arxiv.org/html/2011.09201v1#bib.bib73 ""), [74](https://arxiv.org/html/2011.09201v1#bib.bib74 ""), [75](https://arxiv.org/html/2011.09201v1#bib.bib75 ""), [76](https://arxiv.org/html/2011.09201v1#bib.bib76 ""), [77](https://arxiv.org/html/2011.09201v1#bib.bib77 "")\], The Clark Tank \[ [78](https://arxiv.org/html/2011.09201v1#bib.bib78 "")\] or Game Maker’s Toolkit \[ [69](https://arxiv.org/html/2011.09201v1#bib.bib69 ""), [79](https://arxiv.org/html/2011.09201v1#bib.bib79 "")\], frequently discuss game feel design as a part of their coverage of game design topics.

There’s a noticeable lack of big picture thinking among practitioners, with a couple of exceptions. Hodent \[ [52](https://arxiv.org/html/2011.09201v1#bib.bib52 "")\] links game feel to classical concepts of game development like the ‘3Cs’ \[ [80](https://arxiv.org/html/2011.09201v1#bib.bib80 "")\], User Experience Design, as well as to Norman’s theories on emotional design \[ [53](https://arxiv.org/html/2011.09201v1#bib.bib53 "")\]. Song \[ [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\] provides an excellent overview of how to model the feeling of impact in action games. Turner \[ [82](https://arxiv.org/html/2011.09201v1#bib.bib82 "")\] wrote one of the few articles on how to influence game feel via sound design rooted in his own work in game audio. Ismail \[ [83](https://arxiv.org/html/2011.09201v1#bib.bib83 "")\] writes about community development, explaining how communities of makers establish more and more sophisticated discourse about their practice over time. Another text by a practitioner that contextualises game feel in wider political and social development is Yang’s \[ [9](https://arxiv.org/html/2011.09201v1#bib.bib9 "")\] essay about Queering Game Feel.

In general, the topics that these practical articles cover cannot easily be isolated from each other. They all concern feedback and how it relates to controls of a game. If the game is regarded as a feedback system (following \[ [84](https://arxiv.org/html/2011.09201v1#bib.bib84 ""), [85](https://arxiv.org/html/2011.09201v1#bib.bib85 "")\] and \[ [86](https://arxiv.org/html/2011.09201v1#bib.bib86 "")\]), then game feel can be seen as a modulation of said feedback system. Designing game feel is designing the adequate feedback for eliciting a specific feeling or affective reaction. The following chapters list different design elements that determine the game feel, the feel of moment-to-moment interaction. We cluster design elements into classes according to the game’s subsystem the designer is discussing. Table [I](https://arxiv.org/html/2011.09201v1#S3.T1 "TABLE I ‣ III Game Feel Design Elements in Practice ‣ Designing Game Feel.A Survey") presents an overview of the areas we’re looking at and lists the most relevant examples mentioned. The table is not an exhaustive overview of all aspects of game feel from a practitioner’s perspective. It is a starting point for going deeper into practices most relevant for designing game feel.

TABLE I: Game feel design elements overview.

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| Design Element | Physicality | Amplification | Support | Key References |
| Movement and Actions |
| Basic Movement | • |  |  | \[ [87](https://arxiv.org/html/2011.09201v1#bib.bib87 ""), [88](https://arxiv.org/html/2011.09201v1#bib.bib88 ""), [89](https://arxiv.org/html/2011.09201v1#bib.bib89 ""), [90](https://arxiv.org/html/2011.09201v1#bib.bib90 ""), [91](https://arxiv.org/html/2011.09201v1#bib.bib91 ""), [92](https://arxiv.org/html/2011.09201v1#bib.bib92 "")\] |
| Gravity | • |  |  | \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 ""), [93](https://arxiv.org/html/2011.09201v1#bib.bib93 ""), [94](https://arxiv.org/html/2011.09201v1#bib.bib94 "")\] |
| Terminal Velocity |  |  | • | \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 "")\] |
| Coyote Time |  |  | • | \[ [95](https://arxiv.org/html/2011.09201v1#bib.bib95 ""), [96](https://arxiv.org/html/2011.09201v1#bib.bib96 "")\] |
| Invincibility Frames |  |  | • | \[ [97](https://arxiv.org/html/2011.09201v1#bib.bib97 ""), [98](https://arxiv.org/html/2011.09201v1#bib.bib98 ""), [99](https://arxiv.org/html/2011.09201v1#bib.bib99 "")\] |
| Corner Correction |  |  | • | \[ [100](https://arxiv.org/html/2011.09201v1#bib.bib100 ""), [27](https://arxiv.org/html/2011.09201v1#bib.bib27 "")\] |
| Collision Shapes | • |  | • | \[ [101](https://arxiv.org/html/2011.09201v1#bib.bib101 "")\] |
| Button Caching |  |  | • | \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 "")\] |
| Spring-locked Modes | • |  |  | \[ [102](https://arxiv.org/html/2011.09201v1#bib.bib102 ""), [103](https://arxiv.org/html/2011.09201v1#bib.bib103 ""), [5](https://arxiv.org/html/2011.09201v1#bib.bib5 "")\] |
| Assisted Aiming |  |  | • | \[ [27](https://arxiv.org/html/2011.09201v1#bib.bib27 ""), [104](https://arxiv.org/html/2011.09201v1#bib.bib104 ""), [105](https://arxiv.org/html/2011.09201v1#bib.bib105 "")\] |
| Event Signification |
| Screen Shake | • | • | • | \[ [8](https://arxiv.org/html/2011.09201v1#bib.bib8 ""), [70](https://arxiv.org/html/2011.09201v1#bib.bib70 ""), [106](https://arxiv.org/html/2011.09201v1#bib.bib106 ""), [107](https://arxiv.org/html/2011.09201v1#bib.bib107 "")\] |
| Knock-back & Recoil | • | • |  | \[ [8](https://arxiv.org/html/2011.09201v1#bib.bib8 ""), [108](https://arxiv.org/html/2011.09201v1#bib.bib108 "")\] |
| One-shot Particle Effects |  | • | • | \[ [109](https://arxiv.org/html/2011.09201v1#bib.bib109 ""), [110](https://arxiv.org/html/2011.09201v1#bib.bib110 ""), [111](https://arxiv.org/html/2011.09201v1#bib.bib111 ""), [112](https://arxiv.org/html/2011.09201v1#bib.bib112 ""), [70](https://arxiv.org/html/2011.09201v1#bib.bib70 ""), [113](https://arxiv.org/html/2011.09201v1#bib.bib113 ""), [114](https://arxiv.org/html/2011.09201v1#bib.bib114 "")\] |
| Cooldown Visualisation |  |  | • | \[ [115](https://arxiv.org/html/2011.09201v1#bib.bib115 ""), [116](https://arxiv.org/html/2011.09201v1#bib.bib116 ""), [117](https://arxiv.org/html/2011.09201v1#bib.bib117 ""), [118](https://arxiv.org/html/2011.09201v1#bib.bib118 "")\] |
| Ragdoll Physics | • | • | • | \[ [119](https://arxiv.org/html/2011.09201v1#bib.bib119 ""), [1](https://arxiv.org/html/2011.09201v1#bib.bib1 "")\] |
| Colour Flashing |  | • |  | \[ [68](https://arxiv.org/html/2011.09201v1#bib.bib68 ""), [120](https://arxiv.org/html/2011.09201v1#bib.bib120 ""), [8](https://arxiv.org/html/2011.09201v1#bib.bib8 "")\] |
| Impact Markers |  | • | • | \[ [121](https://arxiv.org/html/2011.09201v1#bib.bib121 ""), [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\] |
| Hit Stop |  | • | • | \[ [122](https://arxiv.org/html/2011.09201v1#bib.bib122 ""), [123](https://arxiv.org/html/2011.09201v1#bib.bib123 ""), [81](https://arxiv.org/html/2011.09201v1#bib.bib81 ""), [79](https://arxiv.org/html/2011.09201v1#bib.bib79 "")\] |
| Audio Feedback | • | • | • | \[ [124](https://arxiv.org/html/2011.09201v1#bib.bib124 ""), [125](https://arxiv.org/html/2011.09201v1#bib.bib125 ""), [126](https://arxiv.org/html/2011.09201v1#bib.bib126 "")\] |
| Haptic Feedback | • | • | • | \[ [127](https://arxiv.org/html/2011.09201v1#bib.bib127 ""), [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\] |
| Time Manipulation |
| Freeze Frames |  | • | • | \[ [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\] |
| Slow Motion |  | • | • | \[ [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\] |
| Bullet Time |  | • | • | \[ [128](https://arxiv.org/html/2011.09201v1#bib.bib128 ""), [129](https://arxiv.org/html/2011.09201v1#bib.bib129 "")\] |
| Instant Replays |  | • | • | \[ [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\] |
| Persistence |
| Trails |  |  | • | \[ [109](https://arxiv.org/html/2011.09201v1#bib.bib109 ""), [124](https://arxiv.org/html/2011.09201v1#bib.bib124 ""), [130](https://arxiv.org/html/2011.09201v1#bib.bib130 "")\] |
| Decals & Debris |  |  | • | \[ [131](https://arxiv.org/html/2011.09201v1#bib.bib131 ""), [124](https://arxiv.org/html/2011.09201v1#bib.bib124 "")\] |
| Follow-Through | • |  |  | \[ [132](https://arxiv.org/html/2011.09201v1#bib.bib132 "")\] |
| Fluid Interfaces | • |  | • | \[ [133](https://arxiv.org/html/2011.09201v1#bib.bib133 ""), [134](https://arxiv.org/html/2011.09201v1#bib.bib134 ""), [135](https://arxiv.org/html/2011.09201v1#bib.bib135 "")\] |
| Idle Animations |  |  | • | \[ [136](https://arxiv.org/html/2011.09201v1#bib.bib136 ""), [137](https://arxiv.org/html/2011.09201v1#bib.bib137 ""), [132](https://arxiv.org/html/2011.09201v1#bib.bib132 "")\] |
| Scene Framing |
| Points of Interest |  |  | • | \[ [138](https://arxiv.org/html/2011.09201v1#bib.bib138 ""), [139](https://arxiv.org/html/2011.09201v1#bib.bib139 ""), [140](https://arxiv.org/html/2011.09201v1#bib.bib140 "")\] |
| Dynamic Camera |  | • | • | \[ [141](https://arxiv.org/html/2011.09201v1#bib.bib141 ""), [142](https://arxiv.org/html/2011.09201v1#bib.bib142 ""), [143](https://arxiv.org/html/2011.09201v1#bib.bib143 ""), [144](https://arxiv.org/html/2011.09201v1#bib.bib144 ""), [145](https://arxiv.org/html/2011.09201v1#bib.bib145 ""), [146](https://arxiv.org/html/2011.09201v1#bib.bib146 ""), [68](https://arxiv.org/html/2011.09201v1#bib.bib68 "")\] |

### III-AMovement and Actions

The first category of design elements is concerned with movement of the character and other objects and with what happens if the character or an object collide. Controlling an on-screen character means navigating the game world and interacting with other characters and objects. Most writing on this aspect of game feel is concerned with 2D games. Dahl & Kraus \[ [87](https://arxiv.org/html/2011.09201v1#bib.bib87 "")\] provide a good starting point for exploring this topic. Normoyle and Jörg \[ [88](https://arxiv.org/html/2011.09201v1#bib.bib88 "")\] look at the trade-off between naturalness of movement and responsiveness of controls. Pignole \[ [89](https://arxiv.org/html/2011.09201v1#bib.bib89 "")\] describes 10 different aspects of how to design controls that feel responsive. While purely grounded in his own experience, these recommendations are easy to pick up and adapt to any game with 2D character movement. In a more extensive study, Fasterhold et al. \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 "")\] provide an overview of parameters for modelling running and jumping in games. This paper also contains an extensive literature review and insights into implementation details of various platformer games. The authors’ model features 21 different parameters to describe basic 2D movement. The key argument in this paper is that movement parameters afford \[ [147](https://arxiv.org/html/2011.09201v1#bib.bib147 "")\] level patterns. Mario’s \[ [148](https://arxiv.org/html/2011.09201v1#bib.bib148 "")\] jump curve, for example, excellently facilitates precision descends thanks to featuring terminal velocity that makes future positions easier to predict. Super Meat Boy \[ [149](https://arxiv.org/html/2011.09201v1#bib.bib149 "")\], as another example, abruptly interrupts a jump when the jump button is released, which makes hazardous ceiling elements a viable level design choice, since they can be avoided more easily than if the jump would continue. This is shown in Fig. [1](https://arxiv.org/html/2011.09201v1#S3.F1 "Fig. 1 ‣ III-A Movement and Actions ‣ III Game Feel Design Elements in Practice ‣ Designing Game Feel.A Survey").

![Refer to caption](https://arxiv.org/html/2011.09201v1/images/jumpcurve.png)Fig. 1: Super Meat Boy allows the player to interrupt a jump, when the jump button is released, to avoid ceiling elements. Image from \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 "")\]

Hamaluik \[ [150](https://arxiv.org/html/2011.09201v1#bib.bib150 "")\] used screen recordings to measure and reconstruct all relevant parameters for Super Mario World \[ [150](https://arxiv.org/html/2011.09201v1#bib.bib150 "")\]. Game Makers’ Toolkit (\[ [79](https://arxiv.org/html/2011.09201v1#bib.bib79 "")\], see also \[ [151](https://arxiv.org/html/2011.09201v1#bib.bib151 "")\]) runs a more informal analysis of the platformer Celeste \[ [152](https://arxiv.org/html/2011.09201v1#bib.bib152 "")\]. Celeste’s player controller’s source code was published \[ [153](https://arxiv.org/html/2011.09201v1#bib.bib153 "")\], allowing for even deeper analysis. Fiedler \[ [154](https://arxiv.org/html/2011.09201v1#bib.bib154 "")\] provides good starting points for implementing advanced controls and simulations.

#### III-A1 Basic Movement

This design element is concerned with the most basic parameters defining the interactive movement of an on-screen object, in most cases the player character. The parameters in question are speed, acceleration, friction, and breaking speed (see \[ [87](https://arxiv.org/html/2011.09201v1#bib.bib87 "")\], \[ [88](https://arxiv.org/html/2011.09201v1#bib.bib88 "")\] and \[ [89](https://arxiv.org/html/2011.09201v1#bib.bib89 "")\]). If the player can jump, the strength of the jump force as well as eventual air friction come into play, too. In the case of 2D games, Fasterhold et al. \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 "")\] list these and more parameters and how they are related. Saltsman \[ [95](https://arxiv.org/html/2011.09201v1#bib.bib95 "")\] covers movement in one specific platformer, Canabalt \[ [155](https://arxiv.org/html/2011.09201v1#bib.bib155 "")\], in greater detail. Pittman \[ [91](https://arxiv.org/html/2011.09201v1#bib.bib91 "")\] explains the mathematics behind jump mechanics. The exact requirements for tuning the movement of a game is often so deeply connected to the gameplay that it is hard to generalise. An in-depth analysis of the car ball game hybrid Rocket League \[ [156](https://arxiv.org/html/2011.09201v1#bib.bib156 "")\] is presented by Cone \[ [92](https://arxiv.org/html/2011.09201v1#bib.bib92 "")\] and demonstrates how steering of a vehicle is tuned in similar ways to platformer movement.

#### III-A2 Gravity

The strength of gravity defines how much force pushes an object towards the ground. Games rarely feature earth-like gravity, opting for higher values instead, in order to create a more controlled feeling. Fasterhold et al. \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 "")\] lists the strength of gravity for a number of platformer games. Earth has a gravity of 9.807 m/s2s^{2}, whereas Super Meat Boy, assuming that the character is 1 meter tall, has a gravity of 41 m/s2s^{2} and Super Mario Bros. even features 91.28 m/s2s^{2}\[ [93](https://arxiv.org/html/2011.09201v1#bib.bib93 "")\]. Gravity is used as a sophisticated game mechanic in Super Mario Galaxy \[ [157](https://arxiv.org/html/2011.09201v1#bib.bib157 "")\], where the character can jump from planet to planet and always aligns appropriately with the surface of the cosmic body. Alessi \[ [94](https://arxiv.org/html/2011.09201v1#bib.bib94 "")\] wrote up an explanation and prototypical implementation of this gravity system.

#### III-A3 Terminal Velocity

The existence of terminal velocity in a movement system means that a falling object does not perpetually get faster. It stops to accelerate at a predefined speed, the terminal velocity. As mentioned above, Mario’s \[ [148](https://arxiv.org/html/2011.09201v1#bib.bib148 "")\] jump curve \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 "")\] facilitates precision descends thanks to terminal velocity. The additional predictability, that results from the curve becoming a line, supports precision.

#### III-A4 Coyote Time

![Refer to caption](https://arxiv.org/html/2011.09201v1/images/building.png)Fig. 2: Illustration of ‘Coyote Time’ in Canabalt \[ [155](https://arxiv.org/html/2011.09201v1#bib.bib155 "")\], showing the extra distance from the building where a jump is still accepted. Image from \[ [95](https://arxiv.org/html/2011.09201v1#bib.bib95 "")\]

The term ‘Coyote Time’ refers to a movement system that allows a player to still instigate a jump a short time span after running off a cliff111



The name ‘Coyote Time’ is based on the coyote in the Road Runner series, a character who possessed the power to only fall from a cliff after realising he had been running on thin air for a while.. It is perhaps the most famous example of supporting the intent of the player. A detailed account of its technical implementation in the minimal platforming game Canabalt \[ [155](https://arxiv.org/html/2011.09201v1#bib.bib155 "")\] can be found in \[ [95](https://arxiv.org/html/2011.09201v1#bib.bib95 "")\], shown in Fig. [2](https://arxiv.org/html/2011.09201v1#S3.F2 "Fig. 2 ‣ III-A4 Coyote Time ‣ III-A Movement and Actions ‣ III Game Feel Design Elements in Practice ‣ Designing Game Feel.A Survey"). Coyote Time is sometimes called ‘Coyote Jump’ or ‘Ghost Jump’, for example in \[ [96](https://arxiv.org/html/2011.09201v1#bib.bib96 "")\]. A similar time-based accessibility feature can be found in Disc Room \[ [158](https://arxiv.org/html/2011.09201v1#bib.bib158 "")\], where hit boxes that would kill the player get activated only after a delay of up to 50 milliseconds.

#### III-A5 Invincibility Frames

Short time spans where the player character is invincible. They are a side-effect of player actions like rolling, dodging, respawning, or attacking. SmashPedia \[ [97](https://arxiv.org/html/2011.09201v1#bib.bib97 "")\] lists 23 different cases of invincibility in Super Smash Bros. Ultimate \[ [159](https://arxiv.org/html/2011.09201v1#bib.bib159 "")\], a fighting game, alone. These moments of invincibility are useful for normal players but essential to competitive play and speedrunning. Mora-Zamora and Brenes-Villalobos \[ [98](https://arxiv.org/html/2011.09201v1#bib.bib98 "")\] described invincibility frames as a tool for balancing risk and reward. Siu et al. \[ [99](https://arxiv.org/html/2011.09201v1#bib.bib99 "")\] mention invincibility frames as part of boss fights. The purpose for introducing a few frames of invincibility is usually to support the player, to give them a carefully measured amount of safety that allows them to pull off even more spectacular actions than if they were vulnerable all the time.

#### III-A6 Corner Correction

Adjusting a character’s path if it would otherwise get stuck in level geometry. This is a common convenience in games where walking is a large part of gameplay. Gilbert \[ [100](https://arxiv.org/html/2011.09201v1#bib.bib100 "")\] analyses how it is implemented in The Legend of Zelda \[ [160](https://arxiv.org/html/2011.09201v1#bib.bib160 "")\] and Doucet \[ [27](https://arxiv.org/html/2011.09201v1#bib.bib27 "")\] offers a detailed analysis of its implementation in Super Mario Bros. 3 \[ [148](https://arxiv.org/html/2011.09201v1#bib.bib148 "")\].

#### III-A7 Collision Shapes

Collision detection finds overlaps between objects on screen, informing the game when a collision between them occurs. At the heart of collision detection are hit boxes, also called ‘colliders’ with specific shapes222



The authors are aware that this is a slight simplification, but think this description is sufficiently detailed for the purpose of this paper.. In the case of a 2D game, collision shapes are usually either circles, triangles, or rectangles. In 3D games, they are often spheres, boxes, or capsules. The individual shapes and extents of hit boxes, as well as the coherence between collision shapes and visible game elements, determine how collisions between game elements feel to the player \[ [101](https://arxiv.org/html/2011.09201v1#bib.bib101 "")\].

#### III-A8 Button Caching

A common player support function is ‘Jump Buffering’ \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 "")\] (and other forms of button caching), where the controller code buffers the pressing of the jump button for a few frames and executes the jump after the player has landed. Mario \[ [161](https://arxiv.org/html/2011.09201v1#bib.bib161 "")\] caches the button for 1-2 frames and Braid \[ [162](https://arxiv.org/html/2011.09201v1#bib.bib162 "")\] for 0.23 seconds \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 "")\].

#### III-A9 Spring-locked Modes

This is a user interface modality that is actively maintained by the player by pressing and holding a button. The object they are interacting with ‘switches mode’ for the duration that the button is held. This form of interaction is what Raskin \[ [102](https://arxiv.org/html/2011.09201v1#bib.bib102 "")\] calls a ‘quasimode’ and Johnson & Engelbeck \[ [103](https://arxiv.org/html/2011.09201v1#bib.bib103 "")\] refer to as ‘spring-locked mode’. It is often used in order to create anticipation. Games where the player charges an action before unleashing it fall into this category (e.g. Angry Birds \[ [163](https://arxiv.org/html/2011.09201v1#bib.bib163 "")\], SSX Tricky \[ [164](https://arxiv.org/html/2011.09201v1#bib.bib164 "")\], R-Type \[ [165](https://arxiv.org/html/2011.09201v1#bib.bib165 "")\]). Exiting the mode can have a specific effect like the charged shot in R-Type (see \[ [166](https://arxiv.org/html/2011.09201v1#bib.bib166 "")\]), or it just returns the player to the previous mode, like in the case of Dark Souls \[ [167](https://arxiv.org/html/2011.09201v1#bib.bib167 "")\] where the player raises the shield by pushing a button and lowers it by lifting their finger again. Drag and drop is another example of a spring-locked mode that is common in game interfaces.

Further, some games mirror the action of the player and the action of the character. Jumping in the snowboarding game SSX Tricky \[ [164](https://arxiv.org/html/2011.09201v1#bib.bib164 "")\], for example, is charged by pressing a button and holding it. The character jumps at the moment when the button is released, an aesthetic choice that greatly affects game feel. This implementation creates a relation between the game mechanic and the physical action of the player \[ [5](https://arxiv.org/html/2011.09201v1#bib.bib5 "")\].

#### III-A10 Assisted Aiming

Some games help a player with the precision required for aiming. Many shooter games support assisted aiming (e.g. Gears of War \[ [168](https://arxiv.org/html/2011.09201v1#bib.bib168 "")\]) and driving games come with countless driving assistance settings333



DiRT 3 \[ [169](https://arxiv.org/html/2011.09201v1#bib.bib169 "")\] features ABS, Dynamic Racing Line, Stability Control, Auto Steer, Corner Braking and Throttle Management — very similar systems can be found in real cars.. These features can be regarded as examples of what Doucet calls ‘oil’ \[ [27](https://arxiv.org/html/2011.09201v1#bib.bib27 "")\], the measured exploitation of ‘illusion of control’, as discussed by Kayali & Purgathofer \[ [104](https://arxiv.org/html/2011.09201v1#bib.bib104 "")\]. An extensive description of a particular case of assisted aiming for console shooters can be found in Zimmerman \[ [105](https://arxiv.org/html/2011.09201v1#bib.bib105 "")\].

### III-BEvent Signification

This class of design elements signifies gameplay-relevant events. Similar techniques are used when events are triggered by the player as when they are triggered by the system. All techniques listed in this section are only active for a limited duration. It is usual to layer several of them depending on the significance and kind of event being communicated.

#### III-B1 Screen Shake

This effect, which is sometimes also referred to as ‘camera shake’, shakes the camera (or the world) in order to communicate a significant event –– often an explosion, taking damage, or similar high-impact actions. Nijman \[ [8](https://arxiv.org/html/2011.09201v1#bib.bib8 "")\] and Jonasson & Purho \[ [70](https://arxiv.org/html/2011.09201v1#bib.bib70 "")\] both mention screen shake. Lerping and easing functions \[ [106](https://arxiv.org/html/2011.09201v1#bib.bib106 ""), [107](https://arxiv.org/html/2011.09201v1#bib.bib107 "")\] form the technical basis of the implementation of dynamic cinematography like screen shake. Instead of randomly moving the camera, a carefully selected easing function in a semantically significant direction, communicates more information about what has happened, giving the designer more control over what is communicated to the player.

#### III-B2 Recoil

When the player character is slightly pushed back, e.g. after firing a gun. Nijman \[ [8](https://arxiv.org/html/2011.09201v1#bib.bib8 "")\] describes an implementation in detail, where the firing of a bullet shakes the screen while also pushing the player character a few pixels back, resulting in a side-effect with gameplay implications. A more sophisticated way of achieving something similar is to use inverse kinematics. God of War \[ [170](https://arxiv.org/html/2011.09201v1#bib.bib170 "")\] uses inverse kinematics to model the reaction of the body of the player character when catching his axe \[ [108](https://arxiv.org/html/2011.09201v1#bib.bib108 "")\]. Not only the arm but the whole body of the character reacts.

#### III-B3 One-shot Particles

Particle systems \[ [109](https://arxiv.org/html/2011.09201v1#bib.bib109 ""), [110](https://arxiv.org/html/2011.09201v1#bib.bib110 ""), [111](https://arxiv.org/html/2011.09201v1#bib.bib111 "")\] are a staple of juicy game design \[ [112](https://arxiv.org/html/2011.09201v1#bib.bib112 ""), [70](https://arxiv.org/html/2011.09201v1#bib.bib70 "")\]. Practitioners apply them according to context and sophisticated examples feature many layers of particles accompanied by other techniques from this list, like screen shake and sound effects. Some simple particle systems can be faked by using textures (see \[ [8](https://arxiv.org/html/2011.09201v1#bib.bib8 "")\]). Rockenbeck \[ [113](https://arxiv.org/html/2011.09201v1#bib.bib113 "")\] demonstrates a state-of-the-art particle pipeline and explains how it was used in inFAMOUS: Second Son \[ [171](https://arxiv.org/html/2011.09201v1#bib.bib171 "")\]. Vainio \[ [114](https://arxiv.org/html/2011.09201v1#bib.bib114 "")\] describes how this particular system fits into the wider picture of a modern visual effect pipeline.

#### III-B4 Cooldown Visualisation

Cooldown time is the time it takes after use until and ability in a game can be used again. Its visualisation has to communicate how long the ability is unavailable as well as the moment it becomes available again. Cooldowns are mostly found in role-playing games, where they govern how often spells can be cast or a character ability can be used, and in strategy games where they govern how long it takes to e.g. erect a building. The duration of the cooldown is communicated by greying out the button that triggered an action and gradually revealing it again over the cooldown time. A short overview can be found in \[ [115](https://arxiv.org/html/2011.09201v1#bib.bib115 "")\] and \[ [116](https://arxiv.org/html/2011.09201v1#bib.bib116 "")\]. A detailed study of optimising the display of cooldowns in a custom user interface can be found in \[ [117](https://arxiv.org/html/2011.09201v1#bib.bib117 "")\]. Generally speaking, cooldown visualisations share a lot with progress indicators (see also \[ [118](https://arxiv.org/html/2011.09201v1#bib.bib118 "")\]).

#### III-B5 Ragdoll Physics

Modelling a character using joints, forces, and rigid bodies, instead of animations. Switching from animation to ragdoll is a staple for communicating that a character has died. Jakobsen \[ [119](https://arxiv.org/html/2011.09201v1#bib.bib119 "")\] wrote about this design element before the name ‘ragdoll’ became common. Swink describes \[ [1](https://arxiv.org/html/2011.09201v1#bib.bib1 "")\] how they used ragdoll physics in the game Off-road Velociraptor Safari \[ [172](https://arxiv.org/html/2011.09201v1#bib.bib172 "")\]\[ [173](https://arxiv.org/html/2011.09201v1#bib.bib173 "")\]. He also lists a number of games that derive their whole appeal from ragdoll physics.

#### III-B6 Colour Flashing

This simple but effective technique communicates state changes by overlaying an on-screen graphical object with a colour. Perry \[ [68](https://arxiv.org/html/2011.09201v1#bib.bib68 "")\] mentions several practical examples of how to indicate damage or other state changes by e.g. flashing the object colour or flashing the whole screen. A special case is flashing an on-screen element that was destroyed before it gets removed from the screen, a technique that creates persistence over time, which is discussed in regards to several other design elements further down this paper. Research indicates that specific colour choices carry different semantic meanings \[ [120](https://arxiv.org/html/2011.09201v1#bib.bib120 "")\]. Nijman \[ [8](https://arxiv.org/html/2011.09201v1#bib.bib8 "")\] demonstrates flashing the enemy sprite white for a frame or two in a 2D platformer to emphasise a hit.

#### III-B7 Impact Markers

In the absence of a player sprite, for example in first-person games, other visual elements have to be used to indicate events. In action games, especially in shooters, getting shot at is information of prime importance. Stephenson \[ [121](https://arxiv.org/html/2011.09201v1#bib.bib121 "")\] lists several different techniques for signifying direction, kind, and strength of impact, illustrated by game examples. Song \[ [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\] explains a number of different elements, most of them covered in their own sections in this overview, specifically for signifying impact. A blend of the colour flashing mentioned above and impact marking is for example achieved with impact lighting, where a light source gets created on impact that illuminates the characters from the point of impact \[ [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\].

#### III-B8 Hit Stop

Animations pause for a brief moment on impact. This effect, sometimes also called ‘Impact Freeze’, is a staple in fighting and action games and maybe the best researched phenomenon in the area of impact feedback visualisations \[ [122](https://arxiv.org/html/2011.09201v1#bib.bib122 ""), [123](https://arxiv.org/html/2011.09201v1#bib.bib123 ""), [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\]. Brown \[ [79](https://arxiv.org/html/2011.09201v1#bib.bib79 "")\] describes frame freezes and their design purposes in Celeste \[ [152](https://arxiv.org/html/2011.09201v1#bib.bib152 "")\]. Hit stops are usually introduced in order to communicate feedback about the severity of a hit, but can go further than that. Samurai Gunn \[ [174](https://arxiv.org/html/2011.09201v1#bib.bib174 "")\] features a subtle variation of impact freeze when a character lands on a platform, ‘stunning’ it for a few frames depending on the height it dropped from. Kratos’ axe in God of War \[ [170](https://arxiv.org/html/2011.09201v1#bib.bib170 "")\] freezes when it hits an enemy \[ [108](https://arxiv.org/html/2011.09201v1#bib.bib108 "")\].

#### III-B9 Audio Feedback

Acoustic channels of communication are a very common way of layering information on top of the graphical representation of a game. Apart from supporting immersion, audio can also communicate events that happen off screen. Berbece \[ [124](https://arxiv.org/html/2011.09201v1#bib.bib124 "")\] not only highlights the importance of sound effects but also explains how to layer several in order to create an easy to read soundscape. Audio feedback in interaction design for games can be regarded as a specific application of Sonic Interaction Design \[ [125](https://arxiv.org/html/2011.09201v1#bib.bib125 "")\]. Nacke and Grimshaw \[ [126](https://arxiv.org/html/2011.09201v1#bib.bib126 "")\] present research on affective and aesthetic impact of game sound. Overall, sound design is a huge part of game development and offers a rich set of tools and techniques (see e.g., \[ [175](https://arxiv.org/html/2011.09201v1#bib.bib175 "")\], \[ [176](https://arxiv.org/html/2011.09201v1#bib.bib176 "")\]) that are relevant in relation to game feel but too general to cover in this paper.

#### III-B10 Haptic Feedback

Haptic feedback, often called ‘force feedback’ or simply ‘controller vibration’, is a standard functionality of console controllers and built into most mobile phones. It is usually used for emphasis and not as a critical component to interactivity. Orozco et al. \[ [127](https://arxiv.org/html/2011.09201v1#bib.bib127 "")\] provide a complete overview of the history and significance of haptic feedback for games. Most platform holders have clear guidelines about when to use haptic feedback, which means that platform-exclusive titles often exploit these features better than multi-platform games (see \[ [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\]).

### III-CTime Manipulation

While hit boxes and movement are spatial, the other dimension often exploited for game feel is time. Zagal and Mateas \[ [177](https://arxiv.org/html/2011.09201v1#bib.bib177 "")\] give a good overview of game time from an analytical standpoint. The design intent of time manipulation is most often to amplify the experience or to clarify the intensity or direction of an impact. In this section, game time refers to the time of the world simulated in the game whereas real time refers to time in the real world.

All examples in this game have to do with slowing down or pausing time because games very rarely speed up time. SSX Tricky \[ [164](https://arxiv.org/html/2011.09201v1#bib.bib164 "")\] and Bubble Bobble \[ [178](https://arxiv.org/html/2011.09201v1#bib.bib178 "")\] are among the few examples of games that do so. In Drawkanoid \[ [179](https://arxiv.org/html/2011.09201v1#bib.bib179 "")\], a brick destruction game, time speeds up while the player is waiting for the ball to return from a brick’s destruction. No research about speeding up time has been found, so this chapter only covers the rest of the cases of time manipulation.

#### III-C1 Freeze Frames

The whole screen is frozen for a short duration, often just a few frames. The difference to hit stops, described above, is that those are a localised phenomenon where one or more on-screen objects get paused, excluding them from the temporal flow of the rest of the game, whereas freeze frames technically halt the progression of game time. Song \[ [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\] describes how some games pick the best frame of an animation to freeze on and what gameplay implications frame freezes have.

#### III-C2 Slow Motion

Slowing down game time for a short duration. Whether applied to replays or to linear game time, slow motion helps to communicate events that would otherwise evolve too fast to be fully perceived by the player. A blend of impact freeze and slow motion can be found in Holedown \[ [180](https://arxiv.org/html/2011.09201v1#bib.bib180 "")\]. The game does not fully freeze on impact, but slows down time to a near halt for a few frames instead. The ability to use slow motion to make an attack look more powerful is mentioned in Song \[ [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\].

#### III-C3 Bullet Time

Bullet time \[ [128](https://arxiv.org/html/2011.09201v1#bib.bib128 "")\] is spring-locked slow motion. It serves as a way to pull off more spectacular or precise actions than the player could accomplish in real-time. They empower the player, amplifying their actions. Porter \[ [129](https://arxiv.org/html/2011.09201v1#bib.bib129 "")\] gives an overview of the history of bullet time in movies as well as games. Technically, bullet time is often eased in and out and maintained for a certain amount of time. This can be modelled using attack-decay-sustain-release ‘ADSR’ curves (see \[ [1](https://arxiv.org/html/2011.09201v1#bib.bib1 "")\] for details on their various applications).

Turn-based games like XCOM \[ [181](https://arxiv.org/html/2011.09201v1#bib.bib181 "")\] and pause-action games like Fallout \[ [182](https://arxiv.org/html/2011.09201v1#bib.bib182 "")\], specifically the V.A.T.S. mechanic, pause time while the player queues actions and subsequently advance it in order to show the results of these actions. This pattern of letting a user plan a move without time pressure and then showing a lengthy and potentially intense payoff in real time or even slow motion is quite similar to the temporal dynamics of match-three games like Bejeweled \[ [183](https://arxiv.org/html/2011.09201v1#bib.bib183 "")\]. This particular way of manipulating game time could be regarded as an extreme form of bullet time because it essentially fulfils the same purpose and has the same structure.

#### III-C4 Instant Replay

Replays of something that has just happened \[ [81](https://arxiv.org/html/2011.09201v1#bib.bib81 "")\], often slowed down, are triggered automatically. The application of this technique, that originally comes from sports television, is not researched. The fact that replays communicate pivotal moments of gameplay means that replays might help players in identifying moments of importance.

### III-DPersistence

Another aspect related to time is persistence, which could also be called ‘temporal consistency’. Broadly speaking, this cluster of techniques uses spatial representation to communicate time-dependent information. The problem being solved is, in the words of Bay-Wei and Ungar: “When the user cannot visually track the changes occurring in the interface, the causal connection between the old state of the screen and the new state of the screen is not immediately clear.” \[ [135](https://arxiv.org/html/2011.09201v1#bib.bib135 "")\].

From skid marks to particle trails, the purpose of the techniques listed below is always to encode information about the past in the currently displayed image. Even motion blur, which is mentioned further down the list in [III-E](https://arxiv.org/html/2011.09201v1#S3.SS5 "III-E Scene Framing ‣ III Game Feel Design Elements in Practice ‣ Designing Game Feel.A Survey"), not only prevents temporal aliasing, but retains the history of movement as a lingering after-image. Very often, the below design elements are used in combination and additionally to other elements that communicate the dynamics of the on-screen action. An example of this can be seen in Fig. [3](https://arxiv.org/html/2011.09201v1#S3.F3 "Fig. 3 ‣ III-D Persistence ‣ III Game Feel Design Elements in Practice ‣ Designing Game Feel.A Survey").

![Refer to caption](https://arxiv.org/html/2011.09201v1/images/samuraigunn.jpg)Fig. 3: An intense battle in Samurai Gunn \[ [174](https://arxiv.org/html/2011.09201v1#bib.bib174 "")\], the history of motion and battle encoded in the white sword path, the bullet trajectory, smoke particles from where the gun was fired, as well as blood and gore traces all over the level.

Temporal consistency also means a consistent frame rate. While this article neither covers technical details nor how bugs and implementation weaknesses affect game feel, it is important to mention that frame rate and especially the duration of the physics time step have a huge influence on how reactive a game feels. Swink also stresses this when he maintains that “real-time control relies on sustaining three time thresholds: the impression of motion, perceived instantaneous response and continuity of response” \[ [1](https://arxiv.org/html/2011.09201v1#bib.bib1 "")\]. Fiedler \[ [184](https://arxiv.org/html/2011.09201v1#bib.bib184 "")\] provides an excellent introduction into how to implement a stable and reliable feeling core game loop. Cone \[ [92](https://arxiv.org/html/2011.09201v1#bib.bib92 "")\] describes in depth how they solved countless challenges of running a stable physical simulation of the fast moving cars and ball in Rocket League \[ [156](https://arxiv.org/html/2011.09201v1#bib.bib156 "")\].

Overall, temporal consistency techniques are employed in order to allow the player to see either past events or very short events for a longer time. They can be modelled in a diegetic or non-diegetic way (see \[ [185](https://arxiv.org/html/2011.09201v1#bib.bib185 "")\]), which in this case does not mean that they are modelled in world space or on the interface layer, but rather that the world space is used as an interface layer by attaching trails and particle effects to objects that would be invisible in the real world. The key role of these techniques, from a design perspective, is to support the player.

#### III-D1 Trails

Traces left behind a moving object. The most prevalent example of temporal persistence in games is found in particle systems \[ [109](https://arxiv.org/html/2011.09201v1#bib.bib109 "")\] and trails. Particle systems that amplify the result of player interaction extend the time that result is visible on screen, creating a dynamic and, for a short while, persistent representation of the player’s interaction history, which could be seen as trails of a player interaction. Particle systems that leave a trail in space as well as time allow the reconstruction of the trajectory of movement of an object. These techniques increase the readability of a scene for the player as well as spectators \[ [124](https://arxiv.org/html/2011.09201v1#bib.bib124 ""), [130](https://arxiv.org/html/2011.09201v1#bib.bib130 "")\].

#### III-D2 Decals & Debris

Decals and debris are stationary traces left in the game world. Birdwell \[ [131](https://arxiv.org/html/2011.09201v1#bib.bib131 "")\] mentions how Valve used decals to acknowledge the actions of the player. Berbece \[ [124](https://arxiv.org/html/2011.09201v1#bib.bib124 "")\] explains a specific design case, where the player character leaves a blotch of paint after being eliminated from a match, in great detail.

#### III-D3 Follow-Through

Follow-through, the effect where a part of an animated character or object keeps moving after the main motion has stopped \[ [132](https://arxiv.org/html/2011.09201v1#bib.bib132 "")\] is also a way of encoding the history of the motion in subsequent frames. This time, the encoding is not done as a non-diegetic overlay or abstraction, but as movement of parts of the object in question.

#### III-D4 Fluid Interfaces

Introduced by Apple in 2018 \[ [133](https://arxiv.org/html/2011.09201v1#bib.bib133 "")\], ‘Fluid Interfaces’ aim at offering more natural interaction forms based on aligning and understanding of intent with physical simulation. They aim at maintaining smooth continuity whenever possible. Gitter \[ [134](https://arxiv.org/html/2011.09201v1#bib.bib134 "")\] summarises the original presentation and provides a number of code examples. Continuity comes from temporal persistence and spatial coherence, for example when a user interface transition retains aspects of the previous view, while transitioning to a new one \[ [135](https://arxiv.org/html/2011.09201v1#bib.bib135 "")\]. The same is true for coins that are earned at the end of a round, flying into a virtual purse, each featuring a short trail. Or when representations of pick-ups linger on screen after being collected and then attach to the character.

#### III-D5 Idle Animations

Small loops of animation that play after a while once the player stops interacting with their character — when the player character enters the ‘idle’ state \[ [136](https://arxiv.org/html/2011.09201v1#bib.bib136 ""), [137](https://arxiv.org/html/2011.09201v1#bib.bib137 "")\]. They are superficial in relation to the core mechanics of the game but nevertheless contribute to the overall experience of a game. Idle animations are of course not triggered directly by the player. On the contrary, they are triggered indirectly by not interacting. Idle animations enhance the illusion of life \[ [132](https://arxiv.org/html/2011.09201v1#bib.bib132 "")\] of the character.

### III-EScene Framing

![Refer to caption](https://arxiv.org/html/2011.09201v1/images/cameraPos.png)Fig. 4: Character camera-window in Rastan Saga \[ [186](https://arxiv.org/html/2011.09201v1#bib.bib186 "")\], the camera only moves when Rastan pushes against this window. Image from \[ [139](https://arxiv.org/html/2011.09201v1#bib.bib139 "")\]

In racing and flying games, there is a tight link between the field of view, motion blur intensity, and speed. This link defines how the game feels. In 2D games, a variety of techniques are used to enable specific game mechanics, support specific player behaviours, and give specific feedback to players. Keren \[ [138](https://arxiv.org/html/2011.09201v1#bib.bib138 ""), [139](https://arxiv.org/html/2011.09201v1#bib.bib139 "")\] assembled a great overview of these techniques, and example of a camera window can be seen in Fig. [4](https://arxiv.org/html/2011.09201v1#S3.F4 "Fig. 4 ‣ III-E Scene Framing ‣ III Game Feel Design Elements in Practice ‣ Designing Game Feel.A Survey"). Eiserloh \[ [187](https://arxiv.org/html/2011.09201v1#bib.bib187 "")\] describes the effects of the maths behind camera controls on game feel from the perspective of a practitioner.

#### III-E1 Points of Interest

Gameplay-relevant elements highlighted on and off screen. A lot of games have sophisticated techniques to direct the gaze of the player by gradually transitioning the camera focus from the player character to a point of interest. A good example of this is mentioned by Keren \[ [138](https://arxiv.org/html/2011.09201v1#bib.bib138 ""), [139](https://arxiv.org/html/2011.09201v1#bib.bib139 "")\] and explained in further detail by Meyer \[ [140](https://arxiv.org/html/2011.09201v1#bib.bib140 "")\] on hand of his game Insanely Twisted Shadow Planet \[ [188](https://arxiv.org/html/2011.09201v1#bib.bib188 "")\], an exploration game.

#### III-E2 Dynamic Camera

Articles by Christie et al. \[ [141](https://arxiv.org/html/2011.09201v1#bib.bib141 "")\], Haigh-Hutchinson \[ [142](https://arxiv.org/html/2011.09201v1#bib.bib142 ""), [143](https://arxiv.org/html/2011.09201v1#bib.bib143 ""), [144](https://arxiv.org/html/2011.09201v1#bib.bib144 "")\], and Perry \[ [68](https://arxiv.org/html/2011.09201v1#bib.bib68 "")\] provide good starting points for game camera design. Burelli \[ [145](https://arxiv.org/html/2011.09201v1#bib.bib145 "")\] and Yannakakis et al. \[ [146](https://arxiv.org/html/2011.09201v1#bib.bib146 "")\] examine affective reaction and camera handling. Burelli concludes that interactivity is the key difference between film cinematography and game cinematography, since his study “demonstrates how the impact on the player experience is mediated by her interaction.“ \[ [145](https://arxiv.org/html/2011.09201v1#bib.bib145 "")\]

TABLE II: Game Feel Design Domains

| Design Domain | Physicality | Amplification | Support |
| Polishing Task | Tuning | Juicing | Streamlining |
| Description | |     |
| --- |
| Setting parameters to specify |
| the behaviour of objects. | | |     |
| --- |
| Adding feedback to |
| emphasise and amplify. | | |     |
| --- |
| Acting on player intent |
| by interpreting the input in |
| context of the gameplay situation. | |

### III-FSummary

This list of elements of game feel design is by no means exhaustive. We hope that future researchers will use it as a starting point for further exploration of the topic area. Nevertheless, if a game designer concerns themselves with the above design elements and regards them as a collection of methods to draw from, they will be supported in intentionally conveying a game feel they desire.

## IV Game Feel

The classes of game feel design listed above are connected and, just like Jonasson and Purho keep adding juice in their talk \[ [70](https://arxiv.org/html/2011.09201v1#bib.bib70 "")\], most moments of interacting with a game are shaped by the presence of several layers of feedback. A good example is the backstabbing attack in Dark Souls \[ [167](https://arxiv.org/html/2011.09201v1#bib.bib167 "")\], an action role-playing game. This attack sequence is triggered by sneaking up to a foe from behind and attacking its back. If successful, the camera locks in place, the enemy and the player character get positioned in predetermined spots relative to each other, and weapon-dependent animations and sounds are played. The player is invincible for the duration of the sequence. The design purpose of this feedback set is to give weight to the effect of a single, but carefully prepared, button press. In general, game designers are most concerned with the quality of interactivity in the core loop \[ [15](https://arxiv.org/html/2011.09201v1#bib.bib15 "")\] of a game, but that does not mean that they do not employ a lot of the techniques presented in this paper in different parts of the game.

In the following paragraphs we describe three design domains and what the polishing in these domains entails. The domains are physicality, amplification, and support. Polishing means something different for each of them. This diversification of polish helps us to talk about design feel in a precise manner. Table [II](https://arxiv.org/html/2011.09201v1#S3.T2 "TABLE II ‣ III-E2 Dynamic Camera ‣ III-E Scene Framing ‣ III Game Feel Design Elements in Practice ‣ Designing Game Feel.A Survey") describes the three domains and their associated polishing task. This is not a complete list of all design aspects of games but intended as a starting point for further research into the relation between design intent and game feel.

### IV-ATuning Physicality

The first design domain is the experience of physicality of the system. Swink’s \[ [1](https://arxiv.org/html/2011.09201v1#bib.bib1 "")\] whole concept of Game Feel rests on this pillar. Designers shape the feel of the game by tuning the parameters of the physical simulation \[ [90](https://arxiv.org/html/2011.09201v1#bib.bib90 "")\]. Depending on how much the game’s core loop relies on the joy of movement, attention to detail can become extremely valuable \[ [95](https://arxiv.org/html/2011.09201v1#bib.bib95 "")\]. Tuning physicality leads to finely calibrated movement parameters, gravity, and collision shapes. The experience of control is enhanced by additionally applying screen shake, recoil, and knock-back. Appropriate audio design and haptic feedback additionally communicate the physical dynamics of gameplay. It is important to note that for the player experience, it often does not matter whether physicality is simulated or faked. Tweening \[ [189](https://arxiv.org/html/2011.09201v1#bib.bib189 "")\], specifically with easing functions \[ [106](https://arxiv.org/html/2011.09201v1#bib.bib106 ""), [107](https://arxiv.org/html/2011.09201v1#bib.bib107 "")\], and various other animation techniques \[ [190](https://arxiv.org/html/2011.09201v1#bib.bib190 ""), [132](https://arxiv.org/html/2011.09201v1#bib.bib132 "")\] can be used to communicate the desired weight of an object. These can be far easier to read as well as implement than a realistic representation. Generally, tuning exploits our knowledge about physicality in order to make interactivity more predictable.

### IV-BJuicing Amplification

The second design domain is amplification. It primarily serves two purposes: first, it empowers the player. Second, it communicates the importance of events. Empowerment can take many shapes and forms. Bullet time, one of the most iconic ways for amplifying player actions, empowers the player to pull off more precise activities than they could if time progressed linearly. At the same time it also signifies that the player has the opportunity to have greater impact during this time interval than during the rest of the game. Impact freeze on the other hand is mostly used to signify a successful interaction. Charging, which is based on spring-locking, is a technique that balances the reward of empowerment — the longer the player presses a button, the bigger the impact — with risk \[ [191](https://arxiv.org/html/2011.09201v1#bib.bib191 "")\].

Juicing the amplification means providing adequate feedback to player actions and creating coherence between different aspects of feedback. Audio, haptic feedback, particle systems, and animation are the most important sources of juiciness. Juice requires exact timing of particle emissions, freeze frames, audio cues, perspective changes, and potentially many more parts of the game. While the power-fantasy aspect of action games thrives on amplification but a lot of playful experiences profit from it. Juicing empowers the player by structuring the reaction of the system to input in a way that amplifies actions adequately.

### IV-CStreamlining Support

The third design domain is support. It covers techniques that help the player to execute a challenging action or just provide convenience. Doucet \[ [27](https://arxiv.org/html/2011.09201v1#bib.bib27 "")\] calls the polishing of support mechanics ‘oiling’, whereas we adopt the less slick term ‘streamlining’ that he also mentions in his article. Streamlining prevents player frustration by making sure that the player receives help where it supports the experience of the game. Doucet lists a couple of examples of how games can be streamlined in order to support the player. The goal of streamlining is to make rough edges of the game disappear, in order to provide a smooth player experience. Most of the time, the player does not want to realise how much the game is supporting them. “If you do this right then the player wont suspect a thing” says Pulver \[ [192](https://arxiv.org/html/2011.09201v1#bib.bib192 "")\]. Disc Room’s \[ [158](https://arxiv.org/html/2011.09201v1#bib.bib158 "")\] designer Nijman explains that their use of Coyote Time “has a bunch of good side effects that make it seem like the game knows your intentions.” \[ [101](https://arxiv.org/html/2011.09201v1#bib.bib101 "")\]. A large portion of the 5400 lines of code that comprises the Celeste character controller is dedicated to providing forgiveness for the player (see \[ [79](https://arxiv.org/html/2011.09201v1#bib.bib79 "")\] and \[ [193](https://arxiv.org/html/2011.09201v1#bib.bib193 "")\] for an overview of a few of the features implemented for this purpose). This results in controls that are “working on the player’s intent rather than making a precise simulation” \[ [79](https://arxiv.org/html/2011.09201v1#bib.bib79 "")\]. A much more sophisticated approach was presented by Zimmerman \[ [105](https://arxiv.org/html/2011.09201v1#bib.bib105 "")\] when he describes the selection mechanism for aiming targets when landing on the ground as one-dimensional optimisation problem.
Elements that enhance temporal consistency offer a different kind of support. Trails that follow projectiles are an example of temporal feedback, since they help to determine the speed and direction of the object by documenting its history. Often particle systems in games have a similar role, and so do skid marks or trails in simulated mud or water. They serve as a visualisation of the past and as an externalisation of information that the player would otherwise have to memorise. That makes them in many cases a service for the player. Continuously displayed game elements like status effects and idle animations similarly take the burden of remembering the state from the player by showing it in the game instead.

Streamlining is not meant to explicitly inform the player about changes in the game’s state. Rather, it is about making the player experience as smooth as adequate. Techniques from User Experience Design \[ [194](https://arxiv.org/html/2011.09201v1#bib.bib194 ""), [195](https://arxiv.org/html/2011.09201v1#bib.bib195 "")\] can be used for this purpose. A closely related cluster of research concerns game accessibility. While User Experience Design is concerned with setting up game development processes that encompasses user research, the role of accessibility is to widen the audience of games by providing guidelines and tools that make games accessible to players with various kinds of impairments \[ [196](https://arxiv.org/html/2011.09201v1#bib.bib196 ""), [197](https://arxiv.org/html/2011.09201v1#bib.bib197 "")\].

### IV-DDesigning Game Feel

Game feel design is minute design work that evokes affect. Affect is the reaction to the concretisation of the expectations towards the feedback of the system. It is subjective and highly dependent on context inside and outside the game. Streamlining, tuning, and even juicing are techniques that help with consciously designing interactive challenges at the heart of the player experience. Game feel is a shortcut for describing how this experience feels. If game feel design is the act of fine-tuning the relationship between expected and actual outcome of an interactive process then it must be regarded central to the game design process.

## V Future Research

Game feel is a value-neutral expression. While game designers, as well as scholars, are mostly concerned with what they refer to as ‘good game feel’ (see e.g. \[ [26](https://arxiv.org/html/2011.09201v1#bib.bib26 "")\]), the subjective nature of game feel and the need for “good negative moments” \[ [12](https://arxiv.org/html/2011.09201v1#bib.bib12 "")\] calls for a more holistic terminology. Those negative moments, if designed consciously, are a valid aesthetic choice, given that “aesthetics describes the desirable emotional responses evoked in the player, when she interacts with the game system” \[ [86](https://arxiv.org/html/2011.09201v1#bib.bib86 "")\]. Since game feel is the experience of a game’s aesthetic — following Hunicke’s use of that term — it spans visual elements, sound design, mechanics, as well as storytelling aspects. Continued exploration of these different game elements and how they contribute to game feel is a worthwhile research endeavour. Sound design stands out as as a field which demands to be researched further. Isolating the aspects that represent polish in different design domains would also be very worthwhile, for example in narrative design.

Tools that help with designing feedback, and game design tools in general, are an area where future research can lead to interesting new experiences. Recent advances have lead to tools for designing feedback \[ [71](https://arxiv.org/html/2011.09201v1#bib.bib71 ""), [72](https://arxiv.org/html/2011.09201v1#bib.bib72 "")\] or even generating it \[ [198](https://arxiv.org/html/2011.09201v1#bib.bib198 ""), [199](https://arxiv.org/html/2011.09201v1#bib.bib199 "")\]. AI agents and algorithms to help designers analyse and adjust game difficulty \[ [200](https://arxiv.org/html/2011.09201v1#bib.bib200 ""), [201](https://arxiv.org/html/2011.09201v1#bib.bib201 "")\] or the flow of game play and levels \[ [202](https://arxiv.org/html/2011.09201v1#bib.bib202 ""), [203](https://arxiv.org/html/2011.09201v1#bib.bib203 ""), [204](https://arxiv.org/html/2011.09201v1#bib.bib204 "")\] have been explored academically. Similar techniques and tools for assisting designers in creating the right feedback are needed.

Research on the effect of feedback on the readability of a game by an autonomous agent is similarly sparse for now. Most of the General Video Game Playing research \[ [205](https://arxiv.org/html/2011.09201v1#bib.bib205 ""), [206](https://arxiv.org/html/2011.09201v1#bib.bib206 ""), [207](https://arxiv.org/html/2011.09201v1#bib.bib207 ""), [208](https://arxiv.org/html/2011.09201v1#bib.bib208 ""), [209](https://arxiv.org/html/2011.09201v1#bib.bib209 "")\] is powered by the Video Game Description Language \[ [205](https://arxiv.org/html/2011.09201v1#bib.bib205 ""), [210](https://arxiv.org/html/2011.09201v1#bib.bib210 "")\], where feedback is almost non-existent. If feedback can provide support to human players, both in terms of amplification of events and by reducing gameplay rigidity, it might also be able to help AI agents.

Automatic game design tools \[ [211](https://arxiv.org/html/2011.09201v1#bib.bib211 ""), [212](https://arxiv.org/html/2011.09201v1#bib.bib212 "")\] may also benefit from research into feedback readability and assistance for creating the right feedback. Systems that either partially or fully generate games could benefit from being able to evaluate whether different parts of a game fit together. This applies not just to rules, story, art, sound, etc., but also to feedback. If the feedback of an event is suggesting something different to the player than the rules of the game, then there is a mismatch and the game might feel frustrating or hard to learn (see also \[ [5](https://arxiv.org/html/2011.09201v1#bib.bib5 "")\]).

Designers often work on game feel in very intuitive ways and literature about game feel is very domain-specific. Most written records are by practitioners who are discussing their own projects. And there are large areas that have not been reflected upon. In most cases, these are highly special game mechanics – speeding up time in a game would be an example. Some of the less reflected aspects of game feel-relevant design are of more general relevance, for example the link between audio design and feel. The purpose of this paper is to give an overview of existing research and techniques in order to make this crucial area of game development more accessible to game designers and researchers. That means that less reflected aspects are given less or no weight in this paper. We hope this paper outlines the blind spots and encourages more research into those areas that are neither researched by researchers nor reflected on by practitioners.

Ultimately, we hope this paper stimulates the creation of more nuanced and reflected design processes, the development of better design tools, and ultimately the design of higher quality interactivity with games. If, as Keogh \[ [213](https://arxiv.org/html/2011.09201v1#bib.bib213 "")\] puts it, “Mechanics are the skeleton. ‘Polish’ or ‘feel’ or ‘juice’ is the meat.”, then a more precise vocabulary is a step towards cooking up better games. Beyond that, the ideas presented in this paper can be applied to a wider range of interactive systems, spreading the sophistication of interaction design in video games to new areas.

## Acknowledgment

The authors would like to thank Sebastian Risi, Hans-Joachim Backe, Dom Ford, Karin Ryding, Sílvia Fornós, Christian Hviid Mortensen, Charlene Putney, Miruna Vozaru, and Miguel Sicart for their support, feedback, proof reading, and inspiration. We also want to thank Mike Cook, Martin Jonasson, and Steve Swink for great discussions about game feel. And finally the authors want to bow their heads to Petri Purho and Jan Willem Nijman for having great (and ultimately similar) ideas about game feel and continuously talking about them.

## References

- \[1\]
S. Swink, _Game Feel_. Morgan Kaufmann, 2009.

- \[2\]
D. Wilson, “A Tale of Two Jousts: Multimedia, Game Feel, and
Imagination,” 2016. \[Online\]. Available:
[https://www.youtube.com/watch?v=hpdcek4hLA8](https://www.youtube.com/watch?v=hpdcek4hLA8 "")
- \[3\]
J. Schell, _The Art of Game Design: A Book of Lenses_. San Francisco, CA, USA: Morgan Kaufmann Publishers
Inc., 2008.

- \[4\]
T. Rogers, “In Praise of Sticky Friction,” Jun. 2010.

- \[5\]
A. Anthropy and N. Clark, _A Game Design Vocabulary: Exploring the_
_Foundational Principles behind Good Game Design_, 1st ed. Addison-Wesley Professional, 2014.

- \[6\]
M. Ehrndal, “A holistic approach to designing for a
specific aesthetic experience in digital games,” Master Thesis, Malmö
högskola, Malmö, Sweden, 2012. \[Online\]. Available:
[http://muep.mau.se/handle/2043/13942](http://muep.mau.se/handle/2043/13942 "")
- \[7\]
L. J. Larsen, “Collision Thrills: Unpacking
the Aesthetics of Action in Computer Games,”
_Journal of Computer Games and Communication_,
vol. 1, no. 1, pp. 41–52, Apr. 2016. \[Online\]. Available:
[https://www.macroworldpub.com/makale\_detay.php?makale\_id=92&dergi\_id=55#.VyMdGz9NjaY](https://www.macroworldpub.com/makale_detay.php?makale_id=92&dergi_id=55#.VyMdGz9NjaY "")
- \[8\]
J. W. Nijman, “The art of screenshake,” 2013.

- \[9\]
R. Yang, “Queering Game Feel,” QGCon 2018 - Google Slides, 2018.
\[Online\]. Available: [tinyurl.com/QueeringGameFeel](https://tinyurl.com/QueeringGameFeel "")
- \[10\]
K. Vonnegut, “The Shapes of Stories,” 1985. \[Online\]. Available:
[https://www.youtube.com/watch?v=oP3c1h8v2ZQ](https://www.youtube.com/watch?v=oP3c1h8v2ZQ "")
- \[11\]
S. Kumari, S. Deterding, and J. Freeman, “The Role
of Uncertainty in Moment-to-Moment Player Motivation: A
Grounded Theory,” in _Proceedings of the_
_Annual Symposium on Computer-Human Interaction in Play -_
_CHI PLAY ’19_. Barcelona,
Spain: ACM Press, 2019, pp. 351–363. \[Online\]. Available:
[http://dl.acm.org/citation.cfm?doid=3311350.3347148](http://dl.acm.org/citation.cfm?doid=3311350.3347148 "")
- \[12\]
S. Sivak, “GAME 3400 Level Design - Moment Based Design,” 2012.
\[Online\]. Available:
[https://www.slideshare.net/sjsivak/game-3400-level-design-moment-based-design](https://www.slideshare.net/sjsivak/game-3400-level-design-moment-based-design "")
- \[13\]
S. Swink, “Game Feel: The Secret Ingredient,” 2007. \[Online\].
Available:
[https://www.gamasutra.com/view/feature/130734/game\_feel\_the\_secret\_ingredient.php?print=1](https://www.gamasutra.com/view/feature/130734/game_feel_the_secret_ingredient.php?print=1 "")
- \[14\]
D. Saffer, _Microinteractions: Designing with Details_. Reilly Media, Inc., 2013.

- \[15\]
M. A. Sicart, “Loops and metagames:
Understanding game design structures,” in
_Proceedings of the 10th International_
_Conference on the Foundations of Digital Games (FDG 2015), June 22-25,_
_2015, Pacific Grove, CA, USA._, 2015.

- \[16\]
M. Csikszentmihalyi, _Flow: The Psychology of Optimal_
_Experience_. New York: Harper and
Row, 1990.

- \[17\]
P. Sweetser and P. Wyeth, “GameFlow: A model for evaluating player
enjoyment in games,” _Computers in Entertainment_, vol. 3, no. 3, p. 3,
Jul. 2005. \[Online\]. Available: [https://doi.org/10.1145/1077246.1077253](https://doi.org/10.1145/1077246.1077253 "")
- \[18\]
J. Juul, _Half-Real: Video Games between_
_Real Rules and Fictional Worlds_. MIT Press, 2005.

- \[19\]
D. Ciccoricco, “Narrative, Cognition, and the
Flow of Mirror’s Edge:,” _Games_
_and Culture_, Jul. 2012. \[Online\]. Available:
[https://journals.sagepub.com/doi/10.1177/1555412012454223](https://journals.sagepub.com/doi/10.1177/1555412012454223 "")
- \[20\]
DICE, “Mirror’s Edge,” DICE, 2008.

- \[21\]
J. Chen, “Flow in games (and everything else),”
_Communications of the ACM_, vol. 50, no. 4,
p. 31, Apr. 2007. \[Online\]. Available:
[http://portal.acm.org/citation.cfm?doid=1232743.1232769](http://portal.acm.org/citation.cfm?doid=1232743.1232769 "")
- \[22\]
That game company, “Flow,” That game company, 2006.

- \[23\]
——, “Flower,” That game company, 2009.

- \[24\]
——, “Journey,” That game company, 2012.

- \[25\]
J. Juul and J. S. Begy, “Good Feedback for bad
Players? A preliminary Study of ‘juicy’ Interface
feedback,” in _Proceedings of First Joint_
_FDG/DiGRA Conference_, Dundee, 2016, p. 2. \[Online\]. Available:
[https://www.jesperjuul.net/text/juiciness.pdf](https://www.jesperjuul.net/text/juiciness.pdf "")
- \[26\]
K. Hicks, P. Dickinson, J. Holopainen, and K. Gerling,
“Good Game Feel: An Empirically Grounded
Framework for Juicy Design,” in
_Proceedings of the 2018 DiGRA International_
_Conference: The Game Is the Message_. DiGRA, Jul. 2018, p. 17. \[Online\]. Available:
[http://www.digra.org/wp-content/uploads/digital-library/DIGRA\_2018\_Paper\_35.pdf](http://www.digra.org/wp-content/uploads/digital-library/DIGRA_2018_Paper_35.pdf "")
- \[27\]
L. Doucet, “Oil it or Spoil it!” Aug. 2016.
\[Online\]. Available:
[https://www.fortressofdoors.com/oil-it-or-spoil-it/](https://www.fortressofdoors.com/oil-it-or-spoil-it/ "")
- \[28\]
M. Sicart, _Play Matters_. MIT
Press, 2014.

- \[29\]
J. P. Gee, _Good Video Games+ Good Learning: Collected Essays on Video_
_Games, Learning, and Literacy_. Peter
Lang, 2007.

- \[30\]
R. Koster, _A Theory of Fun for Game Design_. Scottsdale, AZ: Paraglyph Press, 2005.

- \[31\]
B. Sutton-Smith, _The Ambiguity of Play_, ser. The Ambiguity of
Play. Cambridge, MA, US: Harvard
University Press, 1997.

- \[32\]
I. Iacovides, A. L. Cox, P. McAndrew, J. Aczel, and E. Scanlon,
“Game-Play Breakdowns and Breakthroughs:
Exploring the Relationship Between Action, Understanding, and
Involvement,” _Human–Computer_
_Interaction_, vol. 30, no. 3-4, pp. 202–231, May 2015. \[Online\]. Available:
[http://www.tandfonline.com/doi/full/10.1080/07370024.2014.987347](http://www.tandfonline.com/doi/full/10.1080/07370024.2014.987347 "")
- \[33\]
M. Pichlmair, “Designing for emotions: Arguments
for an emphasis on affect in design,” Ph.D. dissertation, Vienna University
of Technology, Vienna, Austria, 2004.

- \[34\]
H. Gedenryd, “How designers work - making sense of authentic cognitive
activities,” _Lund University Cognitive Studies_, vol. 75, pp. 1–123,
1998.

- \[35\]
J. Dewey, “The Quest for Certainty: A Study of the Relation of
Knowledge and Action,” _The Journal of Philosophy_, vol. 27,
no. 1, pp. 14–25, 1930. \[Online\]. Available:
[https://www.pdcnet.org/pdc/bvdb.nsf/purchase?openform&fp=jphil&id=jphil\_1930\_0027\_0001\_0014\_0025](https://www.pdcnet.org/pdc/bvdb.nsf/purchase?openform&fp=jphil&id=jphil_1930_0027_0001_0014_0025 "")
- \[36\]
D. Kao, “The Effects of Juiciness in an Action RPG,”
_Entertainment Computing_, vol. 34, p. 100359, Feb. 2020.

- \[37\]
J. Juul, _A Casual Revolution — The MIT_
_Press_. MIT Press, 2009.
\[Online\]. Available: [https://mitpress.mit.edu/books/casual-revolution](https://mitpress.mit.edu/books/casual-revolution "")
- \[38\]
S. Deterding, “The Lens of Intrinsic Skill Atoms: A Method for
Gameful Design,” _Human–Computer Interaction_, vol. 30,
no. 3-4, pp. 294–335, May 2015. \[Online\]. Available:
[https://doi.org/10.1080/07370024.2014.993471](https://doi.org/10.1080/07370024.2014.993471 "")
- \[39\]
S. Atanasov, “Juiciness: Exploring and
designing around experience of feedback in video games,” Master Thesis,
Malmö högskola, Malmö, Sweden, 2013. \[Online\]. Available:
[http://muep.mau.se/handle/2043/15692](http://muep.mau.se/handle/2043/15692 "")
- \[40\]
Z. Gage, “Building Games That Can Be Understood at a Glance,” 2018.
\[Online\]. Available:
[https://www.youtube.com/watch?v=YISKcRDcDJg&ab\_channel=GDC](https://www.youtube.com/watch?v=YISKcRDcDJg&ab_channel=GDC "")
- \[41\]
C. Carlsson and A. Pelling, “Designing
Spectator Interfaces for Competitive Video Games,” Master
Thesis, Chalmers University of Technology, Gothenburg, Sweden, 2015.
\[Online\]. Available:
[http://publications.lib.chalmers.se/records/fulltext/224247/224247.pdf](http://publications.lib.chalmers.se/records/fulltext/224247/224247.pdf "")
- \[42\]
R. Hunicke, “Loving Your Player With Juicy Feedback,” dConstruct 2009,
2009\. \[Online\]. Available:
[http://2009.dconstruct.org/podcast/juicyfeedback](http://2009.dconstruct.org/podcast/juicyfeedback "")
- \[43\]
T. Fullerton, _Game Design Workshop: A_
_Playcentric Approach to Creating Innovative Games_, 3rd ed. A K Peters/CRC Press, Apr. 2014.

- \[44\]
P. Suddaby, “5 Important Ways to Add
Polish to Your Game,” May 2013. \[Online\]. Available:
[https://gamedevelopment.tutsplus.com/articles/5-important-ways-to-add-polish-to-your-game--gamedev-7642](https://gamedevelopment.tutsplus.com/articles/5-important-ways-to-add-polish-to-your-game--gamedev-7642 "")
- \[45\]
L. Brown, “The Nuance of Juice Talk,” Vector 2016, 2016. \[Online\].
Available: [https://www.youtube.com/watch?v=qtgWBUIOjK4](https://www.youtube.com/watch?v=qtgWBUIOjK4 "")
- \[46\]
R. F. Baumeister, K. D. Vohs, C. Nathan DeWall, and Liqing Zhang,
“How Emotion Shapes Behavior: Feedback,
Anticipation, and Reflection, Rather Than Direct Causation,”
_Personality and Social Psychology Review_,
vol. 11, no. 2, pp. 167–203, May 2007. \[Online\]. Available:
[http://journals.sagepub.com/doi/10.1177/1088868307301033](http://journals.sagepub.com/doi/10.1177/1088868307301033 "")
- \[47\]
J. T. Larsen, A. P. McGraw, and J. T. Cacioppo, “Can people feel happy and sad
at the same time?” _Journal of Personality and Social Psychology_, no.
81(4), pp. 684–696, 2001. \[Online\]. Available:
[https://doi.apa.org/record/2001-18605-010?doi=1](https://doi.apa.org/record/2001-18605-010?doi=1 "")
- \[48\]
J. P. Forgas and J. V. Ciarrochi, “On Managing
Moods: Evidence for the Role of Homeostatic Cognitive
Strategies in Affect Regulation,”
_Personality and Social Psychology Bulletin_,
vol. 28, no. 3, pp. 336–345, Mar. 2002. \[Online\]. Available:
[http://journals.sagepub.com/doi/10.1177/0146167202286005](http://journals.sagepub.com/doi/10.1177/0146167202286005 "")
- \[49\]
H. Okon-Singer, T. Hendler, L. Pessoa, and A. J. Shackman, “The neurobiology
of emotion – cognition interactions: Fundamental questions and
strategies for future research,” _Frontiers in Human Neuroscience_,
vol. 9, Feb. 2015. \[Online\]. Available:
[http://journal.frontiersin.org/Article/10.3389/fnhum.2015.00058/abstract](http://journal.frontiersin.org/Article/10.3389/fnhum.2015.00058/abstract "")
- \[50\]
J. Löwgren, “Pliability as an experiential quality: Exploring the
aesthetics of interaction design,” _Artifact: Journal of Design_
_Practice_, vol. 1, no. 2, pp. 85–95, 2007.

- \[51\]
——, “Toward an articulation of interaction
esthetics,” _New Review of Hypermedia and_
_Multimedia_, vol. 15, no. 2, pp. 129–146, Aug. 2009. \[Online\]. Available:
[https://www.tandfonline.com/doi/full/10.1080/13614560903117822](https://www.tandfonline.com/doi/full/10.1080/13614560903117822 "")
- \[52\]
C. Hodent, “Skill-Building Series: Emotion in Game Design (A UX
Perspective),” 2020. \[Online\]. Available:
[https://www.gdcvault.com/play/1026790/Skill-Building-Series-Emotion-in](https://www.gdcvault.com/play/1026790/Skill-Building-Series-Emotion-in "")
- \[53\]
D. Norman, “Emotional Design: Why We Love
(or Hate) Everyday Things,” in
_The Journal of American Culture_,
Jan. 2004, vol. 27.

- \[54\]
M. Hassenzahl, S. Diefenbach, and A. Göritz, “Needs, affect, and
interactive products–Facets of user experience,”
_Interacting with computers_, vol. 22, no. 5, pp. 353–362, 2010.

- \[55\]
S. Long, “What Is Games User Experience (UX) and How Does It
Help?” Oct. 17. \[Online\]. Available:
[https://www.gamasutra.com/blogs/SebastianLong/20171002/306649/What\_Is\_Games\_User\_Experience\_UX\_and\_How\_Does\_It\_Help.php](https://www.gamasutra.com/blogs/SebastianLong/20171002/306649/What_Is_Games_User_Experience_UX_and_How_Does_It_Help.php "")
- \[56\]
G. Kirkpatrick, “Between Art and Gameness:
Critical Theory and Computer Game Aesthetics,”
_Thesis Eleven_, vol. 89, no. 1, pp. 74–93,
May 2007. \[Online\]. Available: [https://doi.org/10.1177/0725513607076134](https://doi.org/10.1177/0725513607076134 "")
- \[57\]
——, “Controller, Hand, Screen: Aesthetic
Form in the Computer Game,” _Games and_
_Culture_, vol. 4, no. 2, pp. 127–143, Apr. 2009. \[Online\]. Available:
[http://journals.sagepub.com/doi/10.1177/1555412008325484](http://journals.sagepub.com/doi/10.1177/1555412008325484 "")
- \[58\]
——, _Aesthetic Theory and the Video Game_. Manchester ; New York : New York: Manchester University Press
; distributed in the United States exclusively by Palgrave Macmillan, 2011.

- \[59\]
V.-M. Karhulahti, “A kinesthetic theory of videogames: Time-critical
challenge and aporetic rhematic,” _Game Studies_, vol. 13, no. 1, 2013.

- \[60\]
B. Keogh, _A Play of Bodies: How We Perceive Videogames_. Cambridge, MA: MIT Press, 2018.

- \[61\]
M. Merleau-Ponty, _Phenomenology of Perception_. Routledge, 1982.

- \[62\]
G. Bateson, _Steps to an Ecology of Mind: Collected Essays in_
_Anthropology, Psychiatry, Evolution, and Epistemology_. University of Chicago Press, 1972.

- \[63\]
G. Weiss, _Body Images: Embodiment as Intercorporeality_. New York: Routledge, 1999.

- \[64\]
D. Surman, “Pleasure, spectacle and reward in Capcom’s Street Fighter
series David Surman,” _Videogame, player, text_, pp. 204–221,
2007.

- \[65\]
B. Davnall, “Dr Johnson’s Sore Toe: Touch, Naturalism and
Kingdom Hearts,” Sep. 2016. \[Online\]. Available:
[http://startswithafish.blogspot.com/2016/09/dr-johnsons-sore-toe-touch-naturalism.html](http://startswithafish.blogspot.com/2016/09/dr-johnsons-sore-toe-touch-naturalism.html "")
- \[66\]
C. Putney, “Praise the Sun: On Yoga and Dark Souls,” May 2016.
\[Online\]. Available: [http://alphachar.com/praisethesun](http://alphachar.com/praisethesun "")
- \[67\]
K. Gray, K. Gabler, S. Shodhan, and M. Kunic, “How to
Prototype a Game in Under 7 Days,” 2005. \[Online\].
Available:
[https://www.gamasutra.com/view/feature/130848/how\_to\_prototype\_a\_game\_in\_under\_7\_.php](https://www.gamasutra.com/view/feature/130848/how_to_prototype_a_game_in_under_7_.php "")
- \[68\]
L. Perry, “The single most useful advice I can
give for making any game better.. feedback,” 2013. \[Online\]. Available:
[https://gamasutra.com/blogs/LeePerry/20130506/191739/The\_single\_most\_useful\_advice\_I\_can\_give\_for\_making\_any\_game\_better\_feedback.php](https://gamasutra.com/blogs/LeePerry/20130506/191739/The_single_most_useful_advice_I_can_give_for_making_any_game_better_feedback.php "")
- \[69\]
M. Brown, “Secrets of Game Feel and Juice,” 2015. \[Online\].
Available: [https://www.youtube.com/watch?v=216\_5nu4aVQ](https://www.youtube.com/watch?v=216_5nu4aVQ "")
- \[70\]
M. Jonasson and P. Purho, “Juice it or lose it,” 2012. \[Online\]. Available:
[https://www.youtube.com/watch?v=Fy0aCDmgnxg](https://www.youtube.com/watch?v=Fy0aCDmgnxg "")
- \[71\]
R. Forestié, “Best Practices for fast game design in Unity,”
Unite LA 2018, 2018. \[Online\]. Available:
[https://www.youtube.com/watch?v=NU29QKag8a0](https://www.youtube.com/watch?v=NU29QKag8a0 "")
- \[72\]
——, “How to design with feedback and game feel in mind - Shake it ’til
you make it,” Unite Copenhagen 2019, 2019. \[Online\]. Available:
[https://www.youtube.com/watch?v=yCKI9T3sSv0](https://www.youtube.com/watch?v=yCKI9T3sSv0 "")
- \[73\]
N. Suttner, A. Nealen, Z. Gage, and D. Wilson, “The Spelunky Showlike,”
2018\. \[Online\]. Available: [https://t.co/7v8GvELhnG?amp=1](https://t.co/7v8GvELhnG?amp=1 "")
- \[74\]
——, “The Spelunky Showlike: 36: Game Feel
as Procrastination with Jan Willem Nijman.” \[Online\]. Available:
[https://thespelunkyshowlike.libsyn.com/36-game-feel-as-procrastination-with-jan-willem-nijman](https://thespelunkyshowlike.libsyn.com/36-game-feel-as-procrastination-with-jan-willem-nijman "")
- \[75\]
——, “The Spelunky Showlike: 38: The
Rhythms and Layers of Ryan Clark.” \[Online\]. Available:
[https://thespelunkyshowlike.libsyn.com/38-the-rhythms-and-layers-of-ryan-clark](https://thespelunkyshowlike.libsyn.com/38-the-rhythms-and-layers-of-ryan-clark "")
- \[76\]
——, “The Spelunky Showlike: 39: The Tricks
of the Toolkit with Mark Brown.” \[Online\]. Available:
[https://thespelunkyshowlike.libsyn.com/39-gmtk](https://thespelunkyshowlike.libsyn.com/39-gmtk "")
- \[77\]
——, “The Spelunky Showlike: 42: The
Secrets of Simplicity with Martin Jonasson.” \[Online\]. Available:
[https://thespelunkyshowlike.libsyn.com/42-the-secrets-of-simplicity-with-martin-jonasson](https://thespelunkyshowlike.libsyn.com/42-the-secrets-of-simplicity-with-martin-jonasson "")
- \[78\]
R. Clark, “The Clark Tank,” 2019.

- \[79\]
M. Brown, “Why Does Celeste Feel So Good to Play? — Game Maker’s
Toolkit,” 2019. \[Online\]. Available:
[https://www.youtube.com/watch?v=yorTG9at90g](https://www.youtube.com/watch?v=yorTG9at90g "")
- \[80\]
C. McEntee, “Rayman Origins,”
_Game Developer Magazine - October 2012_, pp.
26–31, 2012.

- \[81\]
J. Song, “Improving the Combat &apos;Impact&apos; Of Action
Games,” Apr. 2005.

- \[82\]
J. Turner, “Oh My! That Sound Made the Game Feel Better!” 2015.
\[Online\]. Available:
[https://www.gdcvault.com/play/1022808/Oh-My-That-Sound-Made](https://www.gdcvault.com/play/1022808/Oh-My-That-Sound-Made "")
- \[83\]
R. Ismail, “Six stages of game dev community
development,” 2015. \[Online\]. Available:
[https://www.gamasutra.com/blogs/RamiIsmail/20150504/242486/Six\_stages\_of\_game\_dev\_community\_development.php](https://www.gamasutra.com/blogs/RamiIsmail/20150504/242486/Six_stages_of_game_dev_community_development.php "")
- \[84\]
D. Cook, “What are game mechanics?” Oct. 2006.
\[Online\]. Available:
[https://lostgarden.home.blog/2006/10/24/what-are-game-mechanics/](https://lostgarden.home.blog/2006/10/24/what-are-game-mechanics/ "")
- \[85\]
——, “Loops and Arcs,” Apr. 2012. \[Online\].
Available: [https://lostgarden.home.blog/2012/04/30/loops-and-arcs/](https://lostgarden.home.blog/2012/04/30/loops-and-arcs/ "")
- \[86\]
R. Hunicke, M. LeBlanc, and R. Zubek, “MDA: A Formal Approach to
Game Design and Game Research,” in _Proceedings of the AAAI_
_Workshop on Challenges in Game AI_, vol. 4, May 2004, p. 1722.

- \[87\]
G. Dahl and M. Kraus, “Measuring how game feel is
influenced by the player avatar’s acceleration and deceleration: Using a
2D platformer to describe players’ perception of controls in
videogames,” in _Proceedings of the 19th_
_International Academic Mindtrek Conference on - AcademicMindTrek_
_’15_. Tampere, Finland: ACM
Press, 2015, pp. 41–46. \[Online\]. Available:
[http://dl.acm.org/citation.cfm?doid=2818187.2818275](http://dl.acm.org/citation.cfm?doid=2818187.2818275 "")
- \[88\]
A. Normoyle and S. Jörg, “Trade-offs between
responsiveness and naturalness for player characters,” in
_Proceedings of the Seventh International_
_Conference on Motion in Games - MIG ’14_. Playa Vista, California: ACM Press, 2014, pp. 61–70.
\[Online\]. Available:
[http://dl.acm.org/citation.cfm?doid=2668064.2668087](http://dl.acm.org/citation.cfm?doid=2668064.2668087 "")
- \[89\]
Y. Pignole, “Platformer controls: How to avoid
limpness and rigidity feelings,” 2014. \[Online\]. Available:
[https://www.gamasutra.com/blogs/YoannPignole/20140103/207987/Platformer\_controls\_how\_to\_avoid\_limpness\_and\_rigidity\_feelings.php](https://www.gamasutra.com/blogs/YoannPignole/20140103/207987/Platformer_controls_how_to_avoid_limpness_and_rigidity_feelings.php "")
- \[90\]
M. Fasterholdt, M. Pichlmair, and C. Holmgård, “You Say Jump, I Say
How High? Operationalising the Game Feel of Jumping,” in
_Proceedings of the First International Joint Conference of_
_DiGRA and FDG_. Dundee,
Scotland: Digital Games Research Association and Society for the
Advancement of the Science of Digital Games, 2016. \[Online\]. Available:
[http://www.digra.org/wp-content/uploads/digital-library/paper\_248.pdf](http://www.digra.org/wp-content/uploads/digital-library/paper_248.pdf "")
- \[91\]
K. Pittman, “Math for Game Programmers: Building a Better Jump,”
2016\. \[Online\]. Available:
[https://www.youtube.com/watch?v=hG9SzQxaCm8&ab\_channel=GDC](https://www.youtube.com/watch?v=hG9SzQxaCm8&ab_channel=GDC "")
- \[92\]
J. Cone, “It IS Rocket Science! The Physics of ’Rocket League’
Detailed,” 2018. \[Online\]. Available:
[https://www.gdcvault.com/play/1025341/It-IS-Rocket-Science-The](https://www.gdcvault.com/play/1025341/It-IS-Rocket-Science-The "")
- \[93\]
A. Lefky and A. Gindin, “Acceleration Due to Gravity: Super Mario
Brothers,” 2007.

- \[94\]
J. Alessi, “Games Demystified: Super Mario
Galaxy,” 2008. \[Online\]. Available:
[https://www.gamasutra.com/view/feature/131997/games\_demystified\_super\_mario\_.php](https://www.gamasutra.com/view/feature/131997/games_demystified_super_mario_.php "")
- \[95\]
A. Saltsman, “Tuning Canabalt,” 2010. \[Online\].
Available:
[https://www.gamasutra.com/blogs/AdamSaltsman/20100929/88155/Tuning\_Canabalt.php](https://www.gamasutra.com/blogs/AdamSaltsman/20100929/88155/Tuning_Canabalt.php "")
- \[96\]
M. Venturelli, “Game Feel Tips I: The Ghost
Jump,” 2014. \[Online\]. Available:
[https://gamasutra.com/blogs/MarkVenturelli/20140810/223001/Game\_Feel\_Tips\_I\_The\_Ghost\_Jump.php](https://gamasutra.com/blogs/MarkVenturelli/20140810/223001/Game_Feel_Tips_I_The_Ghost_Jump.php "")
- \[97\]
Smashpedia, “Invincibility frame.” \[Online\]. Available:
[https://bit.ly/2JEPgrz](https://bit.ly/2JEPgrz "")
- \[98\]
R. Mora-Zamora and E. Brenes-Villalobos, “Integrated framework for game
design,” in _Proceedings of the IX Latin American Conference on_
_Human Computer Interaction_, ser. CLIHC ’19. New York, NY, USA: Association for Computing Machinery,
Sep. 2019, pp. 1–6. \[Online\]. Available:
[https://doi.org/10.1145/3358961.3358984](https://doi.org/10.1145/3358961.3358984 "")
- \[99\]
K. Siu, E. Butler, and A. Zook, “A programming model for boss encounters in
2D action games,” Experimental AI in Games: Papers from the AIIDE
Workshop, Technical Report WS-16-22, 2016. \[Online\]. Available:
[https://aaai.org/ocs/index.php/AIIDE/AIIDE16/paper/view/14058](https://aaai.org/ocs/index.php/AIIDE/AIIDE16/paper/view/14058 "")
- \[100\]
T. Gilbert, “Movement Mechanics,” 2012. \[Online\]. Available:
[https://troygilbert.com/deconstructing-zelda/movement-mechanics/](https://troygilbert.com/deconstructing-zelda/movement-mechanics/ "")
- \[101\]
A. Wiltshire, “How hitboxes work,” Aug. 2020.
\[Online\]. Available: [https://www.pcgamer.com/how-hitboxes-work/](https://www.pcgamer.com/how-hitboxes-work/ "")
- \[102\]
J. Raskin, _The Humane Interface: New Directions for Designing_
_Interactive Systems_. New York, NY,
USA: ACM Press/Addison-Wesley Publishing Co., 2000.

- \[103\]
J. Johnson and G. Engelbeck, “Modes Survey Results,” _SIGCHI Bull._,
vol. 20, no. 4, pp. 38–50, Apr. 1989. \[Online\]. Available:
[https://doi.org/10.1145/67243.67248](https://doi.org/10.1145/67243.67248 "")
- \[104\]
F. Kayali and P. Purgathofer, “Two halves of play-Simulation versus
abstraction and transformation in sports videogames design,” _Eludamos._
_Journal for Computer Game Culture_, vol. 2, no. 1, pp. 105–127, 2008.

- \[105\]
C. Zimmerman, “Reading the Player’s Mind Through His Thumbs:
Inferring Player Intent Through Controller Input,” 2010. \[Online\].
Available:
[https://www.gdcvault.com/play/1012339/Reading-the-Player-s-Mind](https://www.gdcvault.com/play/1012339/Reading-the-Player-s-Mind "")
- \[106\]
R. Penner, _Robert Penner’s Programming Macromedia Flash_
_MX_. New York:
McGraw-Hill/Osborne, 2002.

- \[107\]
A. Sitnik and I. Solovev, “Easing Functions Cheat
Sheet,” Accessed: 2020-05-04 14:25:58. \[Online\]. Available:
[http://easings.net/](http://easings.net/ "")
- \[108\]
C. Barlog, “Why Kratos’ Axe Feels SO Powerful — Game Mechanics
Explained,” May 2018. \[Online\]. Available:
[https://www.youtube.com/watch?v=zpr-EE2In1M&ab\_channel=Polygon](https://www.youtube.com/watch?v=zpr-EE2In1M&ab_channel=Polygon "")
- \[109\]
W. T. Reeves, “Particle Systems A Technique for
Modeling a Class of Fuzzy Objects,”
_ACM Transactions on Graphics_, vol. 2, no. 2,
p. 17, Apr. 1983. \[Online\]. Available:
[https://www.lri.fr/~mbl/ENS/IG2/devoir2/files/docs/fuzzyParticles.pdf](https://www.lri.fr/~mbl/ENS/IG2/devoir2/files/docs/fuzzyParticles.pdf "")
- \[110\]
T. Ilmonen and J. Kontkanen, “The Second Order Particle System,”
_Journal of WSCG_, vol. 11, no. 1, 2003.

- \[111\]
L. Latta, “Building a Million-Particle
System,” 2004. \[Online\]. Available:
[https://www.gamasutra.com/view/feature/130535/building\_a\_millionparticle\_system.php](https://www.gamasutra.com/view/feature/130535/building_a_millionparticle_system.php "")
- \[112\]
N. Lovato, “Squeezing more juice out of your game
design!” Mar. 2015. \[Online\]. Available: [https://bit.ly/2GsjSex](https://bit.ly/2GsjSex "")
- \[113\]
B. Rockenbeck, “The inFAMOUS: Second Son Particle System
Architecture,” 2014. \[Online\]. Available:
[https://www.gdcvault.com/play/1020367/The-inFAMOUS-Second-Son-Particle](https://www.gdcvault.com/play/1020367/The-inFAMOUS-Second-Son-Particle "")
- \[114\]
M. Vainio, “The Visual Effects of inFAMOUS: Second Son,” 2014.
\[Online\]. Available:
[https://www.youtube.com/watch?v=o2yFxPY2b1o&ab\_channel=GDC](https://www.youtube.com/watch?v=o2yFxPY2b1o&ab_channel=GDC "")
- \[115\]
“Cooldowns can be used to balance games.” \[Online\].
Available:
[https://game-design-snacks.fandom.com/wiki/Cooldowns\_can\_be\_used\_to\_balance\_games](https://game-design-snacks.fandom.com/wiki/Cooldowns_can_be_used_to_balance_games "")
- \[116\]
J. Griesemer, “Design by Numbers:
Cooldowns,” Jan. 2012. \[Online\]. Available:
[https://rewardingplay.com/2012/01/09/design-by-numbers-cooldowns/](https://rewardingplay.com/2012/01/09/design-by-numbers-cooldowns/ "")
- \[117\]
D. King, “Principals of UI Design in the World
of Warcraft,” Dec. 2019. \[Online\]. Available:
[https://medium.com/@d.w.king12/principals-of-ui-design-in-the-world-of-warcraft-19e1a33feb61](https://medium.com/@d.w.king12/principals-of-ui-design-in-the-world-of-warcraft-19e1a33feb61 "")
- \[118\]
N. Babich, “The UI/UX Design of Progress
Indicator \[Trends + Examples\],” May 2019. \[Online\]. Available:
[https://usersnap.com/blog/progress-indicators/](https://usersnap.com/blog/progress-indicators/ "")
- \[119\]
T. Jakobsen, “Advanced character physics,” in _In Proceedings of the_
_Game Developers Conference 2001_, 2001, p. 19.

- \[120\]
D. Kao and D. F. Harrell, “Exploring the Impact of Avatar Color on
Game Experience in Educational Games,” in _Proceedings of the_
_2016 CHI Conference Extended Abstracts on Human Factors in_
_Computing Systems_, ser. CHI EA ’16. New York, NY, USA: Association for Computing Machinery, May
2016, pp. 1896–1905. \[Online\]. Available:
[https://doi.org/10.1145/2851581.2892281](https://doi.org/10.1145/2851581.2892281 "")
- \[121\]
J. Stephenson, “A UX Analysis of
First-Person Shooter Damage Indicators,” Mar. 2018. \[Online\].
Available:
[https://medium.com/@jasper.stephenson/a-ux-analysis-of-first-person-shooter-damage-indicators-59ac9d41caf8](https://medium.com/@jasper.stephenson/a-ux-analysis-of-first-person-shooter-damage-indicators-59ac9d41caf8 "")
- \[122\]
D. Daniels, “Why some games feel better than others - part 3,” Mar. 2007.

- \[123\]
S. Hurricane, “Impact Freeze,” Jan. 2010.

- \[124\]
N. Berbece, “Game Feel: Why Your Death Animation Sucks,” San
Francisco, CA, 2015. \[Online\]. Available:
[https://www.gdcvault.com/play/1022759/Game-Feel-Why-Your-Death](https://www.gdcvault.com/play/1022759/Game-Feel-Why-Your-Death "")
- \[125\]
K. Franinović, K. Franinovic, and S. Serafin,
_Sonic Interaction Design_. MIT Press, 2013.

- \[126\]
L. E. Nacke, M. Grimshaw, L. E. Nacke, and M. Grimshaw,
“Player-Game Interaction Through Affective
Sound,” in _Game Sound Technology_
_and Player Interaction: Concepts and Developments_. IGI Global, Jan. 2011. \[Online\]. Available:
[https://www.igi-global.com/gateway/chapter/46796](https://www.igi-global.com/gateway/chapter/46796 "")
- \[127\]
M. Orozco, J. Silva, A. E. Saddik, and E. Petriu, “The
Role of Haptics in Games,” in
_Haptics Rendering and_
_Applications_. London, United
Kingdom: IntechOpen, Jan. 2012, pp. 217–234. \[Online\]. Available:
[https://www.intechopen.com/books/haptics-rendering-and-applications/-the-role-of-haptics-in-gaming-experience-](https://www.intechopen.com/books/haptics-rendering-and-applications/-the-role-of-haptics-in-gaming-experience- "")
- \[128\]
M. Sabbagh, “The art of designing visceral and
engaging Bullet Time gunplay,” Oct. 2015. \[Online\]. Available:
[https://michelsabbagh.wordpress.com/2015/10/07/the-art-of-designing-visceral-and-engaging-bullet-time-gunplay/](https://michelsabbagh.wordpress.com/2015/10/07/the-art-of-designing-visceral-and-engaging-bullet-time-gunplay/ "")
- \[129\]
W. Porter, “A videogame history of bullet-time,”
2010\. \[Online\]. Available:
[https://www.gamesradar.com/a-videogame-history-of-bullet-time/](https://www.gamesradar.com/a-videogame-history-of-bullet-time/ "")
- \[130\]
C. Nutt, “The magic of TowerFall : Depth,
simplicity, community,” 2015. \[Online\]. Available:
[/view/news/241970/The\_magic\_of\_TowerFall\_Depth\_simplicity\_community.php](https://arxiv.org/view/news/241970/The_magic_of_TowerFall_Depth_simplicity_community.php "")
- \[131\]
k. birdwell, “The Cabal: Valve’s Design
Process For Creating Half-Life,” 1999. \[Online\]. Available:
[https://www.gamasutra.com/view/feature/131815/the\_cabal\_valves\_design\_process\_.php](https://www.gamasutra.com/view/feature/131815/the_cabal_valves_design_process_.php "")
- \[132\]
F. Thomas and O. Johnston, _The Illusion of Life: Disney_
_Animation_. New York: Abbeville
Press, 1981.

- \[133\]
C. Karunamuni, N. de Vries, and M. Alonso,
“Designing Fluid Interfaces - WWDC 2018 -
Videos,” 2018. \[Online\]. Available:
[https://developer.apple.com/videos/play/wwdc2018/803/](https://developer.apple.com/videos/play/wwdc2018/803/ "")
- \[134\]
N. Gitter, “Building Fluid Interfaces,” Aug.
2018\. \[Online\]. Available:
[https://medium.com/@nathangitter/building-fluid-interfaces-ios-swift-9732bb934bf5](https://medium.com/@nathangitter/building-fluid-interfaces-ios-swift-9732bb934bf5 "")
- \[135\]
B.-W. Chang and D. Ungar, “Animation: From cartoons to
the user interface,” in _Proceedings of the_
_6th Annual ACM Symposium on User Interface Software and Technology -_
_UIST ’93_. Atlanta, Georgia,
United States: ACM Press, 1993, pp. 45–55. \[Online\]. Available:
[http://portal.acm.org/citation.cfm?doid=168642.168647](http://portal.acm.org/citation.cfm?doid=168642.168647 "")
- \[136\]
H. Alexander, “The Quiet Importance Of Idle
Animations,” 2019. \[Online\]. Available:
[https://kotaku.com/the-quiet-importance-of-idle-animations-1834564079](https://kotaku.com/the-quiet-importance-of-idle-animations-1834564079 "")
- \[137\]
J. Couture, “What makes a great idle animation?
Devs share their favorites,” 2018. \[Online\]. Available:
[/view/news/318163/What\_makes\_a\_great\_idle\_animation\_Devs\_share\_their\_favorites.php](https://arxiv.org/view/news/318163/What_makes_a_great_idle_animation_Devs_share_their_favorites.php "")
- \[138\]
I. Keren, “Scroll Back: The Theory and Practice of Cameras in
Side-Scrollers,” 2015. \[Online\]. Available:
[https://www.gdcvault.com/play/1022243/Scroll-Back-The-Theory-and](https://www.gdcvault.com/play/1022243/Scroll-Back-The-Theory-and "")
- \[139\]
——, “Gamasutra: Itay Keren’s Blog - Scroll Back: The
Theory and Practice of Cameras in Side-Scrollers,” 2015.
\[Online\]. Available:
[https://gamasutra.com/blogs/ItayKeren/20150511/243083/Scroll\_Back\_The\_Theory\_and\_Practice\_of\_Cameras\_in\_SideScrollers.php](https://gamasutra.com/blogs/ItayKeren/20150511/243083/Scroll_Back_The_Theory_and_Practice_of_Cameras_in_SideScrollers.php "")
- \[140\]
R. Meyer, “ITSP Camera Explained,” May 2013. \[Online\]. Available:
[https://www.youtube.com/watch?v=aAKwZt3aXQM&feature=emb\_title&ab\_channel=RyanMeyer](https://www.youtube.com/watch?v=aAKwZt3aXQM&feature=emb_title&ab_channel=RyanMeyer "")
- \[141\]
M. Christie, P. Olivier, and J.-M. Normand, “Camera
Control in Computer Graphics,”
_Computer Graphics Forum_, vol. 27, no. 8, pp.
2197–2218, Dec. 2008. \[Online\]. Available:
[http://doi.wiley.com/10.1111/j.1467-8659.2008.01181.x](http://doi.wiley.com/10.1111/j.1467-8659.2008.01181.x "")
- \[142\]
M. Haigh-Hutchinson, “Fundamentals of
Real-Time Camera Design,” _GDC’05_
_talk_, p. 20, 2005.

- \[143\]
——, _Real Time Cameras: A Guide_
_for Game Designers and Developers_, 1st ed. San Francisco, Calif. : Oxford: CRC Press, Apr. 2009.

- \[144\]
——, “Real-Time Cameras - Navigation and
Occlusion,” 2009. \[Online\]. Available:
[https://www.gamasutra.com/view/feature/132456/realtime\_cameras\_\_navigation\_and\_.php](https://www.gamasutra.com/view/feature/132456/realtime_cameras__navigation_and_.php "")
- \[145\]
P. Burelli, “Virtual Cinematography in Games: Investigating the
Impact on Player Experience,” in _International Conference On_
_The Foundations of Digital Games_, Chania, Greece, May 2013.

- \[146\]
G. N. Yannakakis, H. P. Martínez, and A. Jhala,
“Towards affective camera control in games,”
_User Modeling and User-Adapted Interaction_,
vol. 20, no. 4, pp. 313–340, Oct. 2010. \[Online\]. Available:
[http://link.springer.com/10.1007/s11257-010-9078-0](http://link.springer.com/10.1007/s11257-010-9078-0 "")
- \[147\]
D. Norman, _The Design Of Everyday Things_. Basic Books, 1988.

- \[148\]
Nintendo, “Super Mario Bros. 3,” Game \[Nintendo Entertainment System\
(NES)\], 1988.

- \[149\]
T. Meat, “Super Meat Boy,” 2010. \[Online\]. Available:
[http://www.supermeatboy.com](http://www.supermeatboy.com/ "")
- \[150\]
K. Hamaluik, “Super Mario World Physics,”
Jul. 2012. \[Online\]. Available:
[http://blog.hamaluik.ca/posts/super-mario-world-physics/](http://blog.hamaluik.ca/posts/super-mario-world-physics/ "")
- \[151\]
M. Thorson, “Level Design Workshop: Designing Celeste,” 2017.
\[Online\]. Available:
[https://www.youtube.com/watch?v=4RlpMhBKNr0&feature=youtu.be](https://www.youtube.com/watch?v=4RlpMhBKNr0&feature=youtu.be "")
- \[152\]
M. M. Games, “Celeste,” 2018.

- \[153\]
N. Berry, “Celeste Player Controller Soruce Code,” 2018. \[Online\].
Available: [https://github.com/NoelFB/Celeste](https://github.com/NoelFB/Celeste "")
- \[154\]
G. Fiedler, “Integration Basics,” Jun. 2004.
\[Online\]. Available: [http://127.0.0.1:1313/post/integration\_basics/](http://127.0.0.1:1313/post/integration_basics/ "")
- \[155\]
A. Saltsman, “Canabalt,” 2009.

- \[156\]
Psyonix, “Rocket League,” 2015.

- \[157\]
Nintendo, “Super Mario Galaxy,” 2007.

- \[158\]
K. Calis, J. W. Nijman, T. Vellmann, and A. Drucker, “Disc Room,” 2020.

- \[159\]
Nintendo, “Super Smash Bros. Ultimate,” 2018.

- \[160\]
——, “The Legend of Zelda,” 1986. \[Online\]. Available:
[https://en.wikipedia.org/w/index.php?title=The\_Legend\_of\_Zelda&oldid=949668668](https://en.wikipedia.org/w/index.php?title=The_Legend_of_Zelda&oldid=949668668 "")
- \[161\]
——, “Super Mario Bros. 2,” Game \[Nintendo Entertainment System\
(NES)\], 1988.

- \[162\]
N. None, “Braid,” 2008.

- \[163\]
R. Entertainment, “Angry Birds,” Game \[iOS\], 2009. \[Online\]. Available:
[www.angrybirds.com](https://www.angrybirds.com/ "")
- \[164\]
E. S. BIG, “SSX Tricky,” Game \[PlayStation 2\], 2001.

- \[165\]
I. Corporation, “R-Type,” Game \[Arcade\], 1987.

- \[166\]
M. Alldridge, “’R-Type’ - Irem. 1987,” Mar. 2014. \[Online\].
Available: [http://www.markalldridge.co.uk/r-type.html#](http://www.markalldridge.co.uk/r-type.html# "")
- \[167\]
F. Software, “Dark Souls,” Game \[PlayStation 3\], 2009.

- \[168\]
E. Games, “Gears of War,” Game \[Xbox 360\], 2006.

- \[169\]
Codemasters, “DiRT 3,” 2011.

- \[170\]
R. A. D. Studios, “God of War,” 2018.

- \[171\]
S. P. Productions, “inFAMOUS: Second Son,” 2014.

- \[172\]
F. Studios, “Off-road Velociraptor Safari,” 2008.

- \[173\]
Diction, “Velociraptor Massacre,” Apr. 2012. \[Online\]. Available:
[https://www.youtube.com/watch?v=Uh7URFM8rxc&feature=youtu.be&ab\_channel=Diction](https://www.youtube.com/watch?v=Uh7URFM8rxc&feature=youtu.be&ab_channel=Diction "")
- \[174\]
Teknopants, “Samurai Gunn,” 2013.

- \[175\]
J. Deighan, “Sound Design for Video
Games: A Primer,” Aug. 19. \[Online\]. Available:
[https://www.gamasutra.com/blogs/JamesDeighan/20190823/349296/Sound\_Design\_for\_Video\_Games\_A\_Primer.php](https://www.gamasutra.com/blogs/JamesDeighan/20190823/349296/Sound_Design_for_Video_Games_A_Primer.php "")
- \[176\]
A. Marks, _The Complete Guide to Game Audio: For Composers, Musicians,_
_Sound Designers, and Game Developers_, 2nd ed. Burlington, MA ; Oxford: Focal Press/Elsevier, 2009.

- \[177\]
J. P. Zagal and M. Mateas, “Time in Video Games:
A Survey and Analysis,” _Simulation &_
_Gaming_, vol. 41, no. 6, pp. 844–868, Dec. 2010. \[Online\]. Available:
[https://doi.org/10.1177/1046878110375594](https://doi.org/10.1177/1046878110375594 "")
- \[178\]
T. Corporation, “Bubble Bobble,” Game \[Arcade\], 1986.

- \[179\]
Q. Design, “Drawkaniod,” 2018. \[Online\]. Available:
[http://www.drawkanoid.com/](http://www.drawkanoid.com/ "")
- \[180\]
grapefrukt games, “Holedown,” 2018. \[Online\]. Available:
[https://holedown.com/](https://holedown.com/ "")
- \[181\]
F. Games, “XCOM: Enemy Unknown,” 2012.

- \[182\]
B. S. LLC, “Fallout 3,” Game \[PlayStation 3\], 2008.

- \[183\]
P. Games, “Bejeweled,” 2001. \[Online\]. Available:
[https://www.ea.com/en-gb/games/bejeweled](https://www.ea.com/en-gb/games/bejeweled "")
- \[184\]
G. Fiedler, “Fix Your Timestep!” Jun. 2004.
\[Online\]. Available: [http://127.0.0.1:1313/post/fix\_your\_timestep/](http://127.0.0.1:1313/post/fix_your_timestep/ "")
- \[185\]
I. Iacovides, A. Cox, R. Kennedy, P. Cairns, and C. Jennett,
“Removing the HUD: The Impact of
Non-Diegetic Game Elements and Expertise on Player
Involvement,” in _Proceedings of the 2015_
_Annual Symposium on Computer-Human Interaction in Play -_
_CHI PLAY ’15_. London, United
Kingdom: ACM Press, 2015, pp. 13–22. \[Online\]. Available:
[http://dl.acm.org/citation.cfm?doid=2793107.2793120](http://dl.acm.org/citation.cfm?doid=2793107.2793120 "")
- \[186\]
T. Corporation, “Rastan Saga,” 1987.

- \[187\]
S. Eiserloh, “Math for Game Programmers: Juicing Your Cameras With
Math,” 2016. \[Online\]. Available:
[https://www.gdcvault.com/play/1023557/Math-for-Game-Programmers-Juicing](https://www.gdcvault.com/play/1023557/Math-for-Game-Programmers-Juicing "")
- \[188\]
S. P. Productions, “Insanely Twisted Shadow Planet,” 2011.

- \[189\]
N. Burtnyk and M. Wein, “Computer-Generated Key-Frame Animation,”
_Journal of the SMPTE_, vol. 80, no. 3, pp. 149–153, Mar. 1971.

- \[190\]
J. Lasseter, “PRINCIPLES OF TRADITIONAL ANIMATION
APPLIED TO 3D COMPUTER ANIMATION,” _Computer_
_Graphics, Volume 21, Number 4, July 1987_, p. 10, 1987.

- \[191\]
M. Pichlmair and F. Kayali, “Intentions, Expectations and the
Player,” 2008. \[Online\]. Available:
[https://www.academia.edu/4989138/Intentions\_Expectations\_and\_the\_Player](https://www.academia.edu/4989138/Intentions_Expectations_and_the_Player "")
- \[192\]
K. Pulver, “Platforming Ledge Forgiveness,” 2013. \[Online\]. Available:
[http://kpulv.com/123/Platforming\_Ledge\_Forgiveness/](http://kpulv.com/123/Platforming_Ledge_Forgiveness/ "")
- \[193\]
M. Thorson, “A short thread on a few Celeste game-feel things.” \[Online\].
Available: [https://twitter.com/MattThorson/status/1238338574220546049](https://twitter.com/MattThorson/status/1238338574220546049 "")
- \[194\]
R. Bernhaupt, W. Ijsselsteijn, F. F. Mueller, M. Tscheligi, and D. Wixon,
“Evaluating user experiences in games,” in
_Proceeding of the Twenty-Sixth Annual CHI_
_Conference Extended Abstracts on Human Factors in Computing Systems -_
_CHI ’08_. Florence, Italy: ACM
Press, 2008, p. 3905. \[Online\]. Available:
[http://portal.acm.org/citation.cfm?doid=1358628.1358953](http://portal.acm.org/citation.cfm?doid=1358628.1358953 "")
- \[195\]
K. Isbister and N. Schaffer, _Game Usability: Advice from the Experts_
_for Advancing the Player Experience_. San Francisco, Calif. : Oxford: Morgan Kaufmann ; Elsevier Science
\[distributor\], 2008.

- \[196\]
T. Westin, I. Hamilton, M. Hinn, and R. van Tol, “Building a Manifesto
for Game Accessibility,” San Francisco, CA, USA, 2015. \[Online\].
Available:
[https://www.gdcvault.com/play/1021849/Building-a-Manifesto-for-Game](https://www.gdcvault.com/play/1021849/Building-a-Manifesto-for-Game "")
- \[197\]
“Game accessibility guidelines — A
straightforward reference for inclusive game design.” \[Online\]. Available:
[http://gameaccessibilityguidelines.com/](http://gameaccessibilityguidelines.com/ "")
- \[198\]
M. Johansen, M. Pichlmair, and S. Risi, “Squeezer - A Tool for Designing
Juicy Effects,” in _Extended Abstracts of the 2020 Annual_
_Symposium on Computer-Human Interaction in Play_, ser. CHI
PLAY ’20. New York, NY, USA:
Association for Computing Machinery, Nov. 2020, pp. 282–286. \[Online\].
Available: [https://doi.org/10.1145/3383668.3419862](https://doi.org/10.1145/3383668.3419862 "")
- \[199\]
T. D. Pettersson, “SFXR,” 2007. \[Online\]. Available:
[http://www.drpetter.se/project\_sfxr.html](http://www.drpetter.se/project_sfxr.html "")
- \[200\]
A. Nealen, A. Isaksen, and D. Gopstein, “Exploring Game Space Using Survival
Analysis,” in _Foundations of Digital Games_, 2015.

- \[201\]
A. Isaksen, D. Gopstein, J. Togelius, and A. Nealen, “Exploring game space of
minimal action games via parameter tuning and survival analysis,” _IEEE_
_Transactions on Games_, vol. 10, no. 2, pp. 182–194, 2018.

- \[202\]
G. Smith, J. Whitehead, and M. Mateas, “Tanagra: A mixed-initiative level
design tool,” in _Proceedings of the Fifth International Conference_
_on the Foundations of Digital Games_, ser. FDG ’10. New York, NY, USA: Association for Computing
Machinery, Jun. 2010, pp. 209–216. \[Online\]. Available:
[https://doi.org/10.1145/1822348.1822376](https://doi.org/10.1145/1822348.1822376 "")
- \[203\]
M. Guzdial, N. Liao, and M. Riedl, “Co-Creative Level Design via Machine
Learning,” _arXiv:1809.09420 \[cs\]_, Sep. 2018. \[Online\]. Available:
[http://arxiv.org/abs/1809.09420](http://arxiv.org/abs/1809.09420 "")
- \[204\]
A. Liapis, G. N. Yannakakis, and J. Togelius,
“Sentient Sketchbook: Computer-Aided Game
Level Authoring,” in _Foundations of_
_Digital Games_, 2013, p. 8.

- \[205\]
J. Levine, C. B. Congdon, M. Ebner, G. Kendall, S. M. Lucas, R. Miikkulainen,
T. Schaul, and T. Thompson, “General video game playing,” in
_Artificial and Computational Intelligence in Games_, ser. Dagstuhl
Follow-Ups, S. M. Lucas, M. Mateas, M. Preuss, P. Spronck, and J. Togelius,
Eds. Dagstuhl, Germany: Schloss
Dagstuhl–Leibniz-Zentrum fuer Informatik, 2013, vol. 6, pp.
77–83. \[Online\]. Available:
[http://drops.dagstuhl.de/opus/volltexte/2013/4337](http://drops.dagstuhl.de/opus/volltexte/2013/4337 "")
- \[206\]
A. Khalifa, M. C. Green, D. Perez-Liebana, and J. Togelius,
“General video game rule generation,” in
_2017 IEEE Conference on Computational_
_Intelligence and Games (CIG)_. New York, NY, USA: IEEE, Aug. 2017, pp. 170–177. \[Online\].
Available: [http://ieeexplore.ieee.org/document/8080431/](http://ieeexplore.ieee.org/document/8080431/ "")
- \[207\]
R. D. Gaina, A. Couetoux, D. J. N. J. Soemers, M. H. M. Winands, T. Vodopivec,
F. Kirchgesner, J. Liu, S. M. Lucas, and D. Perez-Liebana,
“The 2016 Two-Player GVGAI Competition,”
_IEEE Transactions on Games_, vol. 10, no. 2,
pp. 209–220, Jun. 2018. \[Online\]. Available:
[https://ieeexplore.ieee.org/document/8100955/](https://ieeexplore.ieee.org/document/8100955/ "")
- \[208\]
D. Perez-Liebana, J. Liu, A. Khalifa, R. D. Gaina, J. Togelius, and S. M.
Lucas, “General Video Game AI: A Multi-Track Framework for
Evaluating Agents, Games and Content Generation Algorithms,”
_arXiv:1802.10363 \[cs\]_, Feb. 2018. \[Online\]. Available:
[http://arxiv.org/abs/1802.10363](http://arxiv.org/abs/1802.10363 "")
- \[209\]
M. Johansen, M. Pichlmair, and S. Risi, “Video Game Description Language
Environment for Unity Machine Learning Agents,” in _2019 IEEE_
_Conference on Games (CoG)_, Aug. 2019, pp. 1–8.

- \[210\]
T. Schaul, “A video game description language for
model-based or interactive learning,” in _2013_
_IEEE Conference on Computational Inteligence in Games_
_(CIG)_. Niagara Falls, ON,
Canada: IEEE, Aug. 2013, pp. 1–8. \[Online\]. Available:
[http://ieeexplore.ieee.org/document/6633610/](http://ieeexplore.ieee.org/document/6633610/ "")
- \[211\]
M. Cook, S. Colton, and J. Gow, “The ANGELINA Videogame Design
System—Part I,” _IEEE Transactions on Computational_
_Intelligence and AI in Games_, vol. 9, no. 2, pp. 192–203, Jun. 2017.

- \[212\]
——, “The ANGELINA Videogame Design System—Part II,”
_IEEE Transactions on Computational Intelligence and AI in Games_,
vol. 9, no. 3, pp. 254–266, Sep. 2017.

- \[213\]
B. Keogh, “An Incomplete Game Feel Reader,” Mar.
2017\. \[Online\]. Available:
[https://brkeogh.com/2017/03/31/an-incomplete-game-feel-reader/](https://brkeogh.com/2017/03/31/an-incomplete-game-feel-reader/ "")
