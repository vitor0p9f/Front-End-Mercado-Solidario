import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBarContainer = styled.div`
  display: flex;
  background: #F5F5F5;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  width: 100%;
  margin-top: 2rem;
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
  font-size: 1.75rem;
  background: transparent;
  padding-right: 10px; 
`;
