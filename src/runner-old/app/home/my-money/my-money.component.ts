import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CoreUtilService } from '../../meepo-core/core-util.service';

@Component({
  selector: 'suyun-my-money',
  templateUrl: './my-money.component.html',
  styleUrls: ['./my-money.component.scss']
})
export class MyMoneyComponent implements OnInit {

  items: any[] = []
  tabs: any[] = []
  constructor(
    public core: CoreUtilService,
    public router: Router
  ) {
    this.tabs = [
      {
        title: '我的支出',
        active: false ,
        code: 'mine'
      },
      {
        title: '我的收入',
        active: true,
        code: 'logs'
      }
    ]
  }

  ngOnInit() {
    this.search(0)
  }

  onTopNav(e: any){
    if(e.code == 'mine'){
      this.getMy(0)
    }else{
      this.search(0)
    }
  }

  getMy(start:number){
    this.core.post('paylog.search',{start: start,len: 20,status: status,action: 'mine'}).subscribe(res=>{
      this.items = res.info;
    })
  }

  search(start: number){
    this.core.post('paylog.search',{start: start,len: 20,status: status,action: 'logs'}).subscribe(res=>{
      this.items = res.info;
    })
  }

  goDetail(e: any){
    if(e.type == 0 || e.type == 1){
      this.router.navigate(['/','song','detail',e.tasks_id])
    }
    if(e.type == 2 || e.type == 3){
      this.router.navigate(['/','buy','detail',e.tasks_id])
    }
    if(e.type == 4 || e.type == 5){
      this.router.navigate(['/','help','detail',e.tasks_id])
    }
  }

}
