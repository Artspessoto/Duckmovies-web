import styled from "styled-components";
import backgroundImg from "../../assets/images/cineBackground.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: 600px) and (min-height: 768px) {
    height: fit-content;
    display: flex;
    align-items: center;
    align-items: center;
  }

`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.SOFT_HEATHER};
  }

  > h2 {
    font-size: 2.4rem;
    margin-top: 4.4rem;
    margin-bottom: 4.4rem;
  }

  > a {
    margin-top: 4rem;
  }

  @media (max-width: 600px) {
    padding: 0 2rem;

    > h2 {
      font-size: 1.8rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    > p {
      font-size: 1.2rem;
    }

    > a {
      margin-top: 2rem;
    }
  }

  @media (max-width: 600px) and (min-height: 768px) {
    padding: 10rem 2rem;

    > h2 {
      font-size: 1.8rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    > p {
      font-size: 1.2rem;
    }

    > a {
      margin-top: 2rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 768) {
    display: none;
  }
`;
