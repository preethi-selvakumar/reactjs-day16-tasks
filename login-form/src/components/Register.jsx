import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (!trimmedEmail || !trimmedPassword) {
            setError("All fields are required!");
        } else if (!trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
            setError("Enter a valid email!");
        } else if (trimmedPassword.length < 6) {
            setError("Password must be at least 6 characters!");
        } else {
            localStorage.setItem("userEmail", trimmedEmail);
            localStorage.setItem("userPassword", trimmedPassword);

            alert("Registered successfully! Redirecting to home page...");
            setIsLoggedIn(true);
            navigate("/home");
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            {error && <div className="error">{error}</div>}
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;
