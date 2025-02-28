const Friend = require('../models/Friend');

exports.getFriends = async (req, res) => {
    try {
        const friends = await Friend.find();
        res.json(friends);
    } catch (error) {
        res.status(500).json({ message: "Error fetching friends" });
    }
};

exports.addFriend = async (req, res) => {
    const { friendName } = req.body;
    try {
        const newFriend = new Friend({ friendName });
        await newFriend.save();
        res.json({ message: "Friend Added!", newFriend });
    } catch (error) {
        res.status(500).json({ message: "Error adding friend" });
    }
};
