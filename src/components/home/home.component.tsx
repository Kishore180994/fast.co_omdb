import React from 'react';
import { HomeContainer } from './home.styles';

const Home = () => {
    return (
        <HomeContainer>
            <label className='omdb'>OMDb</label>
            <label className='sub'>Search your favorite movie</label>
        </HomeContainer>
    );
};

export default Home;