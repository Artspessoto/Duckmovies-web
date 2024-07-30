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
`;

export const MovieTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
  > h1 {
    /* flex: 1; */
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
