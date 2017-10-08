import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {Router} from "@angular/router";
declare const require;
let store = require('store');

@Component({
  selector: 'suyun-im-index',
  templateUrl: './im-index.component.html',
  styleUrls: ['./im-index.component.scss']
})
export class ImIndexComponent implements OnInit {
  // @HostBinding('@routeState') routeState;

  openid: string = '';
  items: any[] = []

  constructor(
      public util: RunnerUtilService,
      public router: Router
  ) {
    this.items = []
  }

  onItem(item: any){
    this.router.navigate(['/im/log/',item.openid])
  }
  timer: any = {}
  ngOnInit() {
    this.refresh()
    this.timer = setInterval(()=>{
      this.refresh()
    },1000)
    this.util.addTimer(this.timer)
    this.util.showFooter()
  }

  ngOnDestroy(){
    this.util.clearTimer()
  }

  refresh(){
    let items = store.get('my.im.index')
    if(items){
      this.items = items;
    }else{
      this.items = []
    }
  }

}
