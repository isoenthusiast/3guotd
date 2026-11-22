URL: https://www.nngroup.com/articles/bottom-sheet/
TITLE: Bottom Sheets: Definition and UX Guidelines - NN/G
RETRIEVED: 2026-11-22
METHOD: web_extract

![](https://cdn-cookieyes.com/assets/images/close.svg)

We value your privacy

This website and third-party tools process personal information as described in our [privacy policy](https://www.nngroup.com/contents/privacy-policy/). You can manage your privacy preferences, including opting out of data tracking, using the link below. NN/G will never sell or share your personal information.

Opt out of data tracking

My Privacy Preferences (Data Tracking)![](https://cdn-cookieyes.com/assets/images/close.svg)

We use third-party cookies to understand how visitors use our website. Videos hosted by Vimeo and YouTube may require tracking cookies to play.

To opt out of tracking, check the box below (this may prevent videos from playing). To watch videos, uncheck the box to opt back into tracking. You can change your preferences at the **_Cookie Permissions_** link in our footer. **NN/G will never sell or share your personal information.** [Vimeo](https://vimeo.com/legal/privacy/policy) and [YouTube](https://www.youtube.com/howyoutubeworks/privacy/) have their own privacy policies that explain how they collect and use your information.

Opt out of data tracking

CancelSave My Preferences

Your opt-out preference has been honored.

Banner closes automatically in  s...

Powered by [![](https://cdn-cookieyes.com/assets/images/poweredbtcky.svg)](https://www.cookieyes.com/product/cookie-consent/?ref=cypbcyb&utm_source=cookie-banner&utm_medium=powered-by-cookieyes)

[Skip to content](https://www.nngroup.com/articles/bottom-sheet/#main)

Introducing NN/G Membership \| Access all self-paced courses for $249 per year \| Join by Jan. 26, 2027 \|


[Explore NN/G Membership](https://www.nngroup.com/contents/nng-membership/)

6

# Bottom Sheets: Definition and UX Guidelines

Page Laubheimer

![](https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.256x256_q75_autocrop_crop-smart_upscale.jpg)

[Page Laubheimer](https://www.nngroup.com/articles/author/page-laubheimer/)

June 11, 2023

2023-06-11

[Share](https://www.nngroup.com/articles/bottom-sheet/#)

- [Email article](mailto:?subject=NN/g%20Article:%20Bottom%20Sheets:%20Definition%20and%20UX%20Guidelines&body=https://www.nngroup.com/articles/bottom-sheet/)
- [Share on LinkedIn](http://www.linkedin.com/shareArticle?mini=true&url=http://www.nngroup.com/articles/bottom-sheet/&title=Bottom%20Sheets:%20Definition%20and%20UX%20Guidelines&source=Nielsen%20Norman%20Group)
- [Share on Twitter](https://twitter.com/intent/tweet?url=http://www.nngroup.com/articles/bottom-sheet/&text=Bottom%20Sheets:%20Definition%20and%20UX%20Guidelines&via=nngroup)

Summary:
A bottom sheet is a user-interface pattern used commonly in mobile apps for providing contextual details or controls in the lower area of the screen.


Making contextual controls noticeable and easily accessible on mobile devices is a challenge. Small screens necessitate that we hide some information or controls until they are relevant. Bottom sheets are a type of partial [overlay](https://www.nngroup.com/articles/overlay-overload/) that is especially suited for mobile devices and that makes temporarily important information readily available but also dismissible.

- [Defining Bottom Sheets](https://www.nngroup.com/articles/bottom-sheet/#toc-defining-bottom-sheets-1)
- [Modal and Nonmodal Bottom Sheets](https://www.nngroup.com/articles/bottom-sheet/#toc-modal-and-nonmodal-bottom-sheets-2)
- [Usability Guidelines for Bottom Sheets](https://www.nngroup.com/articles/bottom-sheet/#toc-usability-guidelines-for-bottom-sheets-3)
- [Summary](https://www.nngroup.com/articles/bottom-sheet/#toc-summary-4)

## Defining Bottom Sheets

> **B** **ottom sheet:** An overlay that is anchored to the bottom edge of a mobile device’s screen and that displays additional details or actions.

Bottom sheets are a form of [progressive disclosure](https://www.nngroup.com/videos/progressive-disclosure/) –\- they are typically invoked by a user interaction and provide extra details. Since they intentionally obscure some of the screen, they aren’t suited for displaying always needed information or tools.

Rather, they are used to present extra _information_, [contextual _controls_](https://www.nngroup.com/articles/contextual-menus/), or both. The advantage of a bottom sheet is that, unlike a separate page (which requires [spatial reorientation](https://www.nngroup.com/articles/spatial-memory/) for users and may also force them to hold information in their [working memory](https://www.nngroup.com/videos/working-memory-external-memory/)), it preserves some of the user’s current context.

Bottom sheets share a lot of similarities with dialogs and overlays (not surprisingly, since they are a type of overlay). What’s special, however, of bottom sheets compared with other overlays is that they preserve substantial visibility of the underlying information. Thus, bottom sheets are especially useful **when users are likely to need to refer to the main, background information** while interacting with the information or options presented in the sheet.

A common (but largely incorrect) rationale for using bottom sheets is that they improve reachability for users on mobile devices (i.e., it is often suggested that it is easier to tap items at the bottom of the screen). This is unfortunately not universally true — as [users hold mobile devices in a variety of ways](https://www.uxmatters.com/mt/archives/2017/03/design-for-fingers-touch-and-people-part-1.php) (one-handed, two-handed, and from a variety of different grip points), the bottom of the screen is often not the most easily reachable screen region (the middle of the screen represents the most easily tappable area for the wide variety of ways users hold mobile devices).

## Modal and Nonmodal Bottom Sheets

Bottom sheets can be **modal** or **nonmodal**.

The modal variety works similarly to classic [modal](https://www.nngroup.com/videos/ui-modes-modals/) popups –- they force users to interact with them (or dismiss them) before they can take any other actions. A modal bottom sheet blocks any interactions with the background content while it is visible. A translucent dark scrim is usually placed over the locked-out background content as a signal that it is currently unavailable.

![A bottom sheet showing a prompt to a user to connect with a network, overlaying information about the network itself.](https://media.nngroup.com/media/editor/2023/06/02/unifi.PNG)_The UniFi network-administration app: A modal bottom sheet is displayed when the user’s device doesn’t properly connect to the network being managed; the background shows the name and some basic identifying details of the network, along with a [skeleton screen](https://www.nngroup.com/articles/skeleton-screens/). Since this interaction requires that the user fix this problem before it is possible to do anything else (but may need to reference the name of the network), a modal approach is appropriate._

Nonmodal bottom sheets don’t require an interaction –– they sit at the bottom of the screen, and allow the user to interact with the background content. They are appropriate for presenting detailed information or options in parallel with the main information on the screen.

![A bottom sheet overlay on Google Maps showing details of a destination (the Woodland Park Zoo)](https://media.nngroup.com/media/editor/2023/06/02/google-maps.PNG)_Google Maps: A nonmodal bottom sheet shows details about a destination and navigation actions, while still allowing the user to pan and zoom around the map to see the context of the destination._

Some bottom sheets are expandable. Users can tap or swipe the bottom sheet up to expand it into a full-screen (or sometimes near full-screen) modal. Typically, bottom sheets start off as nonmodal in their minimized state but become modal when expanded.

![The Apple Podcast app shows a small bottom sheet with playback controls expands into a full screen sheet](https://media.nngroup.com/media/editor/2023/06/02/podcast-combined.PNG)_Apple Podcasts: A small bottom sheet displays information about the currently playing episode (left). This bottom sheet can be tapped or dragged to full size (right). Tapping or swiping down on the grab handle (thin, slightly rounded horizontal bar) at the top of the expanded sheet collapses it down._

## Usability Guidelines for Bottom Sheets

In our studies, we observe users having similar struggles with bottom sheets as they do with other [overlays](https://www.nngroup.com/articles/accidental-overlay-dismissal/); these are usually caused by:

- Lack of a clear way to dismiss the bottom sheet
- Stacking several bottom sheets on top of each other
- Obscuring relevant background content

Our guidelines below are meant to address these issues.

### Allow the Use of _Back_ for Dismissing the Bottom Sheet

One problem with bottom sheets, especially when they are expanded to full screen, is that they look like regular pages. As a result, some users may not realize they are in a bottom sheet and might expect to use normal navigation elements (such as the phone’s _Back_ button or the _Back_ gesture) to move away from that screen. Unfortunately, this mechanism is not supported by all bottom sheets.

Thus, if, along the user’s journey, a page spawns a bottom sheet or an overlay, this page will break the normal interaction pattern. Moving away from it may or may not be accessible through the _Back_ button, and therefore the sheet may cause disorientation. You can prevent this issue by supporting the use of _Back_ for dismissing the bottom sheet, thus allowing the users to seamlessly return to the previous view.

### Include a _Close_ Button

Even though most bottom sheets can be dismissed by swiping down (or tapping) on the top grab handle, that element is easy to ignore. Moreover, some users are not aware of this functionality. Plus, the vertical swipe is also prone to swipe ambiguity: depending on where precisely it is initiated, the gesture may close the bottom sheet, may open up the notification drawer, or may display the phone’s control panel.

_Pocket opens a full-page bottom sheet that requires a swipe down to dismiss. Unfortunately, because the grab bar is towards the top of the screen, it’s easy to accidentally open the phone’s notification or settings panels. In addition, even if the user swipes from the correct location, a long, continuous swipe down is required to actually close the bottom sheet. This dexterity challenge makes this method of dismissal [inaccessible](https://www.nngroup.com/articles/screen-reader-type-control/) for users that cannot swipe with precision and error prone for users that don’t have physical disabilities._

To make sure that users will be able to reliably dismiss the bottom sheet, include a visible a _Close (_ or _X_) button on the screen. We recommend providing a clear _Close_ button (usually styled as an X or the word _Close_) at the top of bottom sheets rather than relying exclusively on the grab handle. An additional advantage of this button is that it facilitates [screen-reader](https://www.nngroup.com/articles/screen-reader-users-on-mobile/) and keyboard access for users that cannot see or swipe on the screen.

![A bottom sheet for a notes editing application containing text formatting options and a clear close button](https://media.nngroup.com/media/editor/2023/06/02/apple-notes.PNG)_Apple’s Notes: The nonmodal bottom sheet showing formatting options has a clear_ X _button._

### Do Not Stack Bottom Sheets

One of the biggest issues with bottom sheets occurs when an app stacks several such sheets on top of each other.

We have [previously discussed some of the issues](https://www.nngroup.com/articles/accidental-overlay-dismissal/) with stacked bottom sheets. Inevitably, users will have to keep track of where they currently are in the rapidly multiplying stack of overlays and will need to be able to discriminate between dismissing the last sheet on the stack and dismissing the whole stack, as in the example below.

We strongly recommend **not** **using a bottom sheet to replace typical page-to-page user flows.** A bottom sheet is a transient UI element that is not intended to be a stable place for users to return to, or spend significant time on. They are intended for interruptions or a fork in the road, rather than the expected “happy path” the user will usually take. For example, don’t use a sheet to display an ecommerce product-detail page: the user may navigate to related products, reviews, or detailed specifications from that sheet, and a bottom sheet will break longstanding conventions of how users can navigate from page to page.

![A product detail page opens in a bottom sheet, and spawns another bottom sheet when clicking through to reviews.](https://media.nngroup.com/media/editor/2023/06/22/walmart-combined.PNG)_Walmart opens a product-detail page in a bottom sheet (left), rather than in a separate page. Any links such as reviews on the product-detail page open in another bottom sheet on top of the first one (right). Dismissing the_ Customer reviews _sheet needs to be done by using the top on-screen_ Back _button, whereas dismissing the whole bottom-sheet stack is done by using the_ X _button in the top right corner. Users may not understand the difference between the_ Back _and the_ X _buttons and may accidentally use the wrong button._

### Use Bottom Sheets Only for Short Interactions

Finally, we don’t recommend using a bottom sheet when users will likely spend significant time reviewing the information (or options) displayed inside it. A sheet is inherently a transient UI element — it is meant to support quick interactions, and it should not be used for displaying complex content.

![A musical learning app that shows a list of instruction courses in a series of bottom sheets that are easy to accidentally dismiss](https://media.nngroup.com/media/editor/2023/06/02/soundbrenner-all-four.png)_Soundbrenner: Tapping_ Learn _on the homepage (1) opens a list of musical-instruction content in a bottom sheet (2). Choosing a particular lesson (2) opens the details of that lesson in another bottom sheet, but an accidental swipe downwards when scrolling through the content (3) sends the user back to the homepage (4). (Note that this app, like Walmart above, violates also the previous guideline by stacking several bottom sheets on top of each other.)_

## Summary

Bottom sheets are a mobile-app UI pattern intended to present temporary contextual information while maintaining access to the main content. When used for a few options or some additional information, a bottom sheet can enable quick access to controls; however, they should not be used on top of other bottom sheets or for displaying lengthy content.

Design Patterns,Mobile & Tablet,popups,overlay

## Related Topics

- Design Patterns [Design Patterns](https://www.nngroup.com/topic/design-patterns/)
- [Mobile & Tablet](https://www.nngroup.com/topic/mobile-and-tablet-design/)

## Learn More:

- [![](https://media.nngroup.com/media/videos/thumbnails/6_Tips_for__Better_Tabs_Thumbnail.jpg.650x364_q75_autocrop_crop-smart_upscale.jpg)\\
\\
6 Tips for Better Tabs\\
\\
\\
Evan Sunwall\\
\\
\\
\\
·\\
5 min](https://www.nngroup.com/videos/6-tips-for-better-tabs/?lm=bottom-sheet&pt=article)

- [![](https://media.nngroup.com/media/videos/thumbnails/Tabs__Humble_Yet_Powerful_Thumbnail.jpg.650x364_q75_autocrop_crop-smart_upscale.jpg)\\
\\
Tabs: Humble, Yet Powerful\\
\\
\\
Evan Sunwall\\
\\
\\
\\
·\\
5 min](https://www.nngroup.com/videos/tabs-used-right/?lm=bottom-sheet&pt=article)

- [![](https://media.nngroup.com/media/videos/thumbnails/Cookie_Permissions-_5_Common_User_Types_Thumbnail.jpg.650x364_q75_autocrop_crop-smart_upscale.jpg)\\
\\
Cookie Permissions: 5 Common User Types\\
\\
\\
Samhita Tankala\\
\\
\\
\\
·\\
3 min](https://www.nngroup.com/videos/cookie-permissions-user-types/?lm=bottom-sheet&pt=article)


## Related Articles:

- [How Screen-Reader Users Type on and Control Mobile Devices\\
\\
Tanner Kohler\\
\\
\\
·\\
13 min](https://www.nngroup.com/articles/screen-reader-type-control/?lm=bottom-sheet&pt=article)
- [Conducting Mobile Accessibility Research with Screen-Reader Users\\
\\
Tanner Kohler\\
\\
\\
·\\
14 min](https://www.nngroup.com/articles/mobile-accessibility-research/?lm=bottom-sheet&pt=article)
- [Challenges for Screen-Reader Users on Mobile\\
\\
Tanner Kohler\\
\\
\\
·\\
12 min](https://www.nngroup.com/articles/screen-reader-users-on-mobile/?lm=bottom-sheet&pt=article)
- [Hostile Patterns in Error Messages\\
\\
Kate Kaplan\\
\\
\\
·\\
7 min](https://www.nngroup.com/articles/hostile-error-messages/?lm=bottom-sheet&pt=article)
- [Infinite Scrolling: When to Use It, When to Avoid It\\
\\
Tim Neusesser\\
\\
\\
·\\
9 min](https://www.nngroup.com/articles/infinite-scrolling-tips/?lm=bottom-sheet&pt=article)
- [The Usability of Augmented Reality\\
\\
Sana Behnam and Raluca Budiu\\
\\
\\
·\\
14 min](https://www.nngroup.com/articles/ar-ux-guidelines/?lm=bottom-sheet&pt=article)

 Back to Top
