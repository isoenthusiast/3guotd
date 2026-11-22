URL: https://www.gamedeveloper.com/design/3-game-juice-techniques-from-slime-road
TITLE: 3 Game Juice Techniques From Slime Road
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
3 Game Juice Techniques From Slime Road
Ever wonder how to make a game 'feel good' without adding anything that changes gameplay? Slime Road does just that with some very simple strategies.
Olin Olmstead , Blogger December 14, 2018
schedule 6 Min Read
expand_content
I'm going to be honest here. Slime road is a casual game that doesn't bring anything new to the genre. It's near the top of the download charts probably because of a big marketing budget.
In the game, the player moves the ball right and left as it bounces down a road. The player aims to hit certain targets to gain points. This looks very similar to the popular game Color Road.
I decided to write about this game because of the mass amounts of game juice. There are many particle effects and ample tweening to make the game feel responsive to the player's actions.
Since I'll be talking a lot about game juice I want to explain exactly what that is.
Game juice is anything that makes the game feel more responsive without changing the mechanics of the game. This is usually in the form of animations and sound. Another term people use is 'game feel'.
The juice could occur when the player touches the screen or when a certain event happens within the game.
This game follows some basic tenets that make the game 'feel good'.
1. Nothing appears out of no where
Everything is animated on and off screen. This can mean objects slide in from off screen, or that it pops up in the middle of the screen.
2. Use easing functions for moving everything around
If an object moves from one position to another, the most basic way it can do this is at a linear speed. Meaning the speed is the same from start to end. For example, one easing function may move the object really fast in the beginning and slow it down when it nears it's destination. These functions can also be used for tweening numerical values, like a score.
3. Particles. Particles everywhere.
It's hard to deny the excitement that particles bring. It makes the screen look busy and is used as a celebration. This game liberally applies this tactic whenever the player is rewarded.
Remember these tenets as we take a look at the juice in Slime Road.
Title Screen
ANIMATE IN
Like I said, nothing appears out of nowhere. All the items here are set to a size of 0 and grow into the game world. It happens one at a time starting from the top.
ACTIVE HOME SCREEN
This main screen is not a still image.
The title stretches in the X and Y directions to give a feeling of squishyness.
The "Touch to Start" text is fading in and out to attract the player's attention.
Finally, the hand is showing the player how to play the game. Remember the easing I talked about earlier. The hand speeds up and slows down at either end of the animation, with it's fastest speed in the middle.
Of course, there's the bouncing ball in the background.
Gameplay
BOUNCING BALL
What stands out most is the slime from the ball. It looks like they used a few random images that are rotated at different angles and then fade away. There is also a splatter particle effect that lasts a brief second.
Then there is the easing of the ball bouncing. At the height of the bounce, the ball slows down. However, at the low end, when it hits the road, it is very fast to hit the ground and come back up. This mimics what it is really like to bounce a ball.
Finally, the ball has a squishy effect as the scale of the ball shrinks and expands on every bounce.
SCORING
The ball must go through the rings to score points. As it does, the ball in the middle of the ring explodes into a bunch of particles. The ring changes color as well.
The score goes up every time the player does this. The score for each ring is indicated by a 'Good', 'Great', or 'Perfect' that animates from a 0 scale. The total score also animates every time it increases as it appears to grow for a split second before returning to it's static size. There is also the same particles from the ring appearing on the score text.
Each time the player scores, the distance indicator at the top of the screen will move forward. This does so in a way that is fast at the beginning and then slows down at the end.
BETWEEN ROADS
Every once in a while, the end of a road comes and the ball does one big jump that propels itself through the air to the next road. During this time there are gems that can be collected and spent to purchase skins.
The jump starts with the ball compressing down to a flat state before leaping back into the air.
The ball now has a wavy trail behind it which again helps with the slimey effect they are going for.
There are also line particles on the sides of the screen to give a sort of speed effect. The particles coming off the ball do the same thing.
The gem rings are similar to the normal ones on the roads except that as you hit them, they enlarge before they disappear. There are still particles, this time as gems.
The last gem breaks apart in slo mo to really amplify the effect.
Game Lose
Losing creates a cascading effect of animations.
First, to lose the player must hit the ring that they are supposed to go inside of. When they do, the ring breaks apart into a bunch of pieces (similar effect to particles) and slime appears on the screen. Following quickly is text about how far they got and a restart indicator.
Remember, everything here does not happen instantly, they are animated in.
Here the player can also see the fading text to get them to keep playing the game.
Level Complete
Lastly we have the level complete sequence.
As the player approaches the end, they will see a glowing platform that fades in and out in front of a moving target.
The same big jump happens here like the between roads jump. It also goes into slo mo to emphasize the impact and moment that is finishing the round.
Lastly there is the slime as it hits the target. Particles hit and the drops of slime ooze down the side of the target. Confetti then shoots down from the top of the screen.
Finally, the level end text animates in showing the final stats.
Conclusion
The developers really ran with the whole slime theme and put a lot of effort into the little things. The squishyness and slimey feel of the whole game is all in theme. They are also consistent with how they animate the text.
Let's refer back to the juice tenets that we started with:
Nothing appears out of nowhere
Use easing functions
Particles!
Sometimes these animations or particles seemed to play such a small role in the game. Sometimes it's just a split second of movement and that may not seem important. But it is. It's more obvious when these elements are NOT present in the game and everything feels static and dull.
Luckily, these things are easy to implement! So go forth and animate, ease, and particle up your game. Hopefully then someone will compliment your game by saying it 'feels good'.
Check out Game Design Deconstructed for more!
Read more about:
Blogs
About the Author
Olin Olmstead
Blogger
See more from Olin Olmstead chevron_right
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
