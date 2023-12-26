const countryController = require('../Controllers/countryController');
const express = require('express');
const router = express.Router();
const {verifyTokenAdmin} = require('../middlewares/auth');

router.get('/getall',verifyTokenAdmin,countryController.getAllCountriesController);
router.post('/add',verifyTokenAdmin,countryController.addCountryController);
router.put('/update/:countryId',verifyTokenAdmin,countryController.updateCountryController);
router.delete('/delete/:countryId',verifyTokenAdmin,countryController.deleteCountryController);

module.exports = router;
