URL: https://developers.google.com/chromeos/app-development/publish/pwa-in-play
TITLE: List your Progressive Web App in Google Play
RETRIEVED: 2026-11-22
METHOD: curl

Skip to main content

-

ChromeOS

/

-
English

-
Deutsch

-
Español

-
Español – América Latina

-
Français

-
Indonesia

-
Italiano

-
Polski

-
Português – Brasil

-
Tiếng Việt

-
Türkçe

-
Русский

-
עברית

-
العربيّة

-
فارسی

-
हिंदी

-
বাংলা

-
ภาษาไทย

-
中文 – 简体

-
中文 – 繁體

-
日本語

-
한국어

Sign in

-

Apps

-

Home

-

Products

-

ChromeOS

-

Apps

-

Publish

##
List your Progressive Web App in Google Play

Stay organized with collections

Save and categorize content based on your preferences.

By listing your PWA on Google Play, it becomes discoverable in the world’s largest app store. Google Play also offers app ratings and reviews, giving users insight into your PWA before installing it. Finally, when you list your app in Google Play, you also get the power of Google Play Billing, giving users a familiar payment platform to work with while supporting payments from multiple countries.

## Bubblewrap

Bubblewrap is a CLI to take your Progressive Web App and wrap it in an Android App Bundle for distribution through app stores, like Play on ChromeOS and Android, all without requiring Android app development knowledge.

To get started, install Bubblewrap from NPM:

$ npm install -g @bubblewrap/cli

To initialize your project, pass in your PWA’s web app manifest as input and Bubblewrap will generate an Android project to build your PWA Play package from.

$ bubblewrap init --manifest = " "

Then build the project and Bubblewrap will create the packages (APK or AAB) that can be uploaded to Google Play to be distributed.

$ bubblewrap build

Check the official CLI documentation for a quickstart guide and more details about the commands.

## ChromeOS only

If you already have a platform specific Android app, or do not wish to have a mobile experience, you can make your application available only on ChromeOS by adding the --chromeosonly flag in the init command:

$ bubblewrap init --manifest = " " --chromeosonly

If you have already initialized your application, you can change this configuration by setting the isChromeOSOnly flag to true in the twa-manifest.json file and running Bubblewrap’s update command.

## Signing Key

Your signing key designates you as the original author of the app and any updates that are made to that app need to use the original signing key. When initializing your project, Bubblewrap will ask for your existing key or create a new key for you.

It is very important to protect and not lose this key. If this key is lost, it may make it very difficult to update to your application in Google Play.

## Digital Asset Links

Setting up Digital Asset Links requires multiple steps: you need to gather information on your app from Google Play and deploy files at specific places in your web application. For tips on how to set up Digital Asset Links for your PWA, watch the video below:

Since the time of publishing this video, Bubblewrap no longer generates the Digital Asset Links file for you anymore. Check out the fingerprint command in the tool instead.

## Publishing your app to Google Play

When you’re ready to publish your app to Google Play, do the following:

- Make sure your Google Play Developer account is set up .

- Check that your developer account details are accurate.

- If you’re using Google Play Billing, set up your Google Payment Merchant account and link it to your Google Play account.

- Create your app’s listing in Google Play .

You can now release your app to Google Play! We recommend first releasing to a testing track with a trusted testers list to validate the app works as expected.

Note: We do not recommend the paid app option for PWAs published on Google Play. The installed PWA needs to be accessible from the user’s browser and the only means for determining if a navigation comes from a Play installed app are reliant on client-side checks and may not fire for every navigation. Because of this, there’s no secure way of limiting access in the same way that other paid apps can, so we instead recommend monetizing through in-app purchases and/or subscriptions .

## List a PWA for ChromeOS and a platform specific Android app under one listing

If you already have a well established Android presence with a platform specific Android application and would like to release a PWA to Google Play that is targeted just for Chromebooks, you can do it all in the same listing. Make sure that when you package your PWA, use the aforementioned ChromeOS only flag . This will ensure that the PWA version will only be available to Chromebooks. The same signing key needs to be used for both the PWA and Android app that are going to be sharing a Play Store listing.

Warning: Uploading a mobile Android app with a higher version number than your ChromeOS only app will replace your ChromeOS only app if the mobile Android app is also compatible with Chromebooks! As a best practice, set the ChromeOS app several versions higher than your mobile Android app. For instance 1000 for ChromeOS if the Android version is 1. Then as you create new releases for each, you can increment the version numbers accordingly as long as the ChromeOS version is always larger. When Play distributes your app, it uses the highest version available that is compatible with the given device.

When creating the ChromeOS release, make sure to include the latest released Android App Bundle. If the latest mobile package is not included in the ChromeOS release, users on mobile Android devices will not be able to install your app. In the “Previous release” section, find the APK or AAB that corresponds to the latest Android mobile version and select “Include”.

Similarly, when creating an Android release, you also need to include the latest released App Bundle for ChromeOS. Otherwise, users on ChromeOS will get the Android app when installing your app for the first time on their device, instead of the ChromeOS app.

## Complying with Google Play payment policies

If your PWA sells digital goods that fall under the Play payments policy , you must integrate Play billing into your app before it can be launched. Learn more on integrating Google Play Billing with your web app .

## Updating your PWA in Play

Because users are using your live web app after installing your PWA through Google Play, there are only a few scenarios when you’ll need to update your deployed app. These include:

- If the app is over a year old. In this case, you should update in order to ensure that your app works with the latest Android SDK.

- If you have separate mobile and Chrome OS-only packages under the same listing, and the platform specific Android version number exceeds your Chrome OS-only PWA version. In this case, you need to bump the PWA version and redeploy the app while retaining your platform specific Android app release.

- If there are new features you would like to take advantage of.

- If you have changed your web app manifest, for instance updating icons or the theme color, and want those changes applied to your PWA in Play. In this case, you should recompile your Bubblewrap project and redeploy the app.

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-10-29 UTC.

[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-10-29 UTC."],[],[]]
