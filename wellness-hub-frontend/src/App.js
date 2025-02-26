import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import MentalHealth from './pages/MentalHealth';
import HabitTrackerPage from './pages/HabitTrackerPage';
import MyDay from './pages/MyDay';
import HealthCheckup from './pages/HealthCheckup';
import AIDoctor from './pages/AIDoctor';
import StudentSection from './pages/StudentSection';
import WomensHealth from './pages/WomensHealth';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/mental-health" element={<MentalHealth />} />
                <Route path="/habit-tracker" element={<HabitTrackerPage />} />
                <Route path="/my-day" element={<MyDay />} />
                <Route path="/health-checkup" element={<HealthCheckup />} />
                <Route path="/ai-doctor" element={<AIDoctor />} />
                <Route path="/student-section" element={<StudentSection />} />
                <Route path="/womens-health" element={<WomensHealth />} />
            </Routes>
        </Router>
    );
};

export default App;
