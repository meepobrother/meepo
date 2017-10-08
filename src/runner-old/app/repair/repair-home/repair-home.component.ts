import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-repair-home',
  templateUrl: './repair-home.component.html',
  styleUrls: ['./repair-home.component.scss']
})
export class RepairHomeComponent implements OnInit {
  items: any[] = [];
  constructor() {
    this.items = [
      {
        title: '员工管理',
        link: ['/repair/employer']
      },
      {
        title: '客户维护',
        link: ['/im/member']
      },
      {
        title: '发布服务',
        link: ['/services/post']
      },
      {
        title: '车主评价',
        link: ['/repair/comment-log']
      },
      {
        title: '客户记录',
        link: ['/repair/order']
      },
      {
        title: '工时统计'
      }
    ]
  }

  ngOnInit() {

  }

}
