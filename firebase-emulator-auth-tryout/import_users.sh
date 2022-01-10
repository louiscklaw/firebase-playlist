#!/usr/bin/env bash

set -ex

export GOOGLE_APPLICATION_CREDENTIALS=$HOME/.firebase-keys/lynked-demo-tryout-firebase-adminsdk-h5zru-2586f8f0a0.json

export FIREBASE_AUTH_EMULATOR_HOST="localhost:9099"

node ./import_users.js
