import React, { useEffect } from "react";
import NavBar from "../../components/navbar";
import { Outlet, useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { Menus } from "./data";
import { SocialMedia } from "./data";
import { Component } from "./styles";

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
