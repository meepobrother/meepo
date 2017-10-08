import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'core-scroll',
  templateUrl: './core-scroll.component.html',
  styleUrls: ['./core-scroll.component.scss']
})
export class CoreScrollComponent implements OnInit {
  @ViewChild('scroller') scroller: ElementRef
  @ViewChild('wraper') wraper: ElementRef
  @ViewChild('list') list: ElementRef

  @Input() top: string = '0px';

  @Output() onMore: EventEmitter<any> = new EventEmitter()

  _offset: number = 0;
  @Input()
  set offset(val: number){
    this.getOffset();
    console.log(this.alloyTouch)
  }

  getOffset(){
    this._offset = this.list.nativeElement.clientHeight;
    if(this._offset > window.innerHeight){
      console.log(this._offset)
      console.log(window.innerHeight)
      this.min =  - this._offset + window.innerHeight - 150;
    }else{
      this.min = -300;
    }

    if(this.alloyTouch){
      this.alloyTouch.min = this.min;
    }
  }

  @Output() onInit: EventEmitter<any> = new EventEmitter()

  @Input() reset(val: boolean){
    if(val){
      this.init()
    }
  }

  @Input() height: number = 55;
  constructor() { }
  showLoading: boolean = true;
  ngAfterViewInit(){
    setTimeout(()=>{
      this.init();
      this.showLoading = false;
    },1000)
  }

  ngOnInit() {
    this.onInit.emit(this)
  }

  min: number = 0;

  goTop(){
    this.alloyTouch.to(0)
  }

  goBottom(){
    this.getOffset()
    this.alloyTouch && this.alloyTouch.to(this.min + 50)
  }

  alloyTouch: any;
  init(){
    window['requirejs']([
      window['module_url'] + "./assets/bower_components/alloytouch/alloy_touch.js",
      window['module_url'] + "./assets/bower_components/alloytouch/transformjs/transform.js",
    ],()=>{
      let box = this.wraper.nativeElement;
      let target = this.scroller.nativeElement;
      let height = target.clientHeight;
      this.getOffset()
      let myHeight = Math.abs(this.min)
      window['Transform'](target,true);
      this.alloyTouch = new window['AlloyTouch']({
        touch: box,
        vertical: true,
        target: target,
        property: 'translateY',
        initialValue: 0,
        max: 0,
        min: this.min,
        change: (value)=>{
          value=Math.abs(value);
          if(value >= myHeight){
            this.onMore.emit('more')
          }
        }
      })

      this.onInit.emit(this)
    })
  }

}
