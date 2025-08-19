import styled from "styled-components";
import Profile from "../../components/profile";
import Differentials from "../../components/differentials";
import AboutMe from "../../components/about-me";
import Technologyes from "../../components/technologyes";
import ContactMe from "../../components/contact-me";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin: 0px auto;
  padding-bottom: 100px;
`;

export default function Home() {
  return (
    <Component>
      <Profile />
      <Differentials />
      <AboutMe />
      <Technologyes />
      <ContactMe />
    </Component>
  );
}
