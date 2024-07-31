import styled from "styled-components";
// import backgroundImg from "../../assets/images/cineBackground.jpg";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.SOFT_HEATHER};
  }
`;
