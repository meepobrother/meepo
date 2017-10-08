import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-bbs-router',
  templateUrl: './bbs-router.component.html',
  styleUrls: ['./bbs-router.component.scss']
})
export class BbsRouterComponent implements OnInit {
  items: any[] = []
  constructor(
    public util: RunnerUtilService
  ) {
    this.items = [
      {
        title: '首页',
        link: ['/bbs/index'],
        icon: 'hot'
      },
      {
        title: '发布',
        link: ['/bbs/post'],
        icon: 'survey'
      },
      {
        title: '我的帖子',
        link: ['/bbs/my-topic'],
        icon: 'home'
      }
    ]
  }

  ngOnInit() {
    this.util.hideFooter()
  }

}
