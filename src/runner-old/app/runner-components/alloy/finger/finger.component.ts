import {Component, Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[alloy-finger],alloy-finger',
})
export class FingerComponent implements OnInit {
  fingerCtrl: any;

  @Output() onRotate: EventEmitter<any> = new EventEmitter()
  @Output() onPinch: EventEmitter<any> = new EventEmitter()
  @Output() onPressMove: EventEmitter<any> = new EventEmitter()
  @Output() onSwipe: EventEmitter<any> = new EventEmitter()
  @Output() onSingleTap: EventEmitter<any> = new EventEmitter()
  @Output() onLongTap: EventEmitter<any> = new EventEmitter()
  @Output() onDoubleTap: EventEmitter<any> = new EventEmitter()
  @Output() onTap: EventEmitter<any> = new EventEmitter()
  @Output() onMultipointEnd: EventEmitter<any> = new EventEmitter()
  @Output() onMultipointStart: EventEmitter<any> = new EventEmitter()
  @Output() onTouchCancel: EventEmitter<any> = new EventEmitter()
  @Output() onTouchEnd: EventEmitter<any> = new EventEmitter()
  @Output() onTouchMove: EventEmitter<any> = new EventEmitter()
  @Output() onTouchStart: EventEmitter<any> = new EventEmitter()


  constructor(
    public ele: ElementRef
  ) { }

  ngOnInit() {
    this.finger()
  }

  finger(){
    window['requirejs']([
      window['module_url']+"assets/bower_components/alloyfinger/alloy_finger.js"
    ],()=>{
      this.fingerCtrl = new window['AlloyFinger'](this.ele.nativeElement, {
        touchStart: (evt)=>{
          this.onTouchStart.emit(evt)
        },
        touchMove: (evt)=>{
          this.onTouchMove.emit(evt)
        },
        touchEnd: (evt)=>{
          this.onTouchEnd.emit(evt)
        },
        touchCancel: (evt)=>{
          this.onTouchCancel.emit(evt)
        },
        multipointStart: (evt)=>{
          this.onMultipointStart.emit(evt)
        },
        multipointEnd: (evt)=>{
          this.onMultipointEnd.emit(evt)
        },
        tap: (evt)=>{
          this.onTap.emit(evt)
        },
        doubleTap: (evt)=>{
          this.onDoubleTap.emit(evt);
        },
        longTap: (evt)=>{
          this.onLongTap.emit(evt);
        },
        singleTap: (evt)=>{
          this.onSingleTap.emit(evt);
        },
        rotate: (evt)=>{
          this.onRotate.emit(evt)
        },
        pinch: (evt)=> {
          this.onPinch.emit(evt)
        },
        pressMove: (evt)=>{
          this.onPressMove.emit(evt)
        },
        swipe: (evt)=>{
          this.onSwipe.emit(evt);
        }
      });
    });
  }
}
