import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles.css';

const Home = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('light-mode', !darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleForm = () => setIsSignup(!isSignup);

    return (
        <div className="auth-container">
            <motion.div 
                className="auth-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >

                {/* ✅ Dark Mode Toggle Button (Only One Now) */}
                <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? '☀ Light' : '🌙 Dark'}
                </button>

                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                <motion.form 
                    action={isSignup ? "/signup" : "/login"} 
                    method="POST"
                    initial={{ opacity: 0, x: isSignup ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isSignup && (
                        <>
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="number" name="age" placeholder="Age" required />
                            
                            <select name="gender" required>
                                <option value="" disabled selected>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>

                            <input type="number" name="weight" placeholder="Weight (kg)" required />
                            <input type="number" name="height" placeholder="Height (cm)" required />
                            
                            <select name="profession" required>
                                <option value="" disabled selected>Profession Type</option>
                                <option value="student">Student</option>
                                <option value="working-professional">Working Professional</option>
                                <option value="other">Other</option>
                            </select>
                        </>
                    )}
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <motion.button 
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isSignup ? "Sign Up" : "Login"}
                    </motion.button>
                </motion.form>

                <p onClick={toggleForm} className="toggle-text">
                    {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                </p>
            </motion.div>
        </div>
    );
};

export default Home;
