import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, SubscriptionLike } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { enterSlideFromUp, enterSlideFromDown, leaveSlideUp, leaveSlideDown, enterSlideFromLeft } from  '../../../animations/animator';
import { MyErrorStateMatcher } from '../../../error-state-matcher';
import {
  RDX_BUY_WEBSITE_ONBOARD_FETCH
} from '../../../redux/buy-website-onboard/actions';
import {
  getBuyWebsiteOnboardIsFetchSuccessMessage,
  getBuyWebsiteOnboardFetchSuccessMessage,
  getBuyWebsiteOnboardIsFetch,
  getBuyWebsiteOnboardIsFetchSuccess,
  getbuyWebsiteOnboardUrl
} from '../../../redux/buy-website-onboard/selectors';
import {
  IAction,
  IBuyWebsiteOnboardFetch
} from '../../../redux/combiner';
@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css'],
  animations: [
    enterSlideFromUp,
    enterSlideFromDown,
    leaveSlideUp,
    leaveSlideDown,
    enterSlideFromLeft
  ]
})
export class OnboardComponent implements OnInit, OnDestroy {
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  email: string;
  password: string;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchSuccessMessage: Observable<boolean>;
  fetchSuccessMessage: Observable<string>;
  // isFetchSuccessSub: SubscriptionLike;
  activatedRouteSub: SubscriptionLike;
  cartId: string;
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {
      this.emailFormControl = new FormControl('', [
        Validators.email,
        Validators.required
      ]);
      this.passwordFormControl = new FormControl('', [
        Validators.required
      ])
      this.errorStateMatcher = new MyErrorStateMatcher();
      this.email = '';
      this.password = '';
      this.isFetch =  this.store.select(getBuyWebsiteOnboardIsFetch);
      this.isFetchSuccess = this.store.select(getBuyWebsiteOnboardIsFetchSuccess);
      this.isFetchSuccessMessage = this.store.select(getBuyWebsiteOnboardIsFetchSuccessMessage);
      this.fetchSuccessMessage = this.store.select(getBuyWebsiteOnboardFetchSuccessMessage)
      // this.isFetchSuccessSub = this.store.select(getBuyWebsiteOnboardIsFetchSuccess).subscribe(res => {
      //   if(res) {
      //     this.store.select(getbuyWebsiteOnboardUrl).subscribe(res => {
      //       window.location.href = res;
      //     })
      //   }
      // })

      this.cartId = '';
      this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(res => {
        this.cartId = res.get('id')!;
      })

    }

  ngOnInit(): void {

  }
  fetch() {
    if(!this.emailFormControl.hasError('required') && !this.emailFormControl.hasError('email') && !this.passwordFormControl.hasError('required')) {
      this.store.dispatch<IAction<IBuyWebsiteOnboardFetch>>({
        type: RDX_BUY_WEBSITE_ONBOARD_FETCH,
        payload: {
          email: this.email,
          password: this.password,
          cartId: this.cartId
        },
        component: 'buy-website-onboard'
      })
    }
  }
  ngOnDestroy() {
    // this.isFetchSuccessSub.unsubscribe();
  }

}
