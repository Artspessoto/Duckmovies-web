import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_PINK};

  border: none;
  border-radius: 1rem;

  padding: 2.2rem;
  margin-bottom: 1.6rem;

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }

  @media (max-width: 600px) {
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > footer {
      margin-top: 1.2rem;
    }
  }
`;

export const MovieTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  > h1 {
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    > h1 {
      font-size: 1.8rem;
    }
  }
`;
