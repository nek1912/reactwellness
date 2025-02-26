import React, { useState, useEffect } from 'react';
import '../styles.css';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetchLeaderboard();
        const interval = setInterval(fetchLeaderboard, 5000); // Auto-refresh every 5s
        return () => clearInterval(interval);
    }, []);

    const fetchLeaderboard = async () => {
        try {
            const response = await fetch('/leaderboard');
            const data = await response.json();
            setLeaderboard(data.leaderboard);
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    };

    return (
        <div className="leaderboard glass">
            <h2>🏆 Leaderboard</h2>
            <ul>
                {leaderboard.map((user, index) => (
                    <li key={index}>
                        {index + 1}. {user.name} - {user.healthCoins} 💰
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
