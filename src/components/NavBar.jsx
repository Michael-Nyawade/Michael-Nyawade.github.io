import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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
    }
  };

  const sections = ["hero", "about", "experience", "skills", "projects", "contact"];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem 0",
        backgroundColor: scrolled ? "var(--secondary-color)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        zIndex: 1000,
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
            transition: "color 0.3s ease, font-weight 0.3s ease",
          }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </nav>
  );
}