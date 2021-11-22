import { createReducer, on } from "@ngrx/store";
import { initialState } from "./movie.state";
import { addMovie, deleteMovie, editMovie } from "./movie.actions";

const _movieReducer = createReducer(
  initialState,
  on((addMovie), (state, action) => {
    let movie = {...action.movie};
    movie.id = (state.movies.length + 1).toString();

    return {
      ...state,
      movies: [...state.movies, movie]
    }
  }),
  on(editMovie, (state, action) => {
    const updatedMovies = state.movies.map(movie => {
      return movie.id === action.movie.id ? action.movie : movie;
    });

    return {
      ...state,
      movies: updatedMovies
    }
  }),
  on(deleteMovie, (state, {id}) => {
    const updatedMovies = state.movies.filter(movie => {
      return movie.id !== id;
    });

    return {
      ...state,
      movies: updatedMovies
    }
  })
);

export function movieReducer(state: any, action: any) {
  return _movieReducer(state, action)
}
