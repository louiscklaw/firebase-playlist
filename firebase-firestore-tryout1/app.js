const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");
// create element and render cafe

// get all data
db.collection("cafes")
  .doc("OE7RnnUWk0ymPRYOphRQ")
  .get()
  .then((doc) => {
    console.log("doc", doc.data());
  });
