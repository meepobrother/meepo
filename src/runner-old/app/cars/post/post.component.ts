import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  btnTitle: string = '下一步';
  topNavs: any[] = []
  constructor(
    public util: RunnerUtilService
  ) {
    this.topNavs = [
      {
        title: '我是乘客',
        active: true
      },
      {
        title: '我是司机',
        active: false
      }
    ]
  }

  onTopNav(e:any){

  }

  ngOnInit() {
    this.util.hideFooter()
  }

}
