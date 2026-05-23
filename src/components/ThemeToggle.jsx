import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return system ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        padding: "0.5rem",
        cursor: "pointer",
        borderRadius: "6px",
        border: "1px solid var(--border-color)",
        background: "var(--secondary-color)",
        color: "var(--text-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}