import { Menu, SocialMediaRoute } from "../../types";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export const Menus: Menu[] = [
  {
    text: "Sobre Mim",
    route: "/home/#about",
  },
  {
    text: "Carreira",
    route: "/home/#carrer",
  },
  {
    text: "Projetos",
    route: "/home/#projects",
  },
  {
    text: "Entre em contato",
    route: "/home/#contact-me",
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
