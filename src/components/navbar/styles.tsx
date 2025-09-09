import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(25, 25, 27, 0.9);
  backdrop-filter: blur(10px);
`;

export const LogoWrapper = styled.div`
  svg {
    height: 52px;
    width: 50px;
  }
`;

export const Routes = styled.div<any>`
  display: flex;
  justify-content: space-around;
  width: 500px;

  a {
    text-decoration: none;
    color: inherit;

    &.selected p {
      color: var(--color-main);
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(1);
        height: 3px;
        bottom: -5px;
        left: 0;
        background-color: var(--color-main);
        transform-origin: bottom left;
        transition: transform 0.3s ease-out;
        border-radius: 5px;
      }
    }
  }

  p {
    font-family: Raleway, sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 3px;
      bottom: -5px;
      left: 0;
      background-color: var(--color-main);
      transform-origin: bottom left;
      transition: transform 0.3s ease-out;
      border-radius: 5px;
    }

    :hover {
      color: var(--color-main);

      &::before {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }

  @media (max-width: 800px) {
    display: flex;
    position: fixed;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    left: ${(props) => (props.showRoutes ? "0px" : "-100%")};
    bottom: 0;
    top: 100px;
    width: 280px;
    background-color: var(--color-background-black);
    backdrop-filter: blur(10px);
    opacity: ${(props) => (props.showRoutes ? "0.98" : "0")};
    visibility: ${(props) => (props.showRoutes ? "visible" : "hidden")};
    transition: all 300ms ease-in-out;
    z-index: 999;
    padding: 20px 0;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);

    p {
      padding: 15px 20px;
      margin-bottom: 5px;
      width: 100%;
      font-size: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      &:last-child {
        border-bottom: none;
      }
    }

    a {
      width: 100%;
      display: block;

      &:hover p {
        background-color: rgba(255, 255, 255, 0.05);
        color: var(--color-main);
      }
    }
  }
`;

export const ContactMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background-color: var(--color-main);
    border-radius: 105px;
    cursor: pointer;

    :hover {
      svg {
        transform: scale(111%);
      }
    }
  }

  svg {
    height: 20px;
    width: 20px;
    padding-top: 3px;
    transition: all 200ms ease-in-out;
    animation: bounceIn 200ms;

    @keyframes bounceIn {
      0% {
        transform: scale(80%);
      }
      100% {
        transform: scale(100%);
      }
    }
  }
`;

export const ModalHandlerIcon = styled.span`
  display: none;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: var(--color-main);
  border-radius: 105px;
  cursor: pointer;

  :hover {
    svg {
      transform: scale(111%);
    }
  }
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
    backdrop-filter: blur(2px);
    opacity: 1;
    visibility: visible;
    transition: opacity 300ms ease-in-out;
  }
`;
