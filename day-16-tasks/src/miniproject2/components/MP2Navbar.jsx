import { NavLink } from 'react-router-dom';

const MP2Navbar = () => {
    return (
        <nav className="mp2-navbar">
            <NavLink to="/navapp" end className="nav-link">
                Home
            </NavLink>
            <NavLink to="/navapp/services" className="nav-link">
                Services
            </NavLink>
            <NavLink to="/navapp/contact" className="nav-link">
                Contact
            </NavLink>
        </nav>
    );
};

export default MP2Navbar;
