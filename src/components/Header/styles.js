import styled from "styled-components";
import Menu from "@mui/material/Menu";

export const Container = styled.header`
  //como eu quero que na rolagem da tela o cabeçalho permaneça fixo, vamos usar a estratégia de
  //trabalhar com grid-area
  grid-area: header;
  height: 10.5rem;
  width: 100%;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.LAVENDER_GRAY};

  display: flex;
  justify-content: space-evenly;

  padding: 0 8rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5rem;

  > div {
    display: flex;

    > img {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
    }

    strong {
      margin-right: 1.2rem;
      line-height: 2.4rem;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    min-width: 10rem;
    background-color: ${({ theme }) => theme.COLORS.GRAPHITE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 5rem;
    display: flex;
    justify-content: center;
  }
  & .MuiMenuItem-root {
    font-size: 1.6rem;
    padding: 8px 16px;
    font-weight: 500;
  }
`;
