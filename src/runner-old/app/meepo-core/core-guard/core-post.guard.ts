import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";

declare const require;
let store = require('store');

@Injectable()
export class CorePostGuard implements Resolve<any> {
  advs: any[] = [{title: '测试',image:'',link: []}]
  items:any[] = [
    {
      title: '帮我买',
      icon: '../addons/imeepos_runner/template/mobile/assets/images/buy.png',
      link: ['/buy/post']
    },
    {
      title: '帮我送',
      icon: '../addons/imeepos_runner/template/mobile/assets/images/song.png',
      link: ['/song/text']
    },
    {
      title: '帮帮忙',
      icon: '../addons/imeepos_runner/template/mobile/assets/images/help.png',
      link: ['/help/post']
    }
  ]
  constructor(
      public core: CoreUtilService,
      public util: RunnerUtilService
  ){

  }

  initGrids(r: any){
    this.core.post('setting.get',{code: 'setting.post.index.grids'}).subscribe(res => {
      if (res.code == 0) {
        this.core.post('setting.save',{code: 'setting.post.index.grids', data: this.items}).subscribe(res => {
        })
        store.set('setting.post.index.grids',this.items);
        r.next(this.items)
        r.complete()
      } else {
        store.set('setting.post.index.grids',res.info);
        r.next(res.info)
        r.complete()
      }
    })
  }

  initAdvs(r: any){
    this.core.post('setting.get',{code: 'index.advs'}).subscribe(res => {
      if (res.code == 0) {
        this.core.post('setting.save',{code: 'index.advs', data: this.advs}).subscribe(res => {
        })
        store.set('index.advs',this.advs)
        r.next(this.advs)
        r.complete()
      } else {
        store.set('index.advs',res.info)
        r.next(res.info)
        r.complete()
      }
    })
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let grids = Observable.create(r=> {
      this.util.checkVersion().subscribe(res=>{
        if(res){
          let data = store.get('setting.post.index.grids')
          if(data){
            r.next(data)
            r.complete()
          }else{
            this.initGrids(r)
          }
        }else{
          this.initGrids(r)
        }
      })
    });

    let advs = Observable.create(r=>{
      this.util.checkVersion().subscribe(res=>{
        if(res){
          let data = store.get('index.advs')
          if(data){
            r.next(data)
            r.complete()
          }else{
            this.initAdvs(r)
          }
        }else{
          this.initAdvs(r)
        }
      })
    })

    return {grids: grids,advs: advs}
  }
}
