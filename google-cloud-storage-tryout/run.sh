#!/usr/bin/env bash

set -ex

export GOOGLE_APPLICATION_CREDENTIALS="/home/logic/.firebase-keys/fir-tryout-f4e7a-firebase-adminsdk-ylqrb-35bbb11924.json"

# node ./index.js
# node ./upload.js
# node ./download.js
# node ./object_meta.js
node ./delete.js
