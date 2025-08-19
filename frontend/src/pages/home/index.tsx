import { useQuery } from "@tanstack/react-query";
import AboutMe from "../../components/AboutMe";
import { getTecnologies } from "../../services";
import { Component } from "./styles";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["tecnologies"],
    queryFn: getTecnologies,
  });

  return (
    <Component>
      <AboutMe.Profile />
      <AboutMe.Description />
    </Component>
  );
}
