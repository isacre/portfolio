import React, { useState } from "react";
import Section from "@/components/section";
import { ProjectsData } from "./data";
import Project from "@/components/project";
import Modal from "@/components/modal";
import ProjectModal from "@/components/projectModal";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const ProjectsList = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof ProjectsData)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: (typeof ProjectsData)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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

  const projectStaggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <ProjectsSection id="projects">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        transition={{ delay: 2.6 }}
      >
        <motion.div variants={fadeInUp}>
          <Section title="Projects" />
        </motion.div>
        <motion.h1 variants={fadeInUp}>PERSONAL PROJECTS</motion.h1>
        <br />
        <motion.div variants={projectStaggerContainer}>
          <ProjectsList>
            {ProjectsData.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Project
                  {...project}
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </ProjectsList>
        </motion.div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </Modal>
    </ProjectsSection>
  );
}
