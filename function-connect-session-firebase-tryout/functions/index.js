const functions = require("firebase-functions");

const express = require("express");
const session = require("express-session");
const cors = require("cors");

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

const runtimeOpts = {
  timeoutSeconds: 10,
  memory: "256MB",
};

// Initialize Firebase
const ref = firebase.initializeApp(firebaseConfig);

const app = express();
app.use(cors({ origin: true }));
app.use(
  session({
    store: new FirebaseStore({
      database: ref.database(),
      reapInterval: 21600000, //default to 6 hrs
      reapCallback: () => {
        console.log("sessions reaped");
      },
    }),
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 21600000 },
  })
);

require("./helloworld")(app);

exports.helloworld2 = functions.runWith(runtimeOpts).https.onRequest(app);
