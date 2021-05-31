const { Storage } = require("@google-cloud/storage");

const storage = new Storage();

async function listBuckets() {
  const [buckets] = await storage.getBuckets();

  console.log("Buckets:");
  buckets.forEach((bucket) => {
    console.log(bucket.name);
  });
}

async function listFiles() {
  // Lists files in the bucket
  const [files] = await storage
    .bucket(`fir-tryout-f4e7a.appspot.com`)
    .getFiles();

  console.log("Files:");
  files.forEach((file) => {
    console.log(file.name);
  });
}

listBuckets().catch(console.error);
listFiles().catch(console.error);
