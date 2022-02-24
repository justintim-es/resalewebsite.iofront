import { rdxConfirmFetch, rdxConfirmFetchSuccess, rdxConfirmFetchError } from './actions';
import { createReducer, on } from '@ngrx/store';
export interface IConfirmReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  fetchSuccessMessage: string;
  isFetchError: boolean;
}
export const confirmInitial: IConfirmReducer = {
  isFetch: false,
  isFetchSuccess: false,
  fetchSuccessMessage: ''
}
export const confirmReducer = createReducer(
  confirmInitial,
  on(rdxConfirmFetch, (state: IConfirmReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      fetchSuccessMessage: ''
    }
  }),
  on(rdxConfirmFetchSuccess, (state: IConfirmReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      fetchSuccessMessage: action.payload!
    }
  }),
  on(rdxConfirmFetchError, (state: IConfirmReducer, action) => {
    return {
      ...state,
      isFetch: false,

    }
  })
)
