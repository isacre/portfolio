import AboutMe from "./aboutMe";
import Carrer from "./carrer";
import { Component } from "./styles";
import Footer from "./footer";

export default function Home() {
  return (
    <Component>
      <AboutMe.Profile />
      <AboutMe.Description />
      <Carrer.Projects />
      <Carrer.Trajectory />
    </Component>
  );
}
