import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="section dark">
      <div className="container">
        <h2>Projetos</h2>

        <div className="grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="card"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank">Ver projeto</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}