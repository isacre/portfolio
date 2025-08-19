import React, { useState } from "react";
import { Menus, SocialMedia } from "./data";
import { ContactMe, Content, LogoWrapper, Routes, ModalHandlerIcon } from "./styles";
import Logo from "../../assets/svg/logo";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const findSelectedRoute = (url: string, route: string) => {
  if (url === route) return "selected";
  else return "";
};

export default function NavBar(props: { url: string }) {
  const [ShowRoutes, setShowRoutes] = useState(true);

  return (
    <Content>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Routes showRoutes={ShowRoutes}>
        {Menus.map((menu) => {
          return (
            <Link to={menu.route}>
              <p key={menu.route} className={findSelectedRoute(props.url, menu.route)}>
                {menu.text}
              </p>
            </Link>
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
