const authUsersService = require('../Services/authUsersService');
const handleErrorResponse = require('../middlewares/errorHandling');

class authUsersController {
    static async loginUserController(req, res) {
        try{
        const { email, password } = req.body;
        const response = await authUsersService.loginUserService(email, password);
        res.status(200).json(response);
        }
        catch(err){
            handleErrorResponse(res, err);
        }
    }
    static async registerUserController(req, res) {
        try{
        const { userName, email, password, phoneNumber } = req.body;
        const response = await authUsersService.registerUserService(
        userName,
        email,
        password,
        phoneNumber
        );
        res.status(200).json(response);
        }
        catch(err){
            handleErrorResponse(res, err);
        }
    }
}
module.exports = authUsersController;