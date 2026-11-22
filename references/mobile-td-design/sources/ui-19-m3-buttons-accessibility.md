URL: https://m3.material.io/components/buttons/accessibility
TITLE: Buttons - Material Design 3: Accessibility
RETRIEVED: 2026-11-22
METHOD: web_extract

[Skip to main content](https://m3.material.io/components/buttons/accessibility#main_content)[search](https://m3.material.io/search.html) [material\_design\\
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
arrow\_drop\_up


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
arrow\_drop\_down


[Navigation bar](https://m3.material.io/components/navigation-bar) [Navigation drawer](https://m3.material.io/components/navigation-drawer) [Navigation rail](https://m3.material.io/components/navigation-rail)

[Radio button](https://m3.material.io/components/radio-button)[Scroll fields](https://m3.material.io/components/scroll-fields)[Search](https://m3.material.io/components/search)

Sheets
arrow\_drop\_down


[Bottom sheets](https://m3.material.io/components/bottom-sheets) [Side sheets](https://m3.material.io/components/side-sheets)

[Sliders](https://m3.material.io/components/sliders)[Snackbar](https://m3.material.io/components/snackbar)[Switch](https://m3.material.io/components/switch)[Tabs](https://m3.material.io/components/tabs)[Text fields](https://m3.material.io/components/text-fields)[Toolbars](https://m3.material.io/components/toolbars)[Tooltips](https://m3.material.io/components/tooltips)

# Buttons

Buttons prompt most actions in a UI.

Resourcesandroidandroid+4

[infoOverview](https://m3.material.io/components/buttons/overview) [styleSpecs](https://m3.material.io/components/buttons/specs) [design\_servicesGuidelines](https://m3.material.io/components/buttons/guidelines) [accessibility\_newAccessibility](https://m3.material.io/components/buttons/accessibility)

On this page

## Buttons

- Use cases
- Interaction & style
- Keyboard navigation
- Labeling elements

link

Copy linkLink copied

## Use cases

People should be able to do the following with assistive technology:

- Use a button to perform an action
- Navigate to and activate a button

link

Copy linkLink copied

## Interaction & style

link

Copy linkLink copied

### Color contrast

Enabled buttons need a 3:1 contrast ratio with the background to meet accessibility best practices.

This is measured from the container for elevated, filled, and tonal button styles, and the label text for outlined and text button styles.

![Diagram of color contrast ratios for buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm13hkn-01.png?alt=media)

Higher contrast helps differentiate elements

link

Copy linkLink copied

### 200% text size

Avoid excessive text wrapping or truncation by choosing concise strings.

On Android, button labels should be kept concise enough to fit within two lines after the text size is increased to 200%. If a button label exceeds this limit and gets truncated, provide an alternative way to access the full content in a single tap.

![200% text size on a mobile screen. The overly long button text wraps to a second line: “Download playlist for offline access”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm14hok-02-caution.png?alt=media)

exclamation Caution
Avoid excessive text wrapping or truncation by choosing concise strings

link

Copy linkLink copied

### Rapid clicks

On the web, you can use a modified motion curve to avoid resonant effects from overlapping animations. This provides a smoother experience for interactions where you anticipate multiple clicks or taps in succession.

pause

Use the modified motion curve if rapid click or pointer interactions are expected

link

Copy linkLink copied

## Keyboard navigation

link

Copy linkLink copied

| Keys | Actions |
| --- | --- |
| Tab | Navigate to a button |
| Space or Enter | Activate a button |

link

Copy linkLink copied

## Labeling elements

link

Copy linkLink copied

The accessibility
Accessible design makes products usable for people with all kinds of abilities.
label for a button should match the visible label text on the button such as **Done**, **Send**, or **Reply**.

It can contain extra contextual information if necessary.

![Accessibility tags for a text-only button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm17kt7-03.png?alt=media)

[arrow\_left\_alt PreviousButtons: Guidelines](https://m3.material.io/components/buttons/guidelines)[Up next arrow\_right\_altExtended FABs: Overview](https://m3.material.io/components/extended-fab)

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
