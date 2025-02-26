import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]); // Stores chat history
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        fetchChatHistory(); // Load previous chats
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const fetchChatHistory = async () => {
        try {
            const response = await fetch('/chat-history'); // Fetch stored chat history
            const data = await response.json();
            setMessages(data.history);
        } catch (error) {
            console.error('Error fetching chat history:', error);
        }
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessage = { sender: 'You', text: input };
        setMessages([...messages, newMessage]);
        setInput('');
        setIsTyping(true);

        try {
            const response = await fetch('/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: input }),
            });

            const data = await response.json();
            setMessages((prevMessages) => [...prevMessages, { sender: 'AI', text: data.answer }]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="chatbot glass">
            <h2>🤖 AI Doctor Chat</h2>
            <div className="chat-area">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender === 'AI' ? 'ai' : 'user'}`}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
                {isTyping && <div className="typing-indicator">AI is typing...</div>}
                <div ref={chatEndRef}></div>
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Ask something..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
