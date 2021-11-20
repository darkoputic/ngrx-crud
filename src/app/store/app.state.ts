import { CounterState } from "../counter/state/counter.state";
import { MovieState } from "../movies/state/movie.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { movieReducer } from "../movies/state/movie.reducer";

export interface AppState {
  counter: CounterState,
  movies: MovieState
}

export const appReducer = {
  counter: counterReducer,
  movies: movieReducer
};
