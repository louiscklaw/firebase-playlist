const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const express = require("express");
const cors = require("cors");

const runtimeOpts = {
  timeoutSeconds: 10,
  memory: "256MB",
};

// Firebase initialization
const firebaseApp = firebase.initializeApp(functions.config().firebase);

// Express instance
const app = express();
app.use(cors({ origin: true }));

// Set up for urlencoded bodies
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Setting up routes
require("./stripe/helloworld")(app);

// Run express as a firebase cloud function
exports.stripe_app = functions.runWith(runtimeOpts).https.onRequest(app);
