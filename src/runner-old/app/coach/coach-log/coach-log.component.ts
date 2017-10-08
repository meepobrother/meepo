import {Component, HostBinding, OnInit} from '@angular/core';
import {CoachLogService} from "services-components/src/app/coach-services/coach-log.service";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {routeAnim} from "../../meepo-core/core-animates/router.anim";
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'suyun-coach-log',
  templateUrl: './coach-log.component.html',
  styleUrls: ['./coach-log.component.scss'],
  animations: [
      routeAnim
  ]
})
export class CoachLogComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  items: any[] = []

  tabs: any[] = []
  constructor(
      public log: CoachLogService,
      public util: RunnerUtilService,
      public route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(res=>{
      console.log(res);
      let tabs = [
        {
          title: '私教',
          active: true,
          type: 2
        },
        {
          title: '器材',
          active: false,
          type: 1
        },
        {
          title: '课程',
          active: false,
          type: 3
        }
      ]
      this.type = 2;
      if(res && res.type){
        this.type = res.type;
      }
      console.log(this.type)
      tabs.map(res=>{
        res.active = false;
        if(res.type == this.type){
          res.active = true;
        }
      });

      this.tabs = tabs;

      console.log(this.tabs);
      this.getList(0);
      this.util.showFooter();
    })
    
  }

  getList(start: number){
    this.log.getDay({start: start,len: 20,action: 'my.log',type: this.type}).subscribe(res=>{
      if(res.code == 1){
        this.items = res.info;
      }
    })
  }

  trackByFn(index,item){
    return -item.create_time
  }

  _onClick(e: any){

  }
  type: number = 2;
  onTab(e: any){
    this.type = e.type
    this.getList(0)
  }

}
