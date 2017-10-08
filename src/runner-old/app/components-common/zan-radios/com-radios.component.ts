import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zan-radios',
  templateUrl: './com-radios.component.html',
  styleUrls: ['./com-radios.component.scss']
})
export class ZanRadiosComponent implements OnInit {
  _isCheck: boolean = false;
  @Input()
  set isCheck(val: boolean){
    if(this._isCheck != val){
      this._isCheck = val;
      this.init();
    }
  }
  icon: string = 'check';
  constructor() { }

  ngOnInit() {
  }

  init(){
    if(this._isCheck){
      this.icon = 'checked';
    }else{
      this.icon = 'check';
    }
  }

  _onCheck(){
    this._isCheck = !this._isCheck
    this.init();
  }

}
