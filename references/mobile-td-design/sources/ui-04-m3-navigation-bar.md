URL: https://m3.material.io/components/navigation-bar/overview
TITLE: Material Design 3 - Navigation bar overview
RETRIEVED: 2026-11-22
METHOD: web_extract

[Skip to main content](https://m3.material.io/components/navigation-bar/overview#main_content)[search](https://m3.material.io/search.html) [material\_design\\
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

- Availability & resources
- M3 Expressive update
- Differences from M2

link

Copy linkLink copied

- Use navigation bars in compact
Window widths smaller than 600dp, such as a phone in portrait orientation.
[More on compact window size class](https://m3.material.io/m3/pages/breakpoints/compact) or medium
Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation.
[More on medium window size class](https://m3.material.io/m3/pages/breakpoints/medium) window sizes

- Can contain 3-5 destinations of equal importance

- Destinations don't change. They should be consistent across app screens.


link

Copy linkLink copied

![Two navigation bars of different widths with 4 destinations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fodjau-01.png?alt=media)

Navigation bar for compact and medium window sizes

link

Copy linkLink copied

## Availability & resources

link

Copy linkLink copied

| Type | Resource | Status |
| --- | --- | --- |
| Design |
| [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
| Implementation |
| [Flutter](https://api.flutter.dev/flutter/material/NavigationBar-class.html) | Available |
| [android Jetpack Compose](https://developer.android.com/develop/ui/compose/components/navigation-bar) | Available |
| [android Jetpack Compose: Expressive](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#NavigationBar(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1)) | Available |
| [android Android Views (MDC-Android)](https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md) | Available |
| [android Android Views (MDC-Android): Expressive](https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md) | Available |
| language Web | Unavailable |
| language Web: Expressive | Unavailable |

Close

link

Copy linkLink copied

## M3 Expressive update

link

Copy linkLink copied

**May 2025**

A new flexible navigation bar was introduced to replace the baseline navigation bar. It’s shorter and supports horizontal navigation items in medium windows. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

link

Copy linkLink copied

Variants and naming:

- Baseline navigation bar is no longer recommended

- Added **flexible** navigation bar

  - Shorter height

  - Can be used in medium window sizes with horizontal navigation items

Color:

- Active label changed from **on-surface-variant** to **secondary**


![Navigation bar in M3 Expressive. It’s shorter than the baseline nav bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmae7qe43-02.png?alt=media)

The flexible navigation bar is shorter and can be used in medium windows with horizontal nav items

link

Copy linkLink copied

## Differences from M2

link

Copy linkLink copied

- Color: New color mappings and compatibility with dynamic color
- Elevation: No shadow
- Layout: Container height is taller
- States: The active destination can be indicated with a pill shape in a contrasting color
- Name: Bottom navigation has been renamed **navigation bar**

link

Copy linkLink copied

![M2 nav bar with a drop shadow and no active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ddmjvm-03.png?alt=media)

M2: A drop shadow indicates placement on top of content. Filled and regular weight icons indicate active states.

![M3 nav bar with a surface color and active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmae7pvz8-04.png?alt=media)

M3: Taller and no drop shadow. Filled icons and an active indicator indicate active state.

[arrow\_left\_alt PreviousMenus: Overview](https://m3.material.io/components/menus)[Up next arrow\_right\_altNavigation bar: Specs](https://m3.material.io/components/navigation-bar/specs)

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
