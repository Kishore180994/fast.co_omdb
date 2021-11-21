import React from 'react';
import { NoImageContainer } from './no-image.styles';

// NoImage container is used to display the defailt image for the movie if the
// Poster is not available for the movie.
const NoImage:React.FC = () => {
    return (
        <NoImageContainer>
            <div className='title'>
                <div className='a'>OMDb</div>
                <div className='b'>(fast.co)</div>
            </div>
            
        </NoImageContainer>
    );
};

export default NoImage;