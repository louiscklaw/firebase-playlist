const { Storage } = require("@google-cloud/storage");

const storage = new Storage();

const filePath =
  "/home/logic/_workspace/firebase-playlist/google-cloud-storage-tryout/helloworld.png";

const bucketName = "fir-tryout-f4e7a.appspot.com";
const fileName = "1/2/3/4/5/helloworld.png";
const destFileName = "temp.png";

async function deleteFile() {
  await storage.bucket(bucketName).file(fileName).delete();

  console.log(`gs://${bucketName}/${fileName} deleted`);
}

deleteFile().catch(console.error);
