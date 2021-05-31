const { Storage } = require("@google-cloud/storage");

const storage = new Storage();

const filePath =
  "/home/logic/_workspace/firebase-playlist/google-cloud-storage-tryout/helloworld.png";

const bucketName = "fir-tryout-f4e7a.appspot.com";

async function uploadFile() {
  await storage
    .bucket(bucketName)
    .upload(filePath, {
      destination: "1/2/3/4/5/helloworld.png",
      public: true,
    });

  console.log(`${filePath} uploaded to ${bucketName}`);
}

// listBuckets().catch(console.error);
uploadFile().catch(console.error);
