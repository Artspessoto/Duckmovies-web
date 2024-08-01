import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "main";
`;

export const Main = styled.main`
  grid-area: main;
  padding: 4.4rem 0;

  button {
    padding: 2rem 8rem;
  }
`;

export const Form = styled.div`
  padding: 0 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  h1 {
    font-size: 3.6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 4rem;
`;
