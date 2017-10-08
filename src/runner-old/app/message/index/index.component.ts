import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  items: any[] = []
  constructor(
    public util: RunnerUtilService
  ) {
    this.items = [{},{},{}]
  }

  ngOnInit() {
    this.util.showFooter()
  }

  open(e: any){}

}
