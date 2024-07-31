import styled from "styled-components";

export const Container = styled.div`
  > header {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_PINK};
    height: 14.4rem;
    display: flex;
    align-items: center;
    padding: 0 12.4rem;
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;

  > button {
    opacity: 0.5;
    font-weight: 600;
  }

  &:nth-child(3),
  &:nth-child(4) {
    margin-top: 2rem;
  }
`;
