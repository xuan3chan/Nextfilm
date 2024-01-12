const Multer = require('multer');
const bucket = require('./firebaseStorage');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const firebaseStorage = {
  _handleFile: async function _handleFile(req, file, cb) {
    try {
      if (file && file.originalname) {
        const originalName = path.basename(file.originalname, path.extname(file.originalname));
        const sanitizedOriginalName = originalName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const fileName = `${sanitizedOriginalName}-${uuidv4()}${path.extname(file.originalname)}`;
        const blob = bucket.file(fileName);
        const blobStream = blob.createWriteStream();

        blobStream.on('error', (err) => cb(err));
        blobStream.on('finish', () => {
          const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileName}?alt=media`;
          cb(null, { path: publicUrl });
        });

        blobStream.end(file.buffer);
      } else {
        console.error("Tệp tin hoặc tên tệp tin không xác định");
        cb(new Error('Tệp tin hoặc tên tệp tin không xác định'));
      }
    } catch (err) {
      cb(err);
    }
  },
_handleFile: async function _handleFile(req, file, cb) {
    try {
      if (file && file.originalname) {
        const originalName = path.basename(file.originalname, path.extname(file.originalname));
        const sanitizedOriginalName = originalName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const fileName = `${sanitizedOriginalName}-${uuidv4()}${path.extname(file.originalname)}`;
        const blob = bucket.file(fileName);
        const blobStream = blob.createWriteStream();

        blobStream.on('error', (err) => cb(err));
        blobStream.on('finish', () => {
          const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileName}?alt=media`;
          cb(null, { path: publicUrl });
        });

        blobStream.end(file.buffer);
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
  }
};

const upload = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 * 1024, // limit file size to 10GB
  },
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
  }
});

module.exports = {upload, firebaseStorage};