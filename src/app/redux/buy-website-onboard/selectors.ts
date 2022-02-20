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
export const getbuyWebsiteOnboardUrl = createSelector(
  getBuyWebsiteOnboardFeatureSelector,
  state => state.url
);
