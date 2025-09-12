import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  Wrapper,
  Image,
  Content,
  Title,
  Description,
  Actions,
  ActionButton,
  LiveDemoButton,
} from "./styles";

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
