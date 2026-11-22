URL: https://www.gamedeveloper.com/design/tower-defense-game-rules-part-2-
TITLE: Tower Defense Game Rules (Part 2)
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

## Tower Defense Game Rules (Part 2)

These what I figured out during playing game and comparison. I have tried some of the rules in the implementation of my game ideas. I hope it is useful for you!

Teddy Phan , Blogger

July 17, 2017

schedule 9 Min Read

expand_content

6.Is there any skill?

Note: With other Rule, a game only select a Rule branch to put into the game, but with this rule, all game can be considered. These Rule branches are for each object in the game

Rule 6.1: There are common skills. It is possible to understand such as the 2 default Skills: Rain of Fire and Call Reinforcement in Kingdom Rush. Skill of no object, the player can use without additional conditions other than the "perfect couple" Mana and Cooldown.

A small variation when the skill is not free but on consuming items as in Fieldrunner 2, can be selected before the game. Please be considered if you do not want to open your own wallet.

Rule 6.2: Hero has Skill, of course. Games with Hero is default that Hero has Skill, a very worth point to validate the Unit. Hero style that players can use the skill on the GUI as Kingdom Rush or click on Hero to select the skill as in Three Kingdom TD.

Rule 6.3: Tower also has skill. The first case is recorded in PvZ 2, I boldly put into a branch of this rule. When players use a "Leaf", the trees show their special abilities like Sunflower harvesting 10 Sun Light immediately, Peashooter firing a consecutive of bean or Bloomerang throwing boomerang in 4 directions. Imagine, if this mechanism is applied in Kingdom Rush for Barrack to send out 5 to 6 soldiers at the same time or the Magic Tower shot 3 times to 3 targets .... Well, I guess I will try one day.

7. Can Tower be upgraded in the battle?

Rule 7.1: The answer is absolutely "No". Players will not be provided with this function, so they will primarily focus on disposing the troops reasonably. The representatives of this rule are the PvZ, the Stop the Knight or the Gun 'n' Glory series (not excluding the GnG Hero and GnG Zombie, being different, which is mentioned later).

Rule 7.2: The answer is "Yes" in one aspect. Most games use this rule. The upgraded Tower will only lead to increasing index and added effects.The game is going to be linear, and the biggest problem for the player is always the choice between building low level Tower full in map and finding key locations on the map then build Towers to max level. This rule makes it easy for the player to calculate, but some can be boring in the maps

Rule 7.3: Multi-branch upgrade. The most elite of this rule can be referred to as Cursed Treasure 2, when upgraded to a certain level, the Towers can turn in two directions for the player to decide, a pleasant headache. You have the option of choosing the Sharpshooter Tower to become a Rangers Hideout or a Musketeer Garrison, and Wizard Tower to become a Arcane Wizard or a Sorcerer Mage that has the rate of Enemy running backwards. The higher the level, the more pivotal the direction is clear, the more options for players. Players can choose different tactics for different situations, create a variety of tactics, reduce boredom, increase replayability. It sounds like a god formula.

8.Is there a Pre-Battle menu for selecting Tower?

Rule 8.1: No, there is no use for this. 1 Rule is quite classic and still dominates the game. There is not much to this rule to say, only slightly constrained when designing a GUI if you want to design quite many Towers. it becomes a frame containing a row of Towers below, and it is also pity to reduce the number of Tower.

Rule 8.2: Pre-selected permission is allowed, if there is a Hero, also permittedly selected. The game has a bit more card collection element. Another exciting headache that PvZ and Fieldrunner bring to the player. In order to support this feature, some games can preview the Enemy units in the new game to make it easier for players to choose. Just as in the case of uprading multi-direction Tower, there are many ways to soLevele a specific situation, increase tactical skill, reduce boredom, and increase your replayability. Sometimes, gathering to complete the Tower or Hero table is also a motivation for the player to finish the game instead of leaving midway through.

9. Can Enemy defeat the Tower?

Rule 9.1: Cannot fight at all, just running. Most of the games use this rule, when designing, there’s no need to think on offensive ability of the Enemy. The player are also assured of the fact that their Towers are not affected by any damage, just focusing on building the optimization is enough.

Rule 9.2: Normally we are peaceful, only ... sometimes rubbing. The first time I played OTTTD, I did not understand why sometimes my Tower’s HP was down with HP, then take a good look I see that some Enemy when running through a Tower and hit it sometime. There is not really one unit that specializes in breaking the Towers, but only their probability differs. The game using this rule should provide a HP Regen for the Tower, which can be a Hero skill as in OTTTD or an external skill. With a moderate level of damage, players have more free-hand stuff, an interesting point.

Rule 9.3: Opponents 1 vs 1, the rule is used in the "PvZ clan", or Stop The Knights, or in the units created from Barracks in Kingdom Rush. When using this rule, just notice unless it is easy to become messy like "World War". Kingdom Rush building few Towers so it is not a problem, in PvZ only Zombie plunged into the Plant is organized so that players are also not difficult to control the game. However, it is not every game that works well on this rule, Stop the Knight is an example. When attacked on a single floor, the units move to Enemy to form two or three crowd of the Warriors and Dragons of medium-range enemy with biggest range, and thus the army rushed into two or three crowd, the troops are undefined, it was difficult for the player to understand the rules and control the game.

I would like to talk about this case a little bit close, if the armies created from Barrack in Kingdom Rush use the 1vs1 rule,so-called if they choose a target, then fight until one of them dies, then if alive, defines a new target, not initially a new target. But the units and enemies in Stop The Knight constantly identify the target "highest danger" to attack so it should fall into many vs many, very chaotic situation. And the player's solution is to pump more troops into that melee and wait for the results. However messy, I feel good ... that feels strange!

10. How about the upgrade outside Battle?

Rule 10.0: There should not be anything to say either.

So the next is the upgrade

Rule 10.1: Upgrade Head - Hero - Skill

Do you like the Elf Defense Upgrading Board - Hero Upgrading Board or Kingdom Rush Tower enhancement and skill? Quite clear, independent, easy-understood. Upgrading that increase the index or add more effects which are clearly shown and balanced. These enhancements make player must calculate the most efficient with available resources. After each of error level, not getting through or do not achieve 3 stars, players can change these updates. The player has a lot to spend time for it, increasing the replayability for the game.

Rule 10.2: upgrading the "Unit" or "Class." The first time I played Cursed Treasure 2, I was really confused with this strange Upgrading Board. Each upgrade is a totally separate item, but both upgrades index and effects, both for Tower, Skill and economy. These enhancements may confuse you in the first place, but the latter is very interestingly and worth-discovering. To be honest I'm pretty addicted to this enhancement.

11. Some unique rules

11.1 The new hybrid Match 3 element.

Tripple Defense does not provide an in-game upgrade system often found in games, but offers Match-3 gameplay such as Triple Town.

Connecting 3 Towers of the same type and Level is to build the upper one with the higher Level at the last position. Players not only calculate the resources to build, but also the location. This rule makes it a bit hard to get used to, but it brings a very casual experience. However, this system generally limits the ability to expand content when it starts with low-level Tower and cost much step to upgrade to a new high Tower. Frankly, I have not played this game til the end yet, hope to have some time to test more.

11.2 Drag the Tower to different positions.

With the games mentioned above, when building Tower in one location is only two ways: "Living forever" or "Say goodbye", there is no way to move one Tower to another location. But Defender of Diosa allows players quite flexibly to do. It is not really a Hero Defense game but quite to same in movement action.

Game provides the Tower that can only fire in one direction, but allows the player to turn the face to the opposite direction. When Enemy runs back and forth, the Tower can be dragged forward to continue to shot, or can be turned backwards. With the game having only 1 lane, the frequency of player manipulation is not too high, quite pleasant. At first glance of the graphics of the game, many people may think that the game is release one when a drag-drop of archers, knights, assassins in front of the carriage of the Duck King (wtf ???). But when playing closely, I found that the mechanism is perfectly suited to a TD game, so I have set it as an example in this article. To reveal a secret is the game allows to recover the Towers HP in the form of Archers, Knights by pulling them up ... the bed, sleeping is good for health. Good, oh yeah. Personally, this experience a really worth to try.

11.3 Target can be selected

The default mechanic in TD games is that the Towers will automatically fire priority target following AI available calculation, but the Fantasy Defense and Carrot Defense series are different. The game allows the player to select a target and the AOE Towers firing to that position will focus their firepower on that location. Players can take advantage of this ability to clear the by-pass Enemy or to clear obstacles. Pretty good and effective. Just a couple of silly times, I focused on the barricade breaking, letting Enemy run through it ... , so just replaying.

These what I figured out during playing game and comparison. I have tried some of the rules in the implementation of my game ideas. I hope it is useful for you!

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
