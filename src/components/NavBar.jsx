import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "experience", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu on link click
    }
  };

  const sections = ["hero", "about", "experience", "skills", "projects", "contact"];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: scrolled ? "var(--secondary-color)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        zIndex: 1000,
      }}
    >
      {/* Logo / Name */}
      <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "var(--text-color)" }}>
        Michael Nyawade
      </div>

      {/* Desktop menu */}
      <div className="desktop-menu" style={{ display: "flex", gap: "1.5rem" }}>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            style={{
              background: "none",
              border: "none",
              color: activeSection === section ? "var(--accent-color)" : "var(--text-color)",
              fontWeight: activeSection === section ? "600" : "400",
              cursor: "pointer",
              position: "relative",
              padding: "0.25rem 0",
              transition: "color 0.3s ease, font-weight 0.3s ease",
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {/* underline for active section */}
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: activeSection === section ? "100%" : "0%",
                height: "2px",
                backgroundColor: "var(--accent-color)",
                transition: "width 0.3s ease",
              }}
              className="nav-underline"
            />
            <style>{`
              button.nav-underline:hover span {
                width: 100%;
              }
            `}</style>
          </button>
        ))}
      </div>

      <ThemeToggle />
      {/* Mobile hamburger */}
      <div className="mobile-menu" style={{ display: "none", cursor: "pointer" }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            color: "var(--text-color)",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile links */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            backgroundColor: "var(--secondary-color)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "1rem",
            gap: "1rem",
            borderRadius: "0 0 8px 8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            animation: "slideDown 0.3s ease forwards",
            overflow: "hidden",
          }}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              style={{
                background: "none",
                border: "none",
                color: activeSection === section ? "var(--accent-color)" : "var(--text-color)",
                fontWeight: activeSection === section ? "600" : "400",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-10%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 768px) {
          .desktop-menu { display: none; }
          .mobile-menu { display: block; }
        }
      `}</style>
    </nav>
  );
}