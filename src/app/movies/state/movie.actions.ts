import { createAction, props } from "@ngrx/store";
import { Movie } from "../models/movie.model";

export const ADD_MOVIE_ACTION = '[movie page] add movie';
export const EDIT_MOVIE_ACTION = '[movie page] edit movie';
export const DELETE_MOVIE_ACTION = '[movie page] delete movie';

export const addMovie = createAction(
  ADD_MOVIE_ACTION,
  props<{ movie: Movie }>()
);

export const editMovie = createAction(
  EDIT_MOVIE_ACTION,
  props<{ movie: Movie }>()
);

export const deleteMovie = createAction(
  DELETE_MOVIE_ACTION,
  props<{ id: any }>()
);
