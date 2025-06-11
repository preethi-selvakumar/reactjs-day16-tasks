import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div className="task10-about">
            <h2>About Page</h2>
            <nav>
                <ul className="task10-nav">
                    <li><Link to="company">Company</Link></li>
                    <li><Link to="team">Team</Link></li>
                </ul>
            </nav>
            <div className="task10-outlet">
                <Outlet />
            </div>
        </div>
    );
};

export default About;
