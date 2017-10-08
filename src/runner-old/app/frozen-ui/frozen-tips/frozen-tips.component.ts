import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frozen-tips',
  templateUrl: './frozen-tips.component.html',
  styleUrls: ['./frozen-tips.component.scss']
})
export class FrozenTipsComponent implements OnInit {
  @Input() content: string = '测试信息  ';
  @Input() type: string = 'info'; // info,success,warn
  stayTime: number = 1000;
  constructor() { }

  ngOnInit() {
  }

  show(){}

  hide(){

  }

}
