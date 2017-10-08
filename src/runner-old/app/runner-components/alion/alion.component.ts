import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'alion',
  templateUrl: './alion.component.html',
  styleUrls: ['./alion.component.scss']
})
export class AlionComponent implements OnInit {
  _name: string = '';
  @Input() 
  set name(val: string){
    if(val){
      this._name = val;
      this.init();
    }
  }
  @Input() size: string = '16px';
  @Input() color: string = '#000';

  @Input() base: string = '2';

  classname: string = '';

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init(){
    this.classname = `iconfont${this.base} icon-${this._name}`;
  }

}
