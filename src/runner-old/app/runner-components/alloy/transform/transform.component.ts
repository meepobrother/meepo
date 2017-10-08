import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[alloy-transform],alloy-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.scss']
})
export class TransformComponent implements OnInit {

  @Input() rotateZ: number = 0; //z轴
  @Input() rotateY: number = 0;
  @Input() rotateX: number = 0;

  @Input() originX: number = 0;
  @Input() originY: number = 0;
  @Input() originZ: number = 0;

  @Input() scaleX: number = 0;
  @Input() scaleY: number = 0;
  @Input() scaleZ: number = 0;

  @Input() skewX: number = 0;
  @Input() skewY: number = 0;


  @Input() translateX: number = 0;
  @Input() translateY: number = 0;
  @Input() translateZ: number = 0;

  @Output() onTransform: EventEmitter<any> = new EventEmitter()


  constructor(
    public ele: ElementRef
  ) {

  }

  ngOnInit() {
    this.transform()
  }

  transform(){
    window['requirejs']([
      window['module_url']+"/bower_components/alloytouch/transformjs/transform.js",
      window['module_url']+"/bower_components/alloytouch/transformjs/asset/tick.js",
      window['module_url']+"/bower_components/alloytouch/transformjs/asset/to.js",
      window['module_url']+"/bower_components/alloytouch/transformjs/asset/alloy_flow.js",
    ],()=>{
      window['Transform'](this.ele.nativeElement,true);

      this.rotateZ > 0 ? this.ele.nativeElement.rotateZ = this.rotateZ : 'none';
      this.rotateY > 0 ? this.ele.nativeElement.rotateY = this.rotateY : 'none';
      this.rotateX > 0 ? this.ele.nativeElement.rotateX = this.rotateX : 'none';

      this.originY > 0 ? this.ele.nativeElement.originY = this.originY : 'none';
      this.originX > 0 ? this.ele.nativeElement.originX = this.originX : 'none';
      this.originZ > 0 ? this.ele.nativeElement.originZ = this.originZ : 'none';

      this.scaleX > 0 ? this.ele.nativeElement.scaleX = this.scaleX : 'none';
      this.scaleY > 0 ? this.ele.nativeElement.scaleY = this.scaleY : 'none';
      this.scaleZ > 0 ? this.ele.nativeElement.scaleZ = this.scaleZ : 'none';

      this.skewX > 0 ? this.ele.nativeElement.skewX = this.skewX : 'none';
      this.skewY > 0 ? this.ele.nativeElement.skewY = this.skewY : 'none';

      this.translateX > 0 ? this.ele.nativeElement.translateX = this.translateX : 'none';
      this.translateY > 0 ? this.ele.nativeElement.translateY = this.translateY : 'none';
      this.translateZ > 0 ? this.ele.nativeElement.translateZ = this.translateZ : 'none';

      this.onTransform.emit({ele: this.ele.nativeElement,tick: window['tick']})
    })
  }

}
