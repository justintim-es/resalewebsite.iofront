import { createReducer, on } from '@ngrx/store';
import { rdxMainIsConfirmed, rdxMainIsConfirmedSuccess } from './actions';
export interface IMainReducer {
  isFetch: boolean;
  isConfirmed: boolean;
}
export const mainInitial: IMainReducer = {
  isFetch: false,
  isConfirmed: false
}
export const mainReducer = createReducer(
  mainInitial,
  on(rdxMainIsConfirmed, (state: IMainReducer) => {
    return {
      ...state,
      isFetch: true,
    }
  }),
  on(rdxMainIsConfirmedSuccess, (state: IMainReducer) => {
    return {
      ...state,
      isFetch: false,
      isConfirmed: false
    }
  })
)
