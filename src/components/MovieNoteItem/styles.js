import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 5.6rem;
  min-width: 18rem;
  width: ${({ size }) => `${size}ch`};

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.GRAPHITE};
  color: ${({ theme, $isNew }) =>
    $isNew ? theme.COLORS.LAVENDER_GRAY : "#FFFFFF"};

  border: ${({ theme, $isNew }) =>
    $isNew ? `0.1rem dashed ${theme.COLORS.LAVENDER_GRAY}` : "none"};

  margin-left: 0.8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    > svg {
      display: flex;
      align-items: center;
    }
  }

  > input {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LAVENDER_GRAY};
    }
  }

  @media (max-width: 600px) {
    height: 4.5rem;
    min-width: 17rem;
    padding: 1rem;
  }
`;
