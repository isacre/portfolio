import styled from "styled-components";
import Profile from "../../components/profile";
import Differentials from "../../components/differentials";
import AboutMe from "../../components/about-me";
import Technologyes from "../../components/technologyes";
import ContactMe from "../../components/contact-me";
import { useQuery } from "@tanstack/react-query";
import { getTecnologies } from "../../services";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin: 0px auto;
  padding-bottom: 100px;
  padding-top: 20px;
`;

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tecnologies"],
    queryFn: getTecnologies,
  });

  return (
    <Component>
      <Profile />
      <Differentials />
      <AboutMe />
      <Technologyes tecnologies={data?.data || []} />
      <ContactMe />
    </Component>
  );
}
