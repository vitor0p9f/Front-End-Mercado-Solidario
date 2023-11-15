import { InputComponentContainer, InputContainer } from "@/Components/Input/styles";
import { devices } from "@/styles/global";
import { css, styled } from "styled-components";

type GroupProps = {
  $itemsQuantity: number
}
export const Group = styled.div<GroupProps>`
  display: flex;
  width: 100%;
  margin-top: 2rem;

  & > ${InputComponentContainer}:first-child{
    margin-right: 1.25rem;
  }

  ${({ $itemsQuantity }) => ($itemsQuantity > 2) && css`
    & > ${InputComponentContainer}:nth-child(2){
      margin-right: 1.25rem;
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${devices.laptop}{
    ${InputContainer}{
      margin-top: 1.5rem;
    }

    ${Group}{
      margin-top: 0rem;
    }

    padding-left: 8rem;
  padding-right: 8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  width: 100%;

  @media ${devices.laptop} {
    margin-top: 1.5rem;
  }
`

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  width: 100%;

  @media ${devices.laptop}{
    margin-top: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.raleway.bold};
  font-family: ${({ theme }) => theme.fonts.raleway.fontFamily};
  text-align: center;
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

  @media ${devices.laptop}{
    margin-top: 1.5rem;
  }
`
