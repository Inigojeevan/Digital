import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Arial', sans-serif;
        background-color: #CADCFC;
        color: #333;
        line-height: 1.6;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyles;
