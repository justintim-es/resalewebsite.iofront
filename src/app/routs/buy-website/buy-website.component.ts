import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAction, IBuyWebsite, IBuyWebsiteCart } from '../../redux/combiner';
import {
  RDX_BUY_WEBSITE_CART,
  RDX_BUY_WEBSITE_SLIDE_BACK,
  RDX_BUY_WEBSITE_SEARCH,
  RDX_BUY_WEBSITE_IS_INPUT_TRUE_TRIGGER,
  RDX_BUY_WEBSITE_CHECK,
  RDX_BUY_WEBSITE_CREATE_CART,
  RDX_BUY_WEBSITE_ONBOARD
} from '../../redux/buy-website/actions';
import {
  getBuyWebsiteIsRouteOnboard,
  getBuyWebsiteIsCart,
  getBuyWebsiteTopIndex,
  getBuyWebsiteToTopIndex,
  getBuyWebsiteBottomIndex,
  getBuyWebsiteToBottomIndex,
  getBuyWebsiteIsInput,
  getBuyWebsiteBottomState,
  getBuyWebsiteToBottomState,
  getBuyWebsiteIsCheck,
  getBuyWebsiteIsToBottom,
  getBuyWebsiteIsAvailability,
  getBuyWebsiteCheck,
  getBuyWebsiteTopState,
  getBuyWebsiteToTopState,
  getBuyWebsiteIsToTop,
  getBuyWebsiteCart,
  getBuyWebsiteIsTopCurtain,
  getBuyWebsiteIsBottomCurtain
} from '../../redux/buy-website/selectors';
import { Observable, SubscriptionLike } from 'rxjs';
import {
  landingSlideEnterFromRight,
  landingSlideEnterFromLeft,
  enterSlideFromUp,
  bottomSlide,
  leaveSlideDown,
  leaveSlideUp
} from '../../animations/animator';
import { MyErrorStateMatcher } from '../../error-state-matcher';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy-website',
  templateUrl: './buy-website.component.html',
  styleUrls: ['./buy-website.component.css'],
  animations: [
    landingSlideEnterFromRight,
    landingSlideEnterFromLeft,
    enterSlideFromUp,
    bottomSlide,
    leaveSlideDown,
    leaveSlideUp
  ]
})
export class BuyWebsiteComponent implements OnInit, OnDestroy {
  isInput: Observable<boolean>;
  website: string;
  websiteFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  isCheck: Observable<boolean>;
  check: Observable<IBuyWebsite>;
  bottomState: Observable<string>;
  toBottomState: Observable<string>;
  isToBottom: Observable<boolean>;
  isAvailability: Observable<boolean>;
  topState: Observable<string>;
  toTopState: Observable<string>;
  isToTop: Observable<boolean>;
  cart: Observable<IBuyWebsiteCart>;
  bottomIndex: Observable<number>;
  toBottomIndex:  Observable<number>;
  isCart: Observable<boolean>;
  topIndex: Observable<number>;
  toTopIndex: Observable<number>;
  isTopCurtain: Observable<boolean>;
  isBottomCurtain: Observable<boolean>;
  isRouteOnboardSub: SubscriptionLike;

  constructor(
      private store: Store,
      private router: Router
  ) {
    this.isInput = this.store.select(getBuyWebsiteIsInput);
    this.website = '';
    this.websiteFormControl = new FormControl('', [
      Validators.required
    ])
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isCheck = this.store.select(getBuyWebsiteIsCheck);
    this.check = this.store.select(getBuyWebsiteCheck);
    this.bottomState = this.store.select(getBuyWebsiteBottomState);
    this.toBottomState = this.store.select(getBuyWebsiteToBottomState);
    this.isToBottom = this.store.select(getBuyWebsiteIsToBottom);
    this.isAvailability = this.store.select(getBuyWebsiteIsAvailability);
    this.topState = this.store.select(getBuyWebsiteTopState);
    this.toTopState = this.store.select(getBuyWebsiteToTopState);
    this.isToTop = this.store.select(getBuyWebsiteIsToTop);
    this.cart = this.store.select(getBuyWebsiteCart);
    this.bottomIndex = this.store.select(getBuyWebsiteBottomIndex);
    this.toBottomIndex = this.store.select(getBuyWebsiteToBottomIndex);
    this.isCart = this.store.select(getBuyWebsiteIsCart);
    this.topIndex = this.store.select(getBuyWebsiteTopIndex);
    this.toTopIndex = this.store.select(getBuyWebsiteToTopIndex);
    this.isTopCurtain = this.store.select(getBuyWebsiteIsTopCurtain);
    this.isBottomCurtain = this.store.select(getBuyWebsiteIsBottomCurtain);
    this.isRouteOnboardSub = this.store.select(getBuyWebsiteIsRouteOnboard).subscribe(res => {
      if(res) {
        this.router.navigate(['/buy-website-onboard'])
      }
    })
   }

  ngOnInit(): void {
    this.store.dispatch<IAction<any>>({
      type: RDX_BUY_WEBSITE_IS_INPUT_TRUE_TRIGGER,
      component: 'buy-website'
    })
  }
  chescheck() {
    if(!this.websiteFormControl.hasError('required')) {
      this.store.dispatch<IAction<any>>({
        type: RDX_BUY_WEBSITE_CHECK,
        payload: this.website,
        component: 'buy-website'
      });
    }
  }
  search() {
    this.store.dispatch<IAction<any>>({
      type: RDX_BUY_WEBSITE_SEARCH,
      component: 'buy-website'
    })
    this.website = '';
    this.websiteFormControl = new FormControl({ value: '' }, [
      Validators.required
    ]);
  }
  add() {
    this.store.dispatch<IAction<any>>({
      type: RDX_BUY_WEBSITE_CREATE_CART,
      component: 'buy-website'
    });
  }
  back() {

  }
  onCart() {
    this.store.dispatch<IAction<any>>({
      type: RDX_BUY_WEBSITE_CART,
      component: 'buy-website'
    });
  }
  checkout() {
    this.store.dispatch<IAction<any>>({
      type: RDX_BUY_WEBSITE_ONBOARD,
      component: 'buy-website'
    });
  }
  ngOnDestroy() {
    this.isRouteOnboardSub.unsubscribe();
  }
}
