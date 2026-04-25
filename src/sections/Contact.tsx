import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section dark">
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Contato
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Vamos conversar sobre seu projeto ou oportunidade.
        </motion.p>

        <motion.a
          href="mailto:andmat7745@gmail.com"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
        >
          Enviar email
        </motion.a>

      </div>
    </section>
  );
}