const categoryController = require('../Controllers/categoryController');
const {verifyTokenAdmin} = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.post('/add', verifyTokenAdmin, categoryController.addCategoryController);
router.put('/update/:categoryId', verifyTokenAdmin, categoryController.updateCategoryController);
router.delete('/delete/:categoryId', verifyTokenAdmin, categoryController.deleteCategoryController);
router.get('/getall', categoryController.getAllCategoriesController);

module.exports = router;