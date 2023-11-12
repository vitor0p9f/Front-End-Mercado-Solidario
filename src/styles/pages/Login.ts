import styled from 'styled-components';

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

type TextProps = {
  $marginTop?: number;
};
export const Text = styled.p<TextProps>`
  margin-top: ${(props) => props.$marginTop || 0}rem;
  font-family: ${({ theme }) => theme.fonts.lato.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.lato.regular};
  font-size: 1.05rem;
`;
