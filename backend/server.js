require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const socketIo = require('socket.io');
const http = require('http');
const chatHistory = [];
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// User Schema
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    healthCoins: { type: Number, default: 0 },
    waterIntake: { type: Number, default: 0 },
}));

// Register User
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.json({ message: 'User created successfully' });
});

// Login User
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Chatbot Endpoint (Using OpenAI API)
// app.post('/chatbot', async (req, res) => {
//     const { question } = req.body;
//     res.json({ answer: `AI Doctor: ${question} (response placeholder)` });
// });

app.post('/chatbot', async (req, res) => {
    const { question } = req.body;
    chatHistory.push({ sender: 'You', text: question });

    try {
        const response = await askChatbot(question);
        chatHistory.push({ sender: 'AI', text: response });

        res.json({ answer: response });
    } catch (error) {
        res.status(500).json({ answer: 'Sorry, something went wrong!' });
    }
});

// Endpoint to get chat history
app.get('/chat-history', (req, res) => {
    res.json({ history: chatHistory });
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
