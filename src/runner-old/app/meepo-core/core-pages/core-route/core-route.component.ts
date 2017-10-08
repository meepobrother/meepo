import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../../runner-components/runner-util.service";
import { CoreUtilService } from '../../core-util.service';
declare const require;
let store = require('store');

import { Store } from '@ngrx/store';
import * as actions from '../../../redux/footer/action';
import { footerSelector } from '../../../redux/';

@Component({
  selector: 'suyun-core-route',
  templateUrl: './core-route.component.html',
  styleUrls: ['./core-route.component.scss']
})
export class CoreRouteComponent implements OnInit {
  showTemplate: boolean = false;
  items: any[] = []
  updateLocation: boolean = false;

  footer$: any;
  constructor(
      public util: RunnerUtilService,
      public core: CoreUtilService,
      public store$: Store<any>
  ) { 
    this.footer$ = this.store$.select(footerSelector);
    this.footer$.subscribe(res=>{
      console.log(res);
    });
  }

  ngOnInit() {
    this.store$.dispatch(new actions.InitAction('index.footer.setting'));
    this.wechatLocation();
    let mylocation = store.get('mylocation')
    if(mylocation){
      this.updateLocation = false;
    }else{
      this.updateLocation = true;
    }
  }

  onLocation(e: any){
    if(e){
      if(e['lat']){
        this.outoUploadLocation(e.lat,e.lng,'html5定位')
        store.set('mylocation',e)
      }
    }
  }

  wechatLocation(){
    let wx = window['wx'];
    wx.ready(()=>{
      wx.getLocation({
        type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success:  (res)=>{
          this.onLocation({lat: res.latitude,lng: res.longitude})
          this.outoUploadLocation(res.latitude,res.longitude,'微信定位')
        }
      });
    })
  }

  lastLocation: any;
  outoUploadLocation(lat: any,lng: any,desc: string){
    this.core.post('runner.uploadLocation',{lat: lat,lng: lng,desc: desc}).subscribe(res=>{
      this.lastLocation = res.info;
      this.updateLocation = false;
    })
  }

  openThemes(){
    this.showTemplate = !this.showTemplate;
  }

}
