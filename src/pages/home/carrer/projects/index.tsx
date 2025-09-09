import React, { useState } from "react";
import Section from "@/components/section";
import { ProjectsData } from "./data";
import Project from "@/components/project";
import Modal from "@/components/modal";
import ProjectModal from "@/components/projectModal";
import styled from "styled-components";

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

  return (
    <ProjectsSection id="projects">
      <Section title="Projects" />
      <h1>PERSONAL PROJECTS</h1>
      <br />
      <ProjectsList>
        {ProjectsData.map((project, index) => (
          <Project
            key={index}
            {...project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </ProjectsList>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </Modal>
    </ProjectsSection>
  );
}
