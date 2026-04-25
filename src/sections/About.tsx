import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section container">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Sobre mim
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Sou desenvolvedor fullstack com foco em criar aplicações modernas,
        responsivas e performáticas. Trabalho com React, TypeScript e também
        atuo no backend com Node.js e Python.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Busco sempre escrever código limpo, reutilizável e focado em entregar
        uma boa experiência para o usuário final.
      </motion.p>

    </section>
  );
}