import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <div>
            <div className="home-header">
                <div className="home-title">🏠 Homepage</div>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className="home-body">
                <h1>Welcome to Home Page</h1>
            </div>
        </div>
    );
}

export default Home;
