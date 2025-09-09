import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";
import {
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  VideoSection,
  VideoContainer,
  VideoIframe,
  FeaturesList,
  FeatureItem,
  TechnologiesGrid,
  TechChip,
  ActionsContainer,
  ActionButton,
  SectionTitle,
} from "./styles";

interface ProjectData {
  name: string;
  description: string;
  href: string;
  github: string;
  liveDemo: string | null;
  image: string;
  video?: string | null;
  technologies: string[];
  features?: string[];
  longDescription?: string;
}

interface ProjectModalProps {
  project: ProjectData;
}

// Function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }

  return url;
};

export default function ProjectModal({ project }: ProjectModalProps) {
  return (
    <>
      <ProjectImage src={project.image} alt={project.name} />

      <ProjectTitle>{project.name}</ProjectTitle>

      <ProjectDescription>
        {project.longDescription || project.description}
      </ProjectDescription>

      {project.video && (
        <VideoSection>
          <SectionTitle>
            <FaRocket /> Project Demo
          </SectionTitle>
          <VideoContainer>
            <VideoIframe
              src={getYouTubeEmbedUrl(project.video)}
              title={`${project.name} Demo Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>
        </VideoSection>
      )}

      {project.features && project.features.length > 0 && (
        <>
          <SectionTitle>
            <FaRocket /> Key Features
          </SectionTitle>
          <FeaturesList>
            {project.features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeaturesList>
        </>
      )}

      <SectionTitle>
        <FaCode /> Technologies Used
      </SectionTitle>
      <TechnologiesGrid>
        {project.technologies.map((tech, index) => (
          <TechChip key={index}>{tech}</TechChip>
        ))}
      </TechnologiesGrid>

      <ActionsContainer>
        <ActionButton
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          View Code
        </ActionButton>

        {project.liveDemo && (
          <ActionButton
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            Live Demo
          </ActionButton>
        )}
      </ActionsContainer>
    </>
  );
}
