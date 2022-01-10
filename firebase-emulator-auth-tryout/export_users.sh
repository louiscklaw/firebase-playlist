#!/usr/bin/env bash

set -ex

export GOOGLE_APPLICATION_CREDENTIALS=$HOME/.firebase-keys/lynked-demo-tryout-firebase-adminsdk-h5zru-2586f8f0a0.json

# firebase auth:export test.json --format=JSON

export FIREBASE_AUTH_EMULATOR_HOST="localhost:9099"
firebase auth:import ./test.json \
  --hash-algo=scrypt \
  --rounds=8 \
  --mem-cost=14 \
  --hash-key=$LYNKED_DEV_TEST_SECRET_KEY \
  --salt-separator=$LYNKED_DEV_TEST_PUBLISHABLE_KEY
