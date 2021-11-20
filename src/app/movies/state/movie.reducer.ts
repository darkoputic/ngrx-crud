import { createReducer } from "@ngrx/store";
import { initialState } from "./movie.state";

const _movieReducer = createReducer(
  initialState
);

export function movieReducer(state: any, action: any) {
  return _movieReducer(state, action)
}
