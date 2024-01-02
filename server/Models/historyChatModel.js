const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historyChatSchema = new Schema({
    role: {
        type: String,
        required: true
    },
    parts: {
        type: String,
        required: true
    }

}, { timestamps: true });

const historyChat = mongoose.model('historyChat', historyChatSchema);
module.exports = historyChat;
