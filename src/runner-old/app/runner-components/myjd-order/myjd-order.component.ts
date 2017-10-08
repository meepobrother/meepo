import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'myjd-order',
  templateUrl: './myjd-order.component.html',
  styleUrls: ['./myjd-order.component.scss']
})
export class MyjdOrderComponent implements OnInit {
  @Input() orders: any[] = []
  constructor(
    public router: Router
  ) {
    this.orders = [
      {
        title: '待接单',
        icon: window['module_url']+'assets/images/home/order1.png',
        link: ['/runner/my-order/1']
      },
      {
        title: '进行中',
        icon: window['module_url']+'assets/images/home/order2.png',
        link: ['/runner/my-order/2']
      },
      {
        title: '待确认',
        icon: window['module_url']+'assets/images/home/order4.png',
        link: ['/runner/my-order/3']
      },
      {
        title: '已撤销',
        icon: window['module_url']+'assets/images/home/order3.png',
        link: ['/runner/my-order/6']
      }
    ]
  }

  ngOnInit() {
  }

  myorder(){
    this.router.navigate(['/runner/my-order'])
  }

}
