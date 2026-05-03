export interface Project {
  title: string;
  desc: string;
  link: `http${string}`;
}

export const projects: Project[] = [
  {
    title: "Casa de Violeta",
    desc: "Landing page com foco em conversão, para pousada localizada em Tiradentes, Minas Gerais.",
    link: "https://www.casadevioletapousada.com.br/"
  },
  {
    title: "Fish Caiaques",
    desc: "Site de ecoturismo, para empresa de aluguel de caiaques em Bertioga, litoral sul de São Paulo.",
    link: "https://fishcaiaquesecoturismo.netlify.app/"
  },
  {
    title: "AllTech Solutions",
    desc: "SPA institucional, a principio meu primeiro projeto acadêmico mas, agora um site de negocio real.",
    link: "https://alltechsolutions.netlify.app/"
  }
];