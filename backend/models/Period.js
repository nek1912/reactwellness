const mongoose = require('mongoose');

const periodSchema = new mongoose.Schema({
    userId: String,
    startDate: Date,
    endDate: Date,
    predictedNextPeriod: Date,
});

module.exports = mongoose.model('Period', periodSchema);
