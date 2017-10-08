import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'suyun-cloud-index',
  templateUrl: './cloud-index.component.html',
  styleUrls: ['./cloud-index.component.scss']
})
export class CloudIndexComponent implements OnInit {
  items:any[] = [
    {
      title: '小明跑腿-主程序',
      desc: '跑腿送货,帮我买,帮我送,帮帮忙',
      image: window['module_url']+'assets/images/runner/preview.jpg',
      price: 3000,
      total: 1,
      limit: 1,
      num: 1,
      code: 'imeepos_runner_plugin_jieti',
      name: 'imeepos_runner_plugin_jieti'
    },
    {
      title: '阶梯计费',
      desc: '帮我买及帮我送距离及重量按阶梯进行计费',
      image: window['module_url']+'assets/images/cloud/jieti.jpg',
      price: 100,
      total: 1,
      limit: 1,
      num: 1,
      code: 'imeepos_runner_plugin_jieti',
      name: 'imeepos_runner_plugin_jieti'
    },
    {
      title: '跑腿 IM',
      desc: '在线实时聊天',
      image: window['module_url']+'assets/images/cloud/im.png',
      price: 500,
      total: 1,
      limit: 1,
      num: 1,
      code: 'imeepos_runner_plugin_im',
      name: 'imeepos_runner_plugin_im'
    },
    {
      title: '健身房预约-单店版',
      desc: '健身房预约,私教/团课/器材/场地/预约',
      image: window['module_url'] + "assets/images/coach/preview.jpg",
      price: 500,
      total: 1,
      limit: 1,
      num: 1,
      code: 'imeepos_coach',
      name: 'imeepos_coach'
    }
  ];
  navs: any[] = [
    {
      title:'热销',
      active: true
    }
  ]

  advs: any = [
    {
      title:'测试广告',
      image: window['module_url']+'assets/images/cloud/plugin_adv.jpg'
    }
  ]
  charts: any[] = [];
  showSku: boolean = false;
  constructor(
    public core: CoreUtilService,
    public util: RunnerUtilService,
    public dom: DomSanitizer
  ) { }

  ngOnInit() {
  }
  tid: string = '';
  onAdd(e: any){
    this.showSku = true;
    this.skuItem = e;
    this.tid = this.util.guid();
    this.charts.push(e)
  }

  onClose(){
    this.showSku = false;
  }
  skuItem: any = {}
  addToCart(e: any){
    this.showSku = false;
    this.buyNow()
  }
  showPayQrcode: boolean = false;

  hidePay(){
    this.showPayQrcode = false;
    this.core.post('paylog.query',{tid: this.tid,goods: this.skuItem,code: this.util.oauth_code}).subscribe(res=>{
      if(res.code == 0){
        toast(res.msg)
      }else{
        toast('支付成功');
      }
    })
  }

  qrCodeUrl: any = '';
  showPayDia: boolean = false;
  shoPayIframe(){
    location.href = this.qrCodeUrl;
  }
  buyNow(){
    this.showSku = false;
    this.core.post('paylog.paymodel',{goods: this.skuItem,total: this.skuItem.price,tid: this.tid,code: this.util.oauth_code}).subscribe(res=>{
      if(res.code == 1){
        this.showPayQrcode = true;
        this.qrCodeUrl = res.info;
        //创建二维码
        window['requirejs']([
          window['module_url']+"assets/bower_components/qrcodejs/qrcode.min.js"
        ],()=>{
          new window['QRCode'](document.getElementById("qrcode"), {
            text: res.info,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : window['QRCode'].CorrectLevel.H
          })
        });
      }else{
        toast(res.msg)
      }
    })
  }
}
