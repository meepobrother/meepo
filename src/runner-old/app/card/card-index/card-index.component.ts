import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-card-index',
  templateUrl: './card-index.component.html',
  styleUrls: ['./card-index.component.scss']
})
export class CardIndexComponent implements OnInit {

  constructor(
      public util: RunnerUtilService
  ) { }

  ngOnInit() {
    this.util.showFooter()
  }

}
