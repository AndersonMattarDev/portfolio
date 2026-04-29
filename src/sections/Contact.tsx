import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section dark">
      <div className="container">

        <div className="contact-content">

          <div className="contact-text">
            <h2>📞 Contato</h2>
            <p>Vamos conversar sobre seu projeto ou oportunidade. 👉</p>
          </div>

          <div className="contact-buttons">

            <motion.a
              href="mailto:andmat7745@gmail.com"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope /> Enviar email
            </motion.a>

            <motion.a
              href="https://github.com/AndersonMattarDev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.09 }}
            >
              <FaGithub /> Meu GitHub
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/anderson-moreno-mattar-05347b257/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.09 }}
            >
              <FaLinkedin /> Meu LinkedIn
            </motion.a>

            <motion.a
              href="https://wa.me/5532984240038"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.09 }}
            >
              <FaWhatsapp /> WhatsApp
            </motion.a>

          </div>

        </div>

      </div>
    </section>
  );
}