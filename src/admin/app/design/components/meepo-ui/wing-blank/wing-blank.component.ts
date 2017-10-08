import {Component, Input, OnInit} from '@angular/core';
import classNames from 'classnames'
@Component({
  selector: 'wing-blank',
  templateUrl: './wing-blank.component.html',
  styleUrls: ['./wing-blank.component.scss']
})
export class WingBlankComponent implements OnInit {
  prefixCls: string = 'am-wingblank';
  @Input() size: string = 'lg';

  wrapCls: string = '';
  constructor() { }

  ngOnInit() {
    this.wrapCls = classNames({
      [`${this.prefixCls}`]: true,
      [`${this.prefixCls}-${this.size}`]: true
    });
  }

}
