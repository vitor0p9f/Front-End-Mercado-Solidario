import { InputContainer } from "@/Components/Input/styles";
import { css, styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  width: 24.875rem;
`

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.raleway.bold};
  font-family: ${({ theme }) => theme.fonts.raleway.fontFamily};
  text-align: center;
`;

type GroupProps = {
  $itemsQuantity: number
}

export const Group = styled.div<GroupProps>`
  display: flex;
  width: 100%;
  margin-top: 2rem;

  & > ${InputContainer}:first-child{
    margin-right: 1.25rem;
  }

  ${({ $itemsQuantity }) => ($itemsQuantity > 2) && css`
    & > ${InputContainer}:nth-child(2){
      margin-right: 1.25rem;
    }
  `}
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
`
