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
      <Section title="Quem sou eu?" />
      <h1>SOBRE MIM</h1>
      <p>
        Tenho 25 anos e moro no Amapá. Há mais de 4 anos atuo como{" "}
        <b>desenvolvedor full-stack</b> com foco em <b>front-end</b>, criando
        soluções web modernas, performáticas e escaláveis.
      </p>
      <br />
      <p>
        Minha trajetória começou em 2021, quando decidi mudar de carreira e, em
        apenas 6 meses de dedicação intensa, conquistei meu primeiro emprego na
        área. Desde então, venho evoluindo constantemente, acumulando
        experiência em projetos complexos de ponta a ponta e buscando{" "}
        <b>evolução contínua</b> tanto nas minhas habilidades técnicas quanto
        nas habilidades interpessoais.
      </p>
      <br />
    </AboutMeSection>
  );
}
