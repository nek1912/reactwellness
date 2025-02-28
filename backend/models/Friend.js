const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    userId: String,
    friendName: String,
    healthCoins: { type: Number, default: 0 },
});

module.exports = mongoose.model('Friend', friendSchema);
