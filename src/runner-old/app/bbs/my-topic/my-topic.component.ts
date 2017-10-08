import { Component, OnInit } from '@angular/core';
import {TopicsService} from "services-components";

@Component({
  selector: 'suyun-my-topic',
  templateUrl: './my-topic.component.html',
  styleUrls: ['./my-topic.component.scss']
})
export class MyTopicComponent implements OnInit {
  items: any[] = []
  constructor(
    public topic: TopicsService
  ) {
    this.items = [
      {
        title: '全部',
        active: true
      },
      {
        title: '显示中'
      },
      {
        title: '审核中'
      },
      {
        title: '待支付'
      }
    ]
  }

  ngOnInit() {
    this.getMy(0)
  }
  topics: any[] = [];
  getMy(start: number){
    this.topic.search({action: 'my.topic',start: start,len: 20}).subscribe(res=>{
      this.topics = res.info;
    })
  }

}
