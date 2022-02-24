import { RDX_MAIN_IS_CONFIRMED  } from '../../redux/main/actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IAction} from '../../redux/combiner';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_IS_CONFIRMED,
      component: 'main'
    })
  }

}
