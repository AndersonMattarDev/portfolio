export interface Project {
  title: string;
  desc: string;
  link: `http${string}`;
}

export const projects: Project[] = [
  {
    title: "Casa de Violeta",
    desc: "Landing page com foco em conversão",
    link: "https://www.casadevioletapousada.com.br/"
  },
  {
    title: "Fish Caiaques",
    desc: "Site de ecoturismo",
    link: "https://fishcaiaquesecoturismo.netlify.app/"
  },
  {
    title: "AllTech Solutions",
    desc: "SPA institucional",
    link: "https://alltechsolutions.netlify.app/"
  }
];