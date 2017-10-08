import {Component, Directive, OnInit} from '@angular/core';

@Directive({
  selector: '[alloy-lever],alloy-lever'
})
export class LeverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.lever()
  }

  lever(){
    window['requirejs']([
      window['module_url']+"assets/bower_components/alloylever/alloy-lever.js"
    ],(AlloyLever)=>{
      AlloyLever.config({
        cdn:'http://s.url.cn/qqun/qun/qqweb/m/qun/confession/js/vconsole.min.js',
        reportUrl: "http://a.qq.com",
        reportPrefix: 'qun',
        reportKey: 'msg',
        otherReport: {
          uin: 491862102
        }
      })
    })
  }

}
