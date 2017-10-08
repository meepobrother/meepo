import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import weui from 'weui.js';
import {CarfilesService} from "services-components/src/app/repair-services/carfiles.service";
import {AudioService, UtilService} from "services-components";
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'suyun-repair-xiche',
  templateUrl: './repair-xiche.component.html',
  styleUrls: ['./repair-xiche.component.scss']
})
export class RepairXicheComponent implements OnInit {
  car_num: string = '';
  showUserInfo: boolean = false;
  userinfo: any = {}

  tags: any[] = []

  needBind: boolean = false;
  btnTitle: string = '保存';

  localId: string = '';
  timeLen: number = 0;

  priceStr: string = '计价规则';
  btnOrderTitle: string = '挂单';
  serverId: string = '';
  wx: any = window['wx'];
  form: FormGroup;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public carfiles: CarfilesService,
    public util: UtilService,
    public audio: AudioService,
    public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      carfiles_id: 0,
      car_num: '',
      jar_num: '',
      realname: '',
      mobile: '',
      openid: '',
      duration: 0,
      duration_value: '',
      desc: '',
      price: '',
      total: '',
      goods: {},
      type: 1001,
      code: 'repair.xiche',
      priceStr: ''
    });
    this.tags = [];
    this.tags.map(res=>{
      if(res.active){
        this.form.get('goods').setValue(res);
      }
    });


    /**
     * 设置关系
     */

    // 车牌号
    const car_num = this.form.get('car_num');
    const car_num$ = car_num.valueChanges;
    car_num$.debounceTime(300).subscribe(res=>{
      this.getCarDetailByCarNum(res);
    });

    // 车架号
    const jar_num = this.form.get('jar_num');
    const jar_num$ = car_num.valueChanges;
    jar_num$.debounceTime(300).subscribe(res=>{
      this.getCarDetailByJarNum(res);
    });


  }



  /**
   * 表单值监控及关系变化
   */


   /**
    * 表单输入
    */

  selectGoods(e: any){
    this.form.get('goods').setValue(e);
  }

  /**
   * ---------
   * UI 交互
   * ---------
   */

  // 提交按钮控制
  isValid: boolean = false;
  // 是否发起支付
  createOrder: boolean = false;
  // 是否显示订单详情
  showOrder: boolean = false;
  // 是否显示背景遮罩
  showBg: boolean = false;
  // 点击遮罩隐藏遮罩
  onBg(){
    this.showBg = false;
  }
  // 返回编辑下单页面
  editOrder(){
    this.showOrder = false;
  }
  
   /**
    * --------
    * 业务逻辑
    * --------
    */

  // 根据车牌号获取车辆信息
  getCarDetailByCarNum(car_num: string){

  }
  //根据车架号获取车辆信息
  getCarDetailByJarNum(jar_num: string){

  }
  // 表单检测
  checkValid(){
    
  }
  // 支付成功后跳转到详情页面
  onPaySuccess(e: any){
    this.router.navigate(['/','repair','post'])
  }

  // 创建扫码绑定二维码 放在下完订单支付前完成
  createBindQrCode(id: number){
    window['requirejs']([
      window['module_url'] + "assets/bower_components/qrcodejs/qrcode.min.js"
    ],()=>{
      let payUrl = this.util.createUrl('bind',{id: id},'imeepos_runner_plugin_repair')
      console.log(payUrl)
      new window['QRCode'](document.getElementById("qrcode"), {
        text: payUrl,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : window['QRCode'].CorrectLevel.H
      })
    })
  }

  // 添加表单,检查输入
  addToOrder(){
    if(this.localId){
      this.wx.ready(()=>{
        this.wx.uploadVoice({
          localId: this.localId,
          isShowProgressTips: 1,
          success: (res)=>{
            this.serverId = res.serverId;
            this.form.get('serverId').setValue(this.serverId);
            this.form.get('voice_time').setValue(this.timeLen);
            this.audio.upload({serverId: this.serverId}).subscribe(res=>{
              this.form.get('src').setValue(res.info);
              this.payOrder();
            })
          }
        })
      })
    }else{
      this.payOrder();
    }
  }
  // 发起支付
  payOrder(){
    this.createOrder = false;
    setTimeout(()=>{
      this.createOrder = true;
    },300)
  }

  // 取消用户资料输入
  cancel(){
    if(this.needBind){
      this.showUserInfo = false
    }else{
      this.router.navigate(['/repair/post'])
    }
  }

  /**
   * --------
   * 工具函数
   * --------
   */
  
  // 创建订单编号
  guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

  onRecord(e: any){

  }
  
  

  /**
   * --------------
   * 页面初始化区域
   * --------------
   */

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.car_num = res.id;
      this.form.get('car_num').setValue(res.id);
    })
  }

  
}
