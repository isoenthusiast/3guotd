URL: https://www.gamedeveloper.com/design/tower-defense-game-rules-part-1-
TITLE: Tower Defense Game Rules (Part 1)
RETRIEVED: 2026-11-22
METHOD: curl

menu Menu search Search search Search

menu

Subscribe

Subscribe

search

close

menu

Topics keyboard_arrow_down

## Related Topics

- ▫️ Art

- ▫️ Audio

- ▫️ Business

- ▫️ Design

- ▫️ Game Platforms

- ▫️ Marketing

- ▫️ Production

- ▫️ Programming

## Recent in Topics

Read More chevron_right

Production

European Game Worker unions publish manifesto warning against unchecked AI usage European Game Worker unions publish manifesto warning against unchecked AI usage

by Imran Khan

Nov 17, 2026

2 Min Read

Production

GenAI-using developers say they mostly employ it for 'research and brainstorming' GenAI-using developers say they mostly employ it for 'research and brainstorming'

by Bryant Francis

Nov 12, 2026

3 Min Read

Trending keyboard_arrow_down

## Related Topics

- ▫️ Layoffs & Studio Closures

- ▫️ GDC Festival of Gaming

- ▫️ Generative AI & ML

- ▫️ Industry Lawsuits

- ▫️ Culture & Dev Communities

- ▫️ Development Tools

## Recent in Trending

Top Stories chevron_right

Design podcasts

Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen

by Game Developer Podcast

Nov 20, 2026

Marketing

Why greenlighting Dressmaker wasn't an easy decision to make Why greenlighting Dressmaker wasn't an easy decision to make

by Bryant Francis

Nov 19, 2026

5 Min Read

Latest News keyboard_arrow_down

## Related Topics

- ▫️ Weekly News Highlights

- ▫️ News Deep Dives

- ▫️ Developer Interviews

- ▫️ Press Releases

- ▫️ Case Studies

## Recent in Latest News

chevron_right

Business

Grand Theft Auto VI is now the biggest video game launch in history Grand Theft Auto VI is now the biggest video game launch in history

by Bryant Francis

Nov 20, 2026

2 Min Read

Business

Ubisoft misses forecast and bets big on AI development Ubisoft misses forecast and bets big on AI development

by Imran Khan

Nov 20, 2026

2 Min Read

[GDC] keyboard_arrow_down

## Related Topics

- ▫️ Interviews & Updates

- ▫️ GDC News

- ▫️ GDC Vault

- ▫️ Register for GDC

- ▫️ Partner with GDC

- ▫️ State of the Game Industry

## Recent in [GDC]

Read More chevron_right

Design podcasts

Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen

by Game Developer Podcast

Nov 20, 2026

Marketing

Why greenlighting Dressmaker wasn't an easy decision to make Why greenlighting Dressmaker wasn't an easy decision to make

by Bryant Francis

Nov 19, 2026

5 Min Read

Events

search

close

- Design

- Commentary

## Tower Defense Game Rules (Part 1)

When Tower Defense games mentioned, people often think of Icy Tower, Splash Damage Tower ... or Enemies with all the special features. But in my experience, building a mechanics with a clear rule system will be a solid direction for future creativity.

Teddy Phan , Blogger

April 27, 2017

schedule 10 Min Read

expand_content

Tower Defense Game Rules (Part 1)

When Tower Defense games mentioned, people often think of Icy Tower, Splash Damage Tower ... or Enemies with all the special features. But in my experience, building a mechanics with a clear rule system will be a solid direction for future creativity. This article is to share people about some of the rules in the current TD games:

1. Win-Lose Law & Goal on Map

Rule 1.1: To let enemy pass the Finish line is reduced to HP (or a unit with equal value). A rule as ancient as the earth, but most games use this one, Goal is usually ... nothing or something for Enemy to run toward, when Enemy is running in – reduce HP, each type of enemies loses a different value of HP.

A variant of this rule may be the case of Plant vs. Zombie, with up to 5 lane, but only one Zombie into the house is Game Over.

Rule 1.2: Enemy attacks Goal, reducing HP by Damage per Hit. For example, Lich Defense, players have to defend Lich's Altar, Enemy runs into Altar and fights with Lich, when Lich's HP = 0 loses. Unlike Rule 1.1, the rule required when designing includes both Atk and AtkSpd for Enemy. And to develop more of this element, the game provides an upgrade system for Lich, increasing HP - Damage and changing the visual.

In the same case in Empire Defense, what differs is Goal is to create a path for Enemy, which will be more clearly stated in the structure of the Map and Rule (Section 2).

Rule 1.3: Enemy to steal the Goal, brought back to the place where the Enemy was created. For example, Enemy will steal a cow in Beware Earth Planet or steal a Gem in the Curse Treasure series at the Fountain to bring it back. The Goal will become the nearest Cow or Gem, Enemy find the neariest way to it, not has to go down the road as normal. Enemy's running rules also vary from old situation to new one, always determining the location of nearest goal to plunder. To reduce the difficulty, the game adds a feature that Goal has the ability to go to its Fountain location, not only a Cow but also a Gem … can run (everything can happen in game world!!!)

2. Map and Rule building tower

Rule 2.1: There are available routes, the Towers are comfortably building on the "roadside" positions - do not build on the road site. Most of the games do use this rule, easy to design - control more difficult than other rules, with this rule, players are allowed to build quite comfortably, meet many tactics like spam low level Towers or build the Towers and push to higher levels at critical locations ...

A "less slightly comfortable" variant is the case of Cursed Treasure 2, where the amount land is huge, but having limit to the type of tower built on it. Jungle Land is only for Archer Tower, Dessert land is for Fire Tower, Frozen land builds the Magical one.

Rule 2.2: With available routes, with fixed building positions in the map. Typically in this form is the Kingdom Rush series, where preloaded positions are located and want to cross the stage, players must calculate very well the time to build the towers in these positions. In some hard-to-reach cases, Youtube is the reinforcement, that has the very unclear feeling that there's only one way to do it, like a puzzle.

Rule 2.3: Without routes, players make their own way by building Tower, Enemy will go on the "path" created by the empty cells - combined with the shortest path calculation algorithm. Two of the brightest representatives that use this rule are Field Runners and Madness TD, which need guidance lines so that players can easily calculate and control their Tower building. The game can add a dead-end calculating system to ban the player from building that position or allow Enemy to break the Tower for new route. A variant that combines Rule 2.1 and 2.3 is the case of Empire Defense when the player starts with one map not having a path - the default position for building the Tower, but the goal is a general who can move between each wave, transforming the cells he crosses into the road and the remaining positions will be to build the Tower, of course.

Rule 2.4: There is no such thing obvious as the three mentioned rules, all Enemy routes - which are also Tower building land, to block Enemy. You can feel the difference of rules in PvZ games and like Trolls vs Vikings, or the exciting Stop The Knights TD game. With this rule, Towers and Enemy directly fight for the location, instead of seeing Enemy just passing through as usual.

Besides: With each Tower each cell is quite characteristic, PvZ brings a feeling like a game as a arrayed tactical game very grandiose. Meanwhile, with the "mobile Towers" visual as an Unit , the battle in Stop The Knights has become extremely hilarious, offering a completely different feeling compared to other TD games.

Private Rule for Trap: Most games use Trap as an Object that does not change characteristic at the location. For example, Lord of Trap or Orc Must Die, the Trap-attached Locations such as roadbed, wall or ceiling retain the nature of the attachments. Cases where Trap changes the character of the attaching location is Castle Doombad or PvZ, when attaching the Trap to the ground, it is not possible to build Towers at that location. Overall Trap is not necessarily a must have in TD games, but rather a good addition to the game, which can change the player's tactics, as well as the expansion of game development.

3. Economy in Battle

Note: By default, regardless of the amount of money originally given to Battle, regardless of upgrades from Battle

Rule 3.1: War is the only source of income, money comes only from destroying Enemy. The majority of the game uses this rule, the more Enemy is killed, the more money to build the Tower - otherwise if it falls to some Enemy, the money will be reduced and …etc – Core loop is working like that. Some games like Kingdom Rush have systems that allow players to make extra money by releasing a wave early. This is a pretty good system, but sometimes it turns into a double-edged sword that always lurks players who want to perfect 3 stars.

Rule 3.2: Economic development and then military development. Planting Sunflowers to harvest Sun Light in PvZ, building Gear Factory to collect gears in Beware Earth Planet or creating Ghosts to collect "Dark energy" (hahaha, kidding, I do not know what it is) are typical examples for these kind of games. The game focuses on balancing the amount of resource and Tower construction on the finite surface of the screen. Players must not only build towers, but also have the money to collect. This sometimes makes the player slightly sting while Enemy is crowded, while most are quite fun with free-handed.

Rule for extra revenue: Extra revenue sources are the parts that players can take advantage of to increase their income, in addition to the above rules, including the following two rules: destroying obstacle to get money: lumbering with the Tree-cutting Skill as in Cursed Treasure 2 or breaking obstacle by Tower like in Fantasy Defense or Carrot Defense. Even Cursed Treasure 2 offers both a Gold Mine and a Mana Well, as well as a 5 or 6 Skill hit that can be exploited. Can the Sun Light be harvested randomly? Yes, in PvZ.

4. Hero or not?

#Hero Definition: A unit or something special, unique, completely different from the rest of the game. Too vague, try to clarify through the examples

Rule 4.1: No, no and no. Most of the current games still use this rule, the game structure is quite solid, the difficulty is stable with all players, GUI game is also neat. However, some games have a process of introducing new ones that are unreasonable or slow, and it also have players feel lack of breakthrough.

Rule 4.2: There is a Hero. With representatives such as Kingdom Rush and Over The Top TD (OTTTD), the game combines TD and RPG genres to provide a compelling experience. With 1 to 3 hero controls depending on the game, the player almost no longer have a hand-free concept. With both causing more Damage, attracting Enemy, in addition of the effectively and candy-eyes Skill, and adding the Hero is a worthwhile addition. However, this is also a very sensitive point, when the difficulty of the same level of stage will vary according to the amount and quality of the hero that the player owns and Hero controlling ability of user. Besides, the support to be through the stage, the Hero also increased the replay of the game. Owning a Hero table sometimes becomes a motivation for players to play to be "Like a Boss" instead of leaving it unfinished.

A slightly defensive variant is the case of Elf Defense or Three KingdomTD: Fate of Wei when the Hero is obviously ... a Tower. In particular, this Tower is built only once in a stage, plus the absolute stats and Skill system, being through one stage depends quite a bit on placing the Tower and turning it into 1 Hero (or at least in my opinion).

5. Definition of flying-army

Rule 5.1: Flying is flying over all. The Airplane or Balloons in Fieldrunner or the Eagle in the Sango TD flying will prove this rule quite clearly. All of them fly straight from place of appearance to goal, ignoring all Towers or terrain elements. Such games often have to be played again and again to pass and achieve 3 Stars win, the process is more and more repeat. That’s the reason why these types of flying destroyers break the laws of grounded-military movements, which the player always have to count on, so the player has to spend a "risk" to when they appear to have to build the Tower right down to where they pass through (which the entire grounded-army has not reached - or can not), and then the Tower stays unfunctional awaiting until next flying units appear then have a chance to fire. An expensive price, a math problem is worth considering for the player.

Rule 5.2: I fly my own path. For this example, in Cursed Treasure 2 has an Eagle Druid Unit with the quite special transformation ability. When in the form of Druid, the old man is a regular infantry, when turning into a form of Eagle he will fly cross a river, which is going through the shortcut. With this rule, the game is also highly replay characteristic with unexpected moves, and also causes the player to extract a part of the resources to solve the situation instantly instead of trying to implement an expected long-term plan.

Rule 5.3: Flying but also just like walking. Actually, the Fly tag does not have as much sense of movement as the flying units still follow the same route as the infantry units. The only difference is that they are only hitted by a number of anti-aircraft Towers, or a different receiving Damage-Formula compared to Infantry (like Tower A to strongly fire Infantry, weakly fire Air Force ... or on the contrary). This rule seems easier for designers and players to manage their resources, and that is also the strength of this rule.

We finish basic rules for Tower Defense game here. Next part, we will discuss about addition rule include Skill, Upgrade Tree and some Unique rule

Read more about:

Blogs

## About the Author

Teddy Phan

Blogger

See more from Teddy Phan chevron_right

## Daily news, dev blogs, and stories from Game Developer straight to your inbox

Game Developer Daily

schedule Daily

## Latest News
More News chevron_right

Business

Grand Theft Auto VI is now the biggest video game launch in history Grand Theft Auto VI is now the biggest video game launch in history

by Bryant Francis

Nov 20, 2026

2 Min Read

More News

Keep up with the latest News, Interviews, and Talk Coverage from GDC Festival of Gaming right here on Game Developer

READ ON

podcasts
Latest Podcasts

-

Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen
Nov 20, 2026

-

Development secrets of Dressmaker, ft. Ruan Rothmann & Sara Laubscher
Nov 13, 2026

-

A second 2026 State of the Game Industry survey? It can happen! ft. Beth Elderkin & Imran Khan
Nov 12, 2026

-

GDC Side Quest - An anti-cheat primer with Lucia Suarez
Oct 30, 2026

-

Busting myths in game writing ft. Bruno Dias, Aysha Farah, & Andrea Saravia Perez
Oct 9, 2026

See all chevron_right

## Game Developer Collective
More chevron_right

Business

Games that sell DLC and in-app purchases appear to benefit most from subscription services Games that sell DLC and in-app purchases appear to benefit most from subscription services

by Bryant Francis

Jan 27, 2026

3 Min Read

Business

Devs are more worried than ever that generative AI will lower the quality of games Devs are more worried than ever that generative AI will lower the quality of games

by Bryant Francis

Sep 16, 2025

4 Min Read

More

## Game Design & Marketing Highlights
See More chevron_right

Design podcasts

Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen

Marketing

Why greenlighting Dressmaker wasn't an easy decision to make Why greenlighting Dressmaker wasn't an easy decision to make

See More
