import { motion } from "framer-motion";
import Section from "../../../../components/section";
import {
  fadeInUp,
  fadeInUpStagger,
  staggerContainer,
  cardStaggerContainer,
} from "./animations";
import { DifferencialsSection, Container, Skill } from "./styles";

export default function Differentials() {
  const Differentials = [
    {
      description:
        "I always seek to create quality code, aiming for scalability and facilitating future maintenance",
      title: "Front-end",
      subtitle: "Code quality",
    },
    {
      description:
        "I express myself and make friends easily, I avoid unnecessary conflicts and I know how to adapt to the environment I'm in",
      title: "Personal",
      subtitle: "Communication",
    },
    {
      description:
        "I'm in constant development and learning. I know where I want to go and I strive to grow as a person and as a professional daily",
      title: "Personal",
      subtitle: "Self-motivation",
    },
    {
      description:
        "I always dreamed of working with something that involved technology and creativity.",
      title: "Front-end",
      subtitle: "Love for what I do",
    },
  ];

  return (
    <DifferencialsSection>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.7 }}
      >
        <motion.div variants={fadeInUp}>
          <Section title="My differentials" />
        </motion.div>
        <motion.h1 variants={fadeInUp}>
          WHAT <b>MAKES ME STAND OUT</b>
        </motion.h1>
        <motion.div variants={cardStaggerContainer}>
          <Container>
            {Differentials.map((skill, index) => {
              return (
                <motion.div key={index} variants={fadeInUpStagger}>
                  <Skill>
                    <div className="title">{skill.title}</div>
                    <div className="subtitle">{skill.subtitle}</div>
                    <div className="description">{skill.description}</div>
                  </Skill>
                </motion.div>
              );
            })}
          </Container>
        </motion.div>
      </motion.div>
    </DifferencialsSection>
  );
}
