import React, { useState, useEffect } from 'react';
import '@/styles/Button.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <span className="toggle-label">Dark Mode</span>
    </div>
  );
};

export default DarkModeToggle;
