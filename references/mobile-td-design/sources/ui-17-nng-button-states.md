URL: https://www.nngroup.com/articles/button-states-communicate-interaction/
TITLE: Button States: Communicate Interaction - NN/G
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

[Skip to content](https://www.nngroup.com/articles/button-states-communicate-interaction/#main)

Introducing NN/G Membership \| Access all self-paced courses for $249 per year \| Join by Jan. 26, 2027 \|


[Explore NN/G Membership](https://www.nngroup.com/contents/nng-membership/)

5

# Button States: Communicate Interaction

Kelley Gordon

![](https://media.nngroup.com/media/people/photos/2022-Portrait-Kelley.jpg.256x256_q75_autocrop_crop-smart_upscale.jpg)

[Kelley Gordon](https://www.nngroup.com/articles/author/kelley-gordon/)

April 25, 2025

2025-04-25

[Share](https://www.nngroup.com/articles/button-states-communicate-interaction/#)

- [Email article](mailto:?subject=NN/g%20Article:%20Button%20States:%20Communicate%20Interaction&body=https://www.nngroup.com/articles/button-states-communicate-interaction/)
- [Share on LinkedIn](http://www.linkedin.com/shareArticle?mini=true&url=http://www.nngroup.com/articles/button-states-communicate-interaction/&title=Button%20States:%20Communicate%20Interaction&source=Nielsen%20Norman%20Group)
- [Share on Twitter](https://twitter.com/intent/tweet?url=http://www.nngroup.com/articles/button-states-communicate-interaction/&text=Button%20States:%20Communicate%20Interaction&via=nngroup)

Summary:
Minor visual changes help users distinguish between 5 different button states: enabled, disabled, hovered, focused, pressed.


**Buttons** are core [user-interface elements](https://www.nngroup.com/articles/ui-elements-glossary/) that, when clicked or tapped, execute an action. When designed correctly, buttons set accurate user expectations and help them understand how to interact with the interface. In addition to clear button labels, effective signaling of button states is critical for a good design.

- [Button States Explained](https://www.nngroup.com/articles/button-states-communicate-interaction/#toc-button-states-explained-1)
- [Other States: Loading and Selected](https://www.nngroup.com/articles/button-states-communicate-interaction/#toc-other-states-loading-and-selected-2)
- [Button States vs. Button Styles](https://www.nngroup.com/articles/button-states-communicate-interaction/#toc-button-states-vs-button-styles-3)
- [Don’t Forget a Useful Button Label](https://www.nngroup.com/articles/button-states-communicate-interaction/#toc-dont-forget-a-useful-button-label-4)

## Button States Explained

You’ve probably experienced that annoying situation when you try to click on a button, but nothing happens. How do you know when you can click on a button versus when you can’t? Designers usually communicate that type of information through subtle visual cues that indicate to users the state of the button: whether it’s clickable or not, whether it has been pressed, whether it has been hovered on.

The most commonly used button states are:

- _Enabled_
- _Disabled_
- _Hover_
- _Focus_
- _Pressed_

![](https://media.nngroup.com/media/editor/2025/04/21/button-states.jpg)

### Enabled State

The _enabled_ state, also sometimes called the default state, **indicates that the button can be pressed or otherwise interacted with.** When a button is in this state, it’s available to be clicked or tapped, and will perform its intended action.

![](https://media.nngroup.com/media/editor/2025/04/21/enabled-button.jpg)_This bold, solid-filled enabled state lets users know it’s ready to perform a specific action when clicked._

When a button is available and active, we usually want it to catch users’ attention — especially if it’s a primary or call-to-action button.

**Typical styles for****_enabled_**buttons have the following visual characteristics:

- High contrast between the button and the rest of the design
- Legible label
- An optional [skeuomorphic](https://www.nngroup.com/articles/skeuomorphism/) shadow to add a 3D feeling

### Disabled State

Opposite of the _enabled_ state is the _disabled_ state. This state **indicates that the button's action is unavailable** — the button can't currently be clicked or tapped. In the _disabled_ state, the button's appearance doesn't change when users try to interact with it.

For example, if a user has not filled in all required fields in a [form](https://www.nngroup.com/articles/eas-framework-simplify-forms/), the form’s _Submit_ button may not be active.

![](https://media.nngroup.com/media/editor/2025/04/21/disabled-1.gif)_When a user clicks the_ disabled _button, nothing happens, as it’s unavailable._

**Typical styles for****_disabled_****buttons**have the following visual characteristics:

- A light gray or otherwise desaturated color or a more muted version of its abled state to signal it isn’t clickable or tappable
- Lower contrast between the label and the background (but mind readability)

![](https://media.nngroup.com/media/editor/2025/04/21/enabled-disabled.jpg)_A_ disabled _button is usually lighter than the_ enabled _one and has a lower contrast between the label and its background._

Labels for _disabled_ states don’t need to be as high-contrast as those for _enabled_ states, but you still want people to be able to read them. On the other hand, you don’t want the contrast to be as high as to trick people into thinking the button is clickable. If you are designing button states, it’s a good idea to test them with real users to make sure they are usable and visually distinct.

_Disabled_ button states should also have the _ARIA-disabled: true_ attribute added to the code. This attribute will allow the button to still receive tab focus but will indicate to screen readers that the button is inactive, thus announcing to users its _disabled_ state.

### Hover State

The _hover_ state is triggered when a user moves their mouse cursor over a button or other design element and is meant to **indicate that the button is clickable.**(This state will obviously not be visibleto users who do not use a mouse — for example, mobile users.) To prevent the color change from happening when users don’t mean to hover over a button (for example, because they are moving their mouse across the screen) a slight delay (around 150–200ms) should be added to this state.

**Typical****_hover_****states**have the following visual characteristics**:**

- A slight darkening of the background color compared to the enabled state
- Changing the cursor from an arrow to a hand

![](https://media.nngroup.com/media/editor/2025/04/21/hover-1.gif)_The_ hover _state appears when a user places her cursor over the button._

### Focus State

The _focus_ (or _keyboard-focus_) state **helps people know which active button has the keyboard focus.** When a user uses the _Tab_key to move across various active elements on a page, the focus state indicates which element is currently selected (and could be activated by using the _Enter_key). The focus state should appear pretty quickly (around 100-150ms) after the user uses the keyboard. Otherwise, the user may end up tabbing on the keyboard again and may miss the desired button.

![](https://media.nngroup.com/media/editor/2025/04/21/focus-1.gif)_The white outline around the button lets users know which button has the keyboard focus._

By default, a _focus_ state is signaled by a blue outline around the element. However, you can easily customize how the focus element looks like, to fit your visual-design needs or brand standards.

That being said, I strongly recommend that you stick to the stroke or outline to indicate focus, as opposed to relying on color change alone, for two reasons. First, this indicator is the default signal and many users expect it. Second, color change alone may not be perceived by some people with vision impairments.

### Pressed State

The _pressed_ state indicates that the user has tapped or clicked a button. It is meant to give the user feedback that the action they performed was registered by the system and usually appears as a very slight color change or a very short and minimal animation. The _pressed_ state should appear within 100–150ms for the user to register that the pressing action is instantaneous. If this feedback is not timely, users will press the button multiple times and potentially cause issues.

![](https://media.nngroup.com/media/editor/2025/04/21/pressed-1.gif)_The_ pressed _state, lets users know that the action they performed was registered by the system._

## Other States: Loading and Selected

In addition to these 5 core button states — _enabled, disabled, hover, focus_, and _pressed_— there are a few more fundamental states to include in a design system.

### LoadingState

This button state lets users know that the action corresponding to that button is being performed.It is used for actions that tend to take a longer amount of time to complete (for example, because they require some backend verification or the loading of a larger document).

The _loading_ state typically uses the enabled state and adds a loading spinner or indicator to the left of the button label. Once loading is complete and the action is performed, oftentimes, you will see the spinner animate to a check icon to visually show that the action was successful.

![](https://media.nngroup.com/media/editor/2025/04/21/kelleysavebuttonanimation.gif)_The_ loading _state indicates that the action associated with the button is being completed. It is usually reserved for actions that require a longer amount of time (such as the uploading of an image)._

### SelectedState

The _selected_ state is associated with checkboxes or radio buttons, and it indicates that the user selected that option. Note that this state is _not_ a button state, but we include it here because sometimes it is confused with the button _pressed_ state.

![](https://media.nngroup.com/media/editor/2025/04/21/selected-state.jpg)_The_ selected _state for a checkbox or radio button indicates that that item has been selected by the user. It is not the same as the_ pressed _state for a button._

## Button States vs. Button Styles

A button style refers to how the button is visually represented in the interfaces and how much visual emphasis it gets. In an interface, it’s typical to distinguish among three (or more) different button styles: primary, secondary, and tertiary, depending on the button’s importance in the UI. The same button can be in different states at different times, depending on the user’s actions or the system’s state. But one button will have only one style.

### Primary

Primary buttons have the most visual emphasis to grab user attention and direct them to an important or common action such as _compose_, _create_, _save_, and _check__out_. Primary buttons are typically solid, filled buttons.

### Secondary

Secondary buttons have a medium visual emphasis and are meant for actions that are less important or commonly used. These are actions like _cancel_and_reply_. Secondary styles are typically outline buttons.

### Tertiary

Tertiary buttons have the least amount of visual emphasis and are dedicated to optional or supplementary actions (e.g., _view__more_).

![](https://media.nngroup.com/media/editor/2025/04/21/button-styles.jpg)_Button styles help provide the intended visual emphasis to actions, while button states inform users of the interaction status of the button._

## Don’t Forget a Useful Button Label

While button states are crucial to designing good, usable buttons, another equally important aspect of a button is its label. [Labels should clearly describe what the button will do, while being substantial and succinct enough to stand alone.](https://www.nngroup.com/articles/better-link-labels/) Avoid generic labels such as _Continue_or _Next._ These small bits of UX copy massively contribute to the findability and accessibility of your site’s functionality.

## Related Courses

- [**Interaction Design**\\
\\
Design how users connect, navigate, and engage with your interfaces\\
\\
\\
Interaction](https://www.nngroup.com/courses/interaction-design/?lm=button-states-communicate-interaction&pt=article)
- [**Web Page UX Design**\\
\\
Strategically combine content, visuals, and interactive components to design successful web pages\\
\\
\\
Interaction](https://www.nngroup.com/courses/web-page-design/?lm=button-states-communicate-interaction&pt=article)
- [**Information Architecture**\\
\\
Organize and structure information to improve findability and discoverability\\
\\
\\
Interaction](https://www.nngroup.com/courses/information-architecture/?lm=button-states-communicate-interaction&pt=article)

Interaction Design,Visual Design,Design Patterns,Accessibility,Web Usability,Web/UI Design

## Related Topics

- Interaction Design [Interaction Design](https://www.nngroup.com/topic/interaction-design/)
- [Visual Design](https://www.nngroup.com/topic/visual-design/)
- [Design Patterns](https://www.nngroup.com/topic/design-patterns/)
- [Accessibility](https://www.nngroup.com/topic/accessibility/)
- [Web Usability](https://www.nngroup.com/topic/web-usability/)

## Learn More:

[![Button States 101](https://media.nngroup.com/media/videos/thumbnails/Button_States_Thumbnail.jpg.1300x728_q75_autocrop_crop-smart_upscale.jpg)](https://www.youtube.com/watch?v=3xfagjg5iRA "Button States 101 on YouTube (new window)")

Enable cookies
to watch NN/g videos


Button States 101


Kelley Gordon


·
3 min

- [![](https://media.nngroup.com/media/videos/thumbnails/3_Ways_to_Test_Your_Survey_Thumbnail.jpg.650x364_q75_autocrop_crop-smart_upscale.jpg)\\
\\
3 Ways to Test Your Survey\\
\\
\\
Maddie Brown\\
\\
\\
\\
·\\
3 min](https://www.nngroup.com/videos/3-ways-to-test-surveys/?lm=button-states-communicate-interaction&pt=article)

- [![](https://media.nngroup.com/media/videos/thumbnails/UX_vs_UI_Thumbnail.jpg.650x364_q75_autocrop_crop-smart_upscale.jpg)\\
\\
UX vs. UI\\
\\
\\
Sarah Gibbons\\
\\
\\
\\
·\\
3 min](https://www.nngroup.com/videos/ux-vs-ui/?lm=button-states-communicate-interaction&pt=article)

- [![](https://media.nngroup.com/media/videos/thumbnails/Why_Microinteractions_are_Important_for_UX_Thumbnail.jpg.650x364_q75_autocrop_crop-smart_upscale.jpg)\\
\\
Why Microinteractions Are Important for UX\\
\\
\\
Alita Kendrick\\
\\
\\
\\
·\\
3 min](https://www.nngroup.com/videos/microinteractions/?lm=button-states-communicate-interaction&pt=article)


## Related Articles:

- [User-Interface Elements: Glossary\\
\\
Raluca Budiu and Kara Rivenbark\\
\\
\\
·\\
17 min](https://www.nngroup.com/articles/ui-elements-glossary/?lm=button-states-communicate-interaction&pt=article)
- [Neobrutalism: Definition and Best Practices\\
\\
Hayat Sheikh\\
\\
\\
·\\
5 min](https://www.nngroup.com/articles/neobrutalism/?lm=button-states-communicate-interaction&pt=article)
- [Table of Contents: The Ultimate Design Guide\\
\\
Huei-Hsin Wang and Maddie Brown\\
\\
\\
·\\
14 min](https://www.nngroup.com/articles/table-of-contents/?lm=button-states-communicate-interaction&pt=article)
- [Less Effort, More Completion: The EAS Framework for Simplifying Forms\\
\\
Huei-Hsin Wang\\
\\
\\
·\\
7 min](https://www.nngroup.com/articles/eas-framework-simplify-forms/?lm=button-states-communicate-interaction&pt=article)
- [Typography Terms: Glossary\\
\\
Sarah Gibbons and Therese Fessenden\\
\\
\\
·\\
7 min](https://www.nngroup.com/articles/typography-terms-ux/?lm=button-states-communicate-interaction&pt=article)
- [Designing Empty States in Complex Applications: 3 Guidelines\\
\\
Kate Kaplan\\
\\
\\
·\\
7 min](https://www.nngroup.com/articles/empty-state-interface-design/?lm=button-states-communicate-interaction&pt=article)

 Back to Top
