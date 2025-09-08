import Section from "@/components/section";
import Timeline from "@/components/Timeline";
import React from "react";

const mockCareerData = [
  {
    date: "06/2025",
    title: "Triagil - Desenvolvedor Full Stack Senior",
    description:
      "Responsável pelo desenvolvimento e manutenção dos 3 produtos principais da empresa: Autorizai, Auditai e Analisaí.",
  },
  {
    date: "06/2023",
    title: "Triagil - Desenvolvedor Full-Stack Pleno",
    description:
      "Fui promovido para desenvolvedor full-stack pleno, assumindo a responsabilidade de tutorar novos desenvolvedores e também coloborar com o projeto de ponta a ponta.",
  },
  {
    date: "01/2022",
    title: "Triagil - Desenvolvedor Frontend Júnior",
    description:
      "Entrei na Triágil como o primeiro desenvolvedor frontend da empresa, tive a oportunidade de fazer do zero o dashboard do Autorizai com React e Typescript e assumir 100% da responsabilidade do projeto.",
  },
  {
    date: "06/2021",
    title: "Abandonei a faculdade de Relações Internacionais",
    description: "Abandonei a faculdade para focar em desenvolvimento web.",
  },
];

export default function Trajectory() {
  return (
    <div id="carrer" style={{ scrollMarginTop: "120px" }}>
      <Section title="Minha Carreira" />
      <Timeline items={mockCareerData} />
    </div>
  );
}
