const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
    name: String,
    healthCoins: Number,
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
