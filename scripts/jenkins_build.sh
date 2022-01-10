#!/usr/bin/env bash

set -ex

echo 'helloworld'

pushd helloworld
  scripts/build.sh
popd
