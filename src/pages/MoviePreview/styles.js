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

export const Main = styled.main`
  grid-area: content;
  overflow-y: scroll;
  padding: 4.4rem 0;

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

  @media (max-width: 600px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 600px) and (min-height: 667px) {
    padding-left: 1rem;
    padding-right: 2rem;
    padding-bottom: 38rem;
  }
`;

export const Section = styled.section`
  margin: 3rem 0 2.8rem;
`;

export const Content = styled.div`
  padding: 0 8rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > p {
    line-height: auto;
    font-size: 1.6rem;
    margin-top: 1.6rem;
    margin-bottom: 2rem;
    text-align: justify;
  }

  > button {
    background-color: ${({ theme }) => theme.COLORS.MIDNIGHT_BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
  }

  @media (max-width: 600px) {
    padding: 0 3rem;

    > p {
    line-height: auto;
    font-size: 1.4rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  > button {
    font-size: 1.4rem;
    width: 15rem;
  }
  }
`;

export const MovieHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h1 {
    display: flex;
    gap: 1rem;
    font-weight: 700;
    font-size: 3.6rem;
  }

  span {
    display: flex;
    gap: 0.8rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      align-self: center;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.4rem;

      > div {
        svg {
          height: 2.5rem;
          padding-top: 0.3rem;
        }
      }
    }
  }
`;
