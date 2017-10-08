import {Component, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';
import {routeAnim} from "../../core-animates/router.anim";

@Component({
  selector: 'core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.scss']
})
export class CorePageComponent {
  // @HostBinding('@routeState') routeState;
  constructor(
      public ele: ElementRef,
      public render: Renderer2
  ) {
    // this.render.setStyle(this.ele.nativeElement,'position','fixed')
    // this.render.setStyle(this.ele.nativeElement,'background','#f5f5f5')
    // this.render.setStyle(this.ele.nativeElement,'z-index','99')
    // this.render.setStyle(this.ele.nativeElement,'width','100%')
    // this.render.setStyle(this.ele.nativeElement,'top','0px')
    // this.render.setStyle(this.ele.nativeElement,'bottom','0px')
    // this.render.setStyle(this.ele.nativeElement,'left','0px')
    // this.render.setStyle(this.ele.nativeElement,'right','0px')
    // this.render.setStyle(this.ele.nativeElement,'overflow','hidden')
    // this.render.setStyle(this.ele.nativeElement,'box-shadow','-1px 3px 20px 0px rgba(155, 143, 143, 0.6)')
  }
}
