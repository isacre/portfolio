import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  Button,
  Introduction,
  IntroductionSection,
  IntroductionWrapper,
  Picture,
  SocialMediaButtons,
} from "./styles";
import profilePicture from "../../assets/picture.png";
import Section from "../section";

export default function Profile() {
  return (
    <IntroductionSection>
      <IntroductionWrapper>
        <Introduction>
          <Section title="Introdução" />
          <h1>Olá,</h1>
          <h1>
            Eu sou o <b>Isaac</b>
          </h1>
          <p>
            Um desenvolvedor de front-end <b>autodidata</b>, apaixonado por{" "}
            <b>aprendizado</b> e por <b>código.</b>
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
