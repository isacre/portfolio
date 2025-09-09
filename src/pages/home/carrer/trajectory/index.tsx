import Section from "@/components/section";
import Timeline from "@/components/timeline";
import styled from "styled-components";

const CarrerSection = styled.section`
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const mockCareerData = [
  {
    date: "06/2025",
    title: "Triagil - Senior Full Stack Developer",
    description:
      "Responsible for the development and maintenance of the company's 3 main products: Autorizai, Auditai and Analisaí.",
  },
  {
    date: "06/2023",
    title: "Triagil - Mid-level Full-Stack Developer",
    description:
      "I was promoted to mid-level full-stack developer, taking on the responsibility of mentoring new developers and also collaborating on end-to-end projects.",
  },
  {
    date: "01/2022",
    title: "Triagil - Junior Frontend Developer",
    description:
      "I joined Triágil as the company's first frontend developer, I had the opportunity to build the Autorizai dashboard from scratch with React and Typescript and take 100% responsibility for the project.",
  },
  {
    date: "06/2021",
    title: "Dropped out of International Relations college",
    description: "I dropped out of college to focus on web development.",
  },
];

export default function Trajectory() {
  return (
    <CarrerSection id="career">
      <Section title="My Career" />
      <h1>WHERE I'VE BEEN</h1>
      <br />
      <Timeline items={mockCareerData} />
    </CarrerSection>
  );
}
