import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {Router} from "@angular/router";
declare const require;
let store = require('store');

@Component({
  selector: 'suyun-mredpack-map',
  templateUrl: './mredpack-map.component.html',
  styleUrls: ['./mredpack-map.component.scss']
})
export class MredpackMapComponent implements OnInit {
  showLoaction: boolean = false;
  animate: string = '';
  constructor(
      public util: RunnerUtilService,
      public router: Router
  ) {

  }

  onLocation(e: any){
    if(e){
      if(e['lat']){
        store.set('mylocation',e)
        let mylocation = e;
        this.initMap(mylocation)
      }
    }
  }
  timer: any;
  ngOnInit() {
    let mylocation = store.get('mylocation');
    if(mylocation){
      this.showLoaction = true;
    }else{
      this.initMap(mylocation)
    }
    this.timer = setInterval(()=>{
      this.doAnimate()
    },1000)
    this.util.addTimer(this.timer)
  }

  ngOnDestroy(){
    this.util.clearTimer()
  }

  post(){
    this.router.navigate(['/mredpack/post'])
  }

  doAnimate(){
    this.animate = '';
    setTimeout(()=>{
      this.animate = 'rubberBand'
    },500)
  }
  map: any;
  myCenter: any;
  initMap(location: any){
    let qq = window['qq']
    this.myCenter = new qq.maps.LatLng(location.lat,location.lng);
    this.map = new qq.maps.Map(document.getElementById("map"), {
      center: this.myCenter,
      zoom:16,
      disableDefaultUI: true
    });

  }

}
