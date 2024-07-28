import styled from "styled-components";

export const Container = styled.h3`
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme }) => theme.COLORS.PINK};
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: ${({ logoWidth }) => logoWidth};
  height: ${({ logoHeight }) => logoHeight};
  //para mudar o logo de cor, é necessário apenas trocar a cor de background e aplicar border-radius 50%
  margin-right: 0.5rem; /* Espaçamento entre o ícone e o texto */
`;
