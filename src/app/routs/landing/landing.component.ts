import { Component, OnInit } from '@angular/core';
import { landingSlideEnterFromRight, bottomSlide, landingSlideEnterFromLeft } from '../../animations/animator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAction } from '../../redux/combiner';
import {
  getLandingIsBottom,
  getLandingIsToBottom,
  getLandingBottomIndex,
  getLandingToBottomIndex,
  getLandingBottomState,
  getLandingToBottomState,
} from '../../redux/landing/selectors';
import {
  RDX_LANDING_NAVIGATE_LEFT,
  RDX_LANDING_NAVIGATE_RIGHT
} from '../../redux/landing/actions';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    landingSlideEnterFromRight,
    landingSlideEnterFromLeft,
    bottomSlide
  ]
})
export class LandingComponent implements OnInit {
  isBottom: Observable<boolean>;
 isToBottom: Observable<boolean>;
 bottomIndex: Observable<number>;
 toBottomIndex: Observable<number>;
 bottomState: Observable<string>;
 toBottomState: Observable<string>;
  constructor(
    private store: Store
  ) {
    this.isBottom = this.store.select(getLandingIsBottom);
    this.isToBottom = this.store.select(getLandingIsToBottom);
    this.bottomIndex = this.store.select(getLandingBottomIndex);
    this.toBottomIndex = this.store.select(getLandingToBottomIndex);
    this.bottomState = this.store.select(getLandingBottomState);
    this.toBottomState = this.store.select(getLandingToBottomState);
  }
  onLeft() {
    this.store.dispatch<IAction<any>>({
      type: RDX_LANDING_NAVIGATE_LEFT,
      component: 'landing'
    });
  }
  onRight() {
    this.store.dispatch<IAction<any>>({
      type: RDX_LANDING_NAVIGATE_RIGHT,
      component: 'landing'
    })
  }
  ngOnInit(): void {
  }

}
