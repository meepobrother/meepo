import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";

import { CoreUtilService } from '../../meepo-core/core-util.service';

@Component({
  selector: 'suyun-xinyu-chong',
  templateUrl: './xinyu-chong.component.html',
  styleUrls: ['./xinyu-chong.component.scss']
})
export class XinyuChongComponent implements OnInit {
  items: any[] = []
  tabs: any[] = []

  createOrder: boolean = false;
  post: any = {
    money: 0,
    value: 0,
    action: 'runner.xinyu',
    goods: '信誉充值'
  }
  itemsTap: any = []

  info: any = {}
  constructor(
    public core: CoreUtilService,
    public router: Router,
    public util: RunnerUtilService
  ) {

    this.itemsTap = [
      {
        title: '开发测试',
        desc: '0.01元',
        value: 100,
        money: 0.01,
        active: true,
        tag: ''
      },
      {
        title: '送60',
        desc: '30元',
        value: 60,
        money: 30,
        active: false,
        tag: ''
      },
      {
        title: '送240',
        desc: '120元',
        value: 240,
        money: 120,
        active: false,
        tag: '推荐'
      }
    ]
  }

  initItemsTap(){
    this.core.post('setting.get',{code: 'setting.home.xinyu.chong'}).subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: 'setting.home.xinyu.chong',data: this.itemsTap}).subscribe(res=>{})
      }else{
        this.itemsTap = res.info;
        this.itemsTap.map(res=>{
          if(res.active){
            this.post['money'] = res.money;
            this.post['value'] = res.value;
            this.post['goods'] = res.title;
          }
        })
      }
    })
  }

  onItem(e: any){
    this.post['money'] = e.money;
    this.post['value'] = e.value;
    this.post['goods'] = e.title;
  }

  onPaySuccess(){
    this.createOrder = false;
    this.router.navigate(['/runner/home/index'])
  }

  ngOnInit() {
    this.search(0)
    this.getInfo()
    this.initItemsTap();
    this.util.hideFooter()
  }

  getInfo(){
    this.core.post('member.info',{}).subscribe(res=>{
      this.info = res.info;
    })
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
    // this.paylog.search({start: start,len: 20,status: status,action: 'logs'}).subscribe(res=>{
    //   this.items = res.info;
    // })
  }

  pay(){
    this.createOrder = true;
    this.post['total'] = Number(this.post['money']);
    setTimeout(()=>{
      this.createOrder = false;
    },2000)
  }

  goDetail(e: any){
    if(e.type == 0 || e.type == 1){
      this.router.navigate(['/runner','song','detail',e.tasks_id])
    }
    if(e.type == 2 || e.type == 3){
      this.router.navigate(['/runner','buy','detail',e.tasks_id])
    }
    if(e.type == 4 || e.type == 5){
      this.router.navigate(['/runner','help','detail',e.tasks_id])
    }
  }

}
