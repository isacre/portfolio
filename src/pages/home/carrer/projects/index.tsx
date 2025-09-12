import React, { useState } from "react";
import Section from "@/components/section";
import { ProjectsData } from "./data";
import Project from "@/components/project";
import Modal from "@/components/modal";
import ProjectModal from "@/components/projectModal";
import { ProjectsSection, ProjectsList } from "./styles";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  projectStaggerContainer,
} from "./animations";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof ProjectsData)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleProjectClick(project: (typeof ProjectsData)[0]) {
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedProject(null);
  }

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
