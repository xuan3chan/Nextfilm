const admin = require("../Models/adminsModel");
const bcrypt = require("bcrypt");

class adminService{
static async registerAdminService(currentAdminId, adminName, password, role) {
    // Check if the current admin is a super admin
    const currentAdmin = await admin.findById(currentAdminId);
    if (!currentAdmin || currentAdmin.role !== "superAdmin") {
      return {
        success: false,
        message: "Only super admins can register a new admin",
      };
    }

    // Check if the admin name is already in use
    const existingAdmin = await admin.findOne({ adminName });
    if (existingAdmin) {
      return {
        success: false,
        message: "Admin name is already in use",
      };
    }
    if(!role||!password||!adminName){
      return {
        success: false,
        message: "Admin name or password or role is required",
      }}

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new admin
    const newAdmin = new admin({
      adminName,
      password: hashedPassword,
      role,
    });

    // Save the new admin to the database
    await newAdmin.save();

    return {
      success: true,
      message: "Admin registered successfully",
      admin: newAdmin,
      
    };
  }
  //update password or role just superadmin make it

  static async updateAdminService(currentAdminId,adminId, password, role) {
      // Check if the current admin is a super admin
      const currentAdmin = await admin.findById(currentAdminId);
      if (!currentAdmin || currentAdmin.role !== "superAdmin") {
        return {
          success: false,
          message: "Only super admins can update an admin",
        };
      }

      // Find the admin to update
      const adminFound = await admin.findById(adminId);
      if (!adminFound) {
        return {
          success: false,
          message: "Admin not found",
        };
      }

      // Check input password or role
      if (!password && !role) {
        return {
          success: false,
          message: "Password or role is required",
        };
      }

      // Hash the password if provided
      if (password) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        adminFound.password = hashedPassword;
      }

      // Update the role if provided
      if (role) {
        adminFound.role = role;
      }

      // Save the updated admin
      await adminFound.save();

      return {
        success: true,
        message: "Admin updated successfully",
      };
  }
  static async getAllAdminsService(currentAdminId) {
    // Check if the current admin is a super admin
    const currentAdmin = await admin.findById(currentAdminId);
    if (!currentAdmin || currentAdmin.role !== "superAdmin") {
      return {
        success: false,
        message: "Only super admins can get all admins",
      };
    }
    const admins = await admin.find();
    return { success: true, message: "Get all admins successfully", admins };
  }
  static async deleteAdminService(currentAdminId, adminId) {
    // Check if the current admin is a super admin
    const currentAdmin = await admin.findById(currentAdminId);
    if (!currentAdmin || currentAdmin.role !== "superAdmin") {
      return {
        success: false,
        message: "Only super admins can delete an admin",
      };
    }

    // Find the admin to delete
    const adminFound = await admin.findById(adminId);
    if (!adminFound) {
      return {
        success: false,
        message: "Admin not found",
      };
    }

    // Delete the admin
    await adminFound.deleteOne();

    return {
      success: true,
      message: "Admin deleted successfully",
    };
  }
}

module.exports = adminService;