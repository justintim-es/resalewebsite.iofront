import { createReducer, on } from '@ngrx/store';
import { rdxLandingNavigateRight, rdxLandingNavigateRightOne, rdxLandingNavigateRightTwo, rdxLandingNavigateLeft, rdxLandingNavigateLeftTwo, rdxLandingNavigateLeftOne } from './actions';
export interface ILandingReducer {
  isBottom: boolean;
  isToBottom: boolean;
  bottomState: string;
  toBottomState: string;
  bottomIndex: number;
  toBottomIndex: number;
  bottomBool: boolean;
}
export const LandingInitial: ILandingReducer = {
  isBottom: true,
  isToBottom: false,
  bottomState: 'invision',
  toBottomState: '',
  bottomIndex: 0,
  toBottomIndex: 0,
  bottomBool: false,
}
export const landingReducer = createReducer(
  LandingInitial,
  on(rdxLandingNavigateRight, (state: ILandingReducer) => {
    return {
      ...state,
      isToBottom: true,
      bottomState: 'invision-absolute',
      toBottomState: 'left',
      toBottomIndex:  state.bottomIndex > -2 ? state.bottomIndex -1 : 0
    }
  }),
  on(rdxLandingNavigateLeft, (state: ILandingReducer) => {
    return {
      ...state,
      isToBottom: true,
      bottomState: 'invision-absolute',
      toBottomState: 'right',
      toBottomIndex: state.bottomIndex < 2 ? state.bottomIndex + 1 : 0,
    }
  }),
  on(rdxLandingNavigateRightOne, (state: ILandingReducer) => {
    return {
      ...state,
      bottomState: 'right-absolute',
      toBottomState: 'invision',
    }
  }),
  on(rdxLandingNavigateLeftOne, (state: ILandingReducer) => {
    return {
      ...state,
      bottomState: 'left-absolute',
      toBottomState: 'invision',
    };
  }),
  on(rdxLandingNavigateRightTwo, (state: ILandingReducer) => {
    return {
      ...state,
      bottomState: 'invision',
      bottomIndex: state.toBottomIndex,
      isToBottom: false,
      bottomBool: !state.bottomBool
    }
  }),
  on(rdxLandingNavigateLeftTwo, (state: ILandingReducer) => {
    return {
      ...state,
      bottomState: 'invision',
      bottomIndex: state.toBottomIndex,
      isToBottom: false,
      bottomBool: !state.bottomBool
    }
  })
)
