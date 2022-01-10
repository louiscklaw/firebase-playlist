const { Storage } = require("@google-cloud/storage");

const storage = new Storage();

const bucketName = "lynked-demo-tryout.appspot.com";
const fileName = "1/2/3/4/5/helloworld.png";
const destFileName = "temp.png";

async function listBuckets() {
  const [buckets] = await storage.getBuckets();

  console.log("Buckets:");
  buckets.forEach((bucket) => {
    console.log(bucket.name);
  });
}

async function getMetadata(bucketName, fileName) {
  // Gets the metadata for the file
  const [metadata] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getMetadata();

  // console.log(`Bucket: ${metadata.bucket}`);
  // console.log(`CacheControl: ${metadata.cacheControl}`);
  // console.log(`ComponentCount: ${metadata.componentCount}`);
  // console.log(`ContentDisposition: ${metadata.contentDisposition}`);
  // console.log(`ContentEncoding: ${metadata.contentEncoding}`);
  // console.log(`ContentLanguage: ${metadata.contentLanguage}`);
  // console.log(`ContentType: ${metadata.contentType}`);
  // console.log(`CustomTime: ${metadata.customTime}`);
  // console.log(`Crc32c: ${metadata.crc32c}`);
  // console.log(`ETag: ${metadata.etag}`);
  // console.log(`Generation: ${metadata.generation}`);
  // console.log(`Id: ${metadata.id}`);
  // console.log(`KmsKeyName: ${metadata.kmsKeyName}`);
  // console.log(`Md5Hash: ${metadata.md5Hash}`);
  // console.log(`MediaLink: ${metadata.mediaLink}`);
  // console.log(`Metageneration: ${metadata.metageneration}`);
  // console.log(`Name: ${metadata.name}`);
  // console.log(`Size: ${metadata.size}`);
  // console.log(`StorageClass: ${metadata.storageClass}`);
  // console.log(`TimeCreated: ${new Date(metadata.timeCreated)}`);
  // console.log(`Last Metadata Update: ${new Date(metadata.updated)}`);
  // console.log(
  //   `temporaryHold: ${metadata.temporaryHold ? "enabled" : "disabled"}`
  // );
  // console.log(
  //   `eventBasedHold: ${metadata.eventBasedHold ? "enabled" : "disabled"}`
  // );
  // if (metadata.retentionExpirationTime) {
  //   console.log(
  //     `retentionExpirationTime: ${new Date(metadata.retentionExpirationTime)}`
  //   );
  // }
  // if (metadata.metadata) {
  //   console.log("\n\n\nUser metadata:");
  //   for (const key in metadata.metadata) {
  //     console.log(`${key}=${metadata.metadata[key]}`);
  //   }
  // }

  return metadata.mediaLink;
}

async function listFilesByPrefix() {
  const options = { prefix: "test/" };
  const [files] = await storage.bucket(bucketName).getFiles(options);

  // console.log("Files:");
  // files.forEach((file) => {
  //   console.log(file.name);
  // });
  return files;
}

async function listFiles() {
  // Lists files in the bucket
  const [files] = await storage.bucket(bucketName).getFiles();

  console.log("Files:");
  files.forEach((file) => {
    console.log(file.name);
  });
}

// listBuckets().catch(console.error);
listFilesByPrefix()
  .then(async (file_list) => {
    console.log(file_list.map((f) => [f.name, f.metadata.mediaLink]));
  })
  .catch(console.error);
