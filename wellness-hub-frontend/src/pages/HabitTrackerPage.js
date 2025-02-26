import React, { useState } from 'react';

const HabitTrackerPage = () => {
    const [habits, setHabits] = useState([]);
    const [habitInput, setHabitInput] = useState('');

    const addHabit = () => {
        if (habitInput) {
            setHabits([...habits, habitInput]);
            setHabitInput('');
        }
    };

    return (
        <div className="page-container">
            <h1>Habit Tracker</h1>
            <input
                type="text"
                value={habitInput}
                onChange={(e) => setHabitInput(e.target.value)}
                placeholder="Enter a new habit"
            />
            <button onClick={addHabit}>Add Habit</button>
            <ul>
                {habits.map((habit, index) => (
                    <li key={index}>{habit} - Reward: 🎖 10 HealthCoins</li>
                ))}
            </ul>
        </div>
    );
};

export default HabitTrackerPage;
