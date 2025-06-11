import React from 'react';

const Profile = () => {
    const isLoggedIn = false; 

    return (
        <div className="task13-container">
            {isLoggedIn ? (
                <div className="task13-access">
                    <p>Welcome to your profile!</p>
                </div>
            ) : (
                <div className="task13-denied">
                    <p>Access Denied. You are not logged in.</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
