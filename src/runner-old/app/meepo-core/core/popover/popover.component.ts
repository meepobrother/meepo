import {Component, Input, OnInit} from '@angular/core';
import {PopoverProps} from "./index";

@Component({
  selector: 'suyun-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  defaultProps: PopoverProps = {
    prefixCls: 'am-popover',
    placement: 'bottomRight',
    align: { overflow: { adjustY: 0, adjustX: 0 } },
    trigger: ['click'],
  } as PopoverProps;

  _props: PopoverProps;
  @Input()
  set props(val: PopoverProps){
    this._props = val;
  }

  constructor() { }

  ngOnInit() {
    this._props = Object.assign(this._props,this.defaultProps)
    console.log(this._props)
  }

}
