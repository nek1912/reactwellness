import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles.css';

const MyDay = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Default to today
    const [entry, setEntry] = useState('');
    const [diaryEntries, setDiaryEntries] = useState({});

    useEffect(() => {
        loadStoredEntries();
    }, []);

    useEffect(() => {
        setEntry(diaryEntries[selectedDate] || '');
    }, [selectedDate, diaryEntries]);

    // Load stored diary entries
    const loadStoredEntries = () => {
        const storedEntries = JSON.parse(localStorage.getItem('diaryEntries')) || {};
        setDiaryEntries(storedEntries);
    };

    // Save diary entry
    const saveEntry = () => {
        const updatedEntries = { ...diaryEntries, [selectedDate]: entry };
        setDiaryEntries(updatedEntries);
        localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
    };

    return (
        <motion.div 
            className="diary-container glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>📖 My Virtual Diary</h1>
            <p>Write about your day and store your memories!</p>

            {/* Date Picker */}
            <div className="date-picker">
                <label>Select Date:</label>
                <input 
                    type="date" 
                    value={selectedDate} 
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
            </div>

            {/* Diary Text Area */}
            <textarea 
                className="diary-input"
                placeholder="How was your day?" 
                value={entry} 
                onChange={(e) => setEntry(e.target.value)}
            />

            {/* Save Entry Button */}
            <button className="neon-button" onClick={saveEntry}>💾 Save Entry</button>

            {/* Back to Dashboard */}
            <Link to="/dashboard">
                <motion.button 
                    className="back-button neon-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    🔙 Back to Dashboard
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default MyDay;
