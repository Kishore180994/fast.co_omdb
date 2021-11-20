import React, { UIEventHandler, useRef, useState } from 'react';
import { MovieListItem, MovieListContainer, Perimeter } from './movie-list-child.styles';
import MovieItem from '../movie-item/movie-item.component';
import { briefMovieInfo, detailedMovieInfo } from '../../../utils/interfaces';

interface Props {
    movieList: briefMovieInfo[],
    selectedMovie: detailedMovieInfo,
    onSelectMovie: any,
    setScrolling: (val: boolean) => void,
    setScrollingTop: (val: number) => void,
    addToPlayList: (val: string) => void,
    removeFromPlaylist: (val:string) => void,
    playlist: string[]
  }
  
const MovieListChild: React.FC<Props> = ({ movieList, onSelectMovie, playlist, addToPlayList, removeFromPlaylist }) => {
    const myRef = useRef(null);
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const getScrollPosition:UIEventHandler<HTMLDivElement> = (e) => {
        const currentEl = e.currentTarget as HTMLDivElement;
        let reachedEnd: boolean = currentEl.scrollLeft+currentEl.clientWidth >= currentEl.scrollWidth-100? true: false;
        setAtEnd(reachedEnd);
        let isAtStart: boolean = currentEl.scrollLeft <= 100 ? true : false;
        setAtStart(isAtStart);
    }
    
    return (
        <Perimeter>
            {!atStart?<div className='left'></div>:<React.Fragment></React.Fragment>}
            <MovieListContainer ref={myRef} onScroll={getScrollPosition}>
            {movieList ? (
            movieList.map((movie, idx) => (
              <MovieListItem
                key={idx}
                onClick={() => onSelectMovie(movie)}>
                    <MovieItem movie={movie} playlist={playlist} addToPlayList={addToPlayList} removeFromPlaylist={removeFromPlaylist}/>
              </MovieListItem>
            ))
          ) : (
            <React.Fragment>No Match Found!!</React.Fragment>
            )}    
            </MovieListContainer>
            {!atEnd?<div className='right'></div>:<React.Fragment></React.Fragment>}
        </Perimeter>
    );
};

export default MovieListChild;