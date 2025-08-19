import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    @font-face {
    font-family: Raleway, sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
}

    --color-background-black: rgb(25,25,27);
    --color-main: rgb(255,79,90);
}

html {
    scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    font-family: Roboto,sans-serif;

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: var(--color-background-black);
}
::-webkit-scrollbar-thumb {
  background: var(--color-main);
}
::-webkit-scrollbar-thumb:hover {
  background:#b62b34;
}
}

    b {
    color: var(--color-main);
  }

    a {
        text-decoration: none;
        color: inherit
    }

    h1 {
    font-family: Raleway, sans-serif;
    line-height: 100%;
    font-weight: 800;
  }

.App {
    background-color: var(--color-background-black);
}
`;

export default GlobalStyle;
