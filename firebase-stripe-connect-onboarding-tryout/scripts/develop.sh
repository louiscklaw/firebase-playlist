#!/usr/bin/env bash

set -ex


export GOOGLE_APPLICATION_CREDENTIALS=/home/logic/.firebase-keys/fir-tryout-f4e7a-firebase-adminsdk-ylqrb-35bbb11924.json

firebase functions:config:get > .runtimeconfig.json

pushd functions
  npm run serve
popd
