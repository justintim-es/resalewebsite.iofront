import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { IAction } from '../../redux/combiner';
import { RDX_CONFIRM_FETCH } from '../../redux/confirm/actions';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  activatedRouteSub: SubscriptionLike;
  token: string;
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {
    this.token = '';
    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(res => {
      this.token = res.get('token')!;
      this.store.dispatch<IAction<string>>({
        type: RDX_CONFIRM_FETCH,
        payload: this.token,
        component: 'confirm'
      });
    })
  }

  ngOnInit(): void {
  }

}
