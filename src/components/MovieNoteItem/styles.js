import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* width: 20rem; */
  width: max-content;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.GRAPHITE};
  color: ${({ theme, $isNew }) =>
    $isNew ? theme.COLORS.LAVENDER_GRAY : "#FFFFFF"};

  border: ${({ theme, $isNew }) =>
    $isNew ? `0.1rem dashed ${theme.COLORS.LAVENDER_GRAY}` : "none"};

  /* margin-bottom: 0.8rem; */
  margin-left: 0.8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: contents;

    > svg {
      display: flex;
      align-items: center;
    }
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LAVENDER_GRAY};
    }
  }
`;
