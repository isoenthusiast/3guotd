URL: https://www.gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-
TITLE: Squeezing more juice out of your game design! - Game Developer
RETRIEVED: 2026-11-22
METHOD: web_extract

- [Design](https://www.gamedeveloper.com/design)
- [Commentary](https://www.gamedeveloper.com/latest-commentary)

[![Game Developer Logo](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltb8149045ecc9add6/664670498df30a26f54d5ed4/GDBlogs_Logo_FINAL.png?width=1400&auto=webp&quality=80&disable=upscale)\\
\\
**Featured Blog \|** This community-written post highlights the best of what the game industry has to offer. Read more like it on the Game Developer Blogs.](https://www.gamedeveloper.com/keyword/blogs)

# Squeezing more juice out of your game design!

There is a part of game feel that is really amusing to work on, and that helps to improve your core gameplay's feedback: Juicing. In this article, I want to share a collection of efficient juicing techniques.

[![Picture of Nathan Lovato](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blte6ad8f6addec332d/650880f2d9781ac0f9970780/Nathan_Lovato.jpg?width=100&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/author/nathan-lovato)

[Nathan Lovato,](https://www.gamedeveloper.com/author/nathan-lovato) Blogger

April 1, 2015

schedule15 Min Read

![Game Developer logo in a gray background | Game Developer](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt2c2f608b8dadcd62/6a97e133db31b5be7767f1c7/GDE27_Placeholder_-_5.png?width=1280&auto=webp&quality=80&disable=upscale)expand\_content

[Linkedin](https://www.linkedin.com/sharing/share-offsite/?url=https://www.gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-)[Facebook](http://www.facebook.com/sharer/sharer.php?u=https://www.gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-)[Twitter](http://www.twitter.com/intent/tweet?url=https://www.gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-)[Reddit](https://www.reddit.com/submit?url=https://www.gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-&title=Squeezing%20more%20juice%20out%20of%20your%20game%20design!)[Bluesky](https://bsky.app/intent/compose?text=Squeezing%20more%20juice%20out%20of%20your%20game%20design!%20-%20https%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Fsqueezing-more-juice-out-of-your-game-design-)[Email](mailto:?subject=Squeezing%20more%20juice%20out%20of%20your%20game%20design!&body=I%20thought%20the%20following%20from%20Game%20Developer%20might%20interest%20you.%0D%0A%0D%0A%20Squeezing%20more%20juice%20out%20of%20your%20game%20design!%0D%0Ahttps%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Fsqueezing-more-juice-out-of-your-game-design-)

This tutorial was originally published on the [GameAnalytics](https://blog.gameanalytics.com/blog/squeezing-more-juice-out-of-your-game-design.html) blog

![](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt07fa1c8a857d32b9/650e95624ba72b7ba5f96edf/Banner.jpg/?width=580&auto=webp&quality=80&disable=upscale)

There is a part of game feel that is really amusing to work on, and that yields great results as soon as your game’s core gameplay is rock solid. This is what, since the rise of casual gaming, we call game juice.

## What is juicing all about?

Juicing is a pretty wide, yet specific concept. But an interesting one! As the term suggests, juicing is about taking a game that works and addinglayers of satisfying bits of animation and audio to improve its feel. It is every visual and auditory improvement you can add to your core game to make it more believable. As if you squeezed the juice out of an already appetizing fruit. You can probably sense that beneath that catchy word lies a powerful game design concept. It is a specific lens we designers can use to push our games’ feel further.

Where UX design follows objective principles and rules, game juice is more personal, and emotion based. The types of feel improvements you could add to your game may vary a lot. Each developer should have his own signature juicing techniques (and successful developers do have theirs). For example, Vlambeer is considered to be the master of screen shake. They even made a talk called “[The Art of Screenshake](https://www.youtube.com/watch?v=AJdEqssNZ-U)”!

Juicing, from a game developer’s standpoint, relies mainly on 2 domains: animation and audio.

## The Art of tweening

Inbetweening, or tweening, is the process of interpolating values between two extreme values using the computer. The linear interpolation, or lerp, is the most basic tweening method we have at our disposal. And the one we tend to use the most (for starters, a lerp function returns the weighted average of 2 values). When it comes to animating movements, linear interpolations produce tasteless results. This is normal, considering that pretty much nothing in the real world moves in a linear way.

Good tweening boils down to a good application of [the 12 principles of animation](https://the12principles.tumblr.com/). Having a good understanding of animation’s basics is key, which requires some practice. However, there are a few common tools we can use to make our tweens feel good easily: easings.

## Easing out, easing in

As I said, in the real world,nothing moves in a linear way. It takes a certain force to move anything, to build up speed or inertia. Thus in general, it takes a certain time for objects to accelerate to their maximum speed, or to decelerate to come to a full stop.

In our games, we want to re-create that feeling of inertia for every single animated object. This is also our best way to convey a sense of weight for any item in our game world.

So what are easing? They are a collection of functions used to gradually interpolate between 2 values. Easings offer us a convenient way to represent inertia. Easing equations interpolate between two values with all sorts of accelerations and/or decelerations curves. There are many easing types at our disposal, and some fancy functions can produce very interesting results. I.e. the bounce/elastic formula. You can find many common equations on the [easings.net](https://easings.net/) website.

![](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltb3bd503a34f63f45/650e9572b8329cb6395af7c2/easeing.png/?width=580&auto=webp&quality=80&disable=upscale)

A few samples of common easing equations

You can see that each equation has three variations. It can:

- Ease in, accelerate at the start.

- Ease out, or decelerate at the end.

- Do both.


You will generally want an appearing animation to ease out. In particular for UI elements. When it falls into the screen, you want your game’s logo to gently decelerate towards its final position. You can treat a moving UI element like a character: it accelerates at the start of its moving state (fades in), moves at a constant pace and slides a bit before he stops (eases out).

When should you use a given type of easing? Well, it’s up to you. Easings have to be picked visually, using your sense of spacing and timing. It depends on the precise needs of your project. If you want to get abrupt movements, you will want to lean towards exponential easings. If you need softer movements on the other hand, you can focus on the simpler, quadratic easing.

The best way you can push your understanding and mastery of tweening is observing how other developers do it. As with any type design related discipline, the fastest way to learn is to thoroughly study references.

# Your juice is meant to reinforce your core mechanics

Game juicing is often presented as a collection of tricks you can use to better the sensations of your player. It is not a matter of using prebuilt formulas though. Your game’s juice should always echo your core gameplay. We cannot improve our game’s feel randomly. Screen shake, squash and stretch, bounciness and other fast-paced animations are only relevant in specific situations! They make sense in dynamic games.

In a story-driven game, or in a horror game for example, you want your animations to be subtle to convey a sense of mystery. You cannot always used that funny elastic equation for instance. Both the amplitude and the rhythm of your tweens will hugely vary depending on your project’s requirements.

![](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltf58a072e3e1c30e9/650ec210c41eb1f3b1466edc/Child_20of_20light_20gif.gif/?width=580&auto=webp&quality=80&disable=upscale)

![](file:///C:UsersNathanAppDataLocalTempmsohtmlclip11clip_image003.gif?width=1400&auto=webp&quality=80&disable=upscale)

Child of Light offers many examples of subtle uses of secondary animations

I insist: the concept of juice is meant to reinforce your existing gameplay. Juicing up shooting games has already been thoroughly documented by Vlambeer in the talk [I linked to above](https://www.youtube.com/watch?v=AJdEqssNZ-U). In such a game, juicing is pretty straightforward: it boils down to making the player feel powerful. You can do so by increasing the size of your bullets, make them move faster, add some recoil when shooting, etc.

What about other types of games? Well, each genre and story is like a different fruit altogether: it deserves its own trademark juice. I will provide you with a quick rundown of the few games’ juice. But before that, we have to talk about the other domain we want to pay attention to, as for is juicing is concerned.

# Audio

Audio is often overlooked as far as improving your game’s feel is concerned. At least among indies with low budgets. Yet, it offers an affordable way to improve your game’s feedback rapidly. Good sounds reinforce the presence and credibility of any interaction happening in your game. At least as much as your character design or your animation. Bad sound design can break your game.

You should put a strong emphasis on gameplay related sounds. All interactions the player can make should have a clear audio feedback. And those sound should feel full. In other words, you want to push the bass and mediums of most gameplay sound effects to give them some presence or impact. You also want them to be louder than other sounds in the game. You want them to be delicately [compressed](https://www.wikiwand.com/en/Dynamic_range_compression). You want them to pop out.

As those sounds are gameplay related, they are the most important elements of our sound design. They are our core sound design in a sense. But a game’s main sound effects alone don’t make up for a compelling auditory experience. We still have to think about our soundtrack.

## The power of music

Soundtracks are probably the most efficient tool we have at our disposal to create emotion. Although we all bathe into music, its language is foreign to a fair part of us. Music is somewhat mysterious and magical. It can alter our mood. Music alone can [cheer us up](https://www.youtube.com/watch?v=xTpaSMjXgeQ) or make us feel [nostalgic](https://www.youtube.com/watch?v=a3LkKviuGKU).

In last week’s article about creating [immersive game intros](https://blog.gameanalytics.com/blog/create-immersive-game-intros.html), I linked to the powerful [title screen](https://www.youtube.com/watch?v=wgPcl1WJ98Y) of Xenoblade. It really feels beautiful. If you keep staring at it and let the scene sink in, it will touch your very heart. Well, I invite you to take a quick look at the video with the sound muted. Does it still feel the same? The image alone looks pretty… but quite boring, doesn’t it?

As in sound design and animation, a good understanding of the characteristics of powerful soundtracks comes with experience. The only advice I can give you in the case of music is not to neglect it. There are many competent composers and music producers out there waiting to help you push that game to the next level. If you are serious about making great games, don’t hesitate to hire one!

Having solid gameplay sound effects and music are a basic requirement for pretty much all games. There is a type of sound that is used less often - in particular if you have a low budget: soundscapes. Soundscapes are audio tracks that are meant to ground the player a bit more into the game world.

To immerse the player even more into your game’s world, it is interesting to add sound loops corresponding to your environments’ ambiences. Even if you have music playing on top of it! Those soundscapes should be relatively quiet. They are meant to be a subtle background element. Soundscapes are not meant to be consciously listened to. They are barely meant to be heard: they are meant to be felt.

Is the player crossing a stream of water? The sound of its flow should gently mix with the game’s soundtrack. Is the player passing by a chimney? You can make that fire feel warmer with some soft crackling, bass-y sound. You get it. Background audio can help you to improve the player’s experience.

# Common juicy effects

Although your approach to juicing will depend on your game, here are a few common visual effects that will work for most projects. Those mostly rely on particle systems.

The first idea is to use an animated effect whenever a collision happens between two sprites in your game. This could be:

- Dust when a character lands or runs. This is an efficient way to make your character feel like it belongs a bit more in his world and give his steps some impact.

- Sparkles, or stars. This one is a cheap trick that once again gives a sense of impact whenever two objects are colliding.


Pausing the game for a split second is also a very efficient way to reinforce a collision. You can lengthen that pause or delay to make a hit or a death feel powerful. This is actually a common animation technique that we call a hold. Character animators can hold their key poses for a few frames to reinforce them. This leaves some time for the viewer’s brain to process the most important moments of an animation.

Trails are another kind of common effect. Trails are useful whenever we want to put an emphasis on an object’s arc of movement. This is particularly useful for fast moving objects. For instance, we often see trails:

- In a sword or weapon slash animation. A little tip: the trail should instantly disappear on hit.

- Behind a fast moving character.


It is important to note though that trails slow down movements. This may not be intuitive for non-animators, but trails can hinder the impact of an animation. They are a specific application of what animators call smears. If we think about it, trails or smears blend the current pose of an object with its position a few frames before (you can go to the [animation smears tumblr](https://animationsmears.tumblr.com/post/113185794269/finally-writing-about-something-thats-been-on-my) to see some examples of how animators use those). So be careful with trails!

![](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt9e2d201186dee389/650ec208de320113f148b982/tumblr_n4rp0cHVGG1tx30c0o1_1280.gif/?width=580&auto=webp&quality=80&disable=upscale)

![](file:///C:UsersNathanAppDataLocalTempmsohtmlclip11clip_image004.gif?width=1400&auto=webp&quality=80&disable=upscale)

## Juicing further: procedural movements

Your game’s juice also can be squeezed out by adding depth and subtle variations to the animations you implement.

In a 2d sprite engine, we are limited as far as the types of movement we can create. We can play with the position, rotation, and scale of our assets. Luckily, we don’t need more! Using sine or cosine functions, we can make wonders happen!

- If you animate the rotation of plants using a periodic function, you will make them feel like they are being pushed by wind. A little tip: to create a believable wind effect, layer multiple sinuses of varying amplitudes and phase! That is how it’s done even in big games.


- Animate the scale and opacity of a transparent circular sprite to add warmth to a bonfire or a lamp!

- Animate the scale of a circle in a bouncy way and make it move in a loop to get a believable fly!


In the case of 3d engine like Unity, you can easily add a lot of variation and complex movements to your assets using shaders and Vertex colors. Vertex colors are lightweight, easy to paint, and can be used for any kind of masking you could imagine. We are provided with 3 channels we can mask our meshes with, giving us more masking flexibility than we need most of the time.

Vertex colors make it easy to mask part of a foliage mesh and simulate a wind animation on that masked portion for instance. Here is [an example](https://www.youtube.com/watch?v=AYZcqOcP0B4) of this technique in practice. Try to look at the parts of the patches of leaves that are touching the branches: they do not move. In Unity’s case though, Speedtree handles the masking and animation for you. But you can achieve the same result with plain code.

It gives us the power to animate specific parts of our objects using code! Using the world position of our objects, we can automatically offset the phase of our wind animation for each bit of foliage in our level. At \[almost\] no cost! And this is true for both 2d and 3d games.

# Case studies: juicing that works

Analyzing examples is the best way for us to see what works. If it works for others, chances are it will work for our games. At least we can pick relevant titles to use as references or as sources of inspiration.

The first example I will take is one of a minimalistic, pretty popular free app published by Ketchapp: [Jelly Jump](https://www.youtube.com/watch?v=Hhgr8ynadKc) ([Apple Store link](https://itunes.apple.com/ru/app/jelly-jump/id955327604?l=en&mt=8)).

![](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt7e3a3ffd52ebcac5/650e957ba8fbcf274662016a/ad_jellyjump.png/?width=300&auto=webp&quality=80&disable=upscale)

In that game, all the juicing revolves around the jumping jelly. Let us first analyze the game’s basic visual setup.

First of all, the background is immaculate to emphasize the character. The jelly is placed at the center of the screen and its color is saturated to contrast with its environment. You can also note that the jelly is not shaded like the rest of the level. It feels cartoony. It creates a solid foundation for juicing. Keep in mind that we can’t get a good juice without a good fruit.

Then comes the juice in itself. As I said above, it revolves around the jelly, which does 3 things:

- It wobbles.

- It splashes.

- And it leaves a mark on the ground upon landing.


Here, we find 3 principles of visual juicing used in synergy. The character is animated using tweens (wobbles), its movement is enriched with particles, and it leaves a permanent mark on the ground. This combination of visual cues result in a believable jelly.

Watching a [quick gameplay session](https://www.youtube.com/watch?v=9p2Mq6Jee_4), you can clearly see that the jelly’s wobbles are dependent on the thrust of its jump and the force with which it lands. This reinforces the core jumping mechanic. And that is it for the heart of this game’s juicing!

Although Jelly Jump is not the deepest game you could study around the app store, I think that taking a look at minimalistic games offers us a great opportunity to learn. One touch games with lean visual designs are great references to study from. Their central mechanics and visuals are generally very polished, albeit simple. Ketchapp published a few good examples of such applications.

## 50 shades of jelly

![](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltf59332e38c136acd/650e957755b2a8aab63c7b22/The_20floor_20is_20Jelly_20Screenshot.png/?width=646&auto=webp&quality=80&disable=upscale)

I would like to keep moving on our way to jelly-ness by pointing out an exceptionally juicy game about jelly: [The Floor Is Jelly](https://thefloorisjelly.com/). This is another exceptional game to study from. It possesses a particularly polished feel thanks to the exceptional synergy of the wavy ground and the beautiful soundtrack from [Disasterpiece](https://music.disasterpeace.com/album/the-floor-is-jelly-ost).

Just [look at it](https://vimeo.com/83281882): everything moves.

The ground itself is alive: it ripples every time the character lands on it. It responds to the player’s movements. Every bush or tree squashes and stretches with each shockwave. Leaves are falling. Birds are flying. The world breathes.

I can’t provide you with an exhaustive analysis of this title’s juicing techniques. I invite you to play it instead and see for yourself how well it works. It is really a matter of synergy in that case: every choice is reinforces the game’s main mechanics and story (yes, there is some sort of a story in The Floor Is Jelly).

## One last example

![](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt0b2379abb6e9a704/650e9577d224dbbe1a0eeb06/Broforce_20Juicing_20screenshot.png/?width=580&auto=webp&quality=80&disable=upscale)

I would like to add another great example that was pointed out in Mark Brown’s [short video](https://www.youtube.com/watch?v=216_5nu4aVQ) about game feel: [Super Time Force](https://www.youtube.com/watch?v=Kyxrll5Bc-Q), by Capy Games.

Super Time Force’s strength lies in the abundance of visual effects used in the game. And the abundance of particles used in each system. A single screenshot from the game is enough to tell the tale: every gameplay related element moves. Any important element is animated. Any collision is an occasion to play satisfying visual effects.

# Summary

Hopefully, this first overview of the concept of juicing gave you a sweet taste of it. It is now up to you to come up with your own way to extract it out of your own creations.

A last few note before we part ways: for one, you should always focus on your game’s foundations first and foremost. You won’t get good juice out of a tasteless fruit. But you should also know when to quit! Used in excess, juicing techniques will both waste your time and annoy your users.

I will leave you with my recipe of a good game’s smoothie:

- Animate everything that matters.

- Study from the juicing Masters.

- And don’t neglect your audio.


This recipe should you follow, your game won’t feel hollow.

This tutorial was originally published on the [GameAnalytics](https://blog.gameanalytics.com/blog/squeezing-more-juice-out-of-your-game-design.html) blog

Read more about:

[Featured Blogs](https://www.gamedeveloper.com/keyword/featured-blogs)

[Linkedin](https://www.linkedin.com/sharing/share-offsite/?url=https://www.gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-)[Facebook](http://www.facebook.com/sharer/sharer.php?u=https://www.gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-)[Twitter](http://www.twitter.com/intent/tweet?url=https://www.gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-)[Reddit](https://www.reddit.com/submit?url=https://www.gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-&title=Squeezing%20more%20juice%20out%20of%20your%20game%20design!)[Bluesky](https://bsky.app/intent/compose?text=Squeezing%20more%20juice%20out%20of%20your%20game%20design!%20-%20https%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Fsqueezing-more-juice-out-of-your-game-design-)[Email](mailto:?subject=Squeezing%20more%20juice%20out%20of%20your%20game%20design!&body=I%20thought%20the%20following%20from%20Game%20Developer%20might%20interest%20you.%0D%0A%0D%0A%20Squeezing%20more%20juice%20out%20of%20your%20game%20design!%0D%0Ahttps%3A%2F%2Fwww.gamedeveloper.com%2Fdesign%2Fsqueezing-more-juice-out-of-your-game-design-)

## About the Author

[![Nathan Lovato](https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blte6ad8f6addec332d/650880f2d9781ac0f9970780/Nathan_Lovato.jpg?width=400&auto=webp&quality=80&disable=upscale)](https://www.gamedeveloper.com/author/nathan-lovato)

[Nathan Lovato](https://www.gamedeveloper.com/author/nathan-lovato)

Blogger

[See more from Nathan Lovatochevron\_right](https://www.gamedeveloper.com/author/nathan-lovato)

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
