"use strict";

const path = require("path");
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
