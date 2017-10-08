import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent implements OnInit {
  info: any = {
    mobile: '',
    zhima: ''
  }
  constructor() { }

  ngOnInit() {
  }

}
