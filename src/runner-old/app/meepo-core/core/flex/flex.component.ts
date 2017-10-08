import {Component, Input, OnInit} from '@angular/core';
import classNames from 'classnames'
import {FlexProps} from "./flex-interface";

@Component({
  selector: 'flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {
  wrapCls: string = '';

  _props: FlexProps;
  @Input()
  set props(val: FlexProps){
    this._props = val;
    this.default()
    this.init()
  }

  defaultProps: FlexProps = {
    prefixCls: 'am-flexbox',
    align: 'center',
  } as FlexProps

  constructor() {}

  ngOnInit() {
    this.default()
    this.init()
  }

  default(){
    this._props = this._props || this.defaultProps
  }

  init(){
    this.wrapCls = classNames({
      [`${this._props.prefixCls}`]: true,
      [`${this._props.prefixCls}-dir-row`]: this._props.direction === 'row',
      [`${this._props.prefixCls}-dir-row-reverse`]: this._props.direction === 'row-reverse',
      [`${this._props.prefixCls}-dir-column`]: this._props.direction === 'column',
      [`${this._props.prefixCls}-dir-column-reverse`]: this._props.direction === 'column-reverse',

      [`${this._props.prefixCls}-nowrap`]: this._props.wrap === 'nowrap',
      [`${this._props.prefixCls}-wrap`]: this._props.wrap === 'wrap',
      [`${this._props.prefixCls}-wrap-reverse`]: this._props.wrap === 'wrap-reverse',

      [`${this._props.prefixCls}-justify-start`]: this._props.justify === 'start',
      [`${this._props.prefixCls}-justify-end`]: this._props.justify === 'end',
      [`${this._props.prefixCls}-justify-center`]: this._props.justify === 'center',
      [`${this._props.prefixCls}-justify-between`]: this._props.justify === 'between',
      [`${this._props.prefixCls}-justify-around`]: this._props.justify === 'around',

      [`${this._props.prefixCls}-align-start`]: this._props.align === 'start',
      [`${this._props.prefixCls}-align-center`]: this._props.align === 'center',
      [`${this._props.prefixCls}-align-end`]: this._props.align === 'end',
      [`${this._props.prefixCls}-align-baseline`]: this._props.align === 'baseline',
      [`${this._props.prefixCls}-align-stretch`]: this._props.align === 'stretch',

      [`${this._props.prefixCls}-align-content-start`]: this._props.alignContent === 'start',
      [`${this._props.prefixCls}-align-content-end`]: this._props.alignContent === 'end',
      [`${this._props.prefixCls}-align-content-center`]: this._props.alignContent === 'center',
      [`${this._props.prefixCls}-align-content-between`]: this._props.alignContent === 'between',
      [`${this._props.prefixCls}-align-content-around`]: this._props.alignContent === 'around',
      [`${this._props.prefixCls}-align-content-stretch`]: this._props.alignContent === 'stretch'
    })
  }

}
