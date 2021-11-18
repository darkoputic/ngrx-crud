import { createAction, props } from "@ngrx/store";
import { Movie } from "../models/movie.model";

export const enter = createAction('[Movies] Enter');

/**
 * Load Movies Action
 */
export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: Movie[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movies] Load Movies Failure',
  props<{ errorMsg: any }>()
);
