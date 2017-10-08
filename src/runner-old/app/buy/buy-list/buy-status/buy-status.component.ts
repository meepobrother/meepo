import {Component, Input, OnInit,ElementRef,Renderer2} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

import {RunnerUtilService} from "../../../runner-components/runner-util.service";
import {CoreUtilService} from "../../../meepo-core/core-util.service";

@Component({
  selector: 'suyun-buy-status',
  templateUrl: './buy-status.component.html',
  styleUrls: ['./buy-status.component.scss']
})
export class BuyStatusComponent implements OnInit {
  title: string = '待接单';
  desc: string = '预计12:00送达';
  avatar: string = '';
  btnTitle: string = '刷新';
  status: number = 0;

  points: any[] = [];
  @Input() id: number = 0;

  qq: any = window['qq'];

  constructor(
    public dom: DomSanitizer,
    public core: CoreUtilService,
    public util: RunnerUtilService,
    public ele: ElementRef,
    public render: Renderer2
  ) { 
    this.render.setStyle(this.ele.nativeElement,'position','absolute');
  }

  ngOnInit() {
    this.getPoint();
    this.initMap();
    let wx = window['wx'];
    wx.ready(()=>{
      wx.getLocation({
        type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success:  (res)=>{
          //res.speed
          let lat = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          let lon = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          let center = new this.qq.maps.LatLng(lat, lon);
          this.map = new this.qq.maps.Map(document.getElementById('map'), {
            center: center,
            zoom: 17
          });
        }
      });
    })
  }

  map: any;
  isEmpty: boolean = true;
  total: number = 0;
  marker: any;
  initMap2(center: any){
    this.map = new this.qq.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 17
    });
    this.getPoint();
  }

  initMarker(center: any){
    this.marker= new this.qq.maps.Marker({
      position:center,
      animation:this.qq.maps.MarkerAnimation.DROP,
      map:this.map
    });
  }

  polyline: any;
  initPloyline(path1: any){
    this.polyline = new this.qq.maps.Polyline({
      path: path1,
      strokeColor: '#000000',
      strokeWeight: 5,
      editable: false,
      map: this.map
    });
    this.polyline.setStrokeDashStyle("dash");
  }
  getPoint(){
    this.core.post('task.detail',{code: 'logs',id: this.id}).subscribe(res=>{
      let info = res.info;
      let recive = res.info.recive;
      let sender = res.info.sender;
      this.status = info.status;

      this.points = info.logs;
      this.title = info.status_title;
      if(this.status == 3){
        //已完成
        this.desc = '赏金'+res.info.total+'元将在'+ (recive.update_time ? recive.update_time : '任务完成三天后') + '自动到账';
      } else{
        this.desc = info.goodsname + ' ' + (recive.songda ? '预计'+recive.songda+'送达,' : '');
        this.desc += '赏金: '+ res.info.total + '元';
      }

      this.avatar = recive.avatar ? recive.avatar : sender.avatar;
      this.total = res.info.total;
      let path1 = [];
      this.points.map(res=>{
        path1.push(new this.qq.maps.LatLng(parseFloat(res.lat), parseFloat(res.lng)))
      })
      let last = this.points[0];

      if(last){
        this.isEmpty = false;
        let center = new this.qq.maps.LatLng(last.lat, last.lng);
        if(!this.map){
          this.initMap2(center)
        }else{
          this.map.panTo(center);
        }
        if(!this.marker){
          this.initMarker(center)
        }else{
          this.marker.setPosition(center)
        }
        if(!this.polyline){
          this.initPloyline(path1)
        }else{
          this.polyline.setPath(path1)
        }
      }

    })
  }

  OnDestroy(){
    this.util.clearTimer()
  }

  timer: any;
  initMap(){
    this.getPoint();
  }

}
