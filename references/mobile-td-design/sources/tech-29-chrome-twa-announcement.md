URL: https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities
TITLE: Overview of Trusted Web Activities | Android Developers
RETRIEVED: 2026-11-22
METHOD: web_extract

[Skip to main content](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities#main-content)

[![Android Developers](https://www.gstatic.com/devrel-devsite/prod/vc11e4c9d4c060345ba98585d538d4546e842f4a6ee5c5f9e85be4bd345767217/android/images/lockup.png)](https://developer.android.com/)

`/`

Language

- [English](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities)
- [Deutsch](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=de)
- [Español – América Latina](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=es-419)
- [Français](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=fr)
- [Indonesia](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=id)
- [Italiano](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=it)
- [Polski](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=pl)
- [Português – Brasil](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=pt-br)
- [Tiếng Việt](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=vi)
- [Türkçe](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=tr)
- [Русский](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=ru)
- [עברית](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=he)
- [العربيّة](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=ar)
- [فارسی](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=fa)
- [हिंदी](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=hi)
- [বাংলা](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=bn)
- [ภาษาไทย](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=th)
- [中文 – 简体](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=zh-cn)
- [中文 – 繁體](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=zh-tw)
- [日本語](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=ja)
- [한국어](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities?hl=ko)

[Android Studio](https://developer.android.com/studio)

[Sign in](https://developer.android.com/_d/signin?continue=https%3A%2F%2Fdeveloper.android.com%2Fdevelop%2Fui%2Fviews%2Flayout%2Fwebapps%2Ftrusted-web-activities&prompt=select_account)

- [Develop](https://developer.android.com/develop)
- [Core areas](https://developer.android.com/develop/core-areas)
- [UI](https://developer.android.com/develop/ui)
- [Views](https://developer.android.com/develop/ui/views/layout/declaring-layout)

- On this page
- [Where to go next?](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities#where_to_go_next)

- [Android Developers](https://developer.android.com/)
- [Develop](https://developer.android.com/develop)
- [Core areas](https://developer.android.com/develop/core-areas)
- [UI](https://developer.android.com/develop/ui)
- [Views](https://developer.android.com/develop/ui/views/layout/declaring-layout)

Was this helpful?

# Overview of Trusted Web Activities    Stay organized with collections      Save and categorize content based on your preferences.

- On this page
- [Where to go next?](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities#where_to_go_next)

**Trusted Web Activity** is a new way to open _your_ web-app content such as _your_ Progressive Web App (PWA) from _your_ Android app using a protocol based on Custom Tabs.

**Note**: Trusted Web Activity is available in [Chrome on Android](https://play.google.com/store/apps/details?id=com.android.chrome), version 72 and above.

_Looking for the code?_

- [android-browser-helper library on GitHub](https://github.com/GoogleChrome/android-browser-helper)
- [Trusted Web Activity demos](https://github.com/GoogleChrome/android-browser-helper/tree/master/demos)
- [Bubblewrap, a NodeJs library / CLI to generate and build Trusted Web Activity projects](https://github.com/GoogleChromeLabs/bubblewrap)

There are a few things that make Trusted Web Activity different from other ways to open web content from your Android app:

1. Content in a Trusted Web activity is **trusted** \-\- the app and the site it opens are expected to come from the same developer. (This is verified using [Digital Asset Links](https://developers.google.com/digital-asset-links/v1/getting-started).)
2. The content rendered in a Trusted Web Activity comes from the **web**: they're rendered by the user's browser, in exactly the same way as a user would see it in their browser except they are run fullscreen. Web content must be accessible and useful in the browser first.
3. Browsers are also updated independent of Android and your app. That saves on APK size and ensures you can use a modern web runtime. (Note that since Lollipop, WebView has also been updated independent of Android, but there are a [significant number](https://developer.android.com/about/dashboards) of pre-Lollipop Android users.)
4. The host app doesn't have direct access to web content in a Trusted Web Activity or any other kind of web state, like cookies and `localStorage`. Nevertheless, you can coordinate with the web content by passing data to and from the page in URLs (e.g. through query parameters and [intent URIs](https://developer.chrome.com/docs/multidevice/android/intents).)
5. Transitions between web and native content are between **activities**. Each activity (i.e. screen) of your app is either completely provided by the web, or by an Android activity

To make it easier to test, there are currently no qualifications for content opened in the preview of Trusted Web activities. You can expect, however, that Trusted Web activities need to meet the same [Add to Home Screen](https://web.dev/customize-install#criteria) requirements. You can audit your site for these requirements using the [Lighthouse](https://web.dev/measure/) " _user can be prompted to Add to Home screen_" audit.

Today, it is possible for other browsers to implement the same protocol that Trusted Web activities use. While the host app has the final say on what browser gets opened, we recommend the same policy as for Custom Tabs: use the user's default browser, so long as that browser provides the required capabilities.

## Where to go next?

If you are looking for quickly building an Android app that just starts and opens your PWA, checkout out the [Quick Start Guide](https://developer.chrome.com/docs/android/trusted-web-activity/quick-start).

If integrating Trusted Web Activity into an existing Android App, the [Integration Guide](https://developer.chrome.com/docs/android/trusted-web-activity/integration-guide) is a good place to get started.

Was this helpful?

No recommendations at this time.

Try [signing in](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities#) to your Google account.

Content and code samples on this page are subject to the licenses described in the [Content License](https://developer.android.com/license). Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.

Last updated 2026-02-26 UTC.



\[\[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]\],\[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]\],["Last updated 2026-02-26 UTC."],\[\],\[\]\]
