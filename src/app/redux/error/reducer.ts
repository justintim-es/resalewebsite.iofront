import { createReducer, on } from '@ngrx/store';
import { rdxErrorSet } from './actions';
export interface IErrorReducer {
  isError: boolean;
  error: string;
}
export const errorInitial: IErrorReducer = {
  isError: false,
  error: ''
};
export const errorReducer = createReducer(
  errorInitial,
  on(rdxErrorSet, (state: IErrorReducer, action) => {
    return {
      ...state,
      isError: true,
      error: action.payload!
    }
  })
)
