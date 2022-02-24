import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms'
import { Store } from '@ngrx/store';
import { IAction, ILoginFetch } from '../../redux/combiner';
import { RDX_LOGIN_FETCH } from '../../redux/login/actions';
import {
  enterSlideFromUp,
  enterSlideFromDown
} from '../../animations/animator';
import {
  MyErrorStateMatcher
} from '../../error-state-matcher';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    enterSlideFromUp,
    enterSlideFromDown
  ]
})
export class LoginComponent implements OnInit {
  email: string;
  emailFormControl: FormControl;
  password: string;
  passwordFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  constructor(
    private store: Store
  ) {
    this.email = '';
    this.emailFormControl = new FormControl('', [
      Validators.required
    ]);
    this.password = '';
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.errorStateMatcher = new MyErrorStateMatcher();
  }

  ngOnInit(): void {
  }
  login() {
    if(!this.emailFormControl.hasError('required') && !this.passwordFormControl.hasError('required') && !this.emailFormControl.hasError('email')) {
      this.store.dispatch<IAction<ILoginFetch>>({
        type: RDX_LOGIN_FETCH,
        payload: {
          email: this.email,
          password: this.password
        },
        component: 'login'
      })
    }
  }

}
