import { createReducer, on } from '@ngrx/store';
import { rdxLoginFetch, rdxLoginFetchError, rdxLoginFetchSuccess } from './actions';
export interface ILoginReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  fetchErrorMessage: string;
}
export const loginInitial: ILoginReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchErrorMessage: ''
}
export const loginReducer = createReducer(
  loginInitial,
  on(rdxLoginFetch, (state: ILoginReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false
    }
  }),
  on(rdxLoginFetchSuccess, (state: ILoginReducer) => {
    return {
      ...state,
      isFetchSuccess: true,
      isFetch: false
    }
  }),
  on(rdxLoginFetchError, (state: ILoginReducer) => {
    return {
      ...state,
      isFetchError: true,
      fetchErrorMessage: ''
    }
  })
)
