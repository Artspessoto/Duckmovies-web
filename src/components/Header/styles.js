import styled from "styled-components";

export const Container = styled.header`
  //como eu quero que na rolagem da tela o cabeçalho permaneça fixo, vamos usar a estratégia de
  //trabalhar com grid-area
  grid-area: header;
  height: 10.5rem;
  width: 100%;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.DEEP_GRAPHITE};

  display: flex;
  justify-content: space-between;

  padding: 0 8rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 1.2rem;
    line-height: 2.4rem;

    span {
      display: flex;
      justify-content: end;
      font-size: 1.4rem;
      color: ${({theme}) => theme.COLORS.LAVENDER_GRAY};
    }

    strong {
        font-size: 1.8rem;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;

