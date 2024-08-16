import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 25rem;
  gap: 1rem;

  button:nth-child(1) {
    padding-right: 1rem;
  }

  button:nth-child(2) {
    background-color: ${({ theme }) => theme.COLORS.MIDNIGHT_BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
