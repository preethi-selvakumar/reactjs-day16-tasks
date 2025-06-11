import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateDemo = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    const handleGoDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div className="task11-container">
            <h2>Navigate Programmatically</h2>
            <p>Click the buttons below to navigate using <code>useNavigate()</code>.</p>
            <div className="task11-buttons">
                <button onClick={handleGoHome}>Go to Home</button>
                <button onClick={handleGoDashboard}>Go to Dashboard</button>
            </div>
        </div>
    );
};

export default NavigateDemo;
