import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;

import { CoreUtilService } from '../../meepo-core/core-util.service';
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {
  showLoading: boolean = false;
  loadMsg: string = '数据加载中';
  _post: any = {}
  @Input()
  set post(val: any){
    if(val){
      this._post = val;
      this.initPost();
    }else{
      this._post = {total: 0,tid: '',payType: 'wechat'}
    }
  }
  @Output() onSuccess: EventEmitter<any> = new EventEmitter()

  @Input() hasDivider: boolean = false;
  @Input() hasWechat: boolean = false;
  @Input() hasCredit: boolean = false;

  config: any = {}

  constructor(
    public core: CoreUtilService,
    public router: Router
  ) { }

  ngOnInit() {

    this.initPost();
    this.initPayConfig();
  }

  initPost(){
    this._post['tid'] = this.guid();
    this._post['goods'] = this._post['goods'] ? this._post['goods'] : '未知商品';
  }
  payTypes: any[] = [];
  initPayConfig(){
    this.core.post('setting.get',{code: 'setting.system.pay'}).subscribe(res=>{
      this.config = res.info;
      if(this.config){
        this.config.map(res=>{
          if(res.active){
            if(res.type == 'wechat'){
              this.hasWechat = true;
            }
            if(res.type == 'credit'){
              this.hasCredit = true;
            }
            if(res.type == 'divider'){
              this.hasDivider = true;
            }
          }
        })
        this.payOrder()
      }
    })
  }

  guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
    // return '8762d5936bad4e4699a43fc76c';
  }
  checkResult(data: any){
    this.core.post('paylog.checkResult',{taskJson: data}).subscribe(res=>{
      if(res.code == 1){
        this.showLoading = false;
        this.onSuccess.emit(res.info)
      }else if(res.code == 3){
        this.showLoading = true;
        this.loadMsg = '支付中';
        setTimeout(()=>{
          this.checkResult(data)
        },500)
      }else{
        this.showLoading = true;
        this.loadMsg = res.msg;
        setTimeout(()=>{
          this.showLoading = false;
        },2000)
      }
    })
  }
  payOrder(){
    let config = [];
    console.log(this._post);
    
    if(this.hasWechat){
      config.push({
        label: '微信支付',
        onClick: ()=>{
          this.showLoading = true;
          this.loadMsg = '订单提交中..';
          this._post['payType'] = 'wechat';
          this.core.post('paylog.postOrder',this._post).subscribe(res=>{
            let data = res.info.taskJson;
            this.checkResult(data);
            if(res.code == 0){
              this.showLoading = false;
              toast(res.msg,{})
            }
            if(res.code == 1){
              let wx = window['wx'];
              let opt = res.info.opt;

              this.showLoading = true;

              this.loadMsg = '正在发起支付..';
              wx['ready'](()=>{
                this.showLoading = false;
                wx['chooseWXPay']({
                  timestamp: opt.timeStamp,
                  nonceStr: opt.nonceStr,
                  package: opt.package,
                  signType: opt.signType    ,
                  paySign: opt.paySign,
                  success: (res)=>{
                    //检查支付订单
                    this.showLoading = true;
                    this.loadMsg = '正在通知附近服务人员!';
                    this.checkResult(data)
                  }
                })
              })
            }
          })
        }
      })
    }

    if(this.hasDivider){
      config.push({
        label: '货到付款',
        onClick: ()=>{
          this.showLoading = true;
          this.loadMsg = '订单提交中..';
          this._post['payType'] = 'divider';
          this.core.post('paylog.postOrder',this._post).subscribe(res=> {
            let data = res.info.taskJson;
            if(res.code == 1){
              this.core.post('paylog.checkResult',{taskJson: data,type: 'divider'}).subscribe(res=>{
                if(res.code == 1){
                  this.showLoading = false;
                  this.onSuccess.emit(res.info)
                }else{
                  this.showLoading = true;
                  this.loadMsg = res.msg;
                  setTimeout(()=>{
                    this.showLoading = false;
                  },2000)
                }
              })
            }else{
              this.showLoading = true;
              this.loadMsg = res.msg;
              setTimeout(()=>{
                this.showLoading = false;
              },2000)
            }

          })
        }
      })
    }

    if(this.hasCredit){
      config.push({
        label: '余额支付',
        onClick: ()=>{
          this.showLoading = true;
          this.loadMsg = '订单提交中..';
          this._post['payType'] = 'credit';

          this.core.post('paylog.postOrder',this._post).subscribe(res=> {
            let data = res.info.taskJson;
            if(res.code == 1){
              this.core.post('paylog.checkResult',{taskJson: data,type: 'credit'}).subscribe(res=>{
                if(res.code == 1){
                  this.showLoading = false;
                  this.onSuccess.emit(res.info)
                }else{
                  this.showLoading = true;
                  this.loadMsg = res.msg;
                  setTimeout(()=>{
                    this.showLoading = false;
                  },2000)
                }
              })
            }else{
              this.showLoading = true;
              this.loadMsg = res.msg;
              setTimeout(()=>{
                this.showLoading = false;
              },2000)
            }
          })
        }
      })
    }

    actionSheet(config, [
      {
        label: '取消',
        onClick: ()=> {

        }
      }
    ], {
      className: 'custom-classname'
    });
  }

}
