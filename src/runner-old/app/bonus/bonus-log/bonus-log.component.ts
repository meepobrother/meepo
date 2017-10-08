import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-bonus-log',
  templateUrl: './bonus-log.component.html',
  styleUrls: ['./bonus-log.component.scss']
})
export class BonusLogComponent implements OnInit {
  items: any[] = []
  constructor() {
    this.items = [
      {
        title: '施工提成',
        active: false,
        type: 'shigong'
      },
      {
        title: '销售提成',
        active: false,
        type: 'xiaoshou'
      },
      {
        title: '推广提成',
        active: false,
        type: 'tuiguang'
      },
      {
        title: '提成汇总',
        active: true,
        type: 'total'
      }
    ]
  }

  ngOnInit() {
  }

}
