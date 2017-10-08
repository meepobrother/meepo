import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RunnerUtilService} from "../../../runner-components/runner-util.service";
declare const require;
let store = require('store');

@Component({
  selector: 'im-message-list',
  templateUrl: './im-message-list.component.html',
  styleUrls: ['./im-message-list.component.scss']
})
export class ImMessageListComponent implements OnInit {
  items: any[] = []
  _openid: string = '';

  @Input()
  set openid(val: string){
    if(val){
      if(val != this._openid){
        this._openid = val;
        this.getList()
      }
    }
  }
  _myOpenid: string = '';
  @Output() onInit: EventEmitter<any> = new EventEmitter()
  @Input()
  set myOpenid(val: string){
    if(val){
      this._myOpenid = val;
    }
  }
  constructor(
      public util: RunnerUtilService
  ) { }
  timer: any;
  ngOnInit() {
    this.getList()
    this.timer = setInterval(()=>{
      this.getList()
    },1000)
    this.util.addTimer(this.timer)
  }

  addMsg(msg: any){
    this.items.push(msg)
    store.set('my.message'+this._openid,this.items);
    document.body.scrollTop = document.body.scrollHeight + 55;
  }

  trackByFn(index,item){
    return item.id
  }

  ngOnDestroy(){
    this.util.clearTimer()
  }

  getList(){
    if(this._openid){
      let items = store.get('my.message'+this._openid);
      items = items || [];
      this.items = items;
    }
  }

}
