import { createAction, props } from "@ngrx/store";
import { Movie } from "../models/movie.model";

export const ADD_MOVIE_ACTION = '[movie page] add movie';
export const ADD_MOVIE_SUUCCESS = '[movie page] add movie success';
export const EDIT_MOVIE_ACTION = '[movie page] edit movie';
export const EDIT_MOVIE_SUCCESS = '[movie page] edit movie success';
export const DELETE_MOVIE_ACTION = '[movie page] delete movie';
export const DELETE_MOVIE_SUCCESS = '[movie page] delete movie success';
export const LOAD_MOVIES = '[movie page] load movies';
export const LOAD_MOVIES_SUCCESS = '[movie page] load movies success';

export const addMovie = createAction(ADD_MOVIE_ACTION, props<{ movie: Movie }>());
export const addMovieSuccess = createAction(
  ADD_MOVIE_SUUCCESS,
  props<{ movie: Movie }>()
);

export const editMovie = createAction(EDIT_MOVIE_ACTION, props<{ movie: Movie }>());
export const editMovieSuccess = createAction(
  EDIT_MOVIE_SUCCESS,
  props<{ movie: Movie }>()
);

export const deleteMovie = createAction(DELETE_MOVIE_ACTION, props<{ id: any }>());
export const deleteMovieSuccess = createAction(
  DELETE_MOVIE_SUCCESS,
  props<{ id: any }>()
);

export const loadMovies = createAction(LOAD_MOVIES);
export const loadMoviesSuccess = createAction(
  LOAD_MOVIES_SUCCESS,
  props<{ movies: Movie[] }>()
);
