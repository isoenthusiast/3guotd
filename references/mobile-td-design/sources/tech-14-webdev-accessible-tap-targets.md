URL: https://web.dev/articles/accessible-tap-targets
TITLE: Make tap targets accessible - web.dev
RETRIEVED: 2026-11-22
METHOD: curl

Skip to main content

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

Resources

Modern Web Guidance is now stable! Upgrade your coding agents with expert-vetted web development best practices. Read the announcement .

-

web.dev

-

Resources

##
Accessible tap targets

Stay organized with collections

Save and categorize content based on your preferences.

Dave Gash

Meggin Kearney

Patrick H. Lauke

Rachel Andrew

Technical Writer

Rob Dodson

When your design is displayed on a mobile device, make sure that interactive
elements, such as buttons or links, are large enough and have enough
space around them. This makes it easier for users to press without
accidentally overlapping onto other elements. This benefits all users,
but is especially helpful for anyone with a motor impairment.

A minimum recommended touch target size is around 48 device independent pixels
on a site with a properly set mobile viewport.
For example, while an icon may only have a width and height of 24px,
you can use additional padding to bring the tap target size up to 48px.
The 48x48 pixel area corresponds to around 9mm,
which is about the size of a person's finger pad area.

Touch targets should also be spaced about 8 pixels apart, horizontally and
vertically, so that a user's finger pressing on one tap target does not
inadvertently touch another tap target.

## Test your touch targets

If your target is text and you have used relative values such as em or rem
to size the text and any padding, you can use developer tools
to check that the computed value of that area is large enough.

Inspect the link. In Chrome DevTools switch to the
Computed pane
where you can inspect the various parts of the box and see what pixel size
they resolve to. In Firefox DevTools there is a Layout Panel.
In that Panel you get the actual size of the inspected element.

## Detect touchscreen with media queries

Instead of testing for viewport dimensions and guessing small dimensions that
are likely to be phones or tablets, there are more robust ways to adapt
your design based on actual device capabilities.

With media queries, we can detect whether a user's primary input is touchscreen
( pointer ) and if any of the detected inputs is a touchscreen ( any-pointer ).
The pointer and any-pointer features return fine or coarse .
A fine pointer indicates the user has a mouse or trackpad. This is still true if
the mouse is connected by Bluetooth to a phone or tablet. A coarse pointer
indicates a touchscreen, which can be any size or type of device.

If you add a media query to increase the touch target, test for a coarse pointer
so you can increase the tap targets for all touchscreen users, no matter
what device they're using.

. container a {
padding : .2 em ;
}

@ media ( any-pointer : coarse ) {
. container a {
padding : .8 em ;
}
}

Find out more about interaction media features, such as pointer , in
Responsive web design basics .

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2020-03-31 UTC.

[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2020-03-31 UTC."],[],[]]
