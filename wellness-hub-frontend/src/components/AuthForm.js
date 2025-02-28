import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles.css';

const AuthForm = () => {
    const navigate = useNavigate();
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "", age: "", gender: "", weight: "", height: "", profession: "", email: "", password: ""
    });

    // ✅ Redirect if user is already logged in
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) navigate('/dashboard');
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const endpoint = isSignup ? "http://localhost:5000/api/auth/signup" : "http://localhost:5000/api/auth/login";

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            // ✅ Save user data in localStorage & navigate to dashboard
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/dashboard');

        } catch (error) {
            console.error('❌ Auth Error:', error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <motion.div 
                className="auth-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>

                {error && <p className="error-message">{error}</p>}

                <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: isSignup ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isSignup && (
                        <>
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />

                            <select name="gender" value={formData.gender} onChange={handleChange} required>
                                <option value="" disabled>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>

                            <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} required />
                            <input type="number" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} required />

                            <select name="profession" value={formData.profession} onChange={handleChange} required>
                                <option value="" disabled>Profession Type</option>
                                <option value="student">Student</option>
                                <option value="working-professional">Working Professional</option>
                                <option value="other">Other</option>
                            </select>
                        </>
                    )}
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

                    <motion.button 
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                    >
                        {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
                    </motion.button>
                </motion.form>

                <p onClick={() => setIsSignup(!isSignup)} className="toggle-text">
                    {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                </p>
            </motion.div>
        </div>
    );
};

export default AuthForm;
