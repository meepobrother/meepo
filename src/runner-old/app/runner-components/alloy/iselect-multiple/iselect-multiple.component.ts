import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'alloy-iselect-multiple',
  templateUrl: './iselect-multiple.component.html',
  styleUrls: ['./iselect-multiple.component.scss']
})
export class IselectMultipleComponent implements OnInit {
  _options: any[] = [];
  @Input() 
  get options(){
    return this._options
  }
  set options(val: any){
    if(this._options != val){
      this._options = val;
    }
    this.ctrl ? this.ctrl.reset() : this.init()
  }

  @Input() level: number = 2;
  @Input() selectedIndex: number[] = [0,0]

  @Output() onComplete: EventEmitter<any> = new EventEmitter()
  @Output() onChange: EventEmitter<any> = new EventEmitter()

  @Output() onInit: EventEmitter<any> = new EventEmitter()

  ctrl: any;

  constructor(
    public ele: ElementRef
  ) { }

  ngOnInit() {
    console.log('init iselect multiple');
    // this.init()
  }

  init(){
    window['requirejs']([
      window['module_url']+"assets/bower_components/alloytouch/alloy_touch.js",
      window['module_url']+"assets/bower_components/alloytouch/transformjs/transform.js",
      window['module_url']+"assets/bower_components/alloytouch/select/multiple/alloy_touch.select.multiple.js",
    ],()=>{
      console.log('options is ',this._options)
      this.ctrl = new window['AlloyTouch'].MultipleSelect({
        options: this._options,
        level: this.level,
        renderTo: this.ele.nativeElement,
        selectedIndex: this.selectedIndex,
        change: (selectedIndex, text1, text2)=>{
          this.onChange.emit({selectedIndex: selectedIndex,text1: text1,text2: text2})
        },
        complete: (selectedIndex, text1, text2)=>{
          this.ctrl.hide()
          this.onComplete.emit({selectedIndex: selectedIndex,text1: text1,text2: text2})
        }
      })
      console.log('MultipleSelect is',this.ctrl)
      this.onInit.emit(this.ctrl)
    })
  }

}
