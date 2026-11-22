URL: https://www.gamedeveloper.com/design/optimizing-tower-defense-for-focus-and-thinking---defender-s-quest
TITLE: Optimizing Tower Defense for FOCUS and THINKING - Defender's Quest (Game Developer, Lars Doucet)
RETRIEVED: 2026-11-22
METHOD: curl

- [Design](https://www.gamedeveloper.com/design)
- [Commentary](https://www.gamedeveloper.com/latest-commentary)

[![Game Developer Logo](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltb8149045ecc9add6/664670498df30a26f54d5ed4/GDBlogs_Logo_FINAL.png?width=1400&auto=webp&quality=80&disable=upscale)\\
\\
**Featured Blog \|** This community-written post highlights the best of what the game industry has to offer. Read more like it on the Game Developer Blogs.](https://www.gamedeveloper.com/keyword/blogs)

# Optimizing Tower Defense for FOCUS and THINKING - Defender's Quest

Best practices for Tower Defense game design, as long as you share the same highly opinionated design goals as me.

[![Picture of Lars Doucet](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltd709c2f6ad0896cd/66df238c1ceec85b3ae644da/Game_Developer_G_Logo_RGB.webp?width=100&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/author/lars-doucet)

[Lars Doucet,](https://www.gamedeveloper.com/author/lars-doucet) Contributor

September 23, 2014

schedule17 Min Read

![Game Developer logo in a gray background | Game Developer](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt2c2f608b8dadcd62/6a97e133db31b5be7767f1c7/GDE27_Placeholder_-_5.png?width=1280&auto=webp&quality=80&disable=upscale)expand\_content

[Linkedin](https://www.linkedin.com/sharing/share-offsite/?url=https://www.gamedeveloper.com/design/optimizing-tower-defense-for-focus-and-thinking---defender-s-quest)[Facebook](http://www.facebook.com/sharer/sharer.php?u=https://www.gamedeveloper.com/design/optimizing-tower-defense-for-focus-and-thinking---defender-s-quest)[Twitter](http://www.twitter.com/intent/tweet?url=https://www.gamedeveloper.com/design/optimizing-tower-defense-for-focus-and-thinking---defender-s-quest)[Reddit](https://www.reddit.com/submit?url=https://www.gamedeveloper.com/design/optimizing-tower-defense-for-focus-and-thinking---defender-s-quest&title=Optimizing%20Tower%20Defense%20for%20FOCUS%20and%20THINKING%20-%20Defender%27s%20Quest)[Bluesky](https://bsky.app/intent/compose?text=Optimizing%20Tower%20Defense%20for%20FOCUS%20and%20THINKING%20-%20Defender%27s%20Quest%20-%20https%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Foptimizing-tower-defense-for-focus-and-thinking---defender-s-quest)[Email](mailto:?subject=Optimizing%20Tower%20Defense%20for%20FOCUS%20and%20THINKING%20-%20Defender%27s%20Quest&body=I%20thought%20the%20following%20from%20Game%20Developer%20might%20interest%20you.%0D%0A%0D%0A%20Optimizing%20Tower%20Defense%20for%20FOCUS%20and%20THINKING%20-%20Defender%27s%20Quest%0D%0Ahttps%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Foptimizing-tower-defense-for-focus-and-thinking---defender-s-quest)

Originally from [Fortress of Doors](http://www.fortressofdoors.com/), follow my stuff here:

The design philosophy for [Defender's Quest](http://www.fortressofdoors.com/optimizing-tower-defense-for-focus-and-thinking-defenders-quest/www.defendersquest.com) boils down to two guiding principles that play to the Tower Defense (TD) genre's strengths:

1. Let the player FOCUS

2. Test the player's THINKING


Note the verbs. We don't want to TEST the player's focus (ie assault them with strobe lights and dancing kitens and see if they can still concentrate), we want to LET them focus, freeing up as many mental resources as possible. This in turn lets us crank up the difficulty of the game's thinking-based challenges without overwhelming or stressing out the player.

As we worked on the game we eventually wound up with a list of "best practices" for Tower Defense game design, at least for games that share our goals.

# 1\. No Scrolling

Scrolling maps are the enemy of FOCUS. If you have to keep worrying about what might be happening beyond the edges of your viewport, you're going to get stressed and your focus will be shattered.

This is fine for some types of games -- for instance, Real Time Strategy (RTS) games. RTS is all about hyper-vigilance, fast reactions, and the ability to jump around from place to place putting out fires.

StarCraft 2, note the minimap in lower-left

In TD, however, the only thing you care about is defending your stuff, so limiting the map to just what you can see makes sense. Of course, this limits the size of your map, which puts a constraint on your level designs. But a larger map has costs too -- the cognitive burden of scrolling, and the stress burden of having to worry about something happening off-screen. Mini-maps and notification barks ("our base is under attack!") help a little, but the underlying trade-off remains.

No scrolling in DQ -- what you see is what you get

Scrolling reduces the player's ability to focus, and doesn't add any interesting ways to test THINKING. It mostly tests attention and reactions, but our design doesn't care about those things.

# 2\. Total Information

"Total Information" means that all information about a game's internal state and each player's resources is available to every player at all times. Chess is a total information game, whereas Poker is not.

TD games are driven heavily by stats -- damage per second, maximum range, rate of fire, walking speed of enemies, etc. Yet time and time again I find myself playing TD games where the only information I have about enemy capabilities is a little floating health bar, often with no way to get at the raw hitpoints. Some games won't even show you information about your own towers!

In [Defender's Quest](http://www.defendersquest.com/), we resolved to give the player as much information as possible, delivered exactly when they needed it most.

A player should be able to click on any defender or enemy at any time and get a full readout of its current health and stats. Every creature should have a health bar above its head (not shown if at full health), and visual indicators for active status effects, boost level, etc.

Mousing over the status effect icons in the enemy readout should display the name of the status effect, what it does, and how long it will last. Mousing over any of the enemy's stats should do the same: what does "regen" mean? Oh, that's short for "regeneration", the number of HP per second this creature gains.

The player should have a similar treatment for enemy waves -- what type of enemy will spawn, how many, at what strength level, at what spawn locations. Mousing over the wave block should give enough information (UI allowing) to best alert the player how to prepare for that wave: Oh crap, these guys swim! Better watch that river tile!

We did the same thing with player skills, status effects, etc. It's not enough to say that your attack "poisons an enemy." What does "poison" mean in this context? And it's not enough to say "does 50% more damage" because what does "50% more" mean?

Whenever possible, we would translate the game's underlying percentage-based formulae into precise numerical constants based on the current situation. If poison does 50% of the original strike's damage every second for 5 seconds, and the original strike was 10 damage, we just say "5 damage per second for 5 seconds." We have similarly detailed information about each character's individual attacks.

Developers can add challenge by intentionally withholding information, but usually in only a boring and frustrating way -- now the dominant strategy is to look up the formulae on the internet and commit them to memory.

By committing to total information, we make the game a test of THINKING, rather than MEMORIZATION or just plain old GUESSING.

# 3\. Total Time Control

Along with total information, the player has total and fine-grained control of time. The player can pause the game at any time and still issue commands, as well as play at 1/4x, 1/2x, 1x, 2x, and 4x speeds.

Many TD games do not allow the player to pause the game, or if they do, they do not allow the player to take actions unless the clock is running. Sometimes developers are afraid giving total time control would make the game "too easy" -- and that's fair if your game is testing reactions, like Tetris or most RTS games. But we're testing THINKING.

So why shouldn't you be able to issue commands while paused? It's not like you can issue an infinite number of commands from the safety of pause -- building towers or casting spells almost always costs some resource or come with a cooldown period. In either case, the player will always quickly run out of actions and must then play the clock forward.

Time control is more than just pause, though -- being able to slow the game down all the way to 25% of normal speed is essential when you want to pull of a super delicate advanced maneuver that would require split-second timing at normal speed. (And when you've got the next three waves safely in the bag, 400% speed-up keeps boredom at bay.)

Total time control also gives an element of "fairness" to the game -- that oft-quoted aspect of games like [Spelunky](http://www.spelunkyworld.com/) and [Desktop Dungeons](http://www.desktopdungeons.net/), where if you screw up, you know you have nothing to blame but your own mistakes. This elusive quality is essential if you want to make a tough game that encourages people to keep playing when they fail. If you get in a scrape in DQ, we want you to feel it's because you were unprepared or you made mistakes in battle, not because the game cheated you. You should feel like you had all the time in the world to make your choices.

An example of a game that could have benefitted from this is one of my all-time favorite TD games, [Cursed Treasure: Don't Touch My Gems!](http://www.kongregate.com/games/iriysoft/cursed-treasure-dont-touch-my-gems). This otherwise excellent TD game has one major flaw -- there is no pause button, only a speedup (the "menu" button pauses time, but forbids actions).

On a certain map, the very last wave consists of a special enemy type (ninjas) that become invulnerable for quite some time as soon as they take their first hit. The only way to consistently take them down without losing your "perfect" rating on that map is to cast a specific direct-damage spell (meteor) on the ninjas with very precise timing.

Cursed Treasure is still amazing, by the way. You should [play it](http://www.kongregate.com/games/iriysoft/cursed-treasure-dont-touch-my-gems).

This results in a special situation where I can play the exact same level ten times in a row, knowing exactly what to do, only to be foiled at the very last second because pulling off the final move is basically down to chance.

Giving total time control to the player actually gives the designer more freedom to make complex and difficult challenges, because the player can always whack pause and say "alright, let's THINK about this."

# 4\. Non-Sucky Melee Units

Melee towers the player never uses are a sure sign of a poorly balanced TD game. (By "Melee" we mean all short-ranged towers in general.)

This is a pretty easy trap to fall into because tower RANGE is such an important stat -- it has a far greater impact on a tower's total effectiveness all by itself than either damage per hit or rate of fire.

RANGE is commonly overpowered because it is the natural answer to BOTH of the chief problems the player is trying to solve:

1. How do I cover the board so I don't miss anything?

2. How do I maximize damage-per-second (DPS)?


Increasing a tower's range by just one unit makes it better at both of these things. Not only does it cover more of the board, but the larger area means it spends more of its lifetime able to fire at units, increasing its average DPS.

Raaaaaaaaaaange!

To compete with the massive utility of high-range towers, melee towers need to hit much, much, harder than your ranged towers, or have access to unique special abilities. Just for some perspective, DQ's rangers went through no less than three rounds of nerfing before the final release, and fans still often complain they're slightly overpowered, at least until New Game+ mode.

Even with this lingering discrepancy, DQ's Berserkers and Knights have a clear role to play in crowd control, tanking, anti-armor, and debuffing. They're also much cheaper to summon than Rangers.

# 5\. Game State is easy to "Read"

You should be able to glance at the board and immediately know what's going on. Enemy archetypes should have good visual design with clear roles, and sub-types/variations on those archetypes should be clear as well.

Every enemy should have a little floating health bar (invisible when at full health), and status effect icons. Detailed information that would otherwise clutter up the screen can be hidden away in a context menu (ie, click on the enemy to see exact HP and how many seconds are left on the poison effect).

Visual design goes a long way here. Which brings me to:

# 5½. No 3D

NOTE: This is just a ½ point because it might just be my personal preference.

If you're not doing the (First/Third)-Person-Shooter + TD hybrid thing, I feel there's little benefit to 3D. TD basically requires a top-down perspective, which when done with a natural camera angle is quite ugly -- just a bunch of heads and shoulders, whereas humans are adapted to viewing the world from eye level. Sure, you can apply some [creative perspective fudging](https://imgur.com/wxLs6do), but it makes more sense to me to just stick with 2D and draw things directly in a visually pleasing way that is also straightforward and readable.

Above: [Siegecraft](https://itunes.apple.com/us/app/siegecraft-defender/id658149902?mt=8) (3D), Below: [Kingdom Rush](http://kingdomrush.com/play/) (2D)

Not only does 3D tempt the designer to muck about with scrolling and zooming (see point #1), it also balloons your assets and production costs -- now you've got to worry about lighting, modelling, rigging, texturing, shading, etc, (not to mention reduced performance), all for a visual design style that is often worse. And in the few cases that it's arguably better, the added benefit isn't proportional to the added cost.

Another thing I feel about 3D is that it's hard to give objects small details that clearly stand out at the final resolution.

# 6\. No Lock & Key enemies

In game design "lock and key" design means a challenge that has exactly one solution -- the classic example being Doom's red, blue, and yellow doors that you open with the corresponding colored key.

In TD games, this comes in the form of specially designed enemies that are either literally or effectively immune to all flavors of attack except one, which is often useless or at least underpowered in all other situations.

This isn't an interesting challenge at all, it's basically just a tax test: "By the time enemy X shows up, do you have enough money saved up to plonk down tower X to deal with it?" The player has no way to improvise, compromise, or cleverly subvert the challenge, all they can do is give the exact answer the teacher expects, which generates no sense of accomplishment. This does not test THINKING.

The solution is to design your enemies and towers such that they remain viable in several different situations. It's okay for one tower type to be particularly effective on map X or against enemy Y, but there should be at least one other way to deal with those things, even if it's sub-optimal.

For instance, in DQ some enemies have Armor, which absorbs a fixed amount of damage from each strike. The most obvious way to deal with them is with a Knight that has armor-piercing (ignores armor) or armor-breaking (removes armor). However, there are several other ways to deal with them:

1. Over-boost a non-knight, cranking base damage enough to "climb over" the armor tax

2. Specialize non-knight units for critical hits, causing big damage boosts to single strikes that can overcome armor

3. Specialize non-knight units with bleed, making armored enemies take more overall damage

4. Use ice mages with slowdown so you have more time to kill armored enemies

5. Use Azra's lightning strike

6. Use explosive crystals

7. Specialize Dragons with "nom" to auto-kill armored enemies in one bite when they fall below a certain % health

8. Use a healer's "inspire" skill to buff surrounding units

9. Use damage-over-time skill like poison and fire, which ignore armor.


The closest we got to a lock-and-key tower was "dark" enemies, which have a high rate of dodge unless they are hit with a Healer's "light" attack which temporarily removes darkness. We definitely could have improved on this design, but at the very least dark enemies could still be dealt with without healers:

1. Specialize in lots of fast, frequent attacks to overcome high % chance of dodge.

2. Use AOE attacks.

3. Use Azra's spells (lightning, crystal, dragon fire)


These are all sub-optimal, but at least they exist.

The next point is dedicated to the single-worst instance of Lock & Key Tower Design in all of Tower Defense, which deserves a whole point all to itself.

# 7\. No Freaking AIR UNITS!

I have almost never seen an implementation of the "flying enemies + anti-air tower" design pattern that wasn't awful. It is the quintessential example of point # 6, made even worse by the fact that Air enemies usually are either:

1) Completely immune to ALL non-air attacks

2) Completely ignore the path, making a beeline for your base

And sometimes even both.

When 3) Anti-air towers are useless against non-air enemies, the unholy trinity is complete.

What you wind up with is an enemy type that completely breaks the normal rules of the game and gives you only one way to deal with them, which is pretty close to "Press X to not die."

If you don't have enough money in the bank to mindlessly fart out an Anti-Air tower, you just lose. It feels more like a stick in the eye than an actual test of thinking or any other skill.

# 8\. Physical Challenges

I'll take the Physical Challenge, Mark!

Physical challenges are things like having to manually click on coins to collect them, having to pick up and fling enemies away with the mouse, etc, that are all the PC's equivalent of the Wii's infamous "waggle."

In most cases these add nothing1 that a simple click or keystroke couldn't communicate instead, they are just another stupid test for their own sake that only serves to frustrate my mind and inflame my body's [repetitive stress injuries](http://en.wikipedia.org/wiki/Repetitive_strain_injury).

Screw this noise. You're making Tower Defense, not FarmVille.

1For a noteable counter-point, see the conclusion.

# 9\. Pointless Variety

If you have 24 different kinds of towers, it's almost a mathematical certainty that at least half of them are strictly or effectively dominated by the others. There's only so many combinations of statistics, archetypes, status effects, and other kinds of flavoring to properly segregate the usefulness of every class of tower. As I mentioned in [Upgrades, Equipment, and Skill Trees](http://www.fortressofdoors.com/upgrades-equipment-and-skill-trees), choices are at their best when they are:

Different, Balanced, Limited, and Clear.

A good rule of thumb is to imagine a scenario that a tower is best at. Towers with piercing bullets work best at the end of long straight-aways, so maybe consider making them only able to shoot in the 4 cardinal directions to emphasize that usage. Towers that can slow enemies down are super powerful, so maybe give them a very small AOE range, so the player can use them to "paint" enemies with slowdown as they squeeze through choke-points.

Whatever you do, I strongly recommend keeping your overall number of towers down. That's because the more towers you have to give a unique and special purpose to, the closer you inch towards making narrow specialists with exactly one job (lock & key design).

# 10\. Mazing vs. Static

There's a pretty big split in the TD community on the subject of mazing, a mechanic wherein the player constructs their own maze for the enemies to traverse, rather than starting with a pre-built set of paths. The classic example is the TD classic [Desktop Tower Defense](http://www.kongregate.com/games/preecep/desktop-tower-defense):

[Defender's Quest](http://www.defendersquest.com/1/) has no mazing whatsoever. This is basically a choice of Tower Defense sub-genre more than a commentary on the mechanic itself, because this particular mechanic is Not Like The OthersTM.

Whereas most other design choices (time control, air units, melee vs ranged, etc) can stand more or less alone, the single question of "To Maze or not to Maze" will drastically change all other aspects of your game. For instance, mazing instantly brings up the question of juggling \-\- wherein a player can selectively open and close parts of the path, tricking enemies into changing directions over and over again, giving the player as much time as possible to kill them.

There's a lot of reasons we opted for non-mazing, but the biggest was to limit the number of choices the player had to make at any given time. Thats because with mazing, the player has to simultaneously consider a tower's utility as a wall and as a defender.

# Bottom Line: Follow your Principles

This isn't meant to be a prescriptive list of what every Tower Defense game ever must do. The point is that we carefully decided what kind of experience we wanted the player to have, factored in the TD genre's natural strengths and weaknesses, and constantly evaluated our design choices against those first principles.

For instance, [Plants vs. Zombies](http://www.popcap.com/plants-vs-zombies-1) is a very well-designed Tower Defense game, but deviates from many points in our list. That's because it has different goals from [Defender's Quest](http://www.defendersquest.com/1). For instance, it's designed for a casual market and testing REACTIONS is a big part of the design, so there's lots of clicking on things that could have been automated (picking up sunlight and coins, certain attacks with long charge-ups). I would hate this in a hardcore TD game, but it's enjoyable in PvZ.

That's largeably because PopCap recognized that clicking on stuff has a cognitive burdern, so they simplified pathing all the way down to simple horizontal lanes so the player can still focus. As I noted in the introduction: though a simplification limits how much complexity you can put in one part of the game, it frees you up to pump lots of awesome craziness back into other places, as this late-game PvZ screenshot attests to:

Now go forth and make an awesome Tower Defense game!

Read more about:

[Featured Blogs](https://www.gamedeveloper.com/keyword/featured-blogs)

[Linkedin](https://www.linkedin.com/sharing/share-offsite/?url=https://www.gamedeveloper.com/design/optimizing-tower-defense-for-focus-and-thinking---defender-s-quest)[Facebook](http://www.facebook.com/sharer/sharer.php?u=https://www.gamedeveloper.com/design/optimizing-tower-defense-for-focus-and-thinking---defender-s-quest)[Twitter](http://www.twitter.com/intent/tweet?url=https://www.gamedeveloper.com/design/optimizing-tower-defense-for-focus-and-thinking---defender-s-quest)[Reddit](https://www.reddit.com/submit?url=https://www.gamedeveloper.com/design/optimizing-tower-defense-for-focus-and-thinking---defender-s-quest&title=Optimizing%20Tower%20Defense%20for%20FOCUS%20and%20THINKING%20-%20Defender%27s%20Quest)[Bluesky](https://bsky.app/intent/compose?text=Optimizing%20Tower%20Defense%20for%20FOCUS%20and%20THINKING%20-%20Defender%27s%20Quest%20-%20https%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Foptimizing-tower-defense-for-focus-and-thinking---defender-s-quest)[Email](mailto:?subject=Optimizing%20Tower%20Defense%20for%20FOCUS%20and%20THINKING%20-%20Defender%27s%20Quest&body=I%20thought%20the%20following%20from%20Game%20Developer%20might%20interest%20you.%0D%0A%0D%0A%20Optimizing%20Tower%20Defense%20for%20FOCUS%20and%20THINKING%20-%20Defender%27s%20Quest%0D%0Ahttps%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Foptimizing-tower-defense-for-focus-and-thinking---defender-s-quest)

## About the Author

[![Lars Doucet](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltd709c2f6ad0896cd/66df238c1ceec85b3ae644da/Game_Developer_G_Logo_RGB.webp?width=400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/author/lars-doucet)

[Lars Doucet](https://www.gamedeveloper.com/author/lars-doucet)

Contributor

Lars A. Doucet is the President of Level Up Labs, LLC, an independent game design studio based in Bryan, TX. His latest project is the successful RPG/Tower Defense hybrid Defender's Quest - http://www.defendersquest.com/. In addition to his work at LUL, Lars has been a consultant who specializes in 'Applied Gaming,' an emerging field that uses game design and game technology for new uses both in and out of the entertainment sector. Lars' applied gaming projects include Super Energy Apocalypse, in collaboration with the Houston Advanced Research Center, and CellCraft, through Wake Forest University and the MacArthur foundation. Lars has also consulted for Rice University's Center for Technology in Teaching and Learning and Texas A&M University.

[See more from Lars Doucetchevron\_right](https://www.gamedeveloper.com/author/lars-doucet)

## Daily news, dev blogs, and stories from Game Developer straight to your inbox

Email Address\*

Game Developer Daily

scheduleDaily

Country\*Please selectAfghanistanAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguillaAntarcticaAntigua and BarbudaArgentinaArmeniaArubaAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBolivia, Plurinational State ofBonaire, Sint Eustatius and SabaBosnia and HerzegovinaBotswanaBouvet IslandBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCabo VerdeCambodiaCameroonCanadaCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, The Democratic Republic of theCook IslandsCosta RicaCroatiaCubaCuraçaoCyprusCzechiaCôte d'IvoireDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEswatiniEthiopiaFalkland Islands (Malvinas)Faroe IslandsFijiFinlandFranceFrench GuianaFrench PolynesiaFrench Southern TerritoriesGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuamGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHeard Island and McDonald IslandsHoly See (Vatican City State)HondurasHong KongHungaryIcelandIndiaIndonesiaIran, Islamic Republic ofIraqIrelandIsle of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKorea, Democratic People's Republic ofKorea, Republic ofKosovoKuwaitKyrgyzstanLao People's Democratic RepublicLatviaLebanonLesothoLiberiaLibyaLiechtensteinLithuaniaLuxembourgMacaoMadagascarMalawiMalaysiaMaldivesMaliMaltaMarshall IslandsMartiniqueMauritaniaMauritiusMayotteMexicoMicronesia, Federated States ofMoldova, Republic ofMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfolk IslandNorth MacedoniaNorthern Mariana IslandsNorwayOmanPakistanPalauPalestine, State ofPanamaPapua New GuineaParaguayPeruPhilippinesPitcairnPolandPortugalPuerto RicoQatarRomaniaRussian FederationRwandaRéunionSaint BarthélemySaint Helena, Ascension and Tristan da CunhaSaint Kitts and NevisSaint LuciaSaint Martin (French part)Saint Pierre and MiquelonSaint Vincent and the GrenadinesSamoaSan MarinoSao Tome and PrincipeSaudi ArabiaSenegalSerbiaSeychellesSierra LeoneSingaporeSint Maarten (Dutch part)SlovakiaSloveniaSolomon IslandsSomaliaSouth AfricaSouth Georgia and the South Sandwich IslandsSouth SudanSpainSri LankaSudanSurinameSvalbard and Jan MayenSwedenSwitzerlandSyrian Arab RepublicTaiwan, Province of ChinaTajikistanTanzania, United Republic ofThailandTimor-LesteTogoTokelauTongaTrinidad and TobagoTunisiaTurkeyTurkmenistanTurks and Caicos IslandsTuvaluUgandaUkraineUnited Arab EmiratesUnited KingdomUnited StatesUnited States Minor Outlying IslandsUruguayUzbekistanVanuatuVenezuela, Bolivarian Republic ofViet NamVirgin Islands, BritishVirgin Islands, U.S.Wallis and FutunaWestern SaharaYemenZambiaZimbabweÅland Islands

Subscribesend

### You May Also Like

[Design](https://www.gamedeveloper.com/design) [![Brightly dressed characters from The Sims](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blta667a8b93554a72b/69af373ee74ba50008b30e7e/the_sims_characters.png?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/design/the-sims-4-modding-community-is-disappointed-by-new-microtransaction-marketplace#recipe=related-items&source_content_id=b4fe48ae391443e308737eb329691af6)

[**The Sims 4 modding community is disappointed by new 'microtransaction' marketplace** \\
\\
by Nicole Carpenter\\
\\
Mar 12, 2026](https://www.gamedeveloper.com/design/the-sims-4-modding-community-is-disappointed-by-new-microtransaction-marketplace#recipe=related-items&source_content_id=b4fe48ae391443e308737eb329691af6)

[Design](https://www.gamedeveloper.com/design) [![Split screen image showing an action-oriented sci fi world on the left, and a character floating in a pool on the right](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt1879f62e88beb5a2/69b0ec3e7cafe3589d77b862/ss_c631eecc779a528b0f5d5eb6c0400f700cc12a79.1920x1080.jpg?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/design/split-fiction-s-final-level-concept-was-originally-meant-for-the-whole-game#recipe=related-items&source_content_id=e1e2662a98986f8a0687ec3e7f601888)

[**Split Fiction's final level concept was originally meant for the whole game** \\
\\
by Danielle Riendeau\\
\\
Mar 11, 2026](https://www.gamedeveloper.com/design/split-fiction-s-final-level-concept-was-originally-meant-for-the-whole-game#recipe=related-items&source_content_id=e1e2662a98986f8a0687ec3e7f601888)

[Design](https://www.gamedeveloper.com/design) [![Hades protagonist Melione casts a spell while "Skelly" hovers in the distance.](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt76f51adcf3cb3bd2/699dc22c5f1e55000895c8c1/hadesiiskellyfeatured.jpg?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/design/hades-devs-say-accidentally-inventing-a-subgenre-was-surreal-#recipe=related-items&source_content_id=36b70eac90d23adb50429b089af54d9b)

[**Hades devs: accidentally inventing a subgenre was 'surreal'** \\
\\
by Bryant Francis\\
\\
Feb 26, 2026](https://www.gamedeveloper.com/design/hades-devs-say-accidentally-inventing-a-subgenre-was-surreal-#recipe=related-items&source_content_id=36b70eac90d23adb50429b089af54d9b)

[Design](https://www.gamedeveloper.com/design) [![Screenshots and key art for Clair Obscur: Expedition 33, Demonschool, Blue Prince, and Metroid Prime 4: Beyond.](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blta658a006b695d1db/6942d374211d3e881de91e2d/Image_Template_-_BRYANT_BEST_OF.png?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/design/game-developer-s-2025-wrap-up-bryant-francis-top-10-games#recipe=related-items&source_content_id=332323f5ad868b927c31e4f3f6e581e9)

[**Bryant Francis' top 10 games of the year - 2025 Wrap-Up** \\
\\
by Bryant Francis\\
\\
Dec 30, 2025](https://www.gamedeveloper.com/design/game-developer-s-2025-wrap-up-bryant-francis-top-10-games#recipe=related-items&source_content_id=332323f5ad868b927c31e4f3f6e581e9)

### Latest News

[More Newschevron\_right](https://www.gamedeveloper.com/latest-news)

[![Jason and Lucia from Grand Theft Auto VI](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blte58ce019a2ef9604/6b00c09bb798974fddc17f75/Jason_and_Lucia_14.jpg?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/business/grand-theft-auto-vi-is-officially-the-biggest-video-game-launch-ever)[Business](https://www.gamedeveloper.com/business)

[Grand Theft Auto VI is now the biggest video game launch in history](https://www.gamedeveloper.com/business/grand-theft-auto-vi-is-officially-the-biggest-video-game-launch-ever) [Grand Theft Auto VI is now the biggest video game launch in history](https://www.gamedeveloper.com/business/grand-theft-auto-vi-is-officially-the-biggest-video-game-launch-ever)

by [Bryant Francis](https://www.gamedeveloper.com/author/bryant-francis)

Nov 20, 2026

2 Min Read

[![A key art promotional image for Assassin's Creed, showing numerous protagonists from the series superimposed next to each other.](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltb66c65be8013263e/68f2953811a1e30cb46f9d11/assassinscreedwholegangfeatured.jpg?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/business/ubisoft-misses-forecast-and-bets-big-on-ai-development)[Business](https://www.gamedeveloper.com/business)

[Ubisoft misses forecast and bets big on AI development](https://www.gamedeveloper.com/business/ubisoft-misses-forecast-and-bets-big-on-ai-development) [Ubisoft misses forecast and bets big on AI development](https://www.gamedeveloper.com/business/ubisoft-misses-forecast-and-bets-big-on-ai-development)

by [Imran Khan](https://www.gamedeveloper.com/author/imran-khan)

Nov 20, 2026

2 Min Read

[More News](https://www.gamedeveloper.com/latest-news)

Keep up with the latest News, Interviews, and Talk Coverage from GDC Festival of Gaming right here on Game Developer

[READ ON](https://www.gamedeveloper.com/keyword/gdc-festival-of-gaming)

podcasts

Latest Podcasts

- [Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen](https://www.gamedeveloper.com/design/is-control-resonant-s-protagonist-a-sad-wet-man-ft-mikael-kasurinen) Nov 20, 2026

- [Development secrets of Dressmaker, ft. Ruan Rothmann & Sara Laubscher](https://www.gamedeveloper.com/pc/development-secrets-of-dressmaker-ft-ruan-rothmann-sara-laubscher) Nov 13, 2026

- [A second 2026 State of the Game Industry survey? It can happen! ft. Beth Elderkin & Imran Khan](https://www.gamedeveloper.com/business/a-second-2026-state-of-the-game-industry-survey-it-can-happen-ft-beth-elderkin-imran-khan) Nov 12, 2026

- [GDC Side Quest - An anti-cheat primer with Lucia Suarez](https://www.gamedeveloper.com/programming/gdc-side-quest-an-anti-cheat-primer-with-lucia-suarez) Oct 30, 2026

- [Busting myths in game writing ft. Bruno Dias, Aysha Farah, & Andrea Saravia Perez](https://www.gamedeveloper.com/design/busting-myths-in-game-writing-ft-bruno-dias-aysha-farah-andrea-saravia-perez) Oct 9, 2026


[See allchevron\_right](https://www.gamedeveloper.com/keyword/game-developer-podcast)

### Game Developer Collective

[Morechevron\_right](https://www.gamedeveloper.com/keyword/game-developer-collective)

[![A player character runs around with their arms extended in Rematch, other players stand behind them.](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt7a79424246931087/6967e30f40bb4580b53d61e0/rematchfeatured.png?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/business/games-that-sell-dlc-and-in-app-purchases-appear-to-benefit-most-from-subscription-services)[Business](https://www.gamedeveloper.com/business)

[Games that sell DLC and in-app purchases appear to benefit most from subscription services](https://www.gamedeveloper.com/business/games-that-sell-dlc-and-in-app-purchases-appear-to-benefit-most-from-subscription-services) [Games that sell DLC and in-app purchases appear to benefit most from subscription services](https://www.gamedeveloper.com/business/games-that-sell-dlc-and-in-app-purchases-appear-to-benefit-most-from-subscription-services)

by [Bryant Francis](https://www.gamedeveloper.com/author/bryant-francis)

Jan 27, 2026

3 Min Read

[![An African American woman looks at a laptop in frustration.](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltc5a3580ea6a37cdc/689b76d8b5ca625122beeab9/frustrateddeveloperfeatured.jpg?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/business/devs-are-more-worried-than-ever-that-generative-ai-will-lower-the-quality-of-games)[Business](https://www.gamedeveloper.com/business)

[Devs are more worried than ever that generative AI will lower the quality of games](https://www.gamedeveloper.com/business/devs-are-more-worried-than-ever-that-generative-ai-will-lower-the-quality-of-games) [Devs are more worried than ever that generative AI will lower the quality of games](https://www.gamedeveloper.com/business/devs-are-more-worried-than-ever-that-generative-ai-will-lower-the-quality-of-games)

by [Bryant Francis](https://www.gamedeveloper.com/author/bryant-francis)

Sep 16, 2025

4 Min Read

[![A man in a suit hides his face as eight hands point at him in blame.](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt6f01525d72f5b1c3/687669d83f53364453f30bf2/blameinvestorsfeatured.jpg?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/business/are-unreasonable-investor-expectations-the-cause-of-poor-video-game-market-conditions-)[Business](https://www.gamedeveloper.com/business)

[Are 'unreasonable investor expectations' the cause of poor video game market conditions?](https://www.gamedeveloper.com/business/are-unreasonable-investor-expectations-the-cause-of-poor-video-game-market-conditions-) [Are 'unreasonable investor expectations' the cause of poor video game market conditions?](https://www.gamedeveloper.com/business/are-unreasonable-investor-expectations-the-cause-of-poor-video-game-market-conditions-)

by [Bryant Francis](https://www.gamedeveloper.com/author/bryant-francis)

Jul 15, 2025

5 Min Read

[More](https://www.gamedeveloper.com/keyword/game-developer-collective)

### Game Design & Marketing Highlights

[See Morechevron\_right](https://www.gamedeveloper.com/marketing)

[![A headshot of Mikael Kasurinen next to the GameDeveloper.com logo.](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt12efdced695253bf/6b0064a2e1e36d368e033d37/controlresonant.png?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/design/is-control-resonant-s-protagonist-a-sad-wet-man-ft-mikael-kasurinen)[Design](https://www.gamedeveloper.com/design) [podcasts](https://www.gamedeveloper.com/podcasts "Link to all podcasts")

[Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen](https://www.gamedeveloper.com/design/is-control-resonant-s-protagonist-a-sad-wet-man-ft-mikael-kasurinen) [Is Control Resonant's protagonist a 'sad wet man?' ft. Mikael Kasurinen](https://www.gamedeveloper.com/design/is-control-resonant-s-protagonist-a-sad-wet-man-ft-mikael-kasurinen)

[![Key art from Dressmaker. The player character makes a lovely blue dress.](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltf629aa8d663deef6/6aff025aef000f19a8414e37/Dressmaker_Key_Art_Final_(1).JPG?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/marketing/why-greenlighting-dressmaker-wasn-t-an-easy-decision-to-make)[Marketing](https://www.gamedeveloper.com/marketing)

[Why greenlighting Dressmaker wasn't an easy decision to make](https://www.gamedeveloper.com/marketing/why-greenlighting-dressmaker-wasn-t-an-easy-decision-to-make) [Why greenlighting Dressmaker wasn't an easy decision to make](https://www.gamedeveloper.com/marketing/why-greenlighting-dressmaker-wasn-t-an-easy-decision-to-make)

[![Art from Clair Obscur: Expedition 33 showing the party looking at a surreal landscape.](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt91fa6c5cf153b000/69eb7b53d9eb8a86b83cb444/Clair_Obscur.png?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/design/clair-obscur-expedition-33-s-narrative-lead-wants-to-change-game-funding)[Design](https://www.gamedeveloper.com/design)

[Clair Obscur: Expedition 33's narrative lead wants to change game funding](https://www.gamedeveloper.com/design/clair-obscur-expedition-33-s-narrative-lead-wants-to-change-game-funding) [Clair Obscur: Expedition 33's narrative lead wants to change game funding](https://www.gamedeveloper.com/design/clair-obscur-expedition-33-s-narrative-lead-wants-to-change-game-funding)

[![A screenshot from Grand Theft Auto VI showing protagonist Lucia lifting weights.](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt859507d51581f713/6ae0fbc4f6e3e04aa497e290/gtaviluciaweightsfeatured.jpg?width=1400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/marketing/zelda-and-grand-theft-auto-headline-the-nominees-for-the-2027-game-awards)[Marketing](https://www.gamedeveloper.com/marketing)

[Zelda and Grand Theft Auto headline the nominees for the 2027 Game Awards](https://www.gamedeveloper.com/marketing/zelda-and-grand-theft-auto-headline-the-nominees-for-the-2027-game-awards) [Zelda and Grand Theft Auto headline the nominees for the 2027 Game Awards](https://www.gamedeveloper.com/marketing/zelda-and-grand-theft-auto-headline-the-nominees-for-the-2027-game-awards)

[See More](https://www.gamedeveloper.com/marketing)
