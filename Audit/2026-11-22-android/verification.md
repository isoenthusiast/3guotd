# Offline Android playtest verification

- Android source commit `6166213f7ba5ca097ab2de087fba31369e84a1b1`
- Accepted web baseline `9d8b0a4414270fa298dc9c243d411617c37aff55`
- Package `com.isoenthusiast.threeguotd`, version `0.1.0-android.1`, version code 2
- APK SHA-256 `ece0d208df020aff77f37ab35860c54a87a451d9461ca482b27b1be94d9f7554`
- Signing certificate SHA-256 `5c52621167ac29e28d13021c9ef826fcaf5ffed7602e2752309709633f47fb9f`

The release APK passed apksigner v1, v2, and v3 verification and has debugging disabled. It requests no Android internet permission and contains a byte-for-byte copy of the published game files. Capacitor serves those files locally. The separately published web build retains its own service worker and deployment pointer.

The update test installed a signed code-1 packaging fixture with the same package and signer, created a manual save with three towers and zero silver, installed code 2 with `adb install -r`, and restored that save offline on the Android 15 emulator. The fixture was built for this test and was kept local.

On the Android 15 HONOR PGT-N19, airplane mode was on and Wi-Fi and mobile data were off before the first launch. A system USB dialog initially covered the screen. Dismissing it allowed the local game to be tested. The installed APK entered Village Watch, bought three towers, returned from the cross-linked field guide via system Back, retained the active battle after Home and resume, and restored the manual save after an explicit force-stop and new process.

The emulator completed all three waves of Village Watch Level 1 in airplane mode and entered Level 2 with 233 silver and three lives. The handset also entered Level 2 with 233 silver. Its radios were restored partway through the run, so the emulator supplies the uninterrupted airplane-mode completion result. On the handset the system Back key then returned to the title with Continue, and a second Back returned to the Android launcher.

SimaYi accepted this exact digest in [AUD-025](audit.md). The Android source was pushed, and Fengchu's relay confirmed delivery of the signed APK to Edward's private Telegram chat.
