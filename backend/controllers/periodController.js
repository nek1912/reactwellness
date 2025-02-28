const Period = require('../models/Period');

exports.getPeriods = async (req, res) => {
    try {
        const periods = await Period.find();
        res.json(periods);
    } catch (error) {
        res.status(500).json({ message: "Error fetching period data" });
    }
};

exports.addPeriod = async (req, res) => {
    const { startDate, endDate } = req.body;
    const predictedNextPeriod = new Date(endDate);
    predictedNextPeriod.setDate(predictedNextPeriod.getDate() + 28);

    try {
        const newPeriod = new Period({ startDate, endDate, predictedNextPeriod });
        await newPeriod.save();
        res.json({ message: "Period Recorded!", newPeriod });
    } catch (error) {
        res.status(500).json({ message: "Error saving period data" });
    }
};
