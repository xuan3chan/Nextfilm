const express = require('express');
const router = express.Router();
const authUsersController = require('../Controllers/authUsersController');

router.post('/login', authUsersController.loginUserController);
router.post('/register', authUsersController.registerUserController);
router.post('/forgot-password', authUsersController.forgotPasswordController);
router.put('/reset-password', authUsersController.resetPasswordController);

module.exports = router;