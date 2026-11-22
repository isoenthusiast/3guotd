URL: https://m3.material.io/components/navigation-bar/guidelines
TITLE: Navigation bar - Material Design 3: Guidelines
RETRIEVED: 2026-11-22
METHOD: web_extract

[Skip to main content](https://m3.material.io/components/navigation-bar/guidelines#main_content)[search](https://m3.material.io/search.html) [material\_design\\
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

[Components overview](https://m3.material.io/components)[App bars](https://m3.material.io/components/app-bars)[Badges](https://m3.material.io/components/badges)

Buttons
arrow\_drop\_down


[All buttons](https://m3.material.io/components/all-buttons) [Button groups](https://m3.material.io/components/button-groups) [Buttons](https://m3.material.io/components/buttons) [Extended FABs](https://m3.material.io/components/extended-fab) [FAB menu](https://m3.material.io/components/fab-menu) [FABs](https://m3.material.io/components/floating-action-button) [Icon buttons](https://m3.material.io/components/icon-buttons) [Segmented buttons](https://m3.material.io/components/segmented-buttons) [Split button](https://m3.material.io/components/split-button)

[Cards](https://m3.material.io/components/cards)[Carousel](https://m3.material.io/components/carousel)[Checkbox](https://m3.material.io/components/checkbox)[Chips](https://m3.material.io/components/chips)

Date & time pickers
arrow\_drop\_down


[Date pickers](https://m3.material.io/components/date-pickers) [Time pickers](https://m3.material.io/components/time-pickers)

[Dialogs](https://m3.material.io/components/dialogs)[Divider](https://m3.material.io/components/divider)[Lists](https://m3.material.io/components/lists)

Loading & progress
arrow\_drop\_down


[Loading indicator](https://m3.material.io/components/loading-indicator) [Progress indicators](https://m3.material.io/components/progress-indicators)

[Menus](https://m3.material.io/components/menus)

Navigation
arrow\_drop\_up


[Navigation bar](https://m3.material.io/components/navigation-bar) [Navigation drawer](https://m3.material.io/components/navigation-drawer) [Navigation rail](https://m3.material.io/components/navigation-rail)

[Radio button](https://m3.material.io/components/radio-button)[Scroll fields](https://m3.material.io/components/scroll-fields)[Search](https://m3.material.io/components/search)

Sheets
arrow\_drop\_down


[Bottom sheets](https://m3.material.io/components/bottom-sheets) [Side sheets](https://m3.material.io/components/side-sheets)

[Sliders](https://m3.material.io/components/sliders)[Snackbar](https://m3.material.io/components/snackbar)[Switch](https://m3.material.io/components/switch)[Tabs](https://m3.material.io/components/tabs)[Text fields](https://m3.material.io/components/text-fields)[Toolbars](https://m3.material.io/components/toolbars)[Tooltips](https://m3.material.io/components/tooltips)

# Navigation bar

Navigation bars let people switch between UI views on smaller devices

Resourcesandroidandroid+3

[infoOverview](https://m3.material.io/components/navigation-bar/overview) [styleSpecs](https://m3.material.io/components/navigation-bar/specs) [design\_servicesGuidelines](https://m3.material.io/components/navigation-bar/guidelines) [accessibility\_newAccessibility](https://m3.material.io/components/navigation-bar/accessibility)

On this page

## Navigation bar

- Usage
- Anatomy
- Placement
- Adaptive design
- Behavior

link

Copy linkLink copied

![A nav bar with vertical items in a compact window, and horizontal items in a medium window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqgvk7-01.png?alt=media)

Navigation bars adapt to different breakpoints

link

Copy linkLink copied

## Usage

link

Copy linkLink copied

Navigation bars provide access to three to five destinations. The nav bar is positioned at the bottom of windows for convenient access.

Each destination is represented by an icon and label text. One navigation destination is always active.

When a navigation bar icon is tapped or focused, people are taken to the navigation destination associated with that icon.

![A nav bar for a music app with 4 destinations: Home, Browse, Radio, Library, It’s in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalnqdza-02.png?alt=media)

Navigation bars can have three to five destinations

link

Copy linkLink copied

Navigation bars should be used for:

- Three to five main pages in the product
- Mobile or tablet only

Navigation bars shouldn’t be used for accessing single tasks, such as viewing one email.

![A nav bar for a music app with 4 destinations: Home, Browse, Radio, Library. It’s in a medium window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqhln7-03.png?alt=media)

On mobile or tablet, navigation bars should be used for top-level destinations

link

Copy linkLink copied

The navigation items can be **vertical** or **horizontal**.

- Use vertical items in compact windows
Window widths smaller than 600dp, such as a phone in portrait orientation.
[More on compact breakpoints](https://m3.material.io/m3/pages/breakpoints/compact), like mobile

- Use horizontal items in medium windows
Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation.
[More on medium breakpoints](https://m3.material.io/m3/pages/breakpoints/medium), like tablets


![A nav bar with vertical items in a compact window, and horizontal items in a medium window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqhs7x-04.png?alt=media)

Vertical navigation items work best in compact windows. Horizontal items work best in medium windows.

link

Copy linkLink copied

For products with more than five navigation items, don’t use a navigation bar; the elements may collide and there likely won’t be enough space for translated text.

Instead, consider using tabs
Tabs organize content across different screens and views.
[More on tabs](https://m3.material.io/m3/pages/tabs/overview) to organize similar content within a page, or hide the navigation behind a menu icon using a modal expanded navigation rail
Navigation rails let people switch between UI views on mid-sized devices.
[More on navigation rails](https://m3.material.io/m3/pages/navigation-rail/overview).

![A nav bar with 7 items in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqi614-05-don't.png?alt=media)

close Don’t
Avoid putting more than five navigation items in a navigation bar

link

Copy linkLink copied

![A nav bar with no labels for each page item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqimzs-06-dont.png?alt=media)

close Don’t
Don’t remove the labels from navigation items

![A nav bar with 2 page items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqir51-07-dont.png?alt=media)

close Don’t
Don’t use a navigation bar for fewer than three destinations. Instead, use tabs.

link

Copy linkLink copied

![A nav bar is on the Library page of a music app. Tabs at the top of the page have secondary navigation for playlists, artists, albums, and songs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fp4omq-08.png?alt=media)

Use navigation for distinct pages and tabs for related content within a page

link

Copy linkLink copied

![Nav bar using horizontal items in a compact window. The items are too wide and flow off screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fp4ti0-09.png?alt=media)

close Don’t
Navigation bar destinations have fixed positions. Don’t scroll them or modify their positions.

link

Copy linkLink copied

## Anatomy

link

Copy linkLink copied

![6 elements of the nav bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t918of-10.png?alt=media)

1. Container

2. Icon

3. Label text

4. Active indicator

5. Large badge (optional)

6. Small badge (optional)

link

Copy linkLink copied

### Container

The container should always be placed at the bottom of the product and span the full length of the window. Navigation items are centered within the container.

The container has a color fill to provide separation from other content.

![The nav bar at the bottom of a medium window has a color fill to differentiate from the background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t91cku-11.png?alt=media)

The navigation bar container holds all elements

link

Copy linkLink copied

### Navigation items

Navigation items hold all elements for each destination: the icon, label text, and active indicator. They can be **vertical**, with the text below the icon and indicator, or **horizontal**, with the icon and text beside each other inside the indicator.

Vertical items are best in compact windows
Window widths smaller than 600dp, such as a phone in portrait orientation.
[More on compact breakpoints](https://m3.material.io/m3/pages/breakpoints/compact), and horizontal items are best in medium windows
Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation
[More on medium breakpoints](https://m3.material.io/m3/pages/breakpoints/medium).

Horizontal items are centered in the nav bar with outer margins.

![The nav bar in a medium window with padding on each side.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t91mur-12.png?alt=media)

The navigation bar is divided into equal-width segments with padding from the window edge

link

Copy linkLink copied

### Icons

Navigation rail items must use icons that symbolize the content of their page. Browse [popular icon](https://fonts.google.com/icons).

Use a filled icon for the active destination and outlined icons for inactive destinations. If an icon doesn’t have a filled version, apply **semibold** weight to the icon instead.

![An active nav item with a filled icon compared to inactive items with outlined icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fp9y48-13.png?alt=media)

check Do
Use filled icons when the navigation item is active

![An active nav item with a semibold icon compared to inactive items with outlined icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fpa2te-14.png?alt=media)

exclamation Caution
If a filled version of an icon is unavailable, the icon’s weight must increase

link

Copy linkLink copied

Active and inactive icons must have a minimum 3:1 contrast ratio with the container.

![4 nav items that are each different colors with low contrast with the background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqnpkt-15-dont.png?alt=media)

close Don’t
Don’t use multiple or low-contrast colors in a navigation bar, as they make it harder for people to distinguish the active item and navigate to other destinations

link

Copy linkLink copied

### Active indicator

The active indicator shows which page from the nav bar is currently being displayed.

![The current page in a nav bar has an active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqo0n5-16-do.png?alt=media)

check Do
Use the active indicator only for the active destination

![All items in a nav bar have active indicators.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqo7ag-17-dont.png?alt=media)

close Don’t
Don’t use the active indicator for more than one destination at a time

link

Copy linkLink copied

### Label text

The label text should be a short, meaningful description of each navigation destination and another way for people to understand an icon’s meaning.

All navigation items require a label text. It should be 1-2 words.

![A nav bar on a music app with clearly labelled destinations: home, browse, radio, library.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fpamvs-18.png?alt=media)

Label text must be brief and clear

link

Copy linkLink copied

![A nav bar with 1-word labels for each page.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqoweq-19-do.png?alt=media)

check Do
Use brief text labels to identify the purpose of a destination

![A nav bar with “Music catalog” for a label. The label is truncated.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqp27c-20-dont.png?alt=media)

close Don’t
Don’t wrap or truncate text as it can make the label hard to understand

![A nav bar with “Music catalog” for a label. The label is a smaller size to make the text fit.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqpu1t-21-dont.png?alt=media)

close Don’t
Don’t shrink longer text to fit on a single line

link

Copy linkLink copied

### Badges (optional)

Navigation bars can display badges in the upper right corners of the destination icon.

Badges can contain dynamic information, such as the number of new messages.

![A nav bar with a destination called “Go” with a small badge and one called “Saved” with a large badge saying “3.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqg5m-22.png?alt=media)

Use a small badge to indicate an update, and a large badge to show the amount of updates

![Horizontal nav items with the badges in the same place of the icon as vertical nav items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqlk1-23.png?alt=media)

Badges overlap the icon in both vertical and horizontal navigation items

link

Copy linkLink copied

## Placement

link

Copy linkLink copied

The floating action button (FAB) is placed above the navigation bar. Nav bars are always placed at the bottom of the window.

![The FAB should be right-aligned above the navigation bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqsyh-24-do.png?alt=media)

check Do
The FAB should be right-aligned above the navigation bar

![A mobile page with a FAB overlapping a nav bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqy0m-25-dont.png?alt=media)

close Don’t
Don’t cover the navigation bar with a FAB

link

Copy linkLink copied

Navigation bars can be temporarily covered by dialogs, bottom sheets, navigation drawers, the on-screen keyboard, or other elements needed to complete a flow. They should not be permanently obstructed on any screen.

pause

The search feature of the screen triggers the on-screen keyboard, temporarily covering the bottom navigation bar until the search flow is completed

link

Copy linkLink copied

## Adaptive design

link

Copy linkLink copied

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. More on [adaptive design](https://m3.material.io/m3/pages/layout-overview/adaptive-design)

link

Copy linkLink copied

### Resizing

Only use navigation bars for compact
Window widths smaller than 600dp, such as a phone in portrait orientation.
[More on compact breakpoints](https://m3.material.io/m3/pages/breakpoints/compact) and medium
Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation.
[More on medium breakpoints](https://m3.material.io/m3/pages/breakpoints/medium) breakpoints.

**Compact**: For narrow windows, use a navigation bar or modal navigation rail.

**Medium**: Use a navigation bar or navigation rail. Decide based on whether horizontal or vertical space is more important.

**Expanded and extra-large**: Use a navigation rail instead. Decide based on available window space and the number of navigation destinations.

pause

Navigation bars are best suited for compact and medium breakpoints

link

Copy linkLink copied

The navigation bar container spans 100% of the window width.

![Navigation bar spanning the full width of a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalo8a44-28.png?alt=media)

Navigation bars use 100% of the screen width

link

Copy linkLink copied

The navigation bar is used on smaller devices. It’s not intended for desktop.

![Navigation bar spanning the full width of an expanded window size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqsfoq-29.png?alt=media)

close Don’t
Don’t use navigation bars for desktop layouts. Instead, use a navigation rail or tabs.

link

Copy linkLink copied

### Presentation

In medium breakpoints, use horizontal nav items to better use available space.

Horizontal nav items should remain centered with the same padding at each breakpoint.

![Horizontal nav items have the same width in medium and expanded windows. Only the padding changes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fpt5k2-30.png?alt=media)

A navigation bar in horizontal orientation keeps the same spacing between destinations

link

Copy linkLink copied

## Behavior

link

Copy linkLink copied

### Navigation

When selecting a navigation bar item not currently selected, the product navigates to that destination’s screen using a [top level](https://m3.material.io/m3/pages/motion-transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. It can either remember where you left off, or reset to the default view.

1. **Preserve state**: If someone has interacted with this destination, it returns to their scroll position, current tab, and in-line search status.
2. **Reset state**: Any prior user interactions are reset, including scroll position, tab selection, and in-line search.

Choose the behavior that best suits the product and user needs. For example, an app that requires frequent switching between sections should preserve each section’s state.

pause

After selecting an item on the bottom navigation bar, the app navigates to that destination’s screen

link

Copy linkLink copied

Re-selecting the currently active destination should reset the scroll position to the top of the page.

**Don't swipe between destinations**

Swiping across the screen does not navigate between destinations, and is not supported by the navigation bar. Swipe behavior should be reserved for related items, such as cards in a carousel, or actions such as archiving a list item.

pause

Selecting the already selected navigation item scrolls to the top of the screen

link

Copy linkLink copied

### Scrolling

Upon scroll, the navigation bar can appear or disappear.

Don’t hide the navigation bar on scroll when a [screen reader](https://m3.material.io/foundations/overview/assistive-technology#ec6f3e84-a51c-4dc0-a353-6844f5bde698) is active.

pause

Scrolling downward can hide the navigation bar; scrolling upward reveals it

link

Copy linkLink copied

### Selection

The icon becomes filled and the active indicator expands from the center of the icon when switching between destinations.

The active indicator animation should only apply on one axis to better represent a flat, shared plane.

pause

An active indicator appears when the item is selected.

link

Copy linkLink copied

When a destination is tapped, the destination screens use a [top level](https://m3.material.io/m3/pages/motion-transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. In addition, the icon becomes filled and the active indicator expands from the center of the icon.

pause

Tapping a destination uses a top level transition pattern

[arrow\_left\_alt PreviousNavigation bar: Specs](https://m3.material.io/components/navigation-bar/specs)[Up next arrow\_right\_altNavigation bar: Accessibility](https://m3.material.io/components/navigation-bar/accessibility)

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
