import {Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import classNames from 'classnames'
import {FlexItemProps} from "./flex-item-interface";
@Component({
  selector: 'flex-item',
  templateUrl: './flex-item.component.html',
  styleUrls: ['./flex-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlexItemComponent implements OnInit {
  wrapCls: string = '';

  _props: FlexItemProps;
  @Input()
  set props(val: FlexItemProps){
    this._props = val;
    this.default()
    this.init();
  }

  defaultProps = {
    prefixCls: 'am-flexbox',
  } as FlexItemProps

  constructor(
      public ele: ElementRef,
      public render: Renderer2
  ) {

  }

  default(){
    this._props = this._props || this.defaultProps;
  }

  ngOnInit() {
    this.default()
    this.init()
  }

  init(){
    this.wrapCls = classNames({
      [`${this._props.prefixCls}-item`]: true
    });
    this.render.addClass(this.ele.nativeElement,this.wrapCls)
  }

}
