import Section from "@/components/section";
import Timeline from "@/components/timeline";
import styled from "styled-components";
import { motion } from "framer-motion";

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
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <CarrerSection id="career">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        transition={{ delay: 3.4 }}
      >
        <motion.div variants={fadeInUp}>
          <Section title="My Career" />
        </motion.div>
        <motion.h1 variants={fadeInUp}>WHERE I'VE BEEN</motion.h1>
        <br />
        <motion.div variants={fadeInUp}>
          <Timeline items={mockCareerData} />
        </motion.div>
      </motion.div>
    </CarrerSection>
  );
}
