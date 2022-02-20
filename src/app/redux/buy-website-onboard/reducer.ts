import { createReducer, on } from '@ngrx/store';
import { rdxBuyWebsiteOnboardFetch, rdxBuyWebsiteOnboardFetchSuccess, rdxBuyWebsiteOnboardFetchError } from './actions';
export interface IBuyWebsiteOnboardReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  fetchErrorMessage: string;
  url: string;
}
export const buyWebsiteOnboardInitial: IBuyWebsiteOnboardReducer = {
  isFetch: false,
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
      isFetchSuccess: true,
      url: action.payload!
    }
  }),
  on(rdxBuyWebsiteOnboardFetchError, (state: IBuyWebsiteOnboardReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true
    }
  })
)
