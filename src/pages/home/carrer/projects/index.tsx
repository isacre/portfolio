import React, { useState } from "react";
import Section from "@/components/section";
import { ProjectsData } from "./data";
import Project from "@/components/project";
import Modal from "@/components/modal";
import ProjectModal from "@/components/projectModal";

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
    <div id="projects">
      <Section title="Projects" />
      <h1>PERSONAL PROJECTS</h1>
      <br />
      {ProjectsData.map((project, index) => (
        <Project
          key={index}
          {...project}
          onClick={() => handleProjectClick(project)}
        />
      ))}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </Modal>
    </div>
  );
}
