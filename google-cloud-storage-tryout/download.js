const { Storage } = require("@google-cloud/storage");

const storage = new Storage();

const filePath =
  "/home/logic/_workspace/firebase-playlist/google-cloud-storage-tryout/helloworld.png";

const bucketName = "fir-tryout-f4e7a.appspot.com";
const fileName = "1/2/3/4/5/helloworld.png";
const destFileName = "temp.png";

async function downloadFile() {
  const options = {
    destination: destFileName,
  };

  // Downloads the file
  await storage.bucket(bucketName).file(fileName).download(options);

  console.log(`gs://${bucketName}/${fileName} downloaded to ${destFileName}.`);
}

// listBuckets().catch(console.error);
downloadFile().catch(console.error);
