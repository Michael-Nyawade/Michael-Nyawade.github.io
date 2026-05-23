import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // default to light if nothing in localStorage
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // set data-theme on <html> (document.documentElement)
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "0.5rem 1rem",
        cursor: "pointer",
        borderRadius: "4px",
        border: "1px solid var(--accent-color)",
        background: "none",
        color: "var(--text-color)",
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}