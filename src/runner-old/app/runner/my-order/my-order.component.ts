import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";

@Component({
  selector: 'suyun-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {
  // @HostBinding('@routeState') routeState;
  tabs: any[] = []
  status: number = 0;
  constructor(
    public core: CoreUtilService,
    public router: Router,
    public util: RunnerUtilService,
    public route: ActivatedRoute
  ) {
    this.tabs = [
      {
        title: '全部',
        active: true,
        status: 0
      },
      {
        title: '待接单',
        active: false,
        status: 1
      },
      {
        title: '配送中',
        active: false,
        status: 2
      },
      {
        title: '待确认',
        active: false,
        status: 3
      },
      {
        title: '确认送达',
        active: false,
        status: 4
      },
      {
        title: '已撤销',
        active: false,
        status: 6
      }
    ];
  }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.status = res.status;
      if(this.status){
        this.tabs.map(r=>{
          if(r.status == this.status){
            r.active = true;
            this.getTasks(this.status)
          }else{
            r.active = false;
          }
        })
      }else{
        this.getTasks(0)
      }
    })
    this.util.showFooter()
  }

  tasks: any[] = []
  onTab(e: any){
    this.core.post('task.getAll',{start: 0,len: 20,status: e.status}).subscribe(res=>{
      if(res.info){
        this.tasks = res.info;
      }else{
        this.tasks = [];
      }
    })
  }

  goDetail(e: any){
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

  getTasks(start: number){
    this.core.post('task.getAll',{start: start,len: 20}).subscribe(res=>{
      if(res.info){
        this.tasks = res.info;
      }else{
        this.tasks = [];
      }
    })
  }
}
