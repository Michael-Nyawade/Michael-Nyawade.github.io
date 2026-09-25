import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/animations.css";
import "./styles/navbar.css";
import "./styles/buttons.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/experience.css";
import "./styles/skills.css";
import "./styles/projects.css";
import "./styles/testimonials.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/backtotop.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// Initialize AOS
AOS.init({
  duration: 800, // animation duration in ms
  easing: "ease-in-out",
  once: true, // animate only once
  mirror: false, // do not animate when scrolling back
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);