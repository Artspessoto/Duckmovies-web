import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  //por que rows? Porque vamos ter 2 linhas, uma do cabeçalho e outra do conteúdo
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";
`;
