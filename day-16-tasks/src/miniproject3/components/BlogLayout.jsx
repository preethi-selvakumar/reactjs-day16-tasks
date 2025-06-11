import { NavLink, Outlet } from "react-router-dom";

const BlogLayout = () => {
    return (
        <div className="blog-layout">

            <nav className="blog-nav">
                <NavLink to="" end>Home</NavLink>
                <NavLink to="posts">Posts</NavLink>
                <NavLink to="about">About</NavLink>
            </nav>

            <div className="blog-content">
                <Outlet />
            </div>
        </div>
    );
};

export default BlogLayout;
