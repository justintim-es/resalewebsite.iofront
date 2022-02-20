import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, SubscriptionLike } from 'rxjs';
import { Store } from '@ngrx/store';
import { enterSlideFromUp, enterSlideFromDown } from  '../../../animations/animator';
import { MyErrorStateMatcher } from '../../../error-state-matcher';
import {
  RDX_BUY_WEBSITE_ONBOARD_FETCH
} from '../../../redux/buy-website-onboard/actions';
import {
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
    enterSlideFromDown
  ]
})
export class OnboardComponent implements OnInit, OnDestroy {
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  email: string;
  password: string;
  isFetch: Observable<boolean>;
  isFetchSuccessSub: SubscriptionLike;
  constructor(
    private store: Store
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
      this.isFetchSuccessSub = this.store.select(getBuyWebsiteOnboardIsFetchSuccess).subscribe(res => {
        if(res) {
          this.store.select(getbuyWebsiteOnboardUrl).subscribe(res => {
            window.location.href = res;
          })
        }
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
        },
        component: 'buy-website-onboard'
      })
    }
  }
  ngOnDestroy() {
    this.isFetchSuccessSub.unsubscribe();
  }

}
