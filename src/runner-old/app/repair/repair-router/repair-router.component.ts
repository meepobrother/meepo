import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {ShopsService} from "services-components";
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-repair-router',
  templateUrl: './repair-router.component.html',
  styleUrls: ['./repair-router.component.scss']
})
export class RepairRouterComponent implements OnInit {
  items: any[] = []
  constructor(
    public util: RunnerUtilService,
    public shops: ShopsService,
    public router: Router
  ) {
    this.items=[
      {
        title: '今日工单',
        link: ['/repair/index'],
        icon: 'calendar'
      },
      {
        title: '店铺开单',
        link: ['/repair/post'],
        icon: 'survey'
      },
      {
        title: '门店管理',
        link: ['/repair/home'],
        icon: 'all'
      }
    ]
  }

  ngOnInit() {
    this.util.hideFooter()
  }

  check(){
    this.shops.get({}).subscribe(res=>{
      if(res.code == 0){
        this.router.navigate(['/repair/welcome'])
      }
    })
  }

}
