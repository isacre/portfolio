import AboutMe from "../../components/AboutMe";
import Carrer from "../../components/Carrer";
import { Component } from "./styles";

export default function Home() {
  return (
    <Component>
      <AboutMe.Profile />
      <AboutMe.Description />
      <Carrer.Trajectory />
    </Component>
  );
}
