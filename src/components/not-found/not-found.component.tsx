import { EmptyContainer } from './not-found.styles'

// 404 default page, if wrong path is accessed inside this application.
const NotFound = () => {
    return (
        <EmptyContainer>
            <div className='text'>
                <div className='site'>OMBD</div>
                <div className='err'>(404) Page not found</div>
            </div>
        </EmptyContainer>
    );
};

export default NotFound;