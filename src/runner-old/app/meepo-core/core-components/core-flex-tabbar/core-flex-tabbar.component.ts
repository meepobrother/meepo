import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'core-flex-tabbar',
  templateUrl: './core-flex-tabbar.component.html',
  styleUrls: ['./core-flex-tabbar.component.scss']
})
export class CoreFlexTabbarComponent implements OnInit {
  @Input() items: any[] = [];
  _code: string = '';
  @Input() set code(val: string){
    this._code = val;
  }
  constructor() {

  }

  ngOnInit() {

  }

}
