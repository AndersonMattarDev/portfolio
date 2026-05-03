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
        Sou desenvolvedor web em formação, mas já atuando na prática: crio, publico e mantenho projetos reais. 
        Estou finalizando Sistemas para Internet pela Estácio e venho construindo uma base sólida com foco em desenvolvimento 
        moderno e performance. Tenho domínio avançado em HTML e CSS, e trabalho com JavaScript no dia a dia, principalmente com React + Vite, Node.js e TypeScript em nível intermediário. Também utilizo Git e GitHub como parte essencial do meu fluxo de desenvolvimento.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Além disso, possuo conhecimentos em Vue.js, PHP, Java e bancos de dados como MySQL, SQLite e MongoDB, o que me permite 
        transitar entre diferentes stacks. Tenho ainda familiaridade com React Native, Angular e Next.js, ampliando minha 
        capacidade de atuar em projetos variados, tanto web quanto mobile. Gosto de tirar ideias do papel e transformar em 
        soluções funcionais. Estou em busca de uma oportunidade em empresa ou freelancer onde eu possa gerar valor de verdade, 
        evoluir rápido e participar de projetos que façam diferença.
      </motion.p>

    </section>
  );
}