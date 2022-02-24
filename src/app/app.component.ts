import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubscriptionLike } from 'rxjs';
import { Store } from '@ngrx/store';
import { getErrorIsError, getErrorError } from './redux/error/selectors'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'aschan';
  isErrorSub: SubscriptionLike;
  constructor(
    private store: Store,
    private snackbar: MatSnackBar
  ) {
    this.isErrorSub = this.store.select(getErrorIsError).subscribe(res => {
      if(res) {
        this.store.select(getErrorError).subscribe(res => {
          this.snackbar.open(
            res, 
          );
        })
      }

    })
  }
  ngOnDestroy() {
    this.isErrorSub.unsubscribe();
  }
}
