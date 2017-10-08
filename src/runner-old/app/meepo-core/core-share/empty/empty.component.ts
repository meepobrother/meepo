import {Component, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';
// import {routeAnim} from "../../core-animates/router.anim";
import {CorePageComponent} from "../core-page/core-page.component";

@Component({
  selector: 'suyun-core-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent extends CorePageComponent implements OnInit {
  config: any = {
    title: '您访问的功能正在开发中',
    desc: '技术小哥正在拼命加班,ING,感谢您的关注!',
    footer: {
      title: '底部链接文本',
      desc: 'Copyright © 2008-2016 weui.io',
      link: ['/core/test']
    }
  }

  items: any[] = []
  constructor(
      public ele: ElementRef,
      public render: Renderer2
  ) {
    super(ele,render)
    this.items = [
      {
        title: '测试',
        active: true
      },
      {
        title: '测试'
      },
      {
        title: '测试'
      }
    ]
  }

  ngOnInit() {
  }

  onInitDialog(e: any){
    e.show()
  }

}
