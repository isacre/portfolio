import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: white;
  width: 1200px;
  margin: auto;

  @media (max-width: 1250px) {
    width: 95%;
  }
`;
