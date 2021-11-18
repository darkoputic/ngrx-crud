import { createReducer, on } from "@ngrx/store";
import { MovieActions } from "./index";
import { Movie } from "../models/movie.model";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";

export const moviesFeatureKey = 'movies';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[],
  movies: any[],
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
  movies: []
};

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie: Movie) => movie.id,
  sortComparer: false
});

export const reducer = createReducer(
  initialState,
  on(MovieActions.enter, (state) => ({
    ...state,
    loading: true
  })),
  on(MovieActions.loadMoviesSuccess, (state, {movies}) => ({
    loaded: true,
    loading: false,
    ids: movies.map(m => m.id),
    movies: movies,
  }))
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds = (state: State) => state.ids;
export const getMovies = (state: State) => state.movies;
