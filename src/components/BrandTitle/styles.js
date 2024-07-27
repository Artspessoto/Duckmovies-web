import styled from "styled-components";

export const Container = styled.h3`
    font-weight: 700;
    font-size: ${({fontSize}) => fontSize || "1.8rem"};
    color: ${({theme}) => theme.COLORS.PINK};
`;