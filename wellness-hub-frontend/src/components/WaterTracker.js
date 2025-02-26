import React, { useState, useEffect } from 'react';
import '../styles.css';

const WaterTracker = () => {
    const [waterCount, setWaterCount] = useState(0);

    useEffect(() => {
        fetchWaterIntake();
    }, []);

    const fetchWaterIntake = async () => {
        try {
            const response = await fetch('/get-user-data');
            const data = await response.json();
            setWaterCount(data.waterIntake);
        } catch (error) {
            console.error('Error fetching water intake:', error);
        }
    };

    const drinkWater = async () => {
        try {
            const response = await fetch('/drink-water', { method: 'POST' });
            const data = await response.json();
            if (data.success) {
                setWaterCount(data.water);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error updating water intake:', error);
        }
    };

    return (
        <div className="water-tracker glass">
            <h2>💧 Water Intake</h2>
            <p>{waterCount} / 8 glasses</p>
            <button onClick={drinkWater} className="water-btn">Drink Water</button>
        </div>
    );
};

export default WaterTracker;
