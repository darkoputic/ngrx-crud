import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "./movie.state";

const getMoviesState = createFeatureSelector<MovieState>('movies');

export const getMovies = createSelector(
  getMoviesState, (state) => {
    return state.movies;
  }
);
