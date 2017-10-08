import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../redux/slider/action';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  settings: any;
  constructor(
    public store$: Store<any>
  ) { 
    
  }

  ngOnInit() {
  }

  close(){
    this.store$.dispatch(new actions.HideAction({}))
  }

}
