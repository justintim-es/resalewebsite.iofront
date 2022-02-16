import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  rdxLandingNavigateLeft,
  rdxLandingNavigateRight,
  rdxLandingNavigateLeftOne,
  rdxLandingNavigateLeftTwo,
  rdxLandingNavigateRightOne,
  rdxLandingNavigateRightTwo,
  RDX_LANDING_NAVIGATE_LEFT_ONE,
  RDX_LANDING_NAVIGATE_LEFT_TWO,
  RDX_LANDING_NAVIGATE_RIGHT_ONE,
  RDX_LANDING_NAVIGATE_RIGHT_TWO
 } from './actions';
@Injectable({
  providedIn: 'root'
})
export class LandingEffectsService {

  constructor(
    private actions: Actions
  ) { }

  slideLeft = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingNavigateLeft),
      delay(1),
      map(ac => {
        return {
          type: RDX_LANDING_NAVIGATE_LEFT_ONE,
          component: ac.component
        }
      })
    )
  })
  slideRight = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingNavigateRight),
      delay(1),
      map(ac => {
        return {
          type: RDX_LANDING_NAVIGATE_RIGHT_ONE,
          component: ac.component
        }
      })
    )
  })
  slideLeftOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingNavigateLeftOne),
      delay(500),
      map(ac => {
        return {
          type: RDX_LANDING_NAVIGATE_LEFT_TWO,
          component: ac.component
        }
      })
    )
  })
  slideRightOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingNavigateRightOne),
      delay(500),
      map(ac => {
        return {
          type: RDX_LANDING_NAVIGATE_RIGHT_TWO,
          component: ac.component
        }
      })
    )
  })
}
