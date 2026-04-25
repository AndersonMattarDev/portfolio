import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Vue.js",
  "MySQL",
  "SQLite",
  "Bootstrap",
  "Git"
];

export default function Skills() {
  return (
    <section id="skills" className="section container">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>

      <div className="grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

    </section>
  );
}