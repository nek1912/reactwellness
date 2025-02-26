import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? '/login' : '/signup';
        const response = await axios.post(`http://localhost:5000${endpoint}`, form);
        alert(response.data.message);
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && <input type="text" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />}
                <input type="email" placeholder="Email" required onChange={e => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Password" required onChange={e => setForm({ ...form, password: e.target.value })} />
                <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Switch to Sign Up" : "Switch to Login"}
            </button>
        </div>
    );
};

export default AuthForm;
