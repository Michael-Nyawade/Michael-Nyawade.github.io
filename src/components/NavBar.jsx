import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change navbar style after scrolling 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["hero", "about", "experience", "skills", "projects", "contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            color: "var(--text-color)",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </nav>
  );
}