import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILandingReducer } from './reducer';
const getLandingFeatureSelector = createFeatureSelector<ILandingReducer>('landingReducer');

export const getLandingBottomState = createSelector(
  getLandingFeatureSelector,
  state => state.bottomState
)

export const getLandingBottomIndex = createSelector(
  getLandingFeatureSelector,
  state => state.bottomIndex
)
export const getLandingToBottomState = createSelector(
  getLandingFeatureSelector,
  state => state.toBottomState
)
export const getLandingToBottomIndex = createSelector(
  getLandingFeatureSelector,
  state => state.toBottomIndex
)
export const getLandingIsToBottom = createSelector(
  getLandingFeatureSelector,
  state => state.isToBottom,
)
export const getLandingIsBottom = createSelector(
  getLandingFeatureSelector,
  state => state.isBottom,
)
export const getLandingBottomBool = createSelector(
  getLandingFeatureSelector,
  state => state.bottomBool,
)
