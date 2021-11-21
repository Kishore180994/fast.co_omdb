import React from 'react';
import { EmptyPlayList, PlayListContainer} from './movie-playlist.styles'
import { briefMovieInfo} from '../../../utils/interfaces'
import omdb from '../../../api/omdb';
import MovieItem from '../movie-item/movie-item.component';
import ThemedButton from '../../button/button.component'

// Incoming props.
interface Props{
  addToPlayList: (val: string) => void,
  removeFromPlaylist: (val: string) => void,
  clearPlaylist: () => void,
  playlist: string[]
}

// Playlist type.
interface State{
  movies: briefMovieInfo[]
}

// Playlist component
// Displays the list of movies selected by the user.
class MoviePlayList extends React.Component<Props, State> {
  state = {
    movies: []
  }
  static getDerivedStateFromProps(props: Props, state: State) {
    // We will use this life cycle in order to update the local state
    // whenever prop change., i.e., only when the item is deleted from
    // Checkout.
    const filtered = state.movies.filter(movie => props.playlist.includes(movie.imdbID))
    return {
      movies: filtered
    }
  }

  // Performs API request to obtain the movie details using the id's in the
  // Playlist.
  componentDidMount() {
    this.props.playlist.map(async id => {
      let movieDetail = await omdb.get('/', {
        params: {
          i: id
        }
      })
      this.setState({movies: [...this.state.movies, movieDetail.data]})
    })
  }

  // Confirms the playlist.
  confirmPlayList = () => {
    console.log('Confirm Playlist');
    alert('Playlist Confirmed!!')
  }

  render() {
    const { movies } = this.state;
    return <PlayListContainer>
      <div className='list-view'>
        {movies ? movies.map((movie, idx) => (
          <span className='movie' key={idx}>
            <MovieItem movie={movie} {...this.props} />
          </span>
        )) : <React.Fragment></React.Fragment>}
      </div>
      {this.state.movies.length!==0?<div className='buttons'>
        <ThemedButton padding='5px 15px' action={this.confirmPlayList}>
          <label>Confirm Playlist</label>
        </ThemedButton>
        <ThemedButton padding='5px 15px' action={this.props.clearPlaylist}>
          <label>Clear Playlist</label>
        </ThemedButton>
      </div> : <EmptyPlayList>
          <label>Your playlist is empty</label>
      </EmptyPlayList>}
      </PlayListContainer>
  }
};

export default MoviePlayList;
