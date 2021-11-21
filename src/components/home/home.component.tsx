import React from 'react';
import { HomeContainer } from './home.styles';


// Home component.
// Initial screen is displayed when user opens the link.
const Home = () => {
    return (
        <HomeContainer>
            <label className='omdb'>OMDb</label>
            <label className='sub'>Search your favorite movie</label>
        </HomeContainer>
    );
};

export default Home;