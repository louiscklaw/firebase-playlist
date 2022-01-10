/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';

// The ID of your GCS file
// const fileName = 'your-file-name';

// Imports the Google Cloud client library
const { Storage } = require("@google-cloud/storage");

// Creates a client
const storage = new Storage();

const bucketName = "fir-tryout-f4e7a.appspot.com";
const fileName = "1/2/3/4/5/helloworld.png";
const destFileName = "temp.png";

async function getMetadata() {
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
  console.log(`MediaLink: ${metadata.mediaLink}`);
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
}

getMetadata().catch(console.error);
