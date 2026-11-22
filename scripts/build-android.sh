#!/usr/bin/env bash
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.."

: "${ANDROID_HOME:?Set ANDROID_HOME to the Android SDK directory}"
: "${GUO_ANDROID_KEYSTORE:?Set GUO_ANDROID_KEYSTORE to the playtest signing key}"
: "${GUO_ANDROID_PASSWORD_FILE:?Set GUO_ANDROID_PASSWORD_FILE to the signing password file}"
output=${1:?Provide an absolute output APK path}
[[ $output == /*.apk && ! -e $output ]]
tools="$ANDROID_HOME/build-tools/35.0.0"

npm run build
npx --no-install cap sync android
(cd android && ./gradlew :app:assembleRelease)
unsigned=android/app/build/outputs/apk/release/app-release-unsigned.apk
stage=$(mktemp -d "$(dirname "$output")/.apk.XXXXXX")
trap 'rm -rf -- "$stage"' EXIT
"$tools/zipalign" -p -f 4 "$unsigned" "$stage/aligned.apk"
"$tools/apksigner" sign --ks "$GUO_ANDROID_KEYSTORE" --ks-key-alias threeguotd \
  --ks-pass "file:$GUO_ANDROID_PASSWORD_FILE" --out "$stage/signed.apk" "$stage/aligned.apk"
"$tools/apksigner" verify "$stage/signed.apk"
mv -n -- "$stage/signed.apk" "$output"
test ! -e "$stage/signed.apk"
sha256sum "$output"
