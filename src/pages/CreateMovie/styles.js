import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 
    "header"
    "main"
    ;
`;

export const Main = styled.div`
    grid-area: main;
    overflow-y: scroll;
    padding: 4.4rem 0;
`;