import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RunnerUtilService} from "../../../runner-components/runner-util.service";
import {CoreUtilService} from "../../core-util.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable} from "rxjs/Observable";
declare const require;
let store = require('store')
@Component({
  selector: 'app-core-detail',
  templateUrl: './core-detail.component.html',
  styleUrls: ['./core-detail.component.scss']
})
export class CoreDetailComponent implements OnInit {
  id: number = 0;
  constructor(
      public route: ActivatedRoute,
      public util: RunnerUtilService,
      public router: Router,
      public core: CoreUtilService,
      public dom: DomSanitizer
  ) { }

  ngOnInit() {
    this.props = Object.assign(CoreFormsDefaultProps,this.props)
    console.log('on init ',this.props)
    this.getByCodeByCache();
    this.util.hideFooter()
    this.route.params.subscribe(res=>{
      this.id = res.id;
      this.getDetail()
    })
  }

  offset: number = 100;
  detail: any = {}
  info: any = {}

  myUserInfo: any = {}

  recivePoint: any = {}
  sendPoint: any = {}

  detailLists: any[] = []
  payLists: any[] = []

  routerUrl: any = 'http://apis.map.qq.com/tools/routeplan/';
  showRouter: boolean = false;

  opts: any[] = []
  isDefault: boolean = true;

  myPoint: any = {
    lat: '',
    lng: ''
  }

  onAddr(){
    this.showRouter = true;
    this.router.navigate(['/','tasks','rout-map',this.routerUrl])
  }

  memberLists: any[] = [];
  orderLists: any[] = [];
  paylogs: any[] = []
  reciver: any = {};
  sender: any = {}
  items: any[] = []
  getItemByType(val: any){
    return Observable.create(r=>{
      this.items.map(res=>{
        if(res.type == val){
          r.next(res)
          r.complete();
        }
      })
    })
  }

  props: CoreFormsProps = CoreFormsDefaultProps;

  getConfigByCache(code: string){
    let props = store.get(code)
    if(props){
      this.props = props;
      this.props = Object.assign(CoreFormsDefaultProps,this.props)
    }else{
      this.core.post('setting.get',{code: code}).subscribe(res=>{
        if(res.code == 1){
          this.props = res.info;
          this.props = Object.assign(CoreFormsDefaultProps,this.props)
        }else{
          this.props = {} as CoreFormsProps;
          this.props = Object.assign(CoreFormsDefaultProps,this.props)
        }
        store.set(code,this.props)
      })
    }

    console.log('props is',this.props);
  }
  modules: any[] = []
  getByCodeByCache(){
    let items = store.get('core.runner.tasks')
    if(items){
      this.items = items;
    }else{
      this.core.post('setting.get',{code: 'core.runner.tasks'}).subscribe(res=>{
        if(res.code == 1){
          this.items = res.info;
        }else{
          this.core.get('cloud.modules','imeepos_runner').subscribe(res=>{
            if(res.code == 1){
              this.modules = res.info;
              this.modules.map(res=>{
                if(res.code == 'imeepos_runner'){
                  if(res['post']){
                    this.items = this.items.concat(res.post)
                  }
                }
              })
            }
          })
        }
        store.set('core.runner.tasks',this.items)
      })
    }
  }

  config: any;
  senderPoint: any;
  getDetail(){
    this.core.post('task.detail',{id: this.id}).subscribe(res=>{
      this.detail = res.info;
      this.paylogs = this.detail.paylog;
      this.info = this.detail;

      this.reciver = this.detail['recive'];
      this.sender = this.detail['sender'];
      this.myUserInfo = res.info;
      this.recivePoint = {
        lat: this.detail.receivelat,
        lng: this.detail.receivelon,
        title: this.detail.receiveaddress
      }
      this.sendPoint = {
        lat: this.detail.sendlat,
        lng: this.detail.sendlon,
        title: this.detail.sendaddress
      }

      this.senderPoint = {
        lat: this.sender.lat,
        lng: this.sender.lng,
        title: '任务主位置'
      }

      console.log(this.detail)
      this.getItemByType(this.detail.type).subscribe(res=>{
        this.config = res;
        this.getConfigByCache(res.code)
      })
      //如果没有起始地 那么获取用户自己的位置
      this.routerUrl = "https://apis.map.qq.com/ws/staticmap/v2/?";
      console.log(this.recivePoint)
      if(!this.recivePoint['lat'] || this.recivePoint['lat'] == ''){ //起送地
        this.recivePoint = this.sendPoint
        console.log(this.recivePoint)
        if(!this.recivePoint['lat'] || this.recivePoint['lat'] == ''){
          this.recivePoint = this.senderPoint
          let label = this.getMapLabel(this.recivePoint)
          this.routerUrl += `center=${this.recivePoint.lat},${this.recivePoint.lng}&${label}&zoom=15&size=500*200&maptype=terrain&markers=size:large|color:0xFFCCFF|label:e|${this.recivePoint.lat},${this.recivePoint.lng}&key=DXEBZ-G3IRF-2YFJO-NVYN5-4LSIQ-T4BIY`;
        }else{
          let label = this.getMapLabel(this.recivePoint)
          this.routerUrl += `center=${this.recivePoint.lat},${this.recivePoint.lng}&${label}&zoom=15&size=500*200&maptype=terrain&markers=size:large|color:0xFFCCFF|label:e|${this.recivePoint.lat},${this.recivePoint.lng}&key=DXEBZ-G3IRF-2YFJO-NVYN5-4LSIQ-T4BIY`;
        }
      }else{
        let label = this.getMapLabel(this.recivePoint)
        this.routerUrl += `center=${this.recivePoint.lat},${this.recivePoint.lng}&${label}&zoom=15&size=500*200&maptype=terrain&markers=size:large|color:0xFFCCFF|label:e|${this.recivePoint.lat},${this.recivePoint.lng}&key=DXEBZ-G3IRF-2YFJO-NVYN5-4LSIQ-T4BIY`;
      }
      this.routerUrl = this.dom.bypassSecurityTrustResourceUrl(this.routerUrl)
    })
  }

  getMapLabel(item: any){
    let str = `labels=border:1|size:14|color:0xffffff|bgcolor:0x2fe40000|anchor:3|${item.title}|${item.lat},${item.lng}`;
    return str;
  }
  mapUrl2: any;
  onLocation(e: any){
    if(e && e['lat']){
      this.myPoint = e;
      //如果没有起始地 那么获取用户自己的位置
      this.mapUrl2 = "http://apis.map.qq.com/tools/routeplan/";
      if(!this.detail['sendlat']){
        this.sendPoint = this.myPoint
        this.mapUrl2 += `eword=我的位置&epointx=${this.recivePoint.lat}&epointy=${this.recivePoint.lng}`;
      }else{
        this.mapUrl2 += `eword=任务目的地&epointx=${this.recivePoint.lat}&epointy=${this.recivePoint.lng}`;
      }
      this.mapUrl2 += `&sword=任务起始地&spointx=${this.sendPoint.lat}&spointy=${this.sendPoint.lng}`;
      this.mapUrl2 += '?referer=myapp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77';
      console.log(this.mapUrl2)
      this.mapUrl2 = this.dom.bypassSecurityTrustResourceUrl(this.mapUrl2)
      console.log(this.mapUrl2)
    }
  }

  onIndex(){
    this.router.navigate(['/','tasks','index'])
  }

  onTicket(){
    this.router.navigate(['/','tasks','ticket',this.id])
  }

  onList(item: any){

  }
  topNavs: any[] = [
    {
      title: '任务详情',
      active: false,
      code: 'detail'
    },
    {
      title: '任务状态',
      active: true,
      code: 'status'
    },
    {
      title: '地图导航',
      active: false,
      code: 'map'
    },
    {
      title: '咨询留言',
      active: false,
      code: 'router'
    }
  ]

  topCode: string = 'status';
  showFooter: boolean = true;

  onTopNav(e){
    this.topCode = e.code;
    if(this.topCode == 'router'){
      this.showFooter = false;
    }else{
      this.showFooter = true;
    }
  }

}


export interface CoreInput{
  title?: string,
  placeholder?: string,
  empty?: string,
  warning?: string
}

export interface CoreAddressProps{
  show?: boolean,
  title?: string,
  placeholder?: string,
  detail?: CoreInput,
  mobile?:CoreInput
}

export interface CoreTitleProps{
  title?: string,
  show?: boolean,
  placeholder?: string,
  empty?: string,
  warning?: string
}

export interface CorePriceSettingJietiProps{
  show: boolean,
  juli_jieti: boolean,
  weight_jieti: boolean,
  qujian_jifei: boolean
}

export interface CorePriceSettingProps{
  start: number, //起步价
  len: number, //起步距离
  duration: number, //配送时间
  jieti: CorePriceSettingJietiProps, //阶梯计费
  tianqiItems: any[],
  juliItems: any[],
  weightItems: any[],
  timeItems: any[]
}

export interface CoreFormsProps{
  adv?: CoreTitleProps,
  gonggao?: CoreTitleProps,
  btnTitle?: string,
  priceStr?: string,
  start?: CoreAddressProps,
  end?: CoreAddressProps,
  msg?: CoreTitleProps,
  voice?: CoreTitleProps,
  image?: CoreTitleProps,
  baojia?: CoreTitleProps,
  weight?: CoreTitleProps,
  price?: CoreTitleProps,
  rule?: CoreTitleProps,
  time?: CoreTitleProps,
  money?: CoreTitleProps,
  setting: CorePriceSettingProps
}

export const CoreFormsDefaultProps = {
  btnTitle: '下一步',
  priceStr: '计价规则[请选择目的地]',
  start: {
    show: true,
    title: '发货地',
    placeholder: '请选择发货地',
    detail: {
      title: '详细地址',
      placeholder: '如:楼层门牌号等',
      empty: '未填写',
      warning: '请输入详细地址'
    },
    mobile: {
      title: '联系电话',
      placeholder: '请输入联系电话',
      empty: '未填写',
      warning: '请输入联系电话'
    }
  },
  end: {
    show: true,
    title: '收货地',
    placeholder: '请选择收货地',
    detail: {
      title: '详细地址',
      placeholder: '如:楼层门牌号等',
      empty: '未填写',
      warning: '请输入详细地址'
    },
    mobile: {
      title: '联系电话',
      placeholder: '请输入联系电话',
      empty: '未填写',
      warning: '请输入联系电话'
    }
  },
  msg: {
    show: true,
    title: '留言信息',
    placeholder: '请输入留言信息',
    empty: '未填写',
    warning: '请输入留言信息'
  },
  adv: {
    show: true
  },
  gonggao: {
    show: true
  },
  voice: {
    show: true,
    title: '语音留言',
    placeholder: '点击录音'
  },
  image: {
    show: true,
    title: '任务附件',
    placeholder: ''
  },
  baojia: {
    show: true,
    title: '物品保价',
    warning: '请选择物品保价'
  },
  weight: {
    show: true,
    title: '物品重量',
    placeholder: '请输入物品重量',
    warning: '请输入物品重量'
  },
  price: {
    show: true,
    title: '物品价格',
    placeholder: '请输入物品价格',
    warning: '请输入物品重量'
  },
  rule: {
    show: true,
    title: '发布条例,免责声明',
    placeholder: '阅读并同意',
    warning: '您必须同意发布条例'
  },
  time: {
    show: true,
    title: '预约时间',
    placeholder: '请选择预约时间',
    warning: '请选择预约时间'
  },
  money: {
    show: true,
    title: '赏金',
    placeholder: '请输入赏金',
    warning: '请输入赏金'
  },
  setting: {
    start: 10, //起步价
    len: 5, //起步距离
    duration: 30, //配送时间
    jieti: {
      show: false,
      juli_jieti: false,
      weight_jieti: false,
      qujian_jifei: false
    }, //阶梯计费
    tianqiItems: [],
    juliItems: [],
    weightItems: [],
    timeItems: []
  }
}