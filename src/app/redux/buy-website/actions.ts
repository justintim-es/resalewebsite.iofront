import { createAction, props } from '@ngrx/store';
import { IActionCreator, IBuyWebsite } from '../combiner';
export const RDX_BUY_WEBSITE_IS_INPUT_TRUE_TRIGGER = 'RDX_BUY_WEBSITE_IS_INPUT_TRUE_TRIGGER';
export const rdxBuyWebsiteIsInputTrueTrigger = createAction(RDX_BUY_WEBSITE_IS_INPUT_TRUE_TRIGGER, props<IActionCreator<any>>())
export const RDX_BUY_WEBSITE_IS_INPUT_TRUE = 'RDX_BUY_WEBSITE_IS_INPUT_TRUE';
export const rdxBuyWebsiteIsInputTrue = createAction(RDX_BUY_WEBSITE_IS_INPUT_TRUE, props<IActionCreator<any>>())
export const RDX_BUY_WEBSITE_CHECK = 'RDX_BUY_WEBSITE_CHECK';
export const rdxBuyWebsiteCheck = createAction(RDX_BUY_WEBSITE_CHECK, props<IActionCreator<string>>());
export const RDX_BUY_WEBSITE_CHECK_SUCCES = 'RDX_BUY_WEBSITE_CHECK_SUCCES';
export const rdxBuyWebsiteCheckSucces = createAction(RDX_BUY_WEBSITE_CHECK_SUCCES, props<IActionCreator<IBuyWebsite>>())
