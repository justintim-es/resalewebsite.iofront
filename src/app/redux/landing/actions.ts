import { IActionCreator } from '../combiner';
import { createAction, props } from '@ngrx/store';
export const RDX_LANDING_NAVIGATE_RIGHT = 'RDX_LANDING_NAVIGATE_RIGHT';
export const rdxLandingNavigateRight = createAction(RDX_LANDING_NAVIGATE_RIGHT, props<IActionCreator<any>>());
export const RDX_LANDING_NAVIGATE_RIGHT_ONE =  'RDX_LANDING_NAVIGATE_RIGHT_ONE';
export const rdxLandingNavigateRightOne = createAction(RDX_LANDING_NAVIGATE_RIGHT_ONE, props<IActionCreator<any>>());
export const RDX_LANDING_NAVIGATE_RIGHT_TWO = 'RDX_LANDING_NAVIGATE_RIGHT_TWO';
export const rdxLandingNavigateRightTwo = createAction(RDX_LANDING_NAVIGATE_RIGHT_TWO, props<IActionCreator<any>>());

export const RDX_LANDING_NAVIGATE_LEFT = 'RDX_LANDING_NAVIGATE_LEFT';
export const rdxLandingNavigateLeft = createAction(RDX_LANDING_NAVIGATE_LEFT, props<IActionCreator<any>>());
export const RDX_LANDING_NAVIGATE_LEFT_ONE =  'RDX_LANDING_NAVIGATE_LEFT_ONE';
export const rdxLandingNavigateLeftOne = createAction(RDX_LANDING_NAVIGATE_LEFT_ONE, props<IActionCreator<any>>());
export const RDX_LANDING_NAVIGATE_LEFT_TWO = 'RDX_LANDING_NAVIGATE_LEFT_TWO';
export const rdxLandingNavigateLeftTwo = createAction(RDX_LANDING_NAVIGATE_LEFT_TWO, props<IActionCreator<any>>());
