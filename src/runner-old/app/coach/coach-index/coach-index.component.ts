import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-coach-index',
  templateUrl: './coach-index.component.html',
  styleUrls: ['./coach-index.component.scss']
})
export class CoachIndexComponent implements OnInit {
  advs: any[] = []
  shops: any[] = []
  constructor(
    public util: RunnerUtilService
  ) {
    this.advs = [
      {
        image: '',
        link: ''
      }
    ]

    this.shops = [
      {
        title: '测试店铺',
        image: '',
        private: '会员折扣',
        desc: '米波网络科技测试店铺',
        duration: '200米',
        duration_time: '20分钟'
      }
    ]
  }

  ngOnInit() {
    this.util.hideFooter()
  }

}
