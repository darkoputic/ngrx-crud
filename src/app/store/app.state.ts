import { MovieState } from "../movies/state/movie.state";
import { movieReducer } from "../movies/state/movie.reducer";

export interface AppState {
  movies: MovieState
}

export const appReducer = {
  movies: movieReducer
};
