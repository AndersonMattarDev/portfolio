import "./styles/global.css";

import Navbar from "./componentes/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <footer className="py-3 text-center text-muted">
        <small>© 2026 Portfolio Dev</small>
      </footer>
    </>
  );
}

export default App;