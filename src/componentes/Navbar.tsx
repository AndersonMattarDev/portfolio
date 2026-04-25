import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-custom">
      <nav className="container nav-inner">
        <h3>Portfolio Dev</h3>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`menu ${menuOpen ? "show" : ""}`}>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}