import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F5F5;
  color: #000000;
  height: 24px;
  border-radius: 8px;
  width: 100%;
  margin-top: 25px;
  font-size: 12px;

  .button-item {
    flex: 1;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #6C9C50;
      border-radius: 8px;
      height: 24px;
      align-items: center;
      transition: background-color 0.2s
    }
  }
`;