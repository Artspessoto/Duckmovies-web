import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "title"
    "content";
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  grid-area: title;
  padding: 4.4rem 8rem;

  > h1 {
    font-size: 3.2rem;
    font-weight: 700;

    display: flex;
    align-items: center;
  }
`;

export const AddMovie = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.ONYX};

  border: 1px solid;
  border-radius: 0.8rem;

  font-size: 1.6rem;
  font-weight: 500;

  height: 4.8rem;
  width: 18rem;
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  margin: 0 8rem;
  padding-right: 2rem;
  gap: 2.4rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    background-clip: content-box;
  }

  &&::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;
