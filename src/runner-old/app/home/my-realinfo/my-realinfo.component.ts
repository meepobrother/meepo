import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";
@Component({
  selector: 'suyun-my-realinfo',
  templateUrl: './my-realinfo.component.html',
  styleUrls: ['./my-realinfo.component.scss']
})
export class MyRealinfoComponent implements OnInit {
  post: any = {total: '0.01',sms: {},card: {},action: 'runner.buy',goods: '实名认证'}

  itemsTap: any[] = []
  constructor(
    public util: RunnerUtilService,
    public router: Router,
    public core: CoreUtilService
  ) {
    this.itemsTap = [
      {
        title: '开发测试',
        desc: '0.01元',
        value: 1000,
        money: 0.01,
        active: true,
        tag: ''
      },
      {
        title: '送60',
        desc: '30元',
        value: 60,
        money: 30,
        active: false,
        tag: ''
      },
      {
        title: '送240',
        desc: '120元',
        value: 240,
        money: 120,
        active: false,
        tag: '免审'
      }
    ]
  }
  showEditer: boolean = false;
  openEditer(){
    this.showEditer = true;
  }
  cancelEditer(){
    this.showEditer = false;
  }

  ngOnInit() {
    this.util.hideFooter()
    this.initInfo()
    this.initTap()
  }

  initTap(){
    this.core.post('setting.get',{code: 'setting.my.realinfo'}).subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: 'setting.my.realinfo',data: this.itemsTap}).subscribe(res=>{})
      }else{
        this.itemsTap = res.info;
        this.itemsTap.map(res=>{
          if(res.active){
            this.post['xinyu'] = res;
            this.post['total'] = res.money;
          }
        })
      }
    })
  }

  onItem(e: any){
    this.post['xinyu'] = e;
    this.post['total'] = e.money;
  }

  onUpload(e){
    this.post['card'] = e;
  }

  //sms
  onSms(e: any){
    this.post['sms'] = e;
  }
  //sms

  //支付
  createOrder: boolean = false;
  checkOrder(){
    if(!this.post['realname']){
      weui.toast('请输入姓名');
      return false;
    }
    if(!this.post['sms']['mobile']){
      weui.toast('请输入手机号码');
      return false;
    }
    if(!this.post['sms']['code'] || !this.post['sms']['code_id']){
      weui.toast('请输入验证码');
      return false;
    }
    if(!this.post['card']){
      weui.toast('请上传身份证照');
      return false;
    }

    return true;
  }
  payOrder(){
    if(this.checkOrder()){
      this.createOrder = false;
      this.post['action'] = 'runner.buy';
      setTimeout(()=>{
        this.createOrder = true;
      },300)
    }
  }
  onPaySuccess(e: any){
    this.router.navigate(['/','home','index'])
  }
  // 支付
  myinfo: any = {}
  showPay: boolean = true;
  initInfo(){
    this.core.post('member.info',{}).subscribe(res=>{
      this.myinfo = res.info;
      this.post['realname'] = this.myinfo['realname'];
      this.post['mobile'] = this.myinfo['mobile'];

      if(this.myinfo['isrunner'] == 1 && this.myinfo['status'] == 1){
        this.router.navigate(['/','home','my-order'])
      }else{
        // this.post['']
      }
    })
  }

}
