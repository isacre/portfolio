import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Menu, SocialMediaRoute } from "../../types";

export const Menus: Menu[] = [
  {
    text: "About Me",
    route: "/home/#about",
  },
  {
    text: "Projects",
    route: "/home/#projects",
  },
  {
    text: "Career",
    route: "/home/#career",
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
