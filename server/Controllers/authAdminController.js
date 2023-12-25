const authAdminService = require('../Services/authAdminService');
const handleErrorResponse = require('../middlewares/errorHandling');

class authAdminController {
    static async loginAdminController(req, res) {
        try{
            const { adminName, password } = req.body;
            const response = await authAdminService.loginAdminService(adminName, password, req);
            res.status(200).json(response);
        }
        catch(err){
            handleErrorResponse(res, err);
        }
    }
}
module.exports = authAdminController;