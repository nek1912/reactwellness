import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import HabitTracker from './components/HabitTracker';
import Chatbot from './components/Chatbot';
import Leaderboard from './components/Leaderboard';
import WaterTracker from './components/WaterTracker';
import InviteFriends from './components/InviteFriends';
import PeriodTracker from './components/PeriodTracker';
import HealthAI from './components/HealthAI';
import MyDay from './components/MyDay';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* ✅ Auth Routes */}
                <Route path="/" element={<AuthForm />} />
                <Route path="/login" element={<AuthForm />} />
                <Route path="/signup" element={<AuthForm />} />

                {/* ✅ Dashboard Route (Must Be Defined) */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* ✅ Feature Pages */}
                <Route path="/habit-tracker" element={<HabitTracker />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/water-tracker" element={<WaterTracker />} />
                <Route path="/invite-friends" element={<InviteFriends />} />
                <Route path="/period-tracker" element={<PeriodTracker />} />
                <Route path="/health-ai" element={<HealthAI />} />
                <Route path="/my-day" element={<MyDay />} />

                {/* ✅ Fallback for Unknown Routes */}
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
