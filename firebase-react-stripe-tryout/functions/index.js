"use strict";

const path = require("path");
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Stripe } = require("stripe");
const stripe = new Stripe(functions.config().stripe.secret, {
  apiVersion: "2020-08-27",
});

const card_pay = express();
const main = express();
main.use(cors());
main.use("/api/card_pay", card_pay);
main.use(bodyParser.json());

card_pay.get("/", async (req, res) => {
  console.log(req);
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
