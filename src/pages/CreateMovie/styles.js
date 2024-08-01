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

  .button-text {
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
  margin: 2.8rem 0;

  > h2 {
    margin-bottom: 2.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_TAUPE};
    font-size: 2rem;
    font-weight: 400;
  }
`;

export const MovieItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.COLORS.MIDNIGHT_BLACK};

  gap: 1rem;
  padding: 1rem;

  border-radius: 1rem;
  min-height: 8.8rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;  

  button:nth-child(1){
    background-color: ${({ theme }) => theme.COLORS.MIDNIGHT_BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 0;
  }
  button:nth-child(2){
    margin-top: 0;
  }
`;
