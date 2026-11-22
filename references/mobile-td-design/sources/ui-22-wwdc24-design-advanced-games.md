URL: https://developer.apple.com/videos/play/wwdc2024/10085/
TITLE: Design advanced games for Apple platforms - WWDC24
RETRIEVED: 2026-11-22
METHOD: web_extract

* * *

* * *

Design advanced games for Apple platforms - WWDC24 - Videos - Apple Developer

[View in English](https://developer.apple.com/videos/play/wwdc2024/10085/#)

[More Videos](https://developer.apple.com/videos/)

![](https://developer.apple.com/assets/elements/icons/symbols/gobackward5.svg)![](https://developer.apple.com/assets/elements/icons/symbols/goforward5.svg)

![](https://devimages-cdn.apple.com/wwdc-services/images/C03E6E6D-A32A-41D0-9E50-C3C6059820AA/9196/9196_wide_900x506_2x.jpg)

- [About](https://developer.apple.com/videos/play/wwdc2024/10085/#)
- [Transcript](https://developer.apple.com/videos/play/wwdc2024/10085/#)

- # Design advanced games for Apple platforms



Learn how to adapt your high-end game so it feels at home on Mac, iPad, and iPhone. We'll go over how to make your game look stunning on different displays, tailor your input and controls to be intuitive on each device, and take advantage of Apple technologies that deliver great player experiences.


## Chapters



  - 0:00 - [Introduction](https://developer.apple.com/videos/play/wwdc2024/10085/?time=0)
  - 1:18 - [Design for the device](https://developer.apple.com/videos/play/wwdc2024/10085/?time=78)
  - 14:05 - [Design for input](https://developer.apple.com/videos/play/wwdc2024/10085/?time=845)

## Resources

  - [Download the Game Porting Toolkit](https://developer.apple.com/games/game-porting-toolkit/)
  - [Human Interface Guidelines: Designing for games](https://developer.apple.com/design/human-interface-guidelines/designing-for-games)
  - [Forum: Design](https://developer.apple.com/forums/topics/design?cid=vf-a-0010)
  - [Human Interface Guidelines: Game controls](https://developer.apple.com/design/human-interface-guidelines/game-controls)
    - [HD Video](https://devstreaming-cdn.apple.com/videos/wwdc/2024/10085/5/609DB92A-84CB-4E0B-A6C6-E14DB709877C/downloads/wwdc2024-10085_hd.mp4?dl=1)
    - [SD Video](https://devstreaming-cdn.apple.com/videos/wwdc/2024/10085/5/609DB92A-84CB-4E0B-A6C6-E14DB709877C/downloads/wwdc2024-10085_sd.mp4?dl=1)

## Related Videos

#### WWDC24

  - [Port advanced games to Apple platforms](https://developer.apple.com/videos/play/wwdc2024/10089)
- Search this video…






















0:07







[Hi I'm Linda, from the Design Evangelism Team.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=7) [If you're new to developing games for Apple platforms,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=10) [it's never been a better time jump in.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=13) [Every model of our desktop and mobile devices](https://developer.apple.com/videos/play/wwdc2024/10085/?time=16) [can handle advanced console-class games.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=18) [And with a unified gaming platform,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=22) [your game can now support amazing graphics and performance across Mac,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=24) [iPad and iPhone.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=29) [Making it possible to get your game in the hands of even more players.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=32)







0:37







[And with the new "Designing for games" section](https://developer.apple.com/videos/play/wwdc2024/10085/?time=37) [in the Human Interface Guidelines,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=39) [as well as the the latest version of the Game Porting Toolkit,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=42) [which you can learn more about in the video:](https://developer.apple.com/videos/play/wwdc2024/10085/?time=46) ["Port advanced games to Apple platforms",](https://developer.apple.com/videos/play/wwdc2024/10085/?time=48) [you'll have the resources to simplify your development process,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=51) [and save time.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=54) [Meaning, it's easier than ever to make games for Mac, iPad, and iPhone.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=56)







1:03







[In this talk, Dylan and I will go over how to design your game](https://developer.apple.com/videos/play/wwdc2024/10085/?time=63) [to deliver a great player experience on Apple platforms.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=67) [I'll show you how to adapt your game's interface across devices,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=71) [and then Dylan will take you through how to design your game's input.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=75) [So let's start with designing for the device.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=79) [Delivering a great game experience](https://developer.apple.com/videos/play/wwdc2024/10085/?time=82) [means being considerate of how your game's defaults, layout, text,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=85) [and controls will feel for your players on Apple devices.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=89) [The first thing you want to consider,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=94) [is how you can let people jump into gameplay](https://developer.apple.com/videos/play/wwdc2024/10085/?time=95) [as soon as possible.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=98) [And that begins the moment](https://developer.apple.com/videos/play/wwdc2024/10085/?time=100) [someone first installs your game on their device.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=101)







1:44







[High-end games tend to have larger initial downloads.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=104) [So imagine for your players,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=108) [they've been patiently waiting for your game to install.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=110) [They're super excited to play it.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=115) [It launches and they get](https://developer.apple.com/videos/play/wwdc2024/10085/?time=117) [a message that says they need to wait for another download.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=120) [This is probably not the first-launch experience](https://developer.apple.com/videos/play/wwdc2024/10085/?time=124) [they were looking forward to.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=126) [Especially since players on Apple platforms](https://developer.apple.com/videos/play/wwdc2024/10085/?time=128) [expect their apps to work right out-of-the-box.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=130)







2:14







[Instead, you can minimize waiting](https://developer.apple.com/videos/play/wwdc2024/10085/?time=134) [by enabling people to play your game as soon as installation finishes.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=136)







2:22







[To do that, make sure the initial stages of your game](https://developer.apple.com/videos/play/wwdc2024/10085/?time=142) [are downloaded at launch.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=145)







2:28







[Aim to get around the first 15 minutes of gameplay](https://developer.apple.com/videos/play/wwdc2024/10085/?time=148) [bundled into your App Store download.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=150)







2:33







[From there you can start loading in the next chapters of your game](https://developer.apple.com/videos/play/wwdc2024/10085/?time=153) [in the background.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=157)







2:39







[What players will experience is a seamless jump](https://developer.apple.com/videos/play/wwdc2024/10085/?time=159) [from launching your game to playing your game all without waiting](https://developer.apple.com/videos/play/wwdc2024/10085/?time=162) [while you're handling additional downloads behind-the-scenes.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=167)







2:51







[Try to hide download progress from players.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=171) [In many cases they'll never have to know that data is still loading in,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=173) [and it will feel like your whole game was playable at launch.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=178)







3:02







[If a player does manage to progress far enough](https://developer.apple.com/videos/play/wwdc2024/10085/?time=182) [to hit an unloaded area,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=185) [that's when it's a good idea to acknowledge through your UI,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=187) [that the game hasn't fully installed yet.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=191)







3:14







[Look for a place to then show download progress.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=194) [Ideally put this somewhere relevant where it doesn't distract from gameplay,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=198) [like a level selection screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=202)







3:25







[And also consider allowing players](https://developer.apple.com/videos/play/wwdc2024/10085/?time=205) [to revisit earlier chapters or levels as they wait,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=207) [so they're not just stuck looking at a progress bar.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=211)







3:35







[In order to download game data behind-the-scenes,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=215) [you can take advantage of either On-Demand Resources,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=218) [or Background Assets.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=221) [Both of which are Apple frameworks,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=223) [that let you to pull down additional game data](https://developer.apple.com/videos/play/wwdc2024/10085/?time=225) [after your app installs.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=228) [On-Demand Resources are hosted on the App Store,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=230) [whereas Background Assets are hosted on your own database.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=233) [You can learn more about both of these on the developer website.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=237)







4:01







[But no matter how you load in your assets,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=241) [the end result you're aiming for is an installation experience](https://developer.apple.com/videos/play/wwdc2024/10085/?time=244) [that blends with gameplay, and is invisible to the player.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=247)







4:11







[Another way to design for Apple devices, is to set great default settings.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=251)







4:17







[There's a lot of info you'll get right out of the box](https://developer.apple.com/videos/play/wwdc2024/10085/?time=257) [about a player's Apple device.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=260) [Like the hardware model, screen resolution,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=262) [or any paired accessories.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=265) [These are all things that you don't need to ask players](https://developer.apple.com/videos/play/wwdc2024/10085/?time=267) [to optimize for themselves when they start your game.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=270)







4:34







[You can simplify your game's onboarding](https://developer.apple.com/videos/play/wwdc2024/10085/?time=274) [by setting options automatically for players.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=276)







4:40







[For example, in your onboarding and settings,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=280) [look for places to remove choices that aren't relevant.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=283) [Like asking for screen size or aspect ratio,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=287) [which you just get from the device itself.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=290)







4:53







[Instead of having folks manually set up a physical game controller,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=293) [you can automatically detect whether a controller is paired](https://developer.apple.com/videos/play/wwdc2024/10085/?time=297) [and get its profile by using the Game Controller Framework.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=300)







5:05







[This will let you map the player's physical buttons to your UI,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=305) [right from launch.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=309)







5:11







[When choosing defaults across different platforms,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=311) [consider adjusting your game's initial performance settings](https://developer.apple.com/videos/play/wwdc2024/10085/?time=315) [to match the capabilities of that device.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=318) [For example, you might choose to set quality defaults higher,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=321) [for a top-of-the-line Mac, than you would for an iPhone.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=325)







5:30







[And especially on mobile platforms,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=330) [remember that players just want to pick up their device and go.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=332) [So look for opportunities](https://developer.apple.com/videos/play/wwdc2024/10085/?time=336) [where you can reduce the granularity of your settings,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=338) [compared to what you might offer on a desktop.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=341)







5:44







[Here, you can condense a lot of upfront choices](https://developer.apple.com/videos/play/wwdc2024/10085/?time=344) [into just one player decision.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=347) [Whether they want to prioritize quality, or performance.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=350)







5:55







[Choosing great defaults removes steps,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=355) [and lets your players start having fun a lot faster.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=357)







6:01







[So now that you've set great defaults, let's dig into your game's layout,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=361) [and how to make it flexible for each Apple device.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=365) [With a unified gaming platform,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=368) [your game can easily ship across a variety of screen sizes.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=370) [Plan early on to design an adaptive game interface that scales.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=375) [This will not only save you time designing across screens,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=380) [but will also help future-proof your game when new devices launch.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=383) [The simplest place to start,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=388) [is to make sure your layout reacts to different aspect ratios.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=389)







6:34







[Even across the same platform,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=394) [different device models can still have different aspect ratios.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=396)







6:40







[One way to handle this in your UI,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=400) [is to scale your interface up or down to fit into other devices.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=402)







6:48







[But this method can lead to imprecision of where controls end up.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=408) [It can make UI less reachable for people's hands,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=413) [feel too small or too large.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=416) [And can just end up looking misaligned with the device itself.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=419)







7:03







[Instead, break your UI layout into separate sections.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=423) [Each of which is anchored to a specific side of the screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=428)







7:13







[As you move between device shapes,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=433) [you can keep each section at a consistent size](https://developer.apple.com/videos/play/wwdc2024/10085/?time=436) [and distance away from those anchor points.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=439)







7:22







[This keeps controls](https://developer.apple.com/videos/play/wwdc2024/10085/?time=442) [at physically comfortable sizes for mobile players.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=443)







7:28







[While making the best use of screen space across devices.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=448)







7:33







[Using this method, your UI can go from](https://developer.apple.com/videos/play/wwdc2024/10085/?time=453) [something that doesn't look or feel quite right,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=456) [to a layout that feels comfortable and purposeful.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=459)







7:43







[So now that you've got a layout that adapts,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=463) [let's make sure your hard work is always visible.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=466) [You can do that by designing for the full screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=469) [On Mac, iPad and iPhone, designing a full screen gaming experience](https://developer.apple.com/videos/play/wwdc2024/10085/?time=472) [means keeping safe areas in mind.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=477)







8:00







[Safe areas are regions of the display where you can](https://developer.apple.com/videos/play/wwdc2024/10085/?time=480) [safely put UI so that it doesn't overlap with hardware or software features.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=484)







8:09







[On iPad and iPhone,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=489) [safe areas help you avoid placing UI where it could get obscured](https://developer.apple.com/videos/play/wwdc2024/10085/?time=491) [by the devices' rounded corners.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=495) [They also help you avoid the system Home indicator](https://developer.apple.com/videos/play/wwdc2024/10085/?time=498) [as well as the Dynamic Island on iPhone,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=501) [which can both potentially overlap your control's tap targets.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=503)







8:28







[On Mac, the safe area is inset from the top](https://developer.apple.com/videos/play/wwdc2024/10085/?time=508) [to help you avoid the device's rounded corners](https://developer.apple.com/videos/play/wwdc2024/10085/?time=511) [and the area around the camera.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=513)







8:37







[Designing within safe areas, will ensure every part of your UI is visible](https://developer.apple.com/videos/play/wwdc2024/10085/?time=517) [and accessible to your players.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=521)







8:45







[To help you with this, you can find safe area templates](https://developer.apple.com/videos/play/wwdc2024/10085/?time=525) [in the Apple Design Resources,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=527) [which are available to download from the developer website.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=529)







8:54







[You can also try building your game to the Simulator App within Xcode.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=534) [In Simulator, you can preview your game's layout](https://developer.apple.com/videos/play/wwdc2024/10085/?time=539) [on different device models, bezels, and orientations.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=541) [And check whether any UI isn't where it should be.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=546)







9:09







[Remember, safe areas are meant as guides for positioning UI,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=549) [but aren't meant to be the actual margins for your entire game.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=554)







9:18







[Take advantage of every pixel on the screen for your game's environment.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=558)







9:24







[If there's important content in your game](https://developer.apple.com/videos/play/wwdc2024/10085/?time=564) [that's getting clipped by device proportions,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=566) [first try adjusting your game's camera,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=570) [playing with different zoom levels and angles](https://developer.apple.com/videos/play/wwdc2024/10085/?time=573) [to see if you can fit that content in.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=575)







9:39







[In some cases, such as cinematic cutscenes,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=579) [you might have pre-rendered content](https://developer.apple.com/videos/play/wwdc2024/10085/?time=582) [that's already set to a specific aspect ratio.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=584)







9:48







[In those cases you can make use of letterboxing](https://developer.apple.com/videos/play/wwdc2024/10085/?time=588) [to fit all the important details on the screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=591)







9:55







[To make letterboxing still feel like a full screen experience,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=595) [you can to either fill that area in with custom game artwork,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=599) [or tint it black](https://developer.apple.com/videos/play/wwdc2024/10085/?time=603) [to blend in with the device's physical hardware bezels.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=605)







10:10







[But only use letterboxing if you have to,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=610) [your game will always feel more immersive if it makes use of the entire screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=613)







10:18







[Okay, one last point to make your game look great on Apple devices](https://developer.apple.com/videos/play/wwdc2024/10085/?time=618) [make sure your UI is legible.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=622)







10:25







[This is especially important if you're bringing a console or PC game](https://developer.apple.com/videos/play/wwdc2024/10085/?time=625) [to Apple devices with a smaller display.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=630) [What may look great on a large TV,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=633) [can be barely legible if it's shrunk down to compact sizes without adjustments.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=636)







10:43







[One of the smallest considerations](https://developer.apple.com/videos/play/wwdc2024/10085/?time=643) [that can make the biggest difference in your gaming experience](https://developer.apple.com/videos/play/wwdc2024/10085/?time=645) [is to make sure your text is large enough to read.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=648) [The more compact the device, the larger your text size should be.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=651) [On each platform,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=655) [there are recommended default and minimum type sizes.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=656) [On iPhone and iPad, aim for a type size of 17 points or higher.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=660) [This size works great for body text and callouts.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=665) [For less essential information,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=668) [try not to go lower than an 11 point type size,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=670) [or you risk your players](https://developer.apple.com/videos/play/wwdc2024/10085/?time=673) [not being able to read what's on the screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=675)







11:18







[On Mac, a comfortable default text size is 13 points or higher.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=678) [While a minimum of 10 points will still keep your text legible.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=683)







11:28







[Just like you want players to be able to read your game's copy,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=688) [you also want them to be able to comfortably interact with your controls.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=691)







11:36







[Make sure your controls are large enough to make them easy to select.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=696) [This is especially important for games on our mobile platforms.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=700) [Where your players may be using touch as their input](https://developer.apple.com/videos/play/wwdc2024/10085/?time=704) [and need larger affordance for their fingers.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=707) [On iPhone and iPad the default tap target size you should aim for](https://developer.apple.com/videos/play/wwdc2024/10085/?time=710) [is 44 by 44 points.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=714) [This is a comfortable size for most people's fingers](https://developer.apple.com/videos/play/wwdc2024/10085/?time=717) [to easily select controls.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=720)







12:03







[For less critical UI, you can push this down to 28 points,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=723) [but keep in mind that buttons at this size can be harder to select accurately,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=727) [especially if your players have their attention on your gameplay.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=732)







12:17







[On Mac, you should aim to make the hit area of your controls](https://developer.apple.com/videos/play/wwdc2024/10085/?time=737) [28 by 28 points.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=740) [Which gives enough room for a pointer, like a mouse or a trackpad, to land on.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=743)







12:29







[For less important or infrequent controls,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=749) [you can reduce that to a minimum of 20 points.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=752)







12:36







[For both text and buttons,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=756) [aim for the defaults rather than the minimums](https://developer.apple.com/videos/play/wwdc2024/10085/?time=758) [it'll make your game more comfortable for more players.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=760)







12:44







[Now if you're wondering how you'll fit](https://developer.apple.com/videos/play/wwdc2024/10085/?time=764) [these larger sizes onto more compact screens.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=766) [Remember that people are very used to scrolling on mobile,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=769) [and you can take advantage of scroll views to show more UI.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=772)







12:58







[So for example, instead of needing to cram](https://developer.apple.com/videos/play/wwdc2024/10085/?time=778) [all your game settings onto the screen at once.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=780) [You can utilize scrolling to take advantage of more vertical space.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=784) [Which also gives you breathing room to increase the size of controls.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=789) [Same thing with text.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=793) [Use scroll views if you have an overflow of information,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=794) [instead of reducing type sizes to solve the problem.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=798)







13:22







[If you're ever in doubt,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=802) [about whether players can read your text or reach your controls.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=803) [There's nothing I recommend more than testing it out on a real device.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=806) [Experiencing it yourself, will give you the best sense](https://developer.apple.com/videos/play/wwdc2024/10085/?time=811) [of whether your game's UI looks and behaves correctly.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=814) [Better yet, try your layout on as many devices as you can,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=818) [with as many testers as you can.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=822) [That way you can be confident players will feel comfortable](https://developer.apple.com/videos/play/wwdc2024/10085/?time=824) [no matter what hardware they're playing on.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=827)







13:50







[Alrighty.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=830) [So we've gone over best practices for designing for Apple devices,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=831) [from quick ways into gameplay,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=835) [to flexible layouts, to making your game legible.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=837) [Now, I'll hand it over to Dylan to talk about input.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=841)







14:05







[Thanks Linda!](https://developer.apple.com/videos/play/wwdc2024/10085/?time=845) [Hi, I'm Dylan, from the Apple design team.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=846) [And I'm going to talk about how to adapt](https://developer.apple.com/videos/play/wwdc2024/10085/?time=849) [your game's input scheme to Apple platforms.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=851) [I'll discuss considerations for each input method,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=855) [and then I'll dive deep on how to design great touch controls](https://developer.apple.com/videos/play/wwdc2024/10085/?time=858) [by adapting movement and camera, placing controls intuitively,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=861) [responding to gameplay, and providing feedback.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=865) [Let's kick things off by taking a look](https://developer.apple.com/videos/play/wwdc2024/10085/?time=869) [at the various input methods available on Apple platforms.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=871) [With comprehensive support for familiar inputs like keyboard,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=875) [mouse, and game controller,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=879) [it's easy to bring your game to Apple platforms.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=880) [The control schemes you use on other platforms](https://developer.apple.com/videos/play/wwdc2024/10085/?time=883) [should more or less directly transfer to iPhone, iPad, and Mac,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=886) [with some small considerations.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=890) [For one, we support a broader range of controllers than most other platforms,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=893) [each with their own set of glyphs printed on their controls.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=898)







15:02







[You can accommodate this in your design work](https://developer.apple.com/videos/play/wwdc2024/10085/?time=902) [with the SF Symbols app,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=904) [which provides an enormous library of glyphs](https://developer.apple.com/videos/play/wwdc2024/10085/?time=906) [like these and many more.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=909) [But you shouldn't bake this art into your game.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=911) [Instead, use the GameController framework](https://developer.apple.com/videos/play/wwdc2024/10085/?time=914) [to get the appropriate symbols for your controller.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=916) [This ensures your game will be ready to handle](https://developer.apple.com/videos/play/wwdc2024/10085/?time=919) [any new controllers or remapped controls.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=922)







15:25







[When implementing keyboard support,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=925) [consider that the modifier keys on Apple keyboards](https://developer.apple.com/videos/play/wwdc2024/10085/?time=927) [are arranged in a different order than typical PC keyboards,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=930) [and so you should validate that your control mappings are comfortable](https://developer.apple.com/videos/play/wwdc2024/10085/?time=934) [and adjust as necessary.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=937)







15:39







[In addition to mouse, keyboard, and controller support,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=939) [Apple is especially unique in our support for high-end games](https://developer.apple.com/videos/play/wwdc2024/10085/?time=943) [on touch-first platforms.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=946) [And while some players may play your game on their iPhone or iPad with a controller,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=949) [the vast majority of players won't have a controller available.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=954) [to maximize the reach of your game,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=958) [and to provide a great experience for people who want to play on the go,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=960) [you can go the extra mile by designing custom touch controls.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=963)







16:08







[Designing for touch is a bit different from designing for controller.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=968) [Traditionally, you have a rich design space within your game](https://developer.apple.com/videos/play/wwdc2024/10085/?time=971) [to react to the static inputs of your controller.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=975)







16:18







[But on touch screens, your input surface is also the output.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=978) [Designing your game means designing your input too,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=982) [because touch controls are dynamic and can be informed by the game itself.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=985) [I have here a game I've built](https://developer.apple.com/videos/play/wwdc2024/10085/?time=990) [with a straightforward port of console controls to the iPhone.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=992) [In its current form, the controls clutter the screen,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=996) [obscuring content and making it difficult](https://developer.apple.com/videos/play/wwdc2024/10085/?time=999) [to comfortably and reliably press the right buttons.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1001) [Let's deconstruct this control scheme](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1004) [and show how we could better adapt it to touch input.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1006) [I'll start by showing how to adapt movement and camera controls.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1009) [from physical thumbsticks to touch.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1013) [For a 1st or 3rd person game like mine,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1016) [I create a virtual replacement for the physical left thumbstick control.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1019) [The dynamic nature of a touchscreen means](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1024) [I can hide this control when it's not in use,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1026) [to avoid obstructing the game.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1029)







17:12







[While thumbsticks traditionally have fixed physical dimension,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1032) [you're not bound by those constraints on touch.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1036) [And because players can't physically feel where their hand is](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1039) [relative to a tactile control,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1042) [it's important to expand the input area to be as broad as possible.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1044)







17:30







[My game makes use of a thumbstick press on the controller to sprint,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1050) [but my virtual thumbstick can't do that.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1054) [I could create a button for this functionality,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1057) [but it's very cumbersome to use](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1060) [and requires me to stop movement to toggle it.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1061)







17:45







[So instead, I'll take advantage of the large dynamic range](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1065) [of the touch surface,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1069) [to incorporate the Sprint function directly into the virtual thumbstick,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1070) [instead of using an additional button.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1074)







17:58







[For camera control, which is typically on the right thumbstick](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1078) [I could use another virtual thumbstick to port my controller input to touch,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1081) [but this isn't making the best use of the touch screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1086)







18:10







[Instead, I'll use direct touch input to pan the camera.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1090) [Notice how as I drag my finger left, right, up, and down,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1094) [I'm directly manipulating the position of the camera.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1098) [This provides very fast and precise movement,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1102) [more akin to the speed and precision of a mouse input](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1105) [rather than a joystick.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1108) [And just as I said for movement,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1110) [the input area for this control should be as broad as possible.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1112)







18:37







[In a game with an overhead or isometric perspective](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1117) [there are a couple different considerations.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1120) [While a virtual thumbstick may be sufficient for movement,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1123) [you should also consider letting a player tap to move.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1126) [And while panning to move the camera transfers over well,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1129) [you can add inertia to help quickly traverse large distances,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1133) [and use a two finger pinch to zoom in and out.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1137) [These behaviors will be familiar to people using iOS,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1140) [as they appear all over the system, like here in Maps.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1143) [Now that i have my core movement and camera functionality sorted out,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1147) [I'll talk about how to place controls for all of the other actions in my game.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1151)







19:15







[As Linda described previously,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1155) [I'll need to be mindful of safe area insets,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1157) [and avoid the regions at the edge of the screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1160) [But I also want to avoid placing controls in the areas](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1163) [where I expect movement or camera input to happen,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1166) [and of course I want to avoid covering my character,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1170) [so I won't place any controls in the center of the display.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1173)







19:37







[This leaves me the regions around the thumbs,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1177) [which are ideal for placing frequent or important actions,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1179) [and the region at the top of the screen,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1183) [which is a great place to put less frequently used controls,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1185) [like menu buttons.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1188) [Because players will likely be playing your game](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1190) [with only their two thumbs,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1192) [you need to consider which controls might need to be used at the same time](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1194) [so that you can place them on the appropriate side of the screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1197)







20:01







[A common pattern with controllers is to use a left trigger or L2 button](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1201) [for zooming the camera to aim,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1205) [while R2 performs an aimed ability.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1207) [This control scheme doesn't translate well to touch as-is.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1210) [It prevents me from aiming and moving at the same time,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1214) [or aiming while using my R2 action.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1217)







20:20







[If I swap these controls,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1220) [I can zoom and aim at the same time with my right thumb,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1222) [while using my left thumb to move or fire.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1226)







20:31







[My controls are now well-placed,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1231) [but I could really elevate them with some new dynamic behaviors](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1233) [that are only possible on a touch screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1236) [There are a few simple guidelines to follow](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1239) [that will make your game feel more at home](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1241) [on a touch-first platform.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1243) [To start, instead of showing static controller button glyphs,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1246) [you should use glyphs that better represent](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1249) [your control's action.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1251) [When a control changes its behavior based on context,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1253) [you should update its symbol accordingly,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1256) [and importantly, when an action isn't available or relevant,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1259) [you should remove it entirely to avoid cluttering the screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1263)







21:07







[Applying this to my game I'll replace the standard console button glyphs](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1267) [with descriptive glyphs for each control,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1271) [and remove controls entirely when they're not available,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1274) [such as my Fire button that's only available when aiming.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1277)







21:21







[When the player begins aiming, I'll update which controls are visible,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1281) [revealing the Fire button and hiding everything else.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1284)







21:28







[I can even use my controls](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1288) [to reflect details about the state of the game.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1290) [Here I'm using the Fire button to visually represent](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1293) [when the ability will be available to use again.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1296)







21:39







[And of course, when I show my menu, I hide all my controller UI completely.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1299) [It's crucial that your menus respond to touch,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1304) [virtual controls cover up content and make navigating menus cumbersome.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1307) [Now I've fully adapted my game's control scheme to touch,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1311) [but there's one key element missing:](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1315) [feedback.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1317) [Because touch screens don't have the tactile feedback of physical controls,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1318) [you need to provide feedback in other ways.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1323) [It's extremely important](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1326) [that any touch control you create has a press state.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1327) [Press states give the player confidence that they've pressed a button,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1330) [and without them, controls feel unresponsive.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1334) [This could be as simple as darkening or highlighting buttons when pressed,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1336) [but in the context of a busy game,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1340) [you might want to draw visual effects like a glow](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1343) [outside of the bounds of the control.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1345) [This helps provide feedback](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1348) [even when a finger is covering the button itself.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1349) [You can also theme these effects](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1352) [to better integrate them into the visual style of your game.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1353)







22:37







[Sound and haptics are another great form of feedback,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1357) [and can even go beyond the feel of a simple button press.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1361) [You can add subtle haptics on touch down and touch up](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1364) [to provide a sense of responsiveness,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1367) [in addition to designing sound and haptics](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1369) [for the actions that your controls will perform.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1371) [Now with feedback built into my controls, I've finished adapting my game's inputs,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1374) [and have created a control scheme](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1379) [that leans into the benefits of a touch screen.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1380)







23:04







[If you want to go even deeper into our recommendations for input,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1384) [check out "Game controls" in the "Inputs" section](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1388) [of the Human Interface Guidelines.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1390) [Linda and I have covered a lot of ground](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1393) [between designing for the device and designing for input.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1395) [We hope that with this guidance, your players will be able](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1399) [to jump straight into gameplay](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1401) [that looks beautiful across all of their Apple devices,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1403) [and that they'll be able to play your game](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1406) [with whichever input is most comfortable for them,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1408) [whether that's keyboard and mouse, controller,](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1411) [or even your newly designed custom touch controls.](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1414) [To learn more about the technical details of bringing your game to Apple platforms](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1417) [check out: "Port advanced games to Apple platforms"](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1421) [Thanks for watching!](https://developer.apple.com/videos/play/wwdc2024/10085/?time=1425)
