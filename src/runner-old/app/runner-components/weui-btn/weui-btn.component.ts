import {
  Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'weui-btn',
  templateUrl: './weui-btn.component.html',
  styleUrls: ['./weui-btn.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeuiBtnComponent implements OnInit {
  @Input() class: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter()
  constructor(
      public ele: ElementRef,
      public render: Renderer2
  ) {
    this.render.addClass(this.ele.nativeElement,'weui-btn')
  }

  @HostListener('click',[])
  _onClick(){
    console.log('click')
    this.onClick.emit('click')
  }

  ngOnInit() {
    this.render.addClass(this.ele.nativeElement,this.class)
  }

}
