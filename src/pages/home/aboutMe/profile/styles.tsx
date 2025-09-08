import styled from "styled-components";

export const IntroductionSection = styled.div`
  height: 450px;
  display: flex;
  align-items: center;
  scroll-margin-top: 120px;
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Introduction = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: Raleway, sans-serif;
  padding-left: 15px;

  p {
    font-family: Raleway, sans-serif;
    margin-top: 5px;
    font-size: 18px;
    max-width: 550px;
    line-height: 25px;
    font-weight: 400;
  }
`;
export const Picture = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 20px 0 rgba(220, 53, 69, 0.12),
    0 0 8px 0 rgba(220, 53, 69, 0.08);

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SocialMediaButtons = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 10px;
  font-weight: 400;

  .linkedin {
    color: var(--color-background-black);

    div {
      padding-top: 1px;
    }
  }
  .github {
    border: 1px solid var(--color-main);
    background-color: transparent;
    color: var(--color-main);

    div {
      padding-top: 1px;
    }
  }
`;

export const Button = styled.div`
  font-size: 18px;
  background-color: var(--color-main);
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 200ms ease-in;
  :hover {
    filter: brightness(55%);
  }
`;
