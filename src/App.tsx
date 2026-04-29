import "./styles/global.css";

import Navbar from "./componentes/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <footer className="footer">
  <div className="container footer-content">

    <p>© 2026 Anderson Mattar</p>

    <div className="footer-links">
      <a href="https://github.com/AndersonMattarDev" target="_blank"><FaGithub /></a>
      <a href="https://linkedin.com/in/anderson-moreno-mattar-05347b257/" target="_blank"><FaLinkedin /></a>
      <a href="https://wa.me/5532984240038" target="_blank"><FaWhatsapp /></a>
    </div>

  </div>
</footer>
    </>
  );
}

export default App;