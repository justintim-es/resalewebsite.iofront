import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBuyWebsiteReducer } from './reducer';
const getBuyWebsiteFeatureSelector = createFeatureSelector<IBuyWebsiteReducer>('buyWebsiteReducer');

export const getBuyWebsiteIsInput = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.isInput
);
export const getBuyWebsiteBottomState = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.bottomState
);
export const getBuyWebsiteToBottomState = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.toBottomState
);
export const getBuyWebsiteIsToBottom = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.isToBottom
)
export const getBuyWebsiteIsCheck = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.isCheck
)
export const getBuyWebsiteCheck = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.check
)
export const getBuyWebsiteIsAvailability = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.isAvailablity
)
export const getBuyWebsiteTopState = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.topState
)

export const getBuyWebsiteToTopState = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.toTopState
)
export const getBuyWebsiteIsToTop = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.isToTop
)
export const getBuyWebsiteCart = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.cart
)
export const getBuyWebsiteToBottomIndex = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.toBottomIndex
)
export const getBuyWebsiteBottomIndex = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.bottomIndex
)
export const getBuyWebsiteToTopIndex = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.toTopIndex
)
export const getBuyWebsiteTopIndex = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.topIndex
)
export const getBuyWebsiteIsCart = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.isCart
)
export const getBuyWebsiteIsTopCurtain = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.isTopCurtain
)
export const getBuyWebsiteIsBottomCurtain = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.isBottomCurtain
)
export const getBuyWebsiteIsRouteOnboard = createSelector(
  getBuyWebsiteFeatureSelector,
  state => state.isRouteOnboard
)
