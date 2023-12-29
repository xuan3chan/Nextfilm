const multer = require('multer');
const storage = require('./firebaseStorage');
const { v4: uuidv4 } = require('uuid');

const uploadImage = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // limit file size to 5MB
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/; // accept jpeg, jpg, png, and gif file formats
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb('Error: File upload only supports the following filetypes - ' + filetypes);
    }
});

const uploadVideo = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 50 * 1024 * 1024 // limit file size to 50MB
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /mp4|webm|ogg/; // accept mp4, webm, and ogg file formats
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb('Error: File upload only supports the following filetypes - ' + filetypes);
    }
});

const uploadFileToFirebase = (req, res, next) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    const blob = storage.file(`${uuidv4()}-${file.originalname}`);
    const blobStream = blob.createWriteStream({
        resumable: false
    });
    blobStream.on('finish', () => {
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${encodeURI(blob.name)}?alt=media`;
        req.file = publicUrl;
        next();
    });
    blobStream.end(file.buffer);
}

module.exports = {
    uploadImage,
    uploadVideo,
    uploadFileToFirebase
}