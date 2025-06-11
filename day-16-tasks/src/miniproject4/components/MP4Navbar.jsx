import { NavLink } from 'react-router-dom';

const MP4Navbar = () => (
    <nav className="mp4-navbar">
        <NavLink to="/showcase" end className="mp4-link">Home</NavLink>
        <NavLink to="/showcase/products" className="mp4-link">Products</NavLink>
        <NavLink to="/showcase/contact" className="mp4-link">Contact</NavLink>
    </nav>
);

export default MP4Navbar;
