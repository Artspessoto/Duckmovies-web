import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 0.5rem 1.4rem;

  border-radius: 0.5rem;
  margin-right: 0.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  background-color: ${({ theme, $bgColor }) =>
    $bgColor || theme.COLORS.DEEP_CHARCOAL};
`;
