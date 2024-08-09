import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: ${(props) => props.theme.colors.background[1]};
        color: ${(props) => props.theme.colors.accessibleText[12]};
        padding: 1.5rem;
    }
    `;

export default GlobalStyles;
