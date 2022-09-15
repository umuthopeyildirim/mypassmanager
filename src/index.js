import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

// Routes
/* Landing Pages */
import Landing from './views/Landing';
import About from './views/About';
import Features from './views/Features';
import Pricing from './views/Pricing';
import Contact from './views/Contact';
/* Auth Pages */
import Login from './views/Login';
import Register from './views/Register';
import PasswordRecovery from './views/PasswordRecovery';
/* Dashboard Pages */
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        {/* Auth Pages */}
        <Route path="login" element={<Login /> } />
        <Route path="register" element={<Register />} />
        <Route path="password-recovery" element={<PasswordRecovery />} />
        {/* Dashboard Pages */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);