#!/usr/bin/env bash

set -ex

# npm install

# firebase deploy  --non-interactive --token $FIREBASE_TOKEN

cd functions
  npm install
  firebase deploy
cd ..
