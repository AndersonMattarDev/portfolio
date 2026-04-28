import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="nav-container">

        <h2 className="logo">
          <a href="#home">Portfolio Dev</a>
        </h2>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contato</a>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </motion.nav>
  );
}