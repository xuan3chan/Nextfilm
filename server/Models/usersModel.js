const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  packID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pack",
    required: false,
  },
  activationDateVip: {
    type: Date,
    required: false,
  },
  endDateVip: {
    type: Date,
    required: false,
  },
  watchHistory: {
    type: Array,
    required: false,
  },
  role1: {
    name: {
      type: String,
      required: false,
      default: "role 1",
    },
    pin: {
      type: String,
      required: false,
      default: "1234",
    },
  },
  role2: {
    name: {
      type: String,
      required: false,
      default: "role 2",
    },
    pin: {
      type: String,
      required: false,
      default: "1234",
    },
  },
  resetPasswordCode: {
    type: String,
    required: false,
  },
  resetPasswordExpires: {
    type: Date,
    required: false,
  },
  knownDevices: [{
    browser: String,
    os: String,
    device: String,
    ip: String,
    location: String,
    deviceId: String
  }]
});
const users = mongoose.model("users", usersSchema);
module.exports = users;
