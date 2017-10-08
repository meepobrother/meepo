import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frozen-tooltips',
  templateUrl: './frozen-tooltips.component.html',
  styleUrls: ['./frozen-tooltips.component.scss']
})
export class FrozenTooltipsComponent implements OnInit {
  @Input() content: string = '测试提醒';
  @Input() type: string = 'warn';

  constructor() { }

  ngOnInit() {
  }

}
