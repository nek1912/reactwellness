const Habit = require('../models/Habit');

// ✅ Get All Habits
exports.getHabits = async (req, res) => {
    try {
        const habits = await Habit.find();
        res.json(habits);
    } catch (error) {
        res.status(500).json({ message: "Error fetching habits" });
    }
};

// ✅ Add a New Habit
exports.addHabit = async (req, res) => {
    const { name } = req.body;
    try {
        const habit = new Habit({ name, completed: false });
        await habit.save();
        res.json({ message: "Habit Added!", habit });
    } catch (error) {
        res.status(500).json({ message: "Error adding habit" });
    }
};

// ✅ Toggle Completion
exports.toggleHabit = async (req, res) => {
    const { id } = req.params;
    try {
        const habit = await Habit.findById(id);
        habit.completed = !habit.completed;
        await habit.save();
        res.json(habit);
    } catch (error) {
        res.status(500).json({ message: "Error updating habit" });
    }
};
