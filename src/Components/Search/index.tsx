import React from 'react';
import {SearchBarContainer, SearchInput, SearchIcon} from './styles';

export const SearchBar = () => {
    return (
      <SearchBarContainer>
        <SearchInput type="text" placeholder="Pesquise aqui por feiras e produtos!" />
        <SearchIcon/>
      </SearchBarContainer>
    );
  };