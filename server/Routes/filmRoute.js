const filmController = require('../Controllers/filmController');
const express = require('express');
const router = express.Router();
const {upload}  = require('../middlewares/multer');

router.post('/add', upload.fields([{ name: 'poster', maxCount: 3 }, { name: 'video', maxCount: 1 }, { name: 'trailer', maxCount: 1 }]), filmController.addFilmController);
router.put('/update/:id', upload.fields([{ name: 'poster', maxCount: 1 }, { name: 'video', maxCount: 1 }, { name: 'trailer', maxCount: 1 }]), filmController.updateFilmController);


module.exports = router;
