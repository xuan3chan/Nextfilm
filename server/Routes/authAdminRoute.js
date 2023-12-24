const authAdminController = require('../Controllers/authAdminController');
const express = require('express');
const {verifyTokenAdmin} = require('../middlewares/auth');
const router = express.Router();

router.post('/login', authAdminController.loginAdminController);
router.post('/register',verifyTokenAdmin, authAdminController.registerAdminController);
router.put('/update/:adminId',verifyTokenAdmin, authAdminController.updateAdminController);

module.exports = router;