import styled from "styled-components";

export const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

export const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px 0;
  line-height: 1.3;
`;

export const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: #e2e8f0;
  line-height: 1.7;
  margin: 0 0 24px 0;
`;

export const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
`;

export const TechChip = styled.span`
  background: linear-gradient(135deg, #4a5568, #2d3748);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;

  &:hover {
    background: linear-gradient(135deg, #2d3748, #1a202c);
    transform: translateY(-2px);
  }
`;

export const VideoSection = styled.div`
  margin: 24px 0;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

export const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
`;

export const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #4a5568, #2d3748);
  color: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 85, 104, 0.4);
    background: linear-gradient(135deg, #2d3748, #1a202c);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
`;

export const FeatureItem = styled.li`
  color: #e2e8f0;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;

  &::before {
    content: "•";
    color: #4a5568;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;
