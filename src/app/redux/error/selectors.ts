import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IErrorReducer } from './reducer';

const getErrorFeatureSelector = createFeatureSelector<IErrorReducer>('errorReducer');
export const getErrorIsError = createSelector(
  getErrorFeatureSelector,
  state => state.isError
);
export const getErrorError = createSelector(
  getErrorFeatureSelector,
  state => state.error
);
