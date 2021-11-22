import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.actions";
import { state } from "@angular/animations";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0
    }
  }),
  on(customIncrement, (state, action: any) => {
    return {
      ...state,
      counter: state.counter + action.counter
    }
  }),
  on(changeChannelName, state => {
    return {
      ...state,
      channelName: 'Modified Movies application'
    }
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}