import React, { useState, useEffect } from "react";
import "@/styles/Button.css";
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };
  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={handleToggle} />

        <span className="slider round"></span>
      </label>
      <span className="toggle-label">Dark Mode</span>
      <button
        className="border-1 border-black"
        onClick={() => {
          handleDarkMode();
        }}
      >
        Toggle theme
      </button>
    </div>
  );
};

export default DarkModeToggle;
