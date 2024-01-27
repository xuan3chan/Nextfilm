const filmController = require('../Controllers/filmController');
const express = require('express');
const router = express.Router();
const {upload}  = require('../middlewares/multer');
const {verifyAdmin} = require('../middlewares/auth');

router.post('/add', upload.fields([{ name: 'poster', maxCount: 3 }, { name: 'video', maxCount: 1 }, { name: 'trailer', maxCount: 1 }]), filmController.addFilmController);
router.put('/update/:id', upload.fields([{ name: 'poster', maxCount: 3 }, { name: 'video', maxCount: 1 }, { name: 'trailer', maxCount: 1 }]), filmController.updateFilmController);
router.delete('/delete/:id', filmController.deleteFilmController);
router.get('/getall', filmController.getAllFilmController);
router.get('/getbyid/:id', filmController.getFilmByIdController);


module.exports = router;
