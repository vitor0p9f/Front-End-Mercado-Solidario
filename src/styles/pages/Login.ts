import { css, styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.raleway.bold};
  font-family: ${({ theme }) => theme.fonts.raleway.fontFamily};
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.5rem;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.highlight};
  border: none;
  border-radius: 0.25rem;
  margin-top: 2.5rem;
  cursor: pointer;
  width: 14.313rem;
  font-family: ${({ theme }) => theme.fonts.raleway.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.raleway.semiBold};

  &:hover, &:active{
    background-color: ${props => props.theme.colors.hover};
  }
`;

type OptionsContainerProps = {
  $marginTop?: number
}
/**
 * @param {number} [$marginTop] - Valor, em rem, da margem superior
 */
export const OptionsContainer = styled.div<OptionsContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ $marginTop }) => $marginTop || 0}rem;
`;

type TextContainerProps = {
  $marginTop?: number
}
/**
 * @param {number} [$marginTop] - Valor, em rem, da margem superior
 */
export const TextContainer = styled.div<TextContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ $marginTop }) => $marginTop || 0}rem;
`;

type TextProps = {
  $color?: string
  $marginRight?: number
  $highlight?: boolean
}
/**
 * @param {number} [$marginRight] - Valor, em rem, do tamanho da margem esquerda.
 * @param {boolean} [$highlight] - Valor verdadeiro/falso que diz se o texto deve ou não ser destacado.
 */
export const Text = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.black};
  margin-right: ${({ $marginRight }) => $marginRight || 0}rem;
  font-family: ${({ theme }) => theme.fonts.raleway.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.raleway.regular};
  font-size: 0.875rem;

  ${({ $highlight }) => $highlight && css`
    color: ${({ theme }) => theme.colors.highlight};
    cursor: pointer;
  `}
`;