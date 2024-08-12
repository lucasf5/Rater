import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
        background-color: ${(props) => props.theme.colors.background[1]};
        color: ${(props) => props.theme.colors.accessibleText[12]};
        padding: 1.5rem;
        max-width: 1440px;
        margin: 0 auto;
    }
    `;

export default GlobalStyles;
