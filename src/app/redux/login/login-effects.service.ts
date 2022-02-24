import { Injectable } from '@angular/core';
import { rdxLoginFetch, RDX_LOGIN_FETCH_SUCCESS, RDX_LOGIN_FETCH_ERROR } from './actions';
import { switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { aschax } from '../../aschax'
import { AxiosError } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class LoginEffectsService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginFetch),
      switchMap(ac => aschax.post(
        '/auth/token',
        'username=' + ac.payload?.email + '&password=' + ac.payload?.password + '&grant_type=password',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa('io.resalewebsite')
        }
      }).then(res => {
        return {
          type: RDX_LOGIN_FETCH_SUCCESS,
          payload: res.data,
          component: ac.component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_LOGIN_FETCH_ERROR,
          payload: err.response?.data,
        }
      }))
    )
  })
}
