#!/usr/bin/env bash
set -euo pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.."
project=$PWD
commit=$(git rev-parse --verify 'HEAD^{commit}')
releases="$project/.releases"
mkdir -p "$releases"

# Keep the current release in place until the replacement passes all checks.
exec 9>"$releases/publish.lock"
flock 9
staging=$(mktemp -d "$releases/.build.XXXXXX")
trap 'rm -rf -- "$staging"' EXIT
mkdir "$staging/source"
git archive "$commit" | tar -x -C "$staging/source"
(
  cd "$staging/source"
  npm ci
  npm test
  npm run build
  test -s dist/index.html
  test -s dist/sw.js
)

release="build-$commit"
if [[ ! -d "$releases/$release" ]]; then
  mv -T -- "$staging/source/dist" "$releases/$release"
fi
ln -s -- "$release" "$staging/current"
mv -Tf -- "$staging/current" "$releases/current"
printf 'Published %s\n' "$commit"
