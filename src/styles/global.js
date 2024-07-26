import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DEEP_GRAPHITE};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 62.5%;

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Poppins", sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;
