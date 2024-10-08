import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 40rem;
  display: flex;
  text-align: left;

  @media (max-width: 600px) and (min-height: 600px) {
    width: 20rem;
  }

  @media (max-width: 600px) {
    width: 30rem;
  }

  .alert-container {
    transition: opacity 500ms ease-out, transform 500ms ease-out;
  }

  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-out {
    opacity: 0;
    transform: translateY(-20px);
  }
`;
