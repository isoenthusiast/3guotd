URL: https://web.dev/articles/prefers-reduced-motion
TITLE: prefers-reduced-motion: Sometimes less movement is more - web.dev
RETRIEVED: 2026-11-22
METHOD: curl

-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
- prefers-reduced-motion: Sometimes less movement is more | Articles | web.dev
Skip to main content
Resources
Web Platform
Dive into the web platform, at your pace.
HTML
CSS
JavaScript
User experience
Learn how to build better user experiences.
Performance
Accessibility
Identity
Learn
Get up to speed on web development.
Learn HTML
Learn CSS
Learn JavaScript
Learn AI
Learn Performance
Learn Accessibility
More courses
Additional resources
Explore content collections, patterns, and more.
AI and the web
Explore
PageSpeed Insights
Podcasts & shows
Developer Newsletter
About web.dev
Discover
Baseline
How to use Baseline
Blog
Case Studies
/
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Polski
Português – Brasil
Tiếng Việt
Türkçe
Русский
עברית
العربيّة
فارسی
हिंदी
বাংলা
ภาษาไทย
中文 – 简体
中文 – 繁體
日本語
한국어
Sign in
Articles
AI and the web
Fast load times
Learn Core Web Vitals
Identity
Progressive Web Apps
Payments
Notifications
How to optimize INP
Network reliability
React
Animations
Mini apps
Media
Safe and secure
WebAssembly
Devices
Easily discoverable
Test automation
Angular
Resources
More
AI and the web
Fast load times
Learn Core Web Vitals
Identity
Progressive Web Apps
Payments
Notifications
How to optimize INP
Network reliability
React
Animations
Mini apps
Media
Safe and secure
WebAssembly
Devices
Easily discoverable
Test automation
Angular
Discover
Baseline
How to use Baseline
Blog
Case Studies
How browsers render animations
Why are some animations slow?
Build animations with CSS
CSS animations API guide
How to create high-performance CSS animations
Examples of high-performance CSS animations
prefers-reduced-motion: Sometimes less movement is more
Debug CSS animations with Chrome DevTools
Debug CSS animations with Firefox DevTools
Build animations with JavaScript
Web Animations API overview
Web Animations API guide
Web Animations API improvements in Chromium 84
Web Platform
HTML
CSS
JavaScript
User experience
Performance
Accessibility
Identity
Learn
Learn HTML
Learn CSS
Learn JavaScript
Learn AI
Learn Performance
Learn Accessibility
More courses
Additional resources
AI and the web
Explore
PageSpeed Insights
Podcasts &amp; shows
Developer Newsletter
About web.dev
Modern Web Guidance is now stable! Upgrade your coding agents with expert-vetted web development best practices. Read the announcement .
Home
Articles
Resources
Animations
prefers-reduced-motion: Sometimes less movement is more
Stay organized with collections
Save and categorize content based on your preferences.
The prefers-reduced-motion media query detects whether the user has requested
the operating system to minimize the amount of animation or motion it uses.
Thomas Steiner
Not everyone likes decorative animations or transitions, and some users outright experience motion
sickness when faced with parallax scrolling, zooming effects, and more. The user preference media
query prefers-reduced-motion lets you design a motion-reduced variant of your site for users who
have expressed this preference.
Browser Support
74
79
63
10.1
Source
Too much motion in real life and on the web
The other day, I was ice skating with my kids. It was a lovely day, the sun was shining, and the ice
rink was crammed with people ⛸. The only issue with that: I don't cope with crowds well. With so
many moving targets, I fail to focus on anything, and end up lost and with a feeling of complete
visual overload, almost like staring at an anthill 🐜.
Visual overload in real life.
Occasionally, the same can happen on the web: with flashing ads, fancy parallax effects, surprising
reveal animations, autoplaying videos, and more, the web sometimes can be quite overwhelming …
Happily, unlike in real life, there is a solution to that. The CSS media query
prefers-reduced-motion lets developers create a variant of a page for users who, well, prefer
reduced motion. This can consist of anything from refraining from having autoplaying videos to
disabling certain purely decorative effects, to completely redesigning a page for certain users.
Before I dive into the feature, let me take one step back and think of what animations are used for
on the web. If you want, you can also skip the background information and
jump right into the technical details .
Animation on the web
Animation is oftentimes used to provide feedback to the user, for example, to let them know that
an action was received and is being processed. For example, on a shopping website, a product could
be animated to "fly" into a virtual shopping cart, depicted as an icon in the top-right corner of
the site.
Another use case involves using motion to
hack user perception
by using a mixture of skeleton screens, contextual metadata, and low quality image previews to
occupy a lot of the user's time and make the whole experience feel faster . The idea is to give
context to the user of what's coming and meanwhile load in things as quickly as possible.
Finally, there are decorative effects like animated gradients, parallax scrolling, background
videos, and several others. While many users enjoy such animations, some users dislike them because
they feel distracted or slowed down by them. In the worst case, users may even suffer from motion
sickness as if it were a real life experience, so for these users reducing animations is a medical
necessity .
Motion-triggered vestibular spectrum disorder
Some users experience
distraction or nausea from animated content .
For example, scrolling animations can cause vestibular disorders when elements other than the main
element associated with the scrolling move around a lot. For example, parallax scrolling animations
can cause vestibular disorders because background elements move at a different rate than foreground
elements. Vestibular (inner ear) disorder reactions include dizziness, nausea, and migraine
headaches, and sometimes require bed rest to recover.
Remove motion on operating systems
Many operating systems have had accessibility settings for specifying a preference for reduced
motion for a long time. The following screenshots show macOS Mojave's Reduce motion preference and
Android Pie's Remove animations preference. When checked, these preferences cause the operating
system to not use decorative effects like app launching animations. Applications themselves can and
should honor this setting, too, and remove all unnecessary animations.
Remove motion on the web
Media Queries Level 5 brings the reduced motion
user preference to the web as well. Media queries allow authors to test and query values or features
of the user agent or display device independent of the document being rendered. The media query
prefers-reduced-motion is used
to detect if the user has set an operating system preference to minimize the amount of animation or
motion it uses. It can take two possible values:
no-preference : Indicates that the user has made no preference in the underlying operating
system. This keyword value evaluates as false in the boolean context.
reduce : Indicates that the user has set an operating system preference indicating that
interfaces should minimize movement or animation, preferably to the point where all non-essential
movement is removed.
Working with the media query from CSS and JavaScript contexts
As with all media queries, prefers-reduced-motion can be checked from a CSS context and from a
JavaScript context.
To illustrate both, assume I have an important sign-up button that I want the user to click. I
could define an attention-catching "vibrate" animation, but as a good web citizen I will only play
it for those users who are explicitly OK with animations, but not everyone else, which can be users
who have opted out of animations, or users on browsers that don't understand the media query.
/*
If the user has expressed their preference for
reduced motion, then don't use animations on buttons.
*/
@ media ( prefers-reduced-motion : reduce ) {
button {
animation : none ;
}
}
/*
If the browser understands the media query and the user
explicitly hasn't set a preference, then use animations on buttons.
*/
@ media ( prefers-reduced-motion : no-preference ) {
button {
/* `vibrate` keyframes are defined elsewhere */
animation : vibrate 0.3 s linear infinite both ;
}
}
Note: If you have a lot of animation-related CSS, you can spare your opted-out users from downloading it by outsourcing all animation-related CSS into a separate style sheet that you only load conditionally using the media attribute on the link element 😎: <link rel="stylesheet" href="animations.css" media="(prefers-reduced-motion: no-preference)">
To illustrate how to work with prefers-reduced-motion with JavaScript, imagine I have
defined a complex animation with the
Web Animations API . While CSS rules
will be dynamically triggered by the browser when the user preference changes, for JavaScript
animations I have to listen for changes myself, and then manually stop my potentially in-flight
animations (or restart them if the user lets me):
const mediaQuery = window . matchMedia ( '(prefers-reduced-motion: reduce)' );
mediaQuery . addEventListener ( 'change' , () = > {
console . log ( mediaQuery . media , mediaQuery . matches );
// Stop JavaScript-based animations.
});
Note that the parentheses around the actual media query are obligatory:
Don't
window . matchMedia ( 'prefers-reduced-motion: reduce' );
Do
window . matchMedia ( '(prefers-reduced-motion: reduce)' );
Working with the media query from <picture> contexts
An interesting use case is to make playing of an animated AVIF, WebP, or GIF dependent on the
media attribute. If (prefers-reduced-motion: no-preference) evaluates to true , it's safe to
display the animated version, else the static version:
<picture>
<!-- Animated versions. -->
<source
srcset="nyancat.avifs"
type="image/avif"
media="(prefers-reduced-motion: no-preference)"
/>
<source
srcset="nyancat.gif"
type="image/gif"
media="(prefers-reduced-motion: no-preference)"
/>
<!-- Static versions. -->
<img src="nyancat.png" alt="Nyan cat" width="250" height="250" />
</picture>
You can see the following example. Try toggling your device's motion preferences to see the difference.
Discover the user's preferences at request time
The Sec-CH-Prefers-Reduced-Motion client hint header
allows sites to obtain the user's motion preferences optionally at request time,
allowing servers to inline the right CSS for performance reasons.
Demo
I have created a little demo based on Rogério Vicente's amazing
🐈 HTTP status cats . First, take a moment to appreciate the joke, it's
hilarious and I'll wait. Now that you're back, let me introduce the
demo . When you scroll, each HTTP status cat
alternatingly appears from either the right or the left side. It's a buttery smooth 60 FPS
animation, but as outlined before, some users may dislike it or even get motion sick by it, so the
demo is programmed to respect prefers-reduced-motion . This even works dynamically, so users can
change their preference on-the-fly, no reload required. If a user prefers reduced motion, the
non-necessary reveal animations are gone, and just the regular scrolling motion is left. The
following screencast shows the demo in action:
Video of the
prefers-reduced-motion demo
app
Conclusions
Respecting user preferences is key for modern websites, and browsers are exposing more and more
features to enable web developers to do so. Another launched example is
prefers-color-scheme , which
detects if the user prefers a light or dark color scheme. You can read everything about
prefers-color-scheme in my article Hello Darkness, My Old Friend 🌒.
The CSS Working Group is standardizing more
user preference media queries like
prefers-reduced-transparency
(detects if the user prefers reduced transparency),
prefers-contrast (detects if the user
has requested the system to increase or decrease the amount of contrast between adjacent colors),
and inverted-colors (detects if the user
prefers inverted colors).
(Bonus) Forcing reduced motion on all websites
Not every site will use prefers-reduced-motion , or maybe not significantly enough for your taste.
If you, for whatever reason, want to stop motion on all websites, you actually can. One way to make
this happen is to inject a style sheet with the following CSS into every web page you visit. There
are several
browser extensions
out there (use at your own risk!) that allow for this.
@ media ( prefers-reduced-motion : reduce ) {
*,
:: before ,
:: after {
animation-delay : -1 ms !important ;
animation-duration : 1 ms !important ;
animation-iteration-count : 1 !important ;
background-attachment : initial !important ;
scroll-behavior : auto !important ;
transition-duration : 1 ms !important ;
transition-delay : -1 ms !important ;
}
}
The way this works is that the previous CSS overrides the durations of all animations and transitions
to such a short time that they are not noticeable anymore. As some websites depend on an animation
to be run in order to work correctly (maybe because a certain step depends on the firing of the
animationend event ),
the more radical animation: none !important; approach wouldn't work. Even the previous hack is not
guaranteed to succeed on all websites (for example, it can't stop motion that was initiated using the
Web Animations API ), so be sure to
deactivate it when you notice breakage.
Resources
Latest Editor's Draft of the
Media Queries Level 5
spec.
prefers-reduced-motion on
Chrome Platform Status .
prefers-reduced-motion Chromium bug .
Blink
Intent to Implement posting .
Acknowledgements
Massive shout-out to Stephen McGruer who has implemented
prefers-reduced-motion in Chrome and, together with
Rob Dodson , has also reviewed this document.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2019-03-11 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2019-03-11 UTC."],[],[]]
web.dev
web.dev
We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.
Contribute
File a bug
See open issues
Related Content
Chrome for Developers
Chromium updates
Case studies
Podcasts & shows
Follow
@ChromiumDev on X
YouTube
Chrome for Developers on LinkedIn
RSS
Terms
Privacy
Manage cookies
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Polski
Português – Brasil
Tiếng Việt
Türkçe
Русский
עברית
العربيّة
فارسی
हिंदी
বাংলা
ภาษาไทย
中文 – 简体
中文 – 繁體
日本語
한국어
