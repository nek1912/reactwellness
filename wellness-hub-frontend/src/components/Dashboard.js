// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import HabitTracker from './HabitTracker';
// import Chatbot from './Chatbot';
// import Leaderboard from './Leaderboard';
// import WaterTracker from './WaterTracker';
// import InviteFriends from './InviteFriends';
// import PeriodTracker from './PeriodTracker';
// import HealthAI from './HealthAI';
// import '../styles.css';

// const pageVariants = {
//     initial: { opacity: 0, x: -50 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: 50 }
// };

// const Dashboard = () => {
//     const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

//     useEffect(() => {
//         document.body.classList.toggle('dark-mode', darkMode);
//         document.body.classList.toggle('light-mode', !darkMode);
//         localStorage.setItem('darkMode', darkMode);
//     }, [darkMode]);

//     const sections = [
//         { component: <HabitTracker />, key: "habit", title: "📅 Habit Tracker" },
//         { component: <Chatbot />, key: "chatbot", title: "🤖 AI Chatbot" },
//         { component: <Leaderboard />, key: "leaderboard", title: "🏆 Leaderboard" },
//         { component: <WaterTracker />, key: "water", title: "💧 Water Tracker" },
//         { component: <InviteFriends />, key: "invite", title: "📩 Invite Friends" },
//         { component: <PeriodTracker />, key: "period", title: "🔴 Period Tracker" },
//         { component: <HealthAI />, key: "healthAI", title: "🩺 AI Health Advice" }
//     ];

//     return (
//         <AnimatePresence mode="wait">
//             <motion.div 
//                 className="dashboard-container"
//                 variants={pageVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//             >
//                 {/* Floating Action Button for Dark Mode Toggle */}
//                 <motion.button 
//                     className="fab dark-mode-toggle"
//                     onClick={() => setDarkMode(!darkMode)}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     {darkMode ? '☀' : '🌙'}
//                 </motion.button>

//                 <motion.h1 
//                     className="dashboard-title"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     Welcome to Wellness Hub!
//                 </motion.h1>

//                 <motion.div 
//                     className="dashboard-grid"
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                 >
//                     {sections.map(({ component, key, title }) => (
//                         <motion.div 
//                             key={key}
//                             className="section glass neon-effect"
//                             whileHover={{ scale: 1.05, rotate: 1 }}
//                             whileTap={{ scale: 0.95 }}
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.4, ease: "easeOut" }}
//                         >
//                             <h3 className="section-title">{title}</h3>
//                             {component}
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </motion.div>
//         </AnimatePresence>
//     );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HabitTracker from './HabitTracker';
import Chatbot from './Chatbot';
import Leaderboard from './Leaderboard';
import WaterTracker from './WaterTracker';
import InviteFriends from './InviteFriends';
import PeriodTracker from './PeriodTracker';
import HealthAI from './HealthAI';
import '../styles.css';

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
};

const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('light-mode', !darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const sections = [
        { component: <HabitTracker />, key: "habit", title: "📅 Habit Tracker" },
        { component: <Chatbot />, key: "chatbot", title: "🤖 AI Chatbot" },
        { component: <Leaderboard />, key: "leaderboard", title: "🏆 Leaderboard" },
        { component: <WaterTracker />, key: "water", title: "💧 Water Tracker" },
        { component: <InviteFriends />, key: "invite", title: "📩 Invite Friends" },
        { component: <PeriodTracker />, key: "period", title: "🔴 Period Tracker" },
        { component: <HealthAI />, key: "healthAI", title: "🩺 AI Health Advice" }
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.div 
                className="dashboard-container"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
            >
                {/* Floating Action Button for Dark Mode Toggle */}
                <motion.button 
                    className="fab dark-mode-toggle"
                    onClick={() => setDarkMode(!darkMode)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {darkMode ? '☀' : '🌙'}
                </motion.button>

                <motion.h1 
                    className="dashboard-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to Wellness Hub!
                </motion.h1>

                <motion.div 
                    className="dashboard-grid horizontal-scroll"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {sections.map(({ component, key, title }) => (
                        <motion.div 
                            key={key}
                            className="section glass neon-effect"
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <h3 className="section-title">{title}</h3>
                            {component}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Dashboard;

