const tvSeriesController = require('../Controllers/tvSeriesController');
const express = require('express');
const router = express.Router();
const {upload}  = require('../middlewares/multer');
const {verifyAdmin} = require('../middlewares/auth');

router.post('/add', upload.fields([{ name: 'poster', maxCount: 3 }, { name: 'trailer', maxCount: 1 }]), tvSeriesController.addTvSeriesController);
router.get('/getall', tvSeriesController.getTvSeriesController);

module.exports = router;