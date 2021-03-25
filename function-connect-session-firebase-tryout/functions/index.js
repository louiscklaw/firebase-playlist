const functions = require("firebase-functions");

const express = require("express");
const session = require("express-session");
const FirebaseStore = require("connect-session-firebase")(session);
const firebase = require("firebase-admin");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBnmrMAfoQvVRgXCIPG2wLiGO15s7u4bRY",
  authDomain: "fir-tryout-f4e7a.firebaseapp.com",
  databaseURL: "https://fir-tryout-f4e7a.firebaseio.com",
  projectId: "fir-tryout-f4e7a",
  storageBucket: "fir-tryout-f4e7a.appspot.com",
  messagingSenderId: "859668436628",
  appId: "1:859668436628:web:32fcc829845132db900681",
};

// Initialize Firebase
const ref = firebase.initializeApp(firebaseConfig);

express().use(
  session({
    store: new FirebaseStore({
      database: ref.database(),
    }),
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

const { hello2 } = require("./helloworld.js");

exports.helloworld2 = hello2;
