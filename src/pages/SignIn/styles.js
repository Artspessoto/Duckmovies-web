import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  /* width: 100%; */
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
  }

  > h2 {
    font-size: 2.4rem;
  }
`;
