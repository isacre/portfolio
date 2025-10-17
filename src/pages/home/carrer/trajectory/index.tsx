import Section from "@/components/section";
import Timeline from "@/components/timeline";
import { motion } from "framer-motion";
import { CarrerSection } from "./styles";
import { fadeInUp, staggerContainer } from "./animations";

export default function Trajectory() {
  const CareerData = [
    {
      date: "06/2023 - Current",
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
  ];

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
          <Timeline items={CareerData} />
        </motion.div>
      </motion.div>
    </CarrerSection>
  );
}
