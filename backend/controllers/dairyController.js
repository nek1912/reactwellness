const Diary = require('../models/Diary');

exports.getDiaryEntries = async (req, res) => {
    try {
        const entries = await Diary.find();
        res.json(entries);
    } catch (error) {
        res.status(500).json({ message: "Error fetching diary entries" });
    }
};

exports.addDiaryEntry = async (req, res) => {
    const { date, entry } = req.body;
    try {
        const newEntry = new Diary({ date, entry });
        await newEntry.save();
        res.json({ message: "Diary Entry Added!", newEntry });
    } catch (error) {
        res.status(500).json({ message: "Error saving diary entry" });
    }
};
