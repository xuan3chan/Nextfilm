const userService = require('../Services/userService');
const handleErrorResponse = require('../middlewares/errorHandling');

class userController{
    static async getAllUsersController(req,res){
        try{
            const response = await userService.getAllUsersService();
            res.status(200).json(response);
        }catch(err){
            handleErrorResponse(res,err);
        }
    }
}
module.exports = userController;