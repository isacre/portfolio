import styled from "styled-components";
import { motion } from "framer-motion";
import Section from "@/components/section";

const AboutMeSection = styled.section`
  text-align: justify;
  scroll-margin-top: 120px;
  height: 100%;

  p {
    font-family: Raleway, sans-serif;
    margin-top: 5px;
    font-size: 18px;
    max-width: 100%;
    line-height: 25px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export default function Description() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <AboutMeSection>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.8 }}
      >
        <motion.div variants={fadeInUp}>
          <Section title="Who am I?" />
        </motion.div>
        <motion.h1 variants={fadeInUp}>ABOUT ME</motion.h1>
        <motion.p variants={fadeInUp}>
          I'm 25 years old and live in Amapá. For over 4 years I've been working
          as a <b>full-stack developer</b> with a focus on <b>front-end</b>,
          creating modern, performant and scalable web solutions.
        </motion.p>
        <br />
        <motion.p variants={fadeInUp}>
          My journey began in 2021, when I decided to change careers and, in
          just 6 months of intense dedication, I got my first job in the field.
          Since then, I've been constantly evolving, accumulating experience in
          complex end-to-end projects and seeking <b>continuous evolution</b>{" "}
          both in my technical skills and interpersonal skills.
        </motion.p>
        <br />
      </motion.div>
    </AboutMeSection>
  );
}
