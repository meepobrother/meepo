import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'zan-popup',
  templateUrl: './zan-popup.component.html',
  styleUrls: ['./zan-popup.component.scss']
})
export class ZanPopupComponent implements OnInit {
  classname: string = 'van-popup--bottom';
  @Input()
  set duration(val: string){
    this.classname = 'van-popup--'+val;
  }

  @Output() onClose: EventEmitter<any> = new EventEmitter()

  constructor(
      public ele: ElementRef,
      public render: Renderer2
  ) {
    this.render.setStyle(this.ele.nativeElement,'z-index','9999 ')
  }

  ngOnInit() {
  }

  onBg(){
    this.onClose.emit('')
  }

}
