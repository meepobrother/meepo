import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {RunnerUtilService} from "../runner-util.service";
import { CoreUtilService } from '../../meepo-core/core-util.service';
@Component({
  selector: 'suyun-wechat-audio',
  templateUrl: './wechat-audio.component.html',
  styleUrls: ['./wechat-audio.component.scss']
})
export class WechatAudioComponent implements OnInit {
  showBg: boolean = false;
  timer: any;
  time: number = 0;

  @Input() audioBtnTitle: string = '微信录音';
  @Input() hasGift: boolean = false;

  starting: boolean = false;

  wx: any = window['wx'];

  post: any = {
    time: 0,
    timeLen: 0
  }

  @Input() isUpload: boolean = true;
  @Input() url: string = 'http://qiniu01.meepo.com.cn/0Irp9kye_y5YE0DLuRq6-bTWbXcmCuvA2Kn6jHIck59O_Tm4pbS0CfrKJz6-YrPD.amr';
  @Input() timeLen: number = 10;
  @Input() desc: string = '';

  @Output() onRecord: EventEmitter<any> = new EventEmitter()
  @Output() onError: EventEmitter<any> = new EventEmitter()

  @Input() isDefault: boolean = false;

  constructor(
    public core: CoreUtilService,
    public util: RunnerUtilService
  ) {

  }

  ngOnInit() {
    this.post['timeLen'] = this.timeLen;
    console.log(this.isUpload);
  }

  autoPlayEnd(){
    setTimeout(()=>{
      this.timeLen --;
      if(this.timeLen <= 0){
        this.starting = false;
        this.playIcon = 0;
        this.optStr = 'add';
        clearInterval(this.playTimer)
      }else{
        this.autoPlayEnd()
      }
    },1000)
  }
  @Input() src: string = '';
  playServiceId(){
    this.wx.ready(()=>{
      this.wx.downloadVoice({
        serverId: this.serverId,
        isShowProgressTips: 0,
        success: (res)=>{
          this.localId = res.localId;
          this.playVoice()
        }
      })
    })
  }
  @Input() localId: string = '';
  playVoice(){
    if(!this.starting){
      this.wx.ready(()=>{
        this.playAnimate()
        this.wx.playVoice({
          localId: this.localId
        })
        this.starting = true;
        this.wx.onVoicePlayEnd({
          success: ()=>{
            this.starting = false;
            this.playIcon = 0;
            this.optStr = 'add';
            clearInterval(this.playTimer)
          }
        })
      })
    }else{
      this.wx.ready(()=>{
        this.wx.pauseVoice();
        this.starting = false;
        this.playIcon = 0;
        this.optStr = 'add';
        clearInterval(this.playTimer)
      })
    }

  }
  xhr: any;
  playAmr() {
    let that = this;
    this.xhr = new XMLHttpRequest();
    this.xhr.open('GET', this.url);
    this.xhr.responseType = 'blob';
    this.xhr.onload =()=>{
      this.convertAmrBlobToWav(this.xhr['response'])
    };
    this.xhr.onerror = ()=>{
      this.onError.emit('资源并不存在');
    };
    this.xhr.send();
  }
  audio2: any;
  convertAmrBlobToWav(blob) {
    let that = this;
    this.readBlob(blob,function(data){
      var buffer = window['AMR']['toWAV'](data);
      var url = URL.createObjectURL(new Blob([buffer], { type: 'audio/x-wav' }));
      that.audio2 = new Audio(url);
      that.audio2.onloadedmetadata = that.audio2.onerror = function() {
        URL.revokeObjectURL(url);
      }
      that.audio2.play();
    });
  }
  playIcon: number = 0;
  optStr: string = 'add';
  playTimer: any;
  playAnimate(){
    this.playTimer = setInterval(()=>{
      if(this.playIcon >=3){
        this.playIcon --;
        this.optStr = 'del'
      }else if(this.playIcon <=0){
        this.playIcon = 3;
        this.optStr = 'add'
      }else{
        if(this.optStr == 'add'){
          this.playIcon ++;
        }else{
          this.playIcon --;
        }
      }

    },300)
  }

  readBlob(blob,callback) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = new Uint8Array(e['target']['result']);
      callback(data)
    };
    reader.readAsArrayBuffer(blob);
  }

  toHex(buffer) {
    var str = '';
    for (var i = 0; i < buffer.length; i++) {
      var s = buffer[i].toString(16);
      if (s.length == 1) {
        s = '0' + s;
      }
      str += s;
      if (i % 16 == 15) { // print 16 bytes per line
        str += '\n'
      } else if (i % 2 == 1) { // add a space seperator every two bytes.
        str += ' ';
      }
    }
    return str;
  }

  restart(){
    this.isUpload = true;
    this.starting = false;
    this.time = 0;
    this.playIcon = 0;
    this.optStr = 'add';
    clearInterval(this.playTimer)
    clearInterval(this.timer)
    this.wxStartRecord()
  }
   listening: boolean = false;
  startAudio(){
    if(this.starting){
      this.post['time'] = this.time;
      this.starting = false;
      this.audioBtnTitle = `点击试听(${this.time}秒)`;
      this.playIcon = 0;
      this.optStr = 'add';
      this.isUpload = false;
      clearInterval(this.playTimer)
      clearInterval(this.timer)
    }else{
      this.starting = true;
      this.timer = setInterval(()=>{
        if(this.time >= 60){
          this.startAudio()
        }
        this.time ++
        this.audioBtnTitle = '点击停止('+this.time+'秒 )';
      },1000)
    }
  }
  debug: boolean = false;
  wxStartRecord(){
    console.log('debug: startRecord runing');
    console.log(this.starting)
    if(!this.starting){
      if(this.debug){
        this.wx.startRecord();
        this.onVoiceRecordEnd();
        this.startAudio();
        this.playAnimate();
      }
      this.wx.ready(()=>{
        this.wx.startRecord();
        this.onVoiceRecordEnd();
        this.startAudio();
        this.playAnimate();
      })
    }else{
      if(this.debug){
        this.stopRecord();
        this.startAudio();
      }
      this.wx.ready(()=>{
        this.stopRecord();
        this.startAudio();
      })
    }
  }

  // localId: any;
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

  @Input() serverId: any;
  uploadVoice(){
    this.onRecord.emit({localId: this.localId,time: this.time})
  }

}
