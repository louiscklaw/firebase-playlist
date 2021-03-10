#!/usr/bin/env bash

set -ex

npm install

# firebase deploy  --non-interactive --token $FIREBASE_TOKEN

cd functions
  npm install

  firebase -f --non-interactive functions:delete helloWorld

  firebase deploy -f --non-interactive --only functions

cd ..
