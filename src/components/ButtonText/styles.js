import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;

  .icon {
    margin-right: 0.8rem;
  }
`;
