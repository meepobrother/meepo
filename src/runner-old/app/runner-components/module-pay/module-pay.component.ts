import { Component, OnInit } from '@angular/core';
import {MeepoPayService} from "services-components";

@Component({
  selector: 'suyun-module-pay',
  templateUrl: './module-pay.component.html',
  styleUrls: ['./module-pay.component.scss']
})
export class ModulePayComponent implements OnInit {

  constructor(
    public pay: MeepoPayService
  ) { }

  ngOnInit() {
    this.initQrpay();
  }

  qrpay: string = '';
  initQrpay(){
    let tid = 'imeepos2017070809'
    let goods = {
      title: '测试' ,
      name: 'test',
      code: 'test'
    }
    this.pay.qrpay({tid: tid,total: 0.01,goods: goods}).subscribe(res=>{
      if(res.code == 1){
        this.qrpay = res.info
        window['requirejs']([
          "http://meepo.com.cn/bower_components/qrcodejs/qrcode.min.js"
        ],()=>{
          new window['QRCode'](document.getElementById("qrcode"), {
            text: this.qrpay,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : window['QRCode'].CorrectLevel.H
          })
        })
      }else{
        //s
      }
    })
  }

}
