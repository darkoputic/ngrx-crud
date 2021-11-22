import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "./movie.state";
import { Movie } from "../models/movie.model";

export const MOVIE_STATE_NAME = 'movies';

const getMoviesState = createFeatureSelector<MovieState>('movies');

export const getMovies = createSelector(
  getMoviesState, (state) => {
    return state.movies;
  }
);

export const getMovieById = createSelector(getMoviesState, (state: any, props: any) => {
  return state.movies.find((m: Movie) => m.id === props.id);
});
