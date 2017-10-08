import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'myjd-qianbao',
  templateUrl: './myjd-qianbao.component.html',
  styleUrls: ['./myjd-qianbao.component.scss']
})
export class MyjdQianbaoComponent implements OnInit {
  @Input() orders: any[] = []
  constructor(
      public router: Router
  ) {
    this.orders = [
      {
        title: '账户余额',
        num: '0.0'
      },
      {
        title: '我的积分',
        num: '0'
      },
      {
        title: '我的信誉',
        num: '0'
      }
    ]
  }

  myorder(){
    this.router.navigate(['/tixian/post'])
  }

  ngOnInit() {

  }

}
