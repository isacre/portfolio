import React, { useState, useEffect } from "react";
import {
  ContactMe,
  Content,
  LogoWrapper,
  Routes,
  ModalHandlerIcon,
  MobileOverlay,
} from "./styles";
import Logo from "../../assets/svg/logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Menu, SocialMediaRoute } from "@/types";

interface Props {
  menus: Menu[];
  socialMedia: SocialMediaRoute[];
}

export default function NavBar({ menus, socialMedia }: Props) {
  const [ShowRoutes, setShowRoutes] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menus
        .map((menu) => {
          const id = menu.route.split("#")[1];
          const element = document.getElementById(id);
          return { id, element };
        })
        .filter((section) => section.element);

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menus]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: string
  ) => {
    e.preventDefault();
    const id = route.split("#")[1];
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      // Close mobile menu when clicking on a menu item
      setShowRoutes(false);
    } else {
      console.warn(`Section with id "${id}" not found`);
    }
  };

  return (
    <>
      <Content>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Routes showRoutes={ShowRoutes}>
          {menus.map((menu) => {
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
          {socialMedia.map((socialmedia) => {
            return (
              <div key={socialmedia.route}>
                <a href={socialmedia.route} target="_blank" rel="noreferrer">
                  <socialmedia.icon />
                </a>
              </div>
            );
          })}
          <ModalHandlerIcon onClick={() => setShowRoutes(!ShowRoutes)}>
            <a>{ShowRoutes ? <AiOutlineClose /> : <AiOutlineMenu />}</a>
          </ModalHandlerIcon>
        </ContactMe>
      </Content>
      {ShowRoutes && <MobileOverlay onClick={() => setShowRoutes(false)} />}
    </>
  );
}
