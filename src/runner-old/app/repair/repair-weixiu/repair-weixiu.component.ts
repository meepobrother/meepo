import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-repair-weixiu',
  templateUrl: './repair-weixiu.component.html',
  styleUrls: ['./repair-weixiu.component.scss']
})
export class RepairWeixiuComponent implements OnInit {
  post: any = {
    type: 6, //维修,
    goods: '', //维修项目,
    parts: [],
    services: [],
    employers: []
  }
  showOrder: boolean = false;
  constructor() { }

  ngOnInit() {

  }

  onSelect(e:any){

  }

}
