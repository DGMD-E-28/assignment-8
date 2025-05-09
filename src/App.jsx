import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';
import StatsPage from './pages/StatsPage';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const classList = document.body.classList;
    if (darkMode) {
      classList.add('dark-mode');
      classList.remove('harvard-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      classList.add('harvard-mode');
      classList.remove('dark-mode');
      localStorage.setItem('theme', 'harvard');
    }
  }, [darkMode]);

  return (
    <Router>
      <nav className="main-nav">
        <Link to="/">Game</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/stats">Stats</Link>
      </nav>
      <div className="theme-container">
        <a href="#" onClick={(e) => { e.preventDefault(); setDarkMode(!darkMode); }} title="Toggle dark/light mode">
          {darkMode ? '☀️' : '🌙'}
        </a>
      </div>
      <Routes>
        <Route path="/" element={<div className="page-container"><GamePage /></div>} />
        <Route path="/settings" element={<div className="page-container"><SettingsPage /></div>} />
        <Route path="/stats" element={<div className="page-container"><StatsPage /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
