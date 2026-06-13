import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  // Track whether the page has been scrolled past threshold
  const [scrolled, setScrolled] = useState(false);

  // Track which section is currently active in viewport
  const [activeSection, setActiveSection] = useState("hero");

  // Track whether mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Sections to display in navigation
  const sections = [
    "hero",
    "about",
    "experience",
    "skills",
    "projects",
    "testimonials",
    "contact",
  ];

  // Handle scroll events: update scrolled state and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const viewportCenter = window.innerHeight / 2;

      let closest = "hero";
      let minDistance = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = id;
        }
      });

      setActiveSection(closest);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Smooth scroll to section and close mobile menu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const yOffset = -70; // adjust based on navbar height
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Format section labels (capitalize, replace "hero" with "Home")
  const formatLabel = (section) =>
    section === "hero"
      ? "Home"
      : section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo / Name */}
      <div
        className="navbar-logo"
        onClick={() => scrollToSection("hero")}
      >
        MN
      </div>

      {/* Right side controls */}
      <div className="nav-right">
        <div className="desktop-menu">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-link ${
                activeSection === section ? "active" : ""
              }`}
            >
              {formatLabel(section)}
            </button>
          ))}
        </div>

        <ThemeToggle />
      </div>

      {/* Mobile hamburger toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile menu with overlay */}
      {menuOpen && (
        <>
          {/* Overlay to close menu when clicked */}
          <div
            className="mobile-overlay"
            onClick={() => setMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <div className="mobile-panel">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`mobile-link ${
                  activeSection === section ? "active" : ""
                }`}
              >
                {formatLabel(section)}
              </button>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}
