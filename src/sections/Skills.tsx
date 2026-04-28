import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt
} from "react-icons/fa";

import {
  SiTypescript,
  SiMysql,
  SiSqlite,
  SiBootstrap,
  SiVuedotjs
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Git", icon: <FaGitAlt /> },
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
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}