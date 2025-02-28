const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
    userId: String,
    date: String,
    entry: String,
});

module.exports = mongoose.model('Diary', diarySchema);
