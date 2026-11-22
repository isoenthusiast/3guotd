URL: https://developer.android.com/docs/quality-guidelines/core-app-quality
TITLE: Core app quality guidelines | Android Developers
RETRIEVED: 2026-11-22
METHOD: web_extract

[Skip to main content](https://developer.android.com/docs/quality-guidelines/core-app-quality#main-content)

[![Android Developers](https://www.gstatic.com/devrel-devsite/prod/vc11e4c9d4c060345ba98585d538d4546e842f4a6ee5c5f9e85be4bd345767217/android/images/lockup.png)](https://developer.android.com/)

`/`

Language

- [English](https://developer.android.com/docs/quality-guidelines/core-app-quality)
- [Deutsch](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=de)
- [Español – América Latina](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=es-419)
- [Français](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=fr)
- [Indonesia](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=id)
- [Italiano](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=it)
- [Polski](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=pl)
- [Português – Brasil](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=pt-br)
- [Tiếng Việt](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=vi)
- [Türkçe](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=tr)
- [Русский](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=ru)
- [עברית](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=he)
- [العربيّة](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=ar)
- [فارسی](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=fa)
- [हिंदी](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=hi)
- [বাংলা](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=bn)
- [ภาษาไทย](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=th)
- [中文 – 简体](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=zh-cn)
- [中文 – 繁體](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=zh-tw)
- [日本語](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=ja)
- [한국어](https://developer.android.com/docs/quality-guidelines/core-app-quality?hl=ko)

[Android Studio](https://developer.android.com/studio)

[Sign in](https://developer.android.com/_d/signin?continue=https%3A%2F%2Fdeveloper.android.com%2Fdocs%2Fquality-guidelines%2Fcore-app-quality&prompt=select_account)

- [App quality](https://developer.android.com/quality)

- On this page
- [Guidelines](https://developer.android.com/docs/quality-guidelines/core-app-quality#guidelines)
  - [User experience](https://developer.android.com/docs/quality-guidelines/core-app-quality#user_experience)
  - [Functionality](https://developer.android.com/docs/quality-guidelines/core-app-quality#functionality)
  - [Performance and stability](https://developer.android.com/docs/quality-guidelines/core-app-quality#performance_and_stability)
  - [Privacy and security](https://developer.android.com/docs/quality-guidelines/core-app-quality#privacy_and_security)
  - [Google Play](https://developer.android.com/docs/quality-guidelines/core-app-quality#google_play)
- [Test environment](https://developer.android.com/docs/quality-guidelines/core-app-quality#test_environment)
  - [StrictMode](https://developer.android.com/docs/quality-guidelines/core-app-quality#strictmode)
- [Tests](https://developer.android.com/docs/quality-guidelines/core-app-quality#tests)
  - [User experience](https://developer.android.com/docs/quality-guidelines/core-app-quality#user_experience_tests)
  - [Functionality](https://developer.android.com/docs/quality-guidelines/core-app-quality#functionality_tests)
  - [Performance and stability](https://developer.android.com/docs/quality-guidelines/core-app-quality#performance_and_stability_tests)
  - [Privacy and security](https://developer.android.com/docs/quality-guidelines/core-app-quality#privacy_and_security_tests)
  - [Google Play](https://developer.android.com/docs/quality-guidelines/core-app-quality#google_play_tests)
- [Archive](https://developer.android.com/docs/quality-guidelines/core-app-quality#archive)

- [Android Developers](https://developer.android.com/)
- [Design & Plan](https://developer.android.com/design)
- [App quality](https://developer.android.com/quality)
- [User experience](https://developer.android.com/quality/user-experience)

Was this helpful?

# Core app quality guidelines    Stay organized with collections      Save and categorize content based on your preferences.

- On this page
- [Guidelines](https://developer.android.com/docs/quality-guidelines/core-app-quality#guidelines)
  - [User experience](https://developer.android.com/docs/quality-guidelines/core-app-quality#user_experience)
  - [Functionality](https://developer.android.com/docs/quality-guidelines/core-app-quality#functionality)
  - [Performance and stability](https://developer.android.com/docs/quality-guidelines/core-app-quality#performance_and_stability)
  - [Privacy and security](https://developer.android.com/docs/quality-guidelines/core-app-quality#privacy_and_security)
  - [Google Play](https://developer.android.com/docs/quality-guidelines/core-app-quality#google_play)
- [Test environment](https://developer.android.com/docs/quality-guidelines/core-app-quality#test_environment)
  - [StrictMode](https://developer.android.com/docs/quality-guidelines/core-app-quality#strictmode)
- [Tests](https://developer.android.com/docs/quality-guidelines/core-app-quality#tests)
  - [User experience](https://developer.android.com/docs/quality-guidelines/core-app-quality#user_experience_tests)
  - [Functionality](https://developer.android.com/docs/quality-guidelines/core-app-quality#functionality_tests)
  - [Performance and stability](https://developer.android.com/docs/quality-guidelines/core-app-quality#performance_and_stability_tests)
  - [Privacy and security](https://developer.android.com/docs/quality-guidelines/core-app-quality#privacy_and_security_tests)
  - [Google Play](https://developer.android.com/docs/quality-guidelines/core-app-quality#google_play_tests)
- [Archive](https://developer.android.com/docs/quality-guidelines/core-app-quality#archive)

To provide a solid foundation for a quality app, follow the core app quality
guidelines.

The guidelines define the minimum quality that all apps should meet.

Adaptive app quality

Android apps run on a wide variety of devices—everything from compact phones to tablets, foldables, desktops, connected displays, car infotainment systems, TV, and XR. Windowing modes like split‑screen and desktop windowing enable apps to run in resizable portions of a screen.

Follow the [adaptive app quality](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality) guidelines—in conjunction with the core app quality guidelines—to:

- Create apps optimized for all form factors and display sizes
- Get your apps ranked higher in Google Play listings and search
- Acquire more users and increase user retention

## Guidelines

The following core guidelines help you build a basic, high‑quality app.

### User experience

Standard Android visual design and interaction patterns provide a consistent and
intuitive user experience.

Use [Material Design components](https://m3.material.io/components) to create your app's user interface in place
of Android platform components where possible. Material Design provides a modern
Android look and feel along with UI consistency across Android versions.

#### Usability

| ID | Tests | Description |
| --- | --- | --- |
| Consistent\_UX | [T-Consistent\_UX](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Consistent_UX),<br>[T-SD\_Card](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-SD_Card) | App provides a consistent user experience for all app use cases on all form factors. |
| App\_Switcher | [T-App\_Switcher](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-App_Switcher),<br>[T-SD\_Card](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-SD_Card) | App goes into the background when focus switches to another app. App returns to the foreground when reactivated from the **Recents** app switcher. |
| Sleep\_Resume | [T-Sleep\_Resume](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Sleep_Resume),<br>[T-SD\_Card](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-SD_Card) | When the app is the foreground app, it pauses when the device goes to sleep and resumes when the device wakes up. |
| Lock\_Resume | [T-Lock\_Resume](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Lock_Resume),<br>[T-SD\_Card](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-SD_Card) | When the app is the foreground app, it pauses when the device is locked and resumes when the device is unlocked. |

#### User interface

| ID | Tests | Description |
| --- | --- | --- |
| Display\_State\_Parity | [T-Orientation\_Transitions](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Orientation_Transitions) | Display orientations and fold states expose essentially the same features and actions and preserve functional parity. |
| Fullscreen\_Display | [T-Orientation\_Transitions](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Orientation_Transitions) | App fills the app window in both orientations and is not letterboxed because of configuration changes, including device folding and unfolding.<br>Minor letterboxing to compensate for small variations in screen geometry is acceptable. |
| Orientation\_Transitions | [T-Orientation\_Transitions](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Orientation_Transitions) | App handles rapid transitions between display orientations and device folding and unfolding with no display rendering problems and without losing state. |

#### Visual quality

| ID | Tests | Description |
| --- | --- | --- |
| Graphic\_Quality | [T-Graphic\_Quality](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Graphic_Quality) | App displays graphics, text, images, and other UI elements without noticeable distortion, blurring, or pixelation.<br>- App uses [vector drawables](https://developer.android.com/guide/topics/graphics/vector-drawable-resources) where possible<br>- App uses high-quality graphics for all targeted screen sizes and form factors<br>- No aliasing at the edges of menus, buttons, and other UI elements |
| Line\_Length | [T-Line\_Length](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Line_Length) | App ensures readability of text and text blocks by limiting line length to 45-75 characters (including spaces) for each of the app's supported languages. |
| Theme\_Support | [T-Theme\_Support](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Theme_Support) | The app's content, and all web content accessed by the app, support both light and [dark themes](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme). |

#### Navigation

| ID | Tests | Description |
| --- | --- | --- |
| Back\_Button\_Nav | [T-Back\_Nav](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Back_Nav) | App supports standard [back button navigation](https://developer.android.com/design/patterns/navigation) and does not make use of any custom, onscreen back button prompts. |
| Back\_Gesture\_Nav | [T-Back\_Nav](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Back_Nav) | App supports [gesture navigation](https://developer.android.com/training/gestures/gesturenav) for going back and going to the home screen. |
| State\_Preservation | [T-State\_Preservation](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-State_Preservation),<br>[T-Back\_Nav](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Back_Nav) | The app preserves user or app state when leaving the foreground and prevents accidental data loss due to back navigation and other state changes.<br>When returning to the foreground, the app restores the preserved state and any pending stateful transactions. Examples include changes to editable fields, game progress, menus, videos, and other sections of the app.<br>- When the app is resumed from the **Recents** app switcher, the app returns the user to the exact state in which the app was last used.<br>- When the app is resumed after the device wakes from the sleep (locked) state, the app returns the user to the exact state in which the app was last used.<br>- When the app is relaunched from **Home** or **All Apps**, it should do one of the following, depending on how much time has passed since the app was last used:<br>  - If the app was last used a short time ago (minutes), restore the app state as closely as possible to its previous state.<br>  - If more time has passed since the app was last used, try to restore the app as closely as possible to its previous state or start the app from its home screen or some other default state. |

#### Notifications

| ID | Tests | Description |
| --- | --- | --- |
| Notification\_Quality | [T-Notification\_Quality](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Notification_Quality) | [Notifications](https://developer.android.com/design/ui/mobile/guides/home-screen/notifications) provide relevant information related to your app.<br>- Don't use notifications for cross-promotion or advertising of another product, as this is strictly prohibited by the Play Store.<br>- [Notification channels](https://developer.android.com/training/notify-user/channels) are defined according to best practices, rather than serving all notifications from one channel.<br>- Select [the correct notification priority](https://android-developers.googleblog.com/2018/12/notifications-from-twitter-app.html).<br>- Stack multiple notifications into [a single notification group](https://developer.android.com/training/notify-user/group) when possible.<br>- Set [timeouts](https://developer.android.com/reference/kotlin/androidx/core/app/NotificationCompat.Builder#setTimeoutAfter(long)) for notifications where appropriate.<br>- Notifications are persistent only if related to ongoing events, such as music playback or a phone call. For more information, see the [Functionality section](https://developer.android.com/docs/quality-guidelines/core-app-quality#fn). |
| Conversation\_Quality | [T-Notification\_Quality](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Notification_Quality) | For messaging apps, social apps and conversations:<br>- Use the [`MessagingStyle`](https://developer.android.com/reference/kotlin/androidx/core/app/NotificationCompat.MessagingStyle) notifications for conversations.<br>- Support the [direct reply action](https://developer.android.com/training/notify-user/build-notification#reply-action).<br>- Support [conversation shortcuts](https://developer.android.com/guide/topics/ui/conversations#shortcuts), and implement best practices for getting the [best direct share ranking](https://developer.android.com/develop/ui/compose/sharing/direct-share-targets#get-best-ranking).<br>   <br>- Support [bubbles](https://developer.android.com/guide/topics/ui/bubbles). |

#### Accessibility

| ID | Tests | Description |
| --- | --- | --- |
| Touch\_Target\_Size | [T-Touch\_Target\_Size](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Touch_Target_Size) | Touch targets are at least 48 dp. See the Material Design [Target sizes](https://m3.material.io/foundations/designing/structure#dab862b1-e042-4c40-b680-b484b9f077f6) guidelines. |
| Visual\_Contrast | [T-Visual\_Contrast](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Visual_Contrast) | App text and foreground content maintain the following contrast ratios with the app background:<br>- 3:1 for large text and graphics<br>- 4.5:1 for small text (less than 18 pt or less than 14 pt if text is bold)<br>Learn more about [color and contrast](https://m3.material.io/foundations/designing/color-contrast). |
| Content\_Description | [T-Content\_Description](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Content_Description) | [Describe each UI element](https://developer.android.com/guide/topics/ui/accessibility/apps#describe-ui-element),<br> except for `TextView`, using `contentDescription`. |

### Functionality

Your app should implement the following functional behavior.

#### Audio

| ID | Tests | Description |
| --- | --- | --- |
| Audio\_Playback\_Start | [T-Audio\_Playback\_Start](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Audio_Playback_Start) | When the user initiates audio playback, the app should do one of the following within one second:<br>- Start playing the audio<br>- Provide a visual indicator that the audio data is being prepared |
| Audio\_Focus\_Request | [T-Audio\_Focus\_Request](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Audio_Focus_Request) | App should request [audio focus](https://developer.android.com/guide/topics/media-apps/audio-focus) when audio starts playing and abandon audio focus when playback stops. |
| Audio\_Focus\_Change | [T-Audio\_Focus\_Change](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Audio_Focus_Change) | App should [handle other apps' requests for audio focus](https://developer.android.com/guide/topics/media-apps/audio-focus#audio-focus-change). For example, an app might reduce playback volume when another app plays speech. |
| Audio\_Playback\_Background | [T-Audio\_Playback\_Background](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Audio_Playback_Background) | App should support [background playback](https://developer.android.com/media/platform/mediaplayer/background).<br>App must use a foreground service to prevent the system from killing the app process once the app is no longer visible. The app must also display a persistent, non‑dismissible notification in the status bar or on the lock screen to inform the user that the app is running.<br>Users should be able to control playback using the notification or lock screen controls or the controls on a connected accessory. |
| Audio\_Notification\_Style | [T-Audio\_Notification\_Style](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Audio_Notification_Style) | When the app plays audio in the background, app must create a [notification styled with `MediaStyle`](https://android-developers.googleblog.com/2020/08/playing-nicely-with-media-controls.html). |
| Audio\_Playback\_Resume | [T-Audio\_Playback\_Resume](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Audio_Playback_Resume) | If the app is in the background and audio is paused, audio resumes when the app returns to the foreground, or the app must indicate to the user that playback is in a paused state. |

#### Video

| ID | Tests | Description |
| --- | --- | --- |
| Video\_PiP | [T-Video\_PiP](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Video_PiP) | If the app plays video, app should support [picture-in-picture](https://developer.android.com/guide/topics/ui/picture-in-picture) playback. |
| Video\_Encoding | [T-Video\_Encoding](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Video_Encoding) | If the app encodes video, app should do so using the [HEVC video compression standard](https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding). |
| Video\_Playback\_Background | [T-Video\_Playback\_Background](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Video_Playback_Background) | App supports background playback of video when the app is not the topmost app, including when the app window is:<br>- Minimized<br>- Behind other windows or system UI (for example, notification shade or home/lock screen)<br>- Off the visible desktop screen |

#### Sharing

| ID | Tests | Description |
| --- | --- | --- |
| System\_Sharesheet | [T-System\_Sharesheet](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-System_Sharesheet) | App should use the [Android Sharesheet](https://developer.android.com/develop/ui/compose/sharing/send) when sharing content. App can suggest targets that are unavailable to custom solutions. |

#### Background services

| ID | Tests | Description |
| --- | --- | --- |
| Background\_Service\_Optimization | [T-Background\_Service\_Optimization](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Background_Service_Optimization) | App avoids running unnecessarily long services in the background to ensure the smooth running of the user's device.<br>**Note:** The system applies various [restrictions on background services](https://developer.android.com/about/versions/oreo/background#services).<br>The following are poor uses of background services:<br>- Maintaining a network connection for notifications<br>- Maintaining a Bluetooth connection<br>- Keeping the GPS powered on<br>For more information, see [Background tasks overview](https://developer.android.com/guide/background#categories_of_background_tasks). |

### Performance and stability

Your app should provide optimal performance, stability, compatibility, and responsiveness.

#### Performance

| ID | Tests | Description |
| --- | --- | --- |
| App\_Startup\_Time | [T-App\_Startup\_Time](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-App_Startup_Time) | [App loads quickly](https://medium.com/androiddevelopers/testing-app-startup-performance-36169c27ee55) or provides onscreen feedback to the user (a progress indicator or similar cue) if the app takes longer than two seconds to load. |
| Rendering\_Performance | [T-Rendering\_Performance](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Rendering_Performance) | App renders frames every 16 (or fewer) milliseconds to display at least 60 frames per second. For help with rendering issues, see [Slow rendering](https://developer.android.com/topic/performance/issues/render). |
| StrictMode\_Compliance | [T-StrictMode\_Compliance](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-StrictMode_Compliance) | With [`StrictMode`](https://developer.android.com/reference/kotlin/android/os/StrictMode) enabled (see the [StrictMode](https://developer.android.com/docs/quality-guidelines/core-app-quality#strictmode) testing section), no red flashes (performance warnings from `StrictMode`) are visible when testing the app. |

#### Stability

| ID | Tests | Description |
| --- | --- | --- |
| Stability\_ANR | [T-Stability\_ANR](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Stability_ANR) | App does not [crash](https://developer.android.com/topic/performance/issues/crash) or block the UI thread causing [ANR (Android Not Responding)](https://developer.android.com/topic/performance/issues/anr) errors. Use the Google Play [pre-launch report](https://support.google.com/googleplay/android-developer/answer/9842757) to identify potential stability issues. After deployment, monitor the [Android Vitals](https://developer.android.com/google/play/vitals) page in the Google Play console. |

#### SDK

| ID | Tests | Description |
| --- | --- | --- |
| Android\_Platform\_Compatibility | [T-Android\_Platform\_Compatibility](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Android_Platform_Compatibility) | App runs on the latest public version of the Android platform without crashing or severely impacting core functionality. |
| Target\_SDK\_Version | [T-Target\_SDK\_Version](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Target_SDK_Version) | App targets the [latest Android SDK](https://developer.android.com/distribute/best-practices/develop/target-sdk) needed to align with Google Play requirements by setting the `targetSdk` value in the app's module `build.gradle` file. |
| Compile\_SDK\_Version | [T-Target\_SDK\_Version](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Target\_SDK\_Version) | App is built with the latest Android SDK by setting the `compileSdk` value in the app's module `build.gradle` file. |
| SDK\_Maintenance | [T-SDK\_Maintenance](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-SDK_Maintenance),<br>[T-Non\_SDK\_Interfaces](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Non_SDK_Interfaces) | Any Google or third-party SDKs used are up to date. Any improvements to these SDKs related to stability, compatibility, or security should be available to users in a timely manner.<br>For Google SDKs, use SDKs powered by [Google Play services](https://developers.google.com/android) when available. These SDKs are backward compatible, receive automatic updates, reduce your app package size, and make efficient use of on-device resources. |
| Non\_SDK\_Interfaces | [T-Non\_SDK\_Interfaces](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Non_SDK_Interfaces) | App does not use [non-SDK interfaces](https://developer.android.com/distribute/best-practices/develop/restrictions-non-sdk-interfaces). |
| Production\_Build\_Quality | [T-Production\_Build\_Quality](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Production_Build_Quality) | No debug libraries are included in the production app. Debug libraries included in the app can cause performance as well as security issues. |

#### Battery

| ID | Tests | Description |
| --- | --- | --- |
| Power\_Management | [T-Power\_Management](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Power_Management) | App properly supports power management features [Doze and App Standby](https://developer.android.com/training/monitoring-device-state/doze-standby).<br>Apps can request a power maintenance exemption. See [Support for other use cases](https://developer.android.com/training/monitoring-device-state/doze-standby#support_for_other_use_cases) in _Optimize for Doze and App Standby_. |

### Privacy and security

App handles user data and personal information safely and provides appropriate levels of permission.

Applications published on the Google Play Store must also follow the Google Play
[User Data](https://play.google.com/about/privacy-security/user-data) policies to protect user privacy.

#### Permissions

| ID | Tests | Description |
| --- | --- | --- |
| Minimize\_Permissions | [T-Minimize\_Permissions](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Minimize_Permissions) | App requests only the absolute minimum permissions needed to support the current use case. For some permissions, such as location, app uses a _coarse_ specification in place of _fine_ if possible. See [Minimize your permission requests](https://developer.android.com/training/permissions/evaluating). |
| Sensitive\_Permissions | [T-Sensitive\_Permissions](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Sensitive_Permissions) | App requests permission to access sensitive data (such as [SMS or Call Log permission groups](https://support.google.com/googleplay/android-developer/answer/10208820) or [location](https://developer.android.com/training/permissions/requesting#location)) or services that cost money (such as Dialer or SMS) only when directly related to the app's core use cases. Implications related to these permissions must be prominently disclosed to the user.<br>Depending on how your app uses the permissions, an [alternative way](https://developer.android.com/training/permissions/evaluating) of fulfilling your app's use case might be possible without relying on access to sensitive information. For example, instead of requesting permissions related to a user's contacts, use an [implicit intent](https://developer.android.com/guide/components/intents-common#Contacts) to request access. |
| Runtime\_Permissions | [T-Runtime\_Permissions](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Runtime_Permissions) | App requests runtime permissions when the functionality is requested, rather than during app startup. |
| Permission\_Rationale | [T-Permission\_Rationale](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Permission_Rationale) | App clearly explains [why permissions are needed](https://developer.android.com/training/permissions/requesting#explain). |
| Graceful\_Degradation | [T-Graceful\_Degradation](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Graceful_Degradation) | App [gracefully degrades](https://developer.android.com/training/permissions/requesting#handle-denial) when users deny or revoke a permission. App shouldn't prevent user access altogether. |

#### Data and files

| ID | Tests | Description |
| --- | --- | --- |
| Sensitive\_Data\_Storage | [T-Sensitive\_Data\_Storage](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Sensitive_Data_Storage),<br>[T-Sensitive\_Data\_Handling](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Sensitive_Data_Handling) | All sensitive data is [stored in the app's internal storage](https://developer.android.com/topic/security/best-practices#internal-storage). |
| Sensitive\_Data\_Logging | [T-Sensitive\_Data\_Logging](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Sensitive_Data_Logging) | [No personal or sensitive user data](https://developer.android.com/privacy-and-security/security-tips#user-data) is logged to the system log or an app-specific log. |
| Hardware\_IDs | [T-Hardware\_IDs](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Hardware_IDs) | App does not use any [non-resettable hardware IDs](https://developer.android.com/training/articles/user-data-ids), such as the IMEI, for identification purposes. |

#### Data backup and restoration

| ID | Tests | Description |
| --- | --- | --- |
| App\_Data\_Backup | [T-App\_Data\_Backup](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-App_Data_Backup) | App preserves user data, settings, and app state across cloud backups and device-to-device (D2D) transfers.<br>Implement [Auto Backup](https://developer.android.com/identity/data/autobackup) and configure `android:dataExtractionRules` to ensure seamless data restoration when setting up a new device or reinstalling the app. |
| App\_Logins\_Restoration | [T-App\_Logins\_Restoration](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-App_Logins_Restoration) | App automatically restores user accounts and sign-in state when a user sets up a new device.<br>Implement [Restore Credentials](https://developer.android.com/identity/sign-in/restore-credentials) using Credential Manager to re-authenticate users automatically without forcing manual login or account recovery flows. |

#### Identity

| ID | Tests | Description |
| --- | --- | --- |
| Autofill\_Hints | [T-Autofill\_Hints](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Autofill_Hints) | App provides [hints to autofill](https://developer.android.com/guide/topics/text/autofill-optimize#hints) account credentials and other sensitive information, such as credit card info, physical address, and phone number. |
| Credential\_Manager | [T-Credential\_Manager](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Credential_Manager) | App integrates [Credential Manager for Android](https://developer.android.com/training/sign-in/passkeys) for a seamless sign-in experience that unifies support for passkeys, federated identity, and passwords. |
| Biometric\_Authentication | [T-Biometric\_Authentication](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Biometric_Authentication) | App supports [biometric authentication](https://developer.android.com/training/sign-in/biometric-auth) to protect financial transactions or sensitive information, such as important user documents. |

#### App components

| ID | Tests | Description |
| --- | --- | --- |
| Component\_Export | [T-Component\_Export](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Component_Export) | App sets the `android:exported` attribute explicitly for all [activities](https://developer.android.com/guide/topics/manifest/activity-element#exported), [services](https://developer.android.com/guide/topics/manifest/service-element#exported), [broadcast receivers,](https://developer.android.com/guide/topics/manifest/receiver-element#exported) and especially [content providers](https://developer.android.com/guide/topics/manifest/provider-element#exported).<br>Only application components that _share data with other apps_, or components that _should be invoked by other apps_, are [exported](https://developer.android.com/guide/topics/manifest/service-element#exported). |
| Component\_Permissions | [T-Component\_Permissions](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Component_Permissions) | All intents and broadcasts follow best practices:<br>- [Use explicit intents](https://developer.android.com/guide/components/intents-filters#Types) if the destination application is well defined.<br>- [Use intents to defer permissions to a different app that already has the permission.](https://developer.android.com/topic/security/best-practices#permissions-intents)<br>- [Share data securely across apps](https://developer.android.com/topic/security/best-practices#permissions-share-data).<br>- Intents that contain a payload are [verified before use](https://developer.android.com/privacy-and-security/security-tips#input-validation).<br>- If you need to pass an intent to another app, so that the receiving app can invoke and expect a callback in the calling app, don't include a nested intent in the extras. Use a [`PendingIntent`](https://developer.android.com/reference/kotlin/android/app/PendingIntent).<br>- When setting up pending intents, explicitly set the [immutable flag](https://developer.android.com/reference/kotlin/android/app/PendingIntent#flag_immutable), where applicable. |
| Component\_Protection | [T-Component\_Protection](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Component_Protection) | All components that _share content between apps_ use [`android:protectionLevel="signature"`](https://developer.android.com/guide/topics/manifest/permission-element#plevel) for [custom permissions](https://developer.android.com/guide/topics/permissions/defining). This includes [activities](https://developer.android.com/guide/topics/manifest/activity-element#prmsn), [services](https://developer.android.com/guide/topics/manifest/service-element#prmsn), [broadcast receivers](https://developer.android.com/guide/topics/manifest/receiver-element#prmsn), and especially [content providers](https://developer.android.com/guide/topics/manifest/provider-element#prmsn).<br>Apps shouldn't rely on accessing a list of installed packages. |

#### Networking

| ID | Tests | Description |
| --- | --- | --- |
| Network\_Security\_Traffic | [T-Network\_Security\_Traffic](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Network_Security_Traffic) | All network traffic is sent over [SSL](https://developer.android.com/training/articles/security-ssl). |
| Network\_Security\_Configuration | [T-Network\_Security\_Configuration](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Network_Security_Configuration) | App declares a [network security configuration](https://developer.android.com/training/articles/security-config). |
| Security\_Provider\_Initialization | [T-Security\_Provider\_Initialization](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Security_Provider_Initialization) | If the app uses Google Play services, the [security provider is initialized at application startup](https://developer.android.com/training/articles/security-gms-provider). |

#### WebViews

| ID | Tests | Description |
| --- | --- | --- |
| WebView\_Asset\_Loader | [T-WebView\_Asset\_Loader](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-WebView_Asset_Loader),<br>[T-WebView\_Navigation](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-WebView_Navigation) | Don't use [`setAllowUniversalAccessFromFileURLs()`](https://developer.android.com/reference/kotlin/android/webkit/WebSettings#setallowuniversalaccessfromfileurls) for accessing local content. Instead, use [`WebViewAssetLoader`](https://developer.android.com/reference/kotlin/androidx/webkit/WebViewAssetLoader). |
| WebView\_JavaScript | [T-WebView\_JavaScript](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-WebView_JavaScript),<br>[T-WebView\_Navigation](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-WebView_Navigation) | [Web views](https://developer.android.com/privacy-and-security/security-tips#webview) don't use [`addJavaScriptInterface()`](https://developer.android.com/reference/kotlin/android/webkit/WebView#addjavascriptinterface) with untrusted content.<br>On Android 6.0 (API level 23 and higher), use [HTML message channels](https://developer.android.com/privacy-and-security/security-best-practices#message-channels) instead. |

#### Execution

| ID | Tests | Description |
| --- | --- | --- |
| App\_Bundles | [T-App\_Bundles](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-App_Bundles) | App does not [dynamically load](https://developer.android.com/privacy-and-security/security-tips#dynamic-code) code from outside the app's APK. Use [Android App Bundles](https://developer.android.com/guide/app-bundle), which include [Play Feature Delivery](https://developer.android.com/guide/app-bundle/play-feature-delivery) and [Play Asset Delivery](https://developer.android.com/guide/app-bundle/asset-delivery).<br>As of August 2021, the use of Android App Bundles is mandatory for all new apps in the Google Play Store. |

#### Cryptography

| ID | Tests | Description |
| --- | --- | --- |
| Cryptographic\_Algorithms | [T-Cryptographic\_Algorithms](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Cryptographic_Algorithms) | App uses strong, platform-provided [cryptographic algorithms and a random number generator](https://developer.android.com/privacy-and-security/security-tips#cryptography). Also, the app does not implement custom algorithms. |

### Google Play

Enable your app to be published on Google Play.

#### Policies

| ID | Tests | Description |
| --- | --- | --- |
| Play\_Content\_Policies | [T-Play\_Content\_Policies](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Play_Content_Policies) | App strictly adheres to the terms of the [Google Play Developer Content Policy](https://play.google.com/about/developer-content-policy.html), does not offer inappropriate content, and does not use the intellectual property or brand of others. |
| Play\_Content\_Rating | [T-Play\_Content\_Policies](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Play_Content_Policies) | App maturity level is set appropriately based on the [Content Rating Guidelines](https://support.google.com/googleplay/android-developer/bin/answer.py&answer=188189). |

#### App details page

| ID | Tests | Description |
| --- | --- | --- |
| Play\_Feature\_Graphic | [T-Play\_Feature\_Graphic](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Play_Feature_Graphic),<br>[T-Play\_Graphic\_Assets](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Play_Graphic_Assets) | App feature graphic follows the guidelines outlined in this [support article](https://support.google.com/googleplay/android-developer/answer/9866151?visit_id=637408759199927231-2278064029&rd=1#feature_graphic_requirements). Make sure that:<br>- App listing includes a high-quality feature graphic<br>- The feature graphic does not contain device images, screenshots, or small text that's illegible when scaled down and displayed on the smallest screen size that your app is targeting<br>- The feature graphic does not resemble an advertisement |
| Play\_Device\_References | [T-Play\_Graphic\_Assets](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Play_Graphic_Assets) | App screenshots and videos don't show or reference non-Android devices. |
| Play\_Misleading\_Content | [T-Play\_Graphic\_Assets](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Play_Graphic_Assets) | App screenshots or videos don't represent the content and experience of your app in a misleading way. |

#### User support

| ID | Tests | Description |
| --- | --- | --- |
| Play\_User\_Reviews | [T-Play\_Content\_Policies](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Play_Content_Policies) | Common user-reported bugs in the **Reviews** tab of the Google Play page are addressed if the bugs are reproducible and occur on many different devices. If a bug occurs on only a few devices, you should still address it if those devices are particularly popular or new. |

## Test environment

Set up a test environment as follows:

- **Emulator testing:** Android Emulator is a great way to test your app under
different Android versions and screen resolutions. Set up [emulated devices](https://developer.android.com/tools/devices) (AVDs) to represent the most common form factors and
hardware/software combinations for your target user base. Test a variety of
form factors using the following emulators (at a minimum):

  - Foldables: **Foldable (1:1 inner display)**, **Foldable (4:3 inner**
    **display)**, and **Pixel Fold** (listed under **Phone** in the Device
    Manager)
  - Tablet: **Medium Tablet** (listed under **Tablet** in the Device
    Manager)
  - Mobile app notification testing: Pair a mobile device / emulator with
    Wear OS emulator: Wear OS Round 1.84"
- **Hardware devices:** Your test environment should include a small number of
actual hardware devices that represent the key form factors and hardware/software combinations that are available to consumers. You don't
need to test on _every_ device that's on the market. Focus on a small number
of representative devices, even using one or two devices per form factor.

- **Device test labs:**; You can also use third party services, such as
[Firebase Test Lab](https://firebase.google.com/docs/test-lab/android/overview), to test your app on a wide variety of devices.

- **Test with the latest Android version:** In addition to testing
representative Android versions for your target user base, you should
always test against the latest version of Android to ensure the
[latest behavior changes](https://developer.android.com/about/versions/17/behavior-changes-17) don't negatively impact your app's user
experience.


For further guidance on testing, including unit testing, integration testing,
and UI testing, see [Fundamentals of testing Android apps](https://developer.android.com/training/testing/fundamentals).

### StrictMode

For performance testing, enable [`StrictMode`](https://developer.android.com/reference/kotlin/android/os/StrictMode) in your app. Use `StrictMode` to catch operations that could affect performance, network accesses, and file
reads and writes. Look for potentially problematic operations both on the main thread and on other threads.

Set up a per-thread monitoring policy using [`StrictMode.ThreadPolicy.Builder`](https://developer.android.com/reference/kotlin/android/os/StrictMode.ThreadPolicy.Builder) and enable all supported monitoring in the
`ThreadPolicy` using [`detectAll()`](https://developer.android.com/reference/kotlin/android/os/StrictMode.ThreadPolicy.Builder#detectall).

Enable **visual notification** of policy violations for the `ThreadPolicy` using
[`penaltyFlashScreen()`](https://developer.android.com/reference/kotlin/android/os/StrictMode.ThreadPolicy.Builder#penaltyflashscreen).

## Tests

The core app quality tests help you assess the fundamental quality of your app.
You can combine the tests or integrate groups of tests together in your test plan.

### User experience

Test for a consistent and intuitive user experience.

#### Usability

| ID | Feature | Description |
| --- | --- | --- |
| T-Consistent\_UX | [Consistent\_UX](https://developer.android.com/docs/quality-guidelines/core-app-quality#Consistent_UX) | Navigate to all parts of the app—all screens, dialogs, settings, and all user flows.<br>Do the following:<br> <br>- If the application allows for editing or content creation, game play, or media playback, make sure to test those flows.<br>- While testing the app, introduce interruptions from other apps, such as receiving a notification or a phone call; and apply transient changes to device attributes, such as network connectivity, battery function, GPS availability, and system load.<br>- Enter and test all in-app purchase flows |
| T-App\_Switcher | [App\_Switcher](https://developer.android.com/docs/quality-guidelines/core-app-quality#App_Switcher) | From each app screen, switch to another running app, and then return to the app under test using the **Recents** app switcher. |
| T-Sleep\_Resume | [Sleep\_Resume](https://developer.android.com/docs/quality-guidelines/core-app-quality#Sleep_Resume) | Press the power button to put the device to sleep, then press the power button again to wake the screen. |
| T-Lock\_Resume | [Lock\_Resume](https://developer.android.com/docs/quality-guidelines/core-app-quality#Lock_Resume) | Set up a screen lock on the device. Press the power button to put the device to sleep (which locks the device). Then, press the power button again to wake the screen and unlock the device. |

#### SD card

| ID | Feature | Description |
| --- | --- | --- |
| T-SD\_Card | [Consistent\_UX](https://developer.android.com/docs/quality-guidelines/core-app-quality#Consistent_UX) | Perform [core functionality](https://developer.android.com/docs/quality-guidelines/core-app-quality#T-Consistent_UX) tests with the app installed on a [device's SD card](https://developer.android.com/guide/topics/data/install-location) (if the app supports this installation method).<br>To move the app to an SD card, see the app **Settings**. |

#### User interface

| ID | Feature | Description |
| --- | --- | --- |
| T-Orientation\_Transitions | [Display\_State\_Parity](https://developer.android.com/docs/quality-guidelines/core-app-quality#Display_State_Parity),<br>[Fullscreen\_Display](https://developer.android.com/docs/quality-guidelines/core-app-quality#Fullscreen_Display),<br>[Orientation\_Transitions](https://developer.android.com/docs/quality-guidelines/core-app-quality#Orientation_Transitions) | From each app screen, rotate the device between landscape and portrait orientations and folded and unfolded states at least three times.<br>Verify the app does the following:<br> <br>- Provides function parity in all display orientations and fold states<br>- Fills the app window in all display orientations and fold states and is not letterboxed<br>- Maintains state and has no rendering problems during rapid transitions between orientations and device folding and unfolding |

#### Visual quality

| ID | Feature | Description |
| --- | --- | --- |
| T-Graphic\_Quality | [Graphic\_Quality](https://developer.android.com/docs/quality-guidelines/core-app-quality#Graphic_Quality) | Use all features of your app. Verify that all visuals, including graphics, text, images, and other UI elements are free of distortion, blurring, or pixelation. |
| T-Line\_Length | [Line\_Length](https://developer.android.com/docs/quality-guidelines/core-app-quality#Line_Length) | Review all text blocks in the app. Verify that text and text block line length is limited to 45-75 characters (including spaces) for readability.<br>Verify the following:<br> <br>- Composition is acceptable in all supported form factors<br>- No cut-off letters or words<br>- No improper word wraps within buttons or icons<br>- Sufficient spacing between text and surrounding elements |
| T-Theme\_Support | [Theme\_Support](https://developer.android.com/docs/quality-guidelines/core-app-quality#Theme_Support) | Verify that all text is readable in light and dark themes. Verify that all visuals are clearly discernible and aesthetic in light and dark themes. |

#### Navigation

| ID | Feature | Description |
| --- | --- | --- |
| T-Back\_Nav | [Back\_Button\_Nav](https://developer.android.com/docs/quality-guidelines/core-app-quality#Back_Button_Nav),<br>[Back\_Gesture\_Nav](https://developer.android.com/docs/quality-guidelines/core-app-quality#Back_Gesture_Nav) | Navigate to all parts of the app—all screens, dialogs, settings, and all user flows.<br>From each app screen, press the **Back** button or use the back swipe gesture. The app should navigate to the previous or home screen. |
| T-State\_Preservation | [State\_Preservation](https://developer.android.com/docs/quality-guidelines/core-app-quality#State_Preservation) | From each app screen, press the device's **Home** key or swipe up in gesture navigation, then relaunch the app from the **All Apps** screen. |

#### Notifications

| ID | Feature | Description |
| --- | --- | --- |
| T-Notification\_Quality | [Notification\_Quality](https://developer.android.com/docs/quality-guidelines/core-app-quality#Notification_Quality),<br>[Conversation\_Quality](https://developer.android.com/docs/quality-guidelines/core-app-quality#Conversation_Quality) | Trigger and observe in the notifications drawer all types of notifications that the app can display. Expand notifications where applicable (Android 4.1 and higher), and tap on all available actions. |

#### Accessibility

| ID | Feature | Description |
| --- | --- | --- |
| T-Touch\_Target\_Size | [Touch\_Target\_Size](https://developer.android.com/docs/quality-guidelines/core-app-quality#Touch_Target_Size) | Verify that touch targets maintain a consistent, accessible size and position for all display sizes and configurations. For information on accessibility, see the [Accessibility Scanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor). |
| T-Visual\_Contrast | [Visual\_Contrast](https://developer.android.com/docs/quality-guidelines/core-app-quality#Visual_Contrast) | Verify the contrast of all visual elements. |
| T-Content\_Description | [Content\_Description](https://developer.android.com/docs/quality-guidelines/core-app-quality#Content_Description) | Verify that all UI elements other than `TextView` have content descriptions. |

### Functionality

Verify that your app implements the following functional behavior.

#### Audio

| ID | Feature | Description |
| --- | --- | --- |
| T-Audio\_Playback\_Start | [Audio\_Playback\_Start](https://developer.android.com/docs/quality-guidelines/core-app-quality#Audio_Playback_Start) | Initiate audio playback. Verify that within one second the app starts playing the audio or provides a visual indicator that the audio data is being prepared for playback. |
| T-Audio\_Focus\_Request | [Audio\_Focus\_Request](https://developer.android.com/docs/quality-guidelines/core-app-quality#Audio_Focus_Request) | Initiate audio playback. App should [request audio focus](https://developer.android.com/reference/kotlin/android/media/AudioManager#requestaudiofocus). When audio playback stops, the app should relinquish audio focus (which happens automatically for apps that target [Android 12 (API level 31) and higher](https://developer.android.com/media/optimize/audio-focus#audio-focus-12)). |
| T-Audio\_Focus\_Change | [Audio\_Focus\_Change](https://developer.android.com/docs/quality-guidelines/core-app-quality#Audio_Focus_Change) | Initiate audio playback. Initiate audio playback in another app. Your app should respond to the [change in audio focus](https://developer.android.com/media/optimize/audio-focus#audio-focus-change) and stop audio playback or reduce playback volume. |
| T-Audio\_Playback\_Background | [Audio\_Playback\_Background](https://developer.android.com/docs/quality-guidelines/core-app-quality#Audio_Playback_Background) | Initiate audio playback. Interact with another _non-audio_ app as the foreground app. The app should continue playing audio in the background and should display a notification in the status bar. Verify that you can manage playback using controls displayed in the notification.<br>Lock the device screen. The app should continue playing audio in the background and should display a notification on the lock screen. Verify that you can manage playback using controls displayed in the notification. |
| T-Audio\_Notification\_Style | [Audio\_Notification\_Style](https://developer.android.com/docs/quality-guidelines/core-app-quality#Audio_Notification_Style) | Initiate audio playback. Interact with another _non-audio_ app as the foreground app. Verify that your app continues to play audio in the background and has created a notification styled with `MediaStyle`. See [Playing nicely with media controls](https://android-developers.googleblog.com/2020/08/playing-nicely-with-media-controls.html). |
| T-Audio\_Playback\_Resume | [Audio\_Playback\_Resume](https://developer.android.com/docs/quality-guidelines/core-app-quality#Audio_Playback_Resume) | Initiate audio playback. Interact with another non-audio app as the foreground app. Interact with your app to make it the top app. Audio should resume or volume should be restored. Otherwise, the app should indicate to the user that playback is paused. |

#### Video

| ID | Feature | Description |
| --- | --- | --- |
| T-Video\_PiP | [Video\_PiP](https://developer.android.com/docs/quality-guidelines/core-app-quality#Video_PiP) | Activate app [video playback in picture-in-picture mode](https://developer.android.com/guide/topics/ui/picture-in-picture#pip_button). |
| T-Video\_Encoding | [Video\_Encoding](https://developer.android.com/docs/quality-guidelines/core-app-quality#Video_Encoding) | Verify that the app encodes video using the HEVC video compression standard. |
| T-Video\_Playback\_Background | [Video\_Playback\_Background](https://developer.android.com/docs/quality-guidelines/core-app-quality#Video_Playback_Background) | Start video playback. Minimize the app window, open another app to move the app window to the background. On desktop‑capable devices, move the app window off the visible desktop. Verify that video playback continues without interruption in all cases. |

#### Sharing

| ID | Feature | Description |
| --- | --- | --- |
| T-System\_Sharesheet | [System\_Sharesheet](https://developer.android.com/docs/quality-guidelines/core-app-quality#System_Sharesheet) | Create an intent and start an activity by calling [`startActivity()`](https://developer.android.com/reference/kotlin/android/app/Activity#startactivity) with the intent as an argument. See [Use the Android Sharesheet](https://developer.android.com/develop/ui/compose/sharing/send#using-android-system-sharesheet). Your app should display the Android Sharesheet. |

#### Background services

| ID | Feature | Description |
| --- | --- | --- |
| T-Background\_Service\_Optimization | [Background\_Service\_Optimization](https://developer.android.com/docs/quality-guidelines/core-app-quality#Background_Service_Optimization) | Use all major features of your app. Verify that no long-running background services are started.<br>Switch to another app to send your app to the background. Go to **Settings** and check whether your app has any services running while in the background. On Android 4.0 and higher, go to the **Apps** screen and find the app in the **Running** tab. |

### Performance and stability

Verify performance, stability, and pixel-perfect visuals.

#### Performance

| ID | Feature | Description |
| --- | --- | --- |
| T-App\_Startup\_Time | [App\_Startup\_Time](https://developer.android.com/docs/quality-guidelines/core-app-quality#App_Startup_Time) | Start your app. Verify that the app loads quickly or provides a progress indicator or similar cue if the app takes longer than two seconds to load. |
| T-Rendering\_Performance | [Rendering\_Performance](https://developer.android.com/docs/quality-guidelines/core-app-quality#Rendering_Performance) | Use all major features of your app. Verify that the app renders at least 60 frames per second. Use the [Profile HWUI rendering](https://developer.android.com/topic/performance/rendering/inspect-gpu-rendering) option to help test your app. |
| T-StrictMode\_Compliance | [StrictMode\_Compliance](https://developer.android.com/docs/quality-guidelines/core-app-quality#StrictMode_Compliance) | Enable `StrictMode` in your app. Use all major features. Verify that the app doesn't produce any `StrictMode` performance warnings; that is no red flashes are visible when testing the app. Red flashes indicate bad behavior regarding storage, network access, or memory management (such as memory leaks).<br>Pay close attention to garbage collection and its impact on the user experience. |

#### Stability

| ID | Feature | Description |
| --- | --- | --- |
| T-Stability\_ANR | [Stability\_ANR](https://developer.android.com/docs/quality-guidelines/core-app-quality#Stability_ANR) | Use all major features of your app. Verify that the app does not crash or block the UI thread causing ANR (Android Not Responding) errors. Review the Google Play [pre-launch report](https://support.google.com/googleplay/android-developer/answer/9842757) to identify potential stability issues. |

#### SDK

| ID | Feature | Description |
| --- | --- | --- |
| T-Android\_Platform\_Compatibility | [Android\_Platform\_Compatibility](https://developer.android.com/docs/quality-guidelines/core-app-quality#Android_Platform_Compatibility) | Run your app on the latest public version of the Android platform. Use all major features. Verify that the app doesn't crash and runs without any loss of core functionality. |
| T-Target\_SDK\_Version | [Target\_SDK\_Version](https://developer.android.com/docs/quality-guidelines/core-app-quality#Target\_SDK\_Version),<br>[Compile\_SDK\_Version](https://developer.android.com/docs/quality-guidelines/core-app-quality#Compile\_SDK\_Version) | Review the Android manifest file and build configuration to ensure the application is built against the [latest available SDK](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels) (`targetSdk` and `compileSdk`). |
| T-SDK\_Maintenance | [SDK\_Maintenance](https://developer.android.com/docs/quality-guidelines/core-app-quality#SDK_Maintenance) | Review your app's `build.gradle` file for any outdated dependencies. |
| T-Non\_SDK\_Interfaces | [Non\_SDK\_Interfaces](https://developer.android.com/docs/quality-guidelines/core-app-quality#Non_SDK_Interfaces) | Use the [Android Studio lint tool](https://developer.android.com/distribute/best-practices/develop/restrictions-non-sdk-interfaces#studio-lint) to detect non-SDK interface usage. See [Restrictions on non-SDK interfaces](https://developer.android.com/guide/app-compatibility/restrictions-non-sdk-interfaces#test-for-non-sdk) for alternative testing methods. |
| T-Production\_Build\_Quality | [Production\_Build\_Quality](https://developer.android.com/docs/quality-guidelines/core-app-quality#Production_Build_Quality) | Review your app's `build.gradle` file for any included debug libraries. |

#### Battery

| ID | Feature | Description |
| --- | --- | --- |
| T-Power\_Management | [Power\_Management](https://developer.android.com/docs/quality-guidelines/core-app-quality#Power_Management) | Use all major app features in Doze and App Standby modes. Verify that alarms, timers, notifications, and syncs function properly in the Doze _maintenance window_ and when the app exits App Standby mode.<br>Test Doze and App Standby behavior using ADB commands (see [Test with Doze and App Standby](https://developer.android.com/training/monitoring-device-state/doze-standby#testing_doze_and_app_standby) for requirements and guidelines).<br>To diagnose unexpected battery drain, use the [Android Studio Power Profiler](https://developer.android.com/studio/profile/power-profiler) or the [Battery Historian](https://developer.android.com/topic/performance/power/battery-historian) tool combined with planned background work. |

### Privacy and security

Test for privacy and security protections expected by users.

#### Permissions

| ID | Feature | Description |
| --- | --- | --- |
| T-Minimize\_Permissions | [Minimize\_Permissions](https://developer.android.com/docs/quality-guidelines/core-app-quality#Minimize_Permissions) | Review all permissions that your app requires, in the manifest file, at runtime, and in app settings on the device ( **Settings > App Info**). |
| T-Sensitive\_Permissions | [Sensitive\_Permissions](https://developer.android.com/docs/quality-guidelines/core-app-quality#Sensitive_Permissions) | Use any features of your app that request permissions. Verify that the app requests permission to access sensitive data or services only for core app use cases. Verify that the implications of granting permission to sensitive data and services are clearly communicated to the user. |
| T-Runtime\_Permissions | [Runtime\_Permissions](https://developer.android.com/docs/quality-guidelines/core-app-quality#Runtime_Permissions) | Use all features of your app that require permissions. Verify that the permissions are requested _lazily_, that is, only when the features are accessed, rather than during app startup. |
| T-Permission\_Rationale | [Permission\_Rationale](https://developer.android.com/docs/quality-guidelines/core-app-quality#Permission_Rationale) | Use all features of your app that require permissions. Verify that the app explains to the user why the permissions are needed. |
| T-Graceful\_Degradation | [Graceful\_Degradation](https://developer.android.com/docs/quality-guidelines/core-app-quality#Graceful_Degradation) | Use all features of your app that require permissions. Deny or revoke the permissions. Verify that the app provides an alternative use case and continues to function. |

#### Data and files

| ID | Feature | Description |
| --- | --- | --- |
| T-Sensitive\_Data\_Storage | [Sensitive\_Data\_Storage](https://developer.android.com/docs/quality-guidelines/core-app-quality#Sensitive_Data_Storage) | Review all data stored in internal storage. Verify that data stored externally is not sensitive data. |
| T-Sensitive\_Data\_Handling | [Sensitive\_Data\_Storage](https://developer.android.com/docs/quality-guidelines/core-app-quality#Sensitive_Data_Storage) | Review how the data that's loaded from external storage is handled and processed. |
| T-Sensitive\_Data\_Logging | [Sensitive\_Data\_Logging](https://developer.android.com/docs/quality-guidelines/core-app-quality#Sensitive_Data_Logging) | Use all major app features while monitoring the device log. Verify that no private user information is logged. |
| T-Hardware\_IDs | [Hardware\_IDs](https://developer.android.com/docs/quality-guidelines/core-app-quality#Hardware_IDs) | Use all major app features. Verify that the app does not use any hardware IDs such as the IMEI for identification purposes. |

#### Data backup and restoration

| ID | Feature | Description |
| --- | --- | --- |
| T-App\_Data\_Backup | [App\_Data\_Backup](https://developer.android.com/docs/quality-guidelines/core-app-quality#App_Data_Backup) | Configure local preferences, databases, and app settings on a primary device. Perform a cloud backup or device-to-device (D2D) transfer to a new device.<br>Launch the app on the target device after transfer and verify that local preferences, database state, and user settings are restored accurately according to your Auto Backup rules. For detailed testing procedures, see [Test backup and restore](https://developer.android.com/identity/data/testingbackup). |
| T-App\_Logins\_Restoration | [App\_Logins\_Restoration](https://developer.android.com/docs/quality-guidelines/core-app-quality#App_Logins_Restoration) | Set up a signed-in session on a primary device using passkeys, passwords, or Google Sign-In. Perform a cloud backup or device-to-device (D2D) transfer to a new device.<br>Launch the app on the target device after transfer and verify that authentication is restored automatically using Restore Credentials without displaying sign-in screens or requiring account recovery. For detailed testing procedures, see [Testing Restore Credentials](https://developer.android.com/identity/sign-in/restore-credentials-implementation#test-your-implementation). |

#### Identity

| ID | Feature | Description |
| --- | --- | --- |
| T-Autofill\_Hints | [Autofill\_Hints](https://developer.android.com/docs/quality-guidelines/core-app-quality#Autofill_Hints) | Use all app features that require user input. Verify that the app provides hints to autofill input fields for data such as account credentials and other sensitive information. |
| T-Credential\_Manager | [Credential\_Manager](https://developer.android.com/docs/quality-guidelines/core-app-quality#Credential_Manager) | Sign in to your app. Verify that the app integrates [Credential Manager for Android](https://developer.android.com/training/sign-in/passkeys) for a sign-in experience that unifies support for passkeys, federated identity, and passwords. |
| T-Biometric\_Authentication | [Biometric\_Authentication](https://developer.android.com/docs/quality-guidelines/core-app-quality#Biometric_Authentication) | Use all app features that require authentication. Verify that the app protects financial transactions or sensitive information, such as important user documents, with [biometric authentication](https://developer.android.com/training/sign-in/biometric-auth). |

#### App components

| ID | Feature | Description |
| --- | --- | --- |
| T-Component\_Export | [Component\_Export](https://developer.android.com/docs/quality-guidelines/core-app-quality#Component_Export) | Review all [application components](https://developer.android.com/guide/topics/manifest/application-element) defined in the Android manifest file for the appropriate export state. The exported property must be set explicitly for all components. |
| T-Component\_Permissions | [Component\_Permissions](https://developer.android.com/docs/quality-guidelines/core-app-quality#Component_Permissions) | Review all permissions that your app requires, in the manifest file, at runtime, and in the app settings on the device ( **Settings > App Info**). |
| T-Component\_Protection | [Component\_Protection](https://developer.android.com/docs/quality-guidelines/core-app-quality#Component_Protection) | Review all content providers defined in the Android manifest file. Make sure each provider has an appropriate `protectionLevel`. |

#### Networking

| ID | Feature | Description |
| --- | --- | --- |
| T-Network\_Security\_Traffic | [Network\_Security\_Traffic](https://developer.android.com/docs/quality-guidelines/core-app-quality#Network_Security_Traffic) | Declare a network security configuration that [disables cleartext traffic](https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted), then test the app. |
| T-Network\_Security\_Configuration | [Network\_Security\_Configuration](https://developer.android.com/docs/quality-guidelines/core-app-quality#Network_Security_Configuration) | Review the app's [network security configuration](https://developer.android.com/training/articles/security-config). Verify that no lint checks on the configuration fail. |
| T-Security\_Provider\_Initialization | [Security\_Provider\_Initialization](https://developer.android.com/docs/quality-guidelines/core-app-quality#Security_Provider_Initialization) | Verify that the security provider is initialized at application startup for Google Play services. |

#### WebViews

| ID | Feature | Description |
| --- | --- | --- |
| T-WebView\_Asset\_Loader | [WebView\_Asset\_Loader](https://developer.android.com/docs/quality-guidelines/core-app-quality#WebView_Asset_Loader) | Review the app's [network security configuration](https://developer.android.com/training/articles/security-config). Verify that no lint checks on the configuration fail. |
| T-WebView\_JavaScript | [WebView\_JavaScript](https://developer.android.com/docs/quality-guidelines/core-app-quality#WebView_JavaScript) | For each `WebView`, navigate to a page that requires JavaScript. |
| T-WebView\_Navigation | [WebView\_Asset\_Loader](https://developer.android.com/docs/quality-guidelines/core-app-quality#WebView_Asset_Loader),<br>[WebView\_JavaScript](https://developer.android.com/docs/quality-guidelines/core-app-quality#WebView_JavaScript) | In each WebView, attempt to navigate to sites and content that aren't loaded directly by your app. |

#### Execution

| ID | Feature | Description |
| --- | --- | --- |
| T-App\_Bundles | [App\_Bundles](https://developer.android.com/docs/quality-guidelines/core-app-quality#App_Bundles) | Verify that the app uses [Android App Bundles](https://developer.android.com/guide/app-bundle) and does not dynamically load code from outside the app's APK. |

#### Cryptography

| ID | Feature | Description |
| --- | --- | --- |
| T-Cryptographic\_Algorithms | [Cryptographic\_Algorithms](https://developer.android.com/docs/quality-guidelines/core-app-quality#Cryptographic_Algorithms) | Verify that the app uses strong, platform-provided [cryptographic algorithms and a random number generator](https://developer.android.com/privacy-and-security/security-tips#cryptography). Also verify that the app doesn't implement custom algorithms. |

### Google Play

Verify that your app is ready for Google Play.

#### Policies

| ID | Feature | Description |
| --- | --- | --- |
| T-Play\_Content\_Policies | [Play\_Content\_Policies](https://developer.android.com/docs/quality-guidelines/core-app-quality#Play_Content_Policies),<br>[Play\_Content\_Rating](https://developer.android.com/docs/quality-guidelines/core-app-quality#Play_Content_Rating),<br>[Play\_User\_Reviews](https://developer.android.com/docs/quality-guidelines/core-app-quality#Play_User_Reviews) | Sign into the [Google Play Developer Console](https://play.google.com/apps/publish/) to review your developer profile, app description, screenshots, feature graphic, content rating and user feedback. |

#### App details page

| ID | Feature | Description |
| --- | --- | --- |
| T-Play\_Feature\_Graphic | [Play\_Feature\_Graphic](https://developer.android.com/docs/quality-guidelines/core-app-quality#Play_Feature_Graphic) | Download your feature graphic and screenshots, and scale them down to match the display sizes on the devices and form factors that you are targeting. |
| T-Play\_Graphic\_Assets | [Play\_Feature\_Graphic](https://developer.android.com/docs/quality-guidelines/core-app-quality#Play_Feature_Graphic),<br>[Play\_Device\_References](https://developer.android.com/docs/quality-guidelines/core-app-quality#Play_Device_References),<br>[Play\_Misleading\_Content](https://developer.android.com/docs/quality-guidelines/core-app-quality#Play_Misleading\_Content) | Review all graphical assets, media, text, code libraries, and other content that's packaged in the app or expansion file download. |

## Archive

Previous versions of the core app quality guidelines:

- [2026-03-20](https://developer.android.com/docs/quality-guidelines/archive/core/core-app-quality-2026-03-20)
- [2021-05-17](https://developer.android.com/docs/quality-guidelines/archive/core/core-app-quality-2021-05-17)
- [2021-02-10](https://developer.android.com/docs/quality-guidelines/archive/core/core-app-quality-2021-02-10)

Was this helpful?

No recommendations at this time.

Try [signing in](https://developer.android.com/docs/quality-guidelines/core-app-quality#) to your Google account.

Content and code samples on this page are subject to the licenses described in the [Content License](https://developer.android.com/license). Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.

Last updated 2026-11-19 UTC.
