import { Menu, SocialMediaRoute } from "../../types";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export const Menus: Menu[] = [
  {
    text: "Home",
    route: "/home",
  },
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
    route: "/carrer",
  },
  {
    text: "Entre em contato",
    route: "/contact-me",
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
  {
    route: "https://www.instagram.com/oisacre/",
    icon: BsInstagram,
  },
];
