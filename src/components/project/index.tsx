import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Wrapper = styled.div`
  background: linear-gradient(145deg, #4a5568, #2d3748);
  width: 350px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 1px solid rgba(74, 85, 104, 0.3);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    background: linear-gradient(145deg, #2d3748, #1a202c);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Wrapper}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 24px;
  color: #f7fafc;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.4;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #e2e8f0;
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 8px;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #718096 0%, #4a5568 100%);
  color: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(113, 128, 150, 0.4);
    background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const LiveDemoButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: linear-gradient(135deg, #718096 0%, #4a5568 100%);
  color: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(113, 128, 150, 0.4);
    background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
interface Props {
  name: string;
  description: string;
  href: string;
  github: string;
  liveDemo: string | null;
  image: string;
  onClick?: () => void;
}
export default function Project({
  name,
  description,
  github,
  liveDemo,
  image,
  onClick,
}: Props) {
  const handleClick = (e: React.MouseEvent) => {
    // Prevent modal from opening when clicking on action buttons
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    onClick?.();
  };

  return (
    <Wrapper onClick={handleClick}>
      <Image src={image} alt={name} />
      <Content>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Actions>
          <ActionButton href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </ActionButton>
          {liveDemo && (
            <LiveDemoButton
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt style={{ marginRight: "6px" }} />
              Demo
            </LiveDemoButton>
          )}
        </Actions>
      </Content>
    </Wrapper>
  );
}
