URL: https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing
TITLE: Receive payments with Google Play Billing in a Trusted Web Activity
RETRIEVED: 2026-11-22
METHOD: curl

Skip to main content

/

-
English

-
Deutsch

-
Español – América Latina

-
Français

-
Indonesia

-
Italiano

-
Nederlands

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

Docs

-

Web on Android

-

Home

-

Docs

-

Web on Android

-

Trusted Web Activity

##
Use Google Play Billing in your Trusted Web Activity

Stay organized with collections

Save and categorize content based on your preferences.

André Cipriani Bandarra

This guide is for web apps packaged as a Trusted Web Activity . For
Android apps written in Kotlin or Java, see the
Google Play Billing documentation .

Apps on Google Play that sell digital goods or subscriptions must use Google
Play Billing. In a Trusted Web Activity, you integrate with it using the
following web APIs, available in Chrome 101 and later on Android and ChromeOS:

- Digital Goods API : Retrieves product details and the user's
purchases.

- Payment Request API : Starts the purchase flow.

## Requirements

To set up Google Play Billing, you need the following:

- A Google Play Developer account and a Google Payments merchant account
that are linked to each other .

- A Play Store listing with a
release on the public, closed testing, or internal testing track .

- Your app's products and subscriptions configured in the Play Console .

- A Trusted Web Activity project with a working
Digital Asset Links configuration .

Don't charge users to download your app from the Play Store. Your PWA is still
available on the web, so a paid download doesn't restrict access. Instead, sell
features or content with in-app purchases or subscriptions.

## Enable Play Billing in your Android project

If you build your app with Bubblewrap , enable the playBilling feature in
twa-manifest.json at the root of your project:

"features" : {
"playBilling" : {
"enabled" : true
}
}

Then run bubblewrap update followed by bubblewrap build , and upload the new
Android package to the Play Store.

If you build your app in Android Studio, add the
Android Browser Helper Play Billing library . For the required
DelegationService and AndroidManifest.xml changes, see the
twa-play-billing demo .

## Check for Google Play Billing support

Call getDigitalGoodsService() with the Play Store identifier,
https://play.google.com/billing . If the method is missing or the call fails,
use another payment flow:

if ( 'getDigitalGoodsService' in window ) {
try {
const service =
await window . getDigitalGoodsService ( 'https://play.google.com/billing' );
// Google Play Billing is available.
} catch ( error ) {
// Google Play Billing isn't available. Use another payment flow.
}
}

## Display product details

Use getDetails() to retrieve the title, description, and price for your
product IDs, so that the prices you display match the Play Store:

const details = await service . getDetails ([ 'shiny_sword' , 'gem' ]);
for ( const item of details ) {
const localizedPrice = new Intl . NumberFormat (
navigator . language ,
{ style : 'currency' , currency : item . price . currency }
). format ( item . price . value );

renderProductDetails (
item . itemId , item . title , localizedPrice , item . description );
}

The Digital Goods API can't list your product IDs. To query them from your
backend, use the Google Play Developer API .

## Make a purchase

Create a PaymentRequest with https://play.google.com/billing as the payment
method and the product ID as sku in data . Google Play Billing uses the price
from the Play Console, so total is required but ignored.

After show() resolves, send the purchase token to your backend to
verify and acknowledge the purchase . If you don't acknowledge a purchase
within three days, Google Play refunds the user and
revokes the purchase .

async function makePurchase ( service , sku ) {
const paymentMethods = [{
supportedMethods : 'https://play.google.com/billing' ,
data : { sku },
}];
// Required by the Payment Request API, but ignored by Google Play Billing.
const paymentDetails = {
total : { label : 'Total' , amount : { currency : 'USD' , value : '0' }},
};

const request = new PaymentRequest ( paymentMethods , paymentDetails );
try {
const response = await request . show ();
const { purchaseToken } = response . details ;

if ( await acknowledgePurchaseOnBackend ( purchaseToken , sku )) {
// Optional: consume the purchase so the user can buy the item again.
await service . consume ( purchaseToken );
await response . complete ( 'success' );
} else {
await response . complete ( 'fail' );
}
} catch ( error ) {
// An AbortError usually means the user canceled the purchase.
}
}

## Check a user's purchases

Use listPurchases() to find items the user owns, such as active
subscriptions, unconsumed purchases, or redeemed promo codes. Verify each
purchase on your backend, and acknowledge any you haven't acknowledged:

const purchases = await service . listPurchases ();
for ( const p of purchases ) {
await verifyOrAcknowledgePurchaseOnBackend ( p . purchaseToken , p . itemId );
// Update the UI with items the user is entitled to.
}

## Test your integration

To test on an Android device before you publish to the Play Store, follow these
steps:

- Use Android 9 or later with developer options enabled .

- In Chrome, go to chrome://flags and enable
#enable-debug-for-store-billing .

- Serve your site over HTTPS. The Digital Goods API isn't available over HTTP.

When your app is installed from the Play Store, you don't need the flag. To test
with test accounts and test products, see
Test your Google Play Billing Library integration .

## Next steps

- Verify purchases on your backend with a
Google Play Developer API client library .

- Learn how to sell subscriptions .

- Set up real-time developer notifications to track subscription changes.

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-10-15 UTC.

[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-10-15 UTC."],[],[]]
