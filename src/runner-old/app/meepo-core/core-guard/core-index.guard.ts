import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";

@Injectable()
export class CoreIndexGuard implements Resolve<any> {
  advs: any[] = [
    {
      title: '测试链接',
      link: [],
      image: ''
    }
  ]
  tabs: any[] = []
  activeTabCode: string = '';
  navs: any[] = []

  constructor(
      public core: CoreUtilService,
      public util: RunnerUtilService
  ){
    this.tabs = this.util.config.index.tabs;
    this.navs = this.util.config.index.navs;
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return {
      advs: this.initAdvs(),
      navs: this.initNavs(),
      tabs: this.initTabs(),
      runners: this.initRunner()
    }
  }

  initRunner(){
    return Observable.create(r=>{
      this.core.post('runner.getHots',{}).subscribe(res=>{
        r.next(res.info);
        r.complete();
      })
    })
  }

  initAdvs(){
    return Observable.create(r=>{
      this.core.post('setting.get',{code: 'index.advs'}).subscribe(res=>{
        if(res.code == 1){
          r.next(res.info);
          r.complete();
        }else{
          this.core.post('setting.save',{code: 'index.advs',data: this.advs}).subscribe(res=>{});
          r.next(this.advs);
          r.complete();
        }
      });
    })
  }

  initNavs(){
    return Observable.create(r=>{
      this.core.post('setting.get',{code: 'setting.index.navs'}).subscribe(res=>{
        if(res.code == 0){
          this.core.post('setting.save',{code: 'setting.index.navs',data: this.navs}).subscribe(res=>{})
          r.next(this.navs);
          r.complete();
        }else{
          r.next(res.info);
          r.complete();
        }
      })
    })
  }

  initTabs(){
    return Observable.create(r=>{
      this.core.post('setting.get',{code: 'setting.index.feed.tab'}).subscribe(res=>{
        if(res.code == 0){
          this.core.post('setting.save',{code: 'setting.index.feed.tab',data: this.tabs}).subscribe(res=>{})
          r.next(this.tabs);
          r.complete();
        }else{
          r.next(res.info);
          r.complete();
        }
      })
    })

  }
}
