import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'alloy-iselect-infinite',
  templateUrl: './iselect-infinite.component.html',
  styleUrls: ['./iselect-infinite.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IselectInfiniteComponent implements OnInit {
  _options: any[] = []
  @Input() 
  set options(val: any){
     this._options = val;
     this.init();
  }
  @Input() selectedIndex: number = 0;

  @Output() onChange: EventEmitter<any> = new EventEmitter()
  @Output() onComplete: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    // this.init()
  }

  init(){
    window['requirejs']([
      window['module_url']+"assets/bower_components/alloytouch/alloy_touch.js",
      window['module_url']+"assets/bower_components/alloytouch/transformjs/transform.js",
      window['module_url']+"assets/bower_components/alloytouch/select/infinite/alloy_touch.select.infinite.js"
    ],()=>{
      var iselect = new window['AlloyTouch'].Select({
        options: this._options,
        selectedIndex: this.selectedIndex,
        change: (item, index)=>{
          this.onChange.emit({item: item,index: index})
        },
        complete: (item, index)=>{
          this.onComplete.emit({item: item,index: index})
        }
      })

      iselect.show();
    })
  }

}
