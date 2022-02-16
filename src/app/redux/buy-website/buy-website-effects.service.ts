import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map} from 'rxjs/operators';
import {
  rdxBuyWebsiteIsInputTrueTrigger,
  RDX_BUY_WEBSITE_IS_INPUT_TRUE
} from './actions';
@Injectable({
  providedIn: 'root'
})
export class BuyWebsiteEffectsService {

  constructor(
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
}
