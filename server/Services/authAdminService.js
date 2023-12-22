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
      { expiresIn: "1h" }
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
  //register
static async registerAdminService(currentAdminId, adminName, Password, role) {
    // Check if the current admin is a super admin
    const currentAdmin = await admin.findById(currentAdminId);
    if (!currentAdmin || currentAdmin.role !== 'superAdmin') {
        return {
            success: false,
            message: 'Only super admins can register a new admin'
        };
    }

    // Check if the admin name is already in use
    const existingAdmin = await admin.findOne({ adminName });
    if (existingAdmin) {
        return {
            success: false,
            message: 'Admin name is already in use'
        };
    }


    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Password, saltRounds);

    // Create a new admin
    const newAdmin = new admin({
        adminName,
        Password: hashedPassword,
        role,
    });

    // Save the new admin to the database
    await newAdmin.save();

    return {
        success: true,
        message: 'Admin registered successfully'
    };
}
  //update password or role just superadmin make it
static async updateAdminService( adminId,currentAdminId, password, role) {
    // Check if the current admin is a super admin
    const currentAdmin = await admin.findById(currentAdminId);
    console.log(currentAdmin);
    if (!currentAdmin || currentAdmin.role !== 'superAdmin') {
        return {
            success: false,
            message: 'Only super admins can update an admin'
        };
    }

    // Find the admin to update
    const adminFound = await admin.findById(adminId);
    if (!adminFound) {
        return {
            success: false,
            message: 'Admin not found'
        };
    }

    // Check input password or role
    if (password === "" && role === "") {
        return {
            success: false,
            message: 'Password or role is required'
        };
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Update the admin
    adminFound.password = hashedPassword;
    adminFound.role = role;
    await adminFound.save();

    return {
        success: true,
        message: 'Admin updated successfully'
    };
}
}
module.exports = authAdminService;
