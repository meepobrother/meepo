import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-asks-router',
  templateUrl: './asks-router.component.html',
  styleUrls: ['./asks-router.component.scss']
})
export class AsksRouterComponent implements OnInit {
  items: any[] = []
  constructor() {
    this.items = [
      {
        title: '首页',
        link: ['/asks/index'],
        icon: 'all'
      },
      {
        title: '收听',
        link: ['/asks/follow'],
        icon: 'good '
      },
      {
        title: '问',
        link: ['/asks/find'],
        icon: 'help'
      },
      {
        title: '已购',
        link: ['/asks/paid-list'],
        icon: 'hot'
      },
      {
        title: '我的',
        link: ['/asks/me'],
        icon: 'account'
      }
    ]
  }

  ngOnInit() {
  }

}
