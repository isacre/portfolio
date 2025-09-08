import React, { useState, useEffect } from "react";
import { Menus, SocialMedia } from "./data";
import {
  ContactMe,
  Content,
  LogoWrapper,
  Routes,
  ModalHandlerIcon,
} from "./styles";
import Logo from "../../assets/svg/logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const findSelectedRoute = (url: string, route: string) => {
  if (url === route) return "selected";
  else return "";
};

export default function NavBar(props: { url: string }) {
  const [ShowRoutes, setShowRoutes] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Menus.map((menu) => {
        const id = menu.route.split("#")[1];
        const element = document.getElementById(id);
        return { id, element };
      }).filter((section) => section.element);

      const scrollPosition = window.scrollY - 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: string
  ) => {
    e.preventDefault();
    const id = route.split("#")[1];
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with id "${id}" not found`);
    }
  };

  return (
    <Content>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Routes showRoutes={ShowRoutes}>
        {Menus.map((menu) => {
          const id = menu.route.split("#")[1];
          return (
            <a
              key={menu.route}
              href={menu.route}
              onClick={(e) => handleNavClick(e, menu.route)}
              className={activeSection === id ? "selected" : ""}
            >
              <p>{menu.text}</p>
            </a>
          );
        })}
      </Routes>
      <ContactMe>
        {SocialMedia.map((socialmedia) => {
          return (
            <div key={socialmedia.route}>
              <a href={socialmedia.route} target="_blank" rel="noreferrer">
                <socialmedia.icon />
              </a>
            </div>
          );
        })}
        <ModalHandlerIcon onClick={() => setShowRoutes(!ShowRoutes)}>
          <a>{ShowRoutes ? <AiOutlineMenu /> : <AiOutlineClose />}</a>
        </ModalHandlerIcon>
      </ContactMe>
    </Content>
  );
}
