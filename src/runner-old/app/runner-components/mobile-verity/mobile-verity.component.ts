import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SmsService} from "services-components/src/app/runner-services/sms.service";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;

@Component({
  selector: 'suyun-mobile-verity',
  templateUrl: './mobile-verity.component.html',
  styleUrls: ['./mobile-verity.component.scss']
})
export class MobileVerityComponent implements OnInit {
  @Input() post: any = {mobile: '',code: '',code_id: ''}
  tip: string = '获取验证码';
  starting: boolean = false;
  time: number = 60;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter()
  constructor(
    public sms: SmsService
  ) { }

  ngOnInit() {
  }

  setTime(){
    setTimeout(()=>{
      this.time --;
      if(this.time > 0){
        this.tip = ''+this.time +'s';
        this.setTime()
      }else{
        this.time = 60;
        this.tip = '重新获取';
        this.starting = false;
      }
    },1000)
  }

  getCode(){
    if(this.post['mobile']){
      if(!this.starting){
        this.tip = '发送中...';
        this.sms.sendCode(this.post).subscribe(res=>{
          if(res.code == 1){
            this.post['code_id'] = res.info;
            this.setTime()
            this.onSuccess.emit(this.post);
          }else{
            this.time = 60;
            this.tip = '重新获取';
            toast(res.msg);
          }

        })
      }
    }else{
      toast('请输入手机号码');
    }
  }

}
