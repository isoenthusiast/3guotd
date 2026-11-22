URL: https://gamedeveloper.com/design/intelligent-brawling
TITLE: Intelligent Brawling
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
Interviews
Intelligent Brawling
How do you make a great third-person brawler? THQ's Smith cross-examines titles from God Of War to Ninja Gaiden and beyond to analyze the hot genre.
Tom Smith , Blogger February 19, 2009
schedule 35 Min Read
expand_content
[How do you make a great third-person brawler? THQ's Smith cross-examines titles from God Of War to Ninja Gaiden and beyond to analyze the hot genre, in an article originally published in Game Developer magazine late last year.]
Often the hardest part of game development is taking the time to pause, reflect, and determine what is and isn't working. One of the best tools for this analysis is looking at what other similar games are doing.
Too many games are developed with blinders on, and the developers only look briefly and casually at previous titles in the genre. There are countless lessons sitting out there, waiting to be learned.
I'm a creative manager at THQ, so it's my job to help external developers make their games more fun. CMs work with project managers who make sure things get done on time and manage everything else-we creative managers are pure quality control. I recently worked on the next-gen third-person swords-and-sorcery Conan game with the talented folks at Nihilistic.
Let me take you back to about a year before launch. Development has been going well: The controls are fun and easy to pick up, there are plans for lots of unique content, there's a first playable that people enjoy, and everyone's excited about the promise of this title.
But around the time of the first playable (aka vertical slice, aka razor edge), I'm becoming more and more aware that our AI is not really there yet. This is no big surprise, since it's early, AI is hard, and these things take time, but I wanted to give Nihilistic some clear, detailed feedback on what they could be doing to make it better.
I wanted to be very certain that the changes I suggested would be actual practical needs, not just theoretically good things. For example, I'd been asking for good gating - different ways to keep the player from running past enemies without fighting them.
But the more I thought about it, the more I realized that many games do fine without good gating. I flew through the last half of Halo 2 without firing more than a few shots. I wanted to find out which things really matter. And luckily, I had a little bit of free time, so I went to the source to do a little research.
Methodology
I picked out some of the top games in our genre, and loaded them up. Title selection was somewhat erratic, based on what I had lying around, but I made sure to include a few well-reviewed commercial failures like Mark of Kri . Those games often have the best ideas to steal. Most - but not all - were games I'd played previously.
A few games that I tried were too far out of my genre to apply. For example, the fights in Spartan: Total Warrior were just too big, with dozens on each side. Heavenly Sword came out after the analysis for Conan , but was added after the fact.
In each case, I would get to the first significant combat encounter that had at least three enemies active at once. I would play this encounter repeatedly, spending most of my time doing nothing but holding down block so I could just watch the enemies and how they acted.
For a few of the specific questions, I needed to move around or attack or otherwise break from block. And with some games, I would go a few more encounters in, especially if I knew major new combat concepts were added fairly soon.
Yes, this is not how most players play. But I wanted to distill the AI down to its simplest, most repeatable state. To balance the block-focused bias, I made sure to also spend some time using normal blocking and attack strategies to see if the AI changed radically.
In a game without block, I'd suggest finding another repeatable strategy that lets the AI (or whatever is the subject of testing) do its thing without the interference of constantly being damaged or killed.
I came into the tests with a list of questions based on my previous experience and my concerns on my current title. As I played, I developed a few new questions and had to go back to previously played games to see how they handled those situations. All process is iterative.
Attack Groups
Questions: How many enemies fight the player at once? How do they organize themselves around the player?
God of War (PS2): Enemies fall into clearly two separate groupings-a close group within a weapon's reach of the player character, and a far group a few meters away. All attacks come from the close group. With zombies and harpies, the close group is limited to three enemies at a time. I sometimes can get four near, but it corrects itself quickly in that case. The far group contains 12-15 enemies.
Enemies cycle from close to far fairly regularly, possibly on a timer, possibly just as a side effect of natural movement-hard to tell. Enemies in the far group pretty much just stand there, only switching to the close group if a gap appears.
Mark of Kri (PS2): Two groups, a near group and a far group similar to God of War , but the near group is only one enemy at a time. The far group contains about three enemies in these early encounters.
The near enemy stays near for a while (up to a minute) and makes multiple attacks with time gaps between. Then he goes back to the far group and someone else takes his place. This change of guard normally feels organic, because players tend to move and thus approach enemies in the far rank, giving that enemy an opportunity to switch. But even without movement, the change still happens, just in a less organic manner.
Occasionally, one enemy from the far group makes a charging attack even while someone else is in the near group-this is just a single attack, after which he returns to the far group. This charge can also be used as a way to enter the near group when the near group is empty, settling into the normal pattern after the charge ends.
Genji (PS2): There's just one far mass of enemies, relatively far from the player. Not too many enemies in this group (3-5), at least at the start of the game. One enemy chooses to approach from that group, and then he walks slowly towards the player character. Once he is near the player, he makes one attack (multiple attacks for special enemies), then walks back to the far group.
Prince of Persia: The Two Thrones (Xbox): There is just one group of enemies fairly near the player. One enemy chooses to attack, makes a single attack or a combo, and then goes back to the group. Enemies usually come in fairly small groups; about three enemies at a time.
Ninja Gaiden (Xbox): There is one group of enemies, usually three or fewer at a time. One enemy chooses to attack, makes a single attack or a combo, and then goes back to the group.
Heavenly Sword (PS3): There are more enemies than most games-up to 20 at a time-but still grouped in a near set and a far set like many of the other games. The near group is at most four enemies, and enemies in the far groups can still attack.
The positioning, especially in the far group, is widely varied, with enemies appearing more like a jumbled mass than a clean circle. This variety feels good and makes the grouping less obvious without confusing the player, since the near group is usually clearly defined.
A screenshot is taken from the old build of Conan , showing the inner and outer rings where the AI position themselves. In later builds, enemy position on each ring was more varied.
Conclusions: The solutions used here are more varied than I expected. All the games group their enemies into one or two groups around the player character, but how the enemies attack from their groups varies a lot from game to game.
Prince of Persia and Ninja Gaiden both keep enemies in a single group, with one enemy breaking from the group to make a single attack. This works well with smaller groups, but for our game, we want over a dozen enemies at once, so we need to spread them out more if we're going to fit everyone.
Mark of Kri and Genji felt a bit artificial, because one enemy from the group would call the player character out for multiple attacks while the others watched. Genji could at least argue that the pattern fit the dueling style of the game. I did like the surprise attacks that Mark of Kri added from the far group-it made those distant enemies much more meaningful. The player has to keep half an eye on the outer ring at all times.
But overall, God of War and Heavenly Sword had the best feel. Having multiple enemies near you keeps things on edge and makes it harder for the player to tell what to expect next-which was reassuring, since that was the basic direction we were already considering.
Timing
Questions: How often does the player get attacked? Is attack timing decided individually by each enemy, or controlled centrally for the whole group? Do multiple enemies attack at the same time?
Every designer should keep a stopwatch handy for times like this. You never know when you will need precise measurement to turn vague impressions into meaningful data.
God of War : When just blocking, the player gets attacked about every two seconds. Enemies appear to be attacking independently-they aren't really coordinating their timing apart from some basic spacing of attacks. If there are fewer than three in the close group, the attacks are less frequent. The two-second pattern is just a result of each enemy attacking about every six seconds, and there usually being three enemies attacking at a time.
Mark of Kri : Timing varies widely. The primary attacker usually attacks every 3-6 seconds, but sometimes there is a gap of up to 20 seconds. It feels like there is some pattern-a long pause followed by a short series of attacks-but it's not consistent enough to say that for sure (my brain may just be looking for patterns that don't exist). The attacks from the far group are less frequent-every 5-30 seconds-and it seems like distant enemies are more likely to attack immediately after the near enemy does.
Some of the wide variation in far attack timing comes from the time it takes the far enemy to find a valid attack position-the enemy in the inner ring often gets in the way, especially in more narrow areas. So a far enemy may decide to attack in conjunction with the near enemy, but if it takes him an extra 20 seconds to find an attack slot, his timing ends up out of sync.
Genji : There's an average of six seconds between attacks, which is much longer than the other games. Because only one enemy is near and attacking at a time, there's no need for a group timer.
Prince of Persia : The player is attacked about every four seconds. Attack timing is controlled completely from the group level. There is very consistently someone attacking every four seconds, but individuals may go a long time between attacks depending on who is chosen at the group level.
AI attacks often fail to collide with the character even with no player input beyond blocking to avoid them (not moving, not dodging, not attacking), which feels odd. Not sure why this is happening-it seems like a bug. My best guess is it's a sync issue with the block animation-block makes the player character crouch down a bit, and the attacks appear to go over his head.
Ninja Gaiden : This game seems to vary more than most-2-5 seconds between attacks. Attack timing seems to be controlled at the group level, similar to Prince of Persia .
Heavenly Sword : There's usually a four-second gap between attacks, but about two of those seconds are the attack itself, as even early enemies regularly use combos. In some cases, it could go much longer between attacks, especially in the first couple of battles, where AI helpers can distract AI enemies. Attack timing seems to be controlled at the group level: Overall timing is consistent, but timing for individual AI varied wildly.
Conclusions: There were generally about 2-5 seconds between attacks, but more variation than I expected, especially in real-world conditions when the character is moving around and causing chaos. This seems to be a real 'flavor' element-games that take longer between enemy attacks feel more strategic, and games that take less time feel more intense.
And predictability of this timing seems to be a meaningful difficulty factor-enemies that attack at fairly regular intervals are easier to predict, and thus encourage blocking and help the player learn patterns. The games that are less predictable are the ones that are generally considered more hardcore games.
Combos
Question: Do enemies attack with one action or multiple?
Sony's God of War
God of War : Zombies use a two-hit combo. Harpies have one big charge attack instead of a combo, due to their unusual flying movement style that doesn't lend itself as well to stationary combos.
Mark of Kri : Combos vary by enemy type, with the very first enemies doing only single attacks, but quickly introducing bigger enemies who have a consistent three-hit combo.
Genji : Most enemies do a single attack, but many encounters have one enemy who is a bit more powerful-I'll call him a captain. When the captain attacks, he makes three unrelated attacks before heading back to the group. It's not a traditional combo in that the animations don't really link up, but in the context of this grouping method, it acts like a combo.
Prince of Persia : The early enemies have a few three-hit combos, but also use a one-hit attack sometimes. The attacks seem to be determined by random chance.
Ninja Gaiden : Enemies use combos even very early on. Player blocking is very important to the gameplay, so this make sense. Combo patterns encourage blocking, especially when the player can block in response to the first hit in order to avoid later hits.
Heavenly Sword : Single attacks dominate the first couple of fights, probably because the AI helpers in these fights change things up a lot. Three-hit combos are consistent by the third fight.
Conclusions: These games use more combos in the early stages than I expected, and with more irregularity than I expected. The early appearance of combos appears to be a stylistic difference-if a game uses combos for most of the enemies over the course of the game, then it is worth introducing that concept early on to get the player comfortable with them.
Irregularity felt awkward to me. Personally, I believe that combos should be an either/or thing, consistent for each type of enemy. If you have enemies with a percent chance of doing a combo, it becomes hard for the player to recognize any pattern and react to it-unless the goal is to make it really hard to predict and react, which plunges the game into hardcore territory very quickly. I think the games that randomized this were weaker for it-but that's me interpreting the results, not an empirical finding.
Looking Stupid
Questions: What do enemies do when they're not attacking? What do enemies do to avoid looking like they are uninvolved in the combat?
God of War : Enemies in the far group just stand around and look relatively uninvolved. But they're zombies, so it looks OK. (Personally, I believe the popularity of zombie-killing games is partially fuelled by the lower AI expectations-they're supposed to be mindless, so game development is easier. That, and zombies are the only thing as fun to kill as Nazis.)
Enemies in the far group would occasionally play a yell/cheer animation that seemed more involved, but it was fairly infrequent. I get the feeling that they noticed this problem near the end of development and made this animation to fix it, but it turned out to be just a bandage.
Mark of Kri : Enemies in the far group are constantly moving, mostly just sidestepping in a ring around the player. This makes them feel active without really affecting gameplay, especially since the motion is centered on the player character. The close enemy stands still a lot, but his animation and facing make him seem to be watching the player character and waiting for an opportunity, so it feels appropriate.
Genji : Enemies are always moving in a slow, pacing, stalking motion. It does a good job of making them appear involved in a samurai-appropriate way. But they tend to get stuck on environmental objects and appear to moonwalk, which ruins the illusion. If their pathfinding had been able to better account for obstructions, it would look a lot better.
Prince of Persia : Enemies are always moving, which makes them feel involved, but the animation looks twitchy when changing between AI states, which ruins some of the effect. If it were smoother, it would feel even better.
Ninja Gaiden : Enemies mix side-step movement with standing in a fencing pose. The fencing pose does a good job of appearing involved even when they're not moving. My expectations may change a bit for ninjas, as I expect them to be controlled and cautious in their motion. A stiff animation makes sense for a ninja.
Heavenly Sword : Enemies use a circle strafe walking motion to appear to be doing something. But there are times when this behavior falls apart, and enemies strafe in a circle, or stand in place, or run to get to a seemingly random position. There are no occasional cheering animations.
Conclusions: Having enemies pace and sidestep when awaiting combat feels good. It makes the character feel active and also masks small positional changes without having to pop out of a standing animation. Occasional animations like the yell in God of War don't really help much, since there are still long periods of just the base animations.
Getting the right feel for the base animation helps a lot-characters who appear to be focusing on the combat instead of just using a generic standing animation feel much better. And tweaking one animation is a much simpler solution to execute than trying to fix this with complex AI changes.
It was interesting to note how many little bugs ruined otherwise good animation. That may partially be an artifact of my methods breaking the system or my overly analytical approach to the situation, but I think a bit more playtesting and review of content once it's actually in the game code would have helped many of these games.
Tells
Questions: How does the player know an attack is coming? Is the attack animation built with a clear indicator at the start, before the attack is active?
God of War : There's a small setup time in the animation, but nothing huge to telegraph the moves. It's enough time for a quick reflex reaction, but not enough for thought. Tells get more significant with later enemies where player avoidance is more necessary, but within the context of this test, there were no tells.
Sony's The Mark of Kri
Mark of Kri : Most attacks have a significant animation portion before they're active, which acts as a tell. They appear to be built specifically to fulfill this role.
Genji : Since each enemy approaches from the far group before attacking, the approach phase movement acts as a tell, allowing the player to prepare his reaction. Each attack also has a small animation tell.
Prince of Persia : Travel time from the far group to an attack position works as a tell. Unlike in Genji , these enemies don't really walk up, pause, then attack-the approach is part of the attack-but it still leaves enough time for a quick block.
Ninja Gaiden : The time required to run up to the player character acts as a tell, since enemies start a fair distance away.
Heavenly Sword : A big colored flash and glowing streak occurs before every enemy attack. Later in the game, the color lets the player know what type of attack is incoming, which affects how the player should block.
It certainly solves the problem, but it breaks the otherwise detailed, realistic look of the game. Having multiple defense types based on incoming enemy attacks sounds like a good idea, but if a big colored streak is the only way that players will really understand it, I'm not sure the benefits are worth the cost.
Conclusions: Most of these games don't use explicit tells, at least for smaller human-sized enemies. Many of the enemy attacks use forward motion as a tell, which works best if enemies are attacking from a far group.
The lack of tells doesn't surprise me, as my expectation for this genre is that tells are more important with boss or sub-boss enemies with huge, exaggerated motions. With Conan, we want to have more of a back and forth feel to our combat, so tells are critical to give the player a chance to block. Our tells are more pronounced than those of most of the other games I considered.
Enemy Defenses
Questions: What does the enemy do to stop player attacks? Do enemies block? Dodge? What types of attacks or combos are blocked?
God of War : There are no defenses at this point. Later enemies do use some defenses, but even later in the game defenses are more the exception than the rule.
Mark of Kri : The first enemies are defenseless, but blocking enemies show up within the first few encounters. They don't block terribly consistently, though. It seems to be a random chance per attack, so the player can just mash through them and land attacks pretty often.
And once the player hits, subsequent hits connect before the enemy gets out of his hit reaction, so the player can really lay it on. A bit later in the game, combo counter enemies are added; enemies attack when the player initiates the light hit combo, so the player takes some damage if he mindlessly mashes buttons.
Genji : There are no defenses on the first groups of enemies.
Prince of Persia : There are no clearly defensive actions. The interrupt attack (described as part of the next question) is similar to a defense, but it is more of a reaction than a block, so I didn't consider it here.
Ninja Gaiden : Enemies block. A lot. It doesn't really surprise me, as this game is generally considered to be very hard, partially due to difficult enemy defenses.
Heavenly Sword : By the third fight, there are a few enemies with shields. The shields completely block all basic attacks, but are vulnerable to anything else. There is a fairly wide variety of alternatives in the player's combat system (finishing moves, heavy attacks, grabs, etc.), so it's a good guidance to encourage the player to not just jam the same button all the time.
Conclusions: Little to no defenses at the start seemed to be the norm, but most of these games introduce some form of defensive action fairly early in the mission progression. This makes sense-enemy defenses are a great way to guide the player to use certain attacks, but the first few encounters should be as easy as possible to aid the player's learning curve.
I was happy to see that in some games, enemy defenses are used early on specifically to discourage button mashing strategies-this is something we'd been considering for Conan, so this gave me validation to push harder on that point.
Interrupts
Questions: Do the enemies interrupt player attacks with their own attacks? Are certain moves immune to interruption?
God of War : Enemies sometimes interrupt player attacks, but it doesn't happen very often. Enemies often trigger attacks during player attacks, but rarely actually hit with these attacks. The reason for this is that the forward motion on most player attacks is enough to get the player out of range of most zombie attacks.
So interrupts are discouraged as a side effect of other decisions, but not actively prevented. Later on in the game, enemy interrupts become more effective. But even then, certain special moves like the grab make the player character invulnerable, so even later on special moves cannot be interrupted. But this is seen as an exploit by some players, so it might not be something to replicate.
Mark of Kri : Enemies can interrupt player attacks, but it doesn't happen terribly often. Only having one enemy on the player character at a time reduces the chance of interruption, especially since that one enemy is often going through hit reactions instead of attacking. Distant enemies can interrupt, but those attacks have a long tell. Interrupts don't stop the player during certain special moves like the finishing move.
Genji : Enemies are very willing to stick to their normal attack patterns and timing when the player attacks, which means interrupts happen fairly often.
Prince of Persia : When the player attacks, it appears to consistently trigger someone other than the target to initiate an attack on the player character. It appears to be deliberately triggered beyond just the normal attack timing, but it's hard to say for sure.
The timing of this attack relative to the player attack (and space between the two) means that this enemy usually won't hit the character until just after the player's three-hit combo ends. Player motion sometimes takes the player away from the counterattack, but not usually.
This dynamic tends to encourage the player to use an attack-attack-attack-block pattern to prevent this counterattack from hitting. I find it odd that a game that supposedly is more acrobatics-focused would encourage such a specific pattern this early in the game. Strong patterning like this seems more hardcore than I would expect from this series.
Microsoft/Tecmo's Ninja Gaiden
Ninja Gaiden : There are lots of interrupts, and the player's block triggers relatively slowly, so the player has to really predict in order to block them.
Heavenly Sword : There are lots of interrupts. Even with some forward motion, it's still fairly easy to get hit by a third party if the player is not watching out for everyone.
Conclusions: Enemies were much more willing to interrupt than I expected. Most of these games allow random "no fault of the player" interrupts even very early into the game. But in most cases the mechanics and timing are set up so that interrupts don't happen too often. I expected to see more games explicitly prevent these interrupts.
This gave me reason to change my feedback to not worry about this so much. I still discourage it, as I still believe it's potentially frustrating to casual players, but I didn't spend as much time or effort ensuring it was completely eliminated in all cases.
Player Motion
Questions: What do enemies do when the player runs around instead of standing still? What do enemies do if the player tries to leave the fight?
God of War : Man, they're quick. Zombies can get back to their preferred position with very little delay when Kratos moves away. And that's what they do, even if it requires somewhat artificial motion to get to the spot they want. Again, the expectations for zombies make the erratic motion not look so bad. They don't attack until they get into position again, but it's quick enough to keep things moving.
Mark of Kri : The one enemy in close consistently attacks and hits if the player character tries to run away. If the player character gets a little bit further away, that enemy will move in very quickly to keep up. Running around is punished enough that it is not something players can really get away with once a fight starts.
Genji : Enemies stick to their normal attack pattern even when the player character is running around. One enemy is "blessed," and he'll pursue to attack while the other enemies attempt to maintain their distant position. The player can walk right up to enemies in the distant group, and they won't even consider attacking unless they get "blessed." This can create some very awkward AI situations, especially with a player looking to exploit the system rather than to play naturally.
Prince of Persia : When the player is running away, enemies still use the group attack timer, but the player can't get away without passing right next to an enemy from the far group. The enemies in the far group can attack very quickly-the danger of the quick attack animation is normally mitigated by the time it takes for the enemy to approach.
If the player runs up to an enemy, the tell is effectively removed, and the enemy can attack before the player has time to react. This is an interesting, natural way to discourage the player from bolting from a combat.
Ninja Gaiden : Even when the player character moves, enemies use the normal attack sequence. The enemy who is currently attacking runs extremely fast to keep up with the player, making it hard to get away for more than a moment.
Sony/Ninja Theory's Heavenly Sword
Heavenly Sword : The mass of enemies slowly follows the player character, but there are occasional attacks which have strong forward motion that often allows them to catch up. Most of the levels in the game are made up of relatively small arenas, so the enemies never have very far to travel to catch up.
Conclusions: Most enemies maintain their previous behaviors, moving to follow once a certain distance is reached. A few games use harsh denial methods and/or sudden speed bursts to ensure that the player doesn't go anywhere once combat starts.
In my opinion, these methods are overcompensating - if the player wants to reposition or change opponents without leaving the fight, these systems can interrupt player intent in an awkward way. The goal of discouraging players from completely breaking off during fights is a reasonable goal, but these methods create more problems than they solve.
Gating
Question: Can the player avoid enemies by running past them?
God of War : Almost all the early encounters don't offer a path out until the player kills lots of zombies. If the player tries to open a door or activate an object before killing everyone, the player character will usually get hit before he can finish, which is something we'd been discussing for Conan. Later in the game, some battles add magical walls to make this even more obvious.
Mark of Kri : Movement during combat is tightly controlled, given the way the enemies attack if the player character tries to run. If the player can't get away, there's no need for additional gating. If he does manage to get away, activating an object interaction (such as climbing a ladder or ledge) doesn't appear to trigger enemy attacks.
Genji : Lots of invisible walls prevent moving away from combat. Each combat basically creates its own artificial space, and the player character is stuck there until the combat is finished.
Prince of Persia : There's no gating on these first encounters-it's pretty easy to run past and jump away, especially given all the movement abilities the Prince has. The previous game, Prince of Persia : Sands of Time, would teleport enemies to positions around the player character if he ran past, but I wasn't seeing it in these early encounters.
Ninja Gaiden : I didn't see any gating-I could run to the next platforming bit and get away without much trouble. Big fights or boss fights, like the horse enemy, did lock me in, but only for these big moments.
Heavenly Sword : There's no gating, but most early battles are in smaller enclosed arenas, so there's nowhere to go. Later in the game, arenas get a touch bigger and players can create unexpected clumps or other problems by running to a hallway when a fight is supposed to be in a big area.
Conclusions: Apart from God of War , there was very little gating in the first few encounters. Most of these games add more gating later, but they were more willing than I'd expected to allow gating to lapse fairly regularly.
This was definitely useful in guiding my feedback, as I was able to shift attention away from gating and onto more fundamental questions. I do think God of War is right to gate for many early encounters, to build player expectation that gating will be there, but it's not as much of a must-have for every little encounter as I'd first thought.
Enemy Zones
Questions: What do enemies do if the player runs far away from the enemy's starting point? Do they go back to their start, or follow indefinitely?
God of War : Within these first encounters, this was not really an issue, since hard gating kept the player close at all times.
Mark of Kri : Enemies won't leave their home area. They'll just stop pursuing and head back to where they started. This can be exploited by players, if they can avoid the within-combat punishments for movement.
Genji : The question doesn't really come up, since strong invisible wall gating prevents the player character from moving too far away.
Prince of Persia : With the amount of platforming gameplay in this game, it's rare that enemies have a big area to run around in before the player can escape. So usually the player takes to the rooftops or otherwise becomes inaccessible to the enemies before the AI has to turn around.
Ninja Gaiden : There are enough platforming bits between combat that this usually doesn't come up. Enemies can't chase because they can't do super-climb-jump motions like the player character can.
Heavenly Sword : Early fights are in small enclosed arenas, so this isn't really a problem. Even later fights are relatively enclosed, so distance isn't really an issue.
Conclusions: With most games, this issue didn't even come up, since gating or alternate routes (such as platforming areas) prevent enemies from even considering chasing the player character for too long. Mark of Kri is the only game which really had an issue with this, and it just sent the enemies back when it happened.
In this case, comparative product didn't really answer the questions I had, due to the differences between Conan and other games.
Hits to Kill
Question: How many hits does it take to kill a single enemy?
God of War : One good combo (3-6 hits) kills most enemies.
Mark of Kri : The first enemies take about three normal hits to kill, with a few ways to do it in fewer.
Sony/Game Republic's Genji: Dawn of the Samurai
Genji : One combo (3-4 hits) kills basic enemies, with two combos (eight hits) for basic captains.
Prince of Persia : It takes three quick three-hit combos-nine hits total.
Ninja Gaiden : Lots. Did I mention that this game is hard?
Heavenly Sword : It takes four three-hit combos in the first two fights, and two three-hit combos in the third to kill an enemy, but it's very easy to use a finishing move to skip through most of that. This is actually fairly similar to our approach in Conan-make basic moves a bit weaker than other games to encourage players to try out the special moves.
Conclusions: One combo or so to kill the basic enemies seems to feel right, especially since normal players aren't necessarily going to connect with every hit of their combos.
This is another one that seems to vary wildly based on the specific goals and flavor of combat in each game. But even the games with tougher enemies would drop them after three combos, so that suggests a reasonable estimate of the upper limit.
The Takeaway
As expected, there are some clear similarities and some wild differences in how these games handle combat AI.
Some of the variation I attribute to positive differences that make each game feel different. Hits to kill, timing, and enemy defenses vary for good reasons to enhance the specific goals of that game's combat system.
When designing a combat system, the AI should fit within the world and themes of the overall game. Is combat quick and deadly, or is each fight an epic sequence? Should the player block, or charge boldly into every fight? Enemy AI is a good way to define this style.
Some of the variation is difficulty-based. Beyond just stacking the stats against the player, some games use unpredictable AI patterns or give the AI denial strategies that make life hard for the player.
Ninja Gaiden was the exception in a number of categories, and it's generally seen the hardest game in the genre. Prince of Persia was simpler in many ways, which makes sense since it has whole layers of platforming and acrobatic gameplay to provide depth outside of the combat system.
There are some cases where the variation does seem to affect quality. Some of the games did not have very satisfying solutions for looking stupid, and finding the right balance for tells was awkward for some. This is where learning from the past can be the most useful. The places where previous games in the genre show some flaws are usually the best places to make a new game shine. But it takes time and research to find those opportunities.
Any case where God of War is the exception is intriguing to me. God of War managed to succeed both commercially and critically, so it stands to reason that it did some things differently and better than others in the genre.
Solid gating for key encounters, clear grouping rules, and zombies seem like they're the way the genre should go in the future. The lack of tells in the zombie enemies could be likely a sampling error - I know later enemies like cyclopes have clear tells, so I think my general conclusion still works in light of that exception.
One final disclaimer: Just because this is how previous games have done it, that doesn't mean future games need to do it this way. There are other ways to organize and pace groups of enemies for combat encounters. I'm sure someone will come up with a great way to set up combat without grouping enemies into clear near and far groups.
Breaking from the norm can be a great feature for a game, creating surprise and excitement. But novel solutions are still going to need to solve the basic problems addressed by the features discussed above. Any new solution still needs to create a fun pace to combat and avoid any glaring AI flaws that break the player's immersion in the game world.
Overall, I felt this was a useful exercise and gave me additional insight that I passed along to the developer. It helped me avoid making some requests that would have sidetracked development effort into unnecessary pathways, allowing us to spend more time on the things that really matter.
Since I did this, THQ product development has been working on some even better forms of internal research, vastly improving my feeble attempts with video integration of reference gameplay and a variety of other improvements.
I would recommend this sort of comparative analysis for anyone who has a specific issue that they know is going to be the focus of much detailed discussion. It can take time away from actually designing the game, but in the end it is worth it if it helps you make the right decisions early. Distractions are good if they help you design smarter.
Read more about:
Features
About the Author
Tom Smith
Blogger
Tom Smith is a Creative Manager at THQ, assisting external developers with design and quality issues. He spent many years in various design roles at High Voltage Software. And before that he worked on board, card, and role-playing games at Mayfair Games, including working on the first English version of Settlers of Catan.
See more from Tom Smith chevron_right
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
