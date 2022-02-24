import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { RDX_MAIN_IS_CONFIRMED, rdxMainIsConfirmed, RDX_MAIN_IS_CONFIRMED_SUCCESS }  from './actions';
import { aschax } from '../../aschax';
import { RDX_ERROR_SET } from '../error/actions';
import { AxiosError } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MainEffectsService {

  constructor(
    private actions: Actions
  ) {
  }
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainIsConfirmed),
      switchMap(ac => aschax.post('/confirm').then(res => {
        return {
          type: RDX_MAIN_IS_CONFIRMED_SUCCESS,
          payload: res.data,
          component: ac.component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_ERROR_SET,
          payload: err.response?.data.error,
          component: ac.component
        }
      }))
    )
  })
}
