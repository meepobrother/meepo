import {Component, HostBinding, OnInit} from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {routeAnim} from "../../meepo-core/core-animates/router.anim";

@Component({
  selector: 'suyun-coach-teacher-index',
  templateUrl: './coach-teacher-index.component.html',
  styleUrls: ['./coach-teacher-index.component.scss'],
  animations: [
      routeAnim
  ]
})
export class CoachTeacherIndexComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  items: any[] = []
  constructor(
      public util: RunnerUtilService
  ) {
    this.items = [
      {
        title: '我的课程',
        link: ['/coach/mylesson'],
        icon: window['module_url']+'assets/images/coach/mylesson.png'
      },
      {
        title: '我的预约',
        link: ['/coach/log'],
        icon: window['module_url']+'assets/images/coach/myitems.png'
      },
      {
        title: '预约我的',
        link: ['/coach/mylog'],
        icon: window['module_url']+'assets/images/coach/mycoach.png'
      },
      {
        title: '我的信息',
        link: ['/coach/myinfo'],
        icon: window['module_url']+'assets/images/coach/myinfo.png'
      }
    ]
  }

  ngOnInit() {
    this.util.showFooter()
  }

}
