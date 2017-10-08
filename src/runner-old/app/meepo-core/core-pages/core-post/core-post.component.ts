import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {RunnerUtilService} from "../../../runner-components/runner-util.service";
import {CorePageComponent} from "../../core-share/core-page/core-page.component";
import {Observable} from "rxjs/Observable";
import {CoreUtilService} from "../../core-util.service";
import {eventSourceObser} from "../../../imeepos/rxjs/src/event-source";
import {ActivatedRoute} from "@angular/router";


import * as store from 'store';

@Component({
  selector: 'suyun-core-post',
  templateUrl: './core-post.component.html',
  styleUrls: ['./core-post.component.scss']
})
export class CorePostComponent extends CorePageComponent implements OnInit {
  ngOnInit(): void {
    this.util.hideFooter()
    this.initGrids().subscribe(res=>{
      this.grids = res;
      this.grids.map(r=>{
        r.icon = window['module_url'] + r.icon;
      })
    })

    this.initMemberInfo().subscribe(res=>{
      this.myinfo = res;
      if(this.myinfo['isrunner'] == 1){
        this.myinfo['desc'] = this.myinfo['status'] == 1 ? '已实名认证,点击充值信誉' : '重新认证';
      }else{
        this.myinfo['desc'] = '立即去实名认证';
      }
      this.op = {
        label: this.myinfo['isrunner'] == 1 ? '已通过实名认证' : '去实名认证'
      }
      this.memberNavs = [
        {
          title: '我的余额',
          num: this.myinfo.credit2 ? this.myinfo.credit2 : '0'
        },
        {
          title: '我的积分',
          num: this.myinfo.credit1 ? this.myinfo.credit1 : '0'
        },
        {
          title: '我的信誉',
          num: this.myinfo.xinyu ? this.myinfo.xinyu : '0'
        }
      ]
    })

    this.route.queryParams.subscribe(res=>{
      console.log('params',res)
      if(res){
        this.end = {
          lat: res.lat,
          lng: res.lng,
          poiname: res.address
        }
      }
    })
  }

  end: any;

  source: any;

  op: any
  showMenu: boolean = false;
  grids: any[] = []
  myinfo: any;

  constructor(
      public ele: ElementRef,
      public render: Renderer2,
      public core: CoreUtilService,
      public util: RunnerUtilService,
      public route: ActivatedRoute
  ){
    super(ele,render)
    this.util.hideFooter()
  }

  onMore(){
    this.showMenu = true;
  }

  onClose(){
    this.showMenu = false;
  }

  initGrids(){
    return Observable.create(r=>{
      this.core.post('setting.get',{code: 'setting.home.grids'}).subscribe(res=>{
        if(res.code == 0){
          r.next(this.grids)
          r.complete()
        }else{
          r.next(res.info)
          r.complete()
        }
      })
    })
  }

  onRight(){

  }

  memberNavs: any[] = []

  initMemberInfo(){
    return Observable.create(r=>{
      this.core.post('member.info',{}).subscribe(res=>{
        r.next(res.info)
        r.complete()
      })
    })
  }

}
