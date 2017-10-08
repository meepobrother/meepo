import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import classNames from 'classnames';

@Component({
  selector: 'activity-indicator',
  templateUrl: './activity-indicator.component.html',
  styleUrls: ['./activity-indicator.component.scss']
})
export class ActivityIndicatorComponent implements OnInit {
  wrapClass: string;
  spinnerClass: string;

  _props: ActivityIndicatorPropTypes = {}
  @Input()
  set props(val: ActivityIndicatorPropTypes){
    this._props = val;
    this.render();
  }

  @Output() onInit: EventEmitter<any> = new EventEmitter()

  prefixCls: string;
  className: string;
  animating: boolean;
  toast: boolean;
  size: string;
  text: string;

  constructor() {}

  ngOnInit() {
    this.render();
  }
  
  render(){
    this._props = Object.assign(defaultProps,this._props);
    const { prefixCls, className, animating, toast, size, text } = this._props;
    this.prefixCls = prefixCls;
    this.className = className;
    this.animating = animating;
    this.toast = toast;
    this.size = size;
    this.text = text;

    this.wrapClass = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [className as string]: !!className,
      [`${prefixCls}-toast`]: !!toast,
    });

    this.spinnerClass = classNames({
      [`${prefixCls}-spinner`]: true,
      [`${prefixCls}-spinner-sm`]: !!toast || size === 'large',
    });

    this.onInit.emit(this);
  }
}

export interface ActivityIndicatorPropTypes {
  animating?: boolean;
  toast?: boolean;
  color?: 'gray' | 'white';
  size?: 'large' | 'small';
  text?: string;
  styles?: any;
  /** web only */
  prefixCls?: string;
  className?: string;
}

export const defaultProps = {
  prefixCls: 'am-activity-indicator',
  animating: true,
  size: 'small',
  panelColor: 'rgba(34,34,34,0.6)',
  toast: false,
}