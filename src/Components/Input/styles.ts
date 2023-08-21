import styled from 'styled-components';

type InputContainerProps = {
  $marginTop?: number
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: ${(props) => props.$marginTop || 0}rem;
`;

export const InputElement = styled.input`
  display: block;
  padding-top: 4px;
  padding-left: 0;
  width: 100%;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.black};
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  appearance: none;
  outline: none;

  &:focus{
    border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
  }
`;

export const Label = styled.label`
  position: absolute;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  left: 0;
  margin-top: 0rem;
  font-family: ${({ theme }) => theme.fonts.raleway.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.raleway.semiBold};

  ${InputElement}:focus ~ &,${InputElement}:not(:placeholder-shown) ~ &{
    color: ${({ theme }) => theme.colors.highlight};
    margin-top: -1.4rem;
    font-size: 1rem;
  }

  ${InputElement}:not(:placeholder-shown) ~ &{
    color: ${({ theme }) => theme.colors.black};
  }
`;
