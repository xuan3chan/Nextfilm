const adminService = require("../Services/adminService");
const handleErrorResponse = require("../middlewares/errorHandling");

class adminController {
  static async registerAdminController(req, res) {
    try {
      const { adminName, password, role } = req.body;
      const currentAdminId = req.adminId;
      const response = await adminService.registerAdminService(
        currentAdminId,
        adminName,
        password,
        role
      );
      res.status(200).json(response);
    } catch (err) {
      handleErrorResponse(res, err);
    }
  }
  static async updateAdminController(req, res) {
    try {
      const { adminId } = req.params;
      const { password, role } = req.body;
      const currentAdminId = req.adminId;

      const response = await adminService.updateAdminService(
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
  static async getAllAdminsController(req, res) {
    try {
      const currentAdminId = req.adminId;
      const response = await adminService.getAllAdminsService(
        currentAdminId
      );
      res.status(200).json(response);
    } catch (err) {
      handleErrorResponse(res, err);
    }
  }
  static async deleteAdminController(req, res) {
    try {
      const { adminId } = req.params;
      const currentAdminId = req.adminId;
      const response = await adminService.deleteAdminService(
        currentAdminId,
        adminId
      );
      res.status(200).json(response);
    } catch (err) {
      handleErrorResponse(res, err);
    }
  }
}

module.exports = adminController;