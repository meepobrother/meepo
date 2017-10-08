import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
// import {ImLogService} from "services-components";
import { CoreUtilService } from '../../../meepo-core/core-util.service';

declare const require;
let store = require('store');


@Component({
  selector: 'im-message-content',
  templateUrl: './im-message-content.component.html',
  styleUrls: ['./im-message-content.component.scss']
})
export class ImMessageContentComponent implements OnInit {
  @Input() item: any = {}
  shouqianIcon: string = window['module_url']+'assets/images/im/shouqian.png'
  redpackIcon: string = window['module_url']+'assets/images/im/z_.png'
  isDefault: boolean = true;


  mapKeys: any[] = []
  constructor(
      public dom: DomSanitizer,
      public router: Router,
      public core: CoreUtilService
  ) {
    this.mapKeys = [
        'LHRBZ-4XCWF-FGRJ5-NKTKW-GAQIS-LEBZG',
        '4MHBZ-JVL35-WLMII-Q3NME-3Z2G2-PKBJJ',
        'DXEBZ-G3IRF-2YFJO-NVYN5-4LSIQ-T4BIY'
    ]
  }
  index: number = 0;

  img: string = '';

  getRandom(): any{
    this.index ++;
    let key = this.mapKeys[this.index%3];
    let data = this.item.data;
    let latlng = data.latlng;
    if(latlng){
      if(latlng['lat']){
        this.img = `http://apis.map.qq.com/ws/staticmap/v2/?key=${key}&size=240x240&center=${latlng.lat},${latlng.lng}&zoom=10&scale=1&markers=color:blue|label:A|${latlng.lat},${latlng.lng}`;
      }
    }
  }
  detail: any = {}
  ngOnInit() {
    if(this.item['type'] == 'location'){
      this.getRandom();
    }
    if(this.item['type'] == 'task'){
      this.detail = this.item['data'];
    }
  }
  mapUrl: any = '';
  showMap: boolean = false;
  openLocation(data: any){
    this.index ++;
    let key = this.mapKeys[this.index%3];
    let url = `http://apis.map.qq.com/tools/routeplan/eword=${data.poiname}&epointx=${data.latlng['lat']}&epointy=${data.latlng['lng']}?referer=myapp&key=${key}`;
    this.mapUrl = this.dom.bypassSecurityTrustResourceUrl(url)
    this.showMap = true;
  }
  hideMap(){
    this.showMap = false;
  }

  showShouqian: boolean = false;
  shouqianItem: any;
  shouqianData: any;
  onShouqian(e: any){
    this.shouqianData = e;
    this.shouqianItem = e.data;
    this.showShouqian = true;
  }

  hideShouqian(){
    this.showShouqian = false;
  }

  onItem(item: any){
    if(item.type == 0 || item.type == 1){
      this.router.navigate(['/runner/song/detail/',item.id])
    }
    if(item.type == 2 || item.type == 3){
      this.router.navigate(['/runner/buy/detail/',item.id])
    }
    if(item.type == 4 || item.type == 5){
      this.router.navigate(['/runner/help/detail/',item.id])
    }
  }
  showOrder: boolean = false;
  post: any = {action: 'shoukuan'}
  pay(){
    this.post['total'] = this.shouqianItem.money;
    this.post['goods'] = this.shouqianItem.desc;
    this.post['data'] = this.shouqianData;
    console.log(this.post)
    this.showOrder = false;
    setTimeout(()=>{
      this.showOrder = true;
      this.hideShouqian()
    },500)
  }

  onSuccess(e: any){

    this.showOrder = false;
    let data = e.data;
    //添加支付成功消息
    let item = {
      openid: e.to_openid,
      avatar: e.to_avatar,
      nickname: e.to_nickname,
      toOpenid: e.openid,
      toAvatar: e.avatar,
      toNickname: e.nickname,
      content: '',
      type: 'money',
      data: {money: data.money,desc: data.desc}
    }
    let items = [];
    store.set('my.message'+e.openid,items);
    // this.imList.addMsg(item)
    // //检查是否存在该回话
    // this.checkExistIndex(item)
    //
    // // 上传到服务器
    this.core.post('log.post',item,'imeepos_runner_plugin_im').subscribe(res=>{})
  }

  _onClick(item: any){
    location.href = 'tel:'+item.mobile;
  }

}
