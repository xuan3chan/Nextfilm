const user = require("../Models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authUsersService {
  static async loginUserService(email, password) {
    const userFound = await user.findOne({ email });
    if (!userFound) {
      return { success: false, message: "Email or password is incorrect" };
    }
    const passwordValid = await bcrypt.compare(password, userFound.password);
    if (!passwordValid) {
      return { success: false, message: "Email or password is incorrect" };
    }
    const accessToken = jwt.sign(
      { userId: userFound._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    return {
      success: true,
      message: "Login successfully",
      accessToken,
      //khong can thiet
      user: {
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
        phoneNumber: userFound.phoneNumber,
      },
    };
  }
static async registerUserService(userName, email, password, phoneNumber) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new user({
            userName,
            email,
            password: hashedPassword,
            phoneNumber,
        });
        const userCreated = await newUser.save();
        const accessToken = jwt.sign(
            { userId: userCreated._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1d" }
        );
        return {
      success: true,
      message: "Register successfully",
      accessToken,
      //khong can thiet
      user: {
        id: userCreated._id,
        name: userCreated.userName,
        email: userCreated.email,
        phoneNumber: userCreated.phoneNumber,
      },
    };
  }
}
module.exports = authUsersService;
