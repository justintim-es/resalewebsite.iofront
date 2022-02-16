import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAction } from '../../redux/combiner';
import {
  getLandingIsBottom,
  getLandingIsToBottom,
  getLandingBottomState,
  getLandingToBottomState,
  getLandingBottomBool
} from '../../redux/landing/selectors';
import {
  RDX_LANDING_NAVIGATE_LEFT,
  RDX_LANDING_NAVIGATE_RIGHT
} from '../../redux/landing/actions';
import {
  landingSlideEnterFromRight,
  landingSlideEnterFromLeft,
  bottomSlide
} from '../../animations/animator';
@Component({
  selector: 'app-resale-website',
  templateUrl: './resale-website.component.html',
  styleUrls: ['./resale-website.component.css'],
  animations: [
    landingSlideEnterFromRight,
    landingSlideEnterFromLeft,
    bottomSlide
  ]
})
export class ResaleWebsiteComponent implements OnInit {
  isBottom: Observable<boolean>;
  isToBottom: Observable<boolean>;
  bottomState: Observable<string>;
  toBottomState: Observable<string>;
  bottomBool: Observable<boolean>;
  constructor(
    private store: Store
  ) {
    this.isBottom = this.store.select(getLandingIsBottom);
    this.isToBottom = this.store.select(getLandingIsToBottom);
    this.bottomState = this.store.select(getLandingBottomState);
    this.toBottomState = this.store.select(getLandingToBottomState);
    this.bottomBool = this.store.select(getLandingBottomBool);
  }

  ngOnInit(): void {

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

}
