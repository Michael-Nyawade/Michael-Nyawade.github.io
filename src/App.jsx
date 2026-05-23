import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Container from "./components/Container";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <BackToTop />
    </Container>
  );
}

export default App;