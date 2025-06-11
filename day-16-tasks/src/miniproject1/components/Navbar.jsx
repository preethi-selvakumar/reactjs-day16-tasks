import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="mp1-navbar">
    <NavLink to="/portfolio" end className={({ isActive }) => (isActive ? 'mp1-active' : '')}>
      Home
    </NavLink>
    <NavLink to="/portfolio/about" className={({ isActive }) => (isActive ? 'mp1-active' : '')}>
      About
    </NavLink>
    <NavLink to="/portfolio/contact" className={({ isActive }) => (isActive ? 'mp1-active' : '')}>
      Contact
    </NavLink>
  </nav>
);

export default Navbar;
