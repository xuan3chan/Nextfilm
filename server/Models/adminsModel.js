const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminsSchema = new Schema({
    adminName: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum:['admin','superAdmin'],
    }
});
const admins = mongoose.model('admins', adminsSchema);
module.exports = admins;