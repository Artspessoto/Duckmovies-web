import styled from "styled-components";

export const Container = styled.header`
    //como eu quero que na rolagem da tela o cabeçalho permaneça fixo, vamos usar a estratégia de
    //trabalhar com grid-area
    grid-area: header;
    height: 10.5rem;
    width: 100%;

    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.DEEP_GRAPHITE};

    display: flex;
    justify-content: space-between;

    padding: 0 8rem;
`;