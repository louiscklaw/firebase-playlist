// Replace if using a different env file or config
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const { resolve } = require("path");
const session = require("express-session");
const MENY_DEV_SECRET_KEY =
  "sk_test_51IQlWZDzQBKP7hmY6J8HRJFydM6OBwr2rzqhgR5x9yYqXS2r7bctF5DZ4klJ4wcWHIlfk2s7VBtLlUQXNwwK727j003Lw8d3bU";
const stripe = require("stripe")(MENY_DEV_SECRET_KEY);

const STATIC_DIR = "./stripe/client";

const firebase = require("firebase-admin");
const db = firebase.firestore();

function generateAccountLink(accountID, origin) {
  return stripe.accountLinks
    .create({
      type: "account_onboarding",
      account: accountID,
      refresh_url: `http://localhost:6001/fir-tryout-f4e7a/us-central1/stripe/onboard-user/refresh`,
      return_url: `http://localhost:6001/fir-tryout-f4e7a/us-central1/stripe/success.html`,
    })
    .then((link) => link.url);
}

// Routes
module.exports = (app) => {
  app.use(express.static(STATIC_DIR));
  app.use(
    session({
      secret: "Set this to a random string that is kept secure",
      resave: false,
      saveUninitialized: true,
    })
  );

  app.get("/onboard-user/refresh", async (req, res) => {
    if (!req.session.accountID) {
      res.redirect("/");
      return;
    }
    try {
      const { accountID } = req.session;
      const origin = `${req.secure ? "https://" : "https://"}${
        req.headers.host
      }`;

      const accountLinkURL = await generateAccountLink(accountID, origin);
      res.redirect(accountLinkURL);
    } catch (err) {
      res.status(500).send({
        error: err.message,
      });
    }
  });

  app.post("/onboard-user", async (req, res) => {
    try {
      const account = await stripe.accounts.create({ type: "standard" });
      req.session.accountID = account.id;
      const origin = `${req.headers.origin}`;
      const accountLinkURL = await generateAccountLink(account.id, origin);
      console.log("account.id", account.id);
      res.send({ url: accountLinkURL });
    } catch (err) {
      res.status(500).send({
        error: err.message,
      });
    }
  });

  app.get("/", (req, res) => {
    const path = resolve(STATIC_DIR + "/index.html");
    res.sendFile(path);
  });
};
