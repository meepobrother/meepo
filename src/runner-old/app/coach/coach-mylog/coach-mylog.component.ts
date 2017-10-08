import {Component, HostBinding, OnInit} from '@angular/core';
import {CoachLogService} from "services-components/src/app/coach-services/coach-log.service";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {routeAnim} from "../../meepo-core/core-animates/router.anim";

@Component({
  selector: 'suyun-coach-mylog',
  templateUrl: './coach-mylog.component.html',
  styleUrls: ['./coach-mylog.component.scss'],
  animations: [
      routeAnim
  ]
})
export class CoachMylogComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  tabs: any[] = []
  items: any[] = []
  constructor(
      public log: CoachLogService,
      public util: RunnerUtilService
  ) {
    this.tabs = [
      {
        title: '课程',
        active: true,
        type: 3
      },
      {
        title: '私教',
        type: 2
      }
    ]
  }

  ngOnInit() {
    this.util.showFooter()
  }
  type: number = 3;
  getList(start: number){
    this.log.getDay({start: start,len: 20,action: 'log.my',type: this.type,day: this.day}).subscribe(res=>{
      if(res.code == 1){
        this.items = res.info;
      }
    })
  }

  onTab(e: any){
    this.type = e.type
    this.getList(0)
  }
  day: string = '';
  onDaySelect(e: any){
    this.day = e.value;
    this.getList(0)
  }

  _onClick(e: any){

  }
}
