import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zan-steps',
  templateUrl: './van-steps.component.html',
  styleUrls: ['./van-steps.component.scss']
})
export class VanStepsComponent implements OnInit {
  @Input() items: any[] = []
  constructor() {
    this.items = [
      {
        title: '录入信息',
        active: true,
        time: ''
      },
      {
        title: '车辆检查'
      },
      {
        title: '维修项目'
      },
      {
        title: '派单施工'
      },
      {
        title: '结款评价'
      }
    ]
  }

  ngOnInit() {
  }

}
