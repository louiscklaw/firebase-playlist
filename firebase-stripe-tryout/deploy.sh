#!/usr/bin/env bash

set -ex

export GOOGLE_APPLICATION_CREDENTIALS=/home/logic/.firebase-keys/fir-tryout-f4e7a-firebase-adminsdk-ylqrb-35bbb11924.json

# firebase functions:config:set stripe.secret=sk_test_51IR3dcFBIXj9AS8VoM6PqiGhEBow6b2fYncEnhYEn9CH47GagFENBGIgIvmqUA2FX34ZQNq3pUfxKb02ncip1GbI00rAVJyisV

firebase deploy --only "functions:createStripeCustomer,functions:addPaymentMethodDetails,functions:createStripePayment,functions:cleanupUser,functions:confirmStripePayment"
