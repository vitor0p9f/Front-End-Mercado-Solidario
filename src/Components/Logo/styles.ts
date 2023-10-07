import { styled } from "styled-components";

type Props = {
  $size: number
}

export const Logo = styled.img<Props>`
  width: ${({ $size }) => `${$size}rem`};
`;