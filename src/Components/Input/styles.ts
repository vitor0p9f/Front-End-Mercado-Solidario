import styled from "styled-components";

type InputContainerProps = {
  $marginTop?: number;
};

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: ${(props) => props.$marginTop || 0}rem;
`;

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type InputProps = {
  $hasError: boolean;
};

export const InputElement = styled.input<InputProps>`
  display: block;
  padding-top: 4px;
  padding-left: 0;
  width: 100%;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.black};
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid
    ${({ theme, $hasError }) => ($hasError ? "red" : theme.colors.black)};
  appearance: none;
  outline: none;
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.lato.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.lato.regular};

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
  }
`;

type LabelProps = {
  $hasError: boolean;
};

export const Label = styled.label<LabelProps>`
  position: absolute;
  font-size: 1.125rem;
  color: ${({ theme, $hasError }) => ($hasError ? "red" : theme.colors.black)};
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  left: 0;
  margin-top: 0rem;
  font-family: ${({ theme }) => theme.fonts.raleway.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.raleway.semiBold};

  ${InputElement}:focus ~ &, ${InputElement}:not(:placeholder-shown) ~ & {
    color: ${({ theme }) => theme.colors.highlight};
    margin-top: -1.1rem;
    font-size: 1rem;
  }

  ${InputElement}:not(:placeholder-shown) ~ & {
    color: ${({ theme, $hasError }) =>
    $hasError ? "red" : theme.colors.black};
  }
`;

export const Span = styled.span`
  align-self: self-start;
  margin-top: 0.1rem;
  color: red;
  font-size: 0.8rem;
`;
