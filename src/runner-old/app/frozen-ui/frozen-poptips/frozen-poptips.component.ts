import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frozen-poptips',
  templateUrl: './frozen-poptips.component.html',
  styleUrls: ['./frozen-poptips.component.scss']
})
export class FrozenPoptipsComponent implements OnInit {
  @Input() content: string = '测试信息  ';
  @Input() type: string = 'info'; // info,success,warn
  stayTime: number = 1000;
  constructor() { }

  ngOnInit() {
  }

}
