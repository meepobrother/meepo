import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'h-navbar-static-side',
  templateUrl: './h-navbar-static-side.component.html',
  styleUrls: ['./h-navbar-static-side.component.scss']
})
export class HNavbarStaticSideComponent implements OnInit {
  menus: any[] = [];
  constructor() {
  	this.menus = [
  		{
  		  title: '概述',
        web: [
          {
            title: '概述',
            link: ['/runner/web/index']
          },
          {
            title: '任务管理',
            link: ['/runner/web/tasks']
          },
          {
            title: '会员管理',
            link: ['/runner/web/member']
          },
          {
            title: '跑腿管理',
            link: ['/runner/web/runner']
          },
          {
            title: '财务对账',
            link: ['/runner/web/money']
          },
          {
            title: '会员分布',
            link: ['/runner/web/map']
          }
        ]
      },{
        title: '余额提现',
        web: [
          {
            title: '提现管理',
            link: ['/tixian/web/list']
          }
        ]
      },
      {
        title: '小明搬家',
        web: [
          {
            title: '搬家管理',
            link: ['/suyun/web/list']
          },
          {
            title: '搬家工',
            link: ['/suyun/web/employer']
          }
        ]
      }
  	]
  }

  ngOnInit() {
  }

}
