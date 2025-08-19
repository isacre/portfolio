import React from "react";
import Section from "../section";
import styled from "styled-components";
import ilustration from "../../assets/nobg.png";

const AboutMeSection = styled.div`
  text-align: justify;
  p {
    font-family: Raleway, sans-serif;
    margin-top: 5px;
    font-size: 18px;
    max-width: 100%;
    line-height: 25px;
    font-weight: 400;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function AboutMe() {
  return (
    <AboutMeSection id="projects">
      <Section title="Quem sou eu?" />
      <h1>
        SOBRE <b>MIM</b>
      </h1>
      <p>
        No ano de 2021 decidi mudar de vida, larguei a faculdade de Relações Internacionais e passei a investir todo o meu tempo em me tornar um{" "}
        <b>desenvolvedor front-end</b> e em 6 meses de muita dedicação, fui do zero a meu primeiro emprego, aonde tive a certeza que amo esta carreira e tenho
        certeza que é o que quero pra minha vida
      </p>
      <br />
      <p>
        Como desenvolvedor, prezo pela <b>qualidade do código</b> e busco sempre me manter atualizado com as demandas do mercado e novas tecnologias, buscando
        sempre novos desafios que me ajudem a alcançar o próximo nível
      </p>
      <ImgWrapper>
        <img src={ilustration} alt="" />
      </ImgWrapper>
    </AboutMeSection>
  );
}
