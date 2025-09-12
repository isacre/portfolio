import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  Button,
  Introduction,
  IntroductionSection,
  IntroductionWrapper,
  Picture,
  SocialMediaButtons,
} from "./styles";
import profilePicture from "@/assets/picture.png";
import Section from "@/components/section";

export default function Profile() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
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
    <IntroductionSection id="about">
      <IntroductionWrapper>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Introduction>
            <motion.div variants={fadeInUp}>
              <Section title="Introduction" />
            </motion.div>
            <motion.h1 variants={fadeInUp}>Hello,</motion.h1>
            <motion.h1 variants={fadeInUp}>
              I'm <b>Isaac</b>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              <b>Self-taught</b> software developer, passionate about{" "}
              <b>learning</b> and <b>code</b>, specialized in <b>front-end</b>{" "}
              and capable of working across the entire <b>full stack</b> cycle.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <SocialMediaButtons>
                <a
                  href={
                    "https://www.linkedin.com/in/isaac-alves-melo-319b45185/"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="linkedin">
                    <BsLinkedin color="var(--color-background-black)" />
                    <div>LinkedIn</div>
                  </Button>
                </a>
                <a
                  href={"https://github.com/Isacre"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="github">
                    <BsGithub />
                    <div>Github</div>
                  </Button>
                </a>
              </SocialMediaButtons>
            </motion.div>
          </Introduction>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <Picture src={profilePicture} alt="Isaac Melo" />
        </motion.div>
      </IntroductionWrapper>
    </IntroductionSection>
  );
}
