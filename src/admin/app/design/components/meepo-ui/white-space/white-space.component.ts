import {Component, Input, OnInit} from '@angular/core';
import classNames from 'classnames';

@Component({
  selector: 'white-space',
  templateUrl: './white-space.component.html',
  styleUrls: ['./white-space.component.scss']
})
export class WhiteSpaceComponent implements OnInit {
  prefixCls: string = 'am-whitespace';
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
