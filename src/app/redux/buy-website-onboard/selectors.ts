import { IBuyWebsiteOnboardReducer } from './reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
const getBuyWebsiteOnboardFeatureSelector = createFeatureSelector<IBuyWebsiteOnboardReducer>('buyWebsiteOnboardReducer');

export const getBuyWebsiteOnboardIsFetch = createSelector(
  getBuyWebsiteOnboardFeatureSelector,
  state => state.isFetch
);
export const getBuyWebsiteOnboardIsFetchSuccess = createSelector(
  getBuyWebsiteOnboardFeatureSelector,
  state => state.isFetchSuccess
)
export const getBuyWebsiteOnboardFetchSuccessMessage  = createSelector(
  getBuyWebsiteOnboardFeatureSelector,
  state => state.fetchSuccessMessage
)
export const getBuyWebsiteOnboardIsFetchSuccessMessage  = createSelector(
  getBuyWebsiteOnboardFeatureSelector,
  state => state.isFetchSuccessMessage
)
export const getBuyWebsiteOnboardIsFetchError = createSelector(
  getBuyWebsiteOnboardFeatureSelector,
  state => state.isFetchError
)
export const getBuyWebsiteOnboardFetchErrorMessage = createSelector(
  getBuyWebsiteOnboardFeatureSelector,
  state => state.isFetchError
)
export const getbuyWebsiteOnboardUrl = createSelector(
  getBuyWebsiteOnboardFeatureSelector,
  state => state.url
);
