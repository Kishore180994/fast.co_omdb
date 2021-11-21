import React from 'react';
import Search from '../searchbar/search.component';
import { HeaderContainer, Logo, PlayList, SearchContainer } from './header.styles';

// Incoming props.
interface Props {
  handleSubmit: (text: string) => Promise<void>,
  scrollingTopValue: number,
  isScrolling: boolean,
  numOfItems: number,
}

// Header component
const Header: React.FC<Props> = ({scrollingTopValue, handleSubmit, numOfItems}) => {
  return (
    <HeaderContainer scrollTopVal={scrollingTopValue }>
      <Logo to='/fast_omdb/'>OMDb</Logo>
      <SearchContainer>
        <Search onSubmit={handleSubmit} />
      </SearchContainer>
      <PlayList to='/fast_omdb/playlist'>
        <label className='count'>{numOfItems}</label>
        <label className='text'>Playlist</label>
      </PlayList>
    </HeaderContainer>
  );
};

export default Header;
