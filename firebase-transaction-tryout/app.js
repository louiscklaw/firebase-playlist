console.log("helloworld app.js");

var firebaseConfig = {
  apiKey: "AIzaSyBnmrMAfoQvVRgXCIPG2wLiGO15s7u4bRY",
  authDomain: "fir-tryout-f4e7a.firebaseapp.com",
  databaseURL: "https://fir-tryout-f4e7a.firebaseio.com",
  projectId: "fir-tryout-f4e7a",
  storageBucket: "fir-tryout-f4e7a.appspot.com",
  messagingSenderId: "859668436628",
  appId: "1:859668436628:web:32fcc829845132db900681",
  measurementId: "G-Z001Y7HBM2",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// // Create a reference to the SF doc.
// var sfDocRef = db.collection("cities").doc("SF");

// db.runTransaction((transaction) => {
//   return transaction.get(sfDocRef).then((sfDoc) => {
//     if (!sfDoc.exists) {
//       throw "Document does not exist!";
//     }

//     var newPopulation = sfDoc.data().population + 1;
//     if (newPopulation <= 1000000) {
//       transaction.update(sfDocRef, { population: newPopulation });
//       return newPopulation;
//     } else {
//       return Promise.reject("Sorry! Population is too big.");
//     }
//   });
// })
//   .then((newPopulation) => {
//     console.log("Population increased to ", newPopulation);
//   })
//   .catch((err) => {
//     // This will be an "population is too big" error.
//     console.error(err);
//   });

// Create a reference to the SF doc.
var citiesCollection = db.collection("cities");

db.runTransaction((transaction) => {
  return transaction.get(citiesCollection).then((ss) => {
    ss.forEach((doc) => {
      console.log("doc_data", doc.data());
    });
  });
});

// .then(() =>{
//   console.log('done')
// })
