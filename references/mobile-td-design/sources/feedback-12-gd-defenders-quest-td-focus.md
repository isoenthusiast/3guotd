URL: https://www.gamedeveloper.com/design/optimizing-tower-defense-for-focus-and-thinking---defender-s-quest
TITLE: Optimizing Tower Defense for FOCUS and THINKING - Defender's Quest
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
Related Topics
▫️ Art
▫️ Audio
▫️ Business
▫️ Design
▫️ Game Platforms
▫️ Marketing
▫️ Production
▫️ Programming
Recent in Topics
Read More chevron_right
Production European Game Worker unions publish manifesto warning against unchecked AI usage European Game Worker unions publish manifesto warning against unchecked AI usage by Imran Khan
Nov 17, 2026 2 Min Read
Production GenAI-using developers say they mostly employ it for 'research and brainstorming' GenAI-using developers say they mostly employ it for 'research and brainstorming' by Bryant Francis
Nov 12, 2026 3 Min Read
Trending keyboard_arrow_down
Related Topics
▫️ Layoffs & Studio Closures
▫️ GDC Festival of Gaming
▫️ Generative AI & ML
▫️ Industry Lawsuits
▫️ Culture & Dev Communities
▫️ Development Tools
Recent in Trending
Top Stories chevron_right
Design podcasts Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen by Game Developer Podcast
Nov 20, 2026
Marketing Why greenlighting Dressmaker wasn't an easy decision to make Why greenlighting Dressmaker wasn't an easy decision to make by Bryant Francis
Nov 19, 2026 5 Min Read
Latest News keyboard_arrow_down
Related Topics
▫️ Weekly News Highlights
▫️ News Deep Dives
▫️ Developer Interviews
▫️ Press Releases
▫️ Case Studies
Recent in Latest News
chevron_right
Business Grand Theft Auto VI is now the biggest video game launch in history Grand Theft Auto VI is now the biggest video game launch in history by Bryant Francis
Nov 20, 2026 2 Min Read
Business Ubisoft misses forecast and bets big on AI development Ubisoft misses forecast and bets big on AI development by Imran Khan
Nov 20, 2026 2 Min Read
[GDC] keyboard_arrow_down
Related Topics
▫️ Interviews & Updates
▫️ GDC News
▫️ GDC Vault
▫️ Register for GDC
▫️ Partner with GDC
▫️ State of the Game Industry
Recent in [GDC]
Read More chevron_right
Design podcasts Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen by Game Developer Podcast
Nov 20, 2026
Marketing Why greenlighting Dressmaker wasn't an easy decision to make Why greenlighting Dressmaker wasn't an easy decision to make by Bryant Francis
Nov 19, 2026 5 Min Read
Events
search
close
Design
Commentary
Featured Blog | This community-written post highlights the best of what the game industry has to offer. Read more like it on the Game Developer Blogs.
Optimizing Tower Defense for FOCUS and THINKING - Defender's Quest
Best practices for Tower Defense game design, as long as you share the same highly opinionated design goals as me.
Lars Doucet , Contributor September 23, 2014
schedule 17 Min Read
expand_content
Originally from Fortress of Doors , follow my stuff here:
The design philosophy for Defender's Quest boils down to two guiding principles that play to the Tower Defense (TD) genre's strengths:
Let the player FOCUS
Test the player's THINKING
Note the verbs. We don't want to TEST the player's focus (ie assault them with strobe lights and dancing kitens and see if they can still concentrate), we want to LET them focus, freeing up as many mental resources as possible. This in turn lets us crank up the difficulty of the game's thinking-based challenges without overwhelming or stressing out the player.
As we worked on the game we eventually wound up with a list of "best practices" for Tower Defense game design, at least for games that share our goals.
1. No Scrolling
Scrolling maps are the enemy of FOCUS. If you have to keep worrying about what might be happening beyond the edges of your viewport, you're going to get stressed and your focus will be shattered.
This is fine for some types of games -- for instance, Real Time Strategy (RTS) games. RTS is all about hyper-vigilance, fast reactions, and the ability to jump around from place to place putting out fires.
StarCraft 2, note the minimap in lower-left
In TD, however, the only thing you care about is defending your stuff, so limiting the map to just what you can see makes sense. Of course, this limits the size of your map, which puts a constraint on your level designs. But a larger map has costs too -- the cognitive burden of scrolling, and the stress burden of having to worry about something happening off-screen. Mini-maps and notification barks ("our base is under attack!") help a little, but the underlying trade-off remains.
No scrolling in DQ -- what you see is what you get
Scrolling reduces the player's ability to focus, and doesn't add any interesting ways to test THINKING . It mostly tests attention and reactions, but our design doesn't care about those things.
2. Total Information
"Total Information" means that all information about a game's internal state and each player's resources is available to every player at all times. Chess is a total information game, whereas Poker is not.
TD games are driven heavily by stats -- damage per second, maximum range, rate of fire, walking speed of enemies, etc. Yet time and time again I find myself playing TD games where the only information I have about enemy capabilities is a little floating health bar, often with no way to get at the raw hitpoints. Some games won't even show you information about your own towers!
In Defender's Quest , we resolved to give the player as much information as possible, delivered exactly when they needed it most.
A player should be able to click on any defender or enemy at any time and get a full readout of its current health and stats. Every creature should have a health bar above its head (not shown if at full health), and visual indicators for active status effects, boost level, etc.
Mousing over the status effect icons in the enemy readout should display the name of the status effect, what it does, and how long it will last. Mousing over any of the enemy's stats should do the same: what does "regen" mean? Oh, that's short for "regeneration", the number of HP per second this creature gains.
The player should have a similar treatment for enemy waves -- what type of enemy will spawn, how many, at what strength level, at what spawn locations. Mousing over the wave block should give enough information (UI allowing) to best alert the player how to prepare for that wave: Oh crap, these guys swim! Better watch that river tile!
We did the same thing with player skills, status effects, etc. It's not enough to say that your attack "poisons an enemy." What does "poison" mean in this context? And it's not enough to say "does 50% more damage" because what does "50% more" mean?
Whenever possible, we would translate the game's underlying percentage-based formulae into precise numerical constants based on the current situation. If poison does 50% of the original strike's damage every second for 5 seconds, and the original strike was 10 damage, we just say "5 damage per second for 5 seconds." We have similarly detailed information about each character's individual attacks.
Developers can add challenge by intentionally withholding information, but usually in only a boring and frustrating way -- now the dominant strategy is to look up the formulae on the internet and commit them to memory.
By committing to total information, we make the game a test of THINKING , rather than MEMORIZATION or just plain old GUESSING .
3. Total Time Control
Along with total information, the player has total and fine-grained control of time. The player can pause the game at any time and still issue commands, as well as play at 1/4x, 1/2x, 1x, 2x, and 4x speeds.
Many TD games do not allow the player to pause the game, or if they do, they do not allow the player to take actions unless the clock is running. Sometimes developers are afraid giving total time control would make the game "too easy" -- and that's fair if your game is testing reactions , like Tetris or most RTS games. But we're testing THINKING .
So why shouldn't you be able to issue commands while paused? It's not like you can issue an infinite number of commands from the safety of pause -- building towers or casting spells almost always costs some resource or come with a cooldown period. In either case, the player will always quickly run out of actions and must then play the clock forward.
Time control is more than just pause, though -- being able to slow the game down all the way to 25% of normal speed is essential when you want to pull of a super delicate advanced maneuver that would require split-second timing at normal speed. (And when you've got the next three waves safely in the bag, 400% speed-up keeps boredom at bay.)
Total time control also gives an element of "fairness" to the game -- that oft-quoted aspect of games like Spelunky and Desktop Dungeons , where if you screw up, you know you have nothing to blame but your own mistakes. This elusive quality is essential if you want to make a tough game that encourages people to keep playing when they fail. I f you get in a scrape in DQ, we want you to feel it's because you were unprepared or you made mistakes in battle, not because the game cheated you. You should feel like you had all the time in the world to make your choices.
An example of a game that could have benefitted from this is one of my all-time favorite TD games, Cursed Treasure: Don't Touch My Gems! . This otherwise excellent TD game has one major flaw -- there is no pause button, only a speedup (the "menu" button pauses time, but forbids actions).
On a certain map, the very last wave consists of a special enemy type (ninjas) that become invulnerable for quite some time as soon as they take their first hit. The only way to consistently take them down without losing your "perfect" rating on that map is to cast a specific direct-damage spell (meteor) on the ninjas with very precise timing.
Cursed Treasure is still amazing, by the way. You should play it .
This results in a special situation where I can play the exact same level ten times in a row, knowing exactly what to do, only to be foiled at the very last second because pulling off the final move is basically down to chance.
Giving total time control to the player actually gives the designer more freedom to make complex and difficult challenges, because the player can always whack pause and say "alright, let's THINK about this."
4. Non-Sucky Melee Units
Melee towers the player never uses are a sure sign of a poorly balanced TD game. (By "Melee" we mean all short-ranged towers in general.)
This is a pretty easy trap to fall into because tower RANGE is such an important stat -- it has a far greater impact on a tower's total effectiveness all by itself than either damage per hit or rate of fire.
RANGE is commonly overpowered because it is the natural answer to BOTH of the chief problems the player is trying to solve:
How do I cover t he board so I don't miss anything?
How do I maximize damage-per-second (DPS)?
Increasing a tower's range by just one unit makes it better at both of these things. Not only does it cover more of the board, but the larger area means it spends more of its lifetime able to fire at units, increasing its average DPS.
Raaaaaaaaaaange!
To compete with the massive utility of high-range towers, melee towers need to hit much, much, harder than your ranged towers, or have access to unique special abilities. Just for some perspective, DQ's rangers went through no less than three rounds of nerfing before the final release, and fans still often complain they're slightly overpowered, at least until New Game+ mode.
Even with this lingering discrepancy, DQ's Berserkers and Knights have a clear role to play in crowd control, tanking, anti-armor, and debuffing. They're also much cheaper to summon than Rangers.
5. Game State is easy to "Read"
You should be able to glance at the board and immediately know what's going on. Enemy archetypes should have good visual design with clear roles, and sub-types/variations on those archetypes should be clear as well.
Every enemy should have a little floating health bar (invisible when at full health), and status effect icons. Detailed information that would otherwise clutter up the screen can be hidden away in a context menu (ie, click on the enemy to see exact HP and how many seconds are left on the poison effect).
Visual design goes a long way here. Which brings me to:
5½. No 3D
NOTE: This is just a ½ point because it might just be my personal preference.
If you're not doing the (First/Third)-Person-Shooter + TD hybrid thing, I feel there's little benefit to 3D. TD basically requires a top-down perspective, which when done with a natural camera angle is quite ugly -- just a bunch of heads and shoulders, whereas humans are adapted to viewing the world from eye level. Sure, you can apply some creative perspective fudging , but it makes more sense to me to just stick with 2D and draw things directly in a visually pleasing way that is also straightforward and readable.
Above: Siegecraft (3D), Below: Kingdom Rush (2D)
Not only does 3D tempt the designer to muck about with scrolling and zooming (see point #1), it also balloons your assets and production costs -- now you've got to worry about lighting, modelling, rigging, texturing, shading, etc, (not to mention reduced performance), all for a visual design style that is often worse . And in the few cases that it's arguably better, the added benefit isn't proportional to the added cost.
Another thing I feel about 3D is that it's hard to give objects small details that clearly stand out at the final resolution.
6. No Lock & Key enemies
In game design "lock and key" design means a challenge that has exactly one solution -- the classic example being Doom's red, blue, and yellow doors that you open with the corresponding colored key.
In TD games, this comes in the form of specially designed enemies that are either literally or effectively immune to all flavors of attack except one, which is often useless or at least underpowered in all other situations.
This isn't an interesting challenge at all, it's basically just a tax test: "By the time enemy X shows up, do you have enough money saved up to plonk down tower X to deal with it?" The player has no way to improvise, compromise, or cleverly subvert the challenge, all they can do is give the exact answer the teacher expects, which generates no sense of accomplishment. This does not test THINKING .
The solution is to design your enemies and towers such that they remain viable in several different situations. It's okay for one tower type to be particularly effective on map X or against enemy Y, but there should be at least one other way to deal with those things, even if it's sub-optimal.
For instance, in DQ some enemies have Armor, which absorbs a fixed amount of damage from each strike. The most obvious way to deal with them is with a Knight that has armor-piercing (ignores armor) or armor-breaking (removes armor). However, there are several other ways to deal with them:
Over-boost a non-knight, cranking base damage enough to "climb over" the armor tax
Specialize non-knight units for critical hits, causing big damage boosts to single strikes that can overcome armor
Specialize non-knight units with bleed, making armored enemies take more overall damage
Use ice mages with slowdown so you have more time to kill armored enemies
Use Azra's lightning strike
Use explosive crystals
Specialize Dragons with "nom" to auto-kill armored enemies in one bite when they fall below a certain % health
Use a healer's "inspire" skill to buff surrounding units
Use damage-over-time skill like poison and fire, which ignore armor.
The closest we got to a lock-and-key tower was "dark" enemies, which have a high rate of dodge unless they are hit with a Healer's "light" attack which temporarily removes darkness. We definitely could have improved on this design, but at the very least dark enemies could still be dealt with without healers:
Specialize in lots of fast, frequent attacks to overcome high % chance of dodge.
Use AOE attacks.
Use Azra's spells (lightning, crystal, dragon fire)
These are all sub-optimal, but at least they exist.
The next point is dedicated to the single-worst instance of Lock & Key Tower Design in all of Tower Defense, which deserves a whole point all to itself.
7. No Freaking AIR UNITS!
I have almost never seen an implementation of the "flying enemies + anti-air tower" design pattern that wasn't awful. It is the quintessential example of point # 6, made even worse by the fact that Air enemies usually are either:
1) Completely immune to ALL non-air attacks
2) Completely ignore the path, making a beeline for your base
And sometimes even both .
When 3) Anti-air towers are useless against non-air enemies, the unholy trinity is complete.
What you wind up with is an enemy type that completely breaks the normal rules of the game and gives you only one way to deal with them, which is pretty close to "Press X to not die."
If you don't have enough money in the bank to mindlessly fart out an Anti-Air tower, you just lose. It feels more like a stick in the eye than an actual test of thinking or any other skill.
8. Physical Challenges
I'll take the Physical Challenge, Mark!
Physical challenges are things like having to manually click on coins to collect them, having to pick up and fling enemies away with the mouse, etc, that are all the PC's equivalent of the Wii's infamous "waggle."
In most cases these add nothing 1 that a simple click or keystroke couldn't communicate instead, they are just another stupid test for their own sake that only serves to frustrate my mind and inflame my body's repetitive stress injuries .
Screw this noise. You're making Tower Defense, not FarmVille.
1 For a noteable counter-point, see the conclusion.
9. Pointless Variety
If you have 24 different kinds of towers, it's almost a mathematical certainty that at least half of them are strictly or effectively dominated by the others. There's only so many combinations of statistics, archetypes, status effects, and other kinds of flavoring to properly segregate the usefulness of every class of tower. As I mentioned in Upgrades, Equipment, and Skill Trees , choices are at their best when they are:
Different, Balanced, Limited, and Clear .
A good rule of thumb is to imagine a scenario that a tower is best at. Towers with piercing bullets work best at the end of long straight-aways, so maybe consider making them only able to shoot in the 4 cardinal directions to emphasize that usage. Towers that can slow enemies down are super powerful, so maybe give them a very small AOE range, so the player can use them to "paint" enemies with slowdown as they squeeze through choke-points.
Whatever you do, I strongly recommend keeping your overall number of towers down. That's because the more towers you have to give a unique and special purpose to, the closer you inch towards making narrow specialists with exactly one job (lock & key design).
10. Mazing vs. Static
There's a pretty big split in the TD community on the subject of mazing , a mechanic wherein the player constructs their own maze for the enemies to traverse, rather than starting with a pre-built set of paths. The classic example is the TD classic Desktop Tower Defense :
Defender's Quest has no mazing whatsoever. This is basically a choice of Tower Defense sub-genre more than a commentary on the mechanic itself, because this particular mechanic is Not Like The Others TM .
Whereas most other design choices (time control, air units, melee vs ranged, etc) can stand more or less alone, the single question of "To Maze or not to Maze" will drastically change all other aspects of your game. For instance, mazing instantly brings up the question of juggling -- wherein a player can selectively open and close parts of the path, tricking enemies into changing directions over and over again, giving the player as much time as possible to kill them.
There's a lot of reasons we opted for non-mazing, but the biggest was to limit the number of choices the player had to make at any given time. Thats because with mazing, the player has to simultaneously consider a tower's utility as a wall and as a defender.
Bottom Line: Follow your Principles
This isn't meant to be a prescriptive list of what every Tower Defense game ever must do. The point is that we carefully decided what kind of experience we wanted the player to have, factored in the TD genre's natural strengths and weaknesses, and constantly evaluated our design choices against those first principles.
For instance, Plants vs. Zombies is a very well-designed Tower Defense game, but deviates from many points in our list. That's because it has different goals from Defender's Quest . For instance, it's designed for a casual market and testing REACTIONS is a big part of the design, so there's lots of clicking on things that could have been automated (picking up sunlight and coins, certain attacks with long charge-ups). I would hate this in a hardcore TD game, but it's enjoyable in PvZ.
That's largeably because PopCap recognized that clicking on stuff has a cognitive burdern, so they simplified pathing all the way down to simple horizontal lanes so the player can still focus. As I noted in the introduction: though a simplification limits how much complexity you can put in one part of the game, it frees you up to pump lots of awesome craziness back into other places, as this late-game PvZ screenshot attests to:
Now go forth and make an awesome Tower Defense game!
Read more about:
Featured Blogs
About the Author
Lars Doucet
Contributor
Lars A. Doucet is the President of Level Up Labs, LLC, an independent game design studio based in Bryan, TX. His latest project is the successful RPG/Tower Defense hybrid Defender's Quest - http://www.defendersquest.com/. In addition to his work at LUL, Lars has been a consultant who specializes in 'Applied Gaming,' an emerging field that uses game design and game technology for new uses both in and out of the entertainment sector. Lars' applied gaming projects include Super Energy Apocalypse, in collaboration with the Houston Advanced Research Center, and CellCraft, through Wake Forest University and the MacArthur foundation. Lars has also consulted for Rice University's Center for Technology in Teaching and Learning and Texas A&M University.
See more from Lars Doucet chevron_right
Daily news, dev blogs, and stories from Game Developer straight to your inbox
Latest News
More News chevron_right
Business Grand Theft Auto VI is now the biggest video game launch in history Grand Theft Auto VI is now the biggest video game launch in history by Bryant Francis
Nov 20, 2026 2 Min Read
More News
Keep up with the latest News, Interviews, and Talk Coverage from GDC Festival of Gaming right here on Game Developer
READ ON
podcasts
Latest Podcasts
Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen
Nov 20, 2026
Development secrets of Dressmaker, ft. Ruan Rothmann & Sara Laubscher
Nov 13, 2026
A second 2026 State of the Game Industry survey? It can happen! ft. Beth Elderkin & Imran Khan
Nov 12, 2026
GDC Side Quest - An anti-cheat primer with Lucia Suarez
Oct 30, 2026
Busting myths in game writing ft. Bruno Dias, Aysha Farah, & Andrea Saravia Perez
Oct 9, 2026
See all chevron_right
Game Developer Collective
More chevron_right
Business Games that sell DLC and in-app purchases appear to benefit most from subscription services Games that sell DLC and in-app purchases appear to benefit most from subscription services by Bryant Francis
Jan 27, 2026 3 Min Read
Business Devs are more worried than ever that generative AI will lower the quality of games Devs are more worried than ever that generative AI will lower the quality of games by Bryant Francis
Sep 16, 2025 4 Min Read
More
Game Design & Marketing Highlights
See More chevron_right
Design podcasts Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen
Marketing Why greenlighting Dressmaker wasn't an easy decision to make Why greenlighting Dressmaker wasn't an easy decision to make
See More
