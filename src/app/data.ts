import type { IconType } from "react-icons";
import {
  PiBrowsers,
  PiEnvelopeSimple,
  PiGithubLogo,
  PiHardDrives,
  PiLinkedinLogo,
  PiPlugs,
  PiShareNetwork,
  PiTreeStructure,
} from "react-icons/pi";
import {
  SiAngular,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export type Project = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  linkFigma?: string;
  linkGithub?: string;
  linkSite?: string;
};

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillGroup = {
  title: string;
  icon: IconType;
  skills: Skill[];
};

export type Contact = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
};

export const CAREER_START_YEAR = 2021;

export const projects: Project[] = [
  {
    image: "/images/projects/pokeapi.png",
    title: "Pokedex",
    description:
      "Desenvolvida com Next.js, consome a PokeAPI. É uma SPA que lista pokémons, e pode ser filtrada por nome ou ID.",
    tags: ["Next.js", "PokeAPI", "SPA"],
    linkGithub: "https://github.com/devlari/pokeapi",
    linkSite: "https://pokeapi-devlari.vercel.app/",
    linkFigma:
      "https://www.figma.com/file/Gx8ItNOh7KGNM07fH67qCJ/PokeAPI?type=design&node-id=0%3A1&mode=design&t=5mgzSzh5IYXXR484-1",
  },
  {
    image: "/images/projects/gamechoose.png",
    title: "GameChoose",
    description:
      "Site fictício de compra de jogos online, incialmente feito com HTML, CSS, Javascript e Bulma.",
    tags: ["HTML", "CSS", "JavaScript", "Bulma"],
    linkFigma:
      "https://www.figma.com/file/e3IuNTvejzuZRgU8mxBpi3/GameChoose?type=design&mode=design&t=GwXB0myPS3MMVnYS-1",
    linkGithub: "https://github.com/devlari/gamechoose",
  },
  {
    image: "/images/projects/prounion.png",
    title: "ProUnion - Landing Page",
    description:
      "Landing page da empresa de tecnologia ProUnion, feita com HTML, CSS e Javascript.",
    tags: ["HTML", "CSS", "JavaScript"],
    linkSite: "https://prounion.com.br/",
  },
  {
    image: "/images/projects/proc.png",
    title: "Sistema PROC - Landing Page",
    description:
      "Landing page do SAAS (Software as a Service) PROC, feita com HTML, CSS e Javascript.",
    tags: ["HTML", "CSS", "JavaScript"],
    linkSite: "https://sistemaproc.com.br/",
  },
  {
    image: "/images/projects/wikiproc.png",
    title: "Wiki PROC",
    description:
      "Blog de tutoriais e dicas sobre o software PROC, feito com Wordpress.",
    tags: ["WordPress"],
    linkSite: "https://wiki.sistemaproc.com.br/",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    icon: PiBrowsers,
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "Vue", icon: SiVuedotjs },
      { name: "Figma", icon: SiFigma },
    ],
  },
  {
    title: "Back-end",
    icon: PiHardDrives,
    skills: [
      { name: "Node", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Oracle", icon: SiOracle },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Arquitetura",
    icon: PiTreeStructure,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Microsserviços", icon: PiShareNetwork },
      { name: "APIs REST", icon: PiPlugs },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "Git", icon: SiGit },
    ],
  },
];

export const contacts: Contact[] = [
  {
    label: "E-mail",
    value: "lrss.sousa.silva@gmail.com",
    href: "mailto:lrss.sousa.silva@gmail.com",
    icon: PiEnvelopeSimple,
  },
  {
    label: "LinkedIn",
    value: "larissa-sousa-silva",
    href: "https://www.linkedin.com/in/larissa-sousa-silva-491893204/",
    icon: PiLinkedinLogo,
  },
  {
    label: "GitHub",
    value: "devlari",
    href: "https://github.com/devlari",
    icon: PiGithubLogo,
  },
];
