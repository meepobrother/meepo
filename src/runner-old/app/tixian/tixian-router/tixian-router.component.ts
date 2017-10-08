import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-tixian-router',
  templateUrl: './tixian-router.component.html',
  styleUrls: ['./tixian-router.component.scss']
})
export class TixianRouterComponent implements OnInit {
  items: any[] = []
  constructor(
    public util: RunnerUtilService
  ) {
    this.items = [
      {
        title: '提现',
        icon: 'creditlevel',
        link: ['/tixian/post']
      },
      {
        title: '记录',
        icon: 'calendar',
        link: ['/tixian/log']
      }
    ]
  }

  ngOnInit() {
    this.util.hideFooter()
  }

}
