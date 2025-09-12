import styled from "styled-components";
import { motion } from "framer-motion";
import Section from "../../../../components/section";

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

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const fadeInUpStagger = {
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

  const cardStaggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

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
