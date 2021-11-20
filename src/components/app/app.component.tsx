import Header from '../header/header.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from '../movies/movie-list/movie-list.component';
import React from 'react';
import omdb from '../../api/omdb';
import MoviePlayList from '../movies/movie-playlist/movie-playlist.component';
import { briefMovieInfo, detailedMovieInfo} from '../../utils/interfaces'
import { Footer, RouterContainer } from './app.styles';
import NotFound from '../not-found/not-found.component'

interface Props{}
interface MyState {
  playList: string[],
  movieList: briefMovieInfo[],
  movie: briefMovieInfo,
  selectedMovie: detailedMovieInfo,
  isScrolledBottom: boolean,
  scrollingTopvalue:  number
}

export default class App extends React.Component<Props, MyState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      playList: [],
      movieList: [],
      movie: {
        Title: '',
        Poster: '',
        Year: '',
        imdbID: ''
      },
      selectedMovie: {
        Title: '',
        Year: '',
        Rated: '',
        Released: '',
        Runtime: '',
        Genre: '',
        Director: '',
        Writer: '',
        Actors: '',
        Plot: '',
        Language: '',
        Country: '',
        Awards: '',
        Poster: '',
        imdbID: '',
        imdbRating: '',
      },
      isScrolledBottom: false,
      scrollingTopvalue: 0,
    };
  }
  
  setScrollingTopValue = (val: number) => {
    this.setState({scrollingTopvalue: val})
  }

  setIsScrolling = (val: boolean) => {
    this.setState({ isScrolledBottom: val });
  };

  getFullDetailsOfTheMovie = async (movie: briefMovieInfo) => {
    // gets the imdbID from the initial movie from the list.
    const imdbId = movie.imdbID;

    // Get the initial selected movie full details.
    const movieDetails = await omdb.get('/', {
      params: {
        i: imdbId,
        plot: 'full',
      },
    });

    // Sets the inital movie with full detials to the state as the selected
    // movie.
    if (movieDetails.status === 200 && movieDetails.data) {
      this.setState({
        selectedMovie: movieDetails.data,
      });
    }
  };

  setSelectMovie = (movie: briefMovieInfo) => {
    this.getFullDetailsOfTheMovie(movie);
  };

  addToPlaylist = (val: string) => {
    if (!this.state.playList.includes(val)) {
      this.setState({ playList: [...this.state.playList, val] });
    }
  }

  removeFromPlaylist = (val: string) => {
    if (this.state.playList.includes(val)) {
      this.setState({ playList: this.state.playList.filter(id => id!==val) });
    }
  }

  clearPlaylist = () => {
    this.setState({playList: []})
  }

  onSearchSubmit = async (text: string) => {
    // Gets the list of movies from the omdb api
    const moviesList = new Promise<any>(async (resolve, reject) => {
      const response = await omdb.get('/', {
        params: {
          s: text,
          plot: 'full',
        },
      });
      const response_status = response.status;
      const data_status = response.data.Response;
      if (response_status === 200 && data_status === 'True') {
        resolve(response.data.Search);
      } else if (response_status === 200 && data_status === 'False') {
        reject(response.data.Error);
      }
    });

    moviesList.then(async (data) => {
      // Stores the movies list in the state.
      this.setState({
        movieList: data,
      });

      this.getFullDetailsOfTheMovie(data[0]);
    });
  };

  render() {
    const { isScrolledBottom, scrollingTopvalue, playList, movieList, selectedMovie } = this.state;
    return (
      <RouterContainer>
        <BrowserRouter>
          <Header
            handleSubmit={this.onSearchSubmit}
            isScrolling={isScrolledBottom}
            scrollingTopValue={scrollingTopvalue}
          />
          <div>
            <Routes>
              <Route
                path='/'
                element={
                  <MovieList
                    playlist={playList}
                    addToPlayList={this.addToPlaylist}
                    removeFromPlaylist={this.removeFromPlaylist}
                    setScrollingTop={this.setScrollingTopValue }
                    setScrolling={this.setIsScrolling}
                    movieList={movieList}
                    selectedMovie={selectedMovie}
                    onSelectMovie={this.setSelectMovie}
                  />
                }
              />
              <Route
                path='/playlist'
                element={
                  <MoviePlayList
                    playlist={playList}
                    addToPlayList={this.addToPlaylist}
                    removeFromPlaylist={this.removeFromPlaylist}
                    clearPlaylist={() => this.setState({playList:[]}) }
                  />
                }
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer color='red'>
            My favorite color is red
          </Footer>
        </BrowserRouter>
      </RouterContainer>
    );
  }
}
