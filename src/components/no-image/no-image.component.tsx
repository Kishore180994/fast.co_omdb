import React from 'react';
import { NoImageContainer } from './no-image.styles';

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