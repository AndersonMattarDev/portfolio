import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaJava,
  FaPhp,
  FaJs,  
} from "react-icons/fa";

import {
  SiTypescript,
  SiMysql,
  SiSqlite,
  SiBootstrap,
  SiVuedotjs,
  SiNextdotjs,
  SiVite,
  SiAngular,

} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, text: "Nível Intermediário." },
  { name: "TypeScript", icon: <SiTypescript />, text: "Nível Intermediário." },
  { name: "Node.js", icon: <FaNodeJs />, text: "Nível Intermediário." },
  { name: "Python", icon: <FaPython />, text: "Nível Básico." },
  { name: "Vue.js", icon: <SiVuedotjs />, text: "Nível Básico." },
  { name: "MySQL", icon: <SiMysql />, text: "Nível Intermediário." },
  { name: "SQLite", icon: <SiSqlite />, text: "Nível Intermediário." },
  { name: "Bootstrap", icon: <SiBootstrap />, text: "Nível Intermediário." },
  { name: "Git", icon: <FaGitAlt />, text: "Nível Intermediário." },
  { name: "Java", icon: <FaJava />, text: "Nível Básico." },
  { name: "PHP", icon: <FaPhp />, text: "Nível Básico." },
  { name: "JavaScript", icon: <FaJs />, text: "Nível Intermediário." },
  { name: "Next.js", icon: <SiNextdotjs />, text: "Nível Básico." },
  { name: "Vite", icon: <SiVite />, text: "Nível Intermediário." },
  { name: "Angular", icon: <SiAngular />, text: "Nível Básico." },
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
            <p>{skill.text}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}