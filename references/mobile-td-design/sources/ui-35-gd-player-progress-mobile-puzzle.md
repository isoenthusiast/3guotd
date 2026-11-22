URL: https://www.gamedeveloper.com/design/the-player-s-progress-designing-levels-for-mobile-puzzle-games
TITLE: The Player's Progress: Designing Levels for Mobile Puzzle Games - Game Developer
RETRIEVED: 2026-11-22
METHOD: web_extract

- [Design](https://www.gamedeveloper.com/design)
- [Commentary](https://www.gamedeveloper.com/latest-commentary)

[![Game Developer Logo](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltb8149045ecc9add6/664670498df30a26f54d5ed4/GDBlogs_Logo_FINAL.png?width=1400&auto=webp&quality=80&disable=upscale)\\
\\
**Featured Blog \|** This community-written post highlights the best of what the game industry has to offer. Read more like it on the Game Developer Blogs.](https://www.gamedeveloper.com/keyword/blogs)

# The Player's Progress: Designing Levels for Mobile Puzzle Games

How do you keep players engaged through 1000+ levels of content without continually introducing new mechanics? In this post I analyze use of progression in puzzle level design for mobile games.

[![Picture of Christian Karrs](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt85a817e4b8043fba/65087d4031f0f21e1a01e33b/Christian_Karrs.jpg?width=100&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/author/christian-karrs)

[Christian Karrs,](https://www.gamedeveloper.com/author/christian-karrs) Blogger

January 19, 2016

schedule6 Min Read

![Game Developer logo in a gray background | Game Developer](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt2c2f608b8dadcd62/6a97e133db31b5be7767f1c7/GDE27_Placeholder_-_5.png?width=1280&auto=webp&quality=80&disable=upscale)expand\_content

[Linkedin](https://www.linkedin.com/sharing/share-offsite/?url=https://www.gamedeveloper.com/design/the-player-s-progress-designing-levels-for-mobile-puzzle-games)[Facebook](http://www.facebook.com/sharer/sharer.php?u=https://www.gamedeveloper.com/design/the-player-s-progress-designing-levels-for-mobile-puzzle-games)[Twitter](http://www.twitter.com/intent/tweet?url=https://www.gamedeveloper.com/design/the-player-s-progress-designing-levels-for-mobile-puzzle-games)[Reddit](https://www.reddit.com/submit?url=https://www.gamedeveloper.com/design/the-player-s-progress-designing-levels-for-mobile-puzzle-games&title=The%20Player%27s%20Progress%3A%20Designing%20Levels%20for%20Mobile%20Puzzle%20Games)[Bluesky](https://bsky.app/intent/compose?text=The%20Player%27s%20Progress%3A%20Designing%20Levels%20for%20Mobile%20Puzzle%20Games%20-%20https%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Fthe-player-s-progress-designing-levels-for-mobile-puzzle-games)[Email](mailto:?subject=The%20Player%27s%20Progress:%20Designing%20Levels%20for%20Mobile%20Puzzle%20Games&body=I%20thought%20the%20following%20from%20Game%20Developer%20might%20interest%20you.%0D%0A%0D%0A%20The%20Player%27s%20Progress%3A%20Designing%20Levels%20for%20Mobile%20Puzzle%20Games%0D%0Ahttps%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Fthe-player-s-progress-designing-levels-for-mobile-puzzle-games)

Disclaimer: The views expressed in this blog are solely my own

A Puzzling Challenge

![](https://lh6.googleusercontent.com/CnPxyMU5rHZDitcGTRj2Phye-cw3CAfSatnNJiYrzIkfnTysQXFubR3hHKKFk28BNvgJ-eva5yW3CU_L4EiZMGH2txinE-DOSEBI0Lb0uU1o50FSL133NLC_lTIcM1e37FSlo295?width=142&auto=webp&quality=80&disable=upscale)

Howdo you keep players engaged through 1000+ levels of content without continually introducing new mechanics? This task is no small feat, yet it is the objective of many game designers working in evergreen games as service titles, such as the puzzle game genre on mobile.

I've been working on mobile puzzle games for the past seven months (at a mobile game company called Storm8), and it’s been an interesting experience learning about the way game design concepts are employed in this field. In this post I want to focus specifically on game design in relation to content creation, the levels that ultimately make up the bulk of the player’s experience.

Asa game designer working on mobile puzzle games, it is likely at some point you will be doing content creation in support of a live game. In live support, eventually resources will become scarce for implementing new mechanics, but it will be necessary to continue to use the provided tools to create interesting andpreviously unseen combinations to keep players engaged. Don’t despair! The match3 system is mercifully robust, and it is likely you will have a collection of obstacles at your disposal with some natural interactions that can elicit meaningful puzzles. In this post I want to focus on a tool of traditional game design, the ‘Interest Curve’, and how it can be an asset for structuring levels to engage players.

The Interest Curve

As game designers, our goal is, generally speaking, to make games that excite and engage the player. One way of thinking of each level in a game, puzzle games included, is a microcosm of the emotional arc of the full experience. So, each level should provide the player with a similarly developed arc of interest. Enter the Interest Curve:

![](https://lh4.googleusercontent.com/Y6IN3CGbZy7kDlMhFn0ec_2lMIx2Nylbx5lmqws-GTwKY1PyvYwDnqzDh8NToYVkldNvLDQKb8SsV5FXl_4WQoUGeJN1xNVvDDZe1EBW1L9tX1kUdBgaZw80YcbrHTtd0MAoFeP_?width=538&auto=webp&quality=80&disable=upscale)

The image above (taken from The Art of Game Design by Jesse Schell) shows the conventional interest curve, in which each point represents a moment of strong engagement (i.e fun) for the player. This is a concept that is probably very familiar to people working in games, so forgive me if I’m reiterating. However, in the form shown, this is still a very abstract concept. To make it work for us in practice, we need to map it to more concrete concepts within the games we are working on/discussing, in this case mobile puzzle games.

Feeling of Progress

![](https://lh5.googleusercontent.com/qFT546PWThzjIDRJpMW3BasM5tess-0W7ZO1j-y7p1WXrSykN4acr8MB6Rqy_8j7p4zWaARM5wvLfxqsohZ_Hq9s3_K-0mlicf5H0zjoKjtlG4bB_AssHfyhNgi4DINzw-l9Ksbr?width=400&auto=webp&quality=80&disable=upscale)

The peaks on the Interest Curve could take on any number of forms of content depending on what game you are working on. For example, in a first person shooter, both finding a rare weapon on the map or an enemy encounter could register as equally engaging to players depending on the context. When considering puzzle games I have found moments of progress to be the most relevant mapping for those peaks. This is still abstract but we can get more specific. Anecdotally, a strong motivator and reward for most players is a feeling of progress. This can manifest itself differently for different players and across different games. A Startcraft 2 player may feel strongly rewarded when they detect that their skill at a certain opening is increasing, as reflected by a better competitive ranking. In mobile puzzle games, the two main forms of progress within a level are progress on the board (visual progress, the changing of space) and progress towards goals (collecting required recipes, etc).

Board Progression

![](https://lh6.googleusercontent.com/YqeY1WaJzZjwDLlcFV4M_3gX1AisqC6szzRcawt0Rlcjz-tI76usPm8c0pt8l8YqQZdx5NTsVh34cUklCr1mvDoOLwSAlTrvLyv7EDYGEMNYpEC3wnWStmmkiTO5IGEu_UOxDB_X?width=624&auto=webp&quality=80&disable=upscale)

Board progression refers to the difference between the visual state of the board at the start of a level and after a playthrough. This doesn’t necessarily need to be tied to recipe progression, but I’ve found the effect to be strongest when altering the space through play corresponds to the player approaching successfully completing the stage. The images above are of a level I made for Storm8's Candy Blast Mania. I consider this level, level 1177, one my most successful designs. You can see a very noticeable difference between the opening game board and the board at the end game. The player must clear jawbreakers (stationary obstacles that block the flow of pieces) in order to fulfill a recipe, but this also increases the usable space of the board and allows them access to the cannons at the bottom of the board which add a score multiplier. Outlining the flow of the level, and how you expect the board to change throughout a playthrough is a good starting point for designing a level with a good sense of progress for players.

Goal Progression

In match3, bubble shooters and many other mobile puzzle games the player has a set goal count they are working toward collecting (a target score, 100 specific color pieces, etc). Generally the player should be collecting these at a good pace so they can be close to victory at the level’s conclusion, whether or not they actually win. However, it is possible to structure levels in a way to ‘spike’ the collection of certain of certain objectives so the player sees a surge of progress. One way of doing this is to have the player gradually open the space of the level (such as in the examples above and below) so that towards the end of their playthrough they have more bonus matches from pieces that fall in. These ‘surges’ of progress towards objectives are another way to add or emphasize peaks of interest in engagement arc of your level. Believe it or not, watching the tiles drop in, and hoping enough matches come together to tick down the counter giving you the win can be a pulse pounding experience!

![](https://lh5.googleusercontent.com/Yh3oG7_0Lp_joie4lrEYMFXnHACRVww8x314gIIz5_nX_9ZzA_NI9EArS01Anae3cCzw3l_gcJH4ayg5vyrn9g4PtVp0PJoFRuUzJQoc1lk_jkxzkXu4lYXh9tqX1C6SnEutsWoF?width=624&auto=webp&quality=80&disable=upscale)

In the above image of level 34 from Rovio’s Nibblers, you can see that the opening board has very constrained space, but as the board opens up towards the end game, the player has a high chance of special tiles forming from tiles falling in (these take the form of hungry, friendly fish in Nibblers). These special tiles allow the player to quickly collect high numbers of their needed pieces.

Games like King’s Farm Heroes Saga and Candy Blast Mania have a built in bonus mechanic that amplifies the values of certain pieces based on adjacent matches, and Candy Blast Mania even has a specific on board fixture that can increase bonuses specifically for this purpose.

A Piece of the Puzzle

Using an interest curve for structured player progression is an important element of level design for match3 and puzzle games, but it is only one element. Interaction between mechanics, robust existing mechanics that designers have to work with, and defying player expectations are but a few of the many that can come into play, and I hope to analyze some of these at a later point. For now, I hope you enjoyed reading and feedback is welcome!

Read more about:

[Featured Blogs](https://www.gamedeveloper.com/keyword/featured-blogs)

[Linkedin](https://www.linkedin.com/sharing/share-offsite/?url=https://www.gamedeveloper.com/design/the-player-s-progress-designing-levels-for-mobile-puzzle-games)[Facebook](http://www.facebook.com/sharer/sharer.php?u=https://www.gamedeveloper.com/design/the-player-s-progress-designing-levels-for-mobile-puzzle-games)[Twitter](http://www.twitter.com/intent/tweet?url=https://www.gamedeveloper.com/design/the-player-s-progress-designing-levels-for-mobile-puzzle-games)[Reddit](https://www.reddit.com/submit?url=https://www.gamedeveloper.com/design/the-player-s-progress-designing-levels-for-mobile-puzzle-games&title=The%20Player%27s%20Progress%3A%20Designing%20Levels%20for%20Mobile%20Puzzle%20Games)[Bluesky](https://bsky.app/intent/compose?text=The%20Player%27s%20Progress%3A%20Designing%20Levels%20for%20Mobile%20Puzzle%20Games%20-%20https%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Fthe-player-s-progress-designing-levels-for-mobile-puzzle-games)[Email](mailto:?subject=The%20Player%27s%20Progress:%20Designing%20Levels%20for%20Mobile%20Puzzle%20Games&body=I%20thought%20the%20following%20from%20Game%20Developer%20might%20interest%20you.%0D%0A%0D%0A%20The%20Player%27s%20Progress%3A%20Designing%20Levels%20for%20Mobile%20Puzzle%20Games%0D%0Ahttps%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Fthe-player-s-progress-designing-levels-for-mobile-puzzle-games)

## About the Author

[![Christian Karrs](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt85a817e4b8043fba/65087d4031f0f21e1a01e33b/Christian_Karrs.jpg?width=400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/author/christian-karrs)

[Christian Karrs](https://www.gamedeveloper.com/author/christian-karrs)

Blogger

[See more from Christian Karrschevron\_right](https://www.gamedeveloper.com/author/christian-karrs)

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
