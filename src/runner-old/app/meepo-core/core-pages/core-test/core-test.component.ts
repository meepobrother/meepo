import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {CorePageComponent} from "../../core-share/core-page/core-page.component";
import {routeAnim} from "../../core-animates/router.anim";

@Component({
  selector: 'suyun-core-test',
  templateUrl: './core-test.component.html',
  styleUrls: ['./core-test.component.scss'],
  animations: [
    routeAnim
  ]
})
export class CoreTestComponent extends CorePageComponent implements OnInit {

  constructor(
      public ele: ElementRef,
      public render: Renderer2
  ) {
    super(ele,render)
  }

  ngOnInit() {
  }

  onLotteryInit(e: any){
    e.init('http://www.baidu.com/img/bdlogo.gif', 'image');
  }

}
