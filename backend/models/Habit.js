const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Habit', habitSchema);
