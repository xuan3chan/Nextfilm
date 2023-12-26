const admin = require("../Models/adminsModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authAdminService {
  //login
  static async loginAdminService(adminName, password, req) {
    const adminFound = await admin.findOne({ adminName });
    if (!adminFound) {
      return { success: false, message: "Admin name is incorrect" };
    }
    const passwordValid = await bcrypt.compare(password, adminFound.password);
    if (!passwordValid) {
      return {
        passwordValid,
        success: false,
        message: "Admin name or password is incorrect",
      };
    }
    const accessToken = jwt.sign(
      { adminId: adminFound._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    return {
      success: true,
      message: "Login successfully",
      accessToken,
      admin: {
        id: adminFound._id,
        adminName: adminFound.adminName,
        role: adminFound.role,
      },
    };
  } 
}
module.exports = authAdminService;
