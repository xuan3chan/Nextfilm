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
    static async registerAdminController(req, res) {
        try{
        const { currentAdminId,adminName, Password, role } = req.body;
        const response = await authAdminService.registerAdminService(
        currentAdminId,
        adminName,
        Password,
        role
        );
        res.status(200).json(response);
        }
        catch(err){
            handleErrorResponse(res, err);
        }
    }
    static async updateAdminController(req, res) {
        try {
            const { adminId } = req.params;
            const { currentAdminId, password, role } = req.body;
            const response = await authAdminService.updateAdminService(
                adminId,
                currentAdminId,
                password,
                role
            );
            res.status(200).json(response);
        } catch (err) {
            handleErrorResponse(res, err);
        }
    }
}
module.exports = authAdminController;