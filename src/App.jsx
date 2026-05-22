import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Experience />
    </Container>
  );
}

export default App;