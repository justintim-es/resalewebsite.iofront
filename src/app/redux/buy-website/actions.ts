import { createAction, props } from '@ngrx/store';
import { IActionCreator, IBuyWebsite, IBuyWebsiteCart } from '../combiner';
export const RDX_BUY_WEBSITE_IS_INPUT_TRUE_TRIGGER = 'RDX_BUY_WEBSITE_IS_INPUT_TRUE_TRIGGER';
export const rdxBuyWebsiteIsInputTrueTrigger = createAction(RDX_BUY_WEBSITE_IS_INPUT_TRUE_TRIGGER, props<IActionCreator<any>>())
export const RDX_BUY_WEBSITE_IS_INPUT_TRUE = 'RDX_BUY_WEBSITE_IS_INPUT_TRUE';
export const rdxBuyWebsiteIsInputTrue = createAction(RDX_BUY_WEBSITE_IS_INPUT_TRUE, props<IActionCreator<any>>())
export const RDX_BUY_WEBSITE_CHECK = 'RDX_BUY_WEBSITE_CHECK';
export const rdxBuyWebsiteCheck = createAction(RDX_BUY_WEBSITE_CHECK, props<IActionCreator<string>>());
export const RDX_BUY_WEBSITE_CHECK_SUCCESS = 'RDX_BUY_WEBSITE_CHECK_SUCCESS';
export const rdxBuyWebsiteCheckSuccess = createAction(RDX_BUY_WEBSITE_CHECK_SUCCESS, props<IActionCreator<IBuyWebsite>>())
export const RDX_BUY_WEBSITE_CHECK_ERROR = 'RDX_BUY_WEBSITE_CHECK_ERROR';
export const rdxBuyWebsiteCheckError = createAction(RDX_BUY_WEBSITE_CHECK_ERROR, props<IActionCreator<any>>());

export const RDX_BUY_WEBSITE_SEARCH = 'RDX_BUY_WEBSITE_SEARCH';
export const rdxBuyWebsiteSearch = createAction(RDX_BUY_WEBSITE_SEARCH, props<IActionCreator<any>>());

export const RDX_BUY_WEBSITE_SLIDE = 'RDX_BUY_WEBSITE_SLIDE';
export const rdxBuyWebsiteSlide = createAction(RDX_BUY_WEBSITE_SLIDE, props<IActionCreator<any>>());
export const RDX_BUY_WEBSITE_SLIDE_ONE = 'RDX_BUY_WEBSITE_SLIDE_ONE';
export const rdxBuyWebsiteSlideOne = createAction(RDX_BUY_WEBSITE_SLIDE_ONE, props<IActionCreator<any>>());
export const RDX_BUY_WEBSITE_SLIDE_TWO = 'RDX_BUY_WEBSITE_SLIDE_TWO';
export const rdxBuyWebsiteSlideTwo = createAction(RDX_BUY_WEBSITE_SLIDE_TWO, props<IActionCreator<any>>());
export const RDX_BUY_WEBSITE_SLIDE_BACK  = 'RDX_BUY_WEBSITE_SLIDE_BACK';
export const rdxBuyWebsiteSlideBack = createAction(RDX_BUY_WEBSITE_SLIDE_BACK, props<IActionCreator<any>>());
export const RDX_BUY_WEBSITE_SLIDE_BACK_ONE = 'RDX_BUY_WEBSITE_SLIDE_BACK_ONE';
export const rdxBuyWebsiteSlideBackOne = createAction(RDX_BUY_WEBSITE_SLIDE_BACK_ONE, props<IActionCreator<any>>());
export const RDX_BUY_WEBSITE_SLIDE_BACK_TWO = 'RDX_BUY_WEBSITE_SLIDE_BACK_TWO';
export const rdxBuyWebsiteSlideBackTwo = createAction(RDX_BUY_WEBSITE_SLIDE_BACK_TWO, props<IActionCreator<any>>());

export const RDX_BUY_WEBSITE_CREATE_CART  = 'RDX_BUY_WEBSITE_CREATE_CART';
export const rdxBuyWebsiteCreateCart = createAction(RDX_BUY_WEBSITE_CREATE_CART, props<IActionCreator<any>>());
export const RDX_BUY_WEBSITE_CREATE_CART_SUCCESS = 'RDX_BUY_WEBSITE_CREATE_CART_SUCCESS';
export const rdxBuyWebsiteCreateCartSuccess = createAction(RDX_BUY_WEBSITE_CREATE_CART_SUCCESS, props<IActionCreator<IBuyWebsiteCart>>());
export const RDX_BUY_WEBSITE_CREATE_CART_ERROR = 'RDX_BUY_WEBSITE_CREATE_CART_ERROR';
export const rdxBuyWebsiteCreateCartError = createAction(RDX_BUY_WEBSITE_CREATE_CART_ERROR, props<IActionCreator<any>>());

export const RDX_BUY_WEBSITE_IS_SHOW_CART_TRUE = 'RDX_BUY_WEBSITE_IS_SHOW_CART_TRUE';
export const rdxBuyWebsiteIsShowCartTrue = createAction(RDX_BUY_WEBSITE_IS_SHOW_CART_TRUE, props<IActionCreator<any>>());

export const RDX_BUY_WEBSITE_CART = 'RDX_BUY_WEBSITE_CART';
export const rdxBuyWebsiteCart = createAction(RDX_BUY_WEBSITE_CART, props<IActionCreator<any>>());

export const RDX_BUY_WEBSITE_ONBOARD = 'RDX_BUY_WEBSITE_ONBOARD';
export const rdxBuyWebsiteOnboard = createAction(RDX_BUY_WEBSITE_ONBOARD, props<IActionCreator<any>>());
export const RDX_BUY_WEBSITE_ROUTE_ONBOARD = 'RDX_BUY_WEBSITE_ROUTE_ONBOARD';
export const rdxBuyWebsiteRouteOnboard = createAction(RDX_BUY_WEBSITE_ROUTE_ONBOARD, props<IActionCreator<any>>());
