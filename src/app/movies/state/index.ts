//actions
import * as MovieActions from './movie.actions';

// reducers
import * as MovieReducer from './movie.reducer';

// effects
export * from './movie.effects'
export {
  // actions
  MovieActions,
  // reducers
  MovieReducer,
}

import * as fromMovies from './movie.reducer';
import * as fromRoot from './../../reducers';
import { Movie } from "../models/movie.model";

import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import { EntityState } from "@ngrx/entity";

export const moviesFeatureKey = 'movies';

export interface MovieState {
  [fromMovies.moviesFeatureKey]: fromMovies.State
}

export interface State extends fromRoot.State {
  [moviesFeatureKey]: MovieState
}

export function reducers(state: MovieState | undefined, action: Action) {
  return combineReducers({
    [fromMovies.moviesFeatureKey]: fromMovies.reducer,
  })(state, action);
}

export const selectMovieState = createFeatureSelector<MovieState>(
  moviesFeatureKey
);

export const selectMovieEntitiesState = createSelector(
  selectMovieState,
  (state) => state.movies
);

/**
 * ???????????????????
 */
export const {
  selectIds: selectMovieIds,
  selectEntities: selectMovieEntities,
  selectAll: selectAllMovies,
  selectTotal: selectTotalMovies,
} = fromMovies.adapter.getSelectors(selectMovieEntitiesState);

export const selectCollectionLoaded = createSelector(
  selectMovieEntitiesState,
  fromMovies.getLoaded
);
export const getCollectionLoading = createSelector(
  selectMovieEntitiesState,
  fromMovies.getLoading
);
export const selectCollectionMovies = createSelector(
  selectMovieEntitiesState,
  fromMovies.getMovies
);

export const selectCollectionMoviesIds = createSelector(
  selectMovieEntitiesState,
  fromMovies.getIds
);

export const selectMovieCollection = createSelector(
  selectMovieEntities,
  selectCollectionMoviesIds,
  (entities, ids) => {
    return ids
      .map(id => entities[id])
      .filter((movie): movie is Movie => movie !== null)
  }
);

