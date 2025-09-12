import styled from "styled-components";

export const DifferencialsSection = styled.div`
  height: fit-content;
  scroll-margin-top: 120px;

  h1 {
    width: 200px;
  }
`;

export const Container = styled.div`
  padding-top: 10px;
  width: 100%;
  height: fit-content;
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Skill = styled.div`
  min-width: 249px;
  height: 200px;
  padding: 25px 21px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 25%);
  transition: all 0.3s ease-in-out;
  background: linear-gradient(120deg, #26282a -10%, rgba(45, 48, 54, 0) 105%);
  line-height: 150%;
  font-weight: 600;
  text-align: distribute;
  hyphens: auto;

  .title {
  }

  .subtitle {
    color: var(--color-main);
  }

  .description {
    height: 140px;
    display: flex;
    margin-top: 10px;
    color: hsla(0, 0%, 100%, 0.459);
  }
`;
