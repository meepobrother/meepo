import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    public util: RunnerUtilService
  ) { }

  ngOnInit() {
  }

  editOpt(){

  }

}
