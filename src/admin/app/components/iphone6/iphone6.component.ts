import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'iphone6',
  templateUrl: './iphone6.component.html',
  styleUrls: ['./iphone6.component.scss']
})
export class Iphone6Component implements OnInit {

  constructor(
      private ele: ElementRef,
      private render: Renderer2
  ) {
    this.render.setStyle(this.ele.nativeElement,'display','inline-block')

  }

  ngOnInit() {
  }

}
