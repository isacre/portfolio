import { Menu, SocialMediaRoute } from "../../types";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export const Menus: Menu[] = [
  {
    text: "Sobre",
    route: "/home/#about",
  },
  {
    text: "Projetos",
    route: "/home/#projects",
  },
  {
    text: "Carreira",
    route: "/home/#carrer",
  },
  {
    text: "Entre em contato",
    route: "/home/#contact",
  },
];

export const SocialMedia: SocialMediaRoute[] = [
  {
    route: "https://www.linkedin.com/in/isaac-alves-melo-319b45185/",
    icon: BsLinkedin,
  },
  {
    route: "https://github.com/Isacre",
    icon: BsGithub,
  },
];
