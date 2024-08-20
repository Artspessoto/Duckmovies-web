import styled from "styled-components";
import Menu from "@mui/material/Menu";
import Logo from "../../assets/icons/duckmoviesLogo.svg";

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

  @media (max-width: 600px) {
    padding: 0 3rem;

    > div {
      gap: 2rem;
    }
  }
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
      cursor: pointer;
    }

    strong {
      margin-right: 1.2rem;
      line-height: 2.4rem;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 600px) {
    > a {
      background: url(${Logo}) no-repeat center;
      background-size: cover;
      width: 5rem;
      height: 5rem;

      > h3 {
        display: none;
      }
    }

    > div {
      gap: 0.1rem;
      width: 23rem;
      margin-top: 1rem;
    }

    > div {
      strong {
        display: none;
      }
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
    display: flex;
    gap: 1rem;
  }
`;
