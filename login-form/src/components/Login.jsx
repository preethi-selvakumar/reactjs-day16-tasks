import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (!trimmedEmail || !trimmedPassword) {
            setError("All fields are required!");
        } else if (trimmedEmail !== storedEmail || trimmedPassword !== storedPassword) {
            setError("User not found! Please register first.");
        } else {
            setError('');
            alert("Login successful! Redirecting to home page...");
            setIsLoggedIn(true);
            navigate("/home");
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {error && <div className="error">{error}</div>}
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <Link className="link" to="/register">Don't have an account? Register</Link>
        </div>
    );
}

export default Login;
