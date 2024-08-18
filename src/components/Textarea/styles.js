import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27rem;

  background-color: ${({ theme }) => theme.COLORS.GRAPHITE};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LAVENDER_GRAY};
  }
`;

export const CharacterCounter = styled.span`
    position: absolute;
    bottom: 2rem;
    right: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LAVENDER_GRAY};
`;
