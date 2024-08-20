import styled from "styled-components";

export const Container = styled.div`
  > header {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_PINK};
    height: 14.4rem;
    display: flex;
    align-items: center;
    padding: 0 12.4rem;
    position: relative;
  }

  @media (max-width: 600px) {
    > header {
      height: 8rem;
      padding: 0 3rem;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  margin: -10.4rem auto 3.2rem;

  @media (max-width: 600px) {
    width: 15rem;
    height: 15rem;
    margin: -7rem auto 2.2rem;
  }

  > img {
    border-radius: 50%;
    width: 20rem;
    height: 20rem;

    @media (max-width: 600px) {
      width: 15rem;
      height: 15rem;
    }
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    svg {
      height: 2rem;
      width: 2rem;
      color: ${({ theme }) => theme.COLORS.MIDNIGHT};
    }

    input {
      display: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;

  > button {
    opacity: 0.5;
    font-weight: 600;
  }

  > div:nth-child(3) {
    margin-top: 2rem;
  }
`;
