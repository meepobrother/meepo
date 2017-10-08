import {Component, Input, OnInit} from '@angular/core';
import {ButtonProps} from "./core.button.interface";
import classNames from 'classnames';

@Component({
  selector: 'core-button',
  templateUrl: './core-button.component.html',
  styleUrls: ['./core-button.component.scss']
})
export class CoreButtonComponent implements OnInit {
  defaultProps: ButtonProps = {
    prefixCls: 'am-button',
    size: 'large',
    inline: false,
    across: false,
    disabled: false,
    loading: false,
    activeStyle: {},
  }

  _props: ButtonProps;
  @Input()
  set props(val: ButtonProps){
    this._props = val;
  }

  wrapCls: string = '';
  constructor() { }

  init(){
    this._props = Object.assign(this.defaultProps,this._props)
  }

  ngOnInit() {
    this.init()
    const {
      className, prefixCls, type, size, inline, across,
      disabled, icon, loading, activeStyle, activeClassName, onClick,
      delayPressIn, delayPressOut, ...restProps,
    } = this._props;
    const iconType = loading ? 'loading' : icon;
    const wrapCls = {
      [`${prefixCls}`]: true,
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-ghost`]: type === 'ghost',
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-across`]: across,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
    };

    if (iconType) {
      wrapCls[`${prefixCls}-icon`] = true;
    }
    this.wrapCls = classNames(wrapCls)
    const delayProps: any = {};
    if (delayPressIn) {
      delayProps.delayPressIn = delayPressIn;
    }
    if (delayPressOut) {
      delayProps.delayPressOut = delayPressOut;
    }
  }


  _onClick(){

  }
}
