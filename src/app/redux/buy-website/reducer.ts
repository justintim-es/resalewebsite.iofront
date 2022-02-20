import { createReducer, on } from '@ngrx/store';
import {
  rdxBuyWebsiteCart,
  rdxBuyWebsiteCreateCart,
  rdxBuyWebsiteCreateCartSuccess,
  rdxBuyWebsiteIsInputTrue,
  rdxBuyWebsiteCheck,
  rdxBuyWebsiteSlide,
  rdxBuyWebsiteSlideOne,
  rdxBuyWebsiteSlideTwo,
  rdxBuyWebsiteCheckSuccess,
  rdxBuyWebsiteSlideBack,
  rdxBuyWebsiteSlideBackOne,
  rdxBuyWebsiteSlideBackTwo,
  rdxBuyWebsiteIsShowCartTrue,
  rdxBuyWebsiteSearch,
  rdxBuyWebsiteOnboard,
  rdxBuyWebsiteRouteOnboard,
} from './actions';
import { IBuyWebsite, IBuyWebsiteCart } from '../combiner';
export interface IBuyWebsiteReducer {
  isInput: boolean;
  isCheck: boolean;
  isAvailablity: boolean;
  check: IBuyWebsite;
  topState: string;
  toTopState: string;
  isToTop: boolean;
  bottomState: string;
  toBottomState: string;
  isToBottom: boolean;
  cart: IBuyWebsiteCart;
  isCart: boolean;
  bottomIndex: number;
  toBottomIndex: number;
  topIndex: number;
  toTopIndex: number;
  isTopCurtain: boolean;
  isBottomCurtain: boolean;
  isRouteOnboard: boolean;
}
export const buyWebsiteInitial: IBuyWebsiteReducer = {
  isInput: false,
  isCheck: false,
  isAvailablity: false,
  check: {
    available: '',
    domain: '',
    currency: '',
    period: 0,
    price: 0
  },
  topState: 'invision',
  toTopState: '',
  isToTop: false,
  bottomState: 'invision',
  toBottomState: '',
  isToBottom: false,
  isCart: false,
  cart: {
    totalPrice: 0,
    id: 0,
    items: []
  },
  bottomIndex: 0,
  toBottomIndex: 0,
  topIndex: 0,
  toTopIndex: 0,
  isTopCurtain: true,
  isBottomCurtain: true,
  isRouteOnboard: false
}
export const buyWebsiteReducer = createReducer(
  buyWebsiteInitial,
  on(rdxBuyWebsiteIsInputTrue, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      isInput: true
    }
  }),
  on(rdxBuyWebsiteCheck, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      isCheck: true
    }
  }),
  on(rdxBuyWebsiteCheckSuccess, (state: IBuyWebsiteReducer, action) => {
    return {
      ...state,
      isCheck: false,
      check: action.payload!,
      toBottomIndex: 1,
      toTopIndex: 1
    }
  }),
  on(rdxBuyWebsiteSearch, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      toBottomIndex: 0,
      toTopIndex: 2,
    }
  }),
  on(rdxBuyWebsiteSlide, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      topState: 'invision-absolute',
      toTopState: 'right',
      isToTop: true,
      bottomState: 'invision-absolute',
      toBottomState: 'left',
      isToBottom: true
    };
  }),
  on(rdxBuyWebsiteSlideOne, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      topState: 'left-absolute',
      toTopState: 'invision',
      bottomState: 'right-absolute',
      toBottomState: 'invision',
    }
  }),
  on(rdxBuyWebsiteSlideTwo, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      topState: 'invision',
      isToTop: false,
      bottomState: 'invision',
      isToBottom: false,
      bottomIndex: state.toBottomIndex,
      topIndex: state.toTopIndex
    }
  }),
  on(rdxBuyWebsiteSlideBack, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      topState: 'invision-absolute',
      toTopState: 'left',
      isToTop: true,
      bottomState: 'invision-absolute',
      toBottomState: 'right',
      isToBottom: true,
    }
  }),
  on(rdxBuyWebsiteSlideBackOne, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      topState: 'right-absolute',
      toTopState: 'invision',
      bottomState: 'left-absolute',
      toBottomState: 'invision'
    }
  }),
  on(rdxBuyWebsiteSlideBackTwo, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      topState: 'invision',
      isToTop: false,
      bottomState: 'invision',
      topIndex: state.toTopIndex,
      isToBottom: false,
      bottomIndex: state.toBottomIndex
    }
  }),
  on(rdxBuyWebsiteCart, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      toTopIndex: 3,
      toBottomIndex: 3
    }
  }),
  on(rdxBuyWebsiteCreateCart, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      toBottomIndex: 2,
      toTopIndex: 3,
    }
  }),
  on(rdxBuyWebsiteCreateCartSuccess, (state: IBuyWebsiteReducer, action) => {
    return {
      ...state,
      cart: action.payload!,
      isCart: true,
      toBottomIndex: 3,
      toTopIndex: 1
    }
  }),
  on(rdxBuyWebsiteIsShowCartTrue, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
    }
  }),
  on(rdxBuyWebsiteOnboard, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      isTopCurtain: false,
      isBottomCurtain: false,
    }
  }),
  on(rdxBuyWebsiteRouteOnboard, (state: IBuyWebsiteReducer) => {
    return {
      ...state,
      isRouteOnboard: true
    }
  })
)
