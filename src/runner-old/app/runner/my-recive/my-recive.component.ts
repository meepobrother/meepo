import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
// import {routeAnim} from "../../meepo-core/core-animates/router.anim";
@Component({
  selector: 'suyun-my-recive',
  templateUrl: './my-recive.component.html',
  styleUrls: ['./my-recive.component.scss']
})
export class MyReciveComponent implements OnInit {
  // @HostBinding('@routeState') routeState;
  tasks: any[] = [];
  tabs: any[] = []
  constructor(
    public core: CoreUtilService,
    public router: Router,
    public util: RunnerUtilService
  ) {
    this.tabs = [
      {
        title: '全部',
        active: true,
        status: 0
      },
      {
        title: '进行中',
        active: false,
        status: 2
      },
      {
        title: '待确认',
        active: false,
        status: 3
      },
      {
        title: '已确认',
        active: false,
        status: 4
      },
      {
        title: '已结款',
        active: false,
        status: 5
      }
    ];

  }

  ngOnInit() {
    this.onTab({
      title: '全部',
      active: true,
      status: 0
    })
    this.util.showFooter()
  }

  onTab(e: any){
    this.core.post('task.getAll',{start: 0,len: 20,status: e.status,recive: 1}).subscribe(res=>{
      if(res.info){
        this.tasks = res.info;
      }else{
        this.tasks = [];
      }
    })
  }

  goDetail(e: any){
    if(e.status >= 4){
      weui.toast('此订单已完!');
      return true;
    }
    if(e.type == 0 || e.type == 1){
      this.router.navigate(['/runner/song/detail',e.id])
    }
    if(e.type == 2 || e.type == 3){
      this.router.navigate(['/runner/buy/detail',e.id])
    }
    if(e.type == 4 || e.type   == 5){
      this.router.navigate(['/runner/help/detail',e.id])
    }
  }
}
