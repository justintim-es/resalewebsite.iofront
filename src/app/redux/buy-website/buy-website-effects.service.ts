import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { aschax } from '../../aschax';
import { AxiosError } from 'axios';
import { getBuyWebsiteCheck, getBuyWebsiteCart } from './selectors';
import {
  rdxBuyWebsiteOnboard,
  RDX_BUY_WEBSITE_ROUTE_ONBOARD,
  rdxBuyWebsiteCart,
  RDX_BUY_WEBSITE_SLIDE_BACK,
  rdxBuyWebsiteCheck,
  rdxBuyWebsiteCreateCart,
  RDX_BUY_WEBSITE_CREATE_CART_ERROR,
  RDX_BUY_WEBSITE_CREATE_CART_SUCCESS,
  rdxBuyWebsiteCreateCartSuccess,
  rdxBuyWebsiteCreateCartError,
  rdxBuyWebsiteSlide,
  rdxBuyWebsiteSearch,
  rdxBuyWebsiteCheckSuccess,
  RDX_BUY_WEBSITE_CHECK_SUCCESS,
  RDX_BUY_WEBSITE_CHECK_ERROR,
  rdxBuyWebsiteIsInputTrueTrigger,
  RDX_BUY_WEBSITE_IS_INPUT_TRUE,
  RDX_BUY_WEBSITE_SLIDE,
  rdxBuyWebsiteSlideOne,
  RDX_BUY_WEBSITE_SLIDE_ONE,
  RDX_BUY_WEBSITE_SLIDE_TWO,
  rdxBuyWebsiteSlideBack,
  RDX_BUY_WEBSITE_SLIDE_BACK_ONE,
  rdxBuyWebsiteSlideBackOne,
  RDX_BUY_WEBSITE_SLIDE_BACK_TWO,
  RDX_BUY_WEBSITE_IS_SHOW_CART_TRUE
} from './actions';
@Injectable({
  providedIn: 'root'
})
export class BuyWebsiteEffectsService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }

  isInputTrigger = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteIsInputTrueTrigger),
      delay(500),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_IS_INPUT_TRUE,
          component: ac.component
        }
      })
    )
  })
  check = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteCheck),
      switchMap(ac => aschax.get('/website/' + ac.payload).then(res => {
        return {
          type: RDX_BUY_WEBSITE_CHECK_SUCCESS,
          payload: res.data,
          component: ac.component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_BUY_WEBSITE_CHECK_ERROR,
          payload: err.response?.data,
          component: ac.component
        }
      }))
    )
  })
  checkSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteCheckSuccess),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_SLIDE,
          component: ac.component
        };
      })
    )
  })
  slide = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteSlide),
      delay(1),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_SLIDE_ONE,
          component: ac.component
        }
      })
    )
  })
  slideOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteSlideOne),
      delay(500),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_SLIDE_TWO,
          component: ac.component
        }
      })
    )
  })
  slideBack = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteSlideBack),
      delay(1),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_SLIDE_BACK_ONE
        }
      })
    )
  })
  search = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteSearch),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_SLIDE,
          component:  ac.component
        }
      })
    )
  })
  cart = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteCart),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_SLIDE_BACK,
          component:  ac.component
        }
      })
    )
  })
  slideBackOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteSlideBackOne),
      delay(500),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_SLIDE_BACK_TWO
        }
      })
    )
  })
  createCart = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteCreateCart),
      withLatestFrom(this.store.select(getBuyWebsiteCheck), this.store.select(getBuyWebsiteCart)),
      switchMap(ac => ac[2].id == 0 ? aschax.post('/carts', { domain: ac[1]!.domain }).then(res => {
        return {
          type: RDX_BUY_WEBSITE_CREATE_CART_SUCCESS,
          payload: res.data,
          component: ac[0].component
        };
      }).catch((err: AxiosError) => {
        return {
          type: RDX_BUY_WEBSITE_CREATE_CART_ERROR,
          component: ac[0].component
        }
      }) : aschax.put('/carts/' + ac[2].id, {
        domain:  ac[1]!.domain
      }).then(res => {
        return {
          type: RDX_BUY_WEBSITE_CREATE_CART_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_BUY_WEBSITE_CREATE_CART_ERROR,
          component: ac[0].component

        }
      }))
    );
  })
  createCartSlide = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteCreateCart),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_SLIDE,
          component: ac.component
        }
      })
    )
  })
  createCartSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteCreateCartSuccess),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_SLIDE,
          component: ac.component
        }
      })
    )
  })
  createCardSuccessOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteCreateCartSuccess),
      delay(500),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_IS_SHOW_CART_TRUE,
          component: ac.component
        }
      })
    );
  })
  onboard = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteOnboard),
      delay(500),
      map(ac => {
        return {
          type: RDX_BUY_WEBSITE_ROUTE_ONBOARD,
          component: ac.component
        };
      })
    );
  })
}
