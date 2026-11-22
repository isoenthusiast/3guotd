# Signed Android APK acceptance

Review `AUD-025`, 2026-11-22. **Accept the exact APK below for private Android playtest.**

- Artifact `3guo-0.1.0-android.1.apk` under `.releases/android/6166213f7ba5ca097ab2de087fba31369e84a1b1/`.
- SHA-256 `ece0d208df020aff77f37ab35860c54a87a451d9461ca482b27b1be94d9f7554`.
- Source `6166213f7ba5ca097ab2de087fba31369e84a1b1` and accepted web baseline `9d8b0a4414270fa298dc9c243d411617c37aff55`.
- Application ID `com.isoenthusiast.threeguotd`, version `0.1.0-android.1`, code 2, min SDK 23, target SDK 35.

## Independent static checks

Verified SHA-256, ZIP CRCs, ZIP alignment, merged manifest, and APK signature schemes v1–v3. The single playtest signer has SHA-256 certificate fingerprint `5c52621167ac29e28d13021c9ef826fcaf5ffed7602e2752309709633f47fb9f`. The code-1 update fixture uses the same package and certificate. The packaged release manifest has no INTERNET permission, sets allowBackup false, and has no debuggable flag. The exported activity is the launcher. The FileProvider is non-exported, and the exported AndroidX profile receiver requires android.permission.DUMP. APK Signer reports JAR-only META-INF warnings. APK-level v2 and v3 verification passed.

Built the exact source archive and ran `npm test` and `npm run build`. All eight web build files in the APK match both the independently built source and the accepted web baseline byte-for-byte. Capacitor adds its local bridge and shims. Its packaged config uses local HTTPS, disables mixed content and disables WebView debugging. DEX inspection confirmed the Back callback calls WebView history when available, then delegates to the Android dispatcher at root. Compared against code 1, all 17 DEX and asset entries match. The update fixture exercises package replacement and data retention across a version increment.

## Device evidence reviewed

- **Android 15 emulator.** The supplied `update-install-final.log` and `update-accepted.log` record a successful signed code-1-to-2 in-place install and offline restoration of the three-tower manual save. `emulator-observed.log` records all three Village Watch Level 1 waves completing in airplane mode and Level 2 starting at 233 silver and three lives.
- **HONOR PGT-N19, Android 15.** The supplied `hardware-retry2.log` records first launch with airplane mode on and Wi-Fi and mobile data off. `hardware-complete.log` records native Back through the sibling guide and Orders to the retained battle, Home/resume retention, and manual restore in a new process. `hardware-root.log` records Level 2 and Back from battle to title with Continue, then the HONOR launcher. Handset radios were restored before the last wave finished. The emulator supplies the uninterrupted airplane-mode completion evidence.
- Early automation attempts encountered a USB dialog, accessibility-tree failures and selection checks that needed adjustment. The completed logs above establish the tested paths. Device and emulator operation was performed by the lead. [Device verification](verification.md)

Acceptance applies to the exact signed artifact and the tested Android 15 paths.
