import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { rdxConfirmFetch, RDX_CONFIRM_FETCH_SUCCESS } from './actions';
import { RDX_ERROR_SET } from '../error/actions';
import { switchMap} from 'rxjs/operators';
import { aschax } from '../../aschax';
import { AxiosError } from 'axios'
@Injectable({
  providedIn: 'root'
})
export class ConfirmEffectsService {

  constructor(
    private actions: Actions
  ) {
   }
   fetch = createEffect(() => {
     return this.actions.pipe(
       ofType(rdxConfirmFetch),
       switchMap(ac => aschax.post('/confirm/' + ac.payload, null).then(res => {
         return {
           type: RDX_CONFIRM_FETCH_SUCCESS,
           payload: res.data,
           component: ac.component
         }
       }).catch((err: AxiosError) => {
         return {
           type: RDX_ERROR_SET,
           payload: err.response?.data.error
         }
       }))
     )
   });
}
