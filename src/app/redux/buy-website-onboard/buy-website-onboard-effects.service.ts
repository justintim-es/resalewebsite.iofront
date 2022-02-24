import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType,  } from '@ngrx/effects';
import { switchMap, delay, map } from 'rxjs/operators';
import { RDX_ERROR_SET } from '../error/actions';
import {
  rdxBuyWebsiteOnboardFetchError,
  rdxBuyWebsiteOnboardFetch,
  RDX_BUY_WEBSITE_ONBOARD_IS_FETCH_SUCCESS_MESSAGE_TRUE,
  rdxBuyWebsiteOnboardFetchSuccess,
  RDX_BUY_WEBSITE_ONBOARD_FETCH_SUCCESS,
  RDX_BUY_WEBSITE_ONBOARD_FETCH_ERROR
} from './actions';
import { aschax } from '../../aschax';
import { AxiosError } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class BuyWebsiteOnboardEffectsService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteOnboardFetch),
      switchMap(ac => aschax.post('/carts/' + ac.payload!.cartId, {
        email: ac.payload!.email,
        password: ac.payload!.password
      }).then(res => {
        return {
          type: RDX_BUY_WEBSITE_ONBOARD_FETCH_SUCCESS,
          payload: res.data.message,
          component: ac.component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_BUY_WEBSITE_ONBOARD_FETCH_ERROR,
          payload: err.response?.data.error,
          component: ac.component
        }
      }))
    );
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
        ofType(rdxBuyWebsiteOnboardFetchSuccess),
        delay(500),
        map(ac => {
          return {
            type: RDX_BUY_WEBSITE_ONBOARD_IS_FETCH_SUCCESS_MESSAGE_TRUE,
            component: ac.component
          }
        })
    )
  })
  fetchError = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyWebsiteOnboardFetchError),
      map(ac => {
        return {
          type: RDX_ERROR_SET,
          payload: ac.payload,
          component: 'buy-website'
        };
      })
    );
  })
}
