const express = require('express');
const router = express.Router();
const {verifyTokenAdmin} = require('../middlewares/auth');
const userController = require('../Controllers/userController');

router.get('/getall',verifyTokenAdmin, userController.getAllUsersController);

module.exports = router;