const authAdminController = require('../Controllers/authAdminController');
const express = require('express');
const router = express.Router();

router.post('/login', authAdminController.loginAdminController);
router.post('/register', authAdminController.registerAdminController);
router.put('/update/:adminId', authAdminController.updateAdminController);

module.exports = router;