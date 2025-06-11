import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './task9/components/Home';
import About from './task10/components/About';
import Company from './task10/components/Company';
import Team from './task10/components/Team';
import Dashboard from './task6/components/Dashboard';
import Settings from './task6/components/Settings';
import NotFound from './task8/components/NotFound';
import NavigateDemo from './task11/components/NavigateDemo';
import Navbar from './task12/components/Navbar';
import Profile from './task13/components/Profile';

// Mini Project 1 imports
import MP1Layout from './miniproject1/components/MP1Layout';
import MP1Home from './miniproject1/components/Home';
import MP1About from './miniproject1/components/About';
import MP1Contact from './miniproject1/components/Contact';

// Mini Project 2 imports
import MP2Navbar from './miniproject2/components/MP2Navbar';
import MP2Home from './miniproject2/components/MP2Home';
import MP2Services from './miniproject2/components/MP2Services';
import MP2Contact from './miniproject2/components/MP2Contact';

// Mini Project 3 imports
import BlogLayout from './miniproject3/components/BlogLayout';
import BlogHome from './miniproject3/components/BlogHome';
import BlogPosts from './miniproject3/components/BlogPosts';
import BlogAbout from './miniproject3/components/BlogAbout';

// Mini Project 4 imports
import MP4Navbar from './miniproject4/components/MP4Navbar';
import MP4Home from './miniproject4/components/MP4Home';
import MP4Products from './miniproject4/components/MP4Products';
import MP4Contact from './miniproject4/components/MP4Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Task Headings */}
        <h1>3. BrowserRouter Setup</h1>
        <h1>4. Basic Route Setup</h1>
        <h1>5. Navigation with Link</h1>
        <h1>9. Active Link Styling</h1>

        {/* Task 9 Navigation */}
        <nav className="task9-navbar">
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to="/navigate" className={({ isActive }) => (isActive ? 'active' : '')}>
            Navigate
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
            Profile
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            Dashboard
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
            Settings
          </NavLink>
        </nav>

        <h1>6. Exact Path Usage</h1>
        <h1>7. Default Route (Redirect to Home)</h1>
        <p className="task7-note">(Handled in Task 8 with 404 Page)</p>
        <h1>8. 404 Page Setup</h1>
        <h1>10. Nested Routes Setup</h1>
        <h1>11. Navigate Programmatically</h1>
        <h1>12. Navigation Bar Component</h1>

        {/* Navbar Component */}
        <Navbar />

        <h1>13. Protected Page Example (Static Check)</h1>

        {/* Mini Project 1 */}
        <h1>Mini Project 1: Simple Portfolio Website</h1>

        {/* Mini Project 2 */}
        <h1>Mini Project 2: Navigation App</h1>
        <MP2Navbar />

        {/* Mini Project 3 */}
        <h1>Mini Project 3: Static Blog</h1>

        {/* Mini Project 4 */}
        <h1>Mini Project 4: Product Showcase</h1>
        <MP4Navbar />

        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/portfolio" />} />

          {/* Task Routes */}
          <Route path="/about" element={<About />}>
            <Route path="company" element={<Company />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/navigate" element={<NavigateDemo />} />
          <Route path="/profile" element={<Profile />} />

          {/* Mini Project 1 Routes */}
          <Route path="/portfolio" element={<MP1Layout />}>
            <Route index element={<MP1Home />} />
            <Route path="about" element={<MP1About />} />
            <Route path="contact" element={<MP1Contact />} />
          </Route>

          {/* Mini Project 2 Routes */}
          <Route path="/navapp" element={<MP2Home />} />
          <Route path="/navapp/services" element={<MP2Services />} />
          <Route path="/navapp/contact" element={<MP2Contact />} />

          {/* Mini Project 3 Routes */}
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<BlogHome />} />
            <Route path="posts" element={<BlogPosts />} />
            <Route path="about" element={<BlogAbout />} />
          </Route>

          {/* Mini Project 4 Routes */}
          <Route path="/showcase" element={<MP4Home />} />
          <Route path="/showcase/products" element={<MP4Products />} />
          <Route path="/showcase/contact" element={<MP4Contact />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
