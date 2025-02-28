const Leaderboard = require('../models/Leaderboard');

exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ healthCoins: -1 });
        res.json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: "Error fetching leaderboard" });
    }
};

exports.updateLeaderboard = async (req, res) => {
    const { name, healthCoins } = req.body;
    try {
        await Leaderboard.findOneAndUpdate({ name }, { healthCoins }, { upsert: true, new: true });
        res.json({ message: "Leaderboard Updated!" });
    } catch (error) {
        res.status(500).json({ message: "Error updating leaderboard" });
    }
};
