const express = require('express');
const router = express.Router();
const authUsersController = require('../Controllers/authUsersController');

router.post('/login', authUsersController.loginUserController);
router.post('/register', authUsersController.registerUserController);

module.exports = router;