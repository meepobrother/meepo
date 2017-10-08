import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {SettingService} from "services-components";

@Component({
  selector: 'suyun-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  asksClass: any[] = []
  constructor(
    public util: RunnerUtilService,
    public setting: SettingService
  ) {

    this.asksClass = [
      {
        title: '全部',
        active: true
      },
      {
        title: '情感'
      },
      {
        title: '法律'
      },
      {
        title: '医疗'
      },
      {
        title: '房产'
      },
      {
        title: '学术'
      },
      {
        title: '育儿'
      },
      {
        title: '心理'
      },
      {
        title: '理财'
      },
      {
        title: '职场'
      },
      {
        title: '管理'
      },
      {
        title: '科普'
      }
    ]
  }

  ngOnInit() {
    this.util.hideFooter()
    this.initClass();
  }

  initClass(){
    this.setting.get({code: 'asks.setting.class'}).subscribe(res=>{
      if(res.code == 0){
        this.setting.save({code: 'asks.setting.class',data: this.asksClass}).subscribe(res=>{})
      }else{
        this.asksClass = res.info;
      }
    })
  }

}
