import { createAction, props } from '@ngrx/store';
import { IActionCreator } from '../combiner';
export const RDX_ERROR_SET = 'RDX_ERROR_SET';
export const rdxErrorSet = createAction(RDX_ERROR_SET, props<IActionCreator<string>>());
