const user = require('../Models/usersModel');

class userService{
   //getall
    static async getAllUsersService(){
        // Check if the current user is a super user
       
        const users = await user.find();
        return {
            success: true,
            message: "All users",
            users:users,
        };
    }
}
module.exports = userService;