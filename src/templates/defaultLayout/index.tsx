import React, { useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../components/navbar";
import { Outlet, useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { Menus } from "./data";
import { SocialMedia } from "./data";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: white;
  width: 1200px;
  margin: auto;

  @media (max-width: 1250px) {
    width: 95%;
  }
`;

export default function DefaultLayout() {
  const navigate = useNavigate();
  const currentUrl = useLocation().pathname;

  useEffect(() => {
    if (currentUrl === "/") navigate("/home");
  }, []);

  return (
    <Component>
      <NavBar menus={Menus} socialMedia={SocialMedia} />
      <Outlet />
    </Component>
  );
}
