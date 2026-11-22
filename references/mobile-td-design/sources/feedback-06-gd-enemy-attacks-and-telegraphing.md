URL: https://gamedeveloper.com/design/enemy-attacks-and-telegraphing
TITLE: Enemy Attacks and Telegraphing
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
Enemy Attacks and Telegraphing
Best practices for letting the player know what questions your enemies are asking.
Mike Stout , Blogger September 2, 2015
schedule 7 Min Read
expand_content
Intro
Note: These articles go up a few weeks early at http://www.chaoticstupid.com.
Like most things when it comes to video game design, I think of enemies in terms of:
The Questions the enemy is asking players
The Tools I need to design for players to defeat my enemies.
These questions exist on multiple levels and in various contexts.
In previous articles , we explored enemies in the contexts of Setups or Ramps . Within those large contexts, I abstracted what the enemies actually do to an almost comical level. For example: "Swarmers run at you in groups," or "Near enemies come close but have lots of health," or "Heavies do tons of damage and have lots of health." Because I was describing things at that larger scale (within the context of a setup containing different enemy archetypes , or a Path containing different setups) what the enemies actually did moment-to-moment was not that important to that article.
For this article, I want to "zoom in" and focus on the Questions enemies ask in the moment-to-moment gameplay. In a future article, we'll examine the Tools we need to design for players to defeat the enemies.
Previous Article
Damage Mitigation
There are a lot of ways to decide what questions your enemy should ask the player - but there is one in specific I find very useful. In general, the specific questions an enemy can ask are based heavily (though not exclusively) on how the player is supposed to deal with incoming damage from the enemy itself, or in other words "how do players avoid losing in combat?" There are many ways games can handle this, but for this article I'm going to focus on one in particular: Avoidance
Avoidance
Avoidance (n): The act of avoiding or keeping away from something. Basically, the enemy tries to attack and the player tries to avoid the damage somehow - this is an Avoidance-based system. (At this scale, I don't care how the player is supposed to avoid damage - whether by dodging or using an actively defensive power like blocking).
Enemies in this kind of system ask at least two questions:
Can you avoid my damage?
Can you hit me?
Example games that use Avoidance systems : God of War, Ratchet and Clank, Skylanders, Super Mario Bros franchise, Zelda franchise
Note: I'm using "Avoidance" here in contrast to other damage mitigation systems like, for example, "Attrition"; which assumes the player is taking damage over time and has ways (other than avoiding the attack) of mitigating damage. For example, "Tanks" in World of Warcraft tend to come from player classes the designers assume will be taking damage fairly consistently. Tanks have abilities that minimize this, like damage reduction, and are also assumed to get help from their teammates with healing abilities.
"Can You Avoid My Damage?"
Telegraphing the Attack
As you can hopefully see (in Avoidance-based systems, at least) it is crucially important that players understand the questions they are being asked in the moment of attack . If the player needs to dodge, block, or otherwise avoid damage - the player must first know the damage is coming. If players don't know how to play your game , they can't actually play your game.
This is where the technique of "Telegraphing" comes in
Telegraph (v) - To convey a message, intentionally or not, especially with facial expression or body language.
The term comes from sports like martial arts, where subtle shifts in the way fighters move reveal to the other fighter what kind of attack will come next. It's also a metaphor present in strategy games like chess and poker - players want to reduce the amount of unintentional communication they are having with other players.
In the case of a video game enemy, though, we want to do the exact opposite. We want to communicate exactly what the enemy is going to do so the player knows exactly what to do to avoid it. If players don't understand the questions they are being asked, they actually can not play your game.
The challenge for players is not about confusion over knowing what they have to do - it comes, as we've seen in my post about setups and the one about choice fields from the overlapping of many tiny, overlapping, well-communicated questions.
Pre-attack Animations
Before the attack, we need a small delay . The purpose of this delay is to tell the player "Okay, here I come. I'm gonna attack now… Can you avoid my damage? " Then, if the sword comes down and the player takes damage, it's not because they didn't know what they were being asked to do. It becomes fair.
The player needs to know what's going on, and so the enemy needs some kind of Theatrics to deliver that. The most common way I see this done is via animation. Every gamer is familiar with, for example, the "long wind-up" before a sword attack:
Telegraphing Effects
In games with enemies that have projectile attacks, the telegraphs are not usually animation-based (when they are, it's usually some kind of elaborate aiming animation). More often, though, the telegraph is delivered to the player via a combination of animation, sound effects, voice-over, visual effects, and sometimes even force-feedback.
Life, for example, every single attack in this 30 minute Dragon Ball Z video:
It doesn't have to take 3 minutes to do a single attack but man - it's sort of satisfying.
The most common example of this is that I see is a kind of "charge-up" effect: A ball of particles accumulates around the barrel of the weapon, you hear a kind of "vacuum-cleaner-in-reverse" sound, and then there's a bright flash. Only after all that does the projectile let fly.
I was thinking of drawing an example of that effect, but decided this Mega Man X spoof video explains it better:
Note : The effects don't have to be over the top and cartoony to work. If you're making a more realistic game, maybe all they need is a sound effect, a gun-cocking animation, and a VO clip saying "freeze scumbag!" (or something).
Extra Example:
Lungfishopolis Boss Fight from Psychonauts. Listen to what the boss is saying as it does its attacks:
(Go to 2:21)
Overly… Intricate… COMBINATION!!!"
"Hard…to…avoid… AREA ATTACK!!!"
This is a great example of using both animation and effects to telegraph the attack.
Next Time
Next week we'll talk about the other question inherent in avoidance enemy gameplay - "Can You Hit Me?" I'll talk about post-attack vulnerabilities, shielding, and other common techniques designers use to deliver this question to a player.
Appendix:
Attrition
Attrition (n): The action or process of gradually reducing the strength or effectiveness of someone or something through sustained attack or pressure.
Systems based on "attrition" assume the player will be taking damage (and lots of it). You may occasionally be asked to dodge really powerful attacks, but mostly you're assuming the player is mitigating the damage some other way than avoiding it.
In this kind of system, individual enemy attacks are not that important - and so often take away very small percentages of the player's health. Players often have a number of passive abilities that help reduce or counteract the constant stream of damage.
In essence, the players' resources are slowly disappearing over time for some reason -- be it taking damage or some other mechanic.
The question players are being asked is:
"Can I/we defeat this enemy before running out of resources?"
Example games that use Attrition systems : World of Warcraft , Candy Box , Farmville , FTL: Faster than Light , Diablo III , Gears of War
Patreon Credits
As always, these articles wouldn't be possible without my supporters on Patreon:
( http://www.patreon.com/mikedodgerstout ):
Champions
Petrov Neutrino
Guardians
Aidan Price
Martin Ka'ai Cluney
Patrons
François Rizzo
Scruff
Genevieve Pratt
Jesse Pattinson
Nikhil Suresh
Teal Bald
Vincent Baker
Benefactors
Justin Keverne
Ben Strickland
Mad Jack McMad
Oliver Linton
Katie Streifel
Annie Mitsoda
Supporters
Margaret Spiller
Jason VandenBerghe
The Yuanxian
Backers
Kim Acuff Pittman
Karl K.
Andy Kim
Joel S.
Neal Laurenza
Christopher Parsons
David Weis
Matt Juskelis
Mary Stout
Read more about:
Featured Blogs
About the Author
Mike Stout
Blogger
See more from Mike Stout chevron_right
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
