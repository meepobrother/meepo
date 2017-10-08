import { Component, OnInit } from '@angular/core';
// import {TixianLogService} from "services-components";
import { CoreUtilService } from '../../meepo-core/core-util.service';

@Component({
  selector: 'suyun-tixian-log',
  templateUrl: './tixian-log.component.html',
  styleUrls: ['./tixian-log.component.scss']
})
export class TixianLogComponent implements OnInit {
  items: any[] = []
  constructor(
    public core: CoreUtilService
  ) {
    this.items = [
      {
        title: '已提交',
        active: true,
        status: 0
      },
      {
        title: '已处理',
        active: false,
        status: 2
      }
    ]
  }
  activeItem: any;

  ngOnInit() {
    this.items.map(res=>{
      if(res.active){
        this.activeItem = res;
      }
    })
    this.onItem(this.activeItem)
  }


  logs: any[] = []
  onItem(e: any){
    this.core.post('log.log',{status: e.status,action: 'mylog'},'imeepos_runner_plugin_tixian').subscribe(res=>{
      if(res.code == 1){
        let list = res.info;
        list.map(res=>{
          res['time'] = res.create_time;
          res['money'] = res.credit;
          res['title'] = res.message;
        })
        this.logs = list;
      }
    })
  }

}
