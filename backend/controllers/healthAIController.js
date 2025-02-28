const HealthAI = require('../models/HealthAI');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getHealthAdvice = async (req, res) => {
    try {
        const { query } = req.body;
        if (!query) return res.status(400).json({ message: "Query is required!" });

        console.log("🔍 User Query:", query);

        // 🔹 Call Gemini AI Model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(query);
        
        const aiResponse = result.response.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        if (!aiResponse) throw new Error("Invalid AI Response");

        console.log("✅ AI Response:", aiResponse);

        // 🔹 Save in MongoDB
        const newEntry = new HealthAI({ userMessage: query, botResponse: aiResponse });
        await newEntry.save();

        res.json({ response: aiResponse });
    } catch (error) {
        console.error("❌ Gemini AI Error:", error);
        res.status(500).json({ message: "Error retrieving AI health advice" });
    }
};

module.exports = { getHealthAdvice };
