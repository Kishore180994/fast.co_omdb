import React, { MouseEventHandler } from 'react';
import ThemedButton from '../../button/button.component';
import NoImage from '../../no-image/no-image.component'
import {
  ImageContainer,
  ItemContainer,
  MovieDetails,
  PlayListIcon,
} from './movie-item.styles';

interface Props {
  movie: {
    Poster: string,
    Title: string,
    imdbID: string,
  },
  addToPlayList: (val:string) => void,
  removeFromPlaylist: (val:string) => void
  playlist: string[],
}


const MovieItem: React.FC<Props> = ({ movie, addToPlayList, playlist, removeFromPlaylist }) => {
  const addOrRemoveFromPlayList: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    const id = movie.imdbID;
    // We are basically performing toggle operation.
    playlist.includes(id) ? removeFromPlaylist(id) : addToPlayList(id);
  }
  console.log(movie)
  return (
    <ItemContainer> 
      <div className='focus'>
        <div className='playlist-button'>
        <ThemedButton padding='7px 7px' action={addOrRemoveFromPlayList}>
          <PlayListIcon>
            {!playlist.includes(movie.imdbID) ?
              <div className='play'></div> :
              <div className='delete'></div>}
          </PlayListIcon>
        </ThemedButton>
        </div>
      </div>
      <ImageContainer>
        {movie.Poster !== 'N/A' ?
          <img src={movie.Poster} alt={movie.Title} /> :
          <div className='no-image'><NoImage/></div>}
      </ImageContainer>
      <MovieDetails>
        <div>{movie.Title}</div>
      </MovieDetails>
    </ItemContainer>
  );
};

export default MovieItem;
