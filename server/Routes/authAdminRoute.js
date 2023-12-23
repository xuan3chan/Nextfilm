const authAdminController = require('../Controllers/authAdminController');
const express = require('express');
const verifyToken = require('../middlewares/auth');
const router = express.Router();

router.post('/login', authAdminController.loginAdminController);
router.post('/register',verifyToken, authAdminController.registerAdminController);
router.put('/update/:adminId',verifyToken, authAdminController.updateAdminController);

module.exports = router;