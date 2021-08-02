import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        background: ${props => props.theme.background};
    }
`