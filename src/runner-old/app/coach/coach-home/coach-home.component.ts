import {Component, HostBinding, OnInit} from '@angular/core';
import {routeAnim} from "../../meepo-core/core-animates/router.anim";
import {CoreUtilService} from "../../meepo-core/core-util.service";
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-coach-home',
  templateUrl: './coach-home.component.html',
  styleUrls: ['./coach-home.component.scss'],
  animations: [
      routeAnim
  ]
})
export class CoachHomeComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  myinfo: any = {}
  items: any[] = []
  grids: any[] = []
  grids2: any[] = []
  constructor(
      public core: CoreUtilService,
      public util: RunnerUtilService
  ) {
    this.items = [
      {
        title: '我的预约',
        num: 0,
        link: ['/coach/log'],
        icon: window['module_url']+'assets/images/coach/coach.png',
      },
      {
        title: '预约我的',
        num: 0,
        link: ['/coach/mylog'],
        icon: window['module_url']+'assets/images/coach/coach.png',
      }
    ]

    this.grids = [
      {
        title: '我是教练',
        icon: window['module_url']+'assets/images/coach/teacher.png',
        active: true,
        link: ['/coach/teacher-join']
      }
    ]

    this.grids2 = [
      {
        title: '关于我们',
        icon: window['module_url']+'assets/images/coach/mycoach.png',
        active: true,
        link: ['/coach/shopinfo']
      }
    ]
  }

  ngOnInit() {
    this.util.showFooter();
    this.getMyinfo();
  }

  getMyinfo(){
    this.core.post('member.info',{},'imeepos_coach').subscribe(res=>{
      this.myinfo = res.info;
      this.myinfo = Object.assign({desc: '去认证老师'},this.myinfo)
    })
  }

  onRight(){

  }

}
