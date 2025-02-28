const mongoose = require('mongoose');

const waterSchema = new mongoose.Schema({
    userId: String,
    goal: Number,
    consumed: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Water', waterSchema);
