URL: https://m3.material.io/foundations/interaction/states/applying-states
TITLE: States - Material Design 3: Applying states
RETRIEVED: 2026-11-22
METHOD: web_extract

[Skip to main content](https://m3.material.io/foundations/interaction/states/applying-states#main_content)[search](https://m3.material.io/search.html) [material\_design\\
 Home](https://m3.material.io/) [apps\\
 Get started](https://m3.material.io/get-started) [code\\
 Develop](https://m3.material.io/develop) [book\\
 Foundations](https://m3.material.io/foundations) [palette\\
 Styles](https://m3.material.io/styles) [add\_circle\\
 Components](https://m3.material.io/components) [pages\\
 Blog](https://m3.material.io/blog)

play\_arrow

pause

dark\_mode

light\_mode

[Foundations overview](https://m3.material.io/foundations)

Accessibility
arrow\_drop\_down


[Overview](https://m3.material.io/foundations/overview) [Designing](https://m3.material.io/foundations/designing) [Writing and text](https://m3.material.io/foundations/writing)

[Building for all](https://m3.material.io/foundations/building-for-all)

Content design
arrow\_drop\_down


[Overview](https://m3.material.io/foundations/content-design/overview) [Alt text](https://m3.material.io/foundations/content-design/alt-text) [Global writing](https://m3.material.io/foundations/content-design/global-writing) [Notifications](https://m3.material.io/foundations/content-design/notifications) [Style guide](https://m3.material.io/foundations/content-design/style-guide)

[Customizing Material](https://m3.material.io/foundations/customization)

Devices
arrow\_drop\_down


[Desktop](https://m3.material.io/foundations/desktop) [Watches](https://m3.material.io/foundations/watches)

XR
arrow\_drop\_down


[Design](https://m3.material.io/foundations/xr/design) [Components](https://m3.material.io/foundations/xr/components)

[Design tokens](https://m3.material.io/foundations/design-tokens)

Interaction
arrow\_drop\_up


[Gestures](https://m3.material.io/foundations/interaction/gestures) [Inputs](https://m3.material.io/foundations/interaction/inputs) [Selection](https://m3.material.io/foundations/interaction/selection) [States](https://m3.material.io/foundations/interaction/states)

Layout
arrow\_drop\_down


[Overview](https://m3.material.io/foundations/layout/layout-overview) [Scaffold](https://m3.material.io/foundations/layout/scaffold) [Grids & spacing](https://m3.material.io/foundations/layout/grids-spacing) [Breakpoints](https://m3.material.io/foundations/layout/breakpoints) [Bidirectionality & RTL](https://m3.material.io/foundations/layout/bidirectionality-rtl) [Canonical examples](https://m3.material.io/foundations/layout/canonical-examples)

[Usability](https://m3.material.io/foundations/usability)[Material A-Z](https://m3.material.io/foundations/glossary)

# States

States show the interaction status of a component or UI element

[Overview](https://m3.material.io/foundations/interaction/states/overview) [State layers](https://m3.material.io/foundations/interaction/states/state-layers) [Applying states](https://m3.material.io/foundations/interaction/states/applying-states)

On this page

## States

- Enabled
- Disabled
- Hover
- Focused
- Pressed
- Dragged

link

Copy linkLink copied

## Enabled

link

Copy linkLink copied

An enabled state communicates an interactive component or element. Enabled states use the default styling for each interactive component.

![Enabled state of 4 components.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2qpw4a-1.png?alt=media)

Enabled states for:

1. Button
2. FAB
3. Switch
4. Text field

link

Copy linkLink copied

## Disabled

link

Copy linkLink copied

A disabled state communicates when a component or element isn’t interactive. This state is visually communicated through color changes and reduced elevation.

**Disabled states don't need to meet Material's contrast requirements.**

![Low opacity solitary button labeled disabled, indicates a  disabled/inoperable state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2qrzig-2.png?alt=media)

Disabled button

link

Copy linkLink copied

Disabled states **are** inherited by action, selection, and input components:

- Buttons
- Cards
- Checkboxes
- Chips
- List items
- Radio buttons
- Switches
- Text fields

![Inoperable state of 4 components.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2qtg0r-3.png?alt=media)

Disabled states for:

1. Checkbox
2. Icon button
3. Radio button
4. Segmented button

link

Copy linkLink copied

Disabled states **aren't** inherited by communication, containment, navigation, and some actions components:

- App bars
- Badges
- Dialogs
- Floating action buttons (FABs)
- Menus
- Navigation bar, drawer, and rail
- Sheets
- Tabs
- Tooltips

![Screen erroneously showing edit FAB in inoperable state, though the edit function is unavailable.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2quyuj-4.png?alt=media)

close Don’t
If the action represented in the FAB is unavailable, the FAB shouldn't appear

link

Copy linkLink copied

### Behavior

Disabled components can’t be focused, dragged, or pressed, and they don’t change state when tapped or hovered over.

pause

A disabled button doesn’t inherit hover or other state layers

link

Copy linkLink copied

There can be any number of disabled states in a layout.

![Disabled components on a screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flyml0ix7-6.png?alt=media)

1. Disabled redo icon button
2. Disabled checklist icon button

link

Copy linkLink copied

## Hover

link

Copy linkLink copied

Hover states are initiated by the user pausing over an interactive element using a cursor.

The lower-emphasis surface overlay for hover states can be applied to the entire component, elements within a component, or as a circular shape over part of the component.

![Cursor moves toward button which reads “enabled” and when the cursor touches the button text changes to “hovered.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2vwc74-7.png?alt=media)

Hovered button

link

Copy linkLink copied

Hover states **are** inherited by action, selection, and input components:

- Buttons
- Cards
- Checkbox
- Chips
- Date and time pickers
- List items
- Slider
- Switch
- Text fields

![Hover state of 4 components.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2vxl8i-8.png?alt=media)

Hovered states for:

1. FAB
2. Icon button
3. Chip
4. Segmented buttons

link

Copy linkLink copied

Hover states **aren’t** inherited by communication, containment, or navigation components:

- App bars
- Badges
- Dialogs
- Menus
- Navigation bar, drawer, and rail
- Sheets
- Tabs

![Mobile screen with the whole  app bar wrongly in hover state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2vymng-9.png?alt=media)

close Don’t
The individual components that are actionable within the app bar inherit hover states, not the whole app bar

link

Copy linkLink copied

### Behavior

Hover states are initiated by the user pausing over an interactive element using a cursor.

pause

Hover states appear and disappear using a low-emphasis animated fade

link

Copy linkLink copied

Hover states can be combined with focused, activated, selected, or pressed states.

pause

A selected filter chip in both selected and hover states

link

Copy linkLink copied

There can only be one hover state at a time in a layout.

pause

Hover state can only be on one element at a time based on cursor position

link

Copy linkLink copied

## Focused

link

Copy linkLink copied

A focused state communicates when a user has highlighted an element using a keyboard or voice. Focus states apply to all interactive components.

The higher-emphasis surface overlay for focused states can be applied to the entire component, elements within a component, or as a circular shape over part of the component.

![A button in focused state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wa79s-13.png?alt=media)

Focused button

link

Copy linkLink copied

Focus states **are** inherited by action, selection, and input components:

- Buttons
- Cards
- Checkbox
- Chips
- Date and time pickers
- List items
- Selection controls
- Text fields

![Focus state of 4 components.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wb5y9-14.png?alt=media)

Focused states for:

1. FAB
2. Icon button
3. Chip
4. Segmented buttons

link

Copy linkLink copied

Focus states **aren’t** inherited by most communication, containment, or navigation components:

- App bars
- Badges
- Banner
- Card
- Dialogs
- Navigation bar, drawer, and rail
- Sheets

![Mobile screen showing  entire app bar in focus state, which is an error.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wctgk-15.png?alt=media)

close Don’t
The individual components that are actionable within the app bar inherit focus states, not the whole app bar

link

Copy linkLink copied

### Keyboard focus indicator

Many people use the **Tab** key or other shortcut to navigate the interactive elements of a web page, like links, buttons, and chips.

When an element is tabbed to, it appears in its focused state with a ring-like **keyboard focus indicator**. This indicator helps web users know where they are on the page.

While focused, an element can be acted on with the keyboard.

![A single filled button in focused state, displaying the keyboard focus indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wdmfh-16.png?alt=media)

Keyboard focus indicator for a filled button

link

Copy linkLink copied

### Behavior

Focus states are initiated by the user by pressing the **Tab** key on the keyboard (or equivalent).

Focus states can be represented in combination with hover, activated, or selected states.

![A single filter chip simultaneously in selected state and focus state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wf3qd-17.png?alt=media)

A selected filter chip in both selected and focused states

link

Copy linkLink copied

There can only be one focus state at a time in a layout.

pause

A focus state applied to one card at a time

link

Copy linkLink copied

## Pressed

link

Copy linkLink copied

A pressed state communicates a user-initiated tap or click via cursor, keyboard, or voice input. This state applies to all interactive components.

Pressed states trigger a change in composition and should be high-emphasis.

A ripple overlay signifies a pressed state. It can be applied to an entire component or elements within a component, or as a circular shape over part of the component.

![Button using a ripple overlay to signify it’s in a pressed state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wj03t-25.png?alt=media)

Pressed button

link

Copy linkLink copied

Some components, such as buttons or cards, can inherit elevation to signify a pressed state.

![Button using elevation to signify it’s in a pressed state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wk46q-26.png?alt=media)

Pressed button with elevation

link

Copy linkLink copied

Pressed states **are** inherited by action, selection, and some containment components:

- Buttons
- Cards
- Checkbox
- Chips
- List items
- Text fields

![Four components shown in pressed state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wl23l-27.png?alt=media)

Pressed states for:

1. FAB
2. Icon button
3. Chip
4. Segmented button

link

Copy linkLink copied

Pressed states **aren’t** inherited by communication, navigation, or some containment components:

- App bars
- Badges
- Bottom navigation
- Dialogs
- Menus
- Sheets
- Tabs

![Mobile screen showing  entire app bar in pressed state is an error.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wo5k7-28.png?alt=media)

close Don’t
The individual components that are actionable within the app bar inherit pressed states, not the whole app bar

link

Copy linkLink copied

### Behavior

Pressed states are initiated by user keyboard or voice input on an interactive element.

pause

Activated states appear in user-initiated order

link

Copy linkLink copied

Pressed states can be combined with hovered, focused, activated, or selected states.

pause

Activated states can be represented in combination with hover and focus

link

Copy linkLink copied

There may only be a single pressed state at a time in a layout.

pause

A pressed state applied to one card at a time

link

Copy linkLink copied

## Dragged

link

Copy linkLink copied

A dragged state occurs when a user presses and moves an element or component. Dragged states should be low emphasis, to avoid distracting users from their task.

Dragged states use a lower emphasis overlay. It can be applied to the entire component or to elements within a component.

Some components, such as list items, chips, or cards, can inherit elevation to signify a dragged state.

![List item shown in dragged state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wu37e-32.png?alt=media)

Dragged list item

link

Copy linkLink copied

Dragged states **are** inherited by some containment and selection components:

- Cards
- Chips
- List items
- Sliders

![A chip and a card both shown in dragged state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2wv77r-33.png?alt=media)

Dragged states for:

1. Chip
2. Card

link

Copy linkLink copied

Dragged states **aren’t** inherited by action, communication, navigation, or some containment components:

- App bars
- Badges
- Buttons
- Dialogs
- Menus
- Navigation bar, drawer, and rail

![Mobile screen with app bar in dragged state is an error.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2ww2lq-34.png?alt=media)

close Don’t
Components like an app bar that require consistent placement should not inherit dragged states

link

Copy linkLink copied

### Behavior

Dragged states are initiated when users touch and hold elements, using an input method such as a tap or click.

pause

A list item in a dragged state

link

Copy linkLink copied

There may only be a single dragged state at a time within a layout.

pause

Dragged state applied to one card at a time

[arrow\_left\_alt PreviousStates: State layers](https://m3.material.io/foundations/interaction/states/state-layers)[Up next arrow\_right\_altOverview: Overview](https://m3.material.io/foundations/layout/layout-overview)

vertical\_align\_top

[material\_design](https://m3.material.io/)

Material Design is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material Design streamlines collaboration between designers and developers, and helps teams quickly build beautiful products.

- Social

- [GitHub](https://www.github.com/material-components)
- [X](https://x.com/googledesign)
- [YouTube](https://www.youtube.com/@googledesign)
- [Blog RSS](https://material.io/feed.xml)

- Libraries

- [Android](https://m3.material.io/develop/android/mdc-android)
- [Compose](https://m3.material.io/develop/android/jetpack-compose)
- [Flutter](https://m3.material.io/develop/flutter)
- [Web](https://m3.material.io/develop/web)

- More Google sites

- [Google Design](https://design.google/?home=)

- Archived versions

- [Material Design 1](https://m1.material.io/)
- [Material Design 2](https://m2.material.io/)

[Google](https://www.google.com/)

- [Privacy Policy](https://policies.google.com/privacy)
- [Terms of Service](https://policies.google.com/terms)
- [Join research studies](https://google.qualtrics.com/jfe/form/SV_3NMIMtX0F2zkakR?utm_source=Website&Q_Language=en&utm_campaign=Q2&campaignDate=June2022&referral_code=UXRgbtM2422655&productTag=b2d)
- Feedback
