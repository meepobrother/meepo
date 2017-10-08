import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.scss']
})
export class MyServiceComponent implements OnInit {
  items: any[] = []
  constructor(
    public util: RunnerUtilService
  ) {

  }

  ngOnInit() {
    this.util.hideFooter()
  }

  add(){

  }

}
