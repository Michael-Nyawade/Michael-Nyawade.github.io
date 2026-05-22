import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Experience />
      <Skills />
    </Container>
  );
}

export default App;