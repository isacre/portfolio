import styled from "styled-components";

export const AboutMeSection = styled.section`
  text-align: justify;
  scroll-margin-top: 120px;
  height: 100%;

  p {
    font-family: Raleway, sans-serif;
    margin-top: 5px;
    font-size: 18px;
    max-width: 100%;
    line-height: 25px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
