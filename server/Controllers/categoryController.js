const categoryService = require('../Services/categoryService');

const handleErrorResponse = require('../middlewares/errorHandling');

class categoryController {
    static async addCategoryController(req, res) {
        try{
            const { categoryName, description, status } = req.body;
            const response = await categoryService.addCategoryService(categoryName, description, status);
            res.status(200).json(response);
        }
        catch(err){
            handleErrorResponse(res, err);
        }
    }
    static async updateCategoryController(req, res) {
        try{
            const { categoryId } = req.params;
            const { categoryName, description, status } = req.body;
            const response = await categoryService.updateCategoryService(categoryId, categoryName, description, status);
            res.status(200).json(response);
        }
        catch(err){
            handleErrorResponse(res, err);
        }
    }
    static async deleteCategoryController(req, res) {
        try{
            const { categoryId } = req.params;
            console.log(categoryId);
            const response = await categoryService.deleteCategoryService(categoryId);
            res.status(200).json(response);
        }
        catch(err){
            handleErrorResponse(res, err);
        }
    }
    static async getAllCategoriesController(req, res) {
        try{
            const response = await categoryService.getAllCategoryService();
            res.status(200).json(response);
        }
        catch(err){
            handleErrorResponse(res, err);
        }
    }

}

module.exports = categoryController;
