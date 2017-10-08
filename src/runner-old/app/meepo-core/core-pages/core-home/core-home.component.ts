import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CorePageComponent} from "../../core-share/core-page/core-page.component";
// import {routeAnim} from "../../core-animates/router.anim";

@Component({
  selector: 'suyun-core-home',
  templateUrl: './core-home.component.html',
  styleUrls: ['./core-home.component.scss']
})
export class CoreHomeComponent extends CorePageComponent implements OnInit  {
  constructor(
      public ele: ElementRef,
      public render: Renderer2
  ) {
    super(ele,render)
  }
  ngOnInit() {
  }

}
