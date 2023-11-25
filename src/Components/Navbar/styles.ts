import styled from 'styled-components';

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F5F5;
  color: #000000;
  height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;

  .nav-item {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: #6C9C50;
      transition: background-color 0.2s
    }
  }
`;
