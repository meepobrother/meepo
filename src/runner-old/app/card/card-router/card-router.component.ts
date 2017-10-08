import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-card-router',
  templateUrl: './card-router.component.html',
  styleUrls: ['./card-router.component.scss']
})
export class CardRouterComponent implements OnInit {
  items: any[] = []
  constructor(
      public util: RunnerUtilService
  ) {
    this.items = [
      {
        title: '会员卡',
        link: ['/card/index'],
        icon: 'gerenzhongxin'
      },
      {
        title: '设计',
        link: ['/card/add'],
        icon: 'edit'
      },
      {
        title: '积分兑换',
        link: ['/card/recharge'],
        icon: 'gifts'
      }
    ]
  }

  ngOnInit() {

  }

}
