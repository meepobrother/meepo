import {Component, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";

declare const require;
let store = require('store');
@Component({
  selector: 'suyun-runner-router',
  templateUrl: './runner-router.component.html',
  styleUrls: ['./runner-router.component.scss']
})
export class RunnerRouterComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  title = 'app';
  items: any[] = []
  timer: any;

  drivingService: any;
  routeLen: any = 0;
  qq: any = window['qq'];

  constructor(
    public router: Router,
    public util: RunnerUtilService,
    public ele: ElementRef,
    public render: Renderer2,
    public core: CoreUtilService
  ){

    // console.log(wxBizMsggCrypt);
    this.items = this.util.config.footers;

    let mylocation = store.get('mylocation')
    if(!mylocation){
      this.updateLocation = true;
    }

    this.drivingService = this.qq.maps.DrivingService && new this.qq.maps.DrivingService({
        complete: (result: any)=>{
          this.routeLen = parseInt(result.detail.distance);
          if(this.routeLen > 50){
            let latLng = result.detail.end.latLng;
            this.outoUploadLocation(latLng.lat,latLng.lng,'')
          }else{
            this.uploadTime = 6;
            this.delUploadTime();
          }
        },
        error: ()=>{

        }
      })
    this.drivingService.setPolicy && this.drivingService.setPolicy(this.qq.maps.DrivingPolicy["LEAST_DISTANCE"]);
  }

  //自动上报地理位置
  uploadTime: number = 0;
  delUploadTime(){
    // setTimeout(()=>{
    //   this.wechatLocation();
    // },6000)
  }
  outoUploadLocation(lat: any,lng: any,desc: string){
    this.core.post('runner.uploadLocation',{lat: lat,lng: lng,desc: desc}).subscribe(res=>{
      this.lastLocation = res.info;
      this.updateLocation = false;
    })
  }
  lastLocation: any = {};
  latitude: number = 0;
  longitude: number = 0;
  speed: number = 0;
  accuracy:number = 0;

  wechatLocation(){
    // console.log('wechatLocation start');
    // this.outoUploadLocation('','','微信定位')
    let wx = window['wx'];
    wx.ready(()=>{
      wx.getLocation({
        type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success:  (res)=>{
          //res.speed
          this.latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          this.longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          this.speed = res.speed; // 速度，以米/每秒计
          this.accuracy = res.accuracy; // 位置精度
          let minute = Math.floor((100 / this.speed )) * 1000;

          this.outoUploadLocation(res.latitude,res.longitude,'微信定位')
          this.onLocation({lat: res.latitude,lng: res.longitude})

          if(minute <= 3000){
            minute = 3000;
          }
          if(minute > 15000){
            setTimeout(()=>{
              this.wechatLocation()
            },15000)
          }else{
            setTimeout(()=>{
              this.wechatLocation()
            },minute)
          }
        }
      });
    })
  }
  onLocation(e: any){
    if(e){
      if(e['lat']){
        store.set('mylocation',e)
      }
    }
  }

  getRouteLen(e){
    if(this.lastLocation['lat'] && e['lat']){
      let start = new this.qq.maps.LatLng(this.lastLocation['lat'],this.lastLocation['lng'])
      let end = new this.qq.maps.LatLng(e['lat'],e['lng'])
      this.drivingService.search(start,end)
    }
  }

  openAdmin(){
    this.util.showAdmin()
  }

  initFooter(){
    this.util.checkVersion().subscribe(res=>{
      if(res){
        let data = store.get('index.footer.setting')
        if(data){
          this.items = data;
        }else{
          this.initFooterConfig()
        }
      }else{
        this.initFooterConfig();
      }
    })
  }

  initFooterConfig(){
    this.core.post('setting.get',{code: 'index.footer.setting'}).subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: 'index.footer.setting',data: this.items}).subscribe(res=>{})
      }else{
        this.items = res.info;
      }
      store.set('index.footer.setting',this.items)
    })
  }

  autoTimer: any;
  updateLocation: boolean = false;
  locationTimer: any;
  ngOnInit(){
    this.initFooter()
    this.timer = setInterval(()=>{
      this.util.refresh()
    },300)
    this.wechatLocation();

    // setTimeout(()=>{
    //   this.listen()
    // },1500)
    this.util.clearTimer();
  }

  ngOnDestroy(){
    clearInterval(this.autoTimer)
    clearInterval(this.timer)
    // clearInterval(this.locationTimer)
  }

  onClick(){
    this.router.navigate(['/listen/index'])
  }

  guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

  //定时播报订单
  es: any;
  newTask: any = {}
  showNewTask: boolean = false;
  localId: string = '';
  token: string = '';
  showNewTaskTop: boolean = false;
  isChange: boolean = false;
  playing: boolean = false;
  onTouchMove(e: any){
    this.showNewTaskTop = false;
    this.isChange = true;
  }

  listen(){
    let that = this;
    this.es = null;

    if(this.util.isRunner){
      this.es = new window['EventSource'](this.core.createSocket('socket.tasks','imeepos_runner'));
      this.es.onerror=()=>{}
      this.es.onopen = ()=>{}
      this.es.onmessage = (event: any)=>{
        let data = eval('(' + event.data + ')');
        //播放语音
        if(data.code == 1){
          this.es.close();
          this.newTask = data.info;
          //自动播放
          let wx = window['wx'];
          if(this.newTask.media_id){
            wx.ready(()=>{
              wx.downloadVoice({
                serverId: '', // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: (res)=>{
                  this.localId = res.localId; // 返回音频的本地ID
                  this.showNewTask = true;
                  this.isChange ? '' : this.showNewTaskTop = true;
                  setTimeout(()=>{
                    this.showNewTask = false;
                    this.isChange ? '' : this.showNewTaskTop = false;
                    this.listen();
                  },5000)
                }
              });
            });
          }else{
            //直接播放 语音
            // let audio = new Audio('http://meepo.com.cn/bower_components/mp3/rBBGeVRjVs6AOqzWAABEqkutmWA094.mp3?t=1.0');
            // audio.play();
            this.showNewTask = true;
            this.isChange ? '' : this.showNewTaskTop = true;
            setTimeout(()=>{
              this.showNewTask = false;
              this.isChange ? '' : this.showNewTaskTop = false;
              this.listen();
            },5000)
          }
        }else{
          this.showNewTaskTop = false;
        }
      }
    }
  }


  // onLocation(e: any){
  //   if(e){
  //     if(e['lat']){
  //       store.set('mylocation',e)
  //       this.getNearBy(e.lat,e.lng)
  //       this.runner.uploadLocation({lat: e.lat,lng: e.lng}).subscribe(res=>{})
  //     }
  //   }
  // }

}
