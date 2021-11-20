import React from 'react';
import Search from '../searchbar/search.component';
import { HeaderContainer, Logo, PlayList, SearchContainer } from './header.styles';

interface Props {
  handleSubmit: (text: string) => Promise<void>,
  scrollingTopValue: number,
  isScrolling: boolean
}

const Header: React.FC<Props> = ({scrollingTopValue, handleSubmit}) => {
  return (
    <HeaderContainer scrollTopVal={scrollingTopValue }>
      <Logo to='/'>OMDb</Logo>
      <SearchContainer>
        <Search onSubmit={handleSubmit} />
      </SearchContainer>
      <PlayList to='/playlist'>Playlist</PlayList>
    </HeaderContainer>
  );
};

export default Header;
