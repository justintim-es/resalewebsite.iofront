import { createAction, props } from '@ngrx/store';
import { IActionCreator } from '../combiner';
export const RDX_MAIN_IS_CONFIRMED = 'RDX_MAIN_IS_CONFIRMED';
export const rdxMainIsConfirmed = createAction(RDX_MAIN_IS_CONFIRMED, props<IActionCreator<any>>())
export const RDX_MAIN_IS_CONFIRMED_SUCCESS = 'RDX_MAIN_IS_CONFIRMED_SUCCESS';
export const rdxMainIsConfirmedSuccess = createAction(RDX_MAIN_IS_CONFIRMED_SUCCESS, props<IActionCreator<boolean>>());
