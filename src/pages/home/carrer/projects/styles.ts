import styled from "styled-components";

export const ProjectsSection = styled.section`
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
export const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
