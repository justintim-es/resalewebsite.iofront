import { createReducer, on } from '@ngrx/store';
import { rdxBuyWebsiteOnboardFetch, rdxBuyWebsiteOnboardISFetchSuccessMessageTrue, rdxBuyWebsiteOnboardFetchSuccess, rdxBuyWebsiteOnboardFetchError } from './actions';
export interface IBuyWebsiteOnboardReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  fetchSuccessMessage: string;
  isFetchSuccessMessage: boolean;
  isFetchError: boolean;
  fetchErrorMessage: string;
  url: string;
}
export const buyWebsiteOnboardInitial: IBuyWebsiteOnboardReducer = {
  isFetch: false,
  fetchSuccessMessage: '',
  isFetchSuccessMessage: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchErrorMessage: '',
  url: ''
}
export const buyWebsiteOnboardReducer = createReducer(
  buyWebsiteOnboardInitial,
  on(rdxBuyWebsiteOnboardFetch, (state: IBuyWebsiteOnboardReducer) => {
    return {
      ...state,
      isFetch: true
    };
  }),
  on(rdxBuyWebsiteOnboardFetchSuccess, (state: IBuyWebsiteOnboardReducer, action) => {
    return {
      ...state,
      isFetch: false,
      fetchSuccessMessage: action.payload!,
      isFetchSuccess: true,
    }
  }),
  on(rdxBuyWebsiteOnboardFetchError, (state: IBuyWebsiteOnboardReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchErrorMessage: action.payload!
    }
  }),
  on(rdxBuyWebsiteOnboardISFetchSuccessMessageTrue, (state: IBuyWebsiteOnboardReducer) => {
    return {
      ...state,
      isFetchSuccessMessage: true
    }
  })
)
