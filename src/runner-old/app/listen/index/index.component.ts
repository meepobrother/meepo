import { Component, OnInit } from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'suyun-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  timer: number = 0;

  items: any[] = []

  constructor(
    sanitizer: DomSanitizer
  ) {

  }

  interval: any;
  ngOnInit() {
    this.interval = setInterval(()=>{
      this.timer ++
    },1000)
  }

  ngOnDestroy(){
    clearInterval(this.interval)
  }

  getNewTasks(){

  }

}
