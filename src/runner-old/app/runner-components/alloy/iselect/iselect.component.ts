import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[alloy-iselect],alloy-iselect',
  templateUrl: './iselect.component.html',
  styleUrls: ['./iselect.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IselectComponent implements OnInit {
  @Input() options: any = [
    { value: "all", text: "累计" },
    { value: "2015-9", text: "2015年9月" },
    { value: "2015-8", text: "2015年8月" },
    { value: "2015-7", text: "2015年7月" },
    { value: "2015-6", text: "2015年6月" },
    { value: "2015-5", text: "2015年5月" },
    { value: "2015-4", text: "2015年4月" },
    { value: "2015-3", text: "2015年3月" },
    { value: "2015-2", text: "2015年2月" },
    { value: "2015-1", text: "2015年1月" },
    { value: "2014-12", text: "2014年12月" },
    { value: "2014-11", text: "2014年11月" },
    { value: "2014-10", text: "2014年10月" }
  ]

  @Input() selectedIndex: number = 0;

  @Output() onChange: EventEmitter<any> = new EventEmitter()
  @Output() onComplete: EventEmitter<any> = new EventEmitter()

  @Output() onInit: EventEmitter<any> = new EventEmitter()


  _doShow: boolean;
  @Input()
  get doShow(){
    return this._doShow
  }
  set doShow(val: boolean){
    this._doShow = val;
    if(val){
      if(this.iselect){
        this.show()
        this._doShow = false;
      }
    }
  }

  iselect: any;
  constructor() { }

  ngOnInit() {
    this.init()
  }

  show(){
    this.iselect.show();
  }

  hide(){
    this.iselect.hide();
  }

  init(){
    window['requirejs']([
      window['module_url']+"assets/bower_components/alloytouch/alloy_touch.js",
      window['module_url']+"assets/bower_components/alloytouch/alloy_touch.button.js",
      window['module_url']+"assets/bower_components/alloytouch/transformjs/transform.js",
      window['module_url']+"assets/bower_components/alloytouch/select/simple/alloy_touch.select.js",
    ],()=>{
      this.iselect = new window['AlloyTouch'].Select({
        options: this.options,
        selectedIndex: this.selectedIndex,
        change:(item, index)=>{
          this.onChange.emit({item: item,index:index})
        },
        complete:(item, index)=>{
          this.onComplete.emit({item: item,index: index})
        }
      });

      this.onInit.emit(this.iselect);

    })
  }

}
