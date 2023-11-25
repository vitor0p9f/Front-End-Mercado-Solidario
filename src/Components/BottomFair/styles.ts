import { styled } from 'styled-components';

export const FairButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 1.5rem;
  margin-top: 2rem;

  & button:nth-child(1){
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  & button:nth-child(2){
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

type Buttonprops = {
  $isActive?: boolean;
}
export const Button = styled.button<Buttonprops>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  height: 100%;
  width: 100%;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ $isActive, theme }) => $isActive ? theme.colors.highlight : theme.colors.foreground};
  border: none;
`;
