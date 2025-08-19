import styled from "styled-components";

const Logo = styled.div`
  position: absolute;
  height: 800px;
  width: 800px;

  left: 30%;
  z-index: -1;
`;
export default function ReactLogo() {
  return (
    <Logo>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
        <title>React Logo</title>
        <circle cx="0" cy="0" r="2.05" fill="#1e1e20" />
        <g stroke="#1e1e20" stroke-width="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    </Logo>
  );
}
