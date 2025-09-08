import styled from "styled-components";
import Section from "@/components/section";

const AboutMeSection = styled.section`
  text-align: justify;
  scroll-margin-top: 120px;
  p {
    font-family: Raleway, sans-serif;
    margin-top: 5px;
    font-size: 18px;
    max-width: 100%;
    line-height: 25px;
    font-weight: 400;
  }
`;

export default function Description() {
  return (
    <AboutMeSection>
      <Section title="Who am I?" />
      <h1>ABOUT ME</h1>
      <p>
        I'm 25 years old and live in Amapá. For over 4 years I've been working
        as a <b>full-stack developer</b> with a focus on <b>front-end</b>,
        creating modern, performant and scalable web solutions.
      </p>
      <br />
      <p>
        My journey began in 2021, when I decided to change careers and, in just
        6 months of intense dedication, I got my first job in the field. Since
        then, I've been constantly evolving, accumulating experience in complex
        end-to-end projects and seeking <b>continuous evolution</b> both in my
        technical skills and interpersonal skills.
      </p>
      <br />
    </AboutMeSection>
  );
}
