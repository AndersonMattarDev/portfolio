import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
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
    </section>
  );
}