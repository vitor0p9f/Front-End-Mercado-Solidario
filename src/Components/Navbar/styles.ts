import styled from 'styled-components';

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F5F5;
  color: #00000;
  height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;

  .nav-item {
    flex: 1;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #6C9C50;
      height: 35px;
      transition: background-color 0.2s
    }
  }
`;



