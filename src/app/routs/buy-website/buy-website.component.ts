import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IAction } from '../../redux/combiner';
import { RDX_BUY_WEBSITE_IS_INPUT_TRUE_TRIGGER } from '../../redux/buy-website/actions';
import { getBuyWebsiteIsInput}from '../../redux/buy-website/selectors';
import { Observable, SubscriptionLike } from 'rxjs';
import {
  landingSlideEnterFromRight,
  landingSlideEnterFromLeft,
  enterSlideFromUp
} from '../../animations/animator';
@Component({
  selector: 'app-buy-website',
  templateUrl: './buy-website.component.html',
  styleUrls: ['./buy-website.component.css'],
  animations: [
    landingSlideEnterFromRight,
    landingSlideEnterFromLeft,
    enterSlideFromUp
  ]
})
export class BuyWebsiteComponent implements OnInit {
  isInput: Observable<boolean>;
  constructor(
    private store: Store,
  ) {
    this.isInput = this.store.select(getBuyWebsiteIsInput);
   }

  ngOnInit(): void {
    this.store.dispatch<IAction<any>>({
      type: RDX_BUY_WEBSITE_IS_INPUT_TRUE_TRIGGER,
      component: 'buy-website'
    })
  }

}
