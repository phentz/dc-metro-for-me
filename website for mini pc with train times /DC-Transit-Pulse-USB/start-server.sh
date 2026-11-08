#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server 8080 --bind 127.0.0.1
elif command -v python >/dev/null 2>&1; then
  exec python -m http.server 8080 --bind 127.0.0.1
else
  echo "Python 3 is required. Install it from https://www.python.org/downloads/"
  exit 1
fi
