import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: '[alloy-touch],alloy-touch',
  templateUrl: './touch.component.html',
  styleUrls: ['./touch.component.scss']
})
export class TouchComponent implements OnInit {

  @Output() onTouch:EventEmitter<any> = new EventEmitter()
  @Output() onChange:EventEmitter<any> = new EventEmitter()
  @Output() onTouchStart:EventEmitter<any> = new EventEmitter()
  @Output() onTouchMove:EventEmitter<any> = new EventEmitter()
  @Output() onTouchEnd:EventEmitter<any> = new EventEmitter()
  @Output() onTap:EventEmitter<any> = new EventEmitter()
  @Output() onPressMove:EventEmitter<any> = new EventEmitter()
  @Output() onAnimationEnd:EventEmitter<any> = new EventEmitter()
  @Output() onRefresh:EventEmitter<any> = new EventEmitter()

  @Input() property: string = 'translateY';
  @Input() vertical: boolean = true;

  _target: any;
  @Input()
  get target(){
    return this._target
  }
  set target(val: any){
    if(val == this._target){

    }else{
      this._target = val;
      this.touch();
    }
  }

  @Input() min: number = 0;

  touchCtrl: any;
  @ViewChild('main') main: ElementRef

  constructor(
    public ele: ElementRef
  ) {
  }

  ngOnInit() {

  }

  touch(){
    window['requirejs']([
      window['module_url']+"/bower_components/alloytouch/transformjs/transform.js",
      window['module_url']+"/bower_components/alloytouch/alloy_touch.js",
      window['module_url']+"/bower_components/alloytouch/alloy_touch.css.js"
    ],()=>{
      let min = this.min - parseInt(this._target.scrollHeight ) + window.innerHeight;
      this.touchCtrl = new window['AlloyTouch']({
        touch:this.main.nativeElement,//反馈触摸的dom
        vertical: this.vertical,//不必需，默认是true代表监听竖直方向touch
        target: this._target, //运动的对象
        property: this.property,  //被运动的属性
        min: min, //不必需,运动属性的最小值,
        max: 0,
        sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: 1,//不必需,表示触摸位移与被运动属性映射关系，默认值是1
        step: 45,//用于校正到step的整数倍
        bindSelf: false,
        initialValue: 0,
        change:(value)=>{
          this.onChange.emit(value)
        },
        touchStart:(evt, value)=>{
          this.onTouchStart.emit(value)
        },
        touchMove:(evt, value)=>{
          this.onTouchMove.emit(value)
        },
        touchEnd:(evt,value,index)=>{
          this.onTouchEnd.emit(value)
        },
        tap:(evt, value)=>{
          this.onTap.emit(value)
        },
        pressMove:(evt, value)=>{
          this.onPressMove.emit(value)
        },
        animationEnd:(value)=>{
          this.onAnimationEnd.emit(value)
        }
      })
      this.onTouch.emit(this.touchCtrl);
    })
  }

}
