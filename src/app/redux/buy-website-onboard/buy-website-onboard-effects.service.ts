import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { rdxBuyWebsiteOnboardFetch, RDX_BUY_WEBSITE_ONBOARD_FETCH_SUCCESS, RDX_BUY_WEBSITE_ONBOARD_FETCH_ERROR } from './actions';
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
      switchMap(ac => aschax.post('/onboard', ac.payload).then(res => {
        return {
          type: RDX_BUY_WEBSITE_ONBOARD_FETCH_SUCCESS,
          payload: res.data,
          component: ac.component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_BUY_WEBSITE_ONBOARD_FETCH_ERROR,
          payload: err.response?.data,
          component: ac.component
        }
      }))
    );
  })
}
