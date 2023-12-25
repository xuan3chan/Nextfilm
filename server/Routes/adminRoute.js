const adminController   = require('../Controllers/adminController');
const express           = require('express');
const router            = express.Router();
const {verifyTokenAdmin} = require('../middlewares/auth');

router.post('/register',verifyTokenAdmin, adminController.registerAdminController);
router.put('/update/:adminId',verifyTokenAdmin, adminController.updateAdminController);
router.get('/getall',verifyTokenAdmin, adminController.getAllAdminsController);
router.delete('/delete/:adminId',verifyTokenAdmin, adminController.deleteAdminController);

module.exports = router;