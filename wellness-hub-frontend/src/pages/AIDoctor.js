import React, { useState } from 'react';
import '../styles.css';

const AIDoctor = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        // Simulated AI Response (Replace this with real API call)
        setTimeout(() => {
            const botMessage = { sender: 'bot', text: `AI Doctor: I see. Can you tell me more?` };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }, 1000);

        setInput('');
    };

    return (
        <div className="page-container">
            <h1>🩺 AI Doctor</h1>
            <div className="chat-area">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Ask AI Doctor..." 
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default AIDoctor;
