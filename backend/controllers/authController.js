const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const registerUser = async (req, res) => {
    try {
        const { name, email, password, age, gender, height, weight } = req.body;

        // ✅ Validate required fields
        if (!name || !email || !password || !age || !gender || !height || !weight) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // ✅ Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // ✅ Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // ✅ Save User
        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword, 
            age, 
            gender, 
            height, 
            weight 
        });

        await newUser.save();

        // ✅ Generate JWT Token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(201).json({ 
            message: "Signup Successful", 
            token, 
            user: { id: newUser._id, name, email, age, gender, height, weight } 
        });

    } catch (error) {
        console.error("❌ Signup Error:", error);
        res.status(500).json({ message: "Something went wrong. Try again." });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ✅ Validate required fields
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // ✅ Find User
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // ✅ Compare Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ✅ Generate Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({ 
            message: "Login Successful", 
            token, 
            user: { id: user._id, name: user.name, email: user.email, age: user.age, gender: user.gender, height: user.height, weight: user.weight } 
        });

    } catch (error) {
        console.error("❌ Login Error:", error);
        res.status(500).json({ message: "Something went wrong. Try again." });
    }
};

module.exports = { registerUser, loginUser };
