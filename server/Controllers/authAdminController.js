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
        const {adminName, password, role } = req.body;
        const currentAdminId = req.adminId;
        const response = await authAdminService.registerAdminService(
        currentAdminId,
        adminName,
        password,
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
            const { password, role } = req.body;
            const currentAdminId = req.adminId;

            const response = await authAdminService.updateAdminService(
                currentAdminId,
                adminId,
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