URL: https://gameaccessibilityguidelines.com/ensure-no-essential-information-is-conveyed-by-a-fixed-colour-alone/
TITLE: Ensure no essential information is conveyed by a fixed colour alone – Game Accessibility Guidelines
RETRIEVED: 2026-11-22
METHOD: curl

Skip to content
Home
Turn dark mode off on
Ensure no essential information is conveyed by a fixed colour alone
Time and time again I've seen games make unnecessary decisions in color usage that outright prevented me from playing the game due to my colorblindness
Aerothorn, via Rock Paper Shotgun
We estimate that over half a million current Madden NFL users are colorblind
Karen Stevens, EA Tiburon
Colours are useful means of communicating with well established meanings. However they are lost on people who can't distinguish between certain colours.
Difficulty perceiving red or green in particular is very common, affecting around 8-10% of males, making both green and red look a brownish green, and there are several other less common conditions that affect other colours - tritanopia, difficulty perceiving yellow, cataracts, which can add yellow, even achromatopsia, a very rare condition where you have no colour vision at al, and colourblindness acquired through brain/nerve damage, which can alter colours in very unpredictable ways, even swapping them around.
Wherever you can, use colour as a back-up for another means of communicating the information, such as text or a symbol, pattern or shape. This can be by default, with the extra reinforcement often benefiting all players, or via a setting. Some colours also appear darker than without colour deficiency (most commonly red) so check using a simulator for foreground/background contrast too. There are accurate free simulators available (see links at the bottom of this page), and Unreal Engine has a built-in simulator.
For instances where this isn't enough, e.g. online multiplayer where there's no chance to recognise a symbol before you're dead, allow elements of UI and gameplay that are dependent on colour to be customised. Palette tweaking is limited, the wider a palette you have the less effective it is, so always try to reduce colour reliance through additional signifiers first.
Free choice, for example a player being able to choose which colour each team should be, what color the crosshair should be and so on, is what colorblind gamers most commonly request. Offering presets schemes for the common types is also valuable for those who have the common types, as there's no effort needed to configure.
So ideally offer both - e.g. 'colours: deuteranopia/protanopia/tritanopia/custom', where the first three are sets of colours for team/map/cross hairs etc optimised for each of those types, and 'custom' allowing free choice of colour for those elements, for those who the presets don't work for.
Again test those schemes with a simulator as the first port of call. Colorblindness comes in varying degrees of severity but if you design for the full 100% severity you'll also have covered the varying other degrees.
Also ideally check with colorblind gamers, if you're anything other than a small indie there are likely to be some in your office. But only use this as a way to pick up extra issues. You cannot use it as a means of validation, due to the range of types and severities.
Filters that shift the entire palette can be tempting, and in some circumstances (such as Madden, with its licencing restrictions on team kit colours) can be the right option, but in general other solutions should be investigated first. They're more difficult to implement effectively than they appear, with bad reception from colorblind gamers being common. They are a blunt instrument, can change colors of elements that do not need to be changed, unnecessarily affect aesthetics, and introduce new clashes. And as they're based on fixed sets of colors, they only allow conditions specifically designed for to be catered for, without a way to reach edge cases.
I hope they do it well and not just recolour the whole game. I hate it when games do that for colourblind mode, I really like it when they just change UI and the likes so I can tell the difference between enemies and friendlies. When the whole game gets recoloured it's like it's trying to force a perspective I've never seen and I feel like I'm being punished for being colourblind
Cregavitch, via Reddit
Lastly, if you have a very limited colour reliance, for example only needing to distinguish two teams, it is possible to use a reasonably colourblind-friendly palette by default. Orange Vs blue works for the three most common three types, and if you add a contrast difference, e.g. light blue Vs dark orange, you can cover some of the edge cases too.
Best practice examples:
Auralux colour customisation
Destiny colorblind modes
Faster Than Light colourblind mode
For Honor UI contrast
Grand Theft Auto IV map
Hue colorblind mode
Runescape chat colours
Splatoon colour lock
Two Dots colorblind mode
Puzzle Retreat (integrated symbol as well as colour)
Tools
Desktop colour-blindness simulator (Windows / Mac / Linux)
Realtime colour-blindness simulator app (Android)
Additional information
Colour Blindness: Experience it
Category & Level:
Vision (Basic)
All guidelines
Basic
Intermediate
Advanced
Full list
Excel checklist download
Help & advice
How to work with these guidelines
(Opens in new tab)
