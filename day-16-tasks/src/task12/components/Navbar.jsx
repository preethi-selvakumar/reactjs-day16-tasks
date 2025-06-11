import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="task12-navbar">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                About
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
                Dashboard
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
                Settings
            </NavLink>
            <NavLink to="/navigate" className={({ isActive }) => (isActive ? 'active' : '')}>
                Navigate
            </NavLink>
        </nav>
    );
};

export default Navbar;
