import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MP1Layout = () => (
    <div className="mp1-layout">
        <Navbar />
        <main className="mp1-content">
            <Outlet />
        </main>
    </div>
);

export default MP1Layout;
