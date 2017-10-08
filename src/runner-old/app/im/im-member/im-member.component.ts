import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";
declare const require;
let store = require('store');
@Component({
  selector: 'suyun-im-member',
  templateUrl: './im-member.component.html',
  styleUrls: ['./im-member.component.scss']
})
export class ImMemberComponent implements OnInit {
  // @HostBinding('@routeState') routeState;
  items: any[] = []

  showLocation: boolean = false;
  constructor(
      public core: CoreUtilService,
      public router: Router,
      public util: RunnerUtilService
  ) {
    this.items = []
  }
  loading: boolean = false;
  ngOnInit() {
    let mylocation = store.get('mylocation');
    if(mylocation){
      this.showLocation = false;
      this.getNearBy(mylocation.lat,mylocation.lng)
    }else{
      this.showLocation = true;
    }
    this.util.showFooter()

    window.onscroll = (evt)=>{
      this.loading ? '' : this.onscroll(evt)
    }
  }

  onscroll(evt: any){
    let innerHeight = window.innerHeight
    let scrollTop = document.body.scrollTop
    let scrollHeiht = document.body.scrollHeight
    if(scrollHeiht - innerHeight - scrollTop < 80){
      let mylocation = store.get('mylocation')
      this.loading = true;
      this.getNearBy(mylocation.lat,mylocation.lng)
    }
  }

  onItem(e: any){
    this.router.navigate(['/im/log/',e.openid])
  }

  onLocation(e: any){
    if(e){
      if(e['lat']){
        store.set('mylocation',e)
        this.getNearBy(e.lat,e.lng)
        this.core.post('runner.uploadLocation',{lat: e.lat,lng: e.lng}).subscribe(res=>{})
      }
    }
  }
  totalMemberNum: number = 0;
  totalRunnerNum: number = 0;
  getNearBy(lat: string,lng: string){

    let start = this.items.length;
    let startPoint = new window['qq'].maps.LatLng(lat, lng);
    this.core.post('member.list',{lat: lat,lng: lng,start: start,len: 10}).subscribe(res=>{
      let info = res.info;
      this.totalMemberNum = info.totalMemberNum;
      this.totalRunnerNum = info.totalRunnerNum;
      //计算距离
      let list = info.list;
      list.map(res=>{
        let end = new window['qq'].maps.LatLng(res.lat, res.lng);
        res['len'] = window['qq'].maps.geometry.spherical.computeDistanceBetween(startPoint, end);
        res['len'] = (Number(res['len']) / 1000).toFixed(2);
        res['desc'] = '距离您:'+res['len']+'km';
      })
      if(res.code == 1){
        if(start>0){
          this.items = this.items.concat(list)
        }else{
          this.items = list;
        }
      }
      this.loading = false;
    })
  }

}
