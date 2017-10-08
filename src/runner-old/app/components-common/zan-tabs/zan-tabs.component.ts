import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'zan-tabs',
  templateUrl: './zan-tabs.component.html',
  styleUrls: ['./zan-tabs.component.scss']
})
export class ZanTabsComponent implements OnInit {
  @Input() items: any[] = []
  @ViewChild('wrap') wrap: ElementRef
  @ViewChild('swipe') swipe: ElementRef
  @ViewChild('bar') bar: ElementRef
  constructor() {
    this.items = [
      {
        title: '测试',
        active: true
      },
      {
        title: '测试',
        active: false
      },
      {
        title: '测试',
        active: false
      },
      {
        title: '测试',
        active: false
      },
      {
        title: '测试',
        active: false
      },
      {
        title: '测试',
        active: false
      },
      {
        title: '测试',
        active: false
      },
      {
        title: '测试',
        active: false
      },
      {
        title: '测试',
        active: false
      },
      {
        title: '测试',
        active: false
      }
    ]
  }

  ngOnInit() {
    this.init()
  }

  init(){
    window['requirejs']([
      window['module_url'] + "./assets/bower_components/alloytouch/alloy_touch.js",
      window['module_url'] + "./assets/bower_components/alloytouch/transformjs/transform.js",
    ],()=>{
      let box = this.wrap.nativeElement;
      let target = this.swipe.nativeElement;
      window['Transform'](target,true);
      new window['AlloyTouch']({
        touch: box,
        vertical: false,
        target: target,
        property: 'translateX',
        initialValue: 0,
        max: 0,
        min: -29999,
        change: (value)=>{
          console.log(value)
        }
      })
    });
  }

}
