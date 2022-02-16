import { createReducer, on } from '@ngrx/store';
import { rdxBuyWebsiteIsInputTrue } from './actions';
export interface IBuyWebsiteReducer {
  isInput: boolean;
  check: IBuyWebsite;
}
export const buyWebsiteInitial: IBuyWebsiteReducer = {
  isInput: false
}
export const buyWebsiteReducer = createReducer(
  buyWebsiteInitial,
  on(rdxBuyWebsiteIsInputTrue, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      isInput: true
    }
  })
)
