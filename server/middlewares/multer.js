const Multer = require('multer');
const bucket = require('./firebaseStorage');
const { v4: uuidv4 } = require('uuid');
const { Readable } = require('stream');
const https = require('https');
const path = require('path');

const agent = new https.Agent({
  secureProtocol: 'TLSv1_1_method', // Replace 'TLSv1_method' with the appropriate protocol method
});

const firebaseStorage = {
  _handleFile: async function _handleFile(req, file, cb) {
    try {
      if (file && file.originalname) {
        const originalName = path.basename(file.originalname, path.extname(file.originalname));
        const sanitizedOriginalName = originalName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const fileName = `${sanitizedOriginalName}-${uuidv4()}${path.extname(file.originalname)}`;
        const blob = bucket.file(fileName);
        const blobStream = blob.createWriteStream({
          resumable: true,
          public: true,
          metadata: { contentType: file.mimetype },
          private: false,
          agent: agent,
        });

        // Create a stream from the buffer
        const fileStream = new Readable();
        fileStream.push(file.buffer);
        fileStream.push(null);

        fileStream.pipe(blobStream)
          .on('error', (err) => cb(err))
          .on('finish', () => {
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileName}?alt=media`;
            cb(null, { path: publicUrl });
          });
      } else {
        console.error("Tệp tin hoặc tên tệp tin không xác định");
        cb(new Error('Tệp tin hoặc tên tệp tin không xác định'));
      }
    } catch (err) {
      cb(err);
    }
  },
  _removeFile: async function _removeFile(fileUrl) {
    return new Promise(async (resolve, reject) => {
      try {
        if (fileUrl) {
          const urlParts = fileUrl.split('/');
          const fileName = decodeURIComponent(urlParts[urlParts.length - 1].split('?')[0]);
          const blob = bucket.file(fileName);
          const [exists] = await blob.exists();
          if (exists) {
            await blob.delete();
          }
          resolve();
        } else {
          console.error("URL không xác định");
          reject(new Error('URL không xác định'));
        }
      } catch (err) {
        reject(err);
      }
    });
  },
};

const upload = Multer({
  storage: Multer.memoryStorage(),

  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
      "video/mp4",
      "video/mpeg",
      "video/quicktime",
      "video/webm",
      "video/ogg",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only image and video files are allowed.'), false);
    }
  },
});

module.exports = { upload, firebaseStorage };
