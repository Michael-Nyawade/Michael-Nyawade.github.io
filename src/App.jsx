import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

export default function App() {
  return (
    <div style={{ padding: "0 2rem" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "flex-end", // align toggle to the right
          alignItems: "center",
          padding: "1rem 0",
        }}
      >
        <ThemeToggle />
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}