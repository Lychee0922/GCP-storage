exports.uploadFile = async (filename) => {
    // Uploads a local file to the bucket
    await bucket.upload(filename, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        // By setting the option `destination`, you can change the name of the
        // object you are uploading to a bucket.
        metadata: {
            // Enable long-lived HTTP caching headers
            // Use only if the contents of the file will never change
            // (If the contents will change, use cacheControl: 'no-cache')
            cacheControl: 'public, max-age=31536000',
        },
    });
    console.log(`${filename} uploaded to ${process.env.GCP_BUCKET_NAME}.`);
}

exports.deleteFile = async (filename) => {
    // Deletes the file from the bucket
    await bucket.file(filename).delete();
    console.log(`gs://${process.env.GCP_BUCKET_NAME}/${filename} deleted.`);
}

exports.listFiles = async () => {
    // Lists files in the bucket
    const [files] = await storage.bucket(bucketName).getFiles();

    console.log('Files:');
    files.forEach(file => {
        console.log(file.name);
    });
}

exports.downloadFile = async (srcFileName, destFileName) => {
    // Downloads the file
    await bucket.file(srcFilename).download({
        destination: destFileName
    });

    console.log(
        `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
    );

}
