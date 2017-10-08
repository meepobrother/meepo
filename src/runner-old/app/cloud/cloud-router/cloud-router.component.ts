import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-cloud-router',
  templateUrl: './cloud-router.component.html',
  styleUrls: ['./cloud-router.component.scss']
})
export class CloudRouterComponent implements OnInit {
  items: any[] = []
  constructor(
    public util: RunnerUtilService
  ) {
    this.util.getRole();
    this.items = [
      {
        title: '插件展示',
        link: ['/cloud/index'],
        icon: 'all'
      },
      {
        title: '插件更新',
        link: ['/cloud/download'],
        icon: 'security'
      }
    ]
  }

  ngOnInit() {
  }

}
