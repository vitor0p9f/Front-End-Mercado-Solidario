import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBarContainer = styled.div`
  display: flex;
  background: #F5F5F5;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 16px;
  border-radius: 8px;
`;

export const SearchInput = styled.input`
flex: 1;
height: 100%;
border: none;
font-size: 12px;
background: transparent;
padding-left: 10px; 
`;

export const SearchIcon = styled(AiOutlineSearch)`
  color: #6C9C50;
  font-size: 20px;
  background: transparent;
  padding-right: 10px; 
`;