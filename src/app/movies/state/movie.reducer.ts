import { createReducer, on } from "@ngrx/store";
import { initialState } from "./movie.state";
import {
  addMovieSuccess,
  deleteMovie,
  deleteMovieSuccess,
  editMovie,
  editMovieSuccess,
  loadMoviesSuccess
} from "./movie.actions";

const _movieReducer = createReducer(
  initialState,
  on((addMovieSuccess), (state, action) => {
    let movie = {...action.movie};

    return {
      ...state,
      movies: [...state.movies, movie]
    }
  }),
  on(editMovieSuccess, (state, action) => {
    const updatedMovies = state.movies.map(movie => {
      return movie.id === action.movie.id ? action.movie : movie;
    });

    return {
      ...state,
      movies: updatedMovies
    }
  }),
  on(deleteMovieSuccess, (state, {id}) => {
    const updatedMovies = state.movies.filter(movie => {
      return movie.id !== id;
    });

    return {
      ...state,
      movies: updatedMovies
    }
  }),
  on(loadMoviesSuccess, (state, action) => {
    return {
      ...state,
      movies: action.movies
    }
  })
);

export function movieReducer(state: any, action: any) {
  return _movieReducer(state, action)
}
