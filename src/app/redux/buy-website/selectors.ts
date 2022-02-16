import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBuyWebsiteReducer } from './reducer';
const getFeatureBuyWebsiteSelector = createFeatureSelector<IBuyWebsiteReducer>('buyWebsiteReducer');

export const getBuyWebsiteIsInput = createSelector(
  getFeatureBuyWebsiteSelector,
  state => state.isInput
)
