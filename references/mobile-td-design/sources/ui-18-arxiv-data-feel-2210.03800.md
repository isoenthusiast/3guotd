URL: https://arxiv.org/pdf/2210.03800
TITLE: Data Feel: Exploring Visual Effects in Video Games to Support Sensemaking Tasks
RETRIEVED: 2026-11-22
METHOD: web_extract

# Data Feel: Exploring Visual Effects in Video Games to Support Sensemaking Tasks

Hongwei Zhou<sup>*</sup> Angus G. Forbes<sup>†</sup>

Department of Computational Media

University of California, Santa Cruz

## ABSTRACT

This paper explores the use of visual effects common in video games
that support a range of tasks that are similar in many ways to analysis
tasks supported in visual analytics tools. While some visual effects
are meant to increase engagement or to support a game’s overall
visual design, we find that in many games visual effects are used
throughout gameplay in order to assist a player in reasoning about the
game world. In this work, we survey popular games across a range
of categories (from casual games to “Triple A” games), focusing
specifically on visual effects that support a player’s sensemaking
within the game world. Based on our analysis of these games, we
identify a range of tasks that could benefit from the use of “data feel,”
and advocate for the continued investigation of visual effects and
their application in data visualization software tools.

**Index Terms:** [Human-centered computing]: Visualization—
Visualization techniques.

## 1 INTRODUCTION

The overarching trend in data visualization is to design software
tools using a minimalist aesthetic so as not to introduce visual clutter
that could impede a data analysis. For example, Tufte famously
advocates for a low “data-to-ink ratio” in which “nothing can be
erased without losing information” [47]. While the use of what has
come to be called “chartjunk” [6, 16] has shown to improve recall
and engagement in some cases [7, 8, 19], the prevailing wisdom
regarding representing information for analysis purposes adheres to
these minimalist guidelines, as extraneous visual elements can interfere with efficient visual processing, both in static and interactive
visual representations [51]. Munzner presents a series of “rules of
thumb,” summarizing empirical evidence related to the perception
of various data representations and cautioning against the use of
effects that “impose significant cognitive load on the viewer” [37].
In particular, she warns against the cognitive overload that can occur
when animations simultaneously change across different views, as
users are blind to regions that they are not currently focusing on,
which may cause them to rely on memory rather than their eyes.
At the same time, Munzner underscores the importance of visual
feedback and responsive interactions, ideally occurring “immediately”, or in less than 1 second. To reduce interaction costs, she
advocates for designing visualization software that explicitly makes
use of effective visual encodings to draw attention to automatically
detected features, while at the same time acknowledging that the
complexity of many analysis tasks requires a human in the loop.

On the other hand, many video games take advantage of a much
richer palette of visual elements, seemingly without hindering a
player’s ability to carry out various game tasks. Animated visual
effects (or “vfx”) are an integral component of most video games,

and their use determines how a player interprets and responds to the
various elements within the game. That is, beyond aesthetics, and in
addition to enhancing player engagement, the use of visual effects
is an essential component of game design that facilitates sensemaking [42], *despite* the visual complexity that it introduces. A popular
game design framework called MDA (which stands for “mechanics,
dynamics, and aesthetics”) articulates the interrelationships between
the different game elements, explaining that aesthetic choices necessarily have an impact on data representation, algorithms, and player
behavior [23]. Swink examines what he calls “polish”, which he
describes as the effects that are needed for a player to create a “detailed, expansive mental model” of the game world, explaining the
importance of incorporating congruent polish to create an effective
interactive experience [46]. Specifically, he discusses the significance of visual effects as “temporary indicators of interaction and
movement”, such as particles, trails, and sparks, which enable a
player to infer “a universe of possible interactions” from a small set
of observations.

In this paper, we explore visual effects in games in terms of their
ability to aid a player in reasoning about a complex virtual environment. We specifically focus on in situ vfx that are part of the main
action of the game itself, rather than cut scenes or transitions. Rather
than comprehensively surveying a wide range of games, we instead
choose to focus more in depth on a few popular recent games across
four different categories (puzzle, platformer, action, and strategy).
Users, once familiar with the gameplay, become adept at processing
even very busy animations and visually saturated games scenes, and
are able to quickly analyze information in order to make both split
second decisions and longer term strategic decisions. Moreover,
these visual effects are also used to impart information about how
to interact with the game environment, signaling meaningful events
and articulating the underlying game mechanics.

Section 2 frames our contribution in terms of previous research
in visualization related to animation and visual effects. Section 3
investigates a range of games across multiple genres and presents
categories of uses of visual effects in games. Section 4 discusses
opportunities for visualization designers to incorporate “data feel”
into data visualization projects.

## 2 RELATED WORKS

### 2.1 Animation & Motion in Data Visualization

Hubert & Healy [21] find that motion coding is independent from
color and shape coding and that more subtle motions are less distracting to users, while still easily perceived. Through a series of
experiments that analyze various aspects of motion— velocity, direction, and on-off blinking— they demonstrate that each of these
properties are effective for encoding multiple data values in a prototype astrophysics simulation, provided they are above particular
thresholds of perceptibility. Bartram et al. [5] show that brief, simple motions are perceptually efficient ways to distinguish objects
in a crowded display, and explore how motion maps to perceptual
cues. Ware & Bobrow [52] introduce a technique termed “motion
highlighting” to explore the use of motion in node-link diagrams,
finding that translating or scaling nodes can be more useful for sup-

<sup>*</sup>e-mail: hzhou55@ucsc.edu

<sup>†</sup>e-mail: angus@ucsc.edu porting rapid interactive queries on node-link diagrams than static
highlighting methods. Inspired in part by character animations and
visual effects in video games, Lockyer & Bartram [30] examine
how ambient visual cues can evoke a range of emotional responses
in visualizations, and find that variations in path curvature, speed,
and texture layout within motion textures can influence affective
impressions. Chalbi et al. [9] explore the Gestalt law of common fate
applied to the position, size, and luminance of data objects. A survey
paper by Chevalier et al. [11] updates the influential taxonomy introduced by Baecker & Small [4], identifying 23 “roles” of animation
commonly encountered in visual interfaces, such as “revealing data
relationships” and “illustrating an algorithm.”

Researchers have studied the use of motion within interactive data visualizations to highlight particular data types or clusters [15, 18, 31, 49]. Chevalier et al. [10] look specifically at “staggered” animations, finding inconclusive results about their potential
benefits (such as reducing visual occlusion). Robertson et al. [43]
note that while users found a Gapminder style data animation to be
“enjoyable and exciting,” it was “the least effective form for analysis”
when compared to two static visualizations. Nonetheless, a range
of projects effectively feature animation as a primary component
for presenting streaming data. For example, Huron et al. [24] introduce a design metaphor that presents moving pieces of data falling
from the top of the screen into a bar chart, pie chart, or bubble
chart representation to illustrate simultaneously both the flow of
information over time and an aggregate snapshot of the current state
of the data. Other projects that use animation in creative ways to
represent patterns in streaming data include visualizations of the
stock market using information flocking [36], animated cartograms
of urban traffic [12, 39], and creative representations of evolving
cultural data sets [17, 29].

### 2.2 Game Visualization

Medler & Magerko [33] discuss the use of “playful infovis” within
games to help players make sense of various game statistics to facilitate tracking competition between players and teams. Zammitto [53]
explores game interface design in games where players navigate
complex 3D worlds, such as the use of heads-up displays, minimaps,
and other 2D overlays for wayfinding and resource management
tasks.

Game analytics practitioners make use of various visualization
techniques to analyze player behavior, to tune game strategies, and
to balance resource allocation systems. For example, Drachen &
Schubert [13] investigate the use of heat maps and trajectory visualizations for analyzing spatiotemporal patterns in video games. More
sophisticated visual analytics approaches are introduced by Nguyen
et al. [40], which presents a network visualization tool called *Glyph*
to analyze problem solving strategies in puzzle games. Ahmad et
al. [2] utilizes visualization tools as part of their Interactive Behavior
Analytics methodology to model individual and team strategies, and
Klein et al. [27] makes use of a visualization tool called *StratMapper*
to reason about sequences of users’ game behaviors.

### 2.3 Visual Effects Analysis

Although visual effects are a crucial component of video games,
exploring the sensemaking aspects of these effects is not a main
focus of research within the technical games research community.
Rather, analyses of game effects tend to focus on, for instance, on
understanding the psychological effects of gameplay [25], cultural
representations in games [38], or a game’s underlying operational
logics [50]. Manovich [32] considers games as a form of new media,
extending traditional film analysis approaches to make sense of new
types of narrative that emerge when navigating different types of
“computer space”, such as the 3D environments presented in the
video games *Myst* and *Doom.*

Kucic [28] describes strategies for successful prototyping emphasizes the importance of utilizing visual effects to add “juice” into a
video game so that it “feels alive and responds to everything you do.”
These effects serve to provide feedback to the player “by constantly
letting them know on a per-interaction basis how they are doing.” An
instructive Game Developers Conference presentation by Jonasson
& Purho [26] demonstrates a practical example of adding simple but
powerful visual effects to a customized version of the early Atari
game *Breakout.* Without altering the underlying mechanics of the
game, they successively add responsive effects, such as a particle
system that sparks when the paddle is hit or animations that play as
a brick is disintegrated. Although each additional effect increases
the overall visual clutter, this does not at all impede the user from
navigating the game. In fact, because each of the visual effects reinforces the game mechanics, they increase a player’s engagement and
improves the player’s focus. A study by Hicks et al. [20] similarly
finds that visual embellishments improve player experience of video
games.

Swink’s influential text *Game Feel* explicitly breaks down various
aspects of game design into a series of guidelines— what he terms input, response, context, polish, metaphor, and rules metrics— which,
he argues, must be simultaneously developed in order to give a game
“juiciness” and provide an enjoyable, coherent, and immersive experience for a player. Specifically, Swink analyzes games with visual
effects of varying degrees of complexity, such as *Asteroids, Super
Mario Brothers,* and *Gears of War,* and develops a set of high-level
principles to promote the design of “virtual sensation” within video
games. More recent work by Pichlmair & Johansen examines the
game feel of contemporary games related specifically to moment-tomoment interactivity and microinteractions, focusing on examples
of visual effects used to highlight particular character movements
(e.g., “invincibility frames”), game events (e.g., “screen shake”),
time manipulation (e.g. “bullet time”), and object persistence (e.g.
“particle trails”) [41].

Hubert-Wallander et al. [22] summarize research into the positive
effects that playing fast-paced video games has on increased visual
attention, enabling players to more effectively identify and process
endogenous and exogenous data cues. Milam et al. [35] analyze
camera movement and object motions in video games, exploring
how repeating, harmonic, or rhythmic motions can mitigate visual
complexity. Milam et al. [34] further explore how game designers
aggregate low-level motion features, including speed, size, and density, into meaningful visual effects that help users differentiate game
elements and ignore distractions.

## 3 USES OF VISUAL EFFECTS IN VIDEO GAMES

Here we explore different uses of visual effects that can assist sensemaking tasks based on our survey of video games across multiple
genres. These uses are not exclusive to each other. Rather, they are
distinguished based on the different intentions a designer might have
when utilizing visual effects. While we focus on a few examples
of games with pronounced visual effects in particular genres, we
believe the uses identified here are shared in many other games, and
in the attached appendix after the references we provide a table with
additional examples, along with associated images and video links.

### 3.1 Drawing Attention

Given the number of events that can occur simultaneously during
gameplay, a common use of visual effects in games is simply to
direct the user to pay attention to important game elements. This
relates to a larger categories of visual techniques that try to establish relations between visual elements, such as camera framing or
dynamic lighting [44]. We find that the uses of *drawing attention*
specifically serves to establish a demarcation between foreground
and background elements, providing important clues to the player
about which visual elements are relevant for gameplay.

---

Figure 1: *Celeste’s* green diamond idle animation (top): It hovers
up and down, along with white highlight and green particles. (bottom): The animation of each stone shaking, signaling stone platform
collapse .

*Idle animations* typically describe the animations of the playable
character when the player stops moving [48]. We also use this term
to refer to the subtle cuing effects attached to any game entity that
is not currently being interacted with. These effects can automatically activate periodically, or in response to a pause in user activity,
offering a subtle hint about additional interaction options available
in the game. For example, idle animations are used in *Sokobond,* a
minimalist puzzle game in which the player manipulates chemical
elements within a grid of cells to create composite substances. The
corner points of the grid cells include specific interaction mechanics
that let the user break or strengthen bonds between chemical elements. When a relevant corner point is ignored, the corner points
begin to pulsate rhythmically, evoking a “breathing” effect that contrasts with the other static game elements, such as borders and grids.
That is, this animation serves as a non-intrusive reminder to the
players that these corner points are not part of the background, but
rather are meant to advance the gameplay.

Similarly, in the 2D platforming game *Celeste,* the player controls
the character Madeline to get past levels using different abilities,
such as jumping and dashing. A range of game elements utilize
idle animations through rhythmic up-and-down bouncing motions.
These include strawberries (which are key collectibles in the game),
green diamonds (which recharge the player’s ability to dash quickly),
as well as speech bubble icons (which indicate that a character can be
spoken to). These effects draw the user’s attention to particular game
elements, inviting player interaction, and moreover they also serve
a clear visual separator of foreground and background elements,
indicating which elements are important for gameplay versus which
elements can be ignored.

In addition to animation, many other visual properties, such as
color and brightness, serve as key game design considerations to
help players understand the game narrative. In *Celeste,* the first
level of the game takes place in a city ruin during winter. The
color palette of the background is muted and cold, while gameplayrelated entities, such as strawberries and green diamonds, stand
out due to their bright, warm colors, along with glowing animated
effects, as shown in Fig. 1. The green diamonds are represented
using particle effects, which emphatically draw a player’s attention,
and are also inherently visually pleasing, positively reinforcing the
player’s desire to interact with them. In contrast to the first level,
later in the game the background environment becomes more warm,
lively, and colorful. This progression from a muted to saturated color
palette helps players first situate themselves in the game world and
become familiar with the visual language of the game. Once a basic
mastery of game interactions is established and a clear delineation
between foreground and background elements is made, more visual
variety can be introduced without confusing the player.

### 3.2 Representing Mechanics

The term “mechanics” is used to describe the rules that govern the
actions and goals of a game. Zubek [54] defines game mechanics as

Cuphead

Figure 2: In *Cuphead,* blue particles (found beneath the handle on
the left subfigure, next to the red base on the right subfigure) indicate
shot hit. The white overlay on the machine on the right subfigure
indicates damage done.

comprised of three basic components— *entities, actions* performed
by or on entities, and *rules* that describe the conditions and outcomes
of those actions— that describe the nouns, verbs, and grammar of the
game, respectively. Hunicke et al. [23] further contextualize mechanics as existing “at the level of data representation and algorithms.”
In order to play a game successfully, the user has to understand the
range of possibilities available within the game, which are dependent
on the underlying game mechanics. While players may be familiar
with aspects of mechanics associated with particular game genres,
games that efficiently introduce new mechanics successfully help
the user become familiar with them through a range of visual cues.
Indeed, part of the enjoyment of playing a video game is gaining a
mastery of these mechanics and taking advantage of them to explore
the various possibilities that they enable.

A major component of game design involves guiding the player
to “think” using the logic of the game’s mechanics. Visual effects
can provide a consistent visual language that helps to establish the
rules of gameplay. For instance, the game *Cuphead* is visually rich,
with a unique hand-drawn aesthetic that evokes the style of early
cartoons, and uses a wide range of visual effects to “explain” various
aspects of the game logic. During a battle, when a player shoots,
a blue explosion effect is used to indicate that the shot hits the
enemy. However, the shot landing does not necessarily lead to the
enemy taking damage (since some enemies can become temporarily
invincible or have protected spots). Therefore, another distinct visual
effect where the enemy flashes white is used to communicate damage
done. As shown in Fig. 2, the two visual effects— the explosion of
blue particles when a shot lands, and the white flashing to indicate
damage— are essential for providing user feedback about their
actions during the battle. Unlike “background” visual effects that
are used to articulate overall game aesthetics, each game mechanic
effect tends to indicate a single and specific meaning, continually
reinforcing the logic of the game.

Game mechanic effects are used extensively in strategy games.
In the popular *Total War* series, an entire army is represented by a
single character on the game’s “strategy map.” Attrition mechanics
are invoked when an army enters into a disadvantaged environment,
such as harsh winter snow or lands affected by “vampiric corruption.” This is typically represented by distinctively negative imagery
and visual effects, such as animations that display red sparks and
skulls or animations of wounded people stumbling and falling over.
During battles scenes in *Total War,* each unit has a single number
representing its “morale.” When the morale falls below a certain
point, the entire unit stops fighting and starts to retreat from the
battlefield. In *Total War: Three Kingdoms,* this is represented by
a flashing flag icon on the unit, providing a warning to the player.
These effects clearly distinguish these units from those still engaged
in battle, whose icons are represented with solid, static colors. This
visual language articulates the logic of the battle, helping the player
to quickly dissect the battle scene in order update their strategy, if
necessary.

In addition to representing a specific unit of meaning, the use of
a visual effect can also impart more nuanced information. This is

---

3746

Figure 3: Two different archer fire modes in *Total War: Troy.* The
top screenshot shows arc fire to avoid hitting friendly troops at the
front line. The bottom screenshot shows direct fire when the archers
have a direct line of sight to their targets.

exemplified by certain attributes of the visual effects, such as length,
duration, and density being mapped to particular attributes within
the game systems, such as range of the dash mechanic in *Celeste,*
the range of explosions in *Hades,* or effectiveness of archer firing in
the *Total War* series. This is akin to visualization studies that explore
how particular attributes of motion, such as amplitude, frequency
and phase, can be used to encode data [52].

In *Celeste,* the player can quickly “dash” in any of eight different
directions to manipulate their position, even while in mid-air. This
action is accompanied by a visual animation of a trail, which takes
the form of several player silhouettes, as shown in Fig. 4. Without
these effects, it would be difficult to track the range and travel trajectory of the dash simply because of how quickly the dash happens.
Similarly, a visual effect is used in *Hades* when a magical explosion occurs, outlining a colored circular boundary to indicate which
area is directly impacted by the explosion, as shown in Fig. 5(right).
These correlations between the player’s abilities and their visual
representation enable the player to assess and master the available
actions in the game system.

Figure 4: The player silhouettes as a trail after dashing in *Celeste,* providing insight into properties of the
game’s dash mechanic.

During the battles in the *Total War* series, artificial trailing
effects are added to long range
trajectories, such as arrows and
javelins. This effect is a particularly helpful form of visual
communication, as the Total War
games feature sophisticated simulations of ranged weaponry. As
shown in Fig. 3, the archers have
two modes of shooting: either direct shots if enemies are in direct
lines of sight (bottom), or arched
shots if no direct sighting (top),
which typically takes more travel
time and has less accuracy. The
density of the arrow trail also in-

dicates different qualities of archer units, such as their firing rate.
When the player orders an attack order but sees very few arrow trails,
they might suspect that the archers are not in a good position to fire,
due to the terrain or line of sight being blocked. The most recent

MERCURA

Figure 5: (left): In *Hades,* the enemy holds a pose and is colored
with a white overlay to signal that an attack is imminent. (right):
The magic explosions in *Hades* have easily discernible outlines to
clearly indicate their area of impact.

entry *Total War: Warhammer III* also introduced lazy health bar,
which reacts to “incoming damage by highlighting the new value
and draining to it over time, helping highlight sudden large bursts of
damage” [1]. Similar to the use of the trail effect in *Celeste,* changes
in state over time are communicated through visual effects.

### 3.3 Signaling Events

Visual effects can also signal that important gameplay events are
either about to take place or have just happened. In the context of
video games, events refer to specific occurrences that change the
state of the game, typically actions taken by an entity (e.g, attacking
an enemy) or interaction between two entities (e.g., the player took
damage after falling on spikes).

One of the most common uses of a signaling effect is to indicate
a meaningful upcoming event, preparing the player to transition to a
different modality of gameplay. In action games, this is also called
“telegraphing,“ where the enemy characters have a recognizable
animation or pose before the attack actually hits, such as crouching
into a fighting stance or brandishing their weapons. In *Hades,* when
an enemy is about to attack they become highlighted in white (Fig. 5,
left). In *Celeste,* there are stone platforms where the player can only
step on it once before they collapse. The stone floor plays a shaking
animation before it disappears as a warning to the player (Fig. 1,
bottom).

This type of visual effect can also signal events that already happened, mostly commonly used to communicate entity interactions
or to provide visual feedback to player actions. For example, in
*Sokobond,* when a corner point is used by the player— such as when
a bond is cut or strengthened— the corner point expands suddenly,
then quickly returns its original size. This “jumping” animation not
only draws the player attention to the element, but also establishes
a connection between the corner point behavior and the chemical
substance in the cell. Without this motion, one can imagine that
bonds are cut without the player realizing it happening or why it
happened. Similarly, in *Cuphead,* the player is able to “parry” certain entities in the game to collect “charges” that can be used to
carry out powerful attacks needed to defeat certain enemies. These
parry events are treated as significant moments in the gameplay. In
addition to visualizing a purple glow where the parry occurs, the
entire game freezes for a moment to emphasize the importance of the
event. Visual effects that signal events add duration to an otherwise
instant occurrence within the game, and these temporal fluctuations
are thus part of the visual language of the game system.

## 4 APPLYING VISUAL EFFECTS TO DATA VISUALIZATIONS

Video games and data visualizations of course have entirely different
purposes. We argue that an understanding of the different types
of game effects could be leveraged by visualization designers to
create more engaging interactive visualization to support various
sensemaking tasks. For example, the use of idle animations, used
widely in games, are very effective at reminding a player of what
interface options are available and what game elements are useful.
Rather than distracting the player from completing particular game tasks, they support them. That is, they strike an appropriate balance that triggers the player’s awareness without being distracting.
The various “drawing attention” mechanisms found in minimalist
puzzle games, such as *Sokobond, Mini Metro,* or *Wordscapes,* seem
particularly amenable to visual analytics dashboards. Referencing
Swink’s *Game Feel,* these subtle reminders have the potential to
give the impression that the entire visualization space is “a universe
of possible interactions,” directing the user to various functionality available to support particular analysis tasks. Moreover, if data
visualization tools incorporated these types of visual effects, this
would make it clear which elements could be considered foreground,
requiring attention, versus those that were in the background. From
our analysis of video games, it seems clear that the reason that players can navigate busy visual scene in games is precisely because they
successfully define a visual language that functions to separate foreground from background elements, often in very sophisticated ways,
helping players to reason strategically about the game elements, and
changing as the various contexts (dwindling resources, presence of
enemies, etc.) update over the course of the game.

Visual effects can be used to represent game mechanics, whereby
particular rules or procedures of the game systems are communicated. The player is (ideally) able to effortlessly pick up the visual
language via these effects and generate reasonable hypotheses about
how the internal system functions. In the context of data visualization, it could be useful for visualization designers to think about how
important parameters or processes can be obscured from the user,
and how these could be communicated through the use of visual
effects. Visualization designers can identify and expose hidden intricacies that can assist users to better make sense of the visualization
tool and the data it presents. While data visualization tools tend not
to take advantage of what we are calling “data feel,” some interesting projects do include useful visual effects. For example, Suh et
al. [45] describe an interface that presents a sophisticated physics
simulation of force-directed graphs. Through this interface, the user
can customize the attracting and repelling forces of nodes to visualize different clustering results. In this case, the specific mechanics
of force acting between nodes are hidden, only inferred by their
movements and final clustering results. Additional visual effects,
such as color on the edges that communicate the acting of forces,
can clarify underlying systemic processes without being distracting,
supporting rather than interfering with the data analysis process.

Visual effects used for event signaling in games also could be
usefully adapted to data visualization contexts. Specifically, and
perhaps counterintuitively, visual effects can provide meaningful
feedback to user actions especially when the interface is busy. For
instance, many video games maintain an awareness of the player’s
current situation, and signal to the user, for example, when they are
in imminent danger, or when an achievement is about to be unlocked.
In a similar manner, we can conceive of a visualization tool that
is aware of the potential for introducing bias into a data analysis
session, or that is able to sense that a particular modeling choice
would lead to statistical significance.

More generally, designers can utilize visual effects to better organize the interface without obscuring information. Many visualization
tools focus on offering comprehensive views and menus of interactive options that can unintentionally overwhelm the user. Based on
our survey in Sec. 3, visual effects can serve to not only prioritize
different visual elements on screen, but also provide visual feedback
to user interactions and to systemic events. In both of these cases, visual effects promote sensemaking and assist with selective attention,
including the selection of on-screen elements (foreground vs. background) and the selection of relevant elements over time (mechanics
and events). Game effects can enable designers to embed additional
interactive functionality, thus allowing more “spaces” in which to
present information and to create new kinds of user experiences.

### 4.1 Planning vs. Execution

Many of the visual effects investigated in Sect. 3 demand a player
reaction within a short span of time, especially for effects representing signaling events, such as those used for telegraphing imminent
enemy attack in *Hades.* Even for effects that are meant to emphasize certain aspects of the game, such as the arrow trails in *Total
War,* the intention is to provide relevant feedback so the player can
quickly assess the battle situation and make decisions. This is distinct from other player actions where situation assessment is less
urgent. Atymiz et al. [3] distinguish between *planning* and *execution*
interactions. The games with more demand on execution typically
require the player to react to the situation on the fly, such as in action
and shooting games, while those with more demand on planning
require the player to learn the game system, such as in puzzle games.

With this distinction in mind, we can see that the goals of many
visualization tools are mainly focused on planning: the user is mostly
responsible for learning the mechanics of the visualization tool,
generating and testing out hypotheses without any introduction of
time constraints. This suggests that visualization tools with real time
components, such as, for example, interfacing with robots remotely
or monitoring disasters or outbreaks, are the more salient areas to
experiment with visual effects related to execution. Additionally,
other visualization tools may also have real time execution demands,
such as those that involve intricate modeling or simulation systems.

### 4.2 Juice, Oil, and Pleasurable Interaction

In the game literature we surveyed, “juice,” “polish,” or “game feel”
is often used to describe a wide variety of improvements to gameplay,
and is not necessarily limited solely to simple visual embellishments.
Pichlmair & Johansen [41] provide a taxonomy of techniques that
potentially can be used to improve game feel. In addition to visual
effects, such as screen shake and recoil (of guns) to signal particular
events, they include adjustments that are concerned with non-visual
controls and game mechanics. For example, the *coyote time* effect
refers to a small duration where the player’s avatar can still turn,
walk, and jump after they maneuver off a cliff. Another example
is *corner correction,* which refers to automatically adjusting the
player’s avatar position when walking into a corner to prevent it
from getting stuck when the player fails to walk around the corner
perfectly. Many of these improvements can be considered “oil” (that
makes play smoother) instead of “juice” (that makes play more
engaging), in Swink’s terminology. Both juice and oil are important
to create a more pleasurable interactive experience.

On a similar note, Elmqvist et al. [14] argue for the importance of
creating compelling interactions in information visualization tools.
They provide a series design guidelines for “fluid interactions,” including immediate visual feedback and visceral rewards for successful interaction to reinforce the visualization’s conceptual model. The
immediate feedback provides users with a sense of embodiment and
immersion so as to minimize “the gulfs of evaluation and execution”
and to help facilitate states of “flow.” Taking inspiration from game
effects can further this line of inquiry in visualization design.

## 5 CONCLUSION

In this work, we survey a range of contemporary video games and
identify three non-exclusive uses of visual effects beyond aesthetics
and entertainment: *drawing attention, representing mechanics* and
*signaling events.* We explore the similarities and differences of goals
between video games and visualization tools and speculate on how
visual effects could assist in sensemaking tasks. Overall, we provide
an initial investigation of visual effects in games and advocate for
further research into the challenges and opportunities in incorporating “data feel” into visualization tools by adopting elements from
video game design into the design of data visualization interfaces.

---

## REFERENCES

[1] Quality-of-life updates in Total War: Warhammer III’s battles and
beyond, 2021. TotalWar.com. tinyurl.com/5x99kazh.

[2] S. Ahmad, A. Bryant, E. Kleinman, Z. Teng, T.-H. D. Nguyen, and
M. Seif El-Nasr. Modeling individual and team behavior through
spatio-temporal analysis. In <u>ACM Computer-Human Interaction in</u>
<u>Play (CHI</u> PLAY), pp. 601–612, 2019.

[3] B. Aytemiz and A. M. Smith. A diagnostic taxonomy of failure in
videogames. In <u>Foundations on Digital Games (FDG)</u>, pp. 1–11, 2020.

[4] R. Baecker and I. Small. Animation at the interface. In B. Laurel, ed.,
<u>The Art of Human-Computer Interface Design</u>, pp. 251–267. Addison-
Wesley, 1990.

[5] L. Bartram, C. Ware, and T. Calvert. Moticons: Detection, distraction
and task. <u>Int. J.</u> Hum., 58(5):515–545, 2003.

[6] S. Bateman, R. L. Mandryk, C. Gutwin, A. Genest, D. McDine, and
C. Brooks. Useful junk? the effects of visual embellishment on comprehension and memorability of charts. In <u>ACM Human Factors in</u>
<u>Computing Systems</u> (CHI), pp. 2573–2582, 2010.

[7] M. A. Borkin, Z. Bylinskii, N. W. Kim, C. M. Bainbridge, C. S. Yeh,
D. Borkin, H. Pfister, and A. Oliva. Beyond memorability: Visualization recognition and recall. <u>IEEE Trans. Vis. Comput. Graph.</u>,
22(1):519–528, 2015.

[8] M. A. Borkin, A. A. Vo, Z. Bylinskii, P. Isola, S. Sunkavalli, A. Oliva,
and H. Pfister. What makes a visualization memorable? <u>IEEE Trans.</u>
<u>Vis. Comput.</u> Graph., 19(12):2306–2315, 2013.

[9] A. Chalbi, J. Ritchie, D. Park, J. Choi, N. Roussel, N. Elmqvist, and
F. Chevalier. Common fate for animated transitions in visualization.
<u>IEEE Trans. Vis. Comput.</u> Graph., 26(1):386–396, 2019.

[10] F. Chevalier, P. Dragicevic, and S. Franconeri. The not-so-staggering
effect of staggered animated transitions on visual tracking. <u>IEEE Trans.</u>
<u>Vis. Comput.</u> Graph., 20(12):2241–2250, 2014.

[11] F. Chevalier, N. H. Riche, C. Plaisant, A. Chalbi, and C. Hurter. Animations 25 years later: New roles and opportunities. In <u>Advanced</u>
<u>Visual Interfaces</u> (AVI), pp. 280–287, 2016.

[12] P. Cruz, A. Cruz, and P. Machado. Contiguous animated edge-based
cartograms for traffic visualization. <u>IEEE Comput. Graph. Appl.</u>,
35(5):76–83, 2015.

[13] A. Drachen and M. Schubert. Spatial game analytics and visualization.
In <u>IEEE Computational Intelligence in</u> Games, pp. 1–8, 2013.

[14] N. Elmqvist, A. V. Moere, H.-C. Jetter, D. Cernea, H. Reiterer, and
T. Jankun-Kelly. Fluid interaction for information visualization. <u>Inf.</u>
Vis., 10(4):327–340, 2011.

[15] R. Etemadpour and A. G. Forbes. Density-based motion. <u>Inf. Vis.</u>,
16(1):3–20, 2017.

[16] S. Few. The chartjunk debate. <u>Visual Business Intelligence Newsletter</u>,
pp. 1–11, 2011.

[17] A. G. Forbes, T. Höllerer, and G. Legrady. Behaviorism: A framework
for dynamic data visualization. <u>IEEE Trans. Vis. Comput. Graph.</u>,
16(6):1164–1171, 2010.

[18] A. G. Forbes, C. Jette, and A. Predoehl. Analyzing intrinsic motion textures created from naturalistic video captures. In <u>Information</u>
<u>Visualization Theory and Applications</u> (IVAPP), pp. 107–113, 2014.

[19] P. Gough, X. Ho, K. Dunn, and T. Bednarz. Art and chartjunk: A guide
for NEUVis. In <u>Visual Information Communication and Interaction</u>
(VINCI), pp. 171–177, 2014.

[20] K. Hicks, K. Gerling, P. Dickinson, and V. Vanden Abeele. Juicy
game design: Understanding the impact of visual embellishments on
player experience. In <u>ACM Computer-Human Interaction in Play (CHI</u>
PLAY), pp. 185–197, 2019.

[21] D. E. Huber and C. G. Healey. Visualizing data with motion. In <u>IEEE</u>
<u>Visualization</u> Conference, pp. 527–534, 2005.

[22] B. Hubert-Wallander, C. S. Green, and D. Bavelier. Stretching the
limits of visual attention: The case of action video games. <u>Wiley</u>
<u>Interdiscip. Rev. Cogn.</u> Sci., 2(2):222–230, 2011.

[23] R. Hunicke, M. LeBlanc, and R. Zubek. MDA: A formal approach to
game design and game research. In <u>AAAI Workshop on Challenges in</u>
<u>Game</u> AI, vol. 4, pp. 1–5, 2004.

[24] S. Huron, R. Vuillemot, and J.-D. Fekete. Visual sedimentation. <u>IEEE</u>
<u>Trans. Vis. Comput.</u> Graph., 19(12):2446–2455, 2013.

[25] K. Isbister. <u>How Games Move Us: Emotion by Design</u>. MIT Press,
2016.

[26] M. Jonasson and P. Purho. Juice it or lose it, 2012.
<u>Game Developers Conference</u>. tinyurl.com/yx3few52.

[27] E. Kleinman, S. Ahmad, Z. Teng, A. Bryant, T.-H. D. Nguyen,
C. Harteveld, and M. Seif El-Nasr. “And then they died”: Using
action sequences for data driven, context aware gameplay analysis. In
<u>Foundations on Digital Games</u> (FDG), pp. 1–12, 2020.

[28] M. Kucic. How to prototype a game in under 7 days, 2005. <u>Gamasutra</u>.
tinyurl.com/2a6fyb8w.

[29] G. Legrady and A. G. Forbes. Data in context: Conceptualizing sitespecific visualization projects. Leonardo, 50(2):200–204, 2017.

[30] M. Lockyer and L. Bartram. Affective motion textures. <u>Comput.</u>
Graph., 36(6):776–790, 2012.

[31] M. Lu, N. Fish, S. Wang, J. Lanir, D. Cohen-Or, and H. Huang. Enhancing static charts with data-driven animations. <u>IEEE Trans. Vis.</u>
<u>Comput.</u> Graph., 2020.

[32] L. Manovich. <u>The Language of New</u> Media. MIT press, 2002.

[33] B. Medler and B. Magerko. Analytics of play: Using information
visualization and gameplay practices for visualizing video game data.
<u>Parsons Journal for Information</u> Mapping, 3(1):1–12, 2011.

[34] D. Milam, M. Seif El-Nasr, L. Bartram, and B. Aghabeigi. Visual
motion in a railed shooter game: A designer study. In <u>Foundations on</u>
<u>Digital Games</u> (FDG), pp. 102–108, 2013.

[35] D. Milam, M. Seif El-Nasr, D. Moura, and L. Bartram. Effect of
camera and object motion on visual load in 3d games. In <u>Entertainment</u>
Computing, pp. 113–123. Springer, 2011.

[36] A. V. Moere. Time-varying data visualization using information flocking boids. In <u>IEEE Information</u> Visualization, pp. 97–104, 2004.

[37] T. Munzner. <u>Visualization Analysis and</u> Design. CRC Press, 2014.

[38] S. Murray. <u>On Video Games: The Visual Politics of Race, Gender and</u>
Space. Bloomsbury Publishing, 2017.

[39] T. Nagel and B. Groß. Shanghai Metro Flow: Multiple perspectives
into a subway system. Leonardo, 50(5):511–512, 2017.

[40] T.-H. D. Nguyen, M. Seif El-Nasr, and A. Canossa. Glyph: Visualization tool for understanding problem solving strategies in puzzle games.
In <u>Foundations of Digital Games</u> (FDG), 2015.

[41] M. Pichlmair and M. Johansen. Designing game feel: A survey. <u>IEEE</u>
<u>Trans.</u> Games, 14(2):138–152, 2022.

[42] P. Pirolli and S. Card. The sensemaking process and leverage points
for analyst technology as identified through cognitive task analysis. In
<u>Intelligence</u> Analysis, vol. 5, pp. 2–4, 2005.

[43] G. Robertson, R. Fernandez, D. Fisher, B. Lee, and J. Stasko. Effectiveness of animation in trend visualization. <u>IEEE Trans. Vis. Comput.</u>
Graph., 14(6):1325–1332, 2008.

[44] M. Seif El-Nasr, A. Vasilakos, C. Rao, and J. Zupko. Dynamic intelligent lighting for directing visual attention in interactive 3-D scenes.
<u>IEEE Trans. Comput. Intell. AI</u> Games, 1(2):145–153, 2009.

[45] A. Suh, M. Hajij, B. Wang, C. Scheidegger, and P. Rosen. Persistent homology guided force-directed graph layouts. <u>IEEE Trans. Vis. Comput.</u>
Graph., 26(1):697–707, 2019.

[46] S. Swink. <u>Game Feel: A Game Designer’s Guide to Virtual Sensation</u>.
CRC Press, 2008.

[47] E. Tufte. <u>The Visual Display of Quantitative Information</u>. Graphics
Press, 2001.

[48] G. Vacheron. 16 idle animations worth dropping your controller for,
<u>2017. GamesRadar+</u>. tinyurl.com/4weywt36.

[49] R. Veras and C. Collins. Saliency deficit and motion outlier detection in
animated scatterplots. In <u>ACM Human Factors in Computing Systems</u>
(CHI), pp. 1–12, 2019.

[50] N. Wardrip-Fruin. <u>How Pac-Man</u> Eats. MIT Press, 2020.

[51] C. Ware. <u>Information Visualization: Perception for Design</u>. Morgan
Kaufmann, 2019.

[52] C. Ware and R. Bobrow. Motion coding for pattern detection. In
<u>Applied Perception in Graphics and Visualization</u>, pp. 107–110, 2006.

[53] V. Zammitto. Visualization techniques in video games. In <u>Electronic</u>
<u>Visualisation and the Arts</u> (EVA), pp. 267–276, 2008.

[54] R. Zubek. <u>Elements of Game</u> Design. MIT Press, 2020.

---

| THREE |  |  |  |  |  |  | SOROBOND |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Effect Name | Category | Description | Why use this effect? | Images | Link | Effect Name | Category | Description | Why use this effect? | Images | Link |  |
| Flip &amp; Bounce | Event Signalling | When two cards are combined, there's a flipping animation, revealing the combined number. And bouncing animation. The bouncing becomes heavier as the number increases | I think this is mostly just for visual effect. It provides direct feedback to player action and also animate the most dramatic part of the gameboard |  | https://tinyurl.com/564rafzc | Broken Line Intro | Drawing Attention | At the start of each level, the broken lines have a fade in and scale down animation to draw the attention to the player-controlled element | to draw the attention to the player-controlled element, as it can be hard to be distinguished from other elements |  | https://tinyurl.com/4vo6w368 |  |
| Next Card Scale Up | Event Signalling | As player hold and swipe, the next card on the top scale up, and scale down once the action is committed, gives a jumping feel to the player | The UI at the top is fairly far away from the game board, i think there's brushing &amp; linking mechanism at play, which tries to connect that part of the UI to player control. And it also draws the attention to that part of the interface (when it immediately scale down after an action is committed) | next |  | Rototing Broken Line | Drawing Attention | The broken lines rotates to constant remind player that they're controlling it | same as above |  | https://tinyurl.com/2s3ayw8d |  |
| Card faces | Event Signalling | Each three cards have faces that not only add character to each card, but also bring attention to combinable cards | The face design serves multiple functions. One is to emphasize distinction between cards with different numbers. And also draw attention to combinable cards as a way to give hints |  | https://tinyurl.com/478tyam8 | Electron &amp; Bond Creation | Event Signalling | The electron fades away &amp; bond appearing are cued to happen together | To create visual connection between electron &amp; bond, as they are mechanically connected (electron is used to make bonds) |  | https://tinyurl.com/2s3ayw8d |  |
| Stretching &amp; Displacing | Event Signalling | As the player drags to make moves, cards that dont combine get stretched and also displaced and then snapped back to its place | The function here is more game-feel since it just gives a certain physical quality to the card | 96 12 |  | Resting Corner Point | Drawing Attention | A corner point modifies the bond (break, strengthen, or rotate), when not used, it slowly pulses to highlight its existence | The subtle and slow pulses can draw attention to these elements. Not being in a static state can also hint at them being gameplay-relevant, rather than just for backdrops. |  | https://tinyurl.com/5xnpb6bp |  |
|  |  |  |  |  |  |  | Jumping Corner Point | Event Signalling | When a corner point is used, the corner points jump by scaling up quickly | It also draws attention to the corner point, as the player can be confused when something happens without realizing that the corner point is used | Same as above | https://tinyurl.com/5xnpb6bp |

| Effect Name | Category | Description | CELESTE Why use this effect? | Images | Link | Effect Name | Category | Description | CUPHEAD Why use this effect? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hovering Animation | Drawing Attention | Gameplay-related things like speech bubbles and strawberry has a hovering animation when idle | There's a theme around dynamic, interaction element with interesting idle animation to seperate them from the background. This is also paired up with other things such as glow, color and particle effects |  | https://tinyurl.com/bdh393wh | Particle Hit | Represent Mechanics Event Signalling | When player's shot hits the enemy's hitbox, the shot stops and the hit animation is played | These two effects work together to communicate two distinct feedbacks: hit but no damage (particle hit, no white-out), hit but damage (particle hit, yes white-out). The places where particle hit occurs also communicate to the player where the hitbox is (it can be ambiguous, see the Carrot in the video). |
| Particle on interactables | Drawing Attention | Just small particle effect around an interactable element | same as above, but the visual language also indicates desirable &amp; undesirable effects(see attribution in total war) |  | https://tinyurl.com/yhx6y3y9 | White-out damage | Represent Mechanics Event Signalling | When player's shot does damage, the enemy sprite flashes white |  |
| White-out | Event Signalling | This is spotted around several elements such as strawberry (when strawberry is obtained), green diamond (highlighting), and main character (when touch spikes) | This has a lot of different usages. The only convergence of these usages are drawing attentions. But the indication of state change is also interesting |  | https://tinyurl.com/ye4hdnjm | Smoke Puff | Represent Mechanics | The continuous smoke puff seems to be the only indication that the boss, or its current stage, is defeated | It is interesting because it don't think the animation itself clearly communicates the state. So the devs had to had this consistent effect |
| Hair Animation | Aesthetic | The protagon's hair moves as she moves | It makes elements only meaningful in temporality visible in any given frame |  | https://tinyurl.com/2scef28x | Spinning Target | Event Signalling | When the target is hit by the ball, it spins to indicated that it was affected | I find this similar to spring shakes in Celeste, and Jumping Corner Points in Sokobond, the main point here is that it draw attention to the interaction and consequence of the two entities (balls and targets) |
| Dash Trail | Event Signalling | Protag leaves a trail when she dashes | Same as above, it also helps the player perceive the dash (how far it goes, what direction does it travel) better |  | https://tinyurl.com/2scef28x | Spinning Coin | Attention | The coin is a key resource to collect in the game. When idle, it spins and shines to constantly draw attention | Similar to Particle on interactables in Celeste, and Resisting Corner Points in Sokobond |
| Stomina Worning | Drawing Attention, Event Signalling | When the player is about to run out of stamina when climbing, the sprite flashes red | Different from previous animation, this animation indicates a state soon to come |  | https://tinyurl.com/7szmest5 |  |  |  |  |
| Stone Floor Shoking | Attention, Event Signalling | When player stands on a stone floor, the stone shakes before the floor disappears | same as above |  | https://tinyurl.com/47rhk9th |  |  |  |  |
| Spring Shakes | Event Signalling | After the spring is used, it shakes to indicate its usage | same as above, but since its animation played after it happened, it is mostly an aesthetic function? But you can argue that it draws attention to the elements |  | https://tinyurl.com/4z34d6pw |  |  |  |  |

| HADES |  |  |  |  |  | TOTAL WAR SERIES |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Effect Name | Category | Description | Why use this effect? | Images | Link | Effect Name | Category | Description | Why use this effect? | Link |  |
| Attack White-out | Drawing Attention, Event Signalling | When the enemy is going to attack, its model has a white-out effect | It is interesting the sort of white-out/highlighting effect is used so much and with such variety |  | https://tinyurl.com/33d32jkt | Arrow Trail | Represent Mechanics |  | The only diegetic visual indication for archers shooting, the shooting rate, the shooting arc etc. |  | https://tinyurl.com/2ud42hpm |
| Magic Effects | Represent Mechanics |  | Besides pure aesthetic, the magic effect also communicates several properties to the player such as the kind of magic, and also its range (with a very clear outline), this is also similar to total war |  | https://tinyurl.com/3x68msus | Attrition | Represent Mechanics | displayed on an army when taking attrition | A diegetic way to indicate the status of an army. This status is a sort of change over game-time (attrition - losing people over time, mustering - gaining), which can be hard to depict diegetically |  | https://tinyurl.com/v1n8xvby |
|  |  |  |  |  |  | Mustering | Represent Mechanics | displayed when mustering troops | Same as above |  | https://tinyurl.com/yc4ae24s |
|  |  |  |  |  |  | Sphere of Influence | Aesthetics | displayed when hovering over an army, in TWTK, the ink motif is reinforced by adding a small ink splatter before the circle fading in | same as above |  | https://tinyurl.com/mrp2pzb9 |
|  |  |  |  |  |  | Flashing Moral | Attention | When the moral on soldiers are low, the icons flash to indicate that they are/will soon be routing | I think it serves as a clear visual partition from the normal soldiers, also draws attention to the part of the failing front |  | https://tinyurl.com/2n7wb5ks |
|  |  |  |  |  |  | Movement Range Animation | Aesthetics | When an army is selected, its movement range gets displayed, theres a subtle animation around its border | I dunnin if this shows something more than visual flavour, I think one can argument that the animation ties the movement range displayed is related to the army selected |  | https://tinyurl.com/2p82xahu |
