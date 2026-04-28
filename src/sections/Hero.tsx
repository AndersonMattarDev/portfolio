import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content container">

        {/* TEXTO */}
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Desenvolvedor Fullstack
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Crio aplicações modernas com React, Node.js e Python,
            focadas em performance e experiência do usuário.
          </motion.p>

          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
          >
            Ver projetos
          </motion.a>
        </div>

        {/* IMAGEM */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/banner.png" alt="Banner Dev" />
        </motion.div>

      </div>
    </section>
  );
}