import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/auth';
import '../styles/Login.css';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = getUser(email, password);
        if (user) {
            localStorage.setItem('loggedIn', 'true');
            navigate('/dashboard');
        } else {
            alert('Invalid credentials!');
        }
    };

    return (

        <div className="login-container">
            <h2>Login</h2>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>

            <p onClick={() => navigate('/register')}>
                Don't have an account? Register
            </p>
        </div>

    )
}
