const authAdminController = require('../Controllers/authAdminController');
const express = require('express');
const router = express.Router();

router.post('/login', authAdminController.loginAdminController);


module.exports = router;