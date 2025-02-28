const Water = require('../models/Water');

exports.getWaterData = async (req, res) => {
    try {
        const data = await Water.findOne();
        res.json(data || { goal: 2, consumed: 0 });
    } catch (error) {
        res.status(500).json({ message: "Error fetching water data" });
    }
};

exports.updateWaterIntake = async (req, res) => {
    const { goal, consumed } = req.body;
    try {
        const data = await Water.findOneAndUpdate({}, { goal, consumed }, { upsert: true, new: true });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error updating water intake" });
    }
};
