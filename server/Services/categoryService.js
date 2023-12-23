const category = require("../Models/categoriesModel");

class categoryService {
    // hàm bổ trợ cho các hàm khác
    static async findCategory(categoryId) {
        const categoryFound = await category.findById(categoryId);
        if (!categoryFound) {
            throw new Error("Category not found");
        }
        return categoryFound;
    }

    static async addCategoryService(categoryName, description, status) {
        const categoryFound = await category.findOne({ categoryName });
        if (categoryFound) {
            return {
                success: false,
                message: "Category name is already in use",
            };
        }
        const newCategory = new category({
            categoryName,
            status,
            description,
        });
        await newCategory.save();
        return {
            success: true,
            message: "Add category successfully",
            category: newCategory,
        };
    }

    static async updateCategoryService(categoryId, categoryName, description, status) {
            const update = {};
            if (categoryName) update.categoryName = categoryName;
            if (description) update.description = description;
            if (status) update.status = status;

            if (Object.keys(update).length === 0) {
                return {
                    success: false,
                    message: "Nothing to update",
                };
            }

            let categoryFound;
            try {
                categoryFound = await this.findCategory(categoryId);
            } catch (error) {
                return {
                    success: false,
                    message: error.message,
                };
            }

            Object.assign(categoryFound, update);
            await categoryFound.save();

            return {
                success: true,
                message: "Update category successfully",
                category: categoryFound,
            };
        }

    static async deleteCategoryService(categoryId) {
        const categoryFound = await this.findCategory(categoryId);
        if (categoryFound) {
            await category.deleteOne({ _id: categoryId });
            return {
                success: true,
                message: "Delete category successfully",
            };
        } else {
            return {
                success: false,
                message: "Category not found",
            };
        }
    }
    static async getAllCategoryService() {
        const categories = await category.find();
        return {
            success: true,
            message: "Get all categories successfully",
            categories,
        };
    }
}

module.exports = categoryService;