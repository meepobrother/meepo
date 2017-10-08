import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'result-gift',
  templateUrl: './result-gift.component.html',
  styleUrls: ['./result-gift.component.scss']
})
export class ResultGiftComponent implements OnInit {
  @Input() title: string = '来自***的红包';
  @Input() subTitle: string = '红包抽奖';
  @Input() desc: string = '红包抽奖';
  @Input() avatar: string = './assets/images/avatar.png';
  constructor() { }

  ngOnInit() {
  }

}
