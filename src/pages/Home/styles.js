import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  padding: 0 8rem;
  margin: 0 auto;
`;

export const AddMovie = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.ONYX};

  border: 1px solid;
  border-radius: 0.8rem;

  font-size: 1.6rem;
  font-weight: 500;

  height: 4.8rem;
  width: 18rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  padding: 4.4rem 0;

  > h1 {
    font-size: 3.2rem;
    font-weight: 700;

    display: flex;
    align-items: center;
  }
`;
