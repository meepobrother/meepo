import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-repair-services',
  templateUrl: './repair-services.component.html',
  styleUrls: ['./repair-services.component.scss']
})
export class RepairServicesComponent implements OnInit {
  items: any[]= [];
  constructor() {
    this.items = [
      {
        title: '汽车清洗',
        icon: '../addons/imeepos_runner/template/mobile/assets/images/repair-xiche.png',
        link: ['/repair/xiche/0']
      },
      {
        title: '保养美容',
        icon: '../addons/imeepos_runner/template/mobile/assets/images/repair-meirong.png',
        link: ['/repair/meirong/0']
      },
      {
        title: '汽车维修',
        icon: '../addons/imeepos_runner/template/mobile/assets/images/repair-weixiu.png',
        link: ['/repair/weixiu/0']
      }
    ]
  }

  ngOnInit() {

  }

}
