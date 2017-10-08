import {Component, HostBinding, OnInit} from '@angular/core';
// import {MemberService, RunnerService} from "services-components";
import {Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import { CoreUtilService } from '../../meepo-core/core-util.service';
// import {routeAnim} from "../../meepo-core/core-animates/router.anim";
declare const require;
let store = require('store');

@Component({
  selector: 'suyun-im-friend',
  templateUrl: './im-friend.component.html',
  styleUrls: ['./im-friend.component.scss']
})
export class ImFriendComponent implements OnInit {
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

  ngOnInit() {
    let mylocation = store.get('mylocation');
    if(mylocation){
      this.showLocation = false;
      this.getNearBy(mylocation.lat,mylocation.lng)
    }else{
      this.showLocation = true;
    }
    this.util.showFooter()
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

  getNearBy(lat: string,lng: string){
    let start = this.items.length;
    let startPoint = new window['qq'].maps.LatLng(lat, lng);
    this.core.post('runner.getNearBy',{lat: lat,lng: lng,start: start,len: 10}).subscribe(res=>{
      if(res.code == 1){
        //计算距离
        let list = res.info;
        list.map(res=>{
          let end = new window['qq'].maps.LatLng(res.lat, res.lng);
          res['len'] = window['qq'].maps.geometry.spherical.computeDistanceBetween(startPoint, end);
          res['len'] = (Number(res['len']) / 1000).toFixed(2);
          res['desc'] = '距离您:'+res['len']+'km';
        })
        if(start>0){
          this.items = this.items.concat(list)
        }else{
          this.items = list;
        }
      }
    })
  }

}
