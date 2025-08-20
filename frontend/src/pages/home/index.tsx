import AboutMe from "../../components/AboutMe";
import { Component } from "./styles";

export default function Home() {
  const mockData = [
    {
      id: 1,
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces.",
      image: "https://reactjs.org/logo-og.png",
    },

    {
      id: 2,
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces.",
      image: "https://reactjs.org/logo-og.png",
    },
    {
      id: 3,
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces.",
      image: "https://reactjs.org/logo-og.png",
    },
    {
      id: 4,
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces.",
      image: "https://reactjs.org/logo-og.png",
    },
  ];

  return (
    <Component>
      <AboutMe.Profile />
      <AboutMe.Description />
    </Component>
  );
}
