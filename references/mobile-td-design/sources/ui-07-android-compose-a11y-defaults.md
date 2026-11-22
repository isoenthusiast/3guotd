URL: https://developer.android.com/develop/ui/compose/accessibility/api-defaults
TITLE: API defaults | Jetpack Compose - Android Developers
RETRIEVED: 2026-11-22
METHOD: web_extract

[Skip to main content](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#main-content)

[![Android Developers](https://www.gstatic.com/devrel-devsite/prod/vc11e4c9d4c060345ba98585d538d4546e842f4a6ee5c5f9e85be4bd345767217/android/images/lockup.png)](https://developer.android.com/)

`/`

Language

- [English](https://developer.android.com/develop/ui/compose/accessibility/api-defaults)
- [Deutsch](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=de)
- [Español – América Latina](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=es-419)
- [Français](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=fr)
- [Indonesia](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=id)
- [Italiano](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=it)
- [Polski](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=pl)
- [Português – Brasil](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=pt-br)
- [Tiếng Việt](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=vi)
- [Türkçe](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=tr)
- [Русский](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=ru)
- [עברית](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=he)
- [العربيّة](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=ar)
- [فارسی](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=fa)
- [हिंदी](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=hi)
- [বাংলা](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=bn)
- [ภาษาไทย](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=th)
- [中文 – 简体](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=zh-cn)
- [中文 – 繁體](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=zh-tw)
- [日本語](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=ja)
- [한국어](https://developer.android.com/develop/ui/compose/accessibility/api-defaults?hl=ko)

[Android Studio](https://developer.android.com/studio)

[Sign in](https://developer.android.com/_d/signin?continue=https%3A%2F%2Fdeveloper.android.com%2Fdevelop%2Fui%2Fcompose%2Faccessibility%2Fapi-defaults&prompt=select_account)

- [Develop](https://developer.android.com/develop)
- [Core areas](https://developer.android.com/develop/core-areas)
- [UI](https://developer.android.com/develop/ui)

- On this page
- [Minimum touch target sizes](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#minimum-target-sizes)
- [Graphic elements](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#graphic-elements)
- [Interactive elements](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#interactive-elements)
- [Custom components](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#custom-components)

[Recommended for you](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#recommendations-link)

- [Checkbox](https://developer.android.com/reference/kotlin/androidx/compose/material3/Checkbox.composable?rec=CktodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9kZXZlbG9wL3VpL2NvbXBvc2UvYWNjZXNzaWJpbGl0eS9hcGktZGVmYXVsdHMQARgJIAIoATAJOgMzLjc)
Updated Nov 18, 2026

- [RadioButton](https://developer.android.com/reference/kotlin/androidx/compose/material3/RadioButton.composable?rec=CktodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9kZXZlbG9wL3VpL2NvbXBvc2UvYWNjZXNzaWJpbGl0eS9hcGktZGVmYXVsdHMQAhgJIAIoATAJOgMzLjc)
Updated Nov 18, 2026


- [Android Developers](https://developer.android.com/)
- [Develop](https://developer.android.com/develop)
- [Core areas](https://developer.android.com/develop/core-areas)
- [UI](https://developer.android.com/develop/ui)
- [Docs](https://developer.android.com/develop/ui/compose/documentation)

Was this helpful?

# API defaults    Stay organized with collections      Save and categorize content based on your preferences.

- On this page
- [Minimum touch target sizes](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#minimum-target-sizes)
- [Graphic elements](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#graphic-elements)
- [Interactive elements](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#interactive-elements)
- [Custom components](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#custom-components)

Material, Compose UI, and Foundation APIs implement and offer many accessible
practices by default. They contain built-in semantics that follow their
specific role and function. This means most accessibility support is provided
with little or no additional work.

Using the appropriate APIs for the appropriate purpose means that components
usually come with predefined accessibility behaviors that cover standard
use cases. However, always double-check whether these defaults fit your
accessibility needs. If not, Compose provides ways to cover more
specific requirements.

Understanding the default accessibility semantics and patterns in Compose
APIs helps you use them with accessibility in mind. It also helps you support
accessibility in more custom components.

## Minimum touch target sizes

Any on-screen element that someone can click, touch, or interact with must be
large enough for reliable interaction. When sizing these elements, make sure to
set the minimum size to 48dp to correctly follow the [Material Design\\
accessibility guidelines](https://m3.material.io/foundations/accessible-design/overview).

Material components—like [`Checkbox`](https://developer.android.com/reference/kotlin/androidx/compose/material3/Checkbox.composable#Checkbox(kotlin.Boolean,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.material3.CheckboxColors,androidx.compose.foundation.interaction.MutableInteractionSource)), [`RadioButton`](https://developer.android.com/reference/kotlin/androidx/compose/material3/RadioButton.composable#RadioButton(kotlin.Boolean,kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.material3.RadioButtonColors,androidx.compose.foundation.interaction.MutableInteractionSource)), [`Switch`](https://developer.android.com/reference/kotlin/androidx/compose/material3/Switch.composable#Switch(kotlin.Boolean,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Boolean,androidx.compose.material3.SwitchColors,androidx.compose.foundation.interaction.MutableInteractionSource)),
[`Slider`](https://developer.android.com/reference/kotlin/androidx/compose/material3/Slider.composable#Slider(kotlin.Float,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,kotlin.ranges.ClosedFloatingPointRange,kotlin.Int,kotlin.Function0,androidx.compose.material3.SliderColors,androidx.compose.foundation.interaction.MutableInteractionSource)), and [`Surface`](https://developer.android.com/reference/kotlin/androidx/compose/material3/Surface.composable#Surface(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp,androidx.compose.foundation.BorderStroke,kotlin.Function0))—set this minimum size internally, but only
when the component can receive user actions. For example, when a `Checkbox` has
its `onCheckedChange` parameter set to a non-null value, the checkbox includes
padding to have a width and height of at least 48 dp.

```
@Composable
private fun CheckableCheckbox() {
    Checkbox(checked = true, onCheckedChange = {})
}AccessibilitySnippets.kt
```

![A checkbox with the default padding with a width and height of 48 dp.](https://developer.android.com/static/develop/ui/compose/images/a11y-checkbox-padding.png)**Figure 1.** A checkbox with default padding.

When the `onCheckedChange` parameter is set to null, the padding is not
included, because the component cannot be interacted with directly.

```
@Composable
private fun NonClickableCheckbox() {
    Checkbox(checked = true, onCheckedChange = null)
}AccessibilitySnippets.kt
```

![A checkbox that has no padding.](https://developer.android.com/static/develop/ui/compose/images/a11y-checkbox-no-padding.png)**Figure 2.** A checkbox without padding.

When implementing selection controls like `Switch`, `RadioButton`, or
`Checkbox`, you typically lift the clickable behavior to a parent container by
setting the click callback on the composable to `null`, and adding a
`toggleable` or `selectable` modifier to the parent composable.

```
@Composable
private fun CheckableRow() {
    MaterialTheme {
        var checked by remember { mutableStateOf(false) }
        Row(
            Modifier
                .toggleable(
                    value = checked,
                    role = Role.Checkbox,
                    onValueChange = { checked = !checked }
                )
                .padding(16.dp)
                .fillMaxWidth()
        ) {
            Text("Option", Modifier.weight(1f))
            Checkbox(checked = checked, onCheckedChange = null)
        }
    }
}AccessibilitySnippets.kt
```

![A checkbox next to the text 'Option' that is being selected and deselected.](https://developer.android.com/static/develop/ui/compose/images/a11y-parent-clickable.gif)**Figure 3.** A checkbox with clickable behavior.

When the size of a clickable composable is smaller than the minimum touch target
size, Compose still increases the touch target size. It does so by expanding the
touch target size outside of the boundaries of the composable.

The following example contains a very small clickable `Box`. The touch target
area is automatically expanded beyond the boundaries of the `Box`, so tapping
next to the `Box` still triggers the click event.

```
@Composable
private fun SmallBox() {
    var clicked by remember { mutableStateOf(false) }
    Box(
        Modifier
            .size(100.dp)
            .background(if (clicked) Color.DarkGray else Color.LightGray)
    ) {
        Box(
            Modifier
                .align(Alignment.Center)
                .clickable { clicked = !clicked }
                .background(Color.Black)
                .size(1.dp)
        )
    }
}AccessibilitySnippets.kt
```

![A very small clickable box that is expanded to a larger touch target by tapping next to the box.](https://developer.android.com/static/develop/ui/compose/images/a11y-expanded-target.gif)**Figure 4.** A very small clickable box that is expanded to a larger touch target.

To prevent possible overlap between touch areas of different composables, always
use a large enough minimum size for the composable. In the example, that would
mean using the `sizeIn` modifier to set the minimum size for the inner box:

```
@Composable
private fun LargeBox() {
    var clicked by remember { mutableStateOf(false) }
    Box(
        Modifier
            .size(100.dp)
            .background(if (clicked) Color.DarkGray else Color.LightGray)
    ) {
        Box(
            Modifier
                .align(Alignment.Center)
                .clickable { clicked = !clicked }
                .background(Color.Black)
                .sizeIn(minWidth = 48.dp, minHeight = 48.dp)
        )
    }
}AccessibilitySnippets.kt
```

![The very small box from the previous example is increased in size to create a larger touch target.](https://developer.android.com/static/develop/ui/compose/images/a11y-larger-inner-box.png)**Figure 5.** A larger box touch target.

If the element must keep a smaller visible size, use the
[`minimumInteractiveComponentSize`](https://developer.android.com/reference/kotlin/androidx/compose/material3/minimumInteractiveComponentSize.modifier#(androidx.compose.ui.Modifier).minimumInteractiveComponentSize()) modifier from Material 3 instead. It
reserves at least 48 dp of layout space in each dimension and centers the
element in that space, so the element keeps its drawn size and the elements
around it move to make room. The modifier doesn't expand the touch target
itself: it leaves room in the layout for the expansion described earlier.
Material components such as `Checkbox` use this modifier internally. Put it
before any size modifier, because a size modifier before it limits the space
that it can reserve.

```
@Composable
private fun MinimumInteractiveBox() {
    var clicked by remember { mutableStateOf(false) }
    Row(verticalAlignment = Alignment.CenterVertically) {
        Box(
            Modifier
                .clickable { clicked = !clicked }
                .minimumInteractiveComponentSize()
                .size(24.dp)
                .background(if (clicked) Color.DarkGray else Color.Black)
        )
        Text("Option")
    }
}AccessibilitySnippets.kt
```

## Graphic elements

When you define an [`Image`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/Image.composable#Image(androidx.compose.ui.graphics.ImageBitmap,kotlin.String,androidx.compose.ui.Modifier,androidx.compose.ui.Alignment,androidx.compose.ui.layout.ContentScale,kotlin.Float,androidx.compose.ui.graphics.ColorFilter,androidx.compose.ui.graphics.FilterQuality)) or [`Icon`](https://developer.android.com/reference/kotlin/androidx/compose/material3/Icon.composable#Icon(androidx.compose.ui.graphics.ImageBitmap,kotlin.String,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color)) composable, there is no
automatic way for the Android framework to understand what the app is
displaying. You need to pass a textual description of the graphic element.

Imagine a screen where the user can share the current page with friends. This
screen contains a clickable share icon:

![A strip of four clickable icons, with the 'share' icon highlighted.](https://developer.android.com/static/develop/ui/compose/images/a11y-share-icon.png)**Figure 6.** A row of clickable icons with the 'Share' icon selected.

Based on the icon alone, the Android framework can't describe it to a visually
impaired user. The Android framework needs an additional textual description of
the icon.

The `contentDescription` parameter describes a graphic element. Use a localized
string, as it is visible to the user.

```
@Composable
private fun ShareButton(onClick: () -> Unit) {
    IconButton(onClick = onClick) {
        Icon(
            imageVector = Icons.Filled.Share,
            contentDescription = stringResource(R.string.label_share)
        )
    }
}AccessibilitySnippets.kt
```

Some graphic elements are purely decorative and you might not want to
communicate them to the user. When you set the `contentDescription` parameter
to `null`, you indicate to the Android framework that this element does not
have associated actions or state.

```
@Composable
private fun PostImage(post: Post, modifier: Modifier = Modifier) {
    val image = post.imageThumb ?: painterResource(R.drawable.placeholder_1_1)

    Image(
        painter = image,
        // Specify that this image has no semantic meaning
        contentDescription = null,
        modifier = modifier
            .size(40.dp, 40.dp)
            .clip(MaterialTheme.shapes.small)
    )
}AccessibilitySnippets.kt
```

[`contentDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) is mainly meant to be used for graphic elements,
such as images. Material components, like `Button` or `Text`, and actionable
behaviors, like `clickable` or `toggleable`, come with other predefined
semantics that describe their intrinsic behavior, and can be changed through
other Compose APIs.

## Interactive elements

Material and Foundation Compose APIs make UI elements that users can interact
with through the [`clickable`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/clickable.modifier#(androidx.compose.ui.Modifier).clickable(kotlin.Boolean,kotlin.String,androidx.compose.ui.semantics.Role,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function0)) and [`toggleable`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#(androidx.compose.ui.Modifier).toggleable(kotlin.Boolean,kotlin.Boolean,androidx.compose.ui.semantics.Role,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function1)) modifier APIs. Because
interactable components might consist of multiple elements, `clickable` and
`toggleable` merge their children's semantics by default, so that the component
is treated as one logical entity.

For example, a Material `Button` might consist of a child icon and some
text. Instead of treating the children as individuals, a Material
`Button` merges its children semantics by default, so that accessibility
services can group them accordingly:

![Buttons with unmerged versus merged children semantics.](https://developer.android.com/static/develop/ui/compose/images/buttons_unmerged_merged.png)**Figure 7.** Buttons with unmerged versus merged children semantics.

Similarly, using the [`clickable`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/clickable.modifier#(androidx.compose.ui.Modifier).clickable(kotlin.Boolean,kotlin.String,androidx.compose.ui.semantics.Role,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function0)) modifier also causes a composable to
merge its descendants' semantics into a single entity, which is sent to
accessibility services with a corresponding action representation:

```
Row(
    // Uses `mergeDescendants = true` under the hood
    modifier = Modifier.clickable { openArticle() }
) {
    Icon(
        painter = painterResource(R.drawable.ic_logo),
        contentDescription = "Open",
    )
    Text("Accessibility in Compose")
}AccessibilitySnippets.kt
```

You can also set a specific `onClickLabel` on the parent clickable to provide
additional information to accessibility services and offer a more polished
representation of the action:

```
Row(
    modifier = Modifier
        .clickable(onClickLabel = "Open this article") {
            openArticle()
        }
) {
    Icon(
        painter = painterResource(R.drawable.ic_logo),
        contentDescription = "Open"
    )
    Text("Accessibility in Compose")
}AccessibilitySnippets.kt
```

Using TalkBack as an example, this `clickable` modifier and its click label
would enable TalkBack to provide an action hint of "Double tap to open this
article", rather than the more generic default feedback of "Double tap to
activate".

This feedback changes depending on the type of action. A long click would
provide a TalkBack hint of "Double tap and hold to", followed by a label:

```
Row(
    modifier = Modifier
        .combinedClickable(
            onLongClickLabel = "Bookmark this article",
            onLongClick = { addToBookmarks() },
            onClickLabel = "Open this article",
            onClick = { openArticle() },
        )
) {}AccessibilitySnippets.kt
```

In some cases, you may not have direct access to the `clickable` modifier (for
example, when it's set somewhere in a lower nested layer),but still want to
change the announcement label from the default. To do this, split setting the
`clickable` from modifying the announcement by using the [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/semantics.modifier#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1))
modifier and setting the click label there, to modify the action representation:

```
@Composable
private fun ArticleList(openArticle: () -> Unit) {
    NestedArticleListItem(
        // Clickable is set separately, in a nested layer:
        onClickAction = openArticle,
        // Semantics are set here:
        modifier = Modifier.semantics {
            onClick(
                label = "Open this article",
                action = {
                    // Not needed here: openArticle()
                    true
                }
            )
        }
    )
}AccessibilitySnippets.kt
```

You don't need to pass the click action twice. Existing Compose APIs, such as
`clickable` or `Button`, handle this for you. The [merging logic](https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt;l=468?q=ActionPropertyKey) verifies
that the outermost modifier label and action are taken for the information that
is present. In the previous example, the `NestedArticleListItem` automatically
passes the `openArticle()` click action to its `clickable` semantics. You can
leave the click action null in the second semantics modifier action. However,
the click label is taken from the second semantics modifier
`onClick(label = "Open this document")` because it wasn't present in the first.

You might run into scenarios where you expect children semantics to be merged
into a parent one, but that doesn't happen. See [Merging and clearing](https://developer.android.com/develop/ui/compose/accessibility/merging-clearing)
for more in-depth information.

## Custom components

When building a custom component, review the implementation of a
similar component in the Material library or other Compose libraries. Then,
mimic or modify its accessibility behavior as appropriate. For example, if you
replace the Material [`Checkbox`](https://developer.android.com/reference/kotlin/androidx/compose/material3/Checkbox.composable#Checkbox(kotlin.Boolean,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.material3.CheckboxColors,androidx.compose.foundation.interaction.MutableInteractionSource)) with your own implementation, looking at
the existing `Checkbox` implementation will remind you to add the
[`triStateToggleable`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/selection/triStateToggleable.modifier#(androidx.compose.ui.Modifier).triStateToggleable(androidx.compose.ui.state.ToggleableState,kotlin.Boolean,androidx.compose.ui.semantics.Role,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function0)) modifier, which
handles the accessibility
properties for the component. Additionally, make heavy use of Foundation
modifiers, as these include built-in accessibility considerations and existing
Compose practices covered in this section.

You can also find an example of a custom toggle component in the [Clear and set\\
semantics section](https://developer.android.com/develop/ui/compose/accessibility/merging-clearing#clear-and-set), as well as more detailed information on how to support
accessibility in custom components in the [API guidelines](https://github.com/androidx/androidx/blob/androidx-main/compose/docs/compose-component-api-guidelines.md).

## Recommended for you

### [Checkbox](https://developer.android.com/reference/kotlin/androidx/compose/material3/Checkbox.composable?rec=CktodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9kZXZlbG9wL3VpL2NvbXBvc2UvYWNjZXNzaWJpbGl0eS9hcGktZGVmYXVsdHMQARgJIAIoATAJOgMzLjc)

API reference packages and classes for Android app developers.

Updated Nov 18, 2026

### [RadioButton](https://developer.android.com/reference/kotlin/androidx/compose/material3/RadioButton.composable?rec=CktodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9kZXZlbG9wL3VpL2NvbXBvc2UvYWNjZXNzaWJpbGl0eS9hcGktZGVmYXVsdHMQAhgJIAIoATAJOgMzLjc)

API reference packages and classes for Android app developers.

Updated Nov 18, 2026

Was this helpful?

Content and code samples on this page are subject to the licenses described in the [Content License](https://developer.android.com/license). Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.

Last updated 2026-11-10 UTC.




\[\[\["Easy to understand","easyToUnderstand","thumb-up"\],\["Solved my problem","solvedMyProblem","thumb-up"\],\["Other","otherUp","thumb-up"\]\],\[\["Missing the information I need","missingTheInformationINeed","thumb-down"\],\["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"\],\["Out of date","outOfDate","thumb-down"\],\["Samples / code issue","samplesCodeIssue","thumb-down"\],\["Other","otherDown","thumb-down"\]\],\["Last updated 2026-11-10 UTC."\],\[\],\[\]\]
