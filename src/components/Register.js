import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../utils/auth';
import '../styles/Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
    saveUser({ email, password });
    alert("Registration Successful. Please Login");
    navigate("/login");
  }

  return (
    <div className="register-container">
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      <p onClick={() => navigate('/login')}>Already have an account? Login</p>
    </div>
  )
}
