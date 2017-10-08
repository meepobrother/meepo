import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-repair-index',
  templateUrl: './repair-index.component.html',
  styleUrls: ['./repair-index.component.scss']
})
export class RepairIndexComponent implements OnInit {
  items: any[] = [];
  constructor(
    public util: RunnerUtilService
  ) { 
    this.items = [
      {
        title: '商城',
        image: window['module_url'] + 'assets/images/repair/商城.png',
        link: ['/repair/goods']
      },
      {
        title: '车检',
        image: window['module_url'] + 'assets/images/repair/车况检测.png',
        link: ['/repair/check']
      },
      {
        title: '预约',
        link: ['/repair/coach'],
        image: window['module_url'] + 'assets/images/repair/预约.png'
      },
      {
        title: '互动',
        link: ['/bbs/index'],
        image: window['module_url'] + 'assets/images/repair/互动.png'
      }
    ]
  }

  ngOnInit() {
    this.util.hideFooter()
  }

}
