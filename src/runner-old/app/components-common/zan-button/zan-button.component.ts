import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zan-button',
  templateUrl: './zan-button.component.html',
  styleUrls: ['./zan-button.component.scss']
})
export class ZanButtonComponent implements OnInit {
  @Input() title: string = '立即购买';
  constructor() { }

  ngOnInit() {
  }

}
