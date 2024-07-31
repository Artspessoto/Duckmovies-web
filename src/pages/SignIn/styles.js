import styled from "styled-components";
import backgroundImg from "../../assets/images/cineBackground.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
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

  > button:last-child {
    margin-top: 4rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
