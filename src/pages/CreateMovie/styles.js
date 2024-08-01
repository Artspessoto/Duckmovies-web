import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    /* "button" */
    "main";

  /* button {
    grid-area: button;
    display: flex;
    align-items: center;
    padding: 2rem 8rem;
  } */
`;

export const Main = styled.main`
  grid-area: main;
  padding: 4.4rem 0;
  overflow-y: scroll;

  button {
    padding: 2rem 8rem;
  }

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    background-clip: content-box;
  }

  &&::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
    /* width: 10px; */
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

export const Section = styled.section`
  margin: 28px 0;

  > h2 {
    margin-bottom: 2.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_TAUPE};
    font-size: 2rem;
    font-weight: 400;
  }
`;
