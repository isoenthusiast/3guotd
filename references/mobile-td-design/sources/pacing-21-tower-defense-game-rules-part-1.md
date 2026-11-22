URL: https://www.gamedeveloper.com/design/tower-defense-game-rules-part-1-
TITLE: Tower Defense Game Rules (Part 1) (Game Developer, Teddy Phan)
RETRIEVED: 2026-11-22
METHOD: curl

- [Design](https://www.gamedeveloper.com/design)
- [Commentary](https://www.gamedeveloper.com/latest-commentary)

# Tower Defense Game Rules (Part 1)

When Tower Defense games mentioned, people often think of Icy Tower, Splash Damage Tower ... or Enemies with all the special features. But in my experience, building a mechanics with a clear rule system will be a solid direction for future creativity.

[![Picture of Teddy Phan](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltd8fa6555f7f4d762/6508861370c6ff859c651d82/Teddy_Phan.jpg?width=100&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/author/teddy-phan)

[Teddy Phan,](https://www.gamedeveloper.com/author/teddy-phan) Blogger

April 27, 2017

schedule10 Min Read

![Game Developer logo in a gray background | Game Developer](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt2c2f608b8dadcd62/6a97e133db31b5be7767f1c7/GDE27_Placeholder_-_5.png?width=1280&auto=webp&quality=80&disable=upscale)expand\_content

[Linkedin](https://www.linkedin.com/sharing/share-offsite/?url=https://www.gamedeveloper.com/design/tower-defense-game-rules-part-1-)[Facebook](http://www.facebook.com/sharer/sharer.php?u=https://www.gamedeveloper.com/design/tower-defense-game-rules-part-1-)[Twitter](http://www.twitter.com/intent/tweet?url=https://www.gamedeveloper.com/design/tower-defense-game-rules-part-1-)[Reddit](https://www.reddit.com/submit?url=https://www.gamedeveloper.com/design/tower-defense-game-rules-part-1-&title=Tower%20Defense%20Game%20Rules%20(Part%201))[Bluesky](https://bsky.app/intent/compose?text=Tower%20Defense%20Game%20Rules%20(Part%201)%20-%20https%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Ftower-defense-game-rules-part-1-)[Email](mailto:?subject=Tower%20Defense%20Game%20Rules%20(Part%201)&body=I%20thought%20the%20following%20from%20Game%20Developer%20might%20interest%20you.%0D%0A%0D%0A%20Tower%20Defense%20Game%20Rules%20(Part%201)%0D%0Ahttps%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Ftower-defense-game-rules-part-1-)

Tower Defense Game Rules (Part 1)

When Tower Defense games mentioned, people often think of Icy Tower, Splash Damage Tower ... or Enemies with all the special features. But in my experience, building a mechanics with a clear rule system will be a solid direction for future creativity. This article is to share people about some of the rules in the current TD games:

1\. Win-Lose Law & Goal on Map

Rule 1.1: To let enemy pass the Finish line is reduced to HP (or a unit with equal value). A rule as ancient as the earth, but most games use this one, Goal is usually ... nothing or something for Enemy to run toward, when Enemy is running in – reduce HP, each type of enemies loses a different value of HP.

A variant of this rule may be the case of Plant vs. Zombie, with up to 5 lane, but only one Zombie into the house is Game Over.

Rule 1.2: Enemy attacks Goal, reducing HP by Damage per Hit. For example, Lich Defense, players have to defend  Lich's Altar, Enemy runs into Altar and fights with Lich, when Lich's HP = 0 loses. Unlike Rule 1.1, the rule required when designing includes both Atk and AtkSpd for Enemy. And to develop more of this element, the game provides an upgrade system for Lich, increasing HP - Damage and changing the visual.

In the same case in Empire Defense, what differs is Goal is to create a path for Enemy, which will be more clearly stated in the structure of the Map and Rule (Section 2).

Rule 1.3: Enemy to steal the Goal, brought back to the place where the Enemy was created. For example, Enemy will steal a cow in Beware Earth Planet or steal a Gem in the Curse Treasure series at the Fountain to bring it back. The Goal will become the nearest Cow or Gem, Enemy find the neariest way to it, not has to go down the road as normal. Enemy's running rules also vary from old situation to new one, always determining the location of nearest goal to plunder. To reduce the difficulty, the game adds a feature that Goal has the ability to go to its Fountain location, not only a Cow but also a Gem … can run (everything can happen in game world!!!)

![](https://i.imgur.com/ppGpEly.jpg?width=600&auto=webp&quality=80&disable=upscale)

2\. Map and Rule building tower

Rule 2.1: There are available routes, the Towers are comfortably building on the "roadside" positions - do not build on the road site. Most of the games do use this rule, easy to design - control more difficult than other rules, with this rule, players are allowed to build quite comfortably, meet many tactics like spam low level Towers or build the Towers and push to higher levels at critical locations ...

A "less slightly comfortable" variant is the case of Cursed Treasure 2, where the amount land is huge, but having limit to the type of tower built on it. Jungle Land is only for Archer Tower, Dessert land is for Fire Tower, Frozen land builds the Magical one.

Rule 2.2: With available routes, with fixed building positions in the map. Typically in this form is the Kingdom Rush series, where preloaded positions are located and want to cross the stage, players must calculate very well the time to build the towers in these positions. In some hard-to-reach cases, Youtube is the reinforcement, that has the very unclear feeling that there's only one way to do it, like a puzzle.

Rule 2.3: Without routes, players make their own way by building Tower, Enemy will go on the "path" created by the empty cells - combined with the shortest path calculation algorithm. Two of the brightest representatives that use this rule are Field Runners and Madness TD, which need guidance lines so that players can easily calculate and control their Tower building. The game can add a dead-end calculating system to ban the player from building that position or allow Enemy to break the Tower for new route. A variant that combines Rule 2.1 and 2.3 is the case of Empire Defense when the player starts with one map not having a path - the default position for building the Tower, but the goal is a general who can move between each wave, transforming the cells he crosses into the road and the remaining positions will be to build the Tower, of course.

Rule 2.4: There is no such thing obvious as the three mentioned rules, all Enemy routes - which are also Tower building land, to block Enemy. You can feel the difference of rules in PvZ games and like Trolls vs Vikings, or the exciting Stop The Knights TD game. With this rule, Towers and Enemy directly fight for the location, instead of seeing Enemy just passing through as usual.

Besides: With each Tower each cell is quite characteristic, PvZ brings a feeling like a game as a arrayed tactical game very grandiose. Meanwhile, with the "mobile Towers" visual as an Unit , the battle in Stop The Knights has become extremely hilarious, offering a completely different feeling compared to other TD games.

Private Rule for Trap: Most games use Trap as an Object that does not change characteristic  at the location. For example, Lord of Trap or Orc Must Die, the Trap-attached Locations such as roadbed, wall or ceiling retain the nature of the attachments. Cases where Trap changes the character of the attaching location is Castle Doombad or PvZ, when attaching the Trap to the ground, it is not possible to build Towers at that location. Overall Trap is not necessarily a must have in TD games, but rather a good addition to the game, which can change the player's tactics, as well as the expansion of game development.

![](https://i.imgur.com/z0rfecF.jpg?width=600&auto=webp&quality=80&disable=upscale)

![](https://i.imgur.com/quHn8ML.jpg?width=600&auto=webp&quality=80&disable=upscale)

3\. Economy in Battle

Note: By default, regardless of the amount of money originally given to Battle, regardless of upgrades from Battle

Rule 3.1: War is the only source of income, money comes only from destroying Enemy. The majority of the game uses this rule, the more Enemy is killed, the more money to build the Tower - otherwise if it falls to some Enemy, the money will be reduced and …etc – Core loop is working like that. Some games like Kingdom Rush have systems that allow players to make extra money by releasing a wave early. This is a pretty good system, but sometimes it turns into a double-edged sword that always lurks players who want to perfect 3 stars.

Rule 3.2: Economic development and then military development. Planting Sunflowers to harvest Sun Light in PvZ, building Gear Factory to collect gears in Beware Earth Planet or creating Ghosts to collect "Dark energy" (hahaha, kidding, I do not know what it is) are typical examples for these kind of games. The game focuses on balancing the amount of resource and Tower construction on the finite surface of the screen. Players must not only build towers, but also have the money to collect. This sometimes makes the player slightly sting while Enemy is crowded, while most are quite fun with free-handed.

Rule for extra revenue: Extra revenue sources are the parts that players can take advantage of to increase their income, in addition to the above rules, including the following two rules: destroying obstacle to get money: lumbering with the Tree-cutting Skill as in Cursed Treasure 2 or breaking obstacle by Tower like in Fantasy Defense or Carrot Defense. Even Cursed Treasure 2 offers both a Gold Mine and a Mana Well, as well as a 5 or 6 Skill hit that can be exploited. Can the Sun Light be harvested randomly? Yes, in PvZ.

![](https://i.imgur.com/FAjKRy0.jpg?width=600&auto=webp&quality=80&disable=upscale)

4\. Hero or not?

#Hero Definition: A unit or something special, unique, completely different from the rest of the game. Too vague, try to clarify through the examples

Rule 4.1: No, no and no. Most of the current games still use this rule, the game structure is quite solid, the difficulty is stable with all players, GUI game is also neat. However, some games have a process of introducing new ones that are unreasonable or slow, and it also have players feel lack of breakthrough.

Rule 4.2: There is a Hero. With representatives such as Kingdom Rush and Over The Top TD (OTTTD), the game combines TD and RPG genres to provide a compelling experience. With 1 to 3 hero controls depending on the game, the player almost no longer have a hand-free concept. With both causing more Damage, attracting Enemy, in addition of the effectively and candy-eyes Skill, and adding the Hero is a worthwhile addition. However, this is also a very sensitive point, when the difficulty of the same level of stage will vary according to the amount and quality of the hero that the player owns and Hero controlling ability of user. Besides, the support to be through the stage, the Hero also increased the replay of the game. Owning a Hero table sometimes becomes a motivation for players to play to be "Like a Boss" instead of leaving it unfinished.

A slightly defensive variant is the case of Elf Defense or Three KingdomTD: Fate of Wei when the Hero is obviously ... a Tower. In particular, this Tower is built only once in a stage, plus the absolute stats and Skill system,  being through one stage depends quite a bit on placing the Tower and turning it into 1 Hero (or at least in my opinion).

![](https://i.imgur.com/nwJoc5e.jpg?width=600&auto=webp&quality=80&disable=upscale)

5\. Definition of flying-army

Rule 5.1: Flying is flying over all. The Airplane or Balloons in Fieldrunner or the Eagle in the Sango TD flying will prove this rule quite clearly. All of them fly straight from place of appearance to goal, ignoring all Towers or terrain elements. Such games often have to be played again and again to pass and achieve 3 Stars win, the process is more and more repeat. That’s the reason why these types of flying destroyers break the laws of grounded-military movements, which the player always have to count on, so the player has to spend a "risk" to when they appear to have to build the Tower right down to where they pass through (which the entire grounded-army has not reached - or can not), and then the Tower stays unfunctional awaiting until next flying units appear then have a chance to fire. An expensive price, a math problem is worth considering for the player.

Rule 5.2: I fly my own path. For this example, in Cursed Treasure 2 has an Eagle Druid Unit with the quite special transformation ability. When in the form of Druid, the old man is a regular infantry, when turning into a form of Eagle he will fly cross a river, which is going through the shortcut. With this rule, the game is also highly replay characteristic with unexpected moves, and also causes the player to extract a part of the resources to solve the situation instantly instead of trying to implement an expected long-term plan.

Rule 5.3: Flying but also just like walking. Actually, the Fly tag does not have as much sense of movement as the flying units still follow the same route as the infantry units. The only difference is that they are only hitted by a number of anti-aircraft Towers, or a different receiving Damage-Formula compared to Infantry (like Tower A to strongly fire Infantry, weakly fire Air Force ... or on the contrary). This rule seems easier for designers and players to manage their resources, and that is also the strength of this rule.

![](https://i.imgur.com/NQUygu8.jpg?width=600&auto=webp&quality=80&disable=upscale)

We finish basic rules for Tower Defense game here. Next part, we will discuss about addition rule include Skill, Upgrade Tree and some Unique rule

Read more about:

[Blogs](https://www.gamedeveloper.com/keyword/blogs)

[Linkedin](https://www.linkedin.com/sharing/share-offsite/?url=https://www.gamedeveloper.com/design/tower-defense-game-rules-part-1-)[Facebook](http://www.facebook.com/sharer/sharer.php?u=https://www.gamedeveloper.com/design/tower-defense-game-rules-part-1-)[Twitter](http://www.twitter.com/intent/tweet?url=https://www.gamedeveloper.com/design/tower-defense-game-rules-part-1-)[Reddit](https://www.reddit.com/submit?url=https://www.gamedeveloper.com/design/tower-defense-game-rules-part-1-&title=Tower%20Defense%20Game%20Rules%20(Part%201))[Bluesky](https://bsky.app/intent/compose?text=Tower%20Defense%20Game%20Rules%20(Part%201)%20-%20https%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Ftower-defense-game-rules-part-1-)[Email](mailto:?subject=Tower%20Defense%20Game%20Rules%20(Part%201)&body=I%20thought%20the%20following%20from%20Game%20Developer%20might%20interest%20you.%0D%0A%0D%0A%20Tower%20Defense%20Game%20Rules%20(Part%201)%0D%0Ahttps%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Ftower-defense-game-rules-part-1-)

## About the Author

[![Teddy Phan](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltd8fa6555f7f4d762/6508861370c6ff859c651d82/Teddy_Phan.jpg?width=400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/author/teddy-phan)

[Teddy Phan](https://www.gamedeveloper.com/author/teddy-phan)

Blogger

[See more from Teddy Phanchevron\_right](https://www.gamedeveloper.com/author/teddy-phan)

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
