import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
declare const require;
let Base64 = require('js-base64').Base64;

@Component({
  selector: 'suyun-post-opr',
  templateUrl: './post-opr.component.html',
  styleUrls: ['./post-opr.component.scss']
})
export class PostOprComponent implements OnInit {
  @Input() link: any[] = [];
  @Output() onRecord: EventEmitter<any> = new EventEmitter()

  time: number = 0;
  timer: any;

  wx: any = window['wx'];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  restart(){
    this.time = 0;
    clearInterval(this.timer)
    this.starting = false;
    this.stopRecord()
  }
  starting: boolean = false;
  startTimer(){
    if(this.starting){
      this.starting = false;
      this.btnTitle = '重录'
      clearInterval(this.timer)
      if(this.debug == true){
        this.router.navigate(this.link,{queryParams: {serverId: 'serverid',time: 10}})
      }
      //停止
    }else{
      this.btnTitle = '录好了';
      this.starting = true;
      console.log('start timer')
      this.timer = setInterval(()=>{
        this.time ++
        console.log(this.time)
        if(this.time > 59){
          console.log('qingkong ');
          clearInterval(this.timer)
        }
      },1000)
    }
  }
  clearTimer(){
    clearInterval(this.timer)
  }
  debug: boolean = false;
  btnTitle: string = '结束';
  startRecord(){
    if(this.debug){
      console.log('startRecord')
      console.log(this.starting )
    }
    if(!this.starting){
      if(this.debug){
        this.time = 0;
        this.wx.startRecord()
        this.onVoiceRecordEnd();
        this.startTimer();
      }
      this.wx.ready(()=>{
        this.time = 0;
        this.wx.startRecord()
        this.onVoiceRecordEnd();
        this.startTimer();
      })
    }else{
      this.stopRecord()
      this.startTimer()
    }
  }
  localId: any;
  stopRecord(){
    this.wx.ready(()=>{
      this.wx.stopRecord({
        success: (res)=>{
          this.localId = res.localId;
          this.uploadVoice();
        }
      })
    })
  }

  onVoiceRecordEnd(){
    this.wx.ready(()=>{
      this.wx.onVoiceRecordEnd({
        success: (res)=>{
          this.localId = res.localId;
          this.uploadVoice();
        }
      })
    })
  }
  serverId: any;
  uploadVoice(){
    this.router.navigate(this.link,{queryParams: {localId: this.localId,time: this.time}})
    this.onRecord.emit({serverId: this.localId,time: this.time})
  }

  textInput(){
    this.router.navigate(this.link)
  }

}
