const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    countryName: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
});

const countryModel = mongoose.model("country", countrySchema);

module.exports = countryModel;
