import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  Button,
  Introduction,
  IntroductionSection,
  IntroductionWrapper,
  Picture,
  SocialMediaButtons,
} from "./styles";
import profilePicture from "@/assets/picture.png";
import Section from "@/components/section";

export default function Profile() {
  return (
    <IntroductionSection id="about">
      <IntroductionWrapper>
        <Introduction>
          <Section title="Introduction" />
          <h1>Hello,</h1>
          <h1>
            I'm <b>Isaac</b>
          </h1>
          <p>
            <b>Self-taught</b> software developer, passionate about{" "}
            <b>learning</b> and <b>code</b>, specialized in <b>front-end</b> and
            capable of working across the entire <b>full stack</b> cycle.
          </p>
          <SocialMediaButtons>
            <a
              href={"https://www.linkedin.com/in/isaac-alves-melo-319b45185/"}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="linkedin">
                <BsLinkedin color="var(--color-background-black)" />
                <div>LinkedIn</div>
              </Button>
            </a>
            <a
              href={"https://github.com/Isacre"}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="github">
                <BsGithub />
                <div>Github</div>
              </Button>
            </a>
          </SocialMediaButtons>
        </Introduction>
        <Picture src={profilePicture} alt="Isaac Melo" />
      </IntroductionWrapper>
    </IntroductionSection>
  );
}
