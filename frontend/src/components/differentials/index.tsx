import React from "react";
import styled from "styled-components";
import Section from "../section";

const DifferencialsSection = styled.div`
  height: fit-content;
  scroll-margin-top: 120px;

  h1 {
    width: 200px;
  }
`;

const Container = styled.div`
  padding-top: 10px;
  width: 100%;
  height: fit-content;
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Skill = styled.div`
  min-width: 249px;
  height: 200px;
  padding: 25px 21px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 25%);
  transition: all 0.3s ease-in-out;
  background: linear-gradient(120deg, #26282a -10%, rgba(45, 48, 54, 0) 105%);
  line-height: 150%;
  font-weight: 600;
  text-align: distribute;
  hyphens: auto;

  .title {
  }

  .subtitle {
    color: var(--color-main);
  }

  .description {
    height: 140px;
    display: flex;
    margin-top: 10px;
    color: hsla(0, 0%, 100%, 0.459);
  }
`;

export default function Differentials() {
  const Differentials = [
    {
      description: "Busco sempre criar código de qualidade, visando a escalabilidade e facilitar as manutenções futuras",
      title: "Front-end",
      subtitle: "Qualidade de código",
    },
    {
      description: "Me expresso e faço amizade com facilidade, evito conflitos desnecessários e sei me adaptar ao meio em que me encontro",
      title: "Pessoal",
      subtitle: "Comunicação",
    },
    {
      description:
        "Estou em constante desenvolvimento e aprendizado. Sei onde quero chegar e busco me esforçar pra crescer como pessoa e como profissional diariamente",
      title: "Pessoal",
      subtitle: "Automotivação",
    },
    {
      description: "Sempre sonhei em trabalhar com algo que envolvesse tecnologia e criatividade.",
      title: "Front-end",
      subtitle: "Amor pelo o que faz",
    },
  ];
  return (
    <DifferencialsSection id="projects">
      <Section title="Meus diferenciais" />
      <h1>
        O QUE ME <b>DESTACA</b>
      </h1>
      <Container>
        {Differentials.map((skill) => {
          return (
            <Skill>
              <div className="title">{skill.title}</div>
              <div className="subtitle">{skill.subtitle}</div>
              <div className="description">{skill.description}</div>
            </Skill>
          );
        })}
      </Container>
    </DifferencialsSection>
  );
}
