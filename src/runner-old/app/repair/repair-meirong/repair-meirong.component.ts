import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-repair-meirong',
  templateUrl: './repair-meirong.component.html',
  styleUrls: ['./repair-meirong.component.scss']
})
export class RepairMeirongComponent implements OnInit {
  post: any = {
  	type: 8 //美工工单
  }
  constructor() { }

  ngOnInit() {
  }

  selectGoods(e: any){

  }

}
