import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {getMyLocation, saveMyLocation} from "../../../imeepos/rxjs/src/location";
import {RunnerUtilService} from "../../../runner-components/runner-util.service";
import {eventSourceObser} from "../../../imeepos/rxjs/src/event-source";
import {CoreUtilService} from "../../core-util.service";
import {Router} from "@angular/router";
import {CorePageComponent} from "../../core-share/core-page/core-page.component";

@Component({
  selector: 'app-core-map',
  templateUrl: './core-map.component.html',
  styleUrls: ['./core-map.component.scss']
})
export class CoreMapComponent extends CorePageComponent implements OnInit {
  myAddress: any;
  mineAddress: any;
  mineCity: any;
  mineDistrict: any;
  animate: string = '';

  btnTitle: string = '呼叫';
  constructor(
    public util: RunnerUtilService,
    public core: CoreUtilService,
    public router: Router,
    public ele: ElementRef,
    public render: Renderer2
  ) {
    super(ele,render);
    let qq = window['qq'];
    this.geocoder = new qq.maps.Geocoder();
    this.geocoder.setComplete((res)=>{
      this.myAddress = res.detail;
      this.mineAddress = this.myAddress.address;
      this.mineCity = this.myAddress.addressComponents.city;
      this.mineDistrict = this.myAddress.addressComponents.district;
      this.showMap = true;
    });
  }

  onEditSuccess(e: any){
    console.log(e);
    this.btnTitle = e;
    this.core.post('setting.save',{code: 'core.map.setting',data: this.btnTitle}).subscribe(res=>{})
  }

  getConfig(){
    this.core.post('setting.get',{code: 'core.map.setting'}).subscribe(res=>{
      if(res.code == 1){
        this.btnTitle = res.info;
      }
    })
  }
  myCenter: any;
  map: any;
  geocoder: any;
  timer: any;
  showLoaction: boolean = false;
  ngOnInit() {
    getMyLocation().subscribe(res=>{
      if(res){
        this.initMap(res)
      }else{
        this.showLoaction = true;
      }
    })
    this.util.hideFooter();
    this.getConfig();
  }

  onLocation(e: any){
    saveMyLocation(e).subscribe(res=>{
      if(res){
        this.initMap(res)
      }
    })
  }

  initMap(res){
    let qq = window['qq']
    this.myCenter = new qq.maps.LatLng(res.lat,res.lng);
    this.geocoder.getAddress(this.myCenter)
    this.map = new qq.maps.Map(document.getElementById("map"), {
      center: this.myCenter,
      zoom:17,
      disableDefaultUI: true
    });
    qq.maps.event.addListener(this.map, 'center_changed', ()=>{
      this.myCenter = this.map.getCenter()
      this.geocoder.getAddress(this.myCenter)
    });
    this.initRunner();
    this.timer = setInterval(()=>{
      this.doAnimate()
    },1000)
    this.util.addTimer(this.timer)
  }

  doAnimate(){
    this.animate = '';
    setTimeout(()=>{
      this.animate = 'rubberBand'
    },500)
  }

  runners: any[] = []
  initRunner(){
    let url = this.core.createSocket('runner.getNearBy','imeepos_runner');
    getMyLocation().subscribe(res=>{
      eventSourceObser(url+`&lat=${res.lat}&lng=${res.lng}`).subscribe(res=>{
        this.runners = res.info;
        console.log(this.runners)
        this.createCluster();
      })
    })
  }
  markers: any[] = [];
  createCluster(){
    let qq = window['qq'];
    this.runners.map((res,key)=>{
      let latLng = new qq.maps.LatLng(res.lat,res.lng)
      let decoration = new qq.maps.MarkerDecoration(key,new qq.maps.Point(0,-5))
      var marker = new qq.maps.Marker({
        'position': latLng,
        map: this.map,
        title: 'meepo-runner'
      });

      var anchor = new qq.maps.Point(0, 39),
        size = new qq.maps.Size(68, 68),
        origin = new qq.maps.Point(0, 0),
        icon = new qq.maps.MarkerImage(
          window['module_url']+'assets/images/map/bike_marker.png',
          size,
          origin,
          anchor
        );
      marker.setIcon(icon);
      this.markers.push(marker);
    })

    console.log(this.markers)

    let markerClusterer = new qq.maps.MarkerCluster({
      map: this.map,
      minimumClusterSize: 2, //默认2
      markers: this.markers,
      zoomOnClick: true, //默认为true
      gridSize: 30, //默认60
      averageCenter: true, //默认false
      maxZoom: 18, //默认18
    });
  }

  ngOnDestroy(){
    window['sources'].map(res=>{
      res.close();
      res = null;
    })
    this.util.clearTimer()
  }

  showMap: boolean = false;
  postRedpack(){

  }

  doPost(){
    this.router.navigate(['/core/post'],{queryParams: {lat: this.myCenter.lat,lng: this.myCenter.lng, address: this.mineAddress, city: this.mineCity,district: this.mineDistrict}})
  }

}
