import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoreUtilService } from '../../../meepo-core/core-util.service';

declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;

import {Router} from "@angular/router";
import {RunnerUtilService} from "../../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-buy-footer',
  templateUrl: './buy-footer.component.html',
  styleUrls: ['./buy-footer.component.scss']
})
export class BuyFooterComponent implements OnInit {
  @Input() id: number = 0;


  opts: any[] = []

  blankOpts: any[] = [
    {
      title: '接单说明',
      active: true,
      icon: 'help',
      link: ['/songg/help'],
      action: 'help'
    }
  ]

  fansOpts: any[] = [
    {
      title: '接单说明',
      active: true,
      icon: 'help',
      link: ['/songg/help'],
      action: 'help'
    },
    {
      title: '实名认证',
      active: false,
      icon: 'bussinesscard',
      link: ['/qq/vip/buy'],
      action: 'join.us'
    }
  ]

  runnerOpts: any[] = [
    {
      title: '接单说明',
      active: true,
      icon: 'help',
      link: ['/songg/help'],
      action: 'help'
    },
    {
      title: '立即接单',
      active: true,
      icon: 'gifts',
      link: [''],
      action: 'recive'
    }
  ]

  receiverOpts: any[] = [
    {
      title: '接单说明',
      active: true,
      icon: 'help',
      link: ['/songg/help'],
      action: 'help'
    },
    {
      title: '完成任务',
      active: true,
      icon: 'save',
      link: ['/','tasks','finish',this.id],
      action: 'finish'
    },
    {
      title: '放弃任务',
      active: true,
      icon: 'delete',
      link: ['/','tasks','giveup',this.id],
      action: 'giveup'
    }
  ]

  taskOpts: any[] = [
    {
      title: '接单说明',
      active: true,
      icon: 'help',
      link: ['/songg/help'],
      action: 'help'
    }
  ]

  detail: any;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter()

  showChartsLog: boolean = false;
  constructor(
    public util: RunnerUtilService,
    public core: CoreUtilService,
    public router: Router
  ) {

  }
  //代支付
  showLoading: boolean = false;
  loadMsg: string = '加载中..';
  onPay(){
    this.showFinishTip = false;
    this.core.post('paylog.daifu',{id: this.id,tid: this.guid()}).subscribe(res=>{
      if(res.code == 0){
        weui.toast(res.msg)
      }else{
        let opt = res.info.opt;
        let wx = window['wx'];
        wx['ready'](()=>{
          this.showLoading = true;
          this.loadMsg = '支付中..';
          wx['chooseWXPay']({
            timestamp: opt.timeStamp,
            nonceStr: opt.nonceStr,
            package: opt.package,
            signType: opt.signType    ,
            paySign: opt.paySign,
            success: (res)=>{
              //检查支付订单
              // weui.toast('');
              this.loadMsg = '处理中..';
              setTimeout(()=>{
                this.onHideRule();
                this.showLoading = false;

              },1000)
            }
          })
        })
      }
    })
  }

  ngOnInit() {
    this.util.hideFooter();
    this.getDetail()
  }
  recive: any;
  myinfo: any;
  sender: any;
  payQrcode: any;
  showFooter: boolean = true;
  getDetail(){
    this.blankOpts = [
      {
        title: '接单说明',
        active: true,
        icon: 'help',
        link: ['/songg/help'],
        action: 'help'
      },
      {
        title: '咨询留言',
        icon: 'remind1',
        active: true,
        link: ['/dettail/remind'],
        action: 'remind'
      }
    ]
    this.opts = this.blankOpts;
    this.core.post('task.detail',{id: this.id}).subscribe(res=>{
      this.detail = res.info;
      let myinfo = res.info.myinfo;
      let recive = res.info.recive;
      let sender = res.info.sender;
      this.recive = recive;
      this.myinfo = myinfo;
      this.sender = sender;
      // this.payQrcode = this.detail.payQrcode;
      //发单人
      if(sender.openid == myinfo.openid){
        this.opts = this.taskOpts;
        if(this.detail.status == 0){

        }else if(this.detail.status == 1){
          this.opts.push({
            title: '撤销任务',
            active: true,
            icon: 'delete',
            link: [''],
            action: 'redback'
          });
        }else if(this.detail.status == 2){
          this.opts = this.blankOpts;
          this.opts.push({
            title: '电话咨询',
            icon: 'phone',
            active: true,
            link: ['/detail/phone'],
            action: 'phone'
          })
        }else if(this.detail.status == 3){
          this.opts = this.blankOpts;
           this.opts.push({
             title: '确认送达',
             active: true,
             icon: 'save',
             link: ['/','detail','confirm',this.id],
             action: 'confirm'
           });
        }else if(this.detail.status == 4){
          this.opts = this.blankOpts;
          this.opts.push({
              title: '投诉反馈',
            active: true,
            icon: 'service',
            link: ['/detail/service'],
            action: 'service'
          })
        }else if(this.detail.status == 5){
          this.opts = this.blankOpts;
        }
      }
      //接单人
      else if(recive.openid == myinfo.openid){
        if(this.detail.status == 2){
          this.opts = this.receiverOpts;
        }
        if(this.detail.status == 3 || this.detail.status == 4){
          this.opts = this.blankOpts;
          this.opts.push({
            title: '投诉反馈',
            active: true,
            icon: 'service',
            link: ['/detail/service'],
            action: 'service'
          })
        }
      }else{
        if(myinfo.isrunner){
          if(this.detail.status == 1 || this.detail.status == 0){
            this.opts = this.runnerOpts;
          }
        }else{
          this.opts = this.fansOpts;
        }
      }
    })
  }
  showRule:boolean = false;
  showFinishTip: boolean = false;
  showCuiCui: boolean = false;
  showService: boolean = false;
  showDelete: boolean = false;
  showGiveup: boolean = false;
  showConfirm: boolean = false;

  onShowRule(){
    this.showRule = true;
    this.showFinishTip = false;
    this.showCuiCui = false;
    this.showService = false;
    this.showDelete = false;
    this.showGiveup = false;
    this.showConfirm = false;
  }
  onCancel(){
    this.showRule = false;
    this.showFinishTip = false;
    this.showCuiCui = false;
    this.showService = false;
    this.showDelete = false;
    this.showGiveup = false;
    this.showConfirm = false;
  }
  msg: string = '';

  onHideRule(){
    this.onCancel();
    if(this.action == 'recive'){
      if(this.detail.status <= 1){
        this.core.post('buy.recive',{id: this.id}).subscribe(res=>{
          if(res.code == 0){
            weui.toast(res.msg);
          }else{
            weui.toast(res.msg)
            this.getDetail();
            this.onSuccess.emit('true')
          }
        })
      }else{
        weui.toast('您来晚了');
      }
    }
    if(this.action == 'finish'){
      if(this.recive.openid == this.myinfo.openid){
        this.core.post('buy.finish',{id: this.id}).subscribe(res=>{
          if(res.code == 0){
            weui.toast(res.msg)
          }else{
            weui.toast(res.msg)
            this.getDetail();
          }
        })
      }else{
        weui.toast('权限错误');
      }
    }
    if(this.action == 'remind'){
      //催单
      if(this.msg){
        if(this.msg.length < 6){
          weui.toast('您输入的信息太短了,最少6个字');
        }else{
          this.core.post('buy.remind',{msg: this.msg,id: this.id}).subscribe(res=>{
            this.msg = '';
            weui.toast(res.msg)
          })
        }
      }else{
        weui.toast('您输入的信息太短了,最少10个字');
      }
    }
    if(this.action == 'service'){
      //投诉反馈
      if(this.msg){
        if(this.msg.length < 6){
          weui.toast('您输入的信息太短了,最少6个字');
        }else{
          this.core.post('buy.service',{content: this.msg,id: this.id}).subscribe(res=>{
            this.msg = '';
            weui.toast(res.msg)
          })
        }
      }else{
        weui.toast('您输入的信息太短了,最少10个字');
      }
    }
    if(this.action == 'redback'){
      this.core.post('buy.redback',{id: this.id}).subscribe(res=>{
        weui.toast(res.msg)
        this.getDetail()
      })
    }
    if(this.action == 'confirm'){
      this.core.post('buy.confirm',{id: this.id}).subscribe(res=>{
        weui.toast(res.msg)
        this.getDetail()
      })
    }
    if(this.action == 'giveup'){
      //放弃任务
      this.core.post('buy.giveup',{id: this.id}).subscribe(res=>{
        weui.toast(res.msg)
        this.getDetail()
      })
    }
    this.ngOnInit();
  }
  action: string = '';

  guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }


  onItem(e: any){
    this.action = e.action;

    if(e.action == 'recive'){
      //接单
      this.showRule = true;
    }
    if(e.action == 'finish'){
      //完成任务
      this.getDetail()
      this.showFinishTip = true;
      window['requirejs']([
        window['module_url']+ "assets/bower_components/qrcodejs/qrcode.min.js"
      ],()=>{
        this.core.post('paylog.payqrcode',{id: this.id,tid: this.guid()}).subscribe(res=>{
          if(res.code == 0){
            // weui.toast(res.msg);
          }else{
            let payUrl = res.info.code_url;
            if(!payUrl){
              weui.toast('获取二维码失败,请重新打开获取');
            }else{
              new window['QRCode'](document.getElementById("qrcode"), {
                text: payUrl,
                width: 128,
                height: 128,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : window['QRCode'].CorrectLevel.H
              })
            }
          }
        })
      })
    }
    if(e.action == 'confirm'){
      //确认完成
    }
    if(e.action == 'redback'){
      this.showDelete = true;
    }
    if(e.action == 'giveup'){
      this.showGiveup = true;
    }
    if(e.action == 'phone'){
      //电话
      if(this.recive.mobile){
        location.href = 'tel:'+this.recive.mobile;
      }else{
        weui.toast('接单员电话未完善');
      }
    }
    if(e.action == 'remind'){
      //催一催
      this.showChartsLog = false;
      this.core.post('setting.get',{code: 'imeepos_runner_plugin_im'}).subscribe(res=>{
        if(res.code == 1){
          this.router.navigate(['/im/task/',this.id])
        }else{
          this.showCuiCui = true;
        }
      })
    }

    if(e.action == 'service'){
      //投诉
      this.showService = true;

    }
    if(e.action == 'help'){
      //接单说明
      this.onShowRule();
    }
    if(e.action == 'confirm'){
      this.showConfirm = true;
    }
  }


}
