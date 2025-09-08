import styled from "styled-components";

export const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-main);
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

export const TimelineItem = styled.div<{ isEven: boolean }>`
  position: relative;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  ${({ isEven }) =>
    isEven
      ? `
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  `
      : ""}
`;

export const TimelineContent = styled.div<{ isEven: boolean }>`
  width: 45%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 79, 90, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-main);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 79, 90, 0.15);
  }

  ${({ isEven }) =>
    isEven
      ? `
    margin-right: 55%;
    
    @media (max-width: 768px) {
      margin-right: 0;
      margin-left: 60px;
    }
  `
      : `
    margin-left: 55%;
    
    @media (max-width: 768px) {
      margin-left: 60px;
    }
  `}
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  background: var(--color-main);
  border: 3px solid var(--color-background-black);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

export const Date = styled.div`
  font-size: 12px;
  color: var(--color-main);
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 600;
  font-family: Raleway, sans-serif;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #cccccc;
  line-height: 1.6;
  font-weight: 400;
`;
